export default function CTA() {
  return (
    <section id="get-started" className="relative bg-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.15),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl sm:text-4xl font-semibold">Launch your hospital portal in days, not months</h3>
          <p className="mt-3 text-blue-200/90">From multi‑role dashboards to EHR and pharmacy – everything is integrated. Mobile‑first, secure, and scalable.</p>
          <ul className="mt-6 space-y-2 text-blue-200/90 text-sm">
            <li>• Role‑based access for Admin, Doctor, Nurse, Lab, Pharmacy, Patient</li>
            <li>• Dark/Light mode, multilingual (English + Amharic)</li>
            <li>• Analytics tiles, PDF/Excel exports</li>
          </ul>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <form className="grid gap-3">
            <input className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 placeholder:text-blue-200/60" placeholder="Hospital / Clinic name" />
            <input className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 placeholder:text-blue-200/60" placeholder="Work email" />
            <div className="grid grid-cols-2 gap-3">
              <input className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 placeholder:text-blue-200/60" placeholder="Phone" />
              <select className="rounded-xl bg-white/10 border border-white/10 px-4 py-3">
                <option>Role</option>
                <option>Admin</option>
                <option>Doctor</option>
                <option>Nurse</option>
                <option>Pharmacist</option>
                <option>Lab</option>
              </select>
            </div>
            <button className="mt-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-900 font-medium px-4 py-3">Request a demo</button>
            <p className="text-xs text-blue-200/70">By continuing, you agree to our Terms & Privacy.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
