<!-- Este arquivo existe só para segurar o bloco abaixo. O `next dev` (16.3+) roda
     com o cwd em apps/web e escreve o bloco `nextjs-agent-rules` no diretório do
     app: sem um CLAUDE.md aqui, ele cria um `apps/web/AGENTS.md` — um segundo
     guia, contradizendo o "AGENTS.md da raiz é o canônico". Não há opt-out.
     Não acrescente `@AGENTS.md` aqui: em apps/web isso importaria o AGENTS.md
     deste diretório, que é justamente o que não deve existir. Ver #38 e #40. -->

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
