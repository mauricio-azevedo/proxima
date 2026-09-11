# Próxima

![CI](https://github.com/mauricio-azevedo/proxima/actions/workflows/ci.yml/badge.svg)

App web para organizar **peladas de futebol** — substitui a folha de papel onde
alguém anota quem chegou, controla a fila de espera ("1ª próxima", "2ª próxima"…),
forma os times e gerencia o rodízio "vencedor fica". Regras completas em
[docs/domain/pelada.md](docs/domain/pelada.md).

## Stack

TypeScript · [Next.js](https://nextjs.org) (App Router) · React · Tailwind CSS ·
PostgreSQL + [Prisma](https://www.prisma.io) · Vitest · Playwright · pnpm.
O _porquê_ de cada escolha está em [docs/adr](docs/adr).

## Pré-requisitos

- **Node** — a versão fixada em [`.node-version`](.node-version). Use um gerenciador
  como [nvm](https://github.com/nvm-sh/nvm)/[fnm](https://github.com/Schniz/fnm)
  (`nvm install` na raiz instala a versão certa).
- **pnpm** — via corepack: `corepack enable`.
- **Docker** — para o Postgres local.

## Começando

```bash
# 1. Instalar dependências (gera o client do Prisma automaticamente)
pnpm install

# 2. Configurar o ambiente (o .env é por app, não na raiz)
cp apps/web/.env.example apps/web/.env

# 3. Subir o banco (Postgres em container, porta 5434)
docker compose up -d

# 4. Aplicar as migrations
pnpm db:migrate

# 5. Rodar em desenvolvimento (http://localhost:3100)
pnpm dev
```

Antes de abrir um PR, rode o gate completo:

```bash
pnpm check   # lint + typecheck + format + testes
```

## Scripts

| Script            | O que faz                                         |
| ----------------- | ------------------------------------------------- |
| `pnpm dev`        | Dev server com HMR (porta 3100)                   |
| `pnpm build`      | Build de produção                                 |
| `pnpm start`      | Sobe o build de produção (porta 3100)             |
| `pnpm check`      | Gate agregado: lint + typecheck + format + testes |
| `pnpm test`       | Testes unitários (Vitest)                         |
| `pnpm test:e2e`   | Testes end-to-end (Playwright)                    |
| `pnpm db:migrate` | Cria e aplica migration (dev)                     |
| `pnpm db:studio`  | Abre o Prisma Studio                              |

Lista completa em [`package.json`](package.json) (raiz) e
[`apps/web/package.json`](apps/web/package.json) (o app). Adicionar um primitivo shadcn/ui é
a exceção que não roda da raiz: `cd apps/web && pnpm dlx shadcn@latest add <nome>`.

## Estrutura

Monorepo pnpm: cada aplicação vive em `apps/` e a raiz só orquestra (todos os comandos
acima rodam dela e delegam ao projeto dono).

```
apps/web/           O app Next (@proxima/web)
  src/app/            Rotas, layouts e páginas (App Router)
  src/lib/            Utilitários compartilhados (db, cn)
  src/env.ts          Variáveis de ambiente validadas
  prisma/             Schema e migrations
  .env                Ambiente do app (template em .env.example)
e2e/                Testes Playwright
docs/               Decisões (adr/) e regras de negócio (domain/)
```

## Contribuindo

Fluxo de trabalho e portões de qualidade em [CONTRIBUTING.md](CONTRIBUTING.md).
Diretrizes para o agente em [AGENTS.md](AGENTS.md) (o `CLAUDE.md` só o importa).
