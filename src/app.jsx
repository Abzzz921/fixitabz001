import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster.jsx';
import Navigation from '@/components/navigation.jsx';
import Footer from '@/components/footer.jsx';
import HomePage from '@/pages/homepage.jsx';
import ServicesPage from '@/pages/servicespage.jsx';
import IndustriesPage from '@/pages/industriespage.jsx';
import CaseStudiesPage from '@/pages/casestudiespage.jsx';
import RequestQuotePage from '@/pages/requestquotepage.jsx';
import ContactPage from '@/pages/contactpage.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/request-quote" element={<RequestQuotePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
