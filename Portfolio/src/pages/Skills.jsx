import React from 'react';
import SkillsComponent from '../components/Skills';
import { Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Skills() {
  return (
    <div className="pt-24 pb-20 space-y-12">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-400">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Architecture &amp; Tools</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
          Skills &amp; <span className="gradient-text">Competencies</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          An overview of modern frontend, backend, database systems, AI tools, and core computer science languages I leverage daily.
        </p>
      </div>

      {/* Main Skills Component */}
      <SkillsComponent />

      {/* Bottom Link to Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-3xl bg-dark-900/60 border border-slate-800 backdrop-blur-md inline-flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
          <div className="text-left space-y-1">
            <h3 className="text-lg font-bold text-white font-heading">
              Ready to see these skills in action?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Browse the projects and code repositories where I put these tools to work.
            </p>
          </div>
          <Link
            to="/projects"
            className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:scale-105 transition-all text-xs sm:text-sm shrink-0"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
