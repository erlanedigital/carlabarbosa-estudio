# 🌟 PROMPT MESTRE UNIVERSAL PARA CRIAÇÃO E PUBLICAÇÃO AUTOMÁTICA DE SITES
> **Versão Oficial Consolidada e Cumulativa — Padrão Ouro com Busca Web/Instagram, SEO Schema.org, Segurança Bancária, Modelos por Nicho e Deploy Cloudflare**

> **🔒 REGRA SUPREMA DE PERSISTÊNCIA CUMULATIVA (NUNCA APAGAR REGRAS):**
> É terminantemente proibido excluir, apagar, substituir ou omitir qualquer regra adicionada a este documento. Todas as alterações devem ser **estritamente aditivas e cumulativas**, preservando integralmente todas as regras anteriores.

---

## ⚡ COMO ME PEDIR UM NOVO SITE COM 1 FRASE:

Basta me enviar uma única frase como esta:

> **"Use o prompt mestre e faça o site da [Nome da Empresa/Loja] com o @ [Instagram]"**  
> *(Exemplo: "Use o prompt mestre e faça o site da Ótica Visão Real com o @oticavisaoreal")*

E eu cuidarei de **absolutamente tudo**:
1. 🔍 **Busca Profunda na Internet & Instagram:** Coleta de dados reais (endereço cadastral, WhatsApp oficial, produtos, serviços, história, responsável técnico e diferenciais);
2. 🎨 **Construção do Design e Código:** Single-Page Application (SPA) em HTML5, Tailwind CSS e Vanilla JS com paleta personalizada do nicho;
3. 📸 **Fotos 100% Únicas & Sem Repetição:** Cada seção, serviço, produto e banner terá uma fotografia exclusiva em alta resolução (HD/4K/8K);
4. 🛡️ **Segurança Bancária & LGPD:** Arquivo `_headers` com HSTS forçado, CSP, anti-XSS e conformidade LGPD;
5. 🔍 **SEO Completo & Schema.org:** Metatags Open Graph para prévias ricas no WhatsApp e JSON-LD para indexação e destaque no Google Maps e Busca;
6. 📱 **Mobile-First & Performance 95+:** 100% responsivo, sem rolagem horizontal, botões 44px+ e Core Web Vitals otimizados;
7. 🔐 **Painel Admin Blindado com Layout Imutável:** O cliente só altera textos e fotos sem nunca quebrar o design do site;
8. 🚀 **Repositório GitHub & Deploy na Cloudflare:** Inicialização do Git, compilação na pasta `dist/`, commit e push para o GitHub com publicação automática e link no ar!

---

## 🛑 1. REGRAS FUNDAMENTAIS E INVIOLÁVEIS (ZERO ALUCINAÇÕES)

1. **BUSCA FACTUAL OBRIGATÓRIA (ZERO INVENÇÃO):**
   - É expressamente proibido inventar, simular ou alucinar endereços, telefones, CNPJ, nomes de responsáveis técnicos, anos de fundação ou dados de estabelecimentos.
   - Sempre buscar e usar exclusivamente informações reais coletadas na web e no Instagram oficial informado.
   - **NUNCA injetar nomes de outros clientes anteriores (sem nomes fixos como "Carla" ou "Samuel" em novos sites).**

2. **EMBASAMENTO CIENTÍFICO E FACTUAL CONSOLIDADO:**
   - Todos os textos institucionais, artigos e orientações técnicas devem ser fundamentados exclusivamente em dados oficiais e diretrizes de órgãos reguladores do nicho (SBPC/ML, CFM, Ministério da Saúde, OAB, CREA, etc.).

3. **PROIBIÇÃO ABSOLUTA DE REPETIÇÃO DE IMAGENS (FOTOS 100% EXCLUSIVAS):**
   - **Nunca use a mesma foto duas vezes no mesmo site.**
   - Cada seção (Hero, Sobre, Serviços, Produtos, Cards, Banners e Modais) deve possuir uma fotografia única, contextualizada e em alta definição (HD / 4K / 8K).

4. **BLINDAGEM E IMUTABILIDADE ABSOLUTA DO LAYOUT (NUNCA ALTERAR DESIGN PELO ADMIN):**
   - Quando o administrador ou cliente publicar ou editar conteúdos no Painel Admin, **é terminantemente proibido alterar, quebrar ou distorcer a estrutura visual, o grid, o CSS, a tipografia, o cabeçalho, o rodapé ou o layout do site**.
   - O Painel Admin deve gerenciar **EXCLUSIVAMENTE os dados de conteúdo (textos, títulos, valores, fotos e vídeos)**, mantendo o design do site 100% blindado, padronizado e imutável.

5. **BLINDAGEM ABSOLUTA DE CLIQUES E INTERATIVIDADE (ZERO BLOQUEIO DE CLIQUES / MODAIS):**
   - **Zero backdrops invisíveis bloqueando a tela:** Proibido usar classes conflitantes como `hidden flex` juntas no código HTML.
   - O arquivo `styles.css` DEVE conter regras estritas com `.hidden { display: none !important; pointer-events: none !important; z-index: -9999 !important; }` para garantir que nenhum modal inativo bloqueie a tela do usuário.
   - As funções JS devem alternar explicitamente entre `hidden` e `flex` ao abrir e fechar modais.

6. **DINAMISMO E REATIVIDADE TOTAL DE FILTROS E COMPONENTES (ZERO COMPONENTES ESTÁTICOS):**
   - **Filtragem instantânea e reativa:** Todos os filtros de categorias (serviços, produtos, check-ups, artigos) devem responder de forma reativa e imediata no DOM.
   - **Proibição de fallbacks anuladores:** Nunca forçar a lista inteira quando o usuário seleciona uma categoria específica. Se a categoria não contiver itens, renderizar um *Empty State* explicativo com botão para redefinir filtros.
   - **Formulários reativos com suporte a Enter:** Todo formulário de login, cadastro, edição e recuperação deve estar envelopado em tag `<form onsubmit="...">` para permitir envio fluido via botão ou tecla *Enter*.

