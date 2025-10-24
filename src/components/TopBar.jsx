import { Menu, Sun, Moon, ExternalLink } from 'lucide-react'
import { useTheme } from './ThemeProvider'

function GlintButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="relative inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold text-black bg-lime-400 hover:bg-lime-300 transition-colors overflow-hidden"
    >
      <span className="absolute inset-0 bg-gradient-to-tr from-lime-300/40 to-transparent" />
      <span className="relative">{children}</span>
    </a>
  )
}

export default function TopBar({ onMenuClick, mobileNavOpen }) {
  const { theme, toggle } = useTheme()

  return (
    <div className="flex items-center justify-between px-4 py-3 md:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          aria-label="Toggle navigation"
          className="inline-flex md:hidden items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/80 p-2 text-zinc-200 hover:bg-zinc-800/80"
        >
          <Menu size={18} className={`${mobileNavOpen ? 'text-lime-400' : ''}`} />
        </button>
        <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-400">
          <span className="text-lime-400">2025</span> AI Fluency Cohort
        </div>
      </div>

      <div className="flex items-center gap-2">
        <GlintButton href="https://vercel.com">Explore <ExternalLink size={16} /></GlintButton>
        <button
          onClick={toggle}
          className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-sm text-zinc-200 hover:bg-zinc-800/80"
        >
          {theme === 'dark' ? (
            <>
              <Sun size={16} className="text-lime-400" /> Light
            </>
          ) : (
            <>
              <Moon size={16} className="text-lime-400" /> Dark
            </>
          )}
        </button>
      </div>
    </div>
  )
}
