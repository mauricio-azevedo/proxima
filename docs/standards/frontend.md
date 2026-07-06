# Padrões de Frontend (React / Next.js)

Padrões **vinculantes** de código frontend. Estendem o [engineering.md](engineering.md)
(princípios gerais) com o específico de React 19 + Next.js 16 (App Router). Itens ⚙️
são reforçados no lint; o `eslint-config-next` já cobre muita coisa (ver o fim — não
redeclaramos).

## React

- **Derive durante o render; nunca espelhe** prop/estado em outro estado
  sincronizado por Effect ⚙️ (`react-hooks/no-deriving-state-in-effects`). Se dá
  pra calcular do que já existe, **não é estado** ("You Might Not Need an Effect").
- **Effect só p/ sincronizar sistema externo** (rede, widget não-React, API do
  browser) — não p/ transformar dado, resetar estado ou tratar evento (isso é
  event handler) ⚙️ (`react-hooks/set-state-in-effect`).
- **Resetar estado por mudança de prop → use `key`**, não Effect.
- **Coloque o estado no menor dono comum**; levante só quando dois irmãos
  precisam. Não levante preventivamente.
- **Hooks só no topo** ⚙️ (`rules-of-hooks`); componentes e hooks **puros**.
- **`key` estável derivada de dado**; nunca índice em lista editável/reordenável
  ⚙️ (`react/no-array-index-key`), nunca `Math.random()`.
- **Input controlado XOR não controlado** (não alterne).
- **Composição > herança**; passe JSX como `children` ⚙️ (`no-unstable-nested-components`).
- _Contra-força:_ alguns Effects são legítimos (analytics, foco,
  `IntersectionObserver`, assinar store, `localStorage`). `useMemo` p/ cálculo
  genuinamente caro (>~1ms) ainda vale.

## Next.js App Router

- **Server Component por padrão**; `"use client"` só p/ estado/efeito/handler/API
  do browser/lib client-only.
- **Empurre `"use client"` p/ as folhas**; passe Server Components **via
  `children`/props** em vez de importá-los através da fronteira (mantém a subárvore
  fora do bundle do cliente).
- **Busque dado no Server Component** (async/await), perto de onde se usa;
  mutações via **Server Actions** + `revalidatePath`/`revalidateTag`.
- **Todo segmento assíncrono tem UX de streaming**: `loading.tsx` + `<Suspense>`
  granular; `error.tsx` (client, com `reset`); `not-found.tsx` + `notFound()`.
- **Cache explícito**: o Next 16 **não cacheia nada** por default; opte com
  `"use cache"` (+ `cacheLife`/`cacheTag`). Nunca assuma cache implícito.
- **`import "server-only"`** nos módulos de servidor; nunca vaze segredo pela
  fronteira do cliente.
- _Contra-força:_ superfícies muito interativas (editor, drag-drop, canvas,
  realtime) são legitimamente client-heavy; não estilhace um form em 12 Suspense
  (piora CLS); com o modelo explícito, **over-cache** é o novo modo de falha.

## Estado

- **Distinga server state** (assíncrono, remoto, compartilhado, pode envelhecer)
  **de client state** (síncrono, local). Trate diferente.
- **Server state** → RSC fetch + Server Actions. **TanStack Query só quando houver
  estado de servidor no cliente** (scroll infinito, otimista, polling) — YAGNI, não
  o adote antes.
- **Client state** → colocar primeiro (`useState`/`useReducer`); `Context` só p/
  globais estáveis e de baixa frequência (tema, locale, user) — Context
  re-renderiza todos os consumidores.
- **Store global** (Zustand/Redux) só p/ estado global síncrono cross-tree.
  _Contra-força:_ não delete Context por dogma — é a ferramenta certa p/ globais
  raros e estáveis.

## Performance / Core Web Vitals

- Metas p75: **LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1**.
- `next/image` com dimensões + `priority` na imagem do LCP; `next/font`. **Reserve
  espaço** p/ conteúdo assíncrono/mídia (protege CLS).
- **Menos JS no cliente**: RSC por padrão; `next/dynamic` p/ widget client-only
  pesado.
- **React Compiler ligado → NÃO memoize à mão** (`useMemo`/`useCallback`/`memo`
  por estabilidade de referência). Escreva código simples; o compilador cuida.
- _Contra-força:_ perfile antes de otimizar; não over-split Suspense; memoização
  manual existente pode ficar (o compilador compõe).

## API de componente

- **Composição/slots + `variant` union > explosão de booleanos** (>2–3 booleanos
  que combinam → refatore). Modele estados mutuamente exclusivos como union
  discriminada (evita combinação ilegal via TS).
- **Defaults sensatos**; estenda props nativas (`ComponentPropsWithoutRef<'button'>`),
  encaminhe `className`/`ref` e mescle com `cn()`.
- _Contra-força:_ UI orientada a dado (colunas de tabela) → props de config batem
  composição; não force slot onde um array é a API natural.

## CSS / Tailwind

- **Utility-first** no markup; extraia p/ um componente (não `@apply`) quando a
  string repete.
- **Tokens no `@theme`**; nunca hex/px cru no componente. `cn()` (clsx +
  tailwind-merge) resolve conflito — nunca concatene classes à mão onde há
  conflito. **Evite valores arbitrários** (`p-[13px]`, `bg-[#abc]`) — escape hatch
  justificado. Ordem de classe é do Prettier ⚙️ (`prettier-plugin-tailwindcss`,
  já ciente do `cn`).

## O que o `eslint-config-next` já cobre (não redeclarar)

`react-hooks` (rules-of-hooks, exhaustive-deps), `eslint-plugin-react`, todas as
`@next/next` (img/link/script/font), `jsx-a11y`, `import`. A variante
`core-web-vitals` eleva as regras de CWV a **error**. **Nós adicionamos só os
gaps:** `react/no-array-index-key`, `react/no-unstable-nested-components`,
`react-hooks/exhaustive-deps`→error, e os lints da era do compilador
(`no-deriving-state-in-effects`, `set-state-in-effect`).

## Fontes

- react.dev — [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) · [Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure) · [Keeping Components Pure](https://react.dev/learn/keeping-components-pure) · [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)
- Next.js — [Server & Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) · [Fetching Data](https://nextjs.org/docs/app/getting-started/fetching-data) · [Caching](https://nextjs.org/docs/app/getting-started/caching)
- [TanStack Query — does this replace client state?](https://tanstack.com/query/latest/docs/framework/react/guides/does-this-replace-client-state)
- [web.dev — Core Web Vitals](https://web.dev/articles/vitals) (LCP/INP/CLS)
- [React Compiler](https://react.dev/learn/react-compiler) (auto-memoização)
