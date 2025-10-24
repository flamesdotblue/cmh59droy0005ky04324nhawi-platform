import { ExternalLink } from 'lucide-react'

export function Callout({ children }) {
  return (
    <div className="my-6 rounded-lg border-2 border-black bg-yellow-300 p-4 text-black shadow-[4px_4px_0_0_#000]">
      {children}
    </div>
  )
}

export function Highlight({ children }) {
  return <span className="text-lime-400 font-semibold">{children}</span>
}

export const mdxComponents = {
  h1: (props) => (
    <h1
      {...props}
      className="font-extrabold tracking-tight text-3xl md:text-4xl text-white dark:text-white mb-6"
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      className="font-bold tracking-tight text-2xl md:text-3xl text-white dark:text-white mt-10 mb-4"
    />
  ),
  p: (props) => <p {...props} className="text-zinc-300 leading-relaxed mb-4" />,
  ul: (props) => <ul {...props} className="list-disc pl-6 space-y-2 text-zinc-300 mb-4" />,
  ol: (props) => <ol {...props} className="list-decimal pl-6 space-y-2 text-zinc-300 mb-4" />,
  a: (props) => (
    <a
      {...props}
      className="inline-flex items-center gap-1 text-lime-400 underline decoration-lime-500/50 underline-offset-4 hover:text-lime-300"
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
      <ExternalLink size={14} />
    </a>
  ),
  blockquote: (props) => (
    <blockquote {...props} className="border-l-4 border-yellow-400 pl-4 text-zinc-300 italic mb-4" />
  ),
  Callout,
  Highlight,
}
