import Link from "next/link";

export default function PrivacyPage() {
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
            <h1 className="sticker-title">Privacy Policy 🔒</h1>
          </div>
          <div className="w-[46px]" />
        </div>

        {/* Content Area */}
        <div className="w-full max-w-2xl mx-auto space-y-6 pb-12 text-zinc-300 font-sans text-sm leading-relaxed flex-1 flex flex-col justify-center">
          <div className="text-center space-y-2 pt-2">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-2 border border-emerald-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">Privacy Policy</h2>
            <p className="text-xs text-zinc-500">Last updated: July 2025</p>
          </div>

          <div className="bg-zinc-900/60 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-xl">
            
            {/* Section 1 */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-400">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                1. Commitment to Privacy
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Rizz AI is committed to protecting your privacy. We believe love and relationship calculations should be private, fun, and secure.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                  <path d="m2 2 20 20" />
                </svg>
                2. Data Processing & Storage
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Your name inputs, quiz selections, and photo uploads are processed locally on your device for calculation purposes. We do not sell or monetize your personal information.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                  <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                  <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                  <line x1="6" x2="6.01" y1="6" y2="6" />
                  <line x1="6" x2="6.01" y1="18" y2="18" />
                </svg>
                3. Local Storage History
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Your calculation history (such as FireFun AI scores or Love Tests) is saved locally in your browser's localStorage so you can access previous results. You can clear this history anytime using the in-app history controls.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-blue-400">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                4. Updates & Contact
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We may periodically update this policy to reflect new features. If you have questions regarding privacy, please reach out through our Contact page or send us an email.
              </p>
            </div>

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
