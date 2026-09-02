# Contribuindo com o Próxima

## Fluxo de trabalho

O repositório segue o Relay, método de trabalho com agentes de código do autor (privado
por ora): sessão sem estado, repositório com estado. Trabalho não trivial nasce de uma issue com plano carimbado
(`/plano <n>`), é executado em raia própria (`/executa <n>`) e entra por PR com evidência
real (output do gate, do e2e e do navegador). A `main` está sempre verde; merge com squash e
título em Conventional Commit. Guia operacional completo em [`AGENTS.md`](AGENTS.md).

## Portões de qualidade

Rodam automaticamente — você não precisa lembrar, mas não os contorne
(`--no-verify` é proibido):

| Quando         | O que roda                                   | Onde               |
| -------------- | -------------------------------------------- | ------------------ |
| `git commit`   | Lint + Prettier nos arquivos staged          | Husky `pre-commit` |
| `git commit`   | Validação da mensagem (Conventional Commits) | Husky `commit-msg` |
| `git push`     | `typecheck` + testes unitários               | Husky `pre-push`   |
| PR / push main | Lint, typecheck, format, unit, build, e2e    | GitHub Actions     |

Para rodar o gate completo localmente a qualquer momento: `pnpm check`. A proteção da
`main` exige os dois jobs do CI e vale para administradores.

## Desenvolvimento local

Ver o passo a passo de setup no [README](README.md#começando). Resumo do ciclo:

```bash
source ~/.nvm/nvm.sh --no-use && nvm use   # node/pnpm do .nvmrc
docker compose up -d                       # banco
pnpm dev                                   # app em http://localhost:3100
pnpm test:watch                            # testes em watch enquanto desenvolve
```

Numa raia (worktree de uma issue), todo comando passa por `bin/raia <n> -- <comando>`, que
sobe o banco, cria um database próprio e exporta `PORT` e `DATABASE_URL`.

## Banco de dados & migrations

- Edite `prisma/schema.prisma` e rode `pnpm db:migrate` para criar/aplicar a
  migration e regenerar o client.
- **Migrations são imutáveis** depois de commitadas. Para corrigir, gere uma nova.
- Precisa recomeçar do zero? `pnpm db:reset` (apaga e reaplica tudo).

## Decisões de arquitetura (ADRs)

Decisão significativa (cara de reverter, afeta a estrutura, ou geraria um "por
que fizeram assim?") vira um ADR em `docs/adr/`, copiando `0000-template.md` e
numerando na sequência. A seção "O que mudaria" diz em que condição a decisão deve ser
revista. Ver [ADR-0001](docs/adr/0001-record-architecture-decisions.md).