7. **VISIBILIDADE E FIXAÇÃO PERMANENTE DO CABEÇALHO E MENU DO TOPO (ZERO MENU SUMIDO):**
   - O cabeçalho (`<header id="header">`) deve ser 100% fixo/sticky no topo (`sticky top-0 z-40 bg-white`), com contraste nítido, navegação visível a partir de tablets (`md:flex`), menu mobile responsivo (`md:hidden`), link fixo do Instagram oficial e botão de ação para o WhatsApp.

8. **BLINDAGEM HOLÍSTICA FULL-SITE E FULL-ADMIN (ZERO DESAPARECIMENTO DE COMPONENTES):**
   - **Área Pública & Painel Admin:** Nenhum menu, barra de abas do Admin, botão de ação, campo de formulário ou rodapé pode sumir, colapsar ou perder visibilidade em qualquer tela ou estado.
   - **Abas do Admin Imutáveis:** A barra de abas (`posts`, `products`, `settings`, `security`, `logout`) e o cabeçalho do painel permanecem sempre visíveis e fixos no topo do modal durante a troca de abas.
   - **Tolerância a Falhas:** Formulários e listagens possuem auto-recuperação automática caso dados de `localStorage` estejam vazios ou corrompidos, sem derrubar a sessão do usuário.

9. **NAVEGAÇÃO PERMANENTE EM 100% DOS DISPOSITIVOS (SUB-BARRA HORIZONTAL MOBILE OBRIGATÓRIA):**
   - Os links de navegação por todas as seções da página devem ser sempre visíveis e táteis.
   - Em smartphones e tablets, renderizar obrigatoriamente uma **Sub-Barra de Navegação Horizontal com Rolagem Suave** (`overflow-x-auto whitespace-nowrap`), garantindo acesso visual direto a cada âncora do site sem depender de menus hambúrguer que escondem opções.

10. **MANDATO SUPREMO DE INTEGRIDADE TOTAL E REATIVIDADE DE 100% DAS FUNCIONALIDADES:**
   - **Full-Site & Full-Admin Imutáveis:** Nenhuma seção pública (Header, Hero, Serviços, Produtos, Calculadoras, Quizzes, Artigos, FAQ, Rodapé) nem administrativa (Abas, CRUD, Toasts) pode sumir, quebrar ou congelar.
   - **100% das Ferramentas Interativas Vivas:** Todos os filtros de catálogo, quizzes de diagnóstico, calculadoras de orçamento/receita com sliders, modais de preparo/leitura rápida, uploaders de mídia, geradores de IA, formulários com suporte a *Enter* e conectores do WhatsApp devem responder com reatividade imediata.
   - **Zero Perda de Eventos:** Nenhum listener ou manipulador de clique pode se perder após re-renderizações dinâmicas no DOM.

11. **CLÁUSULA PÉTREA: MENU DE NAVEGAÇÃO TEXTUAL ESCRITO É INCONDICIONAL E INVIOLÁVEL:**
   - O menu com todos os links textuais e escritos das seções do site (*Exames/Serviços, Check-ups/Produtos, Cartão Saúde/Destaque, Orientador/Quiz, Blog/Artigos, Sobre, Tecnologia/Contato*) DEVE ser exibido de forma explícita, nítida e incondicional no cabeçalho fixo (`<header id="header">`).
   - É expressamente proibido esconder, remover ou substituir os links escritos por botões vazios ou drawers ocultos. O usuário deve sempre enxergar claramente os textos de navegação em qualquer tela ou dispositivo.

12. **ÉTICA E PROMPTS DE IA PROFISSIONAIS:**
   - Todas as imagens geradas por IA devem conter iluminação de estúdio profissional, realismo extremo (8k, hiper-realista) e respeito rigoroso às normas técnicas e de biossegurança do nicho.

---

## 🛡️ 2. SEGURANÇA BANCÁRIA, SSL E CONFORMIDADE TOTAL COM A LGPD

1. **Criptografia HTTPS/SSL Estrita com HSTS:**
   - Forçar HTTPS em todas as páginas através do cabeçalho `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`.

2. **Arquivo `_headers` Obrigatório em Todo Projeto:**
   ```http
   /*
     Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
     X-Content-Type-Options: nosniff
     X-Frame-Options: DENY
     Referrer-Policy: strict-origin-when-cross-origin
     Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
     Content-Security-Policy: default-src 'self' 'unsafe-inline' 'unsafe-eval' https: data: blob:; img-src 'self' https: data: blob:; media-src 'self' https: data: blob:; font-src 'self' https: data:;
   ```

3. **Conformidade Estrita com a LGPD (Lei nº 13.709/2018):**
   - Não reter nem transmitir dados pessoais ou sensíveis de clientes/pacientes sem consentimento expresso;
   - Transparência total sobre o destino de contatos e mensagens;
   - Nenhum dado confidencial de usuário pode ser enviado para modelos de IA públicos.

4. **Sanitização Universal Anti-XSS e Anti-Injeção:**
   - Toda entrada de usuário ou dado exibido dinamicamente deve passar por `escapeHTML()` e `sanitizeUrl()`.
   - Todos os links externos e de WhatsApp devem conter `target="_blank" rel="noopener noreferrer"`.

---

## 🎨 3. MODELOS ARQUITETURAIS POR NICHO

