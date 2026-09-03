# 0004. Backend separado em NestJS; Next.js só como frontend; monorepo

- **Status**: Aceito
- **Data**: 2026-09-03
- **Decisores**: Maurício

Substitui parcialmente o [ADR-0002](0002-architecture-and-tech-stack.md): a linha
"Framework: Next.js — front e back integrados" e a decisão "App único, não monorepo". O
resto do ADR-0002 (TypeScript strict, Postgres, Prisma 7 com driver adapter, Vitest +
Playwright, pnpm, GitHub Actions) continua valendo, assim como o
[ADR-0003](0003-ui-library-shadcn.md).

## Contexto

O ADR-0002 escolheu o Next.js integrando front e back para um time de uma pessoa com um
agente: menos peças. A escolha foi revisitada em 2026-09-03, quando o objetivo do produto
passou a ser explicitamente **alcançar milhões de usuários**. A discussão levantou o que
segue.

**A carga deste produto não é o problema; o fan-out é.** Estimativa para dois milhões de
usuários ativos, uma pelada por semana cada, vinte por pelada, jogos concentrados em nove
janelas de pico semanais, cinco a dez celulares olhando cada pelada:

| Métrica no pico                         | Ordem de grandeza |
| --------------------------------------- | ----------------- |
| Peladas simultâneas                     | 15 mil            |
| Escritas por segundo                    | 200               |
| Conexões abertas de tempo real          | 100 mil           |
| Leituras por segundo com polling de 5 s | 20 a 30 mil       |

Um Postgres primário aguenta a escrita com folga. O que precisa de arquitetura é manter
dezenas de milhares de celulares vendo a mesma fila: push, não polling.

**O teto do Next como backend.** Server Actions são RPC do React (só POST, sem contrato
público; um app mobile não consome). O Next não hospeda processo de vida longa: WebSocket,
consumidor de fila, cron e worker viram serviço à parte ou fornecedor externo. Não tem
opinião sobre injeção de dependência, módulos, validação, OpenAPI, versionamento e
observabilidade: cada time inventa a própria estrutura, que um agente segue pior do que
convenção imposta por framework. E as features de servidor seguem o roteiro da Vercel;
auto-hospedar com várias instâncias exige cache compartilhado.

**O domínio é tempo real por natureza.** Vários celulares olhando a mesma fila chega por
volta da quinta fatia, não nos milhões. Num backend próprio é um gateway WebSocket no mesmo
processo.

**Trocar custa quase zero hoje.** O repositório tem um modelo `Player`, componentes de UI e
nenhuma feature. Extrair um backend depois custa de verdade, mesmo com domínio puro.

**Mercado.** "Backend em Next" não existe como perfil de contratação; o backend de empresas
grandes é um artefato próprio que serve web, mobile e parceiros. Para backend Node, o perfil
mais comum nas vagas no Brasil é NestJS.

## Decisão

Vamos separar o backend em um app NestJS, deixar o Next.js só como frontend (App Router,
Server Components, shadcn/ui) e organizar o repositório como monorepo pnpm.

Forma alvo (a ordem de implementação é assunto do plano, não deste ADR):

```
apps/
  web/        Next.js: src/, public/, next.config.ts, vitest.config.ts, components.json
  api/        NestJS: src/ (módulos por contexto do domínio), prisma/ (schema, migrations,
              prisma.config.ts) e o client Prisma gerado
packages/
  contracts/  openapi.json gerado do api + tipos e cliente gerados para o web
```

`bin/raia`, `docs/`, `e2e/`, `.github/`, `docker-compose.yml` e as configs de raiz (eslint,
prettier, tsconfig base, commitlint, husky, lint-staged) ficam na raiz.

Pontos fixados por este ADR (porta de mão única):

- **NestJS** como framework da API, na plataforma padrão (Express). Não Fastify nem Hono: a
  estrutura rígida de módulos, controllers, services e DTOs é padrão aplicado pelo
  framework, e é o perfil que o mercado contrata. Não Go nem Java: outra linguagem dobra a
  carga cognitiva de uma pessoa sem o produto precisar.
- **Next.js não acessa banco.** Prisma, schema e migrations vivem em `apps/api`. O web só
  fala com a API.
