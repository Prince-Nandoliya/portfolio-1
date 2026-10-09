import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const { personal } = portfolioData;

  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in your name, email, and message.' });
      return;
    }

    setIsSubmitting(true);

    // Simulate sending & trigger mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been prepared. Opening your email client...',
      });
      confetti({ particleCount: 70, spread: 60 });

      // Trigger mailto link with encoded message
      const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Prince,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have an internship opening, freelance project, full-time role, or just want to chat code? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Copy Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900/70 border border-slate-800 backdrop-blur-md space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white font-heading">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Reach out through any preferred communication channel. I typically respond within 24 hours.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-dark-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[11px] font-mono uppercase text-slate-400">Email Address</p>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personal.email, 'email')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-dark-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[11px] font-mono uppercase text-slate-400">Phone Number</p>
                      <a
                        href={`tel:${personal.rawPhone}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors truncate block"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personal.rawPhone, 'phone')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center space-x-3 p-3.5 rounded-2xl bg-dark-950/70 border border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-slate-400">Location</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {personal.location}
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Profiles Row */}
              <div className="pt-2">
                <p className="text-xs font-mono uppercase text-slate-400 mb-3">Professional Profiles:</p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 p-3 rounded-xl bg-dark-950 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-all text-xs font-medium"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 p-3 rounded-xl bg-dark-950 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all text-xs font-medium"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900/70 border border-slate-800 backdrop-blur-md shadow-2xl">
              <h3 className="text-xl font-bold text-white font-heading mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below to initiate direct contact.
              </p>

              {status.message && (
                <div
                  className={`p-4 rounded-2xl mb-6 text-xs sm:text-sm ${
                    status.type === 'success'
                      ? 'bg-emerald-950/60 border border-emerald-800/80 text-emerald-300'
                      : 'bg-red-950/60 border border-red-800/80 text-red-300'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-800 focus:border-cyan-500 text-white text-xs sm:text-sm outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-800 focus:border-cyan-500 text-white text-xs sm:text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity / Greeting"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-800 focus:border-cyan-500 text-white text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Message *</label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-800 focus:border-cyan-500 text-white text-xs sm:text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Preparing Message...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
