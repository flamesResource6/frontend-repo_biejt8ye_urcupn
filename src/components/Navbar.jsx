import { Menu, Hospital, ShieldCheck, ChevronDown } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-white/10 bg-slate-950/50">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between text-white">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-emerald-400 grid place-items-center">
            <Hospital size={18} className="text-slate-900" />
          </div>
          <span className="font-semibold tracking-tight">Hulubedeje</span>
          <span className="text-xs text-blue-300/80">ሁሉ በደጄ</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-blue-100/90">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#modules" className="hover:text-white">Modules</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <div className="inline-flex items-center gap-1 hover:text-white cursor-pointer">
            <span>Language</span>
            <ChevronDown size={14} />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="#login" className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-white/20 hover:border-white/40">Login</a>
          <a href="#signup" className="inline-flex px-4 py-2 rounded-lg bg-sky-400 hover:bg-sky-300 text-slate-900 font-medium">Sign up</a>
          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20">
            <Menu size={18} />
          </button>
        </div>
      </nav>
    </header>
  )
}