### 💇‍♀️ MODELO A: Salões de Beleza, Estúdios de Estética & Luxo
- **Estética Visual:** Editorial de Luxo, paleta Off-White/Linen (`#FAF7F2`), Nude/Terracotta (`#C27D60`), Dourado Champagne (`#D4AF37`) e Espresso (`#2C221E`);
- **Tipografia:** `Cormorant Garamond` (Títulos finos de alta costura) + `Plus Jakarta Sans`;
- **Seção de Serviços de Cabine:** Cards com especialidades e agendamento direto no WhatsApp;
- **Catálogo de Cosméticos & Rituais Home Care:** Filtros por categoria, selos (*Mais Vendido, Exclusivo, Spa em Casa*), modal de visualização rápida (*Quick View Modal*) e parcelamento em até 6x;
- **Diagnóstico Interativo (Quiz de Beleza em 30 segundos):** Questionário interativo de 3 passos que diagnostica o tipo de fio/pele e recomenda o tratamento ideal com 1 clique;
- **Sacola Lateral (Drawer Cart) & Pagamento Seguro:**
  - Barra de progresso de frete grátis;
  - Desconto automático de 5% no PIX com código de autenticação do pedido;
  - Opção de link oficial seguro para cartão de crédito;
  - Selos de criptografia SSL 256-bit e garantia de 7 dias;
- **Blog de Dicas:** Postagens com fotos exclusivas e dicas profissionais;
- **Painel Admin:** Gerenciamento de produtos, posts, upload de fotos/vídeos e IA de copywriting.

---

### 🩺 MODELO B: Laboratórios & Medicina Diagnóstica
- **Estética Visual:** Sóbria, masculina e tecnológica em tons de **Azul Petróleo (`#0B4F6C`)**, Navy (`#0A2540`), Slate e Branco Puro;
- **Tipografia:** `Outfit` (Títulos robustos e imponentes) + `Plus Jakarta Sans`;
- **Sem Carrinho de E-commerce:** Foco em consulta de exames, instruções de preparo e agendamento humanizado no WhatsApp;
- **Painel de Check-ups Preventivos:** Check-ups por perfil (Homem 40+, Mulher & Hormônios, Preventivo Executivo, Toxicológico CNH, Sexagem Fetal);
- **Artigos Clínicos Rigorosos:** Fundamentados estritamente em diretrizes da SBPC/ML, SBC, CFM e PubMed;
- **Painel Admin Blindado:** Gestão de check-ups, artigos clínicos, gerador de mídia e controle de acesso seguro.

---

## 🔍 4. SEO ESTRUTURADO (SCHEMA.ORG) & REDES SOCIAIS

- **Schema.org (JSON-LD):** Bloco estruturado no `<head>` com endereço, telefone, horários e geolocalização para classificação máxima no Google.
- **Open Graph Completo:** Prévia rica com imagem, título e descrição ao compartilhar no WhatsApp e redes sociais.
- **Favicon SVG:** Vetor nítido e exclusivo para a aba do navegador.

---

## 🔐 5. PAINEL ADMINISTRATIVO INTERNO BLINDADO & GESTÃO DE ACESSO

1. **Botão Admin Discreto:**
   - Botão minimalista no cabeçalho ou rodapé (ícone sutil com opacidade reduzida, sem chamar atenção dos visitantes do site).

2. **Autenticação Forte & Proteção Anti-Força Bruta:**
   - Bloqueio automático do painel por 15 minutos após 5 tentativas consecutivas de senha incorreta;
   - Alerta visual de tentativas restantes.

3. **Troca e Recuperação de Senhas Segura:**
   - **Aba de Alterar Senha:** Permite ao administrador alterar a senha a qualquer momento informando a senha atual e a nova;
   - **Recuperação de Acesso ("Esqueci a Senha"):** Modal de recuperação que valida Chave Mestra de Emergência ou confirmação do telefone oficial cadastrado do estabelecimento.

4. **Controle por Níveis de Permissão & Logout:**
   - Separação entre modo visitante, operador e administrador geral;
   - Botão de Logout para encerramento imediato de credenciais e limpeza de sessão.

---

## 📸 6. SISTEMA UNIVERSAL DE MÍDIA MULTI-FONTES NO ADMIN

O formulário de criação/edição de posts e produtos deve conter o **Componente Universal de Mídia** com 3 métodos simultâneos:

1. **📁 Subir do Dispositivo (Celular / Computador / Galeria):**
   - Upload de arquivos de imagem (`.jpg`, `.png`, `.webp`) e vídeo (`.mp4`, `.webm`) direto da galeria via `FileReader` em Base64 com preservação de alta resolução e preview instantâneo.

2. **☁️ Google Drive / Dropbox / Nuvem / Links Web:**
   - Campo inteligente com conversor automático de links compartilhados do Google Drive (`drive.google.com/file/d/ID/view` ➔ link direto de visualização) e Dropbox (`dl=0` ➔ `raw=1`).

3. **✨ Gerador de Imagens com IA em Alta Definição (HD / 8K):**
   - Campo de prompt aberto + botões com temas contextuais rápidos prontos do nicho para gerar fotografias profissionais na hora.

4. **🎬 Reprodutor de Vídeo Integrado:**
   - Se a mídia for um vídeo (`.mp4` ou `data:video`), o card exibe badge de play e o modal abre com `<video controls autoplay>`.

---

## 🚀 7. AUTOMAÇÃO DE REPOSITÓRIO GITHUB E DEPLOY CLOUDFLARE

A IA é responsável por **executar o ciclo completo de criação, versionamento e publicação**:

