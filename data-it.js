// Dados-base do Radar OutSystems · ITÁLIA (levantamento de 08/11/2026).
// Suas edições (status, notas, empresas adicionadas) ficam salvas no navegador, não aqui.
// type: "parceiro" (parceiro oficial OutSystems) | "vaga" (anunciou vaga OutSystems) | "usuario" (usa OutSystems)
// spontaneousCv: "sim" | "nao" | "desconhecido"
(function(){
const COMPANIES = [
  {name:"adesso Italy", city:"Milano", type:"parceiro", website:"https://www.adesso.it", careersUrl:"https://www.adesso.it/lavora-con-noi", spontaneousCv:"sim", linkedinUrl:"https://www.linkedin.com/company/webscience-srl/", evidence:"Parceira OutSystems desde 2024; perfil público cita arquiteto OutSystems Sênior na empresa (2025-26).", evidenceUrl:"https://www.outsystems.com/partners/adesso-italy-srl/"},
  {name:"OT Consulting", city:"Reggio Emilia", type:"parceiro", website:"https://www.otconsulting.com", careersUrl:"https://www.otconsulting.com/it/lavora-con-noi", spontaneousCv:"sim", linkedinUrl:"https://www.linkedin.com/company/ot-consulting/", evidence:"Parceira OutSystems com página própria de serviços OutSystems. Escritório também em Milano. Candidatura espontânea via formulário.", evidenceUrl:"https://www.otconsulting.com/it/outsystems"},
  {name:"TXT Novigo (TXT Group)", city:"Milano", type:"parceiro", website:"https://www.txtgroup.com", careersUrl:"https://www.txtgroup.com/careers?hsLang=en", spontaneousCv:"desconhecido", linkedinUrl:"https://www.linkedin.com/company/txtgroup/", evidence:"Parceira OutSystems desde 2022; produto Novigo Digital Lending Platform feito em OutSystems. Vagas publicadas no LinkedIn.", evidenceUrl:"https://www.outsystems.com/partners/novigo-consulting-srl/"},
  {name:"S2E Business Technology Consultants", city:"Milano", type:"parceiro", website:"https://www.s2e.it", careersUrl:"", spontaneousCv:"desconhecido", linkedinUrl:"", evidence:"Parceira Bronze (S2E Sprint srl) desde 2023, 15 certificações. Sem página de carreiras: contato info@s2e.it. Escritórios em Roma e Lecce.", evidenceUrl:"https://www.outsystems.com/partners/s2e-sprint-srl/"},
  {name:"Engineering Ingegneria Informatica", city:"Roma", type:"parceiro", website:"https://www.eng.it", careersUrl:"https://eng.wd3.myworkdayjobs.com/it-IT/ExternalCareers?locationCountry=8cd04a563fd94da7b06857a79faaf815", spontaneousCv:"desconhecido", linkedinUrl:"", evidence:"Listada no diretório de parceiros OutSystems (snippet de busca). Maior grupo de TI italiano.", evidenceUrl:"https://www.outsystems.com/partners/engineering-ingegneria-informatica-spa/"},
  {name:"Neuronica", city:"Milano", type:"parceiro", website:"https://www.neuronica.it", careersUrl:"", spontaneousCv:"desconhecido", linkedinUrl:"https://www.linkedin.com/company/neuronica-s.r.l./", evidence:"Diretório OutSystems a lista como parceira desde 2014 e Clutch como 100% OutSystems; o site da empresa não cita OutSystems. Sem página de carreiras.", evidenceUrl:"https://www.outsystems.com/partners/neuronica/"},
  {name:"Econocom Italia (ex Asystel Italia)", city:"Milano", type:"parceiro", website:"https://www.econocom.it/", careersUrl:"", spontaneousCv:"desconhecido", linkedinUrl:"https://www.linkedin.com/company/econocom-international-italia", evidence:"Asystel Italia é parceira OutSystems desde 2023 (6 certificações); foi incorporada ao grupo Econocom.", evidenceUrl:"https://www.outsystems.com/partners/asystel-italia-spa/"},
  {name:"Globant Italia", city:"Milano", type:"vaga", website:"https://www.globant.com", careersUrl:"https://career.globant.com", spontaneousCv:"desconhecido", linkedinUrl:"", evidence:"Vaga 'OutSystem Developer' em Milano (remoto na Itália possível), setor bancário.", evidenceUrl:"https://career.globant.com/job/Milan-OutSystem-Developer-Ital/587059217"},
  {name:"KPMG Italia", city:"Milano", type:"vaga", website:"https://kpmg.com/it/it/home.html", careersUrl:"https://careers.kpmg.it/", spontaneousCv:"desconhecido", linkedinUrl:"", evidence:"Vaga Senior Consultant Intelligent Automation (Milano) pede 3 anos em low-code como Appian/OutSystems. KPMG é parceira OutSystems global.", evidenceUrl:"https://jobr.pro/job/29090610/senior-consultant-intelligent-automation-digital-transformation"},
  {name:"Amaris Consulting Italia", city:"Milano", type:"vaga", website:"https://www.amaris.com", careersUrl:"https://careers.amaris.com/jobs", spontaneousCv:"sim", linkedinUrl:"", evidence:"Vaga 'Low Code Developer' em Milano exigindo OutSystems 11 (expirada jul/2025); recrutam com frequência.", evidenceUrl:"https://careers.mantu.com/brands/amaris-consulting/jobs/37500"},
  {name:"Lutech", city:"Milano", type:"usuario", website:"https://lutech.group", careersUrl:"https://lutech.group/it/careers/search/candidatura-spontanea", spontaneousCv:"sim", linkedinUrl:"", evidence:"Usa OutSystems (TheirStack); página institucional de parceria OutSystems (Advisory Partner). Vagas: lutech.group/it/careers/search", evidenceUrl:"https://lutech.group/it/partner/outsystems"},
  {name:"agap2 Italia", city:"Milano", type:"usuario", website:"https://www.agap2.it", careersUrl:"https://www.agap2.it/it/lavora-con-noi", spontaneousCv:"desconhecido", linkedinUrl:"https://www.linkedin.com/company/agap2-italia/", evidence:"Usa OutSystems segundo TheirStack. Consultoria que aloca profissionais em clientes.", evidenceUrl:"https://theirstack.com/it/technology/outsystems/it"},
  {name:"Horsa", city:"Bologna", type:"usuario", website:"https://www.horsa.com", careersUrl:"", spontaneousCv:"desconhecido", linkedinUrl:"", evidence:"Usa OutSystems segundo TheirStack; comprou a Honu (low-code, ex sales partner OutSystems) em 2025.", evidenceUrl:"https://theirstack.com/it/technology/outsystems/it"},
  {name:"MC Engineering", city:"Torino", type:"usuario", website:"https://www.mcengineering.it", careersUrl:"https://it.indeed.com/cmp/Mc-Engineering/jobs", spontaneousCv:"desconhecido", linkedinUrl:"", evidence:"Usa OutSystems segundo TheirStack. Sede em Orbassano (TO); escritórios em Milano, Roma e Bari.", evidenceUrl:"https://theirstack.com/it/technology/outsystems/it"},
  {name:"Energent", city:"Roma", type:"usuario", website:"https://energent.it", careersUrl:"https://energent.it/candidatura-spontanea/", spontaneousCv:"sim", linkedinUrl:"https://www.linkedin.com/company/energent-tecnologies/", evidence:"Usa OutSystems segundo TheirStack. Vagas abertas em energent.it/lavora-con-noi", evidenceUrl:"https://theirstack.com/it/technology/outsystems/it"},
  {name:"Centrico (Gruppo Sella)", city:"Biella", type:"usuario", website:"https://www.centrico.tech", careersUrl:"", spontaneousCv:"desconhecido", linkedinUrl:"", evidence:"Polo de TI do Gruppo Sella; usa OutSystems segundo TheirStack. Vagas pelo 'Lavora con noi' do Gruppo Sella. Também Torino/Milano.", evidenceUrl:"https://theirstack.com/it/technology/outsystems/it"},
  {name:"A2A", city:"Milano", type:"usuario", website:"https://www.gruppoa2a.it", careersUrl:"https://www.gruppoa2a.it/it/carriere", spontaneousCv:"sim", linkedinUrl:"", evidence:"Utility de energia. Só o TheirStack indica OutSystems; nenhuma vaga ou dev OutSystems encontrado (possível falso positivo: 'A2A' também é nome de protocolo que a OutSystems divulga). Vagas de TI existem (ex.: AI Developer, AI Factory).", evidenceUrl:"https://theirstack.com/it/technology/outsystems/it"},
  {name:"Gottardo (Tigotà)", city:"Padova", type:"usuario", website:"https://www.gottardospa.it", careersUrl:"https://lavoro.gottardospa.it/jobs.php", spontaneousCv:"desconhecido", linkedinUrl:"http://it.linkedin.com/company/gottardo-spa", evidence:"Varejo (cliente final) que usa OutSystems segundo TheirStack.", evidenceUrl:"https://theirstack.com/it/technology/outsystems/it"},
  {name:"Devoteam Italia", city:"Milano", type:"parceiro", website:"https://it.devoteam.com", careersUrl:"", spontaneousCv:"desconhecido", linkedinUrl:"", evidence:"Grupo é parceiro OutSystems global (638 certificações), mas as vagas OutSystems encontradas são em Lisboa. Vale contato via LinkedIn.", evidenceUrl:"https://www.devoteam.com/outsystems/"},
  {name:"Deloitte Italia", city:"Milano", type:"parceiro", website:"https://www.deloitte.com/it/it.html", careersUrl:"https://deloittecm.avature.net/deloittecmlandingpage", spontaneousCv:"sim", linkedinUrl:"", evidence:"Aliança global com OutSystems (forte em Portugal); sem vaga OutSystems na Itália no momento. Link = Talent Community (cadastro de CV).", evidenceUrl:"https://jobs.deloitte.pt/job/Lisboa-Outsystems-Consultant/949179255"},
  {name:"Ki Reply (Grupo Reply)", city:"Torino", type:"vaga", website:"https://www.reply.com/ki-reply/en", careersUrl:"https://www.reply.com/ki-reply/en/careers", spontaneousCv:"sim", linkedinUrl:"", evidence:"Vagas permanentes de Low-code Developer e Architect (OutSystems/Mendix) em Torino, Bologna e Milano. CV: ki.recruiting@reply.it", evidenceUrl:"https://www.reply.com/ki-reply/en/careers"},
  {name:"Vibe SRL", city:"", type:"usuario", website:"", careersUrl:"https://it.indeed.com/cmp/Vibe-Srl-4", spontaneousCv:"desconhecido", linkedinUrl:"", evidence:"TheirStack indica uso de OutSystems (3 funcionários); empresa não identificada com certeza (homônimos).", evidenceUrl:"https://theirstack.com/it/technology/outsystems/it"},
  {name:"SNI", city:"Remoto (UE)", type:"vaga", website:"", careersUrl:"", spontaneousCv:"desconhecido", linkedinUrl:"", evidence:"Consultoria (SNI sp. z o.o.) com vaga Senior OutSystems Developer / Tech Lead remota, anunciada para a Itália (19-20/out/2026).", evidenceUrl:"https://www.outsystems.com/community/jobs/28872/"}
];

// Confiança do vínculo com OutSystems:
// alta  = parceiro oficial na Itália ou vaga OutSystems publicada na Itália
// media = empresa de TI/consultoria com indício indireto (TheirStack, parceria só global)
// baixa = cliente final de outro setor ou indício único e não confirmado
const CONF = {
  media: ["Lutech","agap2 Italia","Horsa","MC Engineering","Energent","Centrico (Gruppo Sella)","Devoteam Italia","Deloitte Italia","Neuronica"],
  baixa: ["A2A","Gottardo (Tigotà)","Vibe SRL"]
};
COMPANIES.forEach(c => { c.country = "IT";
  c.confidence = CONF.baixa.includes(c.name) ? "baixa" : CONF.media.includes(c.name) ? "media" : "alta";
});
(window.SEED_COMPANIES = window.SEED_COMPANIES || []).push(...COMPANIES);

const IT ="%5B%22103350119%22%5D"; // geoUrn da Itália no LinkedIn
const G = q => "https://www.google.com/search?q=" + encodeURIComponent(q);

(window.SOURCES = window.SOURCES || {}).IT = [
  {group:"LinkedIn · Profissionais", hint:"Pessoas com OutSystems no perfil, localizadas na Itália. Veja a empresa atual de cada uma.", links:[
    {label:"Pessoas: OutSystems · Itália", url:"https://www.linkedin.com/search/results/people/?keywords=OutSystems&geoUrn="+IT},
    {label:"Pessoas: \"OutSystems Developer\" · Itália", url:"https://www.linkedin.com/search/results/people/?keywords=%22OutSystems%20Developer%22&geoUrn="+IT},
    {label:"Pessoas: OutSystems Tech Lead / Architect · Itália", url:"https://www.linkedin.com/search/results/people/?keywords=OutSystems%20(%22Tech%20Lead%22%20OR%20Architect)&geoUrn="+IT},
    {label:"Pessoas: OutSystems Certified · Itália", url:"https://www.linkedin.com/search/results/people/?keywords=%22OutSystems%20Certified%22&geoUrn="+IT},
  ]},
  {group:"LinkedIn · Empresas e vagas", hint:"Empresas sediadas na Itália e vagas que citam OutSystems.", links:[
    {label:"Vagas OutSystems · Itália", url:"https://www.linkedin.com/jobs/search/?keywords=OutSystems&geoId=103350119"},
    {label:"Vagas low-code · Itália", url:"https://www.linkedin.com/jobs/search/?keywords=low-code%20OutSystems%20OR%20%22low%20code%20developer%22&geoId=103350119"},
    {label:"Empresas: OutSystems · sede na Itália", url:"https://www.linkedin.com/search/results/companies/?keywords=OutSystems&companyHqGeo="+IT},
    {label:"Posts recentes: OutSystems assumiamo / cerchiamo", url:"https://www.linkedin.com/search/results/content/?keywords=OutSystems%20(assumiamo%20OR%20cerchiamo%20OR%20hiring)%20Italia&sortBy=%22date_posted%22"}
  ]},
  {group:"Portais de vagas na Itália", hint:"Principais job boards italianos e agregadores.", links:[
    {label:"Indeed Italia", url:"https://it.indeed.com/jobs?q=OutSystems&l=Italia"},
    {label:"Glassdoor Italia", url:"https://www.glassdoor.it/Lavoro/outsystems-lavori-SRCH_KO0,10.htm"},
    {label:"Talent.com Italia", url:"https://it.talent.com/jobs?k=OutSystems&l=Italia"},
    {label:"Jooble Italia", url:"https://it.jooble.org/lavoro-outsystems"},
    {label:"Google Jobs: OutSystems Italia", url:"https://www.google.com/search?q=OutSystems+developer+lavoro+Italia&ibp=htl;jobs"}
  ]},
  {group:"Ecossistema OutSystems", hint:"Fontes oficiais: parceiros certificados e vagas publicadas pela comunidade.", links:[
    {label:"Diretório oficial de parceiros (filtrar Itália)", url:"https://www.outsystems.com/partners/"},
    {label:"Job Board da comunidade OutSystems", url:"https://www.outsystems.com/community/jobs/"},
    {label:"TheirStack: empresas que usam OutSystems na Itália", url:"https://theirstack.com/it/technology/outsystems/it"},
    {label:"Clutch: desenvolvedores OutSystems", url:"https://clutch.co/developers/outsystems"}
  ]},
  {group:"Buscas Google úteis", hint:"Para achar páginas 'lavora con noi' e vagas fora dos portais.", links:[
    {label:"\"OutSystems\" + \"lavora con noi\"", url:G('"OutSystems" "lavora con noi"')},
    {label:"\"sviluppatore OutSystems\"", url:G('"sviluppatore OutSystems" OR "OutSystems developer" Italia')},
    {label:"Consultorias \"partner OutSystems\" Itália", url:G('"partner OutSystems" srl OR spa')}
  ]}
];
})();
