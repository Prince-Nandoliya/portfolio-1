import React from 'react';
import AboutComponent from '../components/About';
import { portfolioData } from '../data/portfolioData';
import { User, Sparkles, GraduationCap, Award, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const { personal, stats } = portfolioData;

  return (
    <div className="pt-24 pb-20 space-y-12">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400">
          <User className="w-3.5 h-3.5" />
          <span>About Prince Nandoliya</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
          Know <span className="gradient-text">Who I Am</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Full Stack Developer passionate about building responsive, robust, and accessible web experiences.
        </p>
      </div>

      {/* Main About Component */}
      <AboutComponent />

      {/* Additional Quick Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-dark-900/60 border border-slate-800 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white font-heading">
              Interested in seeing what I can do?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Check out my technical capabilities or explore the projects I have built.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Link
              to="/skills"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
            >
              My Skills
            </Link>
            <Link
              to="/projects"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-xs font-semibold shadow-lg shadow-indigo-600/25 transition-transform hover:scale-105"
            >
              My Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
