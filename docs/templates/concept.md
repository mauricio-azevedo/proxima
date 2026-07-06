# Concept: <nome da feature>

- **Status**: rascunho | em revisão | aprovado | descartado
- **Data**: AAAA-MM-DD

Spec leve para toda feature nova. Preencha **antes de codar** — spec boa gera
output bom (explore → plan → code). Curto de propósito: um primeiro rascunho em
minutos, não horas. Copie este arquivo para `docs/product/<slug>.md` ao usar.

## Problema

O que dói hoje? Para quem, na pelada? Por que resolver agora?

## Premissas

O que assumimos como verdade. Se uma cair, a proposta muda.

## Appetite

Quanto vale investir nisto — **tempo/escopo fixo** (ex.: "meia sessão", "uma
fatia pequena"). O appetite limita o escopo, não o contrário.

## Proposta

A menor **fatia vertical** (banco → tela) que resolve o problema real.

## Casos & arestas

- Caminho feliz:
- Bordas / erros:
- Concorrência / estados intermediários (loading/ready/error):

## FAQ de objeções

Antecipe as perguntas difíceis (do "eu do futuro" ou de um revisor) e responda.

- **P:**
  **R:**

## Fora de escopo

O que deliberadamente **não** entra nesta fatia (evita escopo inflar).

## Circuit breaker

Se estourar o appetite, cortamos escopo — não esticamos o prazo. O que corta
primeiro?

## Impacto no domínio

Muda alguma regra de [pelada.md](../domain/pelada.md)? Alguma decisão vira um
[ADR](../adr/)?

---

_Baseado em: Amazon Working Backwards (PR-FAQ), Basecamp Shape Up (appetite /
circuit breaker) e o fluxo explore→plan→code da Anthropic. Adaptado para um time
de uma pessoa — sem cerimônia, só os conceitos._
