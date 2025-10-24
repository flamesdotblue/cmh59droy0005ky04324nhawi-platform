import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ContentShell from './components/ContentShell'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import AIAmbient from './components/AIAmbient'
import Day1 from './routes/Day1'

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="min-h-dvh w-full bg-zinc-950 text-zinc-50 relative">
      <AIAmbient />
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  )
}
