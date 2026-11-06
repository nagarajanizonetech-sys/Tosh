# Tosh Clinic HMS — Comprehensive Folder Structure & Architecture

A detailed overview of the directory organization, module responsibilities, and design architecture for the **Tosh Clinic Hospital Management System (HMS)** monorepo.

---

## 1. High-Level Monorepo Layout

```
Tosh-Hms-main/
├── .github/workflows/          # CI/CD automation pipelines (GitHub Actions)
├── backend/                    # FastAPI async backend service (Port 8000)
├── docs/                       # Architectural decisions & implementation logs
├── frontend/                   # React 18 + Vite + TailwindCSS frontend (Port 3000)
├── docker-compose.yml          # Multi-container orchestration (API, PostgreSQL, MinIO)
├── FOLDER_STRUCTURE.md         # This repository architecture reference
├── README.md                   # Main project documentation & quickstart
├── start-backend.bat           # Windows PowerShell helper to run backend
└── vercel.json                 # Production routing & headers for frontend deployment
```

---

## 2. Frontend Structure (`frontend/`)

Built with **React 18**, **TypeScript**, **Vite**, **TailwindCSS**, **React Router v6**, **Recharts**, and **Lucide React**.

```
frontend/
├── public/                     # Static public assets served by Vite root
│   ├── favicon-*.png           # Multi-resolution branding favicons (16x16, 32x32, 192x192)
│   ├── fonts/                  # Local WOFF2 typography files
│   ├── images/                 # Optimized modern WebP clinical & hero imagery
│   │   ├── clinic-sidebar.webp
│   │   ├── drortho.webp
│   │   ├── drskin.webp
│   │   ├── ortho-art.webp
│   │   ├── ortho-hero.webp
│   │   ├── reception-hero.webp
│   │   ├── sidebar-*.webp
│   │   ├── skin-health.webp
│   │   ├── skin-hero.webp
│   │   ├── specialties-*.webp
│   │   ├── story-*.webp
│   │   ├── tosh-*-3d.webp
│   │   ├── tosh-consultation-hero.webp / tosh-consultation-hero.jpg (fallback)
│   │   └── tosh-story-*.webp
│   ├── manus-routes.json       # Route manifest
│   ├── robots.txt              # Search engine crawler policies
│   ├── sitemap.xml             # XML sitemap for SEO
│   └── tosh-icon-circle.webp   # Circular branding mark
│
├── scripts/
│   └── e2e_browser_verification.mjs # Automated Playwright browser verification
│
├── src/
│   ├── main.tsx                # Application root entrypoint & provider mounting
│   ├── vite-env.d.ts           # Vite client TypeScript definitions
│   │
│   ├── app/
│   │   └── App.tsx             # Route orchestration, AuthGuard, Toast & Theme wiring
│   │
│   ├── components/             # Reusable UI component library
│   │   ├── layout/
│   │   │   └── AppShell.tsx    # Responsive side navigation, topbar, mobile drawer
│   │   ├── shared/
│   │   │   ├── PatientDocumentsModal.tsx # Document upload & browser preview modal
│   │   │   ├── Primitives.tsx            # Base SVG clinical primitives
│   │   │   └── PrintTemplates.tsx        # A4 clinical print templates (prescriptions/notes)
│   │   └── ui/
│   │       ├── Badge.tsx       # Status & specialty badge tags
│   │       ├── Button.tsx      # Accessible button component
│   │       ├── Card.tsx        # Styled surface containers
│   │       ├── EmptyState.tsx  # Empty list/table placeholders
│   │       ├── Field.tsx       # Accessible form field & label wrappers
│   │       ├── Icons.tsx       # System SVG icons
│   │       ├── Modal.tsx       # Accessible dialog overlay
│   │       ├── Pagination.tsx  # Table & directory pagination
│   │       ├── Tabs.tsx        # Tabbed interface navigation
│   │       └── Toast.tsx       # Toast notifications & provider
│   │
│   ├── features/               # Modular feature slices
│   │   │
│   │   ├── auth/               # Authentication & session management
│   │   │   ├── ForcedChangePasswordModal.tsx # First-time login password change
│   │   │   └── LoginPage.tsx                 # Clinical & reception sign-in
│   │   │
│   │   ├── doctors/            # Common Clinical Portal
│   │   │   ├── BodyRegionTemplatesPage.tsx # Ortho examination template manager
│   │   │   ├── ClinicalWorkspace.tsx       # Core doctor consultation workspace
│   │   │   ├── DoctorAppointmentsPage.tsx  # Doctor-specific appointments
│   │   │   ├── DoctorChargesPage.tsx       # Consultation procedure billing
│   │   │   ├── DoctorDashboard.tsx         # Clinical statistics & quick-actions
│   │   │   ├── DoctorPatientsPage.tsx      # Department patient directory
│   │   │   ├── DoctorRecordPages.tsx       # Patient medical record views
│   │   │   ├── DoctorReportsPage.tsx       # Department clinical reporting
│   │   │   └── clinical/                   # Clinical consultation tabs
│   │   │       ├── BodyRegionTemplatesPanel.tsx # Examination region templates
│   │   │       ├── ClinicalNotesPanel.tsx       # SOAP notes & clinical findings
│   │   │       ├── DoctorFollowUpPanel.tsx      # Follow-up appointment scheduler
│   │   │       ├── DocumentsPanel.tsx           # Patient document manager
│   │   │       ├── PrescriptionPanel.tsx        # Prescription writer (3 modes)
│   │   │       ├── ProceduresPanel.tsx          # Billable clinical procedures
│   │   │       └── bodyRegionTemplates.ts       # Default anatomical templates
│   │   │
│   │   ├── landing/            # Public Editorial Clinic Landing Platform
│   │   │   ├── LandingPage.tsx         # Main controller & layout orchestrator (205 lines)
│   │   │   ├── types.ts                # TypeScript interfaces for landing features
│   │   │   ├── data/
│   │   │   │   └── landingData.ts      # Clinical services, reviews, clinic contact data
│   │   │   ├── styles/
│   │   │   │   └── landing.css         # PostCSS-processed scoped landing stylesheet
│   │   │   └── components/
│   │   │       ├── AnimatedHeroTitle.tsx       # Kinetic typography header
│   │   │       ├── HeroShareRadial.tsx         # Interactive floating radial contact dial
│   │   │       ├── HomeTestimonialsShowcase.tsx # Patient reviews auto-slider
│   │   │       ├── Icon.tsx                    # Landing SVG icon system
│   │   │       ├── InternalPage.tsx            # Subpage router dispatcher
│   │   │       ├── Logo.tsx                    # Branding emblem & text
│   │   │       ├── Reveal.tsx                  # IntersectionObserver entrance wrapper
│   │   │       ├── ServicesHero3DStage.tsx     # Interactive 3D tilt stage
│   │   │       ├── SiteFooter.tsx              # Multi-column institutional footer
│   │   │       ├── SiteHeader.tsx              # Navigation header with mobile drawer
│   │   │       ├── SocialLinks.tsx             # Social media connection links
│   │   │       ├── StoryVisualCarousel.tsx     # Rotating clinical photo carousel
│   │   │       ├── TbMessages.tsx              # SVG message iconography
│   │   │       ├── sections/                   # Home sections
│   │   │       │   ├── HeroSection.tsx         # Hero introduction stage
│   │   │       │   ├── TickerSection.tsx       # Clinical statistics ticker
│   │   │       │   ├── StorySection.tsx        # The TOSH story preview
│   │   │       │   ├── SpecialtiesSection.tsx  # Dual-specialty visual lab
│   │   │       │   ├── ServicesSection.tsx     # Filterable services matrix
│   │   │       │   ├── DoctorsSection.tsx      # Consultant doctor cards
│   │   │       │   ├── PathwaysSection.tsx     # Care pathway timeline
│   │   │       │   └── ContactSection.tsx      # Interactive enquiry booking form
│   │   │       └── subpages/                   # Dedicated routed subpages
│   │   │           ├── StorySubpage.tsx        # /story full history & mission
│   │   │           ├── SpecialtiesSubpage.tsx  # /specialties ortho & skin lab
│   │   │           ├── ServicesSubpage.tsx     # /services clinical directory
│   │   │           ├── DoctorsSubpage.tsx      # /doctors full team profiles
│   │   │           ├── TestimonialsSubpage.tsx # /testimonials 360° orbital reviews
│   │   │           └── ContactSubpage.tsx      # /contact clinic map & direct enquiry
│   │   │
│   │   ├── ortho/              # Orthopaedics Department Portal
│   │   │   ├── OrthoDashboard.tsx
│   │   │   ├── OrthoAppointmentsPage.tsx
│   │   │   ├── OrthoConsultationPage.tsx
│   │   │   ├── OrthoPatientsPage.tsx
│   │   │   ├── OrthoPrescriptionsPage.tsx
│   │   │   ├── OrthoReportsPage.tsx
│   │   │   └── ...
│   │   │
│   │   ├── reception/          # Reception & Administrative Portal
│   │   │   ├── AppointmentsPage.tsx      # Booking & appointment scheduling
│   │   │   ├── BillingPage.tsx           # Invoices, payments, refunds
│   │   │   ├── EditPatientModal.tsx      # Update patient demographics
│   │   │   ├── EditQueueModal.tsx        # Modify token & consultation status
│   │   │   ├── FollowUpsPage.tsx         # Follow-up tracking & reminders
│   │   │   ├── PatientDirectoryPage.tsx  # Master patient records
│   │   │   ├── QueuePage.tsx             # Daily patient token queue
│   │   │   ├── ReceptionDashboard.tsx    # Reception metrics & quick actions
│   │   │   ├── ReportsPage.tsx           # Clinic revenue & operations reports
│   │   │   └── SettingsPage.tsx          # Consultation fees & clinic settings
│   │   │
│   │   └── skin/               # Dermatology Department Portal
│   │       ├── SkinDashboard.tsx
│   │       ├── SkinAppointmentsPage.tsx
│   │       ├── SkinConsultationPage.tsx
│   │       ├── SkinPatientsPage.tsx
│   │       ├── SkinPrescriptionsPage.tsx
│   │       ├── SkinReportsPage.tsx
│   │       └── ...
│   │
│   ├── schemas/
│   │   └── forms.ts            # Zod validation schemas for forms
│   │
│   ├── services/               # Data & Business Logic Services
│   │   ├── api/
│   │   │   ├── ApiProvider.tsx      # Context provider for API clients
│   │   │   ├── contracts.ts         # Wire contract interfaces (camelCase)
│   │   │   ├── hospitalApi.ts       # Typed HTTP repository client
│   │   │   ├── httpClient.ts        # Axios/Fetch interceptor with token refresh
│   │   │   └── websocketClient.ts   # Live WebSocket client for queue updates
│   │   ├── auth/
│   │   │   └── AuthContext.tsx      # RBAC, login/logout, silent refresh
│   │   ├── charges/
│   │   │   └── chargesService.ts    # Charge catalog management
│   │   ├── doctors/
│   │   │   └── doctorService.ts     # Doctor directory service
│   │   ├── documents/
│   │   │   └── browserDocumentService.ts # Local file upload & preview
│   │   ├── mock/
│   │   │   ├── DemoProvider.tsx     # Demo state provider for offline mode
│   │   │   └── demoRepository.ts    # In-memory mock data repository
│   │   └── repositories/
│   │       ├── mode.ts              # Data mode switcher (API vs Demo Mock)
│   │       └── types.ts             # Repository abstraction interfaces
│   │
│   ├── styles/
│   │   └── index.css           # Global Tailwind CSS directives & base styles
│   │
│   ├── types/
│   │   └── domain.ts           # Shared TypeScript domain models
│   │
│   └── utils/
│       ├── format.ts           # Date, currency, and name formatting helpers
│       └── patientSearch.ts    # Patient fuzzy search and filter utilities
│
├── package.json                # Dependencies, scripts, package metadata
├── tailwind.config.js          # Tailwind CSS design system tokens
├── tsconfig.json               # TypeScript project references
└── vite.config.ts              # Vite bundling, chunking, and dev server config
```

