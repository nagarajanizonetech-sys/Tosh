import asyncio
import sys

import structlog
from sqlalchemy import select, text
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.core.security import hash_password
from app.db import session as db_session
from app.db.base import Base
from app.modules.catalog.models import BodyRegionTemplate, ChargeCatalogItem
from app.modules.settings.models import FeeSetting
from app.modules.users.models import Doctor, User

logger = structlog.get_logger(__name__)


CATALOG_ITEMS = [
    {
        "display_id": "CHG-101",
        "name": "Triamcinolone (Kenacort) Steroid Injection",
        "category": "Injection",
        "price": 85000,
        "unit": "per dose",
        "department": "skin",
    },
    {
        "display_id": "CHG-102",
        "name": "Glutathione Skin Brightening Injection",
        "category": "Injection",
        "price": 250000,
        "unit": "per session",
        "department": "skin",
    },
    {
        "display_id": "CHG-103",
        "name": "Botox Botulinum Toxin Injection",
        "category": "Injection",
        "price": 400000,
        "unit": "per area",
        "department": "skin",
    },
    {
        "display_id": "CHG-104",
        "name": "Local Anaesthetic Lidocaine 2% Injection",
        "category": "Injection",
        "price": 25000,
        "unit": "per vial",
        "department": "all",
    },
    {
        "display_id": "CHG-105",
        "name": "Biotin / Hair Growth Peptide Injection",
        "category": "Injection",
        "price": 140000,
        "unit": "per dose",
        "department": "skin",
    },
    {
        "display_id": "CHG-201",
        "name": "Sterile Cotton Roll / Cotton Pack",
        "category": "Consumable",
        "price": 5000,
        "unit": "pack",
        "department": "all",
    },
    {
        "display_id": "CHG-202",
        "name": "Sterile Gauze & Surgical Dressing Pack",
        "category": "Consumable",
        "price": 12000,
        "unit": "set",
        "department": "all",
    },
    {
        "display_id": "CHG-203",
        "name": "Disposable Syringe & 30G Needle Pack",
        "category": "Consumable",
        "price": 6000,
        "unit": "set of 2",
        "department": "all",
    },
    {
        "display_id": "CHG-204",
        "name": "Micropore Surgical Tape & Bandage",
        "category": "Consumable",
        "price": 8000,
        "unit": "roll",
        "department": "all",
    },
    {
        "display_id": "CHG-205",
        "name": "Betadine Antiseptic Cleansing Solution",
        "category": "Consumable",
        "price": 10000,
        "unit": "application",
        "department": "all",
    },
    {
        "display_id": "CHG-206",
        "name": "Biopsy Punch Disposable Tool (3mm / 4mm)",
        "category": "Consumable",
        "price": 35000,
        "unit": "per piece",
        "department": "skin",
    },
    {
        "display_id": "CHG-207",
        "name": "Surgical Latex Gloves & Disposable Drapes",
        "category": "Consumable",
        "price": 9000,
        "unit": "pair",
        "department": "all",
    },
    {
        "display_id": "CHG-301",
        "name": "Chemical Peel (Salicylic / Glycolic Acid)",
        "category": "Procedure",
        "price": 180000,
        "unit": "full face",
        "department": "skin",
    },
    {
        "display_id": "CHG-302",
        "name": "Comedone / Acne Extraction Session",
        "category": "Procedure",
        "price": 85000,
        "unit": "per session",
        "department": "skin",
    },
    {
        "display_id": "CHG-303",
        "name": "Electrocautery Wart / Skin Tag Removal",
        "category": "Procedure",
        "price": 150000,
        "unit": "up to 5 lesions",
        "department": "skin",
    },
    {
        "display_id": "CHG-304",
        "name": "Cryotherapy (Liquid Nitrogen Spray)",
        "category": "Procedure",
        "price": 120000,
        "unit": "per lesion area",
        "department": "skin",
    },
    {
        "display_id": "CHG-305",
        "name": "Skin Punch Biopsy Procedure",
        "category": "Procedure",
        "price": 220000,
        "unit": "including specimen prep",
        "department": "skin",
    },
    {
        "display_id": "CHG-306",
        "name": "Dermabrasion / Hydrafacial Treatment",
        "category": "Procedure",
        "price": 280000,
        "unit": "per sitting",
        "department": "skin",
    },
    {
        "display_id": "CHG-307",
        "name": "Laser Skin Rejuvenation / Pigment Reduction",
        "category": "Procedure",
        "price": 350000,
        "unit": "per sitting",
        "department": "skin",
    },
]

