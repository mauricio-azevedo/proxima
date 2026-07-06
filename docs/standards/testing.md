# Padrão de Testes

Como testamos no Próxima. **Vinculante**; o agente segue ao escrever e ao pedir
testes.

## Filosofia: confiança por tempo investido

Otimize **confiança por unidade de esforço**, não cobertura. "Quanto mais o teste
parece o uso real, mais confiança ele dá" (Testing Trophy, Kent C. Dodds).

## As camadas (Testing Trophy)

1. **Estática** — a base. TypeScript strict + ESLint já pegam uma classe inteira
   de bugs de graça. Não é opcional.
2. **Unit** — lógica pura de domínio (ordem da fila, numeração das "próximas",
   condição de término da partida). Rápido, determinístico.
3. **Integração** — o maior peso. Componentes + dados juntos, do jeito que o
   usuário exercita. Melhor razão confiança/tempo.
4. **E2E** (Playwright) — poucos, nos fluxos críticos ponta a ponta.

## Classificação por recurso (Google)

Classifique por _recurso_, não por nome: **small** = 1 processo, sem
rede/disco/sleep; **medium** = pode localhost (ex.: Postgres de teste); **large**
= e2e. Prefira o menor que ainda dá confiança.

## Regras

- **Toda regra de negócio de [pelada.md](../domain/pelada.md) merece teste.**
- **Sem quota de cobertura.** Medimos (`pnpm test:coverage`), mas não travamos o
  CI num número — cobertura vira teatro. O critério é confiança, não %.
- **Flakiness é bug.** Teste intermitente perde o valor; mire <1% e conserte ou
  remova.
- Teste **comportamento observável**, não detalhe de implementação (Testing
  Library).

## Onde ficam

- Unit/componente (Vitest, jsdom): `*.test.ts(x)` ao lado do código, em `src/`.
- E2E (Playwright): em `e2e/`.

## Fontes

- [Testing Trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications) — Kent C. Dodds
- [Software Engineering at Google](https://abseil.io/resources/swe-book), caps. 11–14 — classificação e flakiness
- [Testing Library — Guiding Principles](https://testing-library.com/docs/guiding-principles)