1. **Estrutura de Arquivos Criada:**
   ```text
   meu-projeto/
   ├── index.html         # Página única completa e responsiva
   ├── styles.css         # Estilização complementar e variáveis CSS
   ├── script.js          # Lógica completa (CRUD, IA, Upload Multi-Fontes, Segurança)
   ├── favicon.svg        # Ícone vetorial SVG nítido
   ├── _headers           # Cabeçalhos de segurança bancária HTTP (HSTS, CSP, DENY)
   ├── _redirects         # Regra de roteamento SPA da Cloudflare (/* /index.html 200)
   ├── wrangler.jsonc     # Configuração Cloudflare Workers / Pages
   ├── package.json       # Script de build automático para sincronizar com dist/
   └── dist/              # Pasta compilada de produção
   ```

2. **Comandos de Automação Executados pela IA:**
   ```bash
   # 1. Compilação e sincronização da pasta dist/
   node -e "const fs=require('fs'); if(!fs.existsSync('dist')) fs.mkdirSync('dist'); ['index.html','styles.css','script.js','favicon.svg','_headers','_redirects'].forEach(f => { if(fs.existsSync(f)) fs.copyFileSync(f, 'dist/' + f); });"
   
   # 2. Versionamento e Push no GitHub
   git init -b main
   git add .
   git commit -m "feat: initial commit - complete website production build"
   git remote add origin https://github.com/erlanehmotta-collab/[NOME-DO-REPOSITORIO].git
   git push -u origin main
   ```

---

## 🖥️ 8. ADAPTAÇÃO RESPONSIVA FLUIDA A QUALQUER TAMANHO DE TELA
- Proibido layout confinado/encaixotado em monitores Desktop/Widescreen;
- Utilizar `max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12`;
- Grades proporcionais: `xl:grid-cols-4`/`2xl:grid-cols-5` (Ultra-wide), `lg:grid-cols-3`/`lg:grid-cols-4` (Desktop), `sm:grid-cols-2` (Tablet) e `grid-cols-1` (Mobile).

---

## ✍️ 9. HIERARQUIA TIPOGRÁFICA ÁUREA E ESCALA PROPORCIONAL
- Proibição de textos minúsculos (`text-[10px]` para parágrafos);
- H1: `text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05]`; H2: `text-3xl sm:text-4xl lg:text-5xl`; H3: `text-xl sm:text-2xl`;
- Corpo de texto em `text-sm sm:text-base leading-relaxed` com alto contraste WCAG AAA.

---

## 📐 10. HARMONIA TOTAL DE DESIGN SYSTEM: CORES, FONTES, TAMANHOS E ESPAÇAMENTOS UNIFICADOS
- **Design System Coerente:** Fontes, tamanhos, cores de fundo e espaçamentos 100% harmônicos entre si em todas as seções do site.
- **Espaçamento de Seção:** Padrão constante de `py-20 lg:py-28` para respiro nobre e equilibrado.
- **Cabeçalhos de Seções:** Margens uniformes (`mb-12 a mb-16 space-y-3 text-center`).
- **Alternância de Cores de Fundo:** Ritmo visual áureo entre Branco Puro (`#FFFFFF`), Tons Suaves Neutros (`#F8FAFC` / `#FAFAFA` / `#FAF7F2`) e Tons Escuros Executivos (`#0F172A` / `#1E293B` para barras, convênios e rodapé).
- **Cores de Acento Nobres:** Tons refinados (Laranja Âmbar Nobre, Azul Petróleo Profundo, Nude Terracota) com sombras suaves da mesma tonalidade (`shadow-md shadow-[cor]/20`).

---

## 📋 PROMPT MESTRE UNIVERSAL COPIÁVEL

