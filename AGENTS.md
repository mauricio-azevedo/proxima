# Próxima — como trabalhar neste repositório

App web que substitui o papel na organização de peladas de futebol: fila de jogadores,
times, placar e rotação vencedor-fica. `CLAUDE.md` importa este arquivo; **este é o
canônico**. Leia antes de mudar: domínio em `docs/domain/pelada.md`; decisões em `docs/adr/`.

## Fluxo (Relay)

Trabalho não trivial nasce de issue: `/plano <n>` escreve o plano na issue → carimbo →
`/executa <n>` executa em raia própria e abre o PR com evidência. Pronto é em uso, não merge.

## Regras locais

- Conventional Commits obrigatório; o hook `commit-msg` rejeita o resto.
- Não edite `src/generated/**` (gerado) nem migrations já aplicadas (gere outra).
- Decisão arquitetural vira ADR em `docs/adr/`, com "O que mudaria" (template `0000`).

## Ambiente e comandos

```bash
source ~/.nvm/nvm.sh --no-use && nvm use   # node/pnpm nao existem em shell nao interativo; nvm le o .nvmrc
docker compose up -d                       # Postgres 18 em 5434 (container proxima-db)
pnpm install                               # postinstall gera o client Prisma
pnpm dev                                   # http://localhost:3100
pnpm check                                 # O GATE: lint, typecheck, format, unit. Build e e2e rodam no CI em jobs proprios
pnpm test:e2e                              # Playwright; sobe build + start em 3100 (reusa servidor de pe)
pnpm db:migrate                            # cria migration e regenera o client (dev)
pnpm db:generate                           # so regenera o client
```

**Raia** (worktree de uma issue): `bin/raia <n> -- <comando>` carrega o nvm, sobe o banco,
cria o database `proxima_issue_<n>` e exporta `PORT=3100+n` e `DATABASE_URL`;
`bin/raia <n> --down` apaga o database. Dentro de uma raia, tudo passa por ele, inclusive
`git commit` (os hooks do husky precisam do `pnpm` no PATH).

## Stack

TypeScript strict · Next.js 16 (App Router) · React 19 · Tailwind v4 · shadcn/ui (Base UI) ·
PostgreSQL + Prisma 7 (driver adapter) · Vitest + Playwright · pnpm. Porquês em
[ADR-0002](docs/adr/0002-architecture-and-tech-stack.md).

## Estrutura

```
src/
  app/         Rotas, layouts e páginas (App Router). Server Components por padrão.
  lib/         Utilitários compartilhados: db.ts (Prisma), utils.ts (cn).
  components/  ui/ = primitivos shadcn/ui (VENDIDO do registro, isento do lint).
  hooks/       Hooks do shadcn (vendido).
  generated/   Client Prisma — GERADO, gitignored, não editar.
  env.ts       Variáveis de ambiente validadas (Zod). Importe daqui, nunca process.env direto.
e2e/           Testes Playwright.
prisma/        schema.prisma + migrations/.
docs/          adr/ (decisões), domain/ (regras de negócio), product/ (conceitos de feature).
bin/raia       Isolamento de runtime por raia.
```

## Convenções

- **Imports** usam o alias `@/` (ex.: `import { db } from "@/lib/db"`).
- **Env**: sempre `import { env } from "@/env"` — nunca `process.env` cru no app.
- **App Router**: Server Components por padrão; `"use client"` só com interatividade/estado.
- **Estilo**: Tailwind; combine classes com `cn()` de `@/lib/utils`.
- **UI**: alvo WCAG 2.2 AA; tokens semânticos, nunca valor cru; toda view de dados cobre
  loading/empty/error.
- **Componentes**: primitivos de `@/components/ui` (shadcn/ui, [ADR-0003](docs/adr/0003-ui-library-shadcn.md));
  adicione com `pnpm dlx shadcn@latest add <nome>`. Não os edite à mão sem motivo.
- **TypeScript**: sem `any`; `strict` no máximo (inclui `noUncheckedIndexedAccess`).

## Padrões

