import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Sparkles, 
  Cpu, 
  Terminal, 
  CheckCircle, 
  ShieldCheck,
  BrainCircuit
} from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Databases & Storage' },
    { id: 'tools', label: 'Dev Tools' },
    { id: 'aiTools', label: 'AI Augmented Tools' },
    { id: 'core', label: 'Core Computer Science' },
  ];

  // Helper to compile filtered skills list
  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return [
        ...skills.frontend.map((s) => ({ ...s, cat: 'Frontend' })),
        ...skills.backend.map((s) => ({ ...s, cat: 'Backend' })),
        ...skills.database.map((s) => ({ ...s, cat: 'Database' })),
        ...skills.tools.map((s) => ({ ...s, cat: 'Tools' })),
        ...skills.aiTools.map((s) => ({ ...s, cat: 'AI Tools' })),
        ...skills.core.map((s) => ({ ...s, cat: 'Core' })),
      ];
    }
    return (skills[activeTab] || []).map((s) => ({ ...s, cat: activeTab }));
  };

  const getCategoryIcon = (cat) => {
    switch (cat?.toLowerCase()) {
      case 'frontend':
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'backend':
        return <Server className="w-4 h-4 text-indigo-400" />;
      case 'database':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      case 'ai tools':
      case 'aitools':
        return <BrainCircuit className="w-4 h-4 text-purple-400" />;
      default:
        return <Cpu className="w-4 h-4 text-slate-400" />;
    }
  };

  const filtered = getFilteredSkills();

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-900/30">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Skills &amp; <span className="gradient-text">Tech Ecosystem</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Modern technologies, libraries, databases, and AI tooling I utilize to engineer robust web products.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/20 font-semibold scale-105'
                  : 'bg-dark-900/70 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((skill, index) => (
            <div
              key={index}
              className="group relative p-5 rounded-2xl bg-dark-900/60 border border-slate-800/90 hover:border-indigo-500/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getCategoryIcon(skill.cat)}
                </div>
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                  {skill.level}
                </span>
              </div>

              <h4 className="text-sm sm:text-base font-semibold text-white font-heading group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </h4>
              
              <div className="flex items-center space-x-1.5 mt-2 text-[11px] text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                <span>{skill.cat}</span>
              </div>

              {/* Progress bar visual accent */}
              <div className="w-full bg-slate-800/80 h-1 rounded-full mt-3 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-indigo-500 to-cyan-400"
                  style={{
                    width:
                      skill.level === 'Expert'
                        ? '95%'
                        : skill.level === 'Advanced'
                        ? '85%'
                        : skill.level === 'Daily Workflow'
                        ? '90%'
                        : '70%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* AI & Automation Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900/60 border border-indigo-500/20 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold text-purple-400">
                <BrainCircuit className="w-4 h-4" />
                <span>AI-Native Engineering</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                Accelerated Development through AI Synergy
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                Proficient in integrating GitHub Copilot, Claude 3.5 Sonnet, and ChatGPT into debugging, test generation, and architectural design, delivering faster iterations without sacrificing code quality.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1.5 rounded-xl bg-purple-900/40 border border-purple-700/50 text-xs font-mono text-purple-300 font-medium">
                Copilot
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-amber-900/40 border border-amber-700/50 text-xs font-mono text-amber-300 font-medium">
                Claude
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-emerald-900/40 border border-emerald-700/50 text-xs font-mono text-emerald-300 font-medium">
                ChatGPT
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