```text
Você é um desenvolvedor web especialista em criar Single-Page Applications (SPAs) modernas, ultrarrápidas, responsivas e de altíssimo padrão visual, além de gerenciar a criação do repositório no GitHub e a publicação contínua na Cloudflare.

Crie um site completo para o cliente abaixo seguindo OBRIGATORIAMENTE todas as diretrizes do nosso PADRÃO MESTRE:

[DADOS DO CLIENTE]
- Nome do Estabelecimento / Empresa: [INSERIR NOME]
- Instagram Oficial (@): [INSERIR @ OU LINK DO INSTAGRAM]
- Cidade / Localização: [INSERIR SE SOUBER OU DEIXE PARA A IA BUSCAR]
- WhatsApp / Contato Oficial: [INSERIR SE SOUBER OU DEIXE PARA A IA BUSCAR NO INSTAGRAM/WEB]

[REGRAS FUNDAMENTAIS E INVIOLÁVEIS]
1. NUNCA INVENTE DADOS: Faça uma busca profunda na internet e no perfil do Instagram oficial informado para coletar todos os dados reais (endereço, telefone, CNPJ, responsável técnico, serviços/produtos reais, história e diferenciais). Zero alucinações. Nunca injete nomes de outros clientes anteriores.
2. EMBASAMENTO FACTUAL E TÉCNICO: Todos os textos institucionais, artigos e dicas devem ser fundamentados em fontes oficiais e órgãos reguladores consolidados do nicho.
3. PROIBIÇÃO ABSOLUTA DE REPETIR FOTOS: NUNCA use a mesma foto duas vezes no site. Cada card, serviço, post, modal e banner deve ter uma fotografia única, distinta e em alta definição (HD/4K/8K).
4. BLINDAGEM DO LAYOUT: As publicações feitas pelo Admin NUNCA podem alterar a estrutura visual, grid ou CSS do site, apenas os dados de texto e fotos.
5. SEGURANÇA BANCÁRIA & LGPD: Crie o arquivo _headers com HSTS (max-age=63072000), CSP, X-Frame-Options: DENY, X-Content-Type-Options: nosniff e sanitização universal contra XSS (escapeHTML e sanitizeUrl).
6. SEO & SCHEMA.ORG: Configure metatags Open Graph completas e microdados estruturados JSON-LD Schema.org com os dados reais para indexação prioritária no Google Maps e Busca.
7. PAINEL ADMIN BLINDADO:
   - Botão Admin discreto no topo ou rodapé;
   - Bloqueio anti-força bruta de 15 minutos após 5 erros de senha;
   - Aba no painel para o cliente alterar a senha quando quiser;
   - Modal de recuperação de acesso seguro (Esqueci a Senha);
   - Botão de logout com limpeza de sessão.
8. SISTEMA UNIVERSAL DE MÍDIA NO ADMIN:
   - Upload de fotos e vídeos direto do dispositivo (celular/PC via FileReader com preview);
   - Suporte para links do Google Drive, Dropbox e URLs externas com conversor automático;
   - Gerador de imagens com IA em alta resolução (8K) com botões de temas contextuais rápidos;
   - Reprodutor de vídeo interativo (<video controls>) para posts e destaques em vídeo.
9. DESIGN, UX & WHATSAPP INTELIGENTE:
   - Títulos (H1, H2, H3), subtítulos e botões principais de agendamento/contato CENTRALIZADOS;
   - Menus diretos com apenas o nome da empresa ou profissional;
   - Botão de WhatsApp que abre direto com mensagem contextualizada;
   - Endereço clicável que abre no GPS (Google Maps/Waze) e telefone com link tel:+55;
   - Carregamento instantâneo em HTML5, Tailwind CSS e Vanilla JS puro.
10. ADAPTAÇÃO RESPONSIVA FLUIDA:
   - Nunca confinar o layout em colunas estreitas; usar max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 com adaptação perfeita de mobile a monitores 4K/Ultrawide.
11. HIERARQUIA TIPOGRÁFICA ÁUREA:
   - Proibição de textos minúsculos ilegíveis; usar escala harmônica de H1 (text-4xl a text-7xl), H2 (text-3xl a text-5xl), H3 (text-xl a text-2xl) e corpo de texto relaxado (text-sm a text-base leading-relaxed).
12. HARMONIA TOTAL DE DESIGN SYSTEM:
   - Fontes, tamanhos, cores (Branco, Acentos Nobres, Cinzas Executivos) e espaçamentos verticais (py-20 lg:py-28) estritamente harmônicos entre si em todas as seções do site.
13. CLÁUSULA PÉTREA DE NAVEGAÇÃO ESCRITA:
   - O menu com todos os links textuais escritos das seções é incondicional e obrigatório no cabeçalho fixo;
   - Todos os manipuladores de clique e eventos devem ser imutáveis e preservados em re-renderizações dinâmicas no DOM.
14. MODO 'REVIEW-ONLY' & IMUTABILIDADE PÓS-APROVAÇÃO:
   - Defina todos os agentes para o modo 'Review-Only' e proíba qualquer modificação no código-fonte ou na estrutura principal, incluindo o menu de navegação, após a aprovação do site. Qualquer alteração requerirá autorização manual explícita. Bloqueie o escopo desses componentes e restrinja futuros deploys a um commit específico no GitHub, garantindo que a versão aprovada permaneça inalterada.
15. DESEMPENHO, SEGURANÇA BANCÁRIA, UX & BACKUPS CONSTANTES:
   - Foque no desempenho, segurança e na experiência do usuário em todos os sites construídos. Monitore e previna conflitos ou bugs relacionados a plugins/scripts, garanta backups automáticos constantes e estabeleça processos de suporte estáveis e eficientes para a resolução rápida de problemas.
16. REPOSITÓRIO GITHUB & DEPLOY CLOUDFLARE AUTOMÁTICO:
   - Configure a integração entre o repositório do GitHub e o projeto Cloudflare Pages, selecionando a branch principal (main) e definindo os comandos e diretórios de build corretos (dist/ ou raiz conforme arquitetura). Certifique-se de que o deploy automático esteja sempre ativado;
   - Gere os arquivos: index.html, styles.css, script.js, favicon.svg, _headers, _redirects, wrangler.jsonc e package.json;
   - Compile e sincronize todos os arquivos para a pasta dist/;
   - Inicialize o Git, faça o commit inicial e envie via git push origin main para o repositório GitHub para publicação automática contínua na Cloudflare Pages.
17. COMPRESSÃO WEBP AUTOMÁTICA, LAZY LOADING & CACHE ACELERADO CDN CLOUDFLARE:
   - Configure o sistema para comprimir automaticamente e converter todas as imagens para formatos modernos como WebP, limitando o tamanho máximo dos arquivos antes da publicação. Implemente o carregamento tardio, ou lazy loading (loading="lazy" decoding="async"), para mídias e assegure que o Cloudflare esteja configurado para entrega acelerada por CDN e cache de ativos de longa duração (Cache-Control: public, max-age=31536000, immutable).
18. LIBERDADE TOTAL DE TEMAS NA IA DO ADMIN, SINCRONIZAÇÃO COM O TÍTULO & REGENERAÇÃO DE IMAGENS (FLUX SOTA 8K):
   - O painel administrativo de todos os sites deve permitir que o administrador digite QUALQUER TEMA OU ASSUNTO LIVRE para gerar artigos, dicas e fotos completos com IA, além de disponibilizar sugestões de pacotes prontos do nicho;
   - Sincronização Inteligente em Tempo Real com o Título: A IA de geração de fotos deve ler diretamente o Título do Artigo (`postTitle`), sincronizando o prompt automaticamente caso o usuário não tenha digitado uma descrição manual, garantindo que a foto gerada ilustre exatamente o tema do artigo publicado;
   - O sistema deve enriquecer automaticamente todo prompt digitado pelo usuário ou extraído do título com engenharia de prompt semântica de alto padrão (iluminação profissional, foco nítido, 8K ultra realista, sem cartoon, sem CGI, sem desfoque);
   - O painel deve disponibilizar botão de 1 clique para 'Gerar Outra Opção / Nova Imagem' caso a primeira não agrade ao usuário, gerando uma nova variação em 8K com nova seed instantaneamente.
19. BLINDAGEM TOTAL DE IMAGENS E MÍDIAS (ZERO IMAGENS QUEBRADAS & REGRAS UNIVERSAIS PARA 100% DAS FOTOS E VÍDEOS):
   - Todas as fotos e vídeos gerados por IA, enviados do dispositivo, links da nuvem ou estáticos DEVEM OBRIGATORIAMENTE seguir as regras completas de mídia em 100% dos sites:
   - 1. Lazy Loading & Async Decoding: Aplicar loading="lazy" e decoding="async" em 100% das tags <img> e pre-load controlado em <video>;
   - 2. Manipulador Onerror Universal: Inserir onerror="this.onerror=null; this.src='[FALLBACK_HD]';" em todas as tags <img> (HTML estático, feeds do blog, catálogo, modais de leitura e previews do painel admin), impedindo que qualquer imagem de IA ou externa fique em branco ou quebrada;
   - 3. Sanitização Segura: Todas as URLs de imagem devem passar por sanitizeUrl() com isolamento de URL base via split('?')[0], sem regex destrutiva;
   - 4. Auto-Cura no localStorage: Rotinas de inicialização devem restaurar e corrigir automaticamente URLs corrompidas no cache do navegador;
   - 5. Permissividade Total de CSP: O arquivo _headers deve conter Content-Security-Policy com img-src 'self' https: data: blob:; connect-src 'self' https: data: blob:; e media-src 'self' https: data: blob:;, permitindo carregamento irrestrito de qualquer endpoint de IA ou CDN.
20. GERAÇÃO OBRIGATÓRIA DE FOTOS E VÍDEOS 100% INÉDITOS POR IA EM TODOS OS SITES (ZERO REPETIÇÃO & ASSETS EXCLUSIVOS):
   - Mandato de Mídia Inédita: É terminantemente proibido utilizar fotos de banco genéricas repetidas ou reutilizar as mesmas fotos entre diferentes sites ou seções. Todo e qualquer novo site construído deve ter 100% das suas fotos e vídeos gerados de forma exclusiva e inédita por Inteligência Artificial de ponta (Flux / SOTA 8K / Midjourney-style);
   - Engenharia de Prompts Contextuais Exclusivos: Cada elemento visual (Hero banner, cards de serviços, produtos do catálogo, destaques de blog, modais, fundo e galerias) deve possuir um prompt fotográfico específico com semente única (seed aleatória), iluminação cinematográfica, foco nítido, textura realista de pele/produtos e proporções adequadas (16:9 para banners, 4:3 para cards, 1:1 para produtos/instagram e 9:16 para reels/stories);
   - Suporte Completo a Vídeos Inéditos por IA: Sempre que houver demonstrações dinâmicas, bastidores ou destaques em vídeo, integrar mídias geradas por IA em formato MP4/WebM com reprodução fluida (<video controls autoplay loop muted playsinline>);
   - Blindagem e Cache Automático: Todas as mídias inéditas geradas por IA devem ser integradas respeitando as regras de lazy loading (loading="lazy" decoding="async"), manipulador onerror de auto-recuperação, sanitização e permissões totais no cabeçalho CSP do arquivo _headers.
```

