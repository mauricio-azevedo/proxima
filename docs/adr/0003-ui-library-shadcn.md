# 0003. Biblioteca de UI: shadcn/ui

- **Status**: Aceito
- **Data**: 2026-07-06
- **Decisores**: Maurício

## Contexto

A Fase 6 (primeira feature) precisa de componentes de UI. Os nossos padrões
([ui-ux.md](../standards/ui-ux.md)) tornaram **WCAG 2.2 AA + ARIA APG
vinculantes**, com a regra "role é uma promessa": um widget custom (dialog,
combobox, menu) obriga a implementar foco, teclado e estados ARIA corretamente —
que é exatamente onde acessibilidade feita na unha quebra. Também queríamos a
fundação de tokens (que adiamos justamente esperando a lib trazer a sua) e
compatibilidade com o stack (Tailwind v4, RSC).

## Decisão

Adotar **shadcn/ui** — não é uma dependência, são componentes **copiados para o
repo** (você é dono do código), sobre primitivos acessíveis + Tailwind + tokens em
variáveis CSS.

Configuração (preset `bciwwC48`, via `shadcn init --preset`):

- **style**: `base-nova`; **primitivos**: **Base UI** (`@base-ui/react`) — a
  geração mais nova de primitivos acessíveis (sucessora espiritual do Radix), não
  o Radix clássico.
- **baseColor**: zinc; **cssVariables**: true (tokens semânticos em oklch, dark via
  `.dark`); **RSC**: true; **ícones**: Phosphor.
- **Todos os ~60 componentes** instalados em `src/components/ui/` (decisão
  consciente: ter a paleta completa disponível localmente).

## Alternativas consideradas

- **React Aria (Adobe)** — rigor de acessibilidade ainda maior (i18n, interações
  complexas), mas mais verboso e com curva maior. Overkill para o MVP.
- **Lib completa (Mantine / MUI)** — baterias inclusas, porém trazem o próprio
  sistema de estilo (menos controle Tailwind) e são dependência de runtime opaca.
- **Fazer na unha** — rejeitado: acessibilidade correta de widgets é difícil e
  frágil; violaria "role é uma promessa" na prática.

## Consequências

- **Acessibilidade vem dos primitivos** (Base UI) — foco/teclado/ARIA testados,
  não reimplementados por nós.
- **Código é nosso** — sujeito a review e customização; sem lock-in de runtime.
- **Tokens montados** — resolve a fundação que estava adiada.
- **Trade-off 1**: os componentes de `src/components/ui/**` (e `src/hooks/**`) são
  **isentos do nosso ESLint** (ver [eslint.config.mjs](../../eslint.config.mjs)) —
  são código do registro, formatados pelo Prettier e checados pelo TypeScript, mas
  não hand-mantidos aos nossos padrões (um update os sobrescreveria). Os **nossos**
  componentes (composições, fora de `ui/`) seguem o lint normal.
- **Trade-off 2**: updates vêm via CLI (`shadcn add`/`diff`), com reconciliação
  manual — não é uma dep versionada.
- **Trade-off 3**: instalar todos os 60 traz componentes e deps que ainda não
  usamos (repo maior). Aceito conscientemente.
