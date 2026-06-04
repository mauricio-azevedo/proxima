import type { ReactNode } from 'react'

type AuthLayoutProps = {
  title: string
  subtitle: string
  children: ReactNode
}

export function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
  return (
    <main className="min-h-svh bg-zinc-950 px-5 py-8 text-zinc-50">
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-md flex-col justify-center">
        <div className="mb-8">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-xl font-black text-zinc-950 shadow-[0_18px_40px_rgba(52,211,153,0.24)]">
            P
          </div>
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-emerald-300 uppercase">Próxima</p>
          <h1 className="text-4xl leading-tight font-semibold tracking-[-0.04em] text-white">{title}</h1>
          <p className="mt-3 text-base leading-7 text-zinc-400">{subtitle}</p>
        </div>

        <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur">
          {children}
        </section>
      </div>
    </main>
  )
}
