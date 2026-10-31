const fs = require('fs');

const content = `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <title>Carla Barbosa Estúdio de Beleza • Expert em Loiros • Montes Claros - MG</title>
  
  <meta name="description" content="Viva a experiência Carla Barbosa Estúdio de Beleza. Expert em Loiros de Alta Precisão, Visagismo, Corte Butterfly, Nails e Make Up de Luxo em Montes Claros - MG." />
  <meta name="keywords" content="Carla Barbosa, Estúdio de Beleza, Montes Claros, Expert em Loiros, Mechas Peroladas, Butterfly Cut, Alisamento a LED, Nails em Gel, Maquiagem Noivas" />
  <meta name="author" content="Carla Barbosa Estúdio de Beleza" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#FFFFFF" />

  <!-- Metatags Open Graph para WhatsApp e Redes Sociais -->
  <meta property="og:type" content="business.business" />
  <meta property="og:title" content="Carla Barbosa Estúdio de Beleza • Expert em Loiros" />
  <meta property="og:description" content="Viva a experiência de cabine: Loiros de Alta Precisão, Butterfly Cut, Nails Diamante e Make Up no Jardim São Luiz em Montes Claros - MG." />
  <meta property="og:url" content="https://carlabarbosa.emia.workers.dev" />
  <meta property="og:image" content="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="pt_BR" />

  <!-- Favicon e Manifest PWA -->
  <link rel="icon" type="image/svg+xml" href="favicon.svg" />
  <link rel="manifest" href="manifest.json" />
  <link rel="apple-touch-icon" href="icon-192.png" />

  <!-- Preconnect para Fontes e Imagens -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preconnect" href="https://images.unsplash.com" />
  <link rel="preconnect" href="https://unpkg.com" />

  <!-- Google Fonts: Playfair Display + Cormorant Garamond + Inter + Plus Jakarta Sans -->
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

  <!-- Tailwind CSS 3.4 CDN com Paleta Personalizada -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            pure: '#FFFFFF',
            'brand-dark': '#2D1B22',
            'brand-border': '#FFE0E8',
            'accent-pink': '#FF8FAB',
            'accent-rose': '#E8A0BF',
            'accent-plum': '#C08497',
            terracotta: {
              DEFAULT: '#A35843',
              hover: '#8C4733',
              dark: '#733726'
            },
            linen: {
              DEFAULT: '#FBF9F6',
              dark: '#FAF7F2'
            }
          },
          fontFamily: {
            serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
            sans: ['Inter', 'Plus Jakarta Sans', '-apple-system', 'sans-serif']
          }
        }
      }
    };
  </script>

  <!-- Schema.org (JSON-LD) para Indexação Google Maps e Busca -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Carla Barbosa Estúdio de Beleza",
    "legalName": "Barbosa Serviços de Beleza Ltda",
    "image": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85",
    "telephone": "+55-38-99860-4447",
    "url": "https://carlabarbosa.emia.workers.dev",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Deputado Antônio Pimenta, 72",
      "addressLocality": "Montes Claros",
      "addressRegion": "MG",
      "postalCode": "39401-054",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -16.7262,
      "longitude": -43.8687
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:30"
      }
    ],
    "sameAs": [
      "https://instagram.com/carlabarbosa.estudio"
    ],
    "priceRange": "$$$"
  }
  </script>

  <!-- Estilos Globais -->
  <link rel="stylesheet" href="styles.css" />

  <!-- Lenis Smooth Scroll -->
  <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <!-- React 18 & ReactDOM 18 Production UMD -->
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
</head>
<body class="bg-white text-[#2D1B22] antialiased overflow-x-hidden selection:bg-[#FFE0E8] selection:text-[#2D1B22]">
  
  <!-- Root React Mounting Container -->
  <div id="root">
    <div class="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center space-y-4">
      <span class="font-serif-luxury text-3xl font-bold uppercase tracking-widest text-[#2D1B22] animate-pulse">
        CARLA BARBOSA
      </span>
      <span class="text-xs uppercase tracking-[0.3em] text-[#A35843] font-semibold">
        Estúdio de Beleza • Montes Claros - MG
      </span>
      <div class="w-12 h-0.5 bg-[#FF8FAB] rounded-full animate-ping"></div>
    </div>
  </div>

  <noscript>
    <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
      <h2>Carla Barbosa Estúdio de Beleza</h2>
      <p>Rua Deputado Antônio Pimenta, 72 - Jardim São Luiz, Montes Claros - MG.</p>
      <p>Para agendamentos, fale no WhatsApp: <a href="https://wa.me/5538998604447">(38) 99860-4447</a>.</p>
    </div>
  </noscript>

  <!-- Aplicação Compilada React 18 + Tailwind SPA -->
  <script src="app.js"></script>

  <!-- Registro do Service Worker PWA -->
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
      });
    }
  </script>
</body>
</html>`;

fs.writeFileSync('index.html', content, 'utf8');
console.log('✅ index.html gerado com sucesso!');
