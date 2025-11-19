import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
        {/* Footer */}
        <footer id="contact" className="bg-slate-950 text-blue-100">
          <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-white">Hulubedeje • ሁሉ በደጄ</h4>
              <p className="mt-2 text-sm text-blue-200/80">A modern hospital management platform built for trust, speed and care.</p>
            </div>
            <div>
              <h5 className="font-semibold text-white">Company</h5>
              <ul className="mt-2 space-y-2 text-sm">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white">Legal</h5>
              <ul className="mt-2 space-y-2 text-sm">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white">Language</h5>
              <p className="mt-2 text-sm">English • አማርኛ</p>
            </div>
          </div>
          <div className="border-t border-white/10 py-6 text-center text-xs text-blue-300/70">© {new Date().getFullYear()} Hulubedeje</div>
        </footer>
      </main>
    </div>
  )
}

export default App
