import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect, React } from 'react';
import { Toaster } from './components/ui/sonner';
import { CustomCursor } from './components/CustomCursor';
import { Loader } from './components/Loader';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Work } from './pages/Work';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dark min-h-screen bg-[#0a0a0f] text-white">
      {isLoading && <Loader />}

      <Router>
        <CustomCursor />
        <Navigation />
        <ScrollToTop />

        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        <Footer />
      </Router>

      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: '#131318',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            color: '#fff',
          },
        }}
      />
    </div>
  );
}
