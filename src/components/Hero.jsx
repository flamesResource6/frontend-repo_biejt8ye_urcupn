import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Hulubedeje • ሁሉ በደጄ
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight">
            A modern, trusted Hospital Management Platform
          </h1>
          <p className="mt-4 text-blue-200/90 leading-relaxed">
            Digitize patient care with a secure, AI-ready platform for hospitals and clinics. 
            Built for Ethiopia, with cultural authenticity and world-class UX.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#get-started" className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-3 font-medium transition">
              Get Started
            </a>
            <a href="#features" className="rounded-xl border border-white/20 hover:border-white/40 text-white px-5 py-3 font-medium transition">
              Explore Features
            </a>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>

      {/* Subtle cultural pattern using linear gradients */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[linear-gradient(45deg,rgba(56,189,248,0.15)_25%,transparent_25%),linear-gradient(-45deg,rgba(16,185,129,0.15)_25%,transparent_25%)] bg-[length:20px_20px] opacity-40" />
    </section>
  )
}
