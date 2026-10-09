import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  ShoppingCart, 
  Code,
  X
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Backend', 'Frontend'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase());

  const getProjectIcon = (id) => {
    switch (id) {
      case 'jwt-auth':
        return <ShieldCheck className="w-6 h-6 text-indigo-400" />;
      case 'ecommerce-store':
        return <ShoppingCart className="w-6 h-6 text-cyan-400" />;
      case 'react-showcase':
        return <Layers className="w-6 h-6 text-purple-400" />;
      default:
        return <Code className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Crafted Projects &amp; <span className="gradient-text">Repositories</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Real-world systems, frontend applications, and algorithmic solutions developed during training and competitions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/20 font-semibold'
                  : 'bg-dark-900/70 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {filter} Projects
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-dark-900/70 border border-slate-800/90 hover:border-indigo-500/40 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div>
                {/* Card Top: Icon & Category badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {getProjectIcon(project.id)}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-indigo-950/60 text-indigo-300 border border-indigo-800/50">
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Features Quick Bullets */}
                <ul className="space-y-1.5 mb-6 text-xs text-slate-300">
                  {project.features.slice(0, 2).map((feat, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 transition-colors"
                >
                  <span>Quick Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium border border-slate-700 hover:border-slate-600 transition-all hover:scale-105"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Modal Dialog for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl bg-dark-900 border border-slate-700/80 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center space-x-3 pr-10">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                {getProjectIcon(selectedProject.id)}
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {selectedProject.category} Project
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Full Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Feature Highlights */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                Key Architecture &amp; Features:
              </h4>
              <ul className="space-y-2">
                {selectedProject.features.map((feat, i) => (
                  <li key={i} className="flex items-start space-x-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-end space-x-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white"
              >
                Close
              </button>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 hover:scale-105 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Open Repository on GitHub</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