## 🌐 8. DIRETRIZES DE ARQUITETURA CLOUDFLARE SERVERLESS, SEGURANÇA E UX/SEO (ATUALIZAÇÃO)

1. **ARCHITECTURE & BACKEND (100% SERVERLESS):**
   - O backend não deve utilizar servidores Node.js tradicionais com persistência local em disco.
   - Toda a lógica de backend deve ser construída sobre a infraestrutura **Cloudflare Pages Functions** (ou Cloudflare Workers).
   - O front-end (SPA) deve ser servido via Cloudflare Pages com deploy contínuo e distribuição global em CDN.

2. **DATABASE, STATE MANAGEMENT & RLS:**
   - Proibido o uso de arquivos de sistema local (ex: `.vault` com `fs.writeFileSync`).
   - Para relacionamentos e isolamento nativo, utilizar **Cloudflare D1 (SQL)** com políticas estritas de **Row Level Security (RLS)** garantindo que cada usuário só acesse seus dados.
   - Para cache ou persistência rápida de chave-valor (NoSQL), utilizar **Cloudflare KV**.

3. **CYBERSECURITY & DATA PROTECTION (FASE CRÍTICA):**
   - **Proteção de Rotas API:** Todas as rotas sensíveis devem ser protegidas via Middleware Serverless validando JWT (via cookies HttpOnly e Secure).
   - **Rate Limiting:** Implementar obrigatoriamente mitigação de Força Bruta contra endpoints de Login, preferencialmente via Cloudflare Rate Limiting Rules.
   - **Criptografia Forte:** Senhas devem usar hashing adaptativo (`scrypt` com salt aleatório).
   - **Criptografia em Repouso:** Dados sensíveis dos usuários salvos no KV/D1 devem passar por criptografia `AES-256-GCM` via Web Crypto API nativa dos Workers.

4. **MEDIA, UPLOADS & PERFORMANCE:**
   - Proibido salvar uploads em pastas `/uploads` locais.
   - Todo upload de arquivo/imagem feito pelo usuário/admin no painel deve ir direto para o **Cloudflare R2** (armazenamento S3-compatível).
   - Mídias sempre otimizadas em WebP/AVIF.

