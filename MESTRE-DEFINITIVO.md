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
