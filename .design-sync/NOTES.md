# design-sync — notas do repo

Projeto Claude Design: **Próxima Design System** (`d2ddd51b-5628-43ad-9fe8-a42bd3043735`).

## Gotchas deste repo (app único, não monorepo)

O conversor espera `node_modules/<pkg>` (natural em monorepo). O Próxima é um
**app único** → esse link não existe. Solução (NÃO apontar o symlink pra raiz — isso
faz loop infinito de `node_modules`):

```sh
mkdir -p .design-sync/pkg
cp package.json .design-sync/pkg/package.json
ln -s "$PWD/src" .design-sync/pkg/src
ln -s "$PWD/tsconfig.json" .design-sync/pkg/tsconfig.json
ln -sfn "$PWD/.design-sync/pkg" node_modules/proxima   # pkg-dir limpo, sem node_modules interno
```

- **CSS**: Tailwind v4 é JIT — não há stylesheet compilado. Gerar antes de cada build:
  `pnpm dlx @tailwindcss/cli@4 -i src/app/globals.css -o .design-sync/pkg/compiled.css`
  (rodar da raiz p/ o content-scan pegar `src/`). `cfg.cssEntry = "compiled.css"`.
- **Render check**: precisa de `playwright` importável. Instalado isolado:
  `(cd .ds-sync && npm i playwright@1.61.1)` — casa com o chromium-1228 do e2e.
- **Build**: `node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules ./node_modules --out ./ds-bundle` (synth-entry: 60 arquivos → **329 componentes**).

## Re-sync risks

- **Fontes** `[TOKENS_MISSING] --font-geist-sans/--font-geist-mono`: o `next/font`
  injeta em runtime; ausentes no bundle standalone → cai em fonte fallback. Aceito
  por ora; p/ resolver, `cfg.extraFonts` com os `.woff2` do Geist.
- **Upload parcial**: subiu o bundle (todos os 329 importáveis) + base + ~172
  arquivos de cards dos essenciais (Button, Card, Input, Field, Select, Empty,
  Item, Tabs, Badge, Checkbox, Skeleton, Spinner, Separator…). **Sem `_ds_sync.json`
  gravado** (un-anchored de propósito) → a próxima sync reprocessa/reenvia tudo,
  completando a cauda longa de cards. Não gravar anchor sobre estado parcial.
- Symlink `node_modules/proxima` e `.design-sync/pkg` são recriados por clone
  (gitignored). `compiled.css` também é gerado.
