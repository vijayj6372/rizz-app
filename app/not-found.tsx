import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-[20%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[45%] h-[45%] rounded-full bg-pink-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center">
          <span className="text-7xl">🌌</span>
        </div>
        
        <div className="space-y-3">
          <h1 className="text-5xl font-black tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Rizz Lost in Space
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mx-auto">
            Even our AI wingman couldn't locate this page. It might have been deleted, renamed, or never existed in the first place.
          </p>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-[1.03] active:scale-95"
          >
            Back to Safety
          </Link>
        </div>
      </div>
    </div>
  );
}
