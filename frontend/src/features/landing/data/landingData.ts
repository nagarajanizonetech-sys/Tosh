import type { ClinicalService, Service3DItem, OrbitalReviewItem, StreamReviewItem, HomeTestimonialItem } from "../types";

export const clinic = {
  phone: "+91 80480 35978",
  email: "info@toshfoundation.in",
  address:
    "C88, 10th Cross Street, West Thillai Nagar, Tennur, Tiruchirappalli, Tamil Nadu 620018, India",
  site: "https://www.toshfoundation.in",
  map: "https://www.google.com/maps/search/?api=1&query=C88%2C%2010th%20Cross%20Street%2C%20West%20Thillai%20Nagar%2C%20Tennur%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620018",
};
export const art = {
  ortho: "/images/ortho-art.webp",
  skin: "/images/skin-health.webp",
};

export const CLINICAL_SERVICES: ClinicalService[] = [
  {
    id: "prp-joints",
    category: "ortho",
    specialty: "Orthopaedics",
    badge: "Regenerative Medicine",
    title: "PRP for Joints & Ligaments",
    doctor: "Dr. M. Sundarprakash",
    summary:
      "Platelet-Rich Plasma therapy harnessing autologous growth factors to accelerate natural healing, reduce chronic inflammation, and protect cartilage in knees, shoulders, and ligaments.",
    highlights: [
      "Concentrated natural growth factors",
      "Day-care joint preservation",
      "Evidence-backed relief for cartilage wear",
    ],
    url: `${clinic.site}/services/prp-for-joints-and-ligaments/74`,
  },
  {
    id: "knee-replacement",
    category: "ortho",
    specialty: "Orthopaedics",
    badge: "Joint Replacement",
    title: "Total & Partial Knee Replacement",
    doctor: "Dr. M. Sundarprakash",
    summary:
      "Precision primary, unicondylar, and revision knee arthroplasty designed to relieve debilitating arthritis, restore normal joint kinematics, and accelerate mobility recovery.",
    highlights: [
      "Advanced implant alignment",
      "Unicondylar joint-sparing options",
      "Rapid recovery mobilization protocol",
    ],
    url: `${clinic.site}/services/knee-replacement/70`,
  },
  {
    id: "arthroscopy",
    category: "ortho",
    specialty: "Orthopaedics",
    badge: "Keyhole Surgery",
    title: "Arthroscopic Knee & Shoulder Surgery",
    doctor: "Dr. M. Sundarprakash",
    summary:
      "Minimally invasive keyhole surgical repair for meniscus tears, ACL/PCL reconstructions, shoulder rotator cuff repairs, and cartilage restoration with minimal tissue disruption.",
    highlights: [
      "Tiny keyhole incisions",
      "Minimal tissue trauma & quick discharge",
      "High-definition intra-articular precision",
    ],
    url: `${clinic.site}/services/arthroscopic-surgery/72`,
  },
  {
    id: "hip-shoulder",
    category: "ortho",
    specialty: "Orthopaedics",
    badge: "Joint Arthroplasty",
    title: "Hip & Shoulder Joint Replacement",
    doctor: "Dr. M. Sundarprakash",
    summary:
      "Comprehensive surgical reconstruction for advanced hip arthritis, avascular necrosis, shoulder trauma, and rotator cuff arthropathy tailored to individual bone architecture.",
    highlights: [
      "Restores pain-free range of motion",
      "Biomechanical joint stabilization",
      "Structured post-op physical rehabilitation",
    ],
    url: `${clinic.site}/services/tag/hip-joint-replacement/1`,
  },
  {
    id: "trauma-pelvic",
    category: "ortho",
    specialty: "Orthopaedics",
    badge: "Trauma Surgery",
    title: "Fracture Management & Pelvic Trauma",
    doctor: "Dr. M. Sundarprakash",
    summary:
      "Specialized anatomical internal fixation of complex fractures, acetabular and pelvic ring trauma, sports injury damage, and non-healing bone unions.",
    highlights: [
      "Rigid anatomical fixation",
      "Specialized pelvic ring reconstruction",
      "Comprehensive limb salvage care",
    ],
    url: `${clinic.site}/services/pelvic-fractures/69`,
  },
  {
    id: "paediatric-soft-tissue",
    category: "ortho",
    specialty: "Orthopaedics",
    badge: "Paediatric & Hand Care",
    title: "CTEV Casting, Ganglion & Trigger Finger",
    doctor: "Dr. M. Sundarprakash",
    summary:
      "Ponseti serial casting for congenital clubfoot (CTEV), cerebral palsy mobility assessment, alongside day-care release for trigger fingers and ganglion cysts.",
    highlights: [
      "Ponseti serial casting for clubfoot",
      "Day-care trigger finger release",
      "Pediatric mobility & posture guidance",
    ],
    url: `${clinic.site}/services/ctev-casting/67`,
  },
  {
    id: "psoriasis-eczema",
    category: "skin",
    specialty: "Dermatology & skin care",
    badge: "Chronic Skin Care",
    title: "Psoriasis & Chronic Eczema Care",
    doctor: "Dr. S. Sangamitra",
    summary:
      "Dermatologist-led systemic, topical, and biological therapy protocols designed to calm immune-mediated inflammation, heal skin barrier, and prevent chronic flare-ups.",
    highlights: [
      "Targeted anti-inflammatory regimens",
      "Skin barrier restoration protocols",
      "Long-term flare prevention strategy",
    ],
    url: `${clinic.site}/services/tag/psoriasis-treatment/1`,
  },
  {
    id: "vitiligo-pigmentation",
    category: "skin",
    specialty: "Dermatology & skin care",
    badge: "Pigmentary Medicine",
    title: "Vitiligo & Melasma Treatments",
    doctor: "Dr. S. Sangamitra",
    summary:
      "Evidence-backed repigmentation therapies, topical immunomodulators, and clinical protocols for vitiligo, melasma, hyperpigmentation, and sun damage.",
    highlights: [
      "Active melanocyte stimulation",
      "Stabilization of spreading patches",
      "Customized dermatological formulations",
    ],
    url: `${clinic.site}/services/tag/vitiligo-treatment/1`,
  },
  {
    id: "infections-bullous",
    category: "skin",
    specialty: "Dermatology & skin care",
    badge: "Infection & Allergy",
    title: "Fungal Infections, Allergies & Bullous Disorders",
    doctor: "Dr. S. Sangamitra",
    summary:
      "Diagnostic evaluation and targeted antimicrobials for stubborn fungal tinea, contact dermatitis, acute urticaria, and autoimmune blistering skin conditions.",
    highlights: [
      "Accurate microscopic diagnosis",
      "Systemic eradication of resistant fungi",
      "Compassionate autoimmune management",
    ],
    url: `${clinic.site}/services/tag/fungal-infection-treatment/1`,
  },
  {
    id: "fractional-co2",
    category: "cosmetology",
    specialty: "Dermatology & skin care",
    badge: "Laser Technology",
    title: "Fractional CO₂ Laser Resurfacing",
    doctor: "Dr. S. Sangamitra",
    summary:
      "Gold-standard ablative fractional laser micro-columns triggering deep collagen synthesis for pitted acne scar revision, enlarged pores, and skin texture smoothening.",
    highlights: [
      "Deep dermal collagen remodeling",
      "Clinically proven acne scar revision",
      "Safe parameters tailored for Indian skin",
    ],
    url: `${clinic.site}/services/tag/fractional-co2-laser-treatment/1`,
  },
  {
    id: "laser-hair-removal",
    category: "cosmetology",
    specialty: "Dermatology & skin care",
    badge: "Medical Laser",
    title: "Advanced Laser Hair Reduction",
    doctor: "Dr. S. Sangamitra",
    summary:
      "Medical-grade laser technology delivering precise hair follicle destruction with integrated epidermal cooling for painless, permanent hair density reduction.",
    highlights: [
      "US-FDA certified laser wavelengths",
      "Integrated skin contact cooling",
      "Safe for face, underarms & full body",
    ],
    url: `${clinic.site}/services/tag/laser-hair-removal/1`,
  },
  {
    id: "nd-yag-tattoo",
    category: "cosmetology",
    specialty: "Dermatology & skin care",
    badge: "Q-Switched Laser",
    title: "Q-Switched Nd:YAG Laser & Tattoo Removal",
    doctor: "Dr. S. Sangamitra",
    summary:
      "Photo-acoustic laser fragmentation of unwanted tattoo pigments, freckles, stubborn dark spots, and melasma without scarring or epidermal damage.",
    highlights: [
      "High-peak photo-acoustic energy",
      "Safe ink clearance for multi-color tattoos",
      "Zero scar risk for normal skin",
    ],
    url: `${clinic.site}/services/tag/nd-yag-laser-treatment/1`,
  },
  {
    id: "hydrafacial-aesthetic",
    category: "cosmetology",
    specialty: "Dermatology & skin care",
    badge: "Medi-Facial",
    title: "Hydrafacial, Medi-Facials & Chemical Peels",
    doctor: "Dr. S. Sangamitra",
    summary:
      "Multi-stage vortex extraction, deep pores cleansing, medical exfoliation, and antioxidant hydration infusions formulated for instant luminosity and barrier health.",
    highlights: [
      "Medical vortex pore vacuuming",
      "Antioxidant & hyaluronic acid infusions",
      "Instant zero-downtime glow",
    ],
    url: `${clinic.site}/services/tag/hydrafacial-treatment/1`,
  },
  {
    id: "rf-warts-earlobe",
    category: "cosmetology",
    specialty: "Dermatology & skin care",
    badge: "Dermatosurgery",
    title: "RF Wart Removal & Earlobe Repair",
    doctor: "Dr. S. Sangamitra",
    summary:
      "Quick, scarless radiofrequency ablation for skin tags and warts, accompanied by sutureless and micro-suture repair of elongated or split earlobe piercings.",
    highlights: [
      "Painless radiofrequency cautery",
      "Same-day cosmetic earlobe repair",
      "Minimal to zero recovery downtime",
    ],
    url: `${clinic.site}/services/tag/wart-skin-tag-removal-treatment/1`,
  },
];


