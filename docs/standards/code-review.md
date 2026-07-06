# Padrão de Code Review

Rubrica **vinculante** para revisar PRs — e para o agente se **auto-revisar**
antes de marcar um PR como pronto. Ancorada no padrão de code review do Google.

## O critério

Aprove quando o PR **melhora inequivocamente a saúde geral do código** — mesmo
sem estar perfeito. Melhoria contínua > perfeição. Nunca bloqueie por preferência
pessoal: distinga "isto está **errado**" de "eu faria diferente".

## Os 8 aspectos (checklist)

1. **Design** — a mudança pertence a este lugar e integra bem com o resto?
2. **Funcionalidade** — faz o que promete, incluindo casos de borda e o usuário real?
3. **Complexidade** — dá pra simplificar? Sem complexidade especulativa (ver [engineering.md](engineering.md)).
4. **Testes** — adequados e que falham quando o código quebra? (ver [testing.md](testing.md))
5. **Nomes** — revelam intenção e usam a linguagem ubíqua da [pelada.md](../domain/pelada.md)?
6. **Comentários** — explicam o _porquê_, não o _o quê_?
7. **Estilo** — Prettier/ESLint (automatizado; não gaste revisão humana nisso).
8. **Docs** — docs/ADRs/`pelada.md` atualizados junto quando a mudança pede?

## Tamanho do PR

CLs pequenos são a prática. Alvo **~100–200 linhas**; acima de ~1000 é grande
demais. O revisor pode pedir para **quebrar só pelo tamanho**. PR pequeno = review
melhor, menos bug, merge mais rápido.

## Como usamos aqui

- O agente roda o `/code-review` e se auto-revisa contra os 8 aspectos antes de
  marcar o PR como pronto.
- O checklist do [PULL_REQUEST_TEMPLATE](../../.github/PULL_REQUEST_TEMPLATE.md)
  operacionaliza os itens que o CI não automatiza.

## Fontes

- [Google Engineering Practices — Code Review](https://google.github.io/eng-practices/review/)
- [Software Engineering at Google](https://abseil.io/resources/swe-book) — capítulos de code review
