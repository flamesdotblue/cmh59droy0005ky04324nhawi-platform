import { Link, useLocation } from 'react-router-dom'
import { BookOpen, ChevronRight, Rocket } from 'lucide-react'

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
      <div className="mb-6 flex items-center gap-2 px-2">
        <div className="grid h-8 w-8 place-items-center rounded-md bg-lime-500 text-black font-black">
          <Rocket size={18} />
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-zinc-400">Cohort</div>
          <div className="font-semibold text-zinc-100">AI Fluency</div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="px-2 text-[11px] uppercase tracking-wider text-zinc-500">Day 1</div>
        <NavItem to="/day-1" label="Day 1 material" />
      </div>

      <div className="mt-8 rounded-lg border border-zinc-800 bg-zinc-900 p-3">
        <div className="text-xs text-zinc-400">Up next</div>
        <div className="mt-1 font-medium text-zinc-100">Day 2: Prompt patterns</div>
        <div className="mt-2 text-xs text-zinc-400">Unlock strategies for predictable outcomes.</div>
      </div>
    </div>
  )
}
