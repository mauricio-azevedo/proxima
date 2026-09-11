@AGENTS.md

<!-- O bloco abaixo é escrito e mantido pelo `next dev` quando um agente roda o
     dev server (não há opt-out). Ele mora aqui, e não no AGENTS.md, porque o
     `writeAgentFiles` do Next só toca o AGENTS.md quando o CLAUDE.md não
     hospeda o bloco — assim o guia canônico fica livre de texto de fornecedor.
     Se o Next mudar o texto, o diff aparece neste arquivo. Ver #39. -->

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