Padrão é aplicado, não lido: lint e CI cobram parte (complexidade, aninhamento, params), o
revisor cego cobra o resto. Os textos em `docs/standards/` são referência, em conversão (#29).

## Banco de dados

- Modelagem em `prisma/schema.prisma`; depois `pnpm db:migrate`.
- Acesso ao banco **só** pelo singleton `db` de `@/lib/db`.
- Prisma 7: a URL vem de `prisma.config.ts` (CLI) e do adapter em runtime; o schema **não**
  tem `url`. Não reintroduza.

## Testes

- **Unitário/componente** (Vitest, jsdom): `*.test.ts(x)` ao lado do código, em `src/`.
- **E2E** (Playwright): em `e2e/`, fluxos de usuário de verdade.
- Toda regra de negócio de `docs/domain/pelada.md` merece teste.
- Critério de aceite do plano vira nome de teste; o commit que faz passar não altera o teste.

## Armadilhas conhecidas (já custaram tempo)

- **Portas locais**: app em **3100**, Postgres em **5434** (3000/5433 são de outros projetos).
- **pnpm bloqueia build scripts** por segurança; libere só o necessário em
  `pnpm-workspace.yaml` (`allowBuilds`).
- **commitlint** limita cada linha do corpo do commit a **100 caracteres**.
- **"command not found: pnpm" em shell não interativo** — o nvm carrega tarde no `.bashrc`,
  não lê `.node-version`, e `source ~/.nvm/nvm.sh` sozinho sai com 3 (alias `default` aponta
  para versão não instalada), o que mata uma cadeia `&&`. Use `bin/raia` ou
  `source ~/.nvm/nvm.sh --no-use && nvm use`; o `.nvmrc` existe por isso (#30).
- **Raias vivem em `.claude/worktrees/` dentro do checkout** — ignoradas por git, prettier e
  eslint; não remova essas linhas (#30).
- **Playwright reusa servidor existente** — fora do `bin/raia`, o e2e de uma raia bateria no
  servidor da main; o config lança erro sem `PORT` dentro de raia (#30).
- **`pnpm check` vermelho com milhares de erros em `ds-bundle/` ou `.ds-sync/`** — artefatos
  locais do design-sync; ESLint não lê `.gitignore`, por isso estão no `globalIgnores` e no
  `.prettierignore` (#30).
- **e2e falha com "Executable doesn't exist" após bump do `@playwright/test`** — rode
  `pnpm exec playwright install chromium` (#27).

## Git & PRs

Branch `<tipo>/<n>-<slug>` da `main`; a proteção exige os dois jobs do CI e vale para admin;
squash-merge; `Refs #n` no PR, nunca `Closes` (a issue fecha quando o humano usou). O PR
carrega o output real do gate, do e2e e do navegador.

## Definição de pronto

1. `pnpm check` verde, output no PR.
2. Tocou fluxo: `pnpm test:e2e` verde.
3. Tocou tela: verificado no navegador de verdade — hoje, "a home carrega"; quando a fila
   existir, "criar pelada → adicionar jogador → ver a fila".
4. ADR se houve decisão; armadilha aqui se custou tempo, com `(#30)`.
5. PR com evidência e CI verde.

## Onde procurar

| Tópico                              | Doc                               | Quando ler                        |
| ----------------------------------- | --------------------------------- | --------------------------------- |
| Regra de negócio, linguagem ubíqua  | `docs/domain/pelada.md`           | ao planejar ou tocar domínio      |
| Conceito da fila de chegada         | `docs/product/fila-de-chegada.md` | ao planejar a fila                |
| Decisões (o `ls` é o índice)        | `docs/adr/`                       | ao tocar o assunto de uma decisão |
| Padrões de referência, em conversão | `docs/standards/`                 | só se o plano mandar              |
| Guia para humano externo            | `CONTRIBUTING.md`                 | não é para o agente               |
| Dúvida de processo                  | `~/.claude/RELAY.md`              | quando o fluxo não estiver claro  |

## Fora de escopo

Login, multi-pelada, tempo real, times, placar: ver `docs/product/fila-de-chegada.md`.
Não "conserte" o que é decisão.
