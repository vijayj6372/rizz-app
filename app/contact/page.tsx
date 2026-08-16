"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Trigger mailto link for direct client transmission
      const subject = encodeURIComponent("Rizz AI - User Feedback");
      const body = encodeURIComponent(`From: ${email || "Anonymous User"}\n\nMessage:\n${message}`);
      window.location.href = `mailto:vijayj6372@gmail.com?subject=${subject}&body=${body}`;
    }, 1800);
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center">
      
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-950/15 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-pink-950/15 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[480px] md:max-w-[720px] mx-auto px-6 py-8 flex flex-col flex-1 min-h-screen">
        
        {/* Navigation Header */}
        <div className="flex items-center justify-between pb-6 pt-2">
          <Link
            href="/"
            aria-label="Go back"
            className="w-[46px] h-[46px] rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer transition-all hover:bg-white/10 active:scale-95 flex-shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
          <div className="flex-1 flex justify-center">
            <h1 className="sticker-title">Contact Us ✉️</h1>
          </div>
          <div className="w-[46px]" />
        </div>

        {/* Content Area */}
        <div className="w-full max-w-2xl mx-auto space-y-6 pb-12 text-zinc-300 font-sans text-sm leading-relaxed flex-1 flex flex-col justify-center">
          <div className="text-center space-y-2 pt-2">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Get in Touch</h2>
            <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
              Have questions, feedback, or feature requests for Rizz AI? We'd love to hear from you!
            </p>
          </div>

          <div className="bg-zinc-900/60 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl">
            
            {submitted ? (
              <div className="text-center py-8 space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto text-2xl">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-white">Message Prepared!</h3>
                <p className="text-sm text-zinc-400 max-w-xs mx-auto leading-relaxed">
                  We are opening your email client to send this feedback to <strong>vijayj6372@gmail.com</strong>. If it doesn't open automatically, click the button below.
                </p>
                <a
                  href={`mailto:vijayj6372@gmail.com?subject=Rizz%20AI%20Feedback&body=${encodeURIComponent(message)}`}
                  className="inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/10 px-6 py-2.5 text-xs font-semibold text-zinc-300 hover:bg-white/10 transition-all active:scale-95"
                >
                  Open Email Client
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Email Input */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Your Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full rounded-2xl bg-black/40 border border-white/5 p-4 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 transition-all text-sm"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Message or Feedback
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you love or what we should add next..."
                    className="w-full rounded-2xl bg-black/40 border border-white/5 p-4 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 transition-all text-sm resize-none leading-relaxed"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting || !message.trim()}
                  className="w-full bg-gradient-to-r from-[#F86B6D] to-[#8B5CF6] text-white hover:opacity-95 transition-all font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 active:scale-98 shadow-lg shadow-pink-500/5 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Encrypting feedback channel...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="h-4.5 w-4.5 transform rotate-45 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>

        {/* Footer info */}
        <div className="text-center text-xs text-zinc-600 mt-auto pt-8 border-t border-zinc-950">
          <p>Rizz AI © 2026 · rizzai.space · Free AI Wingman App</p>
        </div>

      </div>
    </div>
  );
}
