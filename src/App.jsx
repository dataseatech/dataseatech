
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import PortfolioPage from '@/pages/PortfolioPage';
import AboutPage from '@/pages/AboutPage';
import ReviewsPage from '@/pages/ReviewsPage';
import ContactPage from '@/pages/ContactPage';
import BlogPage from '@/pages/BlogPage';
import CaseStudiesPage from '@/pages/CaseStudiesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
