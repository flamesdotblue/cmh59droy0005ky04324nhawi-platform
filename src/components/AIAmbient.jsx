export default function AIAmbient() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          backgroundPosition: 'center',
        }}
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(132,204,22,0.18)_0%,rgba(0,0,0,0)_60%)]" />
      {/* Pulses */}
      <div className="absolute -top-24 left-1/3 h-[42rem] w-[42rem] bg-lime-500/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -bottom-32 right-1/4 h-[36rem] w-[36rem] bg-yellow-300/10 blur-3xl rounded-full animate-pulse" />
    </div>
  )
}
