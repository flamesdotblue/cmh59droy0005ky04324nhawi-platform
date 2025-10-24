import { Link, useLocation } from 'react-router-dom'
import { BookOpen, ChevronRight, Rocket } from 'lucide-react'

function MetricBar({ label, value, color = 'bg-lime-400' }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-[11px] text-zinc-400">
        <span>{label}</span>
        <span className="text-zinc-300">{value}%</span>
      </div>
      <div className="h-1.5 w-full rounded bg-zinc-800 overflow-hidden">
        <div className={`h-full ${color} w-[${value}%]`} style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

export default function Sidebar({ onNavigate }) {
  const { pathname } = useLocation()

  const NavItem = ({ to, label }) => {
    const active = pathname === to
    return (
      <Link
        to={to}
        onClick={onNavigate}
        className={`group flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-zinc-800/70 ${
          active ? 'bg-zinc-800 text-white' : 'text-zinc-300'
        }`}
      >
        <span className="flex items-center gap-2">
          <BookOpen size={16} className="text-lime-400" />
          {label}
        </span>
        <ChevronRight size={16} className="opacity-60 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    )
  }

  return (
    <div className="min-h-full p-4">
      <div className="mb-6 flex items-center gap-3 px-2">
        <div className="relative">
          <div className="grid h-9 w-9 place-items-center rounded-md bg-lime-500 text-black font-black shadow-[0_0_40px_#bef26455]">
            <Rocket size={18} />
          </div>
          <div className="absolute -inset-1 blur-xl bg-lime-500/20 -z-10" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-zinc-400">Cohort</div>
          <div className="font-semibold text-zinc-100">AI Fluency</div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="px-2 text-[11px] uppercase tracking-wider text-zinc-500">Day 1</div>
        <NavItem to="/day-1" label="Day 1 material" />
      </div>

      <div className="mt-8 rounded-xl border border-zinc-800/80 bg-zinc-900/70 p-4 backdrop-blur">
        <div className="text-xs text-zinc-400">Cohort signal</div>
        <div className="mt-3 space-y-3">
          <MetricBar label="Fluency" value={72} />
          <MetricBar label="Rigor" value={64} color="bg-emerald-400" />
          <MetricBar label="Velocity" value={88} color="bg-yellow-300" />
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-zinc-800/80 bg-zinc-900/70 p-4 backdrop-blur">
        <div className="text-xs text-zinc-400">Up next</div>
        <div className="mt-1 font-medium text-zinc-100">Day 2: Prompt patterns</div>
        <div className="mt-2 text-xs text-zinc-400">Unlock strategies for predictable outcomes.</div>
      </div>
    </div>
  )
}
