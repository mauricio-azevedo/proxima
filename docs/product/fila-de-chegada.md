# Concept: Fila de chegada

- **Status**: rascunho — aguardando revisão
- **Data**: 2026-07-06

Primeira fatia vertical da Fase 6. Substitui o começo da folha de papel: a lista
de quem chegou, na ordem.

## Problema

Ao organizar uma pelada, alguém anota no papel quem foi chegando — e essa **ordem
de chegada é a fundação de tudo** (define quem entra primeiro, quem é "próxima").
No papel some, rasura e dá confusão. Esta fatia resolve só isso: registrar e ver a
fila de chegada, digital.

## Premissas

- **Sem login no MVP** — quem tem o link opera a pelada (grupos pequenos e
  confiáveis, como diz o [domínio](../domain/pelada.md)). Auth entra se/quando doer.
- **Uma pelada de cada vez** — o foco é a fila; multi-pelada/multi-usuário depois.
- **Só a chegada** — formação de times, placar e rotação vêm nas próximas fatias.

## Appetite

Pequeno: uma fatia fina ponta a ponta (banco → API → tela). ~Meia sessão, depois do
andaime do [ADR-0004](../adr/0004-backend-separado-nestjs.md).
Se estourar, corta escopo (ver Circuit breaker), não estica.

## Proposta

1. **Criar uma pelada** — um nome (ex.: "Quinta no Zé"). `teamSize` fica com default
   5, mas ainda não é usado nesta fatia.
2. **Adicionar jogador** — digita o nome; entra no **fim da fila**.
3. **Ver a fila** ordenada por chegada, com a numeração de posição.
4. **Remover jogador** — foi embora / errou o nome; a fila renumera.

Tela única, mobile-first, usando os componentes acessíveis do `@/components/ui`.

## Casos & arestas

- **Caminho feliz:** cria a pelada, adiciona 12 jogadores, vê a fila 1…12.
- **Nome duplicado** (dois "João"): permitir (é comum na pelada); sem bloquear.
- **Remover do meio:** a fila renumera automaticamente.
- **Estado vazio:** pelada sem jogadores → "Ninguém chegou ainda. Adicione o
  primeiro." (contrato de 4 estados, cf. [ui-ux.md](../standards/ui-ux.md)).
- **Concorrência** (link compartilhado, duas pessoas adicionando junto): MVP
  ordena por posição de chegada (posição vs `createdAt`: ver "Impacto no domínio");
  sem tempo real ainda (recarrega pra ver o novo). Otimista no add local de quem digita.

## FAQ de objeções

- **P:** Sem login, alguém com o link não pode bagunçar a pelada?
  **R:** Premissa do domínio (grupos confiáveis). Adicionar auth agora inflaria a
  fatia; entra quando houver dor real.
- **P:** Por que não já formar os times?
  **R:** Fatia fina primeiro. A fila é a base de times/placar/rotação — construir
  ela sólida destrava o resto.
- **P:** Precisa de `teamSize` já na criação?
  **R:** Guardamos com default 5 para não migrar depois, mas a UI de configurar
  fica pra fatia de times.

## Fora de escopo

Times · partida · placar · rotação vencedor-fica · login/dono · histórico ·
estatísticas · multi-pelada · tempo real.

## Circuit breaker

Se estourar o appetite, corta nesta ordem: (1) editar jogador — fica só
adicionar + remover; (2) a numeração de "próximas" vira só a ordem visual, sem o
rótulo "1ª próxima".

## Impacto no domínio

- Introduz a entidade **Pelada** (`name`, `teamSize` default 5) e liga **Player**
  a uma pelada com **ordem de chegada** (hoje `Player` é global). Isso é uma
  mudança de schema + migration.
- A modelagem da ordem da fila (campo de posição vs. ordenar por `createdAt`) e a
  relação Pelada↔Player, se não forem óbvias, viram um **ADR** curto.
- Atualiza o [`pelada.md`](../domain/pelada.md): formaliza "Pelada" como entidade.
- Decisões em aberto do domínio que esta fatia **adia** (não resolve): login,
  dono da pelada, histórico, desempate/regras de partida.
- Depende do andaime do [ADR-0004](../adr/0004-backend-separado-nestjs.md) (API NestJS em
  `apps/api`, Next só frontend): a fila é a primeira fatia a atravessar a costura
  web → contrato → api → banco.
- Recomendações levantadas na decisão do ADR-0004, para o plano confirmar ou refutar:
  - **Participação ≠ identidade** — a entrada na fila é uma tabela própria (nome, posição,
    `peladaId`); a conta de usuário, quando existir, vira FK opcional nela.
  - **Posição explícita e só crescente por pelada**, em vez de ordenar por `createdAt` — a
    regra 5 do domínio manda o perdedor para o fim da fila, e timestamp de criação não
    expressa isso. Chegar e voltar do time perdedor são append; remover é delete; a
    numeração de "próxima" é calculada na leitura.
  - **Pelada como fronteira de transação** — toda mutação trava a linha da pelada
    (`FOR UPDATE`) dentro da transação; dois organizadores tocando juntos serializam só
    dentro daquela pelada, nunca entre peladas.