export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "The story", path: "/story" },
  { label: "Specialties", path: "/specialties" },
  { label: "Services", path: "/services" },
  { label: "Doctors", path: "/doctors" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
] as const;

export const officialGallery = [
  "https://fpimages.withfloats.com/actual/6a57547922169a67290dcaf3.jpeg",
  "https://fpimages.withfloats.com/actual/6a57546ab24b2ebca02bfe39.jpeg",
  "https://fpimages.withfloats.com/actual/6a57543b266f2fe0500d29fc.jpeg",
  "https://fpimages.withfloats.com/actual/6a575419b24b2ebca02bfe2e.jpeg",
  "https://fpimages.withfloats.com/actual/6a5750656e2025d49323886a.jpeg",
  "https://fpimages.withfloats.com/actual/6a57505c2f26a7b7b7401f03.jpeg",
];

export const SOCIAL_LINKS = [
  {
    label: "WhatsApp",
    short: "WA",
    href: "https://api.whatsapp.com/send?text=https://www.toshfoundation.in",
  },
  {
    label: "Facebook",
    short: "f",
    href: "https://www.facebook.com/sharer/sharer.php?u=https://www.toshfoundation.in",
  },
  {
    label: "X / Twitter",
    short: "X",
    href: "https://twitter.com/intent/tweet?text=Check+out+TOSH+Foundation&url=https://www.toshfoundation.in",
  },
  {
    label: "LinkedIn",
    short: "in",
    href: "https://www.linkedin.com/cws/share?url=https://www.toshfoundation.in",
  },
  {
    label: "Pinterest",
    short: "P",
    href: "https://pinterest.com/pin/create/button/?url=https://www.toshfoundation.in",
  },
];

