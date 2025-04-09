import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CrimesPage } from './pages/CrimesPage';
import { CyberSecurityPage } from './pages/CyberSecurityPage';
import { LegalSupportPage } from './pages/LegalSupportPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { EmergencyPage } from './pages/EmergencyPage';
import { FeedbackPage } from './pages/FeedbackPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/crimes/*" element={<CrimesPage />} />
            <Route path="/cybersecurity" element={<CyberSecurityPage />} />
            <Route path="/legal-support" element={<LegalSupportPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;