import Link from "next/link";

export default function TermsPage() {
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
            <h1 className="sticker-title">Terms of Service 📜</h1>
          </div>
          <div className="w-[46px]" />
        </div>

        {/* Content Area */}
        <div className="w-full max-w-2xl mx-auto space-y-6 pb-12 text-zinc-300 font-sans text-sm leading-relaxed flex-1 flex flex-col justify-center">
          <div className="text-center space-y-2 pt-2">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto mb-2 border border-rose-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">Terms of Service</h2>
            <p className="text-xs text-zinc-500">Last updated: July 2025</p>
          </div>

          <div className="bg-zinc-900/60 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-xl">
            
            {/* Section 1 */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                1. Entertainment Purpose
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Rizz AI, FireFun AI scores, marriage compatibility calculators, and crush ratings are designed strictly for entertainment and novelty purposes. They are meant to spark fun conversations and date night laughs.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-400">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <line x1="12" x2="12.01" y1="9" y2="9" />
                  <line x1="12" x2="12" y1="13" y2="17" />
                </svg>
                2. Fair Usage & Respect
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Users are expected to use Rizz AI respectfully. The platform must not be used to harass, bully, or demean individuals.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 21v-4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
                  <path d="M8 7h8" />
                  <path d="M10 11h4" />
                </svg>
                3. Intellectual Property
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                All branding, visual designs, quiz prompts, and code assets are protected property of Rizz AI.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                4. Agreement
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                By accessing Rizz AI, you agree to these Terms of Service. Enjoy the features and have fun connecting!
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
