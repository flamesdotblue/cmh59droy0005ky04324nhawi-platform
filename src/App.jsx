import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import ContentShell from './components/ContentShell'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import { ThemeProvider } from './components/ThemeProvider'
import { mdxComponents } from './components/MDXComponents'
import Day1 from './routes/Day1'

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <ThemeProvider>
      <MDXProvider components={mdxComponents}>
        <BrowserRouter>
          <div className="min-h-dvh w-full bg-zinc-950 text-zinc-50 dark:bg-zinc-950 dark:text-zinc-50 transition-colors">
            <ContentShell
              sidebar={<Sidebar onNavigate={() => setMobileNavOpen(false)} />}
              topbar={<TopBar onMenuClick={() => setMobileNavOpen((v) => !v)} mobileNavOpen={mobileNavOpen} />}
              mobileNavOpen={mobileNavOpen}
              onCloseMobileNav={() => setMobileNavOpen(false)}
            >
              <Routes>
                <Route path="/" element={<Navigate to="/day-1" replace />} />
                <Route path="/day-1" element={<Day1 />} />
                <Route path="*" element={<Navigate to="/day-1" replace />} />
              </Routes>
            </ContentShell>
          </div>
        </BrowserRouter>
      </MDXProvider>
    </ThemeProvider>
  )
}
