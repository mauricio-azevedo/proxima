# 0002. Arquitetura e stack de tecnologia

- **Status**: Aceito
- **Data**: 2026-07-06
- **Decisores**: Maurício

## Contexto

Projeto novo (Próxima — substituir o papel na organização de peladas). Restrições
que moldam as escolhas:

- Time de uma pessoa + um agente de IA (Claude Code). Menos peças móveis = menos
  superfície para errar.
- Objetivo explícito: seguir **boas práticas consolidadas da indústria** no ciclo
  de vida inteiro, não invenções próprias.
- App web full-stack com banco de dados.

## Decisão

Adotamos o seguinte stack, priorizando maturidade, tipagem de ponta a ponta e boa
compatibilidade com desenvolvimento assistido por IA:

| Camada           | Escolha                                                                  |
| ---------------- | ------------------------------------------------------------------------ |
| Linguagem        | TypeScript (modo `strict` + flags extras)                                |
| Framework        | Next.js (App Router) — front e back integrados                           |
| UI               | React + Tailwind CSS                                                     |
| Banco            | PostgreSQL (Docker no dev)                                               |
| ORM              | Prisma 7 (gerador `prisma-client` + driver adapter `@prisma/adapter-pg`) |
| Validação de env | `@t3-oss/env-nextjs` + Zod                                               |
| Testes           | Vitest (unit/componente) + Playwright (e2e)                              |
| Qualidade        | ESLint + Prettier + Husky + lint-staged + commitlint                     |
| Gerenciador      | pnpm (via corepack), Node fixado em `.node-version`                      |
| CI               | GitHub Actions                                                           |

Decisões estruturais específicas:

- **App único, não monorepo.** Como o Next.js já integra front e back, um
  monorepo com workspaces adicionaria complexidade sem benefício agora (YAGNI).
  Revisitar se surgir um segundo artefato deployável (worker, app mobile).
- **Prisma 7 com driver adapter.** A v7 não lê mais a URL do banco pelo schema;
  o Migrate lê de `prisma.config.ts` e o client recebe um adapter (`@prisma/adapter-pg`)
  em runtime. Seguimos o modelo novo em vez de fixar numa versão antiga.
- **Postgres local via Docker** (porta de host `5434`) em vez do Postgres do
  sistema — reproduzível e descartável (`docker compose down -v`). O app dev roda
  na porta `3100` para não colidir com outros projetos locais.

## Alternativas consideradas

- **SPA (React/Vite) + API separada (NestJS).** Separação mais "enterprise" e
  parecida com o projeto anterior, mas com o dobro de peças para manter, dois
  deploys e tipos compartilhados manualmente. Rejeitado para um time de uma
  pessoa: o Next.js integrado entrega a mesma qualidade com menos atrito.
- **Drizzle no lugar de Prisma.** Excelente, mas o tooling do Prisma (migrations,
  studio, geração de client tipado) é mais completo e battle-tested.
- **npm/yarn no lugar de pnpm.** pnpm é mais rápido, econômico em disco e tem
  defaults de segurança melhores (bloqueia build scripts por padrão).

## Consequências

- Tipagem de ponta a ponta (banco → API → UI) numa linguagem só.
- Menos infraestrutura para operar; deploy simples (ex.: Vercel).
- Acoplamento ao ecossistema Next.js/Vercel. Aceitável dado o objetivo.
- Prisma 7 é recente: menos material na internet, mas seguimos a documentação
  oficial e cobrimos o caminho com testes.
