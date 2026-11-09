# Rotina de atualização do Radar OutSystems

Instruções seguidas pela rotina agendada (dias úteis). Objetivo: manter a lista de **vagas OutSystems** e de **empresas que trabalham com OutSystems** atualizada para **Itália (IT), Portugal (PT) e Holanda (NL)**. Quem usa o Radar é uma desenvolvedora OutSystems brasileira que busca vaga nesses países.

## Arquivos

| Arquivo | Conteúdo |
|---|---|
| `data-jobs.js` | `window.SEED_JOBS`: lista de vagas. `window.JOBS_UPDATED`: data da última atualização |
| `data-it.js`, `data-pt.js`, `data-nl.js` | Empresas de cada país (`COMPANIES`) e links de busca (`SOURCES`) |
| `index.html` | Interface. **Não alterar** |

## Passo a passo

1. **Conferir vagas existentes.** Para cada vaga em `data-jobs.js` com `status` `"aberta"` ou `"desconhecido"`, abra a `url` e confira:
   - Se a vaga foi removida, expirou, foi preenchida ou o link agora leva a outra vaga: mude `status` para `"fechada"` e explique o motivo em `info`.
   - Se o LinkedIn bloquear a consulta: mantenha o status atual. Não feche a vaga por falta de confirmação.
   - Nunca apague vagas. As fechadas ficam como histórico.
2. **Buscar vagas novas** publicadas nos últimos ~14 dias, nos três países. Fontes:
   - Job board da comunidade OutSystems: https://www.outsystems.com/community/jobs/ (IDs crescentes; os mais recentes ficam perto dos maiores números já presentes na lista)
   - Páginas públicas de vagas do LinkedIn (`it|pt|nl.linkedin.com/jobs/view/...`), via busca na web por "OutSystems" + país
   - PT: itjobs.pt (`https://www.itjobs.pt/emprego?q=outsystems`), landing.jobs, net-empregos, Teamlyzer
   - NL: Magnet.me (`https://magnet.me/nl-NL/vacatures?query=outsystems`), Indeed NL, Glassdoor NL, sites "werken bij" dos parceiros
   - IT: Indeed IT, Glassdoor IT, Talent.com IT, páginas "lavora con noi" dos parceiros OutSystems italianos. A Itália tem poucas vagas, então procure com mais cuidado.
   - Páginas de carreira das empresas já listadas em `data-*.js` que tenham `careersUrl`
3. **Evitar duplicatas.** A mesma vaga não entra duas vezes: compare empresa + cargo + cidade e também a URL. Se a vaga já existe, só atualize os campos.
4. **Adicionar vagas novas** ao array, no bloco do país, com todos os campos:
   ```js
   {"title":"","company":"","country":"PT","city":"","workMode":"remoto|híbrido|presencial|","seniority":"junior|pleno|senior|lead|arquiteto|","posted":"AAAA-MM-DD ou AAAA-MM ou vazio","status":"aberta","url":"","source":"LinkedIn|OutSystems Community|itjobs.pt|Magnet.me|site da empresa|...","language":"idiomas exigidos, ex.: 'inglês fluente', 'holandês fluente', 'português'","visa":"ex.: '⚠ exige residência em PT', 'aceita candidatos no Brasil com relocation', '🛂 patrocinadora IND', ou vazio","salary":"","info":"observação curta em pt-BR","firstSeen":"DATA DE HOJE AAAA-MM-DD"}
   ```
   - `firstSeen` é sempre a data da execução. A página usa esse campo para mostrar o selo **NOVA**.
   - Nunca invente URL, data ou salário. Deixe vazio o que não foi confirmado.
   - Destaque com ⭐ em `info` as vagas que aceitam candidatos no Brasil, oferecem relocation ou visto, ou exigem português.
5. **Atualizar empresas.** Se uma vaga nova for de uma empresa que ainda não está no `data-XX.js` do país, adicione a empresa ao array `COMPANIES` com o mesmo formato das existentes. Use `type:"vaga"`, `confidence:"alta"` e `evidence` citando a vaga. Para a Itália, siga o padrão de `data-it.js`: o nível de confiança é calculado pela lista `CONF` no final do arquivo, então empresas novas com vaga ficam como "alta" automaticamente.
6. **Atualizar a data:** `window.JOBS_UPDATED = "DATA DE HOJE"`.
7. **Validar:** `node -e "global.window={};['it','pt','nl','jobs'].forEach(c=>require('./data-'+c+'.js'));console.log(window.SEED_JOBS.length)"`. Se der erro de sintaxe, corrija antes de commitar.
8. **Commit e push** direto na branch `main`, com a mensagem: `Atualiza vagas AAAA-MM-DD: +N novas, M fechadas`.
9. **Resumo final** em pt-BR: vagas novas por país (título, empresa, link), vagas fechadas e empresas adicionadas.

## Regras
- Só vagas que envolvem OutSystems de forma explícita: no título, na descrição ou na stack principal.
- Não use dados pessoais de perfis do LinkedIn. Use apenas vagas e páginas de empresas.
- Mantenha o estilo: um objeto por linha, JSON válido dentro do JS.
