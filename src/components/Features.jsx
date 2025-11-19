import { CalendarCheck2, Stethoscope, Pill, FlaskConical, Shield, Bell, MonitorSmartphone, CreditCard, Users, FileText, ChartLine } from 'lucide-react'

const featureList = [
  { icon: Stethoscope, title: 'Patient Management', desc: 'Registration, profiles, demographics and history.' },
  { icon: CalendarCheck2, title: 'Appointments', desc: 'Online scheduling with real‑time availability.' },
  { icon: CreditCard, title: 'Billing & Insurance', desc: 'Invoices, payments and insurance workflows.' },
  { icon: Pill, title: 'Pharmacy', desc: 'Inventory, pricing, prescriptions and expiry tracking.' },
  { icon: FlaskConical, title: 'Laboratory', desc: 'Test requests, results and digital reports.' },
  { icon: Users, title: 'Nursing', desc: 'Vitals, wards, tasks and shift scheduling.' },
  { icon: FileText, title: 'Medical Records (EHR)', desc: 'Complete visit history and documents.' },
  { icon: ChartLine, title: 'Analytics', desc: 'Real-time dashboards and exports.' },
  { icon: MonitorSmartphone, title: 'Telemedicine', desc: 'Video consultations and secure chat.' },
  { icon: Bell, title: 'Notifications', desc: 'Email and SMS alerts and reminders.' },
  { icon: Shield, title: 'Access Control', desc: 'Role-based dashboards and permissions.' },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900">Trusted, modern healthcare platform</h2>
          <p className="mt-4 text-slate-600">Built with Ethiopian care in mind, blending innovation with cultural authenticity.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition bg-white/90">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-sky-400 to-emerald-400 text-slate-900 grid place-items-center mb-4">
                <Icon size={22} />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* cultural pattern stripe */}
      <div className="h-2 bg-[repeating-linear-gradient(90deg,#0ea5e9_0_12px,#10b981_12px_24px,#0f172a_24px_36px,#e2e8f0_36px_48px)] opacity-40" />
    </section>
  )
}
