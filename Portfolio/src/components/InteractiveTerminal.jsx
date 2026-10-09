import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InteractiveTerminal() {
  const { personal, skills, projects, education } = portfolioData;

  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Welcome to PrinceOS v2.6 Interactive Developer Shell! Type "help" to see available commands.',
    },
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input', text: `$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available commands:
  • help       : Show list of commands
  • bio        : Quick background summary
  • skills     : View full technical stack
  • projects   : View highlighted repositories
  • education  : Academic background & training
  • contact    : Email, phone, location details
  • resume     : Download Prince's official resume
  • hire       : Direct recruiting summary
  • clear      : Clear console history`,
        });
        break;

      case 'bio':
        newHistory.push({
          type: 'output',
          text: `${personal.name} | ${personal.tagline}\nLocation: ${personal.location}\nSummary: ${personal.summary}`,
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap 5
Backend : Node.js, Express.js, REST APIs, JWT Auth, Cloudinary
Database: MongoDB, Mongoose ODM, LocalStorage
AI Tools: GitHub Copilot, ChatGPT, Claude 3.5, Open Code
Core    : C, C++, Data Structures`,
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `Top Highlighted Repositories:
  1. JWT Authentication System [Node.js, Express, MongoDB, JWT]
     -> https://github.com/Prince-Nandoliya/node-js/tree/main/10_jwt_authentication
  2. E-commerce Storefront [JavaScript, Bootstrap 5, LocalStorage]
     -> https://github.com/Prince-Nandoliya/Javascript/tree/main/e-commerce-project
  3. React Component Suite [React.js, Tailwind, Vite]
     -> https://github.com/Prince-Nandoliya/React
  4. BMW Luxury Showcase [HTML5, CSS3, Bootstrap 5]
     -> https://github.com/Prince-Nandoliya/BMW-website`,
        });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          text: `• BCA (Computer Applications) : Surendranagar University (2026 - 2029)
• Full Stack Developer Trainee : Red & White Skill Education, Bhavnagar (2025 - Present)`,
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `• Email   : ${personal.email}
• Phone   : ${personal.phone}
• GitHub  : ${personal.github}
• LinkedIn: ${personal.linkedin}
• Location: ${personal.location}`,
        });
        break;

      case 'resume':
        confetti({ particleCount: 50, spread: 60 });
        newHistory.push({
          type: 'output',
          text: `Triggering resume download (/PrinceResume.pdf)...`,
        });
        const link = document.createElement('a');
        link.href = '/PrinceResume.pdf';
        link.download = 'Prince_Nandoliya_Resume.pdf';
        link.click();
        break;

      case 'hire':
        confetti({ particleCount: 70, spread: 80 });
        newHistory.push({
          type: 'output',
          text: `🚀 Ready to build great things!
Prince is open for: Full-Stack Roles, Frontend/React Roles, Node.js Backend Roles, and Developer Internships.
Direct call: ${personal.phone} | Direct email: ${personal.email}`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'sudo':
        newHistory.push({
          type: 'output',
          text: `Permission denied: Prince's developer skills require direct contact, not sudo privileges! 😄`,
        });
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `command not found: "${cmd}". Type "help" for a list of available commands.`,
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <section id="terminal" className="py-20 relative overflow-hidden bg-dark-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-400">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive Terminal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Developer <span className="gradient-text">CLI Console</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            For developers, engineers, and recruiters who prefer the terminal.
          </p>
        </div>

        {/* Terminal Window */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="cursor-text rounded-2xl overflow-hidden bg-dark-950 border border-slate-800 shadow-2xl font-mono text-xs sm:text-sm"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs text-slate-400">prince@workspace: ~</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-500 text-xs">
              <span className="hidden sm:inline">bash (interactive)</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 min-h-[300px] max-h-[420px] overflow-y-auto space-y-3 bg-dark-950/95">
            {history.map((line, i) => (
              <div key={i} className="leading-relaxed">
                {line.type === 'system' && (
                  <p className="text-cyan-400">{line.text}</p>
                )}
                {line.type === 'input' && (
                  <p className="text-white font-bold">{line.text}</p>
                )}
                {line.type === 'output' && (
                  <pre className="text-slate-300 whitespace-pre-wrap font-mono text-xs sm:text-sm">{line.text}</pre>
                )}
                {line.type === 'error' && (
                  <p className="text-red-400">{line.text}</p>
                )}
              </div>
            ))}

            {/* Prompt Input Row */}
            <div className="flex items-center space-x-2 text-cyan-400 pt-1">
              <span className="text-emerald-400 font-bold">prince@dev:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="type 'help' or command..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm placeholder:text-slate-600"
                autoComplete="off"
                spellCheck="false"
              />
              <CornerDownLeft className="w-3.5 h-3.5 text-slate-500 hidden sm:block" />
            </div>
            <div ref={bottomRef} />
          </div>

          {/* Footer Quick Action Bar */}
          <div className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
            <span className="hidden sm:inline">Quick shortcuts:</span>
            <div className="flex flex-wrap gap-1.5">
              {['help', 'skills', 'projects', 'education', 'contact', 'resume', 'hire'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={(e) => {
                    e.stopPropagation();
                    setInput(cmd);
                    setTimeout(() => inputRef.current?.focus(), 50);
                  }}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 font-mono transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
