# AGENTS.md - integra-skip

## CONTEXTO
Projeto piloto do fluxo `GitHub-first + Skip-assisted`.

## PRECEDENCIA
1. `README.md`
2. `AGENTS.md`
3. `PROJECT_SYNC.md`
4. `.env.example`

## SSOT
- Código e histórico: GitHub
- Builder visual: Skip
- Variáveis reais e segredos: `~/.env.global`
- Deploy: externo ao Skip

## REGRAS_OPERACIONAIS
- Idioma padrão: `PT-BR`
- Package manager oficial: `bun`
- Não usar `pnpm` neste repositório até normalização explícita
- Não assumir backend, Supabase ou deploy publicado sem evidência factual
- Não criar dotdirs canônicos locais como `.codex`, `.claude`, `.gemini`, `.agents`
- Não commitar segredos; versionar apenas nomes de variáveis em `.env.example`
- Se o Skip gerar mudanças, reconciliar localmente antes de commit/push

## PROMPTS_E_EXECUCAO
- Responder em formato operacional, curto e técnico
- Separar fatos, inferências, lacunas, riscos e validação
- Não transformar o projeto em documentação ornamental
- Não inventar integrações inexistentes

## SKILLS_E_MCP
- Preferir skills e MCPs globais/canônicos do ambiente do usuário
- Se um MCP local passar a ser necessário, configurar com variáveis de ambiente e sem credenciais hardcoded
- Não adicionar servidores MCP “de exemplo” como se fossem ativos

## ESTRUTURA_DE_CODIGO
- `src/pages/` = rotas
- `src/components/` = UI compartilhada
- `src/data/` = conteúdo estático
- `src/integrations/` = criar apenas quando houver integração real

## VALIDACAO_MINIMA
- `bun install`
- `bun run build`
- atualizar `PROJECT_SYNC.md` se o estado operacional mudar
