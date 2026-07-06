# 0001. Registrar decisões de arquitetura com ADRs

- **Status**: Aceito
- **Data**: 2026-07-06
- **Decisores**: Maurício

## Contexto

Decisões técnicas importantes (escolha de stack, padrões, trade-offs) tendem a
se perder. Meses depois ninguém lembra _por que_ algo foi feito de um jeito, e o
custo de reabrir a discussão — ou de reverter sem entender — é alto. Isso é ainda
mais relevante aqui, onde grande parte do código é escrita por um agente de IA:
o registro do "porquê" é o que mantém decisões consistentes ao longo do tempo.

## Decisão

Vamos registrar decisões arquiteturais significativas como **Architecture
Decision Records (ADRs)**: arquivos Markdown curtos, numerados e imutáveis em
`docs/adr/`, seguindo o formato de `0000-template.md`.

Uma decisão é "significativa" se for cara de reverter, afetar a estrutura do
projeto, ou se alguém provavelmente perguntaria "por que fizeram assim?".

ADRs não são editados após aceitos; para mudar uma decisão, cria-se um novo ADR
que **substitui** o anterior (atualizando o Status do antigo).

## Alternativas consideradas

- **Não documentar** — o conhecimento vira tribal e evapora. É o problema que
  estamos resolvendo.
- **Wiki/Notion externo** — sai de sincronia com o código e não versiona junto
  com o PR que implementa a decisão.

## Consequências

- O "porquê" das decisões fica versionado ao lado do código e revisado no PR.
- Custa um pouco de disciplina: decisões relevantes exigem escrever um ADR.
- O histórico de ADRs vira onboarding natural para qualquer pessoa (ou agente).
