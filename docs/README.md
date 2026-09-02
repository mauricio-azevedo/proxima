# Docs do Próxima

Índice da documentação. Mantido em dia no mesmo PR que muda a estrutura.

## Como as coisas se dividem

- **[domain/](domain/)** — regras de negócio e linguagem ubíqua.
  - [pelada.md](domain/pelada.md) — o domínio da pelada (fila, times, partida).
- **[standards/](standards/)** — padrões de referência, em conversão para lint, linha do `AGENTS.md`, checklist do revisor ou nada ([#29](https://github.com/mauricio-azevedo/proxima/issues/29)). Padrão é aplicado, não lido.
  - [engineering.md](standards/engineering.md) — qualidade de código & arquitetura.
  - [frontend.md](standards/frontend.md) — código React/Next (RSC, hooks, estado, perf).
  - [ui-ux.md](standards/ui-ux.md) — design, UX e acessibilidade (WCAG 2.2 AA).
  - [code-review.md](standards/code-review.md) — rubrica de revisão (padrão Google).
  - [testing.md](standards/testing.md) — estratégia e classificação de testes.
- **[adr/](adr/)** — decisões de arquitetura, imutáveis. Ver [ADR-0001](adr/0001-record-architecture-decisions.md).
- **[templates/](templates/)** — modelos reutilizáveis.
  - [concept.md](templates/concept.md) — spec de feature (front-door antes de codar).

## Na raiz do repo

- [AGENTS.md](../AGENTS.md) — guia operacional do agente, sempre carregado (o `CLAUDE.md` só o importa).
- [product/](product/) — conceito de cada feature, ex.: [fila-de-chegada.md](product/fila-de-chegada.md).
- [CONTRIBUTING.md](../CONTRIBUTING.md) · [SECURITY.md](../SECURITY.md) · [README.md](../README.md)