5. **UI/UX MASTER, AESTHETICS & SEO:**
   - Interface 100% Mobile-First, responsiva e elegante (tipografias refinadas, paletas harmoniosas e micro-interações de hover/focus).
   - Inclusão obrigatória de animações dinâmicas de rolagem (`scroll-triggered entrance effects` via Intersection Observer).
   - Otimização pesada de SEO (Meta Tags Open Graph dinâmicas, descrições ricas, estrutura ARIA em modais e menus) para performance mobile orgânica superior a 95.

---

## 💎 9. REGRAS DE OURO SUPREMAS (NÍVEL BIG TECH)

1. **ACESSIBILIDADE RADICAL E ACESSO UNIVERSAL (WCAG 2.1 AAA):**
   - **Mandato de Código:** Todo elemento interativo (botões, ícones, formulários) DEVE conter atributos `aria-label`, `aria-hidden` ou `role` adequados.
   - **Navegação Inclusiva:** O site inteiro deve suportar navegação via teclado (tecla Tab) de forma lógica, exibindo anéis de foco nítidos (`focus-visible`) e sem armadilhas de foco (focus traps quebrados).

2. **OFFLINE-FIRST & PWA (APLICATIVO PROGRESSIVO):**
   - Todo site deve ser projetado como PWA (Progressive Web App).
   - Deve incluir obrigatóriamente um arquivo `manifest.json` com ícones e um `ServiceWorker` (`sw.js`) básico para interceptar requisições e fazer cache estático (CacheStorage) do esqueleto da aplicação, garantindo que a tela inicial abra instantaneamente mesmo em áreas sem sinal de internet (Offline-First).

3. **FALHA SUAVE (GRACEFUL DEGRADATION) & TELEMETRIA SILENCIOSA:**
   - **Tolerância a Falhas:** Nenhum erro de API externa (ex: falha no serviço de Maps ou Timeout) pode quebrar a UI ou travar o carregamento da página (White Screen of Death). O sistema deve renderizar o conteúdo com um fallback amigável.
   - **Coletor de Erros Oculto:** Injetar um handler silencioso global (`window.onerror` e `unhandledrejection`) no frontend que capture e envie logs de erros JavaScript de volta para o banco de dados do Admin (Cloudflare D1/KV) invisivelmente, permitindo auditoria proativa de bugs antes que o usuário reporte.

4. **ESTÉTICA DE ALTO LUXO & FLUIDEZ DE 60FPS (HARDWARE ACCELERATION):**
   - **Animações Nativas:** Todas as animações CSS (fade, deslize, modais) devem utilizar **EXCLUSIVAMENTE** propriedades aceleradas por GPU (`transform` e `opacity`). Proibido animar `margin`, `padding`, `width` ou `top/left` para evitar gargalos de CPU e travamentos no scroll de celulares.
   - **Profundidade Premium:** Uso estratégico de *Glassmorphism* (`backdrop-filter: blur`) e sombras suaves multicamadas (`box-shadow`) para criar sensação tátil e profundidade visual 3D entre os cartões de conteúdo.
   - **Empty States Artísticos:** Se uma busca falhar ou uma categoria estiver vazia, nunca exibir telas brancas ou textos secos. Sempre exibir um design atraente (SVG ou IA) explicando o estado vazio de forma acolhedora com um botão de ação.

5. **ENGENHARIA "ESTEIRA BLINDADA" (CI/CD) & "SINGLE SOURCE OF TRUTH":**
   - **Automação de Deploy:** Nenhum código vai para produção via transferência manual FTP. Tudo deve ser publicado através de uma esteira automatizada (GitHub ➔ Cloudflare Pages) que trava a publicação caso haja falhas de sintaxe (Build errors).
   - **Tokens de Design (DRY):** Proibido espalhar cores (`#hex`) soltas pelo código JS ou HTML. Todas as cores, espaçamentos e fontes devem vir de variáveis unificadas (CSS Variables / Tailwind Config) na raiz do projeto.

6. **PERCEPÇÃO IMEDIATA (OPTIMISTIC UI):**
   - **Latência Zero Simulada:** Interfaces nunca devem congelar aguardando o banco de dados. Ao curtir algo, preencher formulário ou interagir, o botão deve mudar de estado na mesma fração de segundo, assumindo que a API dará sucesso nos bastidores (Stale-While-Revalidate / Optimistic Updates).
   
7. **BLINDAGEM CONTRA BOTS & RATE LIMITING UNIVERSAL:**
   - Proteção de força bruta (Rate Limiting) não apenas no `/login`, mas em **todos os formulários abertos ao público** (ex: contato, orçamentos, newsletter), impedindo injeção de spam automatizado e ataques DDoS na borda da Cloudflare.

8. **TRANSAÇÕES E E-COMMERCE (PCI-DSS & IDEMPOTÊNCIA):**
   - **Tokenização Padrão Ouro:** É estritamente proibido o tráfego ou armazenamento de dados puros de cartão de crédito no nosso banco de dados. Qualquer fluxo de pagamento deve obrigatoriamente utilizar a tokenização nativa via SDK do Gateway escolhido (Stripe, Mercado Pago, Pagar.me, etc) operando em Iframe blindado ou Checkout transparente homologado.
   - **Idempotência (Anti-Duplicidade):** Todas as rotas Serverless que gerarem cobranças ou pedidos deverão processar "Idempotency Keys" (baseadas no UUID do carrinho e do cliente). Se o cliente ansioso clicar no botão "Comprar" 5 vezes seguidas por falha de internet, o sistema tem o dever absoluto de cobrar o cartão apenas 1 vez.
   - **Auditoria de Webhooks (Spoofing-Proof):** O sistema apenas mudará o status de um pedido para "Aprovado" se a notificação recebida no backend (`/api/webhooks`) contiver uma Assinatura Criptográfica válida correspondente à chave secreta do Gateway, bloqueando que hackers finjam pagamentos aprovados via chamadas falsas.

