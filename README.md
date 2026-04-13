# integra-skip

## CONTEXTO
Projeto piloto do fluxo `GitHub-first + Skip-assisted` dentro de `workspace-skip`.

## ESTADO_ATUAL
- Stack: React 19 + Vite + TypeScript + Tailwind + shadcn
- Tipo: frontend-only
- Backend: não evidenciado
- Supabase: não evidenciado
- Deploy publicado: não informado
- SSOT do código: GitHub

## TOOLCHAIN
- Package manager oficial: `bun`
- Instalação: `bun install`
- Desenvolvimento: `bun run dev`
- Build: `bun run build`
- Preview: `bun run preview`

## VARIAVEIS
- O projeto compila hoje sem variáveis obrigatórias
- Interface versionada de configuração: `.env.example`
- Segredos reais permanecem em `~/.env.global`

## FLUXO_OPERACIONAL
1. Alterar UI no Skip quando fizer sentido
2. Reconciliar/exportar localmente
3. Ajustar tecnicamente no repositório
4. Validar com `bun run build`
5. Commitar e publicar via GitHub
6. Fazer deploy fora do Skip

## GUARDAIS
- Não usar o Skip como fonte final de produção
- Não commitar segredos
- Não assumir integração com Supabase sem código real
- Não usar `pnpm` neste repositório até normalização explícita

## ARQUIVOS_DE_GOVERNANCA
- `AGENTS.md` = regras operacionais do projeto
- `CLAUDE.md` = wrapper para Claude Code
- `GEMINI.md` = wrapper para Gemini
- `PROJECT_SYNC.md` = vínculo Skip/local/GitHub
- `.vscode/` = baseline compartilhado para VS Code sem segredos
