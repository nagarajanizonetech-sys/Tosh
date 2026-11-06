import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import LandingPage from '../features/landing/LandingPage';

// Lazy-loaded routes for performance & code-splitting
const AppShell = lazy(() => import('../components/layout/AppShell').then((m) => ({ default: m.AppShell })));
const LoginPage = lazy(() => import('../features/auth/LoginPage').then((m) => ({ default: m.LoginPage })));
const ReceptionDashboard = lazy(() => import('../features/reception/ReceptionDashboard').then((m) => ({ default: m.ReceptionDashboard })));
const QueuePage = lazy(() => import('../features/reception/QueuePage').then((m) => ({ default: m.QueuePage })));
const AppointmentsPage = lazy(() => import('../features/reception/AppointmentsPage').then((m) => ({ default: m.AppointmentsPage })));
const PatientDirectoryPage = lazy(() => import('../features/reception/PatientDirectoryPage').then((m) => ({ default: m.PatientDirectoryPage })));
const BillingPage = lazy(() => import('../features/reception/BillingPage').then((m) => ({ default: m.BillingPage })));
const FollowUpsPage = lazy(() => import('../features/reception/FollowUpsPage').then((m) => ({ default: m.FollowUpsPage })));
const ReportsPage = lazy(() => import('../features/reception/ReportsPage').then((m) => ({ default: m.ReportsPage })));
const SettingsPage = lazy(() => import('../features/reception/SettingsPage').then((m) => ({ default: m.SettingsPage })));
const DoctorDashboard = lazy(() => import('../features/doctors/DoctorDashboard').then((m) => ({ default: m.DoctorDashboard })));
const DoctorAppointmentsPage = lazy(() => import('../features/doctors/DoctorAppointmentsPage').then((m) => ({ default: m.DoctorAppointmentsPage })));
const DoctorPatientsPage = lazy(() => import('../features/doctors/DoctorPatientsPage').then((m) => ({ default: m.DoctorPatientsPage })));
const ClinicalWorkspace = lazy(() => import('../features/doctors/ClinicalWorkspace').then((m) => ({ default: m.ClinicalWorkspace })));
const BodyRegionTemplatesPage = lazy(() => import('../features/doctors/BodyRegionTemplatesPage').then((m) => ({ default: m.BodyRegionTemplatesPage })));
const DoctorPrescriptionsPage = lazy(() => import('../features/doctors/DoctorRecordPages').then((m) => ({ default: m.DoctorPrescriptionsPage })));
const DoctorTreatmentsPage = lazy(() => import('../features/doctors/DoctorRecordPages').then((m) => ({ default: m.DoctorTreatmentsPage })));
const DoctorHistoryPage = lazy(() => import('../features/doctors/DoctorRecordPages').then((m) => ({ default: m.DoctorHistoryPage })));
const DoctorChargesPage = lazy(() => import('../features/doctors/DoctorChargesPage').then((m) => ({ default: m.DoctorChargesPage })));
const DoctorReportsPage = lazy(() => import('../features/doctors/DoctorReportsPage').then((m) => ({ default: m.DoctorReportsPage })));

function RouteLoadingFallback() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', width: '100%' }}>
      <div
        style={{
          width: '32px',
          height: '32px',
          border: '3px solid #EAF0F2',
          borderTopColor: '#17324D',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }}
      />
    </div>
  );
}

export function App() {
  const navigate = useNavigate();

  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <Routes>
        <Route path="/" element={<LandingPage onLogin={() => navigate('/login')} />} />
        <Route path="/landing" element={<LandingPage onLogin={() => navigate('/login')} />} />
        <Route path="/story" element={<LandingPage onLogin={() => navigate('/login')} />} />
        <Route path="/specialties" element={<LandingPage onLogin={() => navigate('/login')} />} />
        <Route path="/services" element={<LandingPage onLogin={() => navigate('/login')} />} />
        <Route path="/doctors" element={<LandingPage onLogin={() => navigate('/login')} />} />
        <Route path="/testimonials" element={<LandingPage onLogin={() => navigate('/login')} />} />
        <Route path="/contact" element={<LandingPage onLogin={() => navigate('/login')} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reception" element={<AppShell />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<ReceptionDashboard />} />
          <Route path="queue" element={<QueuePage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="patients" element={<PatientDirectoryPage />} />
          <Route path="billing" element={<BillingPage />} />
          <Route path="follow-ups" element={<FollowUpsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="/skin" element={<AppShell />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DoctorDashboard department="skin" />} />
          <Route path="appointments" element={<DoctorAppointmentsPage department="skin" />} />
          <Route path="patients" element={<DoctorPatientsPage department="skin" />} />
          <Route path="consultation" element={<ClinicalWorkspace department="skin" />} />
          <Route path="consultation/:patientId" element={<ClinicalWorkspace department="skin" />} />
          <Route path="charges" element={<DoctorChargesPage department="skin" />} />
          <Route path="prescriptions" element={<DoctorPrescriptionsPage department="skin" />} />
          <Route path="treatments" element={<DoctorTreatmentsPage department="skin" />} />
          <Route path="follow-ups" element={<FollowUpsPage department="skin" />} />
          <Route path="reports" element={<DoctorReportsPage department="skin" />} />
          <Route path="history" element={<DoctorHistoryPage department="skin" />} />
        </Route>
        <Route path="/ortho" element={<AppShell />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DoctorDashboard department="orthopaedics" />} />
          <Route path="appointments" element={<DoctorAppointmentsPage department="orthopaedics" />} />
          <Route path="patients" element={<DoctorPatientsPage department="orthopaedics" />} />
          <Route path="consultation" element={<ClinicalWorkspace department="orthopaedics" />} />
          <Route path="consultation/:patientId" element={<ClinicalWorkspace department="orthopaedics" />} />
          <Route path="templates" element={<BodyRegionTemplatesPage />} />
          <Route path="charges" element={<DoctorChargesPage department="orthopaedics" />} />
          <Route path="prescriptions" element={<DoctorPrescriptionsPage department="orthopaedics" />} />
          <Route path="treatments" element={<DoctorTreatmentsPage department="orthopaedics" />} />
          <Route path="follow-ups" element={<FollowUpsPage department="orthopaedics" />} />
          <Route path="reports" element={<DoctorReportsPage department="orthopaedics" />} />
          <Route path="history" element={<DoctorHistoryPage department="orthopaedics" />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
