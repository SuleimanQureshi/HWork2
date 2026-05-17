import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AppointmentPage from './pages/AppointmentPage';
import CorporateImmigrationPage from './pages/services/CorporateImmigrationPage';
import VisaCitizenshipPage from './pages/services/VisaCitizenshipPage';
import DocumentProcurementPage from './pages/services/DocumentProcurementPage';
import RealEstatePage from './pages/services/RealEstatePage';
import InternationalTaxationPage from './pages/services/InternationalTaxationPage';
import SubServiceDetailPage from './pages/services/SubServiceDetailPage';
import CookiesPolicyPage from './pages/CookiesPolicyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand-cream">
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/corporate-immigration" element={<CorporateImmigrationPage />} />
          <Route path="/services/visa-citizenship" element={<VisaCitizenshipPage />} />
          <Route path="/services/document-procurement" element={<DocumentProcurementPage />} />
          <Route path="/services/real-estate" element={<RealEstatePage />} />
          <Route path="/services/international-taxation" element={<InternationalTaxationPage />} />
          <Route path="/services/:categorySlug/:subServiceId" element={<SubServiceDetailPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/cookies-policy" element={<CookiesPolicyPage />} />
          <Route path="/privacy-notice" element={<PrivacyPolicyPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;