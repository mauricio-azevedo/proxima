# Padrões de Engenharia

Padrões **vinculantes** de qualidade de código e arquitetura, ancorados em fontes
públicas e consagradas. Ao tomar uma decisão de design não óbvia, **cite o
princípio/fonte no PR** ("interface enxuta por deep module, cf. Ousterhout").

Itens marcados com ⚙️ são **reforçados no lint/CI** — não são opinião, falham o
build. O resto é seguido pelo agente e cobrado no code review.

> A regra de ouro por trás de tudo: **reduzir complexidade**. Ousterhout define
> complexidade como "qualquer coisa na estrutura do sistema que o torna difícil
> de entender e modificar". Todo princípio abaixo serve a isso.

## Princípios (cada um com sua contra-força)

Princípios são ferramentas, não dogmas. Aplicados cegamente, pioram o código —
por isso cada um vem com o limite de quando **não** aplicá-lo.

- **Deep modules ⚙️** — prefira módulos com interface simples e implementação que
  encapsula complexidade, a muitos módulos rasos cujas interfaces vazam detalhe
  (Ousterhout, _A Philosophy of Software Design_). _Contra-força:_ não é desculpa
  para funções gigantes — profundidade é sobre a razão interface/implementação.
- **DRY, com juízo** — não repita conhecimento. _Contra-força:_ "duplicação é
  muito mais barata que a abstração errada" (Sandi Metz). Abstraia na **terceira**
  repetição, não na primeira; duplicação tolerável > acoplamento prematuro.
- **KISS / YAGNI** — a solução mais simples que resolve o caso **real**; não
  construa para um futuro imaginado. _Contra-força:_ "simples" ≠ "raso" ou
  "esperto"; clareza vence concisão.
- **SRP / SOLID** — um motivo para mudar por módulo. _Contra-força:_ levado ao
  extremo, gera classes anêmicas e complexidade de integração (o oposto de deep
  modules). Coesão > contagem de arquivos.
- **Complexidade cognitiva baixa ⚙️** — código deve ser lido linearmente; aninhar
  e ramificar demais é o cheiro nº 1 (SonarSource cognitive complexity).
- **Nomes revelam intenção** — o nome diz o quê/porquê, não o tipo (Clean Code;
  Google style guides). _Contra-força:_ não invente jargão; use a linguagem
  ubíqua de [pelada.md](../domain/pelada.md).
- **Comentários explicam o _porquê_** — o código já diz o _o quê_. Comente
  decisão, trade-off, gotcha — não o óbvio.
- **Falhe cedo e alto** — valide na fronteira e erga o erro (já fazemos isso com
  a validação de env em `src/env.ts`). Nada de falha silenciosa.

## Reforçado no CI ⚙️

`pnpm lint` roda com `--max-warnings 0`: qualquer violação abaixo **falha o CI**.

| Regra                            | Limite | Princípio                        |
| -------------------------------- | ------ | -------------------------------- |
| `sonarjs/cognitive-complexity`   | 15     | Complexidade cognitiva baixa     |
| `complexity` (ciclomática)       | 15     | KISS                             |
| `max-depth`                      | 4      | Reduzir aninhamento              |
| `max-params`                     | 4      | Interfaces enxutas (deep module) |
| `max-nested-callbacks`           | 3      | Legibilidade                     |
| Regras de qualidade do `sonarjs` | —      | DRY, sem código morto/redundante |

Tamanho de função/arquivo é **guia**, não gate (para não brigar com JSX legítimo):
mire funções curtas com um só nível de abstração; se uma função não cabe na
cabeça, extraia.

## Code review

A rubrica completa (8 aspectos + réguas de tamanho, padrão Google) está em
**[code-review.md](code-review.md)**. Em uma linha: aprove o que **melhora
inequivocamente a saúde do código**, mantenha PRs pequenos, e o agente se
auto-revisa antes de marcar como pronto.

## Fontes

- [Google Engineering Practices](https://google.github.io/eng-practices/) — code review e CL author guides
- _Software Engineering at Google_ (Winters, Manshreck, Wright) — [swe-book](https://abseil.io/resources/swe-book)
- John Ousterhout, [_A Philosophy of Software Design_](https://web.stanford.edu/~ouster/cgi-bin/aposd.php) — complexidade, deep modules
- Martin Fowler, _Refactoring_ — [martinfowler.com](https://martinfowler.com)
- Sandi Metz, ["The Wrong Abstraction"](https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction) — a contra-força do DRY
- [SonarSource Cognitive Complexity](https://www.sonarsource.com/docs/CognitiveComplexity.pdf) — a métrica reforçada no CI