export const officialAdditionalServices = [
  {
    id: "partial-knee-replacement",
    category: "ortho",
    badge: "Joint Replacement",
    title: "Partial Knee Replacement",
    summary:
      "Officially listed by TOSH Foundation in the Orthopaedic service catalogue.",
    highlights: [
      "Orthopaedic service catalogue listing",
      "Consultation-led treatment planning",
    ],
  },
  {
    id: "ctev-casting",
    category: "ortho",
    badge: "Paediatric Orthopaedics",
    title: "CTEV Casting",
    summary:
      "Officially listed by TOSH Foundation in the Orthopaedic service catalogue.",
    highlights: [
      "Orthopaedic service catalogue listing",
      "Specialist assessment required",
    ],
  },
  {
    id: "revision-total-knee-replacement",
    category: "ortho",
    badge: "Joint Replacement",
    title: "Revision Total Knee Replacement",
    summary:
      "Officially listed by TOSH Foundation in the Orthopaedic service catalogue.",
    highlights: [
      "Orthopaedic service catalogue listing",
      "Individual clinical assessment",
    ],
  },
  {
    id: "cerebral-palsy",
    category: "ortho",
    badge: "Orthopaedics",
    title: "Cerebral Palsy",
    summary:
      "Officially listed by TOSH Foundation in the Orthopaedic service catalogue.",
    highlights: [
      "Orthopaedic service catalogue listing",
      "Personalized care discussion",
    ],
  },
  {
    id: "unicompartmental-knee-replacement",
    category: "ortho",
    badge: "Joint Replacement",
    title: "Unicompartmental Knee Replacement",
    summary:
      "Officially listed by TOSH Foundation in the Orthopaedic service catalogue.",
    highlights: [
      "Orthopaedic service catalogue listing",
      "Consultation-led treatment planning",
    ],
  },
  {
    id: "revision-total-hip-replacement",
    category: "ortho",
    badge: "Joint Replacement",
    title: "Revision Total Hip Replacement",
    summary:
      "Officially listed by TOSH Foundation in the Orthopaedic service catalogue.",
    highlights: [
      "Orthopaedic service catalogue listing",
      "Individual clinical assessment",
    ],
  },
];

export const officialMission = [
  "To provide high-quality, evidence-based Orthopaedic and Dermatology care that is accessible and affordable.",
  "To prioritize patient well-being through personalized treatment plans and compassionate care.",
  "To utilize modern technology and advanced treatment modalities for optimal clinical outcomes.",
  "To promote preventive healthcare and community awareness through education, screening programs, and outreach initiatives.",
  "To continuously improve through learning, research, and adoption of best medical practices.",
  "To build a healthcare institution that patients trust, employees are proud to serve, and the community values for generations.",
];

