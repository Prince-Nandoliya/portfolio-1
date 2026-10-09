import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Download, Menu, X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const triggerResumeConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.2 },
      colors: ['#6366f1', '#06b6d4', '#a855f7'],
    });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/30'
          : 'bg-dark-950/40 backdrop-blur-sm py-4 border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-2 text-xl font-bold tracking-tight text-white font-heading"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
              <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center">
                <span className="gradient-text font-black text-sm">PN</span>
              </div>
            </div>
            <span>
              Prince<span className="text-cyan-400">.dev</span>
            </span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1"></span>
              Available
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'text-cyan-400 bg-slate-800/80 shadow-sm border border-slate-700/60 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="/PrinceResume.pdf"
              download="Prince_Nandoliya_Resume.pdf"
              onClick={triggerResumeConfetti}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/25 hover:shadow-cyan-500/30 transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <a
              href="/PrinceResume.pdf"
              download="Prince_Nandoliya_Resume.pdf"
              onClick={triggerResumeConfetti}
              className="p-2 rounded-lg bg-indigo-600/80 text-white"
              title="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-dark-900/98 backdrop-blur-2xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-base font-medium ${
                  isActive
                    ? 'text-cyan-400 bg-slate-800/80 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/40'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2">
            <a
              href="/PrinceResume.pdf"
              download="Prince_Nandoliya_Resume.pdf"
              onClick={triggerResumeConfetti}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-medium"
            >
              <Download className="w-4 h-4" />
              <span>Download Full Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