BODY_REGION_TEMPLATES = [
    {
        "region": "Knee",
        "fields": [
            "Range of motion",
            "Stability (Lachman / Pivot / Collateral)",
            "Swelling / effusion",
            "Gait / weight bearing",
            "Joint line tenderness",
            "Patellofemoral tracking",
        ],
        "medications": [
            {
                "id": "knee-med-1",
                "medicineName": "Tab. Aceclofenac + Paracetamol",
                "strength": "100mg / 325mg",
                "dosage": "1 Tab",
                "route": "Oral",
                "frequency": "Twice daily (BD)",
                "duration": "5 Days",
                "instructions": "Take after meals (Pain & anti-inflammatory)",
            },
            {
                "id": "knee-med-2",
                "medicineName": "Tab. Pantoprazole",
                "strength": "40mg",
                "dosage": "1 Tab",
                "route": "Oral",
                "frequency": "Once daily (OD)",
                "duration": "5 Days",
                "instructions": "Take in morning on empty stomach",
            },
            {
                "id": "knee-med-3",
                "medicineName": "Tab. Thiocolchicoside",
                "strength": "4mg",
                "dosage": "1 Tab",
                "route": "Oral",
                "frequency": "Twice daily (BD)",
                "duration": "5 Days",
                "instructions": "Take after meals (Muscle relaxant)",
            },
        ],
    },
    {
        "region": "Shoulder",
        "fields": [
            "Range of motion (Abduction / Flexion / Rotation)",
            "Rotator cuff strength (Empty can / Hawkins)",
            "Tenderness / impingement",
            "Functional movement / overhead reach",
            "Biceps tendon stability",
            "Scapular rhythm",
        ],
        "medications": [
            {
                "id": "shoulder-med-1",
                "medicineName": "Tab. Etoricoxib",
                "strength": "90mg",
                "dosage": "1 Tab",
                "route": "Oral",
                "frequency": "Once daily (OD)",
                "duration": "5 Days",
                "instructions": "Take after breakfast (Anti-inflammatory)",
            },
            {
                "id": "shoulder-med-2",
                "medicineName": "Tab. Rabeprazole",
                "strength": "20mg",
                "dosage": "1 Tab",
                "route": "Oral",
                "frequency": "Once daily (OD)",
                "duration": "5 Days",
                "instructions": "Take 30 mins before breakfast",
            },
        ],
    },
    {
        "region": "Spine",
        "fields": [
            "Region / level (Cervical / Lumbar / Dorsal)",
            "Range of motion (Flexion / Extension / Lateral)",
            "Neurological examination (SLR / Motor / Sensory / Reflexes)",
            "Paraspinal tenderness / spasm",
            "Radicular symptoms / Sciatica",
            "Posture / gait",
        ],
        "medications": [
            {
                "id": "spine-med-1",
                "medicineName": "Tab. Aceclofenac + Paracetamol + Chlorzoxazone",
                "strength": "100 / 325 / 250mg",
                "dosage": "1 Tab",
                "route": "Oral",
                "frequency": "Twice daily (BD)",
                "duration": "7 Days",
                "instructions": "Take after meals (Spinal pain & relaxant)",
            },
            {
                "id": "spine-med-2",
                "medicineName": "Tab. Pantoprazole",
                "strength": "40mg",
                "dosage": "1 Tab",
                "route": "Oral",
                "frequency": "Once daily (OD)",
                "duration": "7 Days",
                "instructions": "Take in morning on empty stomach",
            },
        ],
    },
    {
        "region": "Hip",
        "fields": [
            "Range of motion (Flexion / Rotation / Abduction)",
            "Gait / Trendelenburg test",
            "Tenderness / groin pain",
            "Functional movement / squatting",
            "Leg length discrepancy",
            "Trochanteric bursitis assessment",
        ],
        "medications": [
            {
                "id": "hip-med-1",
                "medicineName": "Tab. Etodolac + Paracetamol",
                "strength": "400mg / 325mg",
                "dosage": "1 Tab",
                "route": "Oral",
                "frequency": "Twice daily (BD)",
                "duration": "7 Days",
                "instructions": "Take after meals (Anti-inflammatory)",
            },
        ],
    },
    {
        "region": "Elbow",
        "fields": [
            "Range of motion (Flexion / Extension / Pronation / Supination)",
            "Epicondylar tenderness (Tennis / Golfer elbow test)",
            "Stability (Collateral ligaments)",
            "Grip strength",
            "Ulnar nerve subluxation / Tinel sign",
        ],
        "medications": [
            {
                "id": "elbow-med-1",
                "medicineName": "Tab. Aceclofenac + Serratiopeptidase",
                "strength": "100mg / 15mg",
                "dosage": "1 Tab",
                "route": "Oral",
                "frequency": "Twice daily (BD)",
                "duration": "5 Days",
                "instructions": "Take after food for tendinitis & swelling",
            },
        ],
    },
    {
        "region": "Wrist & Hand",
        "fields": [
            "Range of motion (Dorsiflexion / Palmar flexion / Ulnar deviation)",
            "Grip strength & pinch test",
            "Phalen & Tinel test (Carpal tunnel)",
            "Finkelstein test (De Quervain)",
            "Swelling / effusion / deformity",
        ],
        "medications": [
            {
                "id": "wrist-med-1",
                "medicineName": "Tab. Aceclofenac",
                "strength": "100mg",
                "dosage": "1 Tab",
                "route": "Oral",
                "frequency": "Twice daily (BD)",
                "duration": "5 Days",
                "instructions": "Take after meals",
            },
        ],
    },
    {
        "region": "Ankle & Foot",
        "fields": [
            "Range of motion (Dorsiflexion / Plantar flexion / Inversion / Eversion)",
            "Anterior drawer & Talar tilt (Ligament stability)",
            "Malleolar / Achilles / Plantar fascia tenderness",
            "Swelling / ecchymosis / weight bearing ability",
            "Arch examination (Pes planus / cavus)",
        ],
        "medications": [
            {
                "id": "ankle-med-1",
                "medicineName": "Tab. Etoricoxib",
                "strength": "90mg",
                "dosage": "1 Tab",
                "route": "Oral",
                "frequency": "Once daily (OD)",
                "duration": "5 Days",
                "instructions": "Take after breakfast for acute ligament sprain",
            },
        ],
    },
    {
        "region": "Other / General",
        "fields": [
            "Anatomical location",
            "Range of motion / mobility",
            "Deformity / alignment",
            "Neurovascular status",
            "Relevant orthopaedic findings",
        ],
        "medications": [
            {
                "id": "other-med-1",
                "medicineName": "Tab. Aceclofenac + Paracetamol",
                "strength": "100mg / 325mg",
                "dosage": "1 Tab",
                "route": "Oral",
                "frequency": "Twice daily (BD)",
                "duration": "5 Days",
                "instructions": "Take after meals (Analgesic & anti-inflammatory)",
            },
        ],
    },
]