export const officialCatalogueServices = [
  {
    id: "emergency-orthopaedic-care",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Emergency Orthopaedic Care",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "joint-replacement-surgery",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Joint Replacement Surgery",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "joint-preservation-procedures",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Joint Preservation Procedures",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "joint-injections",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Joint Injections",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "hip-replacement",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Hip Replacement",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "herniated-disc-treatment",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Herniated Disc Treatment",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "hand-and-wrist-surgery",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Hand and Wrist Surgery",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "hammer-toe-surgery",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Hammer Toe Surgery",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "fracture-treatment",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Fracture Treatment",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "foot-and-ankle-surgery",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Foot and Ankle Surgery",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "elbow-surgery",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Elbow Surgery",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "casting-and-splinting",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Casting and Splinting",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "cartilage-restoration",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Cartilage Restoration",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "carpal-tunnel-release",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Carpal Tunnel Release",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "bone-density-testing",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Bone Density Testing",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "back-pain-management",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Back Pain Management",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "arthritis-treatment",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Arthritis Treatment",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "sports-injuries",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Sports Injuries",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "tendon-repair",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Tendon Repair",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "trauma-surgery",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Trauma Surgery",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "trigger-finger-release",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Trigger Finger Release",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "vertebroplasty",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Vertebroplasty",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "orthopedic-rehabilitation",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Orthopedic Rehabilitation",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "orthopedic-oncology",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Orthopedic Oncology",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "orthopedic-imaging",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Orthopedic Imaging",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "orthopedic-bracing",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Orthopedic Bracing",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "ortho-urgent-care",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Ortho Urgent Care",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "nerve-compression-treatment",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Nerve Compression Treatment",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "limb-deformity-correction",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Limb Deformity Correction",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "kyphoplasty",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Kyphoplasty",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "cerebral-palsy-care",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Cerebral Palsy",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "prp-knee-shoulder",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "PRP for Knee and Shoulder",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "ganglion-cyst-removal",
    category: "ortho",
    badge: "ORTHOPAEDIC CARE",
    title: "Ganglion Cyst Removal",
    summary:
      "This service is listed by TOSH Foundation under its Orthopaedic catalogue. A specialist assessment is used to understand the condition, symptoms, imaging and functional needs before treatment is planned.",
    highlights: [
      "Official TOSH catalogue entry",
      "Specialist assessment before treatment",
      "Individual care planning",
    ],
  },
  {
    id: "botox-injection",
    category: "cosmetology",
    badge: "AESTHETIC DERMATOLOGY",
    title: "Botox Injection",
    summary:
      "This service is listed by TOSH Foundation under its Cosmetology catalogue. The clinic evaluates the concern and skin context before recommending an appropriate treatment pathway.",
    highlights: [
      "Official TOSH catalogue entry",
      "Treatment suitability review",
      "Individual care planning",
    ],
  },
  {
    id: "chemical-peels",
    category: "cosmetology",
    badge: "AESTHETIC DERMATOLOGY",
    title: "Chemical Peels",
    summary:
      "This service is listed by TOSH Foundation under its Cosmetology catalogue. The clinic evaluates the concern and skin context before recommending an appropriate treatment pathway.",
    highlights: [
      "Official TOSH catalogue entry",
      "Treatment suitability review",
      "Individual care planning",
    ],
  },
  {
    id: "mnrf-treatment",
    category: "cosmetology",
    badge: "AESTHETIC DERMATOLOGY",
    title: "MNRF Treatment",
    summary:
      "This service is listed by TOSH Foundation under its Cosmetology catalogue. The clinic evaluates the concern and skin context before recommending an appropriate treatment pathway.",
    highlights: [
      "Official TOSH catalogue entry",
      "Treatment suitability review",
      "Individual care planning",
    ],
  },
  {
    id: "acne-scar-treatment",
    category: "cosmetology",
    badge: "AESTHETIC DERMATOLOGY",
    title: "Acne Scar Treatment",
    summary:
      "This service is listed by TOSH Foundation under its Cosmetology catalogue. The clinic evaluates the concern and skin context before recommending an appropriate treatment pathway.",
    highlights: [
      "Official TOSH catalogue entry",
      "Treatment suitability review",
      "Individual care planning",
    ],
  },
  {
    id: "anti-ageing-treatment",
    category: "cosmetology",
    badge: "AESTHETIC DERMATOLOGY",
    title: "Anti Ageing Treatment",
    summary:
      "This service is listed by TOSH Foundation under its Cosmetology catalogue. The clinic evaluates the concern and skin context before recommending an appropriate treatment pathway.",
    highlights: [
      "Official TOSH catalogue entry",
      "Treatment suitability review",
      "Individual care planning",
    ],
  },
  {
    id: "corn-callus-removal",
    category: "cosmetology",
    badge: "AESTHETIC DERMATOLOGY",
    title: "Corn & Callus Removal",
    summary:
      "This service is listed by TOSH Foundation under its Cosmetology catalogue. The clinic evaluates the concern and skin context before recommending an appropriate treatment pathway.",
    highlights: [
      "Official TOSH catalogue entry",
      "Treatment suitability review",
      "Individual care planning",
    ],
  },
  {
    id: "cyst-removal",
    category: "cosmetology",
    badge: "AESTHETIC DERMATOLOGY",
    title: "Cyst Removal",
    summary:
      "This service is listed by TOSH Foundation under its Cosmetology catalogue. The clinic evaluates the concern and skin context before recommending an appropriate treatment pathway.",
    highlights: [
      "Official TOSH catalogue entry",
      "Treatment suitability review",
      "Individual care planning",
    ],
  },
  {
    id: "earlobe-repair",
    category: "cosmetology",
    badge: "AESTHETIC DERMATOLOGY",
    title: "Earlobe Repair",
    summary:
      "This service is listed by TOSH Foundation under its Cosmetology catalogue. The clinic evaluates the concern and skin context before recommending an appropriate treatment pathway.",
    highlights: [
      "Official TOSH catalogue entry",
      "Treatment suitability review",
      "Individual care planning",
    ],
  },
  {
    id: "fractional-co2-laser",
    category: "cosmetology",
    badge: "AESTHETIC DERMATOLOGY",
    title: "Fractional CO2 Laser",
    summary:
      "This service is listed by TOSH Foundation under its Cosmetology catalogue. The clinic evaluates the concern and skin context before recommending an appropriate treatment pathway.",
    highlights: [
      "Official TOSH catalogue entry",
      "Treatment suitability review",
      "Individual care planning",
    ],
  },
  {
    id: "laser-hair-removal",
    category: "cosmetology",
    badge: "AESTHETIC DERMATOLOGY",
    title: "Laser Hair Removal",
    summary:
      "This service is listed by TOSH Foundation under its Cosmetology catalogue. The clinic evaluates the concern and skin context before recommending an appropriate treatment pathway.",
    highlights: [
      "Official TOSH catalogue entry",
      "Treatment suitability review",
      "Individual care planning",
    ],
  },
  {
    id: "medifacial-mole-removal",
    category: "cosmetology",
    badge: "AESTHETIC DERMATOLOGY",
    title: "Medifacial Mole Removal",
    summary:
      "This service is listed by TOSH Foundation under its Cosmetology catalogue. The clinic evaluates the concern and skin context before recommending an appropriate treatment pathway.",
    highlights: [
      "Official TOSH catalogue entry",
      "Treatment suitability review",
      "Individual care planning",
    ],
  },
  {
    id: "nd-yag-laser",
    category: "cosmetology",
    badge: "AESTHETIC DERMATOLOGY",
    title: "Nd-YAG Laser",
    summary:
      "This service is listed by TOSH Foundation under its Cosmetology catalogue. The clinic evaluates the concern and skin context before recommending an appropriate treatment pathway.",
    highlights: [
      "Official TOSH catalogue entry",
      "Treatment suitability review",
      "Individual care planning",
    ],
  },
  {
    id: "pigmentation-treatment",
    category: "cosmetology",
    badge: "AESTHETIC DERMATOLOGY",
    title: "Pigmentation Treatment",
    summary:
      "This service is listed by TOSH Foundation under its Cosmetology catalogue. The clinic evaluates the concern and skin context before recommending an appropriate treatment pathway.",
    highlights: [
      "Official TOSH catalogue entry",
      "Treatment suitability review",
      "Individual care planning",
    ],
  },
  {
    id: "tattoo-removal",
    category: "cosmetology",
    badge: "AESTHETIC DERMATOLOGY",
    title: "Tattoo Removal",
    summary:
      "This service is listed by TOSH Foundation under its Cosmetology catalogue. The clinic evaluates the concern and skin context before recommending an appropriate treatment pathway.",
    highlights: [
      "Official TOSH catalogue entry",
      "Treatment suitability review",
      "Individual care planning",
    ],
  },
  {
    id: "wart-skin-tag-removal",
    category: "cosmetology",
    badge: "AESTHETIC DERMATOLOGY",
    title: "Wart & Skin Tag Removal",
    summary:
      "This service is listed by TOSH Foundation under its Cosmetology catalogue. The clinic evaluates the concern and skin context before recommending an appropriate treatment pathway.",
    highlights: [
      "Official TOSH catalogue entry",
      "Treatment suitability review",
      "Individual care planning",
    ],
  },
  {
    id: "hydrafacial",
    category: "cosmetology",
    badge: "AESTHETIC DERMATOLOGY",
    title: "Hydrafacial",
    summary:
      "This service is listed by TOSH Foundation under its Cosmetology catalogue. The clinic evaluates the concern and skin context before recommending an appropriate treatment pathway.",
    highlights: [
      "Official TOSH catalogue entry",
      "Treatment suitability review",
      "Individual care planning",
    ],
  },
  {
    id: "bullous-disorder",
    category: "skin",
    badge: "DERMATOLOGY",
    title: "Bullous Disorder",
    summary:
      "This service is listed by TOSH Foundation under its Skin catalogue. Assessment is tailored to the patient’s skin concern, history and clinical needs before a treatment plan is discussed.",
    highlights: [
      "Official TOSH catalogue entry",
      "Clinical skin assessment",
      "Individual care planning",
    ],
  },
  {
    id: "eczema",
    category: "skin",
    badge: "DERMATOLOGY",
    title: "Eczema",
    summary:
      "This service is listed by TOSH Foundation under its Skin catalogue. Assessment is tailored to the patient’s skin concern, history and clinical needs before a treatment plan is discussed.",
    highlights: [
      "Official TOSH catalogue entry",
      "Clinical skin assessment",
      "Individual care planning",
    ],
  },
  {
    id: "fungal-infection",
    category: "skin",
    badge: "DERMATOLOGY",
    title: "Fungal Infection",
    summary:
      "This service is listed by TOSH Foundation under its Skin catalogue. Assessment is tailored to the patient’s skin concern, history and clinical needs before a treatment plan is discussed.",
    highlights: [
      "Official TOSH catalogue entry",
      "Clinical skin assessment",
      "Individual care planning",
    ],
  },
  {
    id: "psoriasis",
    category: "skin",
    badge: "DERMATOLOGY",
    title: "Psoriasis",
    summary:
      "This service is listed by TOSH Foundation under its Skin catalogue. Assessment is tailored to the patient’s skin concern, history and clinical needs before a treatment plan is discussed.",
    highlights: [
      "Official TOSH catalogue entry",
      "Clinical skin assessment",
      "Individual care planning",
    ],
  },
  {
    id: "skin-infection",
    category: "skin",
    badge: "DERMATOLOGY",
    title: "Skin Infection",
    summary:
      "This service is listed by TOSH Foundation under its Skin catalogue. Assessment is tailored to the patient’s skin concern, history and clinical needs before a treatment plan is discussed.",
    highlights: [
      "Official TOSH catalogue entry",
      "Clinical skin assessment",
      "Individual care planning",
    ],
  },
  {
    id: "vitiligo-treatment",
    category: "skin",
    badge: "DERMATOLOGY",
    title: "Vitiligo Treatment",
    summary:
      "This service is listed by TOSH Foundation under its Skin catalogue. Assessment is tailored to the patient’s skin concern, history and clinical needs before a treatment plan is discussed.",
    highlights: [
      "Official TOSH catalogue entry",
      "Clinical skin assessment",
      "Individual care planning",
    ],
  },
  {
    id: "skin-care",
    category: "skin",
    badge: "DERMATOLOGY",
    title: "Skin Care",
    summary:
      "This service is listed by TOSH Foundation under its Skin catalogue. Assessment is tailored to the patient’s skin concern, history and clinical needs before a treatment plan is discussed.",
    highlights: [
      "Official TOSH catalogue entry",
      "Clinical skin assessment",
      "Individual care planning",
    ],
  },
  {
    id: "chemical-peels-skin",
    category: "skin",
    badge: "DERMATOLOGY",
    title: "Chemical Peels & Skin Renewal",
    summary:
      "This service is listed by TOSH Foundation under its Skin catalogue. Assessment is tailored to the patient’s skin concern, history and clinical needs before a treatment plan is discussed.",
    highlights: [
      "Official TOSH catalogue entry",
      "Clinical skin assessment",
      "Individual care planning",
    ],
  },
];