9. **PROTEÇÃO ANTI-DESASTRE E ESCUDO FINANCEIRO (RESILIÊNCIA NÍVEL MILITAR):**
   - **Escudo Financeiro (Anti-Denial of Wallet):** O setup na infraestrutura (Cloudflare/AWS) DEVE incluir alertas diários de faturamento (Billing Alerts) e Limites Rígidos de Execução (Hard Caps). O WAF (Web Application Firewall) deve bloquear nativamente tráfego de botnets e países suspeitos para impedir que ataques inflem a fatura do servidor.
   - **Disjuntor Automático (Circuit Breaker):** O backend deve monitorar a saúde das APIs de terceiros (Pagamentos, Fretes). Se o serviço externo falhar repetidamente, o "disjuntor" desarma, interrompendo as chamadas para não travar o frontend em cascata, exibindo um fallback amigável instantâneo para o cliente.
   - **Backups Imutáveis (Off-site Recovery):** O banco de dados primário (D1) deve exportar snapshots diários automáticos para armazenamento frio (R2/S3). Esses snapshots devem possuir política de "Imutabilidade" (não podem ser deletados via API por 30 dias), garantindo restauração total mesmo se o administrador tiver sua senha ou chaves roubadas.
- - -  
 d e s c r i p t i o n :   R e g r a s   g l o b a i s   d e   e n g e n h a r i a   V i b e   C o d e r   P r o f i s s i o n a l   ( C I / C D ,   B i o m e ,   S t r y k e r ,   M o t i o n )  
 t r i g g e r :   a l w a y s _ o n  
 - - -  
  
 #   V i b e   C o d e r   P r o f i s s i o n a l   &   M o t i o n   P r i n c i p l e s  
  
 S e m p r e   q u e   a t u a r   c o m o   d e s e n v o l v e d o r   w e b   ( V i b e   C o d e r ) ,   i m p l e m e n t e   c � � d i g o   p r o f i s s i o n a l   d e   a l t a   e s c a l a ,   s e g u r a n � � a   e   l o n g e v i d a d e :  
  
 # #   1 .   Q u a l i t y   G a t e s   ( F i l t r o s   d e   Q u a l i d a d e )   A N T E S   d o   C � � d i g o   P r i n c i p a l  
 -   * * N U N C A * *   e n v i e   c � � d i g o   n � � o   t e s t a d o   p a r a   a   ` m a i n ` .   S e m p r e   u t i l i z e   o   e c o s s i s t e m a   d o   G i t H u b   p a r a   c r i a r   * * I s s u e s * *   e   * * P u l l   R e q u e s t s   ( P R s ) * *   v i n c u l a d o s   ( ` F i x e s   # 1 ` ) .  
 -   * * B i o m e * * :   U t i l i z e   ` @ b i o m e j s / b i o m e `   p a r a   l i n t i n g   e   f o r m a t a � � � � o   u l t r a r r � � p i d a .   E s q u e � � a   P r e t t i e r / E S L i n t .  
 -   * * S t r y k e r * * :   C o n f i g u r e   t e s t e s   d e   m u t a � � � � o   c o m   ` @ s t r y k e r - m u t a t o r / c o r e `   p a r a   v a l i d a r   a   f o r � � a   d o s   t e s t e s .  
 -   * * T e s t e s   d e   V a l i d a � � � � o   &   A r q u i t e t u r a * * :   T o d o   P R   d e v e   t e r   s c r i p t s   d e   t e s t e s   u n i t � � r i o s   r o d a n d o   e m   C I / C D .  
 -   * * C I / C D   A c t i o n s * * :   I m p l e m e n t e   e s t e i r a s   ` . g i t h u b / w o r k f l o w s / c i - c d . y m l `   q u e   b a r r e m   P R s   c o m   q u e b r a s   d e   B i o m e   o u   S t r y k e r .  
  
 # #   2 .   M o t i o n   P r i n c i p l e s   ( U X / U I   P r e m i u m )  
 -   * * L a z y   L o a d i n g * * :   T o d o   c o n t e � � d o   p e s a d o   o u   i m a g e n s   f o r a   d a   p r i m e i r a   d o b r a   d e v e m   c a r r e g a r   s o b   d e m a n d a   ( ` l o a d i n g = " l a z y " `   e   ` I n t e r s e c t i o n O b s e r v e r ` ) .  
 -   * * S k e l e t o n s * * :   U s e   e s t a d o s   d e   c a r r e g a m e n t o   ( S k e l e t o n s )   f l u i d o s   p a r a   e v i t a r   l a y o u t   s h i f t   ( " p u l o s "   d e   t e l a ) .  
 -   * * M i c r o - a n i m a � � � � e s * * :   E n t r a d a   d e   e l e m e n t o s   c o m   F a d e - i n   e   S l i d e - u p   u t i l i z a n d o   c u r v a s   s u a v e s   ( ` c u b i c - b e z i e r ` ) .   S e m   a n i m a � � � � e s   b r u s c a s .  
 -   * * R e a t i v i d a d e * * :   E l e m e n t o s   i n t e r a t i v o s   ( b o t � � e s ,   m o d a i s )   d e v e m   t e r   f e e d b a c k   v i s u a l   i m e d i a t o   ( h o v e r ,   a c t i v e ,   f o c u s ) .  
 