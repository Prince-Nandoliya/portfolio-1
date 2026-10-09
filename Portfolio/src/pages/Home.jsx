import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowRight, 
  Code2, 
  Sparkles, 
  FolderGit2, 
  GraduationCap, 
  Send, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export default function Home() {
  const { projects, skills, education } = portfolioData;
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Quick Highlights / Featured Projects Section */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-2">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Featured Work</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Highlighted <span className="gradient-text">Projects</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group p-6 rounded-3xl bg-dark-900/60 border border-slate-800 hover:border-indigo-500/40 backdrop-blur-sm transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-cyan-400 border border-slate-700">
                    {project.badge}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="View GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to="/projects"
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                >
                  <span>Explore in Projects page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Skills Strip */}
        <section className="p-8 rounded-3xl bg-gradient-to-r from-dark-900/80 via-slate-900/70 to-dark-900/80 border border-slate-800/90 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono uppercase text-cyan-400 font-semibold">Core Arsenal</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Full-Stack &amp; Modern Frameworks
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                Skilled in building responsive frontends with React &amp; Tailwind, secured backends with Node.js &amp; Express, and performant databases with MongoDB.
              </p>
            </div>

            <Link
              to="/skills"
              className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold border border-slate-700 transition-all hover:scale-105 shrink-0"
            >
              <span>Explore All Skills</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-950/60 via-purple-950/40 to-dark-900 border border-indigo-500/30 text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
              Ready to collaborate or discuss an opportunity?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              I am actively seeking Full Stack Developer roles, internships, and project collaborations.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:scale-105 transition-all text-sm"
            >
              <Send className="w-4 h-4" />
              <span>Get In Touch</span>
            </Link>
            <Link
              to="/about"
              className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-colors"
            >
              Learn More About Me
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
