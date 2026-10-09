import React from 'react';
import ContactComponent from '../components/Contact';
import { MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-20 space-y-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-400">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Direct Communication</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
          Let's Work <span className="gradient-text">Together</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Feel free to reach out via email, phone, or send a message directly using the form below.
        </p>
      </div>

      {/* Main Contact Form & Details Component */}
      <ContactComponent />
    </div>
  );
}