- **Monorepo pnpm workspaces** com um único gate: `pnpm check` na raiz roda os workspaces, e
  os checks exigidos pela proteção da `main` mantêm o nome, para a proteção continuar
  valendo sem toque manual.

Escolhas de mão dupla, com a opção padrão e o gatilho para subir. O plano pode trocar,
deixando o porquê em uma linha:

- **Contrato** — OpenAPI gerado do Nest (`@nestjs/swagger`), `openapi.json` versionado; o
  web usa tipos e cliente gerados dele; drift entre spec e código falha o gate. _Gatilho_:
  duas fricções na geração → pacote Zod compartilhado (`nestjs-zod`).
- **Tráfego web → api** — Server Components chamam a `API_URL` interna; o navegador chama
  via `rewrites` do Next, na mesma origem, sem CORS. _Gatilho_: tempo real → o navegador
  conecta direto na API.
- **Validação** — DTOs com `class-validator` e `ValidationPipe` global com `whitelist`.
- **Testes** — Vitest nos dois apps (`unplugin-swc` no api, por causa dos decorators);
  integração do api contra o Postgres real da raia; Playwright sobe web e api. _Gatilho_:
  Vitest + Nest custar mais de uma sessão → Jest só no api.
- **Raia** — `bin/raia` exporta porta própria para web e para api, além de `DATABASE_URL`.
- **Orquestração** — só scripts pnpm (`-r`, `--filter`). _Gatilho_: gate acima de cinco
  minutos ou cache de CI doer → Turborepo.
- **Tempo real** — fora deste ADR. _Gatilho_: fatia "fila ao vivo" → gateway WebSocket no
  Nest; mais de uma instância da API → adapter Redis.
- **Deploy** — fora deste ADR. _Gatilho_: primeiro deploy → ADR próprio (dois containers;
  pooler na frente do Postgres).
- **Auth** — continua fora do MVP, como no conceito da fila. _Gatilho_: o que o conceito já
  escreve (dor real).

## Alternativas consideradas

- **Manter o ADR-0002 e extrair depois** (domínio puro dentro do Next; API separada quando
  mobile ou tempo real chegassem). Tem precedente: o Cal.com nasceu monólito Next com tRPC
  e construiu a API pública em NestJS quando a plataforma pediu. Rejeitado porque a extração
  custa de verdade e hoje trocar custa zero, e porque tempo real chega cedo neste domínio.
- **Fastify ou Hono** — mais leves e rápidos, mas sem estrutura imposta; cada projeto
  monta a própria, e é isso que um agente e um revisor cego seguem pior.
- **tRPC** — tipagem ponta a ponta sem geração, mas o contrato fica acoplado ao cliente
  TypeScript; mobile e parceiros ficam de fora.
- **Go, Java/Kotlin** — o que o mercado mais contrata para backend, mas uma segunda
  linguagem para uma pessoa, sem carga que a justifique. API em TypeScript é escolha
  legítima e comum em empresa de produto.

## Consequências

Fica mais fácil:

- API com contrato público desde o dia um: app mobile e parceiros consomem o mesmo OpenAPI.
- WebSocket, filas e cron no mesmo processo, quando entrarem.
- Estrutura de backend imposta pelo framework, legível para o agente e para o revisor cego.
- Perfil alinhado ao que o mercado contrata.

Fica mais difícil:

- Dois processos para subir em dev, raia, CI e e2e; dois deploys.
- Um passo de geração de contrato entre api e web, com checagem de drift no gate.
- A primeira fatia (fila de chegada) espera o andaime: monorepo, api, contrato, raia e CI.
  Estimativa: uma sessão inteira de andaime antes de qualquer feature.
- Curva do Nest (decorators, DI) e o ajuste do Vitest para decorators.
- Docs que descrevem a forma atual mudam com a implementação, no mesmo PR: `AGENTS.md`
  (estrutura, comandos, armadilhas), `README.md`, `docs/README.md` e o conceito da fila.

## O que mudaria

- Se em doze meses a Próxima não passar de um grupo de peladas, o segundo processo não se
  pagou. Voltar é caro; o gatilho vale para **não subir mais** (sem tier de tempo real
  próprio, sem workers) até haver carga real.
- Cada escolha de mão dupla acima carrega o próprio gatilho.
- Um segundo time ou um app mobile: a API já serve; repositórios separados só se os times
  divergirem.
