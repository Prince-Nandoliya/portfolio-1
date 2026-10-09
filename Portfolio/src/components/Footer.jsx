import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="pt-16 pb-12 bg-dark-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand */}
          <div className="space-y-2 text-center md:text-left">
            <Link to="/" className="inline-flex items-center space-x-2 text-xl font-bold font-heading text-white">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-dark-950 rounded-[7px] flex items-center justify-center">
                  <span className="gradient-text font-black text-xs">PN</span>
                </div>
              </div>
              <span>Prince<span className="text-cyan-400">.dev</span></span>
            </Link>
            <p className="text-xs text-slate-400 max-w-sm">
              Full Stack Web Developer &amp; MERN Stack Developer crafting scalable digital solutions.
            </p>
          </div>

          {/* Navigation Route Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-300">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-slate-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${personal.rawPhone}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-slate-700 transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/20 hover:scale-105 active:scale-95 transition-all ml-2"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Prince Nandoliya. All rights reserved.
          </p>
          <p className="flex items-center space-x-1">
            <span>Built with React 19, React Router, Vite &amp; Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
