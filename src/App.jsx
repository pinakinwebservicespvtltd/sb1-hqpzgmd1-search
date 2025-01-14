import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import About from './pages/About';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand-400">Recipe Search</span>
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-gray-700 hover:text-brand-400 transition-colors font-medium">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-brand-400 transition-colors font-medium">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-brand-400 transition-colors font-medium">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">About</h3>
            <p className="text-gray-600">Find the perfect recipe for any occasion with our comprehensive recipe search engine.</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-brand-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-brand-400 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">&copy; {new Date().getFullYear()} Recipe Search. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;