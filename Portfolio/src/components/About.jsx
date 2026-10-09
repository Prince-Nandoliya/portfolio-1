import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Code, 
  Cpu, 
  Globe2, 
  Sparkles, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';

export default function About() {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="py-12 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Who I Am &amp; <span className="gradient-text">What Drives Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bridging foundational computer science theory with industry-grade full stack software development.
          </p>
        </div>

        {/* Content Grid: Big Card on Left, 4 Highlight Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Big Main Card */}
          <div className="lg:col-span-6 flex">
            <div className="w-full p-7 sm:p-9 rounded-3xl bg-dark-900/60 border border-slate-800 backdrop-blur-md flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  A Dedicated Developer on a Learning &amp; Building Path
                </h3>
                
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {about.story}
                </p>

                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  My journey combines rigorous academics at <strong className="text-white">Surendranagar University</strong> with high-intensity practical training at <strong className="text-white">Red &amp; White Multimedia Education</strong>. I focus on developing clean, well-structured, production-ready code — from secured backend authentication flows to responsive mobile-first user interfaces.
                </p>
              </div>

              {/* Languages Spoken */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2.5 flex items-center space-x-2">
                  <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Languages Spoken:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {about.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700/80 text-xs font-medium text-slate-200"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Feature Highlight Cards in 2x2 Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.highlights.map((h, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-dark-900/60 border border-slate-800/90 hover:border-indigo-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                    {i === 0 && <Code className="w-5 h-5 text-indigo-400" />}
                    {i === 1 && <Layers className="w-5 h-5 text-cyan-400" />}
                    {i === 2 && <ShieldCheck className="w-5 h-5 text-emerald-400" />}
                    {i === 3 && <Cpu className="w-5 h-5 text-purple-400" />}
                  </div>
                  <h4 className="text-base font-bold text-white font-heading">{h.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
