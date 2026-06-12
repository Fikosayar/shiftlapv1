import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './i18n';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPdks from './pages/AboutPdks';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <LanguageProvider>
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pdks-nedir" element={<AboutPdks />} />
              <Route path="/ozellikler" element={<Features />} />
              <Route path="/nasil-calisir" element={<HowItWorks />} />
              <Route path="/iletisim" element={<Contact />} />
              <Route path="/fiyatlandirma" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
    </LanguageProvider>
  );
}

export default App;
