import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  GitFork, 
  Star, 
  BookOpen, 
  Code, 
  ExternalLink, 
  Sparkles, 
  GitBranch
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function GitHubShowcase() {
  const { githubActivity } = portfolioData;

  const topRepos = [
    {
      name: "node-js",
      description: "Node.js core backend architectures, JWT authentication, protected routes & API controllers",
      language: "JavaScript",
      langColor: "#f7df1e",
      url: "https://github.com/Prince-Nandoliya/node-js"
    },
    {
      name: "React",
      description: "Modern React.js applications, state management paradigms, reusable component systems",
      language: "JavaScript",
      langColor: "#61dafb",
      url: "https://github.com/Prince-Nandoliya/React"
    },
    {
      name: "Javascript",
      description: "Vanilla JavaScript algorithms, DOM-driven interactive web applications & E-commerce suite",
      language: "JavaScript",
      langColor: "#f7df1e",
      url: "https://github.com/Prince-Nandoliya/Javascript"
    },
    {
      name: "TechWar2026",
      description: "Algorithmic tournament solutions, complex data structures & competitive programming in C",
      language: "C",
      langColor: "#a8b9cc",
      url: "https://github.com/Prince-Nandoliya/TechWar2026"
    },
    {
      name: "BMW-website",
      description: "Responsive luxury automotive showcase website crafted with modern HTML, CSS & Bootstrap",
      language: "HTML / CSS",
      langColor: "#e34f26",
      url: "https://github.com/Prince-Nandoliya/BMW-website"
    },
    {
      name: "Number-Guessing-Game",
      description: "Interactive browser game with difficulty adjustments, dynamic state, and score persistence",
      language: "JavaScript",
      langColor: "#f7df1e",
      url: "https://github.com/Prince-Nandoliya/Number-Guessing-Game"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-dark-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900/90 via-dark-900 to-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-md">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10 pb-8 border-b border-slate-800">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-400">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/{githubActivity.username}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Open Source &amp; <span className="gradient-text">GitHub Repositories</span>
              </h2>
              
              <p className="text-slate-400 text-sm max-w-xl">
                Active coding track record with <strong className="text-white">42+ public repositories</strong> encompassing full-stack web applications, JavaScript utilities, C algorithms, and frontend showcases.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="px-5 py-3 rounded-2xl bg-dark-950/80 border border-slate-800 text-center">
                <div className="text-2xl font-bold text-white font-mono">{githubActivity.totalRepos}</div>
                <div className="text-[11px] text-slate-400 uppercase font-mono">Public Repos</div>
              </div>

              <a
                href={githubActivity.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-dark-950 font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all text-sm"
              >
                <GithubIcon className="w-4 h-4 text-dark-950" />
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
              </a>
            </div>
          </div>

          {/* Repositories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {topRepos.map((repo, i) => (
              <a
                key={i}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="group p-5 rounded-2xl bg-dark-950/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-dark-950/90 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-bold text-white font-mono group-hover:text-cyan-300 transition-colors">
                        {repo.name}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-900 text-slate-400 font-mono">
                  <div className="flex items-center space-x-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ backgroundColor: repo.langColor }}
                    />
                    <span>{repo.language}</span>
                  </div>
                  <span className="text-[11px] text-slate-500">Public</span>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
