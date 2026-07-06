# Política de Segurança

## Versões suportadas

Este é um projeto em desenvolvimento ativo. Apenas a branch `main` recebe
correções de segurança.

## Reportar uma vulnerabilidade

**Não abra uma issue pública** para vulnerabilidades. Em vez disso, use o
**GitHub Security Advisories** do repositório
(aba _Security → Report a vulnerability_), que abre um canal privado.

Descreva o problema, o impacto e, se possível, um passo a passo para reproduzir.
Resposta esperada em poucos dias.

## Práticas do projeto

- **Segredos nunca são commitados.** Apenas `.env.example` (sem valores reais) é
  versionado; `.env` é gitignored.
- **Variáveis de ambiente são validadas** na inicialização (`src/env.ts`, via
  Zod) — a app não sobe com configuração inválida.
- **Dependências**: o pnpm bloqueia scripts de build por padrão; only-built
  dependencies são liberadas explicitamente e revisadas em `pnpm-workspace.yaml`.
- **CI** roda em todo PR, mantendo a superfície de mudança sempre verificada.
