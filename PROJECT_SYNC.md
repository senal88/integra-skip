# PROJECT_SYNC

## IDENTIFICACAO
- Projeto Skip: integra-skip
- Builder URL: PENDENTE
- Repo GitHub: https://github.com/senal88/integra-skip
- Diretório local: /Users/luiz.sena88/Projects/workspace-skip/integra-skip

## ESTADO_ATUAL
- SSOT atual: GitHub
- Branch principal: main
- Último commit auditado: f8d73df
- Última validação local: `bun install && bun run build`
- Responsável: PENDENTE

## DIFERENCAS
- Builder Skip não reconciliado com o repositório local
- URL pública/deploy não informada
- Supabase não evidenciado no código auditado
- `bun.lockb` foi alterado localmente durante a auditoria e precisa ser reconciliado antes do próximo commit

## DECISAO
- Fluxo oficial: Skip -> sync local -> commit GitHub -> deploy externo
- Skip é camada de geração visual, não fonte principal de verdade
- GitHub é a fonte oficial do código e do histórico

## PROXIMOS_PASSOS
1. Preencher `Builder URL`
2. Informar URL pública/deploy
3. Reconciliar futuras mudanças do Skip sempre via sync local
4. Decidir se `bun.lockb` auditado será mantido ou regenerado em ambiente limpo