---

## 3. Backend Structure (`backend/`)

Built with **Python 3.11+ / 3.12+**, **FastAPI (async)**, **SQLAlchemy 2.0 (asyncpg)**, **PostgreSQL 16**, **Pydantic v2**, and **Alembic**.

```
backend/
├── alembic/                    # Database migrations
│   ├── versions/               # Incremental Alembic migration scripts
│   │   ├── 55ef892a9a23_initial_schema.py
│   │   └── 71415c971cba_align_schema_and_indexes.py
│   ├── env.py                  # Async migration environment runner
│   └── script.py.mako          # Migration template
│
├── app/                        # Application source package
│   ├── main.py                 # FastAPI application factory & router mounting
│   │
│   ├── core/                   # Application Core & Cross-Cutting Concerns
│   │   ├── config.py           # Pydantic Settings & environment variables
│   │   ├── errors.py           # Global exception handlers & error schemas
│   │   ├── limiter.py          # Rate limiting middleware
│   │   ├── logging.py          # Structured logging with PHI data redaction
│   │   ├── schemas.py          # CamelModel base schema (camelCase wire serialization)
│   │   ├── security.py         # Argon2id password hashing & password rules
│   │   ├── tokens.py           # Short-lived JWT access tokens & refresh tokens
│   │   └── websocket.py        # Real-time WebSocket connection manager
│   │
│   ├── db/                     # Database Engine & Session
│   │   ├── all_models.py       # Centralized model registry for Alembic detection
│   │   ├── base.py             # Base ORM model, UUID primary keys, timestamp mixins
│   │   ├── init_db.py          # Database initialization utilities
│   │   └── session.py          # Async session factory (asyncpg connection pool)
│   │
│   ├── modules/                # Feature Modules (Vertical Slices)
│   │   ├── appointments/       # Scheduling, double-booking prevention, time checks
│   │   │   ├── models.py, router.py, schemas.py
│   │   ├── audit/              # Clinical audit trails & security logging
│   │   │   ├── models.py, service.py
│   │   ├── auth/               # Authentication, token generation, refresh rotation
│   │   │   ├── dependencies.py, models.py, repository.py, router.py, schemas.py, service.py
│   │   ├── billing/            # Invoices, atomic payments (FOR UPDATE locks), refunds
│   │   │   ├── models.py, router.py, schemas.py
│   │   ├── catalog/            # Charge catalog & clinical body region templates
│   │   │   ├── models.py, router.py, schemas.py, templates_router.py
│   │   ├── checkin/            # Patient check-in & token assignment service
│   │   │   └── service.py
│   │   ├── consultations/      # Clinical consultation models & schemas
│   │   │   ├── models.py, schemas.py
│   │   ├── documents/          # Medical document uploads, magic-byte checks, signed URLs
│   │   │   ├── models.py, router.py, schemas.py
│   │   ├── followups/          # Patient follow-up tracking & overdue calculation (IST)
│   │   │   ├── models.py, router.py, schemas.py
│   │   ├── patients/           # Patient registration & duplicate detection
│   │   │   ├── models.py, router.py, schemas.py
│   │   ├── queue/              # Daily department token queue & state transitions
│   │   │   ├── models.py, router.py, schemas.py
│   │   ├── reports/            # Clinical & revenue SQL summary reports
│   │   │   ├── router.py, schemas.py
│   │   ├── settings/           # Department consultation fee settings
│   │   │   ├── models.py, router.py, schemas.py
│   │   ├── users/              # User account models & administration
│   │   │   ├── models.py, router.py, schemas.py
│   │   └── visits/             # Clinical visits, vitals tracking, concurrency locks
│   │       ├── models.py, router.py
│   │
│   ├── scripts/                # Database Administration & Seeding
│   │   ├── clear_mock_data.py  # Reset test data
│   │   ├── reset_passwords.py  # User password resetting
│   │   ├── seed.py             # Seed initial doctors, catalog items, and fees
│   │   └── set_user_passwords.py # Password hasher utility
│   │
│   └── services/               # Infrastructure & External Integrations
│       ├── notification.py     # Notification provider interface (Noop / WhatsApp)
│       ├── scheduler.py        # APScheduler background cron job (IST follow-up reminders)
│       └── storage.py          # Storage abstractions (LocalStorageService, S3StorageService)
│
├── tests/                      # Automated Pytest Test Suite
│   ├── conftest.py             # Test database fixture & client setup
│   ├── test_auth.py            # Authentication, lockouts, refresh cookie rotation
│   ├── test_contract_alignment.py # Backend wire contract alignment tests
│   ├── test_contract_schema_validation.py # Pydantic schema validation tests
│   ├── test_error_handling.py  # Exception handling & error response tests
│   ├── test_health.py          # Health checks & ping endpoints
│   ├── test_matrix_gaps_and_concurrency.py # Parallel payment row-lock tests
│   ├── test_models.py          # Database model constraints & triggers
│   ├── test_part0_gaps.py      # Duplicate detection & department isolation tests
│   ├── test_phase3_endpoints.py # Queue & appointment tests
│   ├── test_phase4_clinical.py # Consultation locking, vitals, document tests
│   ├── test_phase5_billing.py  # Invoicing, payments, and refunds tests
│   ├── test_phase6_advanced.py # Reports, reminders, scheduler tests
│   └── test_services_coverage.py # Storage & notification service unit tests
│
├── alembic.ini                 # Alembic database configuration
├── Dockerfile                  # Containerization image definition
├── pyproject.toml              # Build system, dependencies, and tools configuration
├── requirements.txt            # Production dependencies
└── requirements-dev.txt        # Development & testing dependencies
```

---

## 4. Documentation & Operational Tooling (`docs/`)

```
docs/
├── DECISIONS.md                # Key architectural & technology decisions log
└── PROGRESS.md                 # Implementation milestones & quality gate verification
```