export const ALL_CATALOGUE_SERVICES = [
  ...CLINICAL_SERVICES,
  ...officialAdditionalServices,
  ...officialCatalogueServices,
];

export const CAROUSEL_SERVICES: Service3DItem[] = [
  {
    key: "all",
    badge: "✦ MULTI-DISCIPLINARY CARE MATRIX",
    title: "Integrated Care Matrix",
    subtitle: "Orthopaedics · Clinical Dermatology · Aesthetic Laser",
    image: "/images/tosh-services-3d.webp",
    accentGlow: "radial-gradient(circle at 50% 50%, rgba(45,212,191,0.22) 0%, rgba(192,132,252,0.16) 50%, transparent 72%)",
    accentBorder: "rgba(45, 212, 191, 0.45)",
    badgeBg: "rgba(255, 255, 255, 0.94)",
    badgeColor: "#0f766e",
    badgeBorder: "#2dd4bf",
    highlights: ["Bone & Joint Mobility", "Cellular Dermatology", "Precision Laser"],
  },
  {
    key: "ortho",
    badge: "🦴 ORTHOPAEDIC & JOINT BIOMECHANICS",
    title: "Joint Arthroplasty & Preservation",
    subtitle: "Precision Kinematics, Arthroscopy & PRP Therapy",
    image: "/images/tosh-ortho-3d.webp",
    accentGlow: "radial-gradient(circle at 50% 50%, rgba(45,212,191,0.25) 0%, rgba(56,189,248,0.16) 50%, transparent 72%)",
    accentBorder: "rgba(45, 212, 191, 0.5)",
    badgeBg: "rgba(240, 253, 250, 0.96)",
    badgeColor: "#0f766e",
    badgeBorder: "#2dd4bf",
    highlights: ["Keyhole Arthroscopy", "Regenerative PRP Care", "Rapid Recovery"],
  },
  {
    key: "skin",
    badge: "🔬 CLINICAL DERMATOLOGY SCIENCE",
    title: "Cellular Skin Barrier & Pigment Science",
    subtitle: "Dermatologist-Led Therapy for Vitiligo, Eczema & Psoriasis",
    image: "/images/tosh-derma-3d.webp",
    accentGlow: "radial-gradient(circle at 50% 50%, rgba(192,132,252,0.25) 0%, rgba(244,114,182,0.16) 50%, transparent 72%)",
    accentBorder: "rgba(192, 132, 252, 0.5)",
    badgeBg: "rgba(250, 245, 255, 0.96)",
    badgeColor: "#6b21a8",
    badgeBorder: "#c084fc",
    highlights: ["Barrier Restoration", "Vitiligo & Melasma", "Targeted Phototherapy"],
  },
  {
    key: "cosmetology",
    badge: "✨ ADVANCED COSMETOLOGY & LASER",
    title: "Fractional CO₂ & Laser Resurfacing",
    subtitle: "Aesthetic Collagen Remodeling, HydraFacial & Tattoo Laser",
    image: "/images/tosh-cosmo-3d.webp",
    accentGlow: "radial-gradient(circle at 50% 50%, rgba(253,164,175,0.25) 0%, rgba(253,186,116,0.16) 50%, transparent 72%)",
    accentBorder: "rgba(253, 164, 175, 0.5)",
    badgeBg: "rgba(255, 241, 242, 0.96)",
    badgeColor: "#be123c",
    badgeBorder: "#fda4af",
    highlights: ["Fractional CO₂ Laser", "Collagen Induction", "Medical HydraFacial"],
  },
];

