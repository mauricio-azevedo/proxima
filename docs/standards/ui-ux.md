# Padrões de UI/UX

Padrões **vinculantes** de design visual, UX e acessibilidade. A lib de UI é o
**shadcn/ui** ([ADR-0003](../adr/0003-ui-library-shadcn.md), primitivos Base UI);
estes princípios continuam valendo independente dela. Itens ⚙️ são reforçados no
lint/CI; o resto é cobrado no review e no checklist por tela.

> Regra por trás de tudo (Refactoring UI): **defina sistemas, limite escolhas.**
> Espaçamento, tipografia e cor saem de escalas fixas — nunca de valores ad-hoc.

## Design & craft

- **Tokens em 2 camadas ⚙️** (no `@theme` do Tailwind): paleta **oklch** crua →
  **aliases semânticos** (`surface`, `text-muted`, `border`). Componentes usam só
  os semânticos, **nunca hex/valor cru**. _Contra-força:_ não crie token de
  componente (`--btn-hover-border`) com um consumidor — promova só sob reúso.
- **Espaçamento na escala 8pt** (meio-passo 4pt); line-height cai em múltiplo de 4. _Contra-força:_ `font-size` **não** precisa cair no grid; bordas de 1px e
  ótica de ícone fogem legitimamente.
- **Escala tipográfica modular fixa**, com line-height e tracking embutidos por
  passo (display = tracking negativo; label pequeno = positivo).
- **Hierarquia por peso/cor, não só tamanho.** Não use cinza sobre fundo colorido
  (use um tom do próprio fundo). Comece com **espaço demais** e remova. Sombras em
  camadas (ambiente + direta). Largura de linha de texto ~45–75 caracteres.
- **Dark mode = trocar o valor do token semântico**, não override por componente;
  o componente nunca sabe o tema.
- **Apple HIG como _inspiração_**: alvo de toque **44px** (mobile);
  clareza/deferência/profundidade. _Contra-força:_ HIG é de plataforma Apple — não
  importe metáforas iOS nem "Liquid Glass" como lei na web.

## UX

**Rodar as 10 heurísticas da NN/g como checklist de cada tela nova:**

1. Visibilidade do status — feedback em ~1s.
2. Casar com o mundo real — vocabulário pt-BR, não termos de banco.
3. Controle & liberdade — sempre um "voltar/cancelar/desfazer".
4. Consistência — mesma palavra = mesma ação.
5. Prevenção de erro — constraints/confirmação > mensagem de erro.
6. Reconhecer, não lembrar.
7. Flexibilidade — atalhos sem punir o novato.
8. Estético & minimalista.
9. Reconhecer/diagnosticar/recuperar de erros — pt-BR, causa + solução.
10. Ajuda contextual.

- **Laws of UX:** Jakob (seja convencional; padrão novo exige justificativa),
  Fitts (alvos grandes na zona do polegar), Hick (limite as escolhas por tela),
  Miller (agrupe ~5–9 itens).
- _Contra-força:_ heurística é **revisão de especialista, não teste com usuário** —
  acha problemas plausíveis, não reais, e não substitui testar com gente. E
  "minimalista" (#8) nunca justifica esconder status/label necessário (#1).

## Acessibilidade — alvo declarado: WCAG 2.2 nível AA

Critérios concretos e mais relevantes (⚙️ = parcialmente automatizável):

- **2.5.8 Alvo ≥ 24×24px ⚙️** (axe); mire **44px** no mobile (Fitts).
- **1.4.3 Contraste ⚙️** texto 4.5:1 / grande 3:1 (axe onde computável).
- **1.4.11 Não-texto 3:1** (bordas de input, foco, ícones com significado).
- **2.4.7 Foco visível** — nunca `outline:none` sem substituto igual ou melhor.
- **2.4.11 Foco não obscurecido** — sticky/toast não podem cobrir o elemento focado.
- **2.1.1 Teclado ⚙️** — tudo operável por teclado, sem armadilha.
- **1.3.1 Semântica/labels ⚙️** (jsx-a11y) — `<label for>` real (placeholder ≠ label),
  headings/listas semânticos.
- **3.3.1–3.3.3 Forms** — erro identificado no texto + associado ao campo
  (`aria-invalid`/`aria-describedby`); label visível persistente; sugestão de
  correção em pt-BR.
- **Movimento** — respeitar `prefers-reduced-motion`; nada auto-animado sem pausa.

**ARIA (APG):** HTML **nativo primeiro** (`<button>`, `<a href>`, `<dialog>`,
`<details>`). Dois princípios que valem como regra: **"nada de ARIA é melhor que
ARIA ruim"** e **"role é uma promessa"** (declarou `role` → você deve o teclado e
os estados). Widgets customizados seguem os padrões APG (dialog, tabs, combobox,
disclosure). **Prefira primitivos acessíveis (Radix/React Aria) a fazer na unha** →
é o motivo do ADR de UI na Fase 6.

**Enforcement:** `jsx-a11y` (já ativo) ⚙️ · `@axe-core/playwright` na home e nas
telas novas ⚙️ · (Fase 6) `vitest-axe` por componente + Lighthouse a11y ≥ 0.95.
_Contra-força:_ automação pega só **~30–40%** do WCAG — passada só-teclado + um
smoke de leitor de tela são **obrigatórios**; e não infle alvo de link inline
(exceção do 2.5.8) só pra agradar o linter.

## Estados assíncronos & mobile

- **Toda view de dados implementa 4 estados:** _loading_ (feedback em ~1s;
  **skeleton** p/ conteúdo estruturado, **spinner** p/ espera curta indeterminada,
  **barra** p/ >10s; reserve o espaço p/ não haver shift) · _empty_ (nunca tela
  branca — explique e ofereça a ação primária) · _error_ (pt-BR, causa +
  recuperação, preserva o input; nunca stack/HTTP cru).
- **UI otimista** só p/ ações **reversíveis e de alta confiança**; nunca p/
  irreversível/crítico.
- **Toque:** alvos ≥24px (44 ideal), espaçamento, zona do polegar, sem
  affordance só-hover.
- _Contra-força:_ **sem spinner < 1s** (piora a latência percebida e pisca);
  skeleton que não bate com o layout final é pior que spinner; barra de progresso
  tem que refletir progresso real.

## Fontes

- [Refactoring UI](https://refactoringui.com/) — Wathan & Schoger
- [Material Design 3 — Design tokens](https://m3.material.io/foundations/design-tokens/overview)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines) (inspiração)
- [NN/g — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Laws of UX](https://lawsofux.com/) — Jon Yablonski
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) (W3C Recommendation) · [SC 2.5.8 Target Size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) · [Read Me First](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/)
- [NN/g — Skeleton Screens](https://www.nngroup.com/articles/skeleton-screens/) · [Progress Indicators](https://www.nngroup.com/articles/progress-indicators/)
