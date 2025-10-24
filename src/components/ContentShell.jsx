import * as ScrollArea from '@radix-ui/react-scroll-area'

export default function ContentShell({ sidebar, topbar, children, mobileNavOpen, onCloseMobileNav }) {
  return (
    <div className="grid grid-rows-[auto,1fr] md:grid-rows-1 md:grid-cols-[300px,1fr] h-dvh relative">
      {/* Sidebar - desktop */}
      <aside className="hidden md:flex md:flex-col bg-zinc-900/80 border-r border-zinc-800 backdrop-blur-xl">
        <ScrollArea.Root className="h-dvh w-[300px]">
          <ScrollArea.Viewport className="h-full w-full">{sidebar}</ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical" className="flex select-none touch-none p-0.5 bg-transparent">
            <ScrollArea.Thumb className="flex-1 rounded bg-zinc-700" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </aside>

      {/* Mobile overlay sidebar */}
      <div className={`fixed inset-0 z-40 md:hidden ${mobileNavOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div
          onClick={onCloseMobileNav}
          className={`absolute inset-0 bg-black/70 transition-opacity ${mobileNavOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        <div
          className={`absolute inset-y-0 left-0 w-[86%] max-w-[320px] bg-zinc-900/95 border-r border-zinc-800 backdrop-blur-xl transition-transform ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <ScrollArea.Root className="h-full">
            <ScrollArea.Viewport className="h-full">{sidebar}</ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical" className="flex select-none touch-none p-0.5 bg-transparent">
              <ScrollArea.Thumb className="flex-1 rounded bg-zinc-700" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </div>
      </div>

      {/* Main content area */}
      <div className="relative flex flex-col min-w-0">
        <header className="sticky top-0 z-30 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/50">
          {topbar}
        </header>
        <main className="flex-1 overflow-auto">
          <div className="mx-auto max-w-4xl px-5 py-8 md:px-8 md:py-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
