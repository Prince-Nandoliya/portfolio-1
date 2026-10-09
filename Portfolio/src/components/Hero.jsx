import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  ArrowRight, 
  Download, 
  Code2, 
  Database, 
  Sparkles,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Hero() {
  const { personal, stats } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personal.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personal.roles.length);
      } else {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, personal.roles]);

  const handleResumeDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#06b6d4', '#ec4899', '#10b981'],
    });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs sm:text-sm text-slate-300 shadow-sm backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-400">Status:</span>
              <span className="text-emerald-400 font-medium">Seeking Opportunities & Internships</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-indigo-400 text-lg sm:text-xl font-medium tracking-wide">
                Hi, my name is
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading leading-tight">
                <span className="text-white">Prince</span>{' '}
                <span className="gradient-text">Nandoliya</span>
              </h1>
              
              {/* Typewriter role */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start space-x-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 font-mono">
                <span>&gt;</span>
                <span className="text-cyan-400">{text}</span>
                <span className="w-2.5 h-7 bg-cyan-400 animate-pulse inline-block" />
              </div>
            </div>

            {/* Summary Bio */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Full Stack Developer trained at <span className="text-slate-200 font-medium">Red &amp; White Education</span>. Crafting scalable web applications with <span className="text-indigo-300 font-medium">React</span>, <span className="text-cyan-300 font-medium">Node.js</span>, <span className="text-emerald-300 font-medium">MongoDB</span>, and modern developer tooling.
            </p>

            {/* Quick Meta Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs text-slate-400">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Bhavnagar, Gujarat</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>MERN Stack Developer</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>AI-Assisted Workflow</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/projects"
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="/PrinceResume.pdf"
                download="Prince_Nandoliya_Resume.pdf"
                onClick={handleResumeDownload}
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 font-semibold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Get Resume</span>
              </a>

              <Link
                to="/contact"
                className="px-5 py-3.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors text-sm font-medium"
              >
                Contact Me
              </Link>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-sm"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={`tel:${personal.rawPhone}`}
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-sm"
                aria-label="Phone Call"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean Circular Avatar */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full opacity-35 blur-2xl group-hover:opacity-60 transition duration-700 animate-glow-pulse" />

              {/* Main Circular Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2.5 sm:p-3 bg-gradient-to-tr from-indigo-600/40 via-slate-800 to-cyan-500/40 border-2 border-slate-700/80 shadow-2xl backdrop-blur-xl">
                
                {/* Photo Frame */}
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-slate-800 to-dark-950 border-2 border-cyan-400/40 shadow-inner">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Quick Stats Banner */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-dark-900/50 border border-slate-800 hover:border-slate-700/80 transition-colors text-center"
              >
                <div className="text-2xl sm:text-3xl font-extrabold gradient-text font-heading">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 uppercase tracking-wider mt-0.5 font-mono">
                  {stat.suffix}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
