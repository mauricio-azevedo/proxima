# CLAUDE.md

Guia operacional para o Claude Code neste repositório. Leia antes de agir. Se a
realidade do código divergir daqui, o documento está desatualizado — corrija-o no
mesmo PR da mudança.

## O que é o Próxima

App web para substituir o papel na organização de peladas de futebol (fila de
jogadores, formação de times, placar e rotação vencedor-fica). As regras de
negócio e a linguagem ubíqua estão em **[docs/domain/pelada.md](docs/domain/pelada.md)** —
consulte-o ao mexer em qualquer feature de domínio.

## Como trabalhar

- **Planeje antes de mudança grande**: proponha o plano e alinhe antes de
  escrever muito código.
- **Fatias verticais finas**: prefira a menor mudança ponta a ponta que entregue
  valor.
- **Na dúvida sobre uma regra de domínio, pergunte** ou consulte
  [docs/domain/pelada.md](docs/domain/pelada.md) — não invente a regra.

## Regras de ouro

1. **IMPORTANT: os portões de qualidade não se contornam.** Todo trabalho precisa
   passar em `pnpm check` (lint + typecheck + format + testes). Nunca use `--no-verify`.
2. **Conventional Commits** obrigatórios (`feat:`, `fix:`, `chore:`, `docs:`,
   `refactor:`, `test:`, ...). O commit-msg hook rejeita o resto.
3. **IMPORTANT: nunca commite segredos.** Só `.env.example` é versionado; `.env` é ignorado.
4. **Não edite código gerado** (`src/generated/**`) nem migrations já aplicadas.
5. **Decisão arquitetural relevante → escreva um ADR** em `docs/adr/` (ver
   [ADR-0001](docs/adr/0001-record-architecture-decisions.md)).
6. **Verifique de verdade.** Mudou algo com comportamento observável? Exercite o
   fluxo (teste ou app rodando), não confie só em "compilou".

## Comandos

| Ação                     | Comando                             |
| ------------------------ | ----------------------------------- |
| Dev server (porta 3100)  | `pnpm dev`                          |
| Build de produção        | `pnpm build`                        |
| Lint / auto-fix          | `pnpm lint` / `pnpm lint:fix`       |
| Formatar / checar        | `pnpm format` / `pnpm format:check` |
| Type-check               | `pnpm typecheck`                    |
| Testes unitários         | `pnpm test` / `pnpm test:watch`     |
| Testes e2e               | `pnpm test:e2e`                     |
| **Tudo (gate agregado)** | `pnpm check`                        |
| Subir/derrubar Postgres  | `docker compose up -d` / `down`     |
| Migration (dev)          | `pnpm db:migrate`                   |
| Regerar client Prisma    | `pnpm db:generate`                  |
| Prisma Studio            | `pnpm db:studio`                    |

## Stack

TypeScript strict · Next.js (App Router) · React · Tailwind · PostgreSQL +
Prisma 7 (driver adapter) · Vitest + Playwright · pnpm · GitHub Actions. Detalhes
e o _porquê_ em [ADR-0002](docs/adr/0002-architecture-and-tech-stack.md).

## Estrutura

```
src/
  app/         Rotas, layouts e páginas (App Router). Server Components por padrão.
  lib/         Utilitários compartilhados: db.ts (Prisma), utils.ts (cn).
  generated/   Client Prisma — GERADO, gitignored, não editar.
  env.ts       Variáveis de ambiente validadas (Zod). Importe daqui, nunca process.env direto.
e2e/           Testes Playwright.
prisma/        schema.prisma + migrations/.
docs/          adr/ (decisões) e domain/ (regras de negócio).
.github/       CI (workflows/ci.yml) e templates.
```

## Convenções

- **Imports** usam o alias `@/` (ex.: `import { db } from "@/lib/db"`).
- **Env**: sempre `import { env } from "@/env"` — nunca `process.env` cru no app.
- **App Router**: componentes são **Server Components** por padrão; adicione
  `"use client"` só quando precisar de interatividade/estado no cliente.
- **Estilo**: Tailwind; combine classes com `cn()` de `@/lib/utils`.
- **TypeScript**: sem `any`. O `strict` está no máximo (inclui
  `noUncheckedIndexedAccess`); respeite a checagem em vez de silenciá-la.

## Banco de dados

- Modelagem em `prisma/schema.prisma`. Após mudar: `pnpm db:migrate` (cria
  migration + regenera o client).
- Acesso ao banco **só** via o singleton `db` de `@/lib/db`.
- Prisma 7: a URL vem de `prisma.config.ts` (CLI) e do adapter em runtime; o
  schema **não** tem `url`. Não reintroduza.

## Testes

- **Unitário/componente** (Vitest, jsdom): arquivos `*.test.ts(x)` ao lado do
  código, em `src/`. Prove lógica de domínio e componentes.
- **E2E** (Playwright): em `e2e/`, fluxos de usuário de verdade.
- Regra prática: toda regra de negócio de `docs/domain/pelada.md` merece teste.

## Armadilhas (gotchas)

Coisas que já custaram tempo aqui — não repita:

- **Portas locais**: app em **3100**, Postgres em **5434** (as padrão 3000/5433
  são usadas por outros projetos nesta máquina).
- **pnpm bloqueia build scripts** por segurança; libere só o necessário em
  `pnpm-workspace.yaml` (`allowBuilds`).
- **commitlint** limita cada linha do corpo do commit a **100 caracteres**.

## Git & PRs

- Branch a partir de `main` (trunk-based); nada de commit direto na `main`.
- A `main` tem **branch protection**: PR obrigatório e CI verde para mergear, sem
  exceção (vale até para admins).
- Um PR por unidade de trabalho. Processo completo em [CONTRIBUTING.md](CONTRIBUTING.md).