async def seed_database(session: AsyncSession | None = None, clean: bool = False) -> None:
    print("[SEED] Starting database seeding (Staff accounts and master catalog)...")
    if session is not None:
        await _seed_with_session(session, clean=clean)
    else:
        async with db_session.async_session_factory() as s:
            await _seed_with_session(s, clean=clean)


async def _seed_with_session(session: AsyncSession, clean: bool = False) -> None:
    # 1. Clean existing records if requested
    if clean:
        try:
            bind = session.bind
            is_sqlite = (
                (bind.dialect.name == "sqlite")
                if bind
                else settings.DATABASE_URL.startswith("sqlite")
            )
            if is_sqlite:
                for table in reversed(Base.metadata.sorted_tables):
                    try:
                        await session.execute(text(f'DELETE FROM "{table.name}";'))
                    except SQLAlchemyError as exc:
                        logger.debug("seed_table_delete_skipped", table=table.name, error=str(exc))
            else:
                tbls = [f'"{table.name}"' for table in Base.metadata.sorted_tables]
                try:
                    await session.execute(text(f"TRUNCATE TABLE {', '.join(tbls)} CASCADE;"))
                except SQLAlchemyError as exc:
                    logger.debug("seed_table_truncate_skipped", error=str(exc))
            await session.flush()
        except SQLAlchemyError as exc:
            logger.debug("seed_clean_skipped", error=str(exc))

    # 2. Staff Users & Doctors
    print("Seeding staff accounts and doctors...")
    initial_pw = "123456789"
    reception_pw = settings.RECEPTION_INITIAL_PASSWORD or initial_pw
    skin_pw = settings.SKIN_INITIAL_PASSWORD or initial_pw
    ortho_pw = settings.ORTHO_INITIAL_PASSWORD or initial_pw

    res_users = await session.execute(
        select(User).where(
            User.email.in_(["reception@gmail.com", "skin@gmail.com", "ortho@gmail.com"])
        )
    )
    existing_users = {u.email: u for u in res_users.scalars().all()}

    reception_user = existing_users.get("reception@gmail.com")
    if reception_user:
        reception_user.password_hash = hash_password(reception_pw)
        reception_user.must_change_password = False
    else:
        reception_user = User(
            email="reception@gmail.com",
            password_hash=hash_password(reception_pw),
            role="reception",
            display_name="Reception Desk",
            department=None,
            is_active=True,
            must_change_password=False,
        )
        session.add(reception_user)

    skin_user = existing_users.get("skin@gmail.com")
    if skin_user:
        skin_user.password_hash = hash_password(skin_pw)
        skin_user.must_change_password = False
    else:
        skin_user = User(
            email="skin@gmail.com",
            password_hash=hash_password(skin_pw),
            role="skin",
            display_name="Dr. Sangamitra",
            department="skin",
            is_active=True,
            must_change_password=False,
        )
        session.add(skin_user)

    ortho_user = existing_users.get("ortho@gmail.com")
    if ortho_user:
        ortho_user.password_hash = hash_password(ortho_pw)
        ortho_user.must_change_password = False
    else:
        ortho_user = User(
            email="ortho@gmail.com",
            password_hash=hash_password(ortho_pw),
            role="orthopaedics",
            display_name="Dr. Sundarprakash",
            department="orthopaedics",
            is_active=True,
            must_change_password=False,
        )
        session.add(ortho_user)

    await session.flush()

    res_docs = await session.execute(
        select(Doctor).where(Doctor.department.in_(["skin", "orthopaedics"]))
    )
    existing_docs = {d.department: d for d in res_docs.scalars().all()}

    doc_skin = existing_docs.get("skin")
    if not doc_skin:
        doc_skin = Doctor(
            user_id=skin_user.id,
            display_name="Dr. Sangamitra",
            department="skin",
        )
        session.add(doc_skin)

    doc_ortho = existing_docs.get("orthopaedics")
    if not doc_ortho:
        doc_ortho = Doctor(
            user_id=ortho_user.id,
            display_name="Dr. Sundarprakash",
            department="orthopaedics",
        )
        session.add(doc_ortho)

    await session.flush()

    # 3. Fee Settings
    print("Seeding fee settings...")
    res_fees = await session.execute(select(FeeSetting))
    existing_fees = {f.department: f for f in res_fees.scalars().all()}
    if "skin" not in existing_fees:
        session.add(FeeSetting(department="skin", amount=70000, currency="INR"))
    if "orthopaedics" not in existing_fees:
        session.add(FeeSetting(department="orthopaedics", amount=90000, currency="INR"))

    # 4. Charge Catalog
    print("Seeding charge catalog...")
    res_cat = await session.execute(select(ChargeCatalogItem.display_id))
    existing_cat = set(res_cat.scalars().all())
    for item in CATALOG_ITEMS:
        if item["display_id"] not in existing_cat:
            session.add(ChargeCatalogItem(**item))

    # 5. Body Region Templates
    print("Seeding body region templates...")
    res_tmpl = await session.execute(select(BodyRegionTemplate.region))
    existing_tmpl = set(res_tmpl.scalars().all())
    for tmpl in BODY_REGION_TEMPLATES:
        if tmpl["region"] not in existing_tmpl:
            session.add(BodyRegionTemplate(**tmpl))

    await session.commit()
    print(
        "[SUCCESS] Database seeding successfully finished! Staff credentials and master catalog initialized."
    )


if __name__ == "__main__":
    clean_flag = "--clean" in sys.argv
    asyncio.run(seed_database(clean=clean_flag))
