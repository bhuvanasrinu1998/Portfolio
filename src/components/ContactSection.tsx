import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Send, Mail, Linkedin, Github, Check, Copy, ArrowUpRight, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  isDark: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isDark }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!name.trim() || !email.trim() || !message.trim()) {
    return;
  }

  setIsSubmitting(true);
  setSubmitted(false);

  try {
    const formData = new FormData(e.currentTarget);

    formData.append('access_key', '7162b302-149d-4bc3-b5cb-45f06a08570f');
    formData.append('subject', `New Portfolio Message from ${name}`);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

const data = await response.json();

console.log('Web3Forms HTTP status:', response.status);
console.log('Web3Forms response:', data);

alert(
  `Web3Forms response:\n\nStatus: ${response.status}\nSuccess: ${data.success}\nMessage: ${data.message || 'No message returned'}`
);

if (data.success) {
  setSubmitted(true);
  setName('');
  setEmail('');
  setMessage('');

  setTimeout(() => {
    setSubmitted(false);
  }, 5000);
} else {
  alert(
    data.message ||
      'Web3Forms could not receive your message. Please try again.'
  );
}
  } catch (error) {
    console.error('Web3Forms error:', error);
    alert('Unable to send the message. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels and text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              09. Get in Touch
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-100 text-balance leading-tight">
              Let's Build Something Meaningful.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-pretty">
              I'm always looking to learn, build, collaborate, and explore meaningful problems through technology.
            </p>

            <div className="space-y-3 pt-2">
              {/* Email */}
              <div
                className={`p-4 rounded-xl border flex items-center justify-between transition-all ${
                  isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/40 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-xl border flex items-center justify-between transition-all ${
                  isDark
                    ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">LinkedIn Profile</div>
                    <span className="text-xs font-semibold text-slate-200 truncate max-w-[240px] sm:max-w-none">
                      linkedin.com/in/bhuvana-kruthi-bandarupalli-861b96377
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-xl border flex items-center justify-between transition-all ${
                  isDark
                    ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">GitHub Profile</div>
                    <span className="text-xs font-semibold text-slate-200">
                      github.com/bhuvanasrinu1998
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-400 font-mono">
              BVRIT Hyderabad College of Engineering for Women · Hyderabad, India
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <h3 className="text-lg font-display font-semibold tracking-tight text-slate-100 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Feel free to connect regarding hackathons, student projects, technical evaluations, or internship opportunities.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-3 animate-in fade-in">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    Thank you for reaching out! Your message has been noted.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 font-mono">
                    Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors ${
                      isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 font-mono">
                    Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors ${
                      isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 font-mono">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none ${
                      isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">
                    Direct reply via email.
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-lg shadow-cyan-950/40 hover:shadow-cyan-500/20 transition-all disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