export const ORBITAL_REVIEWS: OrbitalReviewItem[] = [
  {
    name: "Meena Krishnan",
    role: "Knee Joint Replacement",
    initials: "MK",
    color: "teal",
    stars: 5,
    quote: "Dr. Sundarprakash and the team gave my 62-year-old mother her mobility back without knee pain. Truly empathetic and patient doctors.",
  },
  {
    name: "Kavitha Sundar",
    role: "Clinical Dermatology",
    initials: "KS",
    color: "purple",
    stars: 5,
    quote: "Dr. Sangamitra's evidence-based skin protocol healed my severe cystic acne within 3 months. No false promises, just real results.",
  },
  {
    name: "Dr. Priya Raman",
    role: "Physician & Patient",
    initials: "PR",
    color: "blue",
    stars: 5,
    quote: "Being a physician myself, their surgical sterility, diagnostic precision, and bedside warmth are truly top-tier.",
  },
  {
    name: "Arun Prakash",
    role: "ACL Arthroscopy & Sports Rehab",
    initials: "AP",
    color: "amber",
    stars: 5,
    quote: "After my badminton ligament tear, Dr. Sundarprakash planned my keyhole repair and recovery. Back on court in 4 months!",
  },
  {
    name: "Rohit & Sneha",
    role: "Orthopaedic & Skin Family Care",
    initials: "RS",
    color: "rose",
    stars: 5,
    quote: "From pediatric fracture care to specialized dermatology, our family relies on TOSH. The most ethical clinic in Trichy.",
  },
];

