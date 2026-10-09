import React from 'react';
import ExperienceTimeline from '../components/ExperienceTimeline';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Education() {
  return (
    <div className="pt-24 pb-20 space-y-12">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-400">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic &amp; Training Background</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
          Education &amp; <span className="gradient-text">Certifications</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Combining computer applications theory at Surendranagar University with production full stack development training at Red &amp; White Skill Education.
        </p>
      </div>

      {/* Main Timeline & Certifications Component */}
      <ExperienceTimeline />

      {/* Bottom CTA to Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-3xl bg-dark-900/60 border border-slate-800 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-lg font-bold text-white font-heading">
              Looking for a dedicated junior engineer or intern?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              I bring strong foundational knowledge, fast learning capability, and hands-on project experience.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:scale-105 transition-all text-xs sm:text-sm shrink-0"
          >
            <span>Contact Prince</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
