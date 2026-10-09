import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Trophy, 
  Calendar, 
  MapPin, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function ExperienceTimeline() {
  const { education, certifications } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic &amp; Professional Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Learning Journey &amp; <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal computer applications degree coursework paired with rigorous full-stack software industry mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Education & Training (Timeline) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-bold text-white font-heading flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span>Education &amp; Industry Training</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-10">
              {education.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Glowing Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-dark-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/30 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-dark-950"></span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 rounded-2xl bg-dark-900/70 border border-slate-800 group-hover:border-slate-700/80 backdrop-blur-sm transition-all space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center space-x-1.5 text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-cyan-400 border border-slate-700">
                        <Calendar className="w-3 h-3" />
                        <span>{item.period}</span>
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-indigo-950/60 text-indigo-300 border border-indigo-800/40">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                      {item.degree}
                    </h4>

                    <div className="text-sm font-medium text-slate-300 flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-indigo-400" />
                      <span>{item.institution}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Competitions */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl font-bold text-white font-heading flex items-center space-x-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Certificates &amp; Achievements</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-dark-900/70 border border-slate-800/90 hover:border-amber-500/40 backdrop-blur-sm transition-all hover:-translate-y-1 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 transition-transform">
                      {cert.icon === 'award' ? (
                        <Award className="w-6 h-6" />
                      ) : (
                        <Trophy className="w-6 h-6 text-yellow-400" />
                      )}
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                          {cert.title}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                          {cert.date}
                        </span>
                      </div>

                      <p className="text-xs font-medium text-slate-300">{cert.issuer}</p>
                      
                      <p className="text-xs text-slate-400 leading-relaxed pt-1">
                        {cert.description}
                      </p>

                      <div className="pt-2">
                        <span className="inline-flex items-center space-x-1 text-[11px] font-mono text-emerald-400">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{cert.type} Verified</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Motivational Learning Philosophy Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-dark-950 to-slate-900 border border-indigo-500/20 space-y-3">
                <div className="flex items-center space-x-2 text-indigo-400 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Growth Mindset</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "Continuous learning is not an option in software development, it is the lifestyle. Every problem solved in code is a foundation for higher architectural intuition."
                </p>
                <div className="text-[11px] text-cyan-400 font-mono text-right">
                  — Prince Nandoliya
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