export const STREAM_REVIEWS_ROW_1: StreamReviewItem[] = [
  {
    name: "Suresh & Ananthi",
    care: "Total Knee Replacement · Dr. Sundarprakash",
    initials: "SA",
    quote: "My wife had severe grade 4 osteoarthritis and could not climb stairs. Dr. Sundarprakash explained every option patiently without rushing. Now she walks effortlessly.",
    location: "Thillai Nagar, Trichy",
  },
  {
    name: "Divya Meenakshi",
    care: "Acne Scarring & Barrier Therapy · Dr. Sangamitra",
    initials: "DM",
    quote: "Visited multiple clinics for recurring acne. Dr. Sangamitra restored my skin barrier within weeks. Her compassionate approach made all the difference.",
    location: "Srirangam, Trichy",
  },
  {
    name: "Karthik Anand",
    care: "Shoulder Arthroscopy & Rotator Cuff Care",
    initials: "KA",
    quote: "Suffered chronic shoulder dislocation while playing cricket. The keyhole surgery was seamless and post-op physiotherapy helped me regain full range of motion.",
    location: "Tennur, Trichy",
  },
  {
    name: "Rajeshwari Natarajan",
    care: "Geriatric Bone Health & Arthritis Management",
    initials: "RN",
    quote: "The clinic is spotless and wheelchair-friendly. Dr. Sundarprakash's polite manner and conservative treatment saved my mother from premature surgery.",
    location: "Cantonment, Trichy",
  },
  {
    name: "Mohamed Farook",
    care: "Complex Fracture Fixation & Recovery",
    initials: "MF",
    quote: "Brought my brother after a roadside bike fall. The emergency stabilization and surgical precision were exemplary. Today he has resumed his business normally.",
    location: "Palakkarai, Trichy",
  },
  {
    name: "Swathi Balaji",
    care: "Pigmentation & Laser Aesthetics · Dr. Sangamitra",
    initials: "SB",
    quote: "Dr. Sangamitra never pushes unnecessary cosmetic packages. My stubborn melasma has faded remarkably with her tailored medical regimen.",
    location: "K.K. Nagar, Trichy",
  },
];

export const STREAM_REVIEWS_ROW_2: StreamReviewItem[] = [
  {
    name: "Ganesh V.",
    care: "Chronic Spinal Lumbar Care · Dr. Sundarprakash",
    initials: "GV",
    quote: "Dr. Sundarprakash managed my father's severe lumbar disc pain with targeted physical therapy and non-invasive care. He is always on the phone whenever we panic.",
    location: "Thillai Nagar, Trichy",
  },
  {
    name: "Nandhini Sridharan",
    care: "Clinical Scalp & Hair Restoration",
    initials: "NS",
    quote: "Post-partum hair fall and scalp inflammation was stressing me out. Dr. Sangamitra's medical treatment halted the shedding within a month. Very grateful.",
    location: "Thiruverumbur, Trichy",
  },
  {
    name: "Venkatesh Raghavan",
    care: "Bilateral Knee Joint Preservation",
    initials: "VR",
    quote: "Instead of pushing immediate joint replacement, Dr. Sundarprakash advised weight-bearing physiotherapy and PRP therapy. 2 years later, I am walking pain-free!",
    location: "Karur / Trichy",
  },
  {
    name: "Ayesha Siddiqa",
    care: "Pediatric Skin Allergy & Eczema",
    initials: "AS",
    quote: "Our 4-year-old had severe recurring eczema patches. Dr. Sangamitra treated her with so much gentle warmth. The customized moisturizing routine brought instant relief.",
    location: "Woraiyur, Trichy",
  },
  {
    name: "Balakrishnan T.",
    care: "Ankle Ligament Reconstruction",
    initials: "BT",
    quote: "Excellent diagnostics with in-house imaging. Clear breakdown of surgical timeline and transparent hospital billing. One of the finest orthopaedic minds in Tamil Nadu.",
    location: "Lalgudi, Trichy",
  },
  {
    name: "Subha Chandrasekar",
    care: "Medical Facials & Skin Rejuvenation",
    initials: "SC",
    quote: "Modern lasers, hygienic consultation cabins, and very warm staff. TOSH Foundation sets a benchmark for what compassionate clinical healthcare should be in our city.",
    location: "Thillai Nagar, Trichy",
  },
];


export const STORY_SLIDES = [
  {
    src: "/images/tosh-story-hero.webp",
    alt: "TOSH Foundation compassionate clinical consultation with doctor and patient",
    title: "Compassionate Consultation",
  },
  {
    src: "/images/tosh-story-ortho-rehab.webp",
    alt: "TOSH Foundation orthopaedic joint rehabilitation and mobility check",
    title: "Orthopaedic Rehabilitation",
  },
  {
    src: "/images/tosh-story-derma-care.webp",
    alt: "TOSH Foundation clinical dermatology skin examination with specialist",
    title: "Dermatological Excellence",
  },
  {
    src: "/images/tosh-story-laser-clinic.webp",
    alt: "TOSH Foundation advanced medical cosmetology and laser treatment suite",
    title: "Cosmetology & Laser Suite",
  },
];

