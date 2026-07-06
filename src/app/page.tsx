export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
      <span className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
        Em construção
      </span>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Próxima</h1>
      <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        O fim da folha de papel na pelada. Fila, times e placar —{" "}
        <span className="whitespace-nowrap">quem ganha fica</span>.
      </p>
    </main>
  );
}
