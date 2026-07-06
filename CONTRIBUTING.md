# Contribuindo com o Próxima

## Fluxo de trabalho

Usamos **trunk-based development**: a `main` está sempre verde e deployável.

> **Feature nova?** Comece por um concept doc curto
> ([docs/templates/concept.md](docs/templates/concept.md)) — problema, appetite,
> casos & arestas — antes de codar. Spec boa gera output bom.

1. **Branch** a partir da `main`. Nome no formato `<tipo>/<descrição-curta>`,
   ex.: `feat/fila-de-jogadores`, `fix/empate-por-tempo`.
2. **Commits** seguem [Conventional Commits](https://www.conventionalcommits.org):
   `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, `perf:`, `ci:`.
   O hook `commit-msg` rejeita mensagens fora do padrão.
3. **Pull Request** para a `main`. O CI precisa estar verde para o merge.
4. **Merge** com squash, mantendo um título em Conventional Commit (vira a linha
   do histórico da `main` e alimenta changelogs futuros).

## Portões de qualidade

Rodam automaticamente — você não precisa lembrar, mas não os contorne
(`--no-verify` é proibido):

| Quando         | O que roda                                   | Onde               |
| -------------- | -------------------------------------------- | ------------------ |
| `git commit`   | Lint + Prettier nos arquivos staged          | Husky `pre-commit` |
| `git commit`   | Validação da mensagem (Conventional Commits) | Husky `commit-msg` |
| `git push`     | `typecheck` + testes unitários               | Husky `pre-push`   |
| PR / push main | Lint, typecheck, format, unit, build, e2e    | GitHub Actions     |

Para rodar o gate completo localmente a qualquer momento: `pnpm check`.

## Desenvolvimento local

Ver o passo a passo de setup no [README](README.md#começando). Resumo do ciclo:

```bash
docker compose up -d      # banco
pnpm dev                  # app em http://localhost:3100
pnpm test:watch           # testes em watch enquanto desenvolve
```

## Banco de dados & migrations

- Edite `prisma/schema.prisma` e rode `pnpm db:migrate` para criar/aplicar a
  migration e regenerar o client.
- **Migrations são imutáveis** depois de commitadas. Para corrigir, gere uma nova.
- Precisa recomeçar do zero? `pnpm db:reset` (apaga e reaplica tudo).

## Decisões de arquitetura (ADRs)

Decisão significativa (cara de reverter, afeta a estrutura, ou geraria um "por
que fizeram assim?") vira um ADR em `docs/adr/`, copiando `0000-template.md` e
numerando na sequência. Ver [ADR-0001](docs/adr/0001-record-architecture-decisions.md).

## Definition of Done

Uma mudança está "pronta" quando:

- [ ] `pnpm check` passa (lint, typecheck, format, testes).
- [ ] Comportamento novo tem teste (unit e/ou e2e).
- [ ] Regras de negócio afetadas estão refletidas em `docs/domain/pelada.md`.
- [ ] Decisões relevantes viraram ADR.
- [ ] Sem segredos, `console.log` de depuração ou código morto no diff.

## Configurar branch protection (uma vez, no GitHub)

Para que o CI vire um gate real de merge, ative em
**Settings → Branches → Add rule** para a `main`:

- ✅ Require a pull request before merging
- ✅ Require status checks to pass before merging → selecione os checks
  `quality` e `e2e` do workflow de CI
- ✅ Require branches to be up to date before merging
- ✅ Do not allow bypassing the above settings

Isso impede push direto na `main` e merge com CI vermelho.