export const HOME_TESTIMONIALS: HomeTestimonialItem[] = [
  {
    id: "1",
    name: "Meena Krishnan",
    role: "Total Knee Replacement & Joint Preservation",
    location: "Thillai Nagar, Trichy",
    initials: "MK",
    dept: "Orthopaedics",
    theme: "teal",
    rating: 5,
    highlight: "Pain-Free Mobility Restored",
    quote: "Dr. Sundarprakash gave my 62-year-old mother her mobility back without debilitating knee pain. He explained every conservative and surgical option with calm patience. Today she climbs stairs effortlessly and pain-free.",
  },
  {
    id: "2",
    name: "Kavitha Sundaram",
    role: "Clinical & Aesthetic Dermatology",
    location: "Srirangam, Trichy",
    initials: "KS",
    dept: "Dermatology",
    theme: "rose",
    rating: 5,
    highlight: "Clear Skin Within 3 Months",
    quote: "Dr. Sangamitra's evidence-based skin protocol healed my chronic cystic acne within 3 months. No exaggerated claims, no unnecessary treatments — just honest, scientific medicine and compassionate personal care.",
  },
  {
    id: "3",
    name: "Dr. Priya Raman",
    role: "Physician & Family Patient",
    location: "Cantonment, Trichy",
    initials: "PR",
    dept: "Comprehensive Care",
    theme: "indigo",
    rating: 5,
    highlight: "Highest Ethical Medical Standard",
    quote: "Being a physician myself, surgical sterility, diagnostic precision, and unhurried bedside care are what I evaluate first. TOSH Foundation sets the standard for ethical joint preservation and clinical dermatology in Trichy.",
  },
  {
    id: "4",
    name: "Arun Prakash",
    role: "ACL Arthroscopy & Sports Injury Rehab",
    location: "KK Nagar, Trichy",
    initials: "AP",
    dept: "Orthopaedics",
    theme: "teal",
    rating: 5,
    highlight: "Back On Court in 4 Months",
    quote: "Suffered a complete ACL tear during a state-level badminton match. Dr. Sundarprakash performed keyhole reconstruction and meticulously structured my recovery. I returned to competitive play in 4 months with full knee stability!",
  },
  {
    id: "5",
    name: "Divya Meenakshi",
    role: "Skin Barrier Therapy & Restorative Care",
    location: "Tennur, Trichy",
    initials: "DM",
    dept: "Dermatology",
    theme: "rose",
    rating: 5,
    highlight: "Deeply Personal & Caring Experience",
    quote: "After years of dealing with recurring flare-ups and sensitive skin, Dr. Sangamitra helped me restore my skin barrier and my confidence. The clinic's transparent and ethical approach is truly rare and reassuring.",
  },
  {
    id: "6",
    name: "Suresh & Ananthi",
    role: "Bilateral Knee Arthritis Management",
    location: "Thillai Nagar, Trichy",
    initials: "SA",
    dept: "Orthopaedics",
    theme: "teal",
    rating: 5,
    highlight: "Compassionate Elderly Joint Care",
    quote: "My wife had severe grade 4 osteoarthritis and could barely walk 50 meters. Dr. Sundarprakash's polite manner, clear surgical roadmap, and post-op rehabilitation gave her active life back. Exceptional doctors.",
  },
  {
    id: "7",
    name: "Vigneshwaran K.",
    role: "Psoriasis & Chronic Skin Care",
    location: "Crawford, Trichy",
    initials: "VK",
    dept: "Dermatology",
    theme: "rose",
    rating: 5,
    highlight: "Long-Term Flare Control",
    quote: "Living with scalp and elbow psoriasis for 6 years had drained my morale. Dr. Sangamitra prescribed an evidence-guided treatment plan that brought immediate relief. Her empathetic listening made all the difference.",
  },
  {
    id: "8",
    name: "Rajeshwari Natarajan",
    role: "Spine Care & Postural Rehabilitation",
    location: "Cantonment, Trichy",
    initials: "RN",
    dept: "Orthopaedics",
    theme: "teal",
    rating: 5,
    highlight: "Saved From Unnecessary Surgery",
    quote: "Two other hospitals had advised immediate lumbar spine surgery. Dr. Sundarprakash evaluated my MRI thoroughly, recommended targeted core physiotherapy and ergonomics, and I have been pain-free for over a year.",
  },
  {
    id: "9",
    name: "Sneha & Rohit",
    role: "Pediatric Fracture & Skin Care",
    location: "Kattur, Trichy",
    initials: "SR",
    dept: "Comprehensive Care",
    theme: "indigo",
    rating: 5,
    highlight: "Trusted Family Health Destination",
    quote: "From my daughter's hairline arm fracture to my ongoing dermatological consultations, TOSH Foundation is our trusted family healthcare home. Clean, unhurried, and genuinely patient-first.",
  },
  {
    id: "10",
    name: "Karthik Anand",
    role: "Shoulder Arthroscopy & Rotator Cuff Care",
    location: "Woraiyur, Trichy",
    initials: "KA",
    dept: "Orthopaedics",
    theme: "teal",
    rating: 5,
    highlight: "Full Shoulder Range Regained",
    quote: "Suffered chronic shoulder instability and recurrent pain from a sports mishap. The minimally invasive arthroscopy was flawless, and the structured physio protocol restored 100% of my throwing range.",
  },
];

