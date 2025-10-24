import { Menu, Sun, Moon, ExternalLink } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function TopBar({ onMenuClick, mobileNavOpen }) {
  const { theme, toggle } = useTheme()

  return (
    <div className="flex items-center justify-between px-4 py-3 md:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          aria-label="Toggle navigation"
          className="inline-flex md:hidden items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 p-2 text-zinc-200 hover:bg-zinc-800"
        >
          <Menu size={18} className={`${mobileNavOpen ? 'text-lime-400' : ''}`} />
        </button>
        <div className="hidden md:block text-xs uppercase tracking-wider text-zinc-400">AI Fluency Cohort</div>
      </div>

      <div className="flex items-center gap-2">
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-md bg-lime-500 px-3 py-1.5 text-sm font-semibold text-black hover:bg-lime-400 transition-colors"
        >
          Explore <ExternalLink size={16} />
        </a>
        <button
          onClick={toggle}
          className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-200 hover:bg-zinc-800"
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
