# Domínio: Pelada

Este documento define a **linguagem ubíqua** e as regras de negócio do Próxima.
Termos aqui em **negrito** são os nomes canônicos — usados no código, no banco,
na UI e nas conversas. Quando a regra e o código divergirem, um dos dois está
errado; conserte-o.

## O problema

Hoje as peladas são organizadas no papel: alguém anota os jogadores conforme
chegam, controla quem joga e quem espera, e risca os perdedores para reanotá-los
no fim da lista. É trabalhoso, dá confusão e some. O Próxima substitui esse papel.

## Conceitos

- **Jogador** — uma pessoa que aparece para jogar.
- **Pelada** — o evento/sessão de um dia de jogos, com uma configuração e uma
  fila. (No código: os modelos de Pelada/Partida serão introduzidos na Fase 6.)
- **Time** — um conjunto de jogadores em quadra. Cada time tem **N na linha**
  (`teamSize`), configurável por pelada (ex.: 5).
- **Partida** — um confronto entre dois times. Termina por **gols** ou por
  **tempo**, o que vier primeiro.
- **Fila** — a ordem de espera. Quem não está em quadra é uma **próxima**,
  numerada por posição: **1ª próxima**, **2ª próxima**, etc. A "1ª próxima" é o
  próximo time/jogador a entrar.

## Regras

1. **Chegada**: jogadores entram no fim da fila na ordem em que chegam.
2. **Formação de times**: os primeiros `2 × teamSize` jogadores da fila formam a
   primeira partida (dois times de `teamSize`).
3. **Condição de término** (o que vier primeiro):
   - **Primeira partida do dia**: **3 gols** ou **15 minutos**.
   - **Partidas seguintes**: **2 gols** ou **10 minutos**.
   > Esses números são o _default_ e devem ser configuráveis por pelada.
4. **Vencedor fica**: o time vencedor permanece em quadra para a próxima partida.
5. **Perdedor vai para o fim**: os jogadores do time perdedor voltam para o fim
   da fila, na ordem definida (a definir na Fase 6: mantêm a ordem interna do time).
6. **Empate**: em caso de empate por tempo, a regra de desempate é **a definir**
   (ex.: ambos saem, ou disputa de gol de ouro). Registrar como decisão aberta.

## Decisões em aberto

Estas serão resolvidas (e viram ADRs) quando desenharmos a Fase 6:

- Empate por tempo: como desempatar?
- Ordem exata em que o time perdedor retorna à fila.
- Uma pelada tem dono/organizador? Autenticação é necessária no MVP?
- Histórico: guardamos resultados de partidas para estatísticas?

> Ao implementar qualquer feature, confirme a regra contra este documento. Se a
> regra estiver indefinida ou você precisar mudá-la, atualize este arquivo no
> mesmo PR.
