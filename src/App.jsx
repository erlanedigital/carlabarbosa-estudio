import React, { useState, useEffect, useRef } from 'react';

// ============================================================
// CARLA BARBOSA ESTÚDIO DE BELEZA — REACT 18 + TAILWIND CSS
// Fundo BRANCO PURO #FFFFFF • Borda #FFE0E8 • Texto #2D1B22
// Accents: #E8A0BF, #FF8FAB, #C08497 & Terracota #A35843
// WhatsApp Oficial: https://wa.me/5538998604447
// ============================================================

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminAuth, setAdminAuth] = useState(false);
  const [adminPass, setAdminPass] = useState('');
  const [adminTab, setAdminTab] = useState('media');
  const [toastMsg, setToastMsg] = useState('');
  const [quizStep, setQuizStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({ hairType: '', goal: '', routine: '' });
  const [quizResult, setQuizResult] = useState(null);

  // Produtos Oficiais Home Care
  const [products, setProducts] = useState([
    {
      id: 'oleo-sublime',
      name: 'Elixir Capilar Sublime de Argan & Rosa Mosqueta',
      category: 'oleos',
      badge: 'Mais Vendido',
      price: 139.0,
      image: 'https://images.unsplash.com/photo-1608248597359-551101968846?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Nutrição profunda, proteção térmica até 230°C e brilho espelhado para loiros e morenas.',
      fullDesc: 'Fórmula de cabine Carla Barbosa com Óleo de Argan marroquino puro e Rosa Mosqueta nobre. Sela pontas duplas e devolve a sedosidade imediata sem pesar nos fios.',
      rating: 5.0,
      reviews: 124
    },
    {
      id: 'mascara-caviar',
      name: 'Máscara Reconstrutora de Caviar & Peptídeos',
      category: 'tratamento',
      badge: 'Fórmula de Cabine',
      price: 189.0,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Reposição lipídica e reestruturação de pontes de queratina para cabelos pós-química.',
      fullDesc: 'Protocolo de alta densidade proteica para revitalizar cabelos descoloridos, ressecados ou com mechas. Recupera a elasticidade na primeira aplicação.',
      rating: 4.9,
      reviews: 98
    },
    {
      id: 'matizador-pearl',
      name: 'Máscara Iluminadora Loiros Perolados Gloss',
      category: 'loiros',
      badge: 'Expert em Loiros',
      price: 159.0,
      image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Micropigmentos perolados que neutralizam tons amarelados sem ressecar a fibra.',
      fullDesc: 'Assinatura oficial de Carla Barbosa. Garante aquele loiro champagne de capa de revista com hidratação ultra reconstrutora.',
      rating: 5.0,
      reviews: 86
    },
    {
      id: 'serum-led',
      name: 'Sérum Termoprotetor Blindagem & Brilho LED',
      category: 'oleos',
      badge: 'Efeito Espelho',
      price: 169.0,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Fluido protetor fotoativado para alinhamento e redução instantânea de frizz.',
      fullDesc: 'Cria uma película protetora inteligente contra umidade e calor extremo. Mantém o efeito escovado sedoso por muito mais tempo.',
      rating: 4.9,
      reviews: 73
    },
    {
      id: 'brow-booster',
      name: 'Sérum Fortalecedor de Sobrancelhas & Cílios',
      category: 'olhar',
      badge: 'Beauty & Olhar',
      price: 149.0,
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Complexo bioativo com Biotina e Peptídeos para nutrição e alinhamento elegante.',
      fullDesc: 'Estimula a densidade folicular e mantém os fios alinhados com toque acetinado após procedimentos de Brow Lamination.',
      rating: 5.0,
      reviews: 64
    },
    {
      id: 'acidificante-ph',
      name: 'Acidificante Reparador Equilíbrio do pH',
      category: 'tratamento',
      badge: 'Pós-Descoloração',
      price: 139.0,
      image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Selamento milimétrico de cutículas e restauração do pH fisiológico capilar.',
      fullDesc: 'Essencial após mechas ou colorações. Devolve o brilho vítreo aos cabelos e impede a perda hídrica da fibra capilar.',
      rating: 4.9,
      reviews: 52
    }
  ]);

  const [activeCategory, setActiveCategory] = useState('todos');

  // Posts Reais do Instagram solicitados pelo cliente
  const instagramPosts = [
    {
      id: 'post-1',
      code: 'DYhtFGvll6G',
      url: 'https://www.instagram.com/p/DYhtFGvll6G/',
      title: 'Loiro dos Sonhos & Micromechas Peroladas',
      badge: 'Expert em Loiros',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
      caption: 'A arte da descoloração segura: contraste harmônico, raiz esfumada suave e proteção intensiva das pontes capilares no estúdio.'
    },
    {
      id: 'post-2',
      code: 'DeVYFbdqN5M',
      url: 'https://www.instagram.com/p/DeVYFbdqN5M/',
      title: 'Corte Butterfly Cut & Camadas com Movimento',
      badge: 'Cortes de Tendência',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      caption: 'Leveza de passarela sem abrir mão do comprimento. As curtain bangs emolduram as feições com visagismo milimétrico.'
    },
    {
      id: 'post-3',
      code: 'DeO7l3yKWUD',
      url: 'https://www.instagram.com/p/DeO7l3yKWUD/',
      title: 'Morena Iluminada Avelã & Caramelo Quente',
      badge: 'Colorimetria de Luxo',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
      caption: 'Luminosidade sofisticada para quem deseja clarear com naturalidade e baixa manutenção. Brilho espelhado e fios nutridos.'
    },
    {
      id: 'post-4',
      code: 'DTnvKPMDiz3',
      url: 'https://www.instagram.com/p/DTnvKPMDiz3/',
      title: 'Terapia da Fibra & Cronograma de Cabine',
      badge: 'Saúde Capilar',
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
      caption: 'Tratamento intensivo que repõe massa proteica e sela cutículas abertas. Cabelo forte, maleável e resistente à quebra.'
    },
    {
      id: 'post-5',
      code: 'DeSYxzNKl2f',
      url: 'https://www.instagram.com/p/DeSYxzNKl2f/',
      title: 'Make Up & Nails para Grandes Ocasiões',
      badge: 'Beauty & Glamour',
      image: 'https://images.unsplash.com/photo-1512290900672-1f02a0a0ff76?auto=format&fit=crop&w=800&q=80',
      caption: 'Produção completa de noivas, formandas e convidadas com pele blindada de alta durabilidade e unhas esculpidas em gel.'
    }
  ];

  // Reels Reais do Instagram solicitados pelo cliente
  const instagramReels = [
    {
      id: 'reel-1',
      code: 'DcO7FHtKcHI',
      url: 'https://www.instagram.com/reel/DcO7FHtKcHI/',
      title: 'A Transformação do Loiro Perolado ao Vivo',
      badge: 'Loiro de Cabine',
      poster: 'https://images.unsplash.com/photo-1584297091622-af8e5fdcf9e2?auto=format&fit=crop&w=800&q=80',
      subtitle: 'Descoloração com proteção Plex e tonalização champagne gloss.'
    },
    {
      id: 'reel-2',
      code: 'DVQsdaBjor2',
      url: 'https://www.instagram.com/reel/DVQsdaBjor2/',
      title: 'O Balanço e Fluidez do Butterfly Cut',
      badge: 'Visagismo & Corte',
      poster: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
      subtitle: 'Veja o movimento das camadas e a finalização com escova modelada.'
    },
    {
      id: 'reel-3',
      code: 'De2d_54KYWg',
      url: 'https://www.instagram.com/reel/De2d_54KYWg/',
      title: 'Alisamento a LED e Fotoativação sem Formol',
      badge: 'Tecnologia a LED',
      poster: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=800&q=80',
      subtitle: 'Brilho espelhado absoluto, zero fumaça tóxica e toque aveludado.'
    }
  ];

  // Efeito Lenis Smooth Scroll + Barra de Progresso + Mask Reveal
  useEffect(() => {
    // 1. Lenis Smooth Scroll
    if (typeof window.Lenis !== 'undefined') {
      const lenis = new window.Lenis({
        lerp: 0.07,
        duration: 1.5,
        smoothWheel: true,
        orientation: 'vertical',
        gestureOrientation: 'vertical'
      });
      window.lenis = lenis;

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      lenis.on('scroll', ({ progress }) => {
        const progressBar = document.getElementById('scrollProgress');
        if (progressBar) {
          progressBar.style.transform = `scaleX(${progress})`;
        }
      });
    }

    // 2. Cinematic Mask Reveal Trigger
    const timer = setTimeout(() => {
      document.querySelectorAll('.mask-reveal-line').forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('revealed');
        }, index * 60);
      });
    }, 150);

    // 3. Lucide Icons
    if (window.lucide) {
      window.lucide.createIcons();
    }

    return () => clearTimeout(timer);
  }, []);

  // Recarregar ícones após renderizações
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [cart, isCartOpen, selectedProduct, quizStep, activeCategory]);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
    showToast(`${product.name} adicionado à sacola!`);
  };

  const updateCartQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleQuizSubmit = (type, val) => {
    const updated = { ...quizAnswers, [type]: val };
    setQuizAnswers(updated);
    if (quizStep < 3) {
      setQuizStep(quizStep + 1);
    } else {
      // Calcular recomendação
      setQuizResult({
        title: 'Ritual Loiro Iluminado & Reconstrução de Fios',
        description: 'Seus fios demandam reposição lipídica e selamento de cutículas com proteção térmica. Prescrevemos o Elixir Sublime + Máscara Reconstrutora de Caviar.',
        recommendedProduct: products[0]
      });
      setQuizStep(4);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#2D1B22] relative selection:bg-[#FFE0E8] selection:text-[#2D1B22]">
      {/* ===== GRAIN ANALÓGICO ROSA ===== */}
      <div className="film-grain-rose"></div>

      {/* ===== BARRA DE PROGRESSO ROSA LERPS NO TOPO ===== */}
      <div id="scrollProgress" className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF8FAB] via-[#E8A0BF] to-[#A35843] z-50 transform scale-x-0 origin-left transition-transform duration-75"></div>

      {/* ===== CUSTOM CURSOR (DESKTOP) ===== */}
      <CustomCursor />

      {/* ===== TOAST NOTIFICATION ===== */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#A35843] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20 text-xs font-semibold animate-bounce">
          <i data-lucide="check-circle" className="w-4 h-4 text-[#FFE0E8]"></i>
          <span>{toastMsg}</span>
        </div>
      )}

      {/* ===== BARRA DE AVISO SUPERIOR COM STATUS ONLINE AO VIVO ===== */}
      <div className="bg-[#FAF7F2] text-[#2D1B22] text-xs uppercase tracking-widest py-2.5 px-4 text-center border-b border-[#FFE0E8] flex flex-wrap items-center justify-center gap-2 sm:gap-4">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-600/10 border border-emerald-600/30 text-[10px] font-semibold text-emerald-700 tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          Atendimento Online • Montes Claros
        </span>
        <span className="hidden md:inline text-[#E8A0BF]">•</span>
        <span className="font-semibold text-xs tracking-wider">CARLA BARBOSA ESTÚDIO DE BELEZA • RUA DEP. ANTÔNIO PIMENTA, 72 - JARDIM SÃO LUIZ</span>
        <span className="hidden md:inline text-[#E8A0BF]">•</span>
        <a href="https://instagram.com/carlabarbosa.estudio" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-1 text-[#A35843] hover:text-[#2D1B22] font-semibold transition-colors">
          <i data-lucide="instagram" className="w-3.5 h-3.5 text-[#E8A0BF]"></i> @carlabarbosa.estudio (25k)
        </a>
      </div>

      {/* ===== CABEÇALHO / HEADER FIXO LUXURY EDITORIAL ===== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#FFE0E8] transition-all">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-6">
          
          {/* Logo Oficial com gatilho discreto do Admin no duplo clique */}
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              onDoubleClick={() => setIsAdminOpen(true)}
              title="Carla Barbosa Estúdio de Beleza" 
              className="group cursor-pointer select-none"
            >
              <span className="font-serif-luxury text-2xl sm:text-3xl tracking-widest font-bold uppercase text-[#2D1B22] group-hover:text-[#A35843] transition-colors block">
                CARLA BARBOSA
              </span>
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#C08497] block font-semibold">
                Estúdio de Beleza • Montes Claros
              </span>
            </a>
          </div>

          {/* Links de Navegação Textuais Explícitos e Incondicionais */}
          <nav className="hidden xl:flex items-center gap-7 text-xs uppercase tracking-widest font-semibold text-[#2D1B22]/80">
            <a href="#manifesto" className="hover:text-[#A35843] transition-colors">Manifesto</a>
            <a href="#servicos" className="hover:text-[#A35843] transition-colors">Serviços 2x2</a>
            <a href="#galeria" className="hover:text-[#A35843] transition-colors">Galeria Real</a>
            <a href="#reels" className="hover:text-[#A35843] transition-colors">Reels</a>
            <a href="#catalogo" className="hover:text-[#A35843] transition-colors">Cosméticos</a>
            <a href="#quiz" className="hover:text-[#A35843] transition-colors">Diagnóstico</a>
            <a href="#localizacao" className="hover:text-[#A35843] transition-colors">Localização</a>
          </nav>

          {/* Ações da Direita: Sacola com Contador + CTA Oficial com Shine Sweep */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 text-[#2D1B22] hover:text-[#A35843] transition-colors"
              title="Sacola de Compras"
            >
              <i data-lucide="shopping-bag" className="w-5 h-5"></i>
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#A35843] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* CTA Oficial com Shine Sweep e Redirecionamento Direto */}
            <MagneticButton>
              <a
                href="https://wa.me/5538998604447?text=Ol%C3%A1%20Carla%20Barbosa!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20cabine."
                target="_blank"
                rel="noopener noreferrer"
                className="shine-sweep-btn inline-flex items-center justify-center bg-[#A35843] hover:bg-[#8C4733] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 shadow-md shadow-[#A35843]/20 hover:scale-105 active:scale-95"
              >
                <span>Agendar Horário</span>
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Sub-barra horizontal mobile com rolagem suave */}
        <div className="xl:hidden bg-[#FAF7F2] border-t border-[#FFE0E8] py-2 px-4 overflow-x-auto whitespace-nowrap flex items-center gap-2">
          <a href="#manifesto" className="px-3 py-1 rounded-full bg-white border border-[#FFE0E8] text-xs font-semibold uppercase text-[#2D1B22]">Manifesto</a>
          <a href="#servicos" className="px-3 py-1 rounded-full bg-white border border-[#FFE0E8] text-xs font-semibold uppercase text-[#2D1B22]">Serviços</a>
          <a href="#galeria" className="px-3 py-1 rounded-full bg-white border border-[#FFE0E8] text-xs font-semibold uppercase text-[#2D1B22]">Galeria</a>
          <a href="#reels" className="px-3 py-1 rounded-full bg-white border border-[#FFE0E8] text-xs font-semibold uppercase text-[#2D1B22]">Reels</a>
          <a href="#catalogo" className="px-3 py-1 rounded-full bg-white border border-[#FFE0E8] text-xs font-semibold uppercase text-[#2D1B22]">Cosméticos</a>
          <a href="#quiz" className="px-3 py-1 rounded-full bg-white border border-[#FFE0E8] text-xs font-semibold uppercase text-[#2D1B22]">Diagnóstico</a>
          <a href="#localizacao" className="px-3 py-1 rounded-full bg-white border border-[#FFE0E8] text-xs font-semibold uppercase text-[#2D1B22]">Localização</a>
        </div>
      </header>

      {/* ===== HERO COM CINEMATIC MASK REVEAL & TÍTULO GIGANTE CLAMP 4rem-9rem ===== */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:py-32 border-b border-[#FFE0E8]">
        {/* Lens Flares Rosê de Fundo com Blur 60px */}
        <div className="lens-flare-pink top-10 right-1/4"></div>
        <div className="lens-flare-pink bottom-10 left-10 opacity-70"></div>

        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Texto Principal com Cinematic Mask Reveal */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              
              {/* Eyebrow de Alta Costura */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#FFE0E8] text-xs font-bold tracking-widest uppercase text-[#C08497] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#FF8FAB] animate-pulse"></span>
                <span>Expert em Loiros ✨ Hair | Beauty | Nails | Make up</span>
              </div>

              {/* Título Gigante Clamp 4rem-9rem com Cinematic Mask Reveal (y 110%->0%, overflow:hidden, stagger 0.06s, blur 10px->0, scaleY 1.3->1) */}
              <h1 className="font-serif-luxury text-[clamp(2.75rem,7.5vw,7.8rem)] text-[#2D1B22] font-black leading-[0.98] tracking-tight uppercase select-none">
                <span className="mask-reveal-container">
                  <span className="mask-reveal-line">VIVA A EXPERIÊNCIA</span>
                </span>
                <span className="mask-reveal-container">
                  <span className="mask-reveal-line text-[#A35843] italic font-normal">CARLA BARBOSA</span>
                </span>
                <span className="mask-reveal-container">
                  <span className="mask-reveal-line">ESTÚDIO DE BELEZA</span>
                </span>
              </h1>

              {/* Subtítulo Refinado de Alta Precisão */}
              <p className="text-base sm:text-xl text-[#2D1B22]/75 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Técnicas de descoloração de microprecisão, visagismo internacional e protocolos de cabine formulados para preservar a integridade absoluta dos seus fios.
              </p>

              {/* Botão Oficial WhatsApp com Efeito Shine Sweep e Raio Magnético */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <MagneticButton>
                  <a
                    href="https://wa.me/5538998604447?text=Ol%C3%A1%20Carla%20Barbosa!%20Gostaria%20de%20viver%20a%20experi%C3%AAncia%20de%20cabine%20no%20est%C3%BAdio."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shine-sweep-btn w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#A35843] hover:bg-[#8C4733] text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#A35843]/25 hover:scale-105 active:scale-95"
                  >
                    <i data-lucide="message-circle" className="w-5 h-5 text-[#FFE0E8]"></i>
                    <span>Iniciar Avaliação no WhatsApp</span>
                    <i data-lucide="arrow-right" className="w-4 h-4"></i>
                  </a>
                </MagneticButton>

                <a 
                  href="#servicos" 
                  className="w-full sm:w-auto px-8 py-5 rounded-full border border-[#FFE0E8] bg-[#FAF7F2] hover:bg-white text-[#2D1B22] font-bold text-xs uppercase tracking-widest transition-all text-center"
                >
                  Conhecer Menu 2x2
                </a>
              </div>

              {/* Selos de Confiança Factuais do Estabelecimento */}
              <div className="pt-8 border-t border-[#FFE0E8] grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <span className="block font-serif-luxury text-2xl sm:text-3xl text-[#2D1B22] font-bold">25k</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#C08497] font-semibold">Seguidoras Instagram</span>
                </div>
                <div>
                  <span className="block font-serif-luxury text-2xl sm:text-3xl text-[#2D1B22] font-bold">100%</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#C08497] font-semibold">Exclusivo com Hora Marcada</span>
                </div>
                <div>
                  <span className="block font-serif-luxury text-2xl sm:text-3xl text-[#2D1B22] font-bold">4.9★</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#C08497] font-semibold">Avaliação Ouro</span>
                </div>
              </div>
            </div>

            {/* Imagem Hero com Ken Burns Scale e Moldura Editorial */}
            <div className="lg:col-span-4 relative">
              <div className="relative mx-auto max-w-md rounded-3xl bg-[#FAF7F2] p-4 sm:p-6 border border-[#FFE0E8] shadow-2xl">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80" 
                    alt="Experiência de Cabine Carla Barbosa"
                    className="ken-burns-img w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B22]/70 via-transparent to-transparent"></div>
                  
                  {/* Card Flutuante de Destaque */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#FFE0E8] shadow-lg flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] tracking-widest uppercase text-[#FF8FAB] font-bold">Padrão Ouro</span>
                      <span className="font-serif-luxury text-sm font-bold text-[#2D1B22]">Loiros de Microprecisão</span>
                    </div>
                    <a 
                      href="https://wa.me/5538998604447" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-3.5 py-1.5 rounded-full bg-[#A35843] text-white text-[10px] font-bold uppercase tracking-wider hover:bg-[#8C4733]"
                    >
                      Agendar
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== MARQUEE INFINITO 40S COM TIPOGRAFIA EDITORIAL ===== */}
      <div className="py-5 bg-[#FAF7F2] border-b border-[#FFE0E8] overflow-hidden whitespace-nowrap">
        <div className="marquee-track flex items-center gap-8 text-xs font-bold uppercase tracking-[0.3em] text-[#C08497]">
          <span>CARLA BARBOSA ESTÚDIO DE BELEZA</span>
          <span className="text-[#FF8FAB]">•</span>
          <span>EXPERT EM LOIROS DE ALTA PRECISÃO</span>
          <span className="text-[#FF8FAB]">•</span>
          <span>MONTES CLAROS - MG</span>
          <span className="text-[#FF8FAB]">•</span>
          <span>VISAGISMO & BUTTERFLY CUT</span>
          <span className="text-[#FF8FAB]">•</span>
          <span>ALISAMENTO FOTOATIVADO A LED</span>
          <span className="text-[#FF8FAB]">•</span>
          <span>NAILS EM GEL DIAMANTE</span>
          <span className="text-[#FF8FAB]">•</span>
          <span>MAKE UP SOCIAL DE LUXO</span>
          <span className="text-[#FF8FAB]">•</span>
          <span>CARLA BARBOSA ESTÚDIO DE BELEZA</span>
          <span className="text-[#FF8FAB]">•</span>
          <span>EXPERT EM LOIROS DE ALTA PRECISÃO</span>
          <span className="text-[#FF8FAB]">•</span>
          <span>MONTES CLAROS - MG</span>
          <span className="text-[#FF8FAB]">•</span>
          <span>VISAGISMO & BUTTERFLY CUT</span>
          <span className="text-[#FF8FAB]">•</span>
          <span>ALISAMENTO FOTOATIVADO A LED</span>
          <span className="text-[#FF8FAB]">•</span>
          <span>NAILS EM GEL DIAMANTE</span>
          <span className="text-[#FF8FAB]">•</span>
          <span>MAKE UP SOCIAL DE LUXO</span>
          <span className="text-[#FF8FAB]">•</span>
        </div>
      </div>

      {/* ===== MANIFESTO: "O LOIRO É TENDÊNCIA QUE NUNCA SAI DO RANKING" ===== */}
      <section id="manifesto" className="py-24 lg:py-32 bg-white border-b border-[#FFE0E8] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-8 relative z-10">
          
          <span className="inline-block text-xs uppercase tracking-[0.35em] text-[#A35843] font-bold px-4 py-1.5 rounded-full bg-[#FAF7F2] border border-[#FFE0E8]">
            Filosofia & Assinatura de Estúdio
          </span>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2D1B22] leading-tight max-w-4xl mx-auto">
            “O loiro é tendência que <em className="italic font-normal text-[#A35843]">nunca sai do ranking</em>.”
          </h2>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF8FAB] to-transparent mx-auto"></div>

          <p className="text-base sm:text-lg text-[#2D1B22]/80 font-light leading-relaxed max-w-3xl mx-auto">
            Em Montes Claros, Carla Barbosa transformou a descoloração capilar em uma arte cirúrgica de respeito à fibra. Cabelo bonito é cabelo saudável: cada mecha, cada transição e cada camada do corte visagista é desenhada para harmonizar com o seu tom de pele, respeitando a sua história e evidenciando a sua identidade mais sublime.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <a 
              href="https://wa.me/5538998604447?text=Ol%C3%A1%20Carla%20Barbosa!%20Li%20o%20manifesto%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20de%20mechas." 
              target="_blank" 
              rel="noopener noreferrer"
              className="shine-sweep-btn px-8 py-4 rounded-full bg-[#A35843] hover:bg-[#8C4733] text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#A35843]/20 transition-all"
            >
              Agendar Diagnóstico Personalizado
            </a>
            <a 
              href="https://instagram.com/carlabarbosa.estudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-[#FFE0E8] bg-white text-[#2D1B22] text-xs font-bold uppercase tracking-widest hover:border-[#E8A0BF] transition-all flex items-center gap-2"
            >
              <i data-lucide="instagram" className="w-4 h-4 text-[#FF8FAB]"></i> Ver Bastidores no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ===== SERVIÇOS 2x2: HAIR / BEAUTY / NAILS / MAKE UP ===== */}
      <section id="servicos" className="py-24 lg:py-32 bg-[#FAF7F2] border-b border-[#FFE0E8]">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A35843]">Menu de Especialidades</span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#2D1B22] font-bold">
              Experiência Completa em <em className="italic font-normal text-[#A35843]">4 Pilares</em>
            </h2>
            <p className="text-sm text-[#2D1B22]/70 leading-relaxed">
              Atendimento exclusivo com hora marcada na Rua Deputado Antônio Pimenta, 72 - Jardim São Luiz, Montes Claros - MG.
            </p>
          </div>

          {/* Grid 2x2: HAIR / BEAUTY / NAILS / MAKE UP */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Pilar 1: HAIR */}
            <div className="card-luxury rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFE0E8] flex items-center justify-center text-[#A35843]">
                    <i data-lucide="scissors" className="w-6 h-6"></i>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#FFE0E8] text-[10px] font-bold uppercase tracking-wider text-[#A35843]">
                    Assinatura do Estúdio
                  </span>
                </div>
                <h3 className="font-serif-luxury text-3xl font-bold text-[#2D1B22]">01. HAIR</h3>
                <p className="text-sm text-[#2D1B22]/75 leading-relaxed font-light">
                  A excelência que consagrou Carla Barbosa como referência absoluta em descoloração e cortes de tendência em Montes Claros.
                </p>
                <ul className="space-y-2 text-xs font-semibold text-[#2D1B22]/85 pt-2">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF8FAB]"></span> Loiros de Alta Precisão & Micromechas Peroladas</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF8FAB]"></span> Corte Butterfly Cut, Camadas & Curtain Bangs</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF8FAB]"></span> Alisamento Fotoativado a LED sem Formol</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF8FAB]"></span> Morena Iluminada em Tons Quentes (Avelã & Caramelo)</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-[#FFE0E8] flex items-center justify-between">
                <span className="text-xs text-[#C08497] font-semibold">Hora marcada</span>
                <a 
                  href="https://wa.me/5538998604447?text=Ol%C3%A1%20Carla%20Barbosa!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o%20de%20HAIR." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#A35843] hover:bg-[#8C4733] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-[#A35843]/20"
                >
                  Agendar HAIR
                </a>
              </div>
            </div>

            {/* Pilar 2: BEAUTY */}
            <div className="card-luxury rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFE0E8] flex items-center justify-center text-[#A35843]">
                    <i data-lucide="sparkles" className="w-6 h-6"></i>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#FFE0E8] text-[10px] font-bold uppercase tracking-wider text-[#A35843]">
                    Saúde & Bem-Estar
                  </span>
                </div>
                <h3 className="font-serif-luxury text-3xl font-bold text-[#2D1B22]">02. BEAUTY</h3>
                <p className="text-sm text-[#2D1B22]/75 leading-relaxed font-light">
                  Rituais regenerativos de couro cabeludo, terapia capilar integrativa e protocolos de embelezamento dérmico de alto padrão.
                </p>
                <ul className="space-y-2 text-xs font-semibold text-[#2D1B22]/85 pt-2">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF8FAB]"></span> Cronograma de Cabine & Reposição de Massa Lipídica</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF8FAB]"></span> Ozonioterapia Capilar & Desintoxicação do Bulbo</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF8FAB]"></span> Design de Sobrancelhas & Brow Lamination</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF8FAB]"></span> Visagismo Facial de Realce Natural</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-[#FFE0E8] flex items-center justify-between">
                <span className="text-xs text-[#C08497] font-semibold">Hora marcada</span>
                <a 
                  href="https://wa.me/5538998604447?text=Ol%C3%A1%20Carla%20Barbosa!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o%20de%20BEAUTY." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#A35843] hover:bg-[#8C4733] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-[#A35843]/20"
                >
                  Agendar BEAUTY
                </a>
              </div>
            </div>

            {/* Pilar 3: NAILS */}
            <div className="card-luxury rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFE0E8] flex items-center justify-center text-[#A35843]">
                    <i data-lucide="gem" className="w-6 h-6"></i>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#FFE0E8] text-[10px] font-bold uppercase tracking-wider text-[#A35843]">
                    Blindagem Diamante
                  </span>
                </div>
                <h3 className="font-serif-luxury text-3xl font-bold text-[#2D1B22]">03. NAILS</h3>
                <p className="text-sm text-[#2D1B22]/75 leading-relaxed font-light">
                  Unhas estruturadas com acabamento ultrafino e natural. Biossegurança com instrumentos esterilizados em autoclave.
                </p>
                <ul className="space-y-2 text-xs font-semibold text-[#2D1B22]/85 pt-2">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF8FAB]"></span> Alongamento em Gel com Curvatura C Perfeita</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF8FAB]"></span> Blindagem Diamante para Unhas Fracas</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF8FAB]"></span> Esmaltação em Gel com Durabilidade de até 25 Dias</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF8FAB]"></span> Spa dos Pés & Manicure Francesa de Alta Precisão</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-[#FFE0E8] flex items-center justify-between">
                <span className="text-xs text-[#C08497] font-semibold">Hora marcada</span>
                <a 
                  href="https://wa.me/5538998604447?text=Ol%C3%A1%20Carla%20Barbosa!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o%20de%20NAILS." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#A35843] hover:bg-[#8C4733] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-[#A35843]/20"
                >
                  Agendar NAILS
                </a>
              </div>
            </div>

            {/* Pilar 4: MAKE UP */}
            <div className="card-luxury rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFE0E8] flex items-center justify-center text-[#A35843]">
                    <i data-lucide="heart" className="w-6 h-6"></i>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#FFE0E8] text-[10px] font-bold uppercase tracking-wider text-[#A35843]">
                    Noivas & Eventos
                  </span>
                </div>
                <h3 className="font-serif-luxury text-3xl font-bold text-[#2D1B22]">04. MAKE UP</h3>
                <p className="text-sm text-[#2D1B22]/75 leading-relaxed font-light">
                  Produções completas que valorizam a beleza singular de cada cliente com técnicas de pele blindada à prova d'água.
                </p>
                <ul className="space-y-2 text-xs font-semibold text-[#2D1B22]/85 pt-2">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF8FAB]"></span> Maquiagem Social de Luxo para Formandas e Madrinhas</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF8FAB]"></span> Dia da Noiva Completo com Sala de Cabine Exclusiva</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF8FAB]"></span> Pele Blindada HD com Acabamento Glow Natural</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF8FAB]"></span> Cílios Tufinho Personalizados e Contorno Visagista</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-[#FFE0E8] flex items-center justify-between">
                <span className="text-xs text-[#C08497] font-semibold">Hora marcada</span>
                <a 
                  href="https://wa.me/5538998604447?text=Ol%C3%A1%20Carla%20Barbosa!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o%20de%20MAKE%20UP." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#A35843] hover:bg-[#8C4733] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-[#A35843]/20"
                >
                  Agendar MAKE UP
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== GALERIA COM POSTS REAIS DO INSTAGRAM ===== */}
      <section id="galeria" className="py-24 lg:py-32 bg-white border-b border-[#FFE0E8]">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#FFE0E8] text-xs font-bold uppercase tracking-widest text-[#A35843]">
              <i data-lucide="instagram" className="w-4 h-4 text-[#FF8FAB]"></i>
              <span>@carlabarbosa.estudio (25k)</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#2D1B22] font-bold">
              Galeria de Resultados <em className="italic font-normal text-[#A35843]">Reais</em>
            </h2>
            <p className="text-sm text-[#2D1B22]/70 leading-relaxed">
              Clique em qualquer publicação para abrir o post oficial no Instagram de Carla Barbosa.
            </p>
          </div>

          {/* Grid de 5 Posts Reais */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {instagramPosts.map((post) => (
              <div 
                key={post.id} 
                className="card-luxury rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div className="aspect-square relative overflow-hidden bg-[#FAF7F2]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    loading="lazy" 
                    className="ken-burns-img w-full h-full object-cover" 
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#FFE0E8] text-[9px] font-bold uppercase tracking-wider text-[#A35843]">
                    {post.badge}
                  </div>
                  <a 
                    href={post.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute inset-0 bg-[#2D1B22]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"
                  >
                    <span className="px-4 py-2 rounded-full bg-white text-[#2D1B22] text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                      <i data-lucide="external-link" className="w-3.5 h-3.5 text-[#A35843]"></i> Ver no Insta
                    </span>
                  </a>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif-luxury text-base font-bold text-[#2D1B22] line-clamp-1">{post.title}</h4>
                    <p className="text-xs text-[#2D1B22]/70 font-light line-clamp-2 mt-1">{post.caption}</p>
                  </div>
                  <div className="pt-3 border-t border-[#FFE0E8] flex items-center justify-between text-[11px]">
                    <span className="text-[#C08497] font-semibold">Instagram Oficial</span>
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#A35843] font-bold hover:underline"
                    >
                      /p/{post.code} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://instagram.com/carlabarbosa.estudio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#FFE0E8] bg-[#FAF7F2] hover:bg-white text-[#2D1B22] text-xs font-bold uppercase tracking-widest transition-all shadow-sm"
            >
              <i data-lucide="instagram" className="w-4 h-4 text-[#FF8FAB]"></i> Acompanhar @CARLABARBOSA.ESTUDIO
            </a>
          </div>

        </div>
      </section>

      {/* ===== REELS REAIS DO INSTAGRAM ===== */}
      <section id="reels" className="py-24 lg:py-32 bg-[#FAF7F2] border-b border-[#FFE0E8]">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#FFE0E8] text-xs font-bold uppercase tracking-widest text-[#A35843]">
              <i data-lucide="film" className="w-3.5 h-3.5 text-[#FF8FAB]"></i>
              <span>Cinema & Movimento de Cabine</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#2D1B22] font-bold">
              Reels de Cabine em <em className="italic font-normal text-[#A35843]">Alta Definição</em>
            </h2>
            <p className="text-sm text-[#2D1B22]/70 leading-relaxed">
              Assista ao balanço real, corte e luminosidade das clientes atendidas na cadeira de Carla Barbosa.
            </p>
          </div>

          {/* Grid de 3 Reels Reais */}
          <div className="grid md:grid-cols-3 gap-8">
            {instagramReels.map((reel) => (
              <div 
                key={reel.id} 
                className="card-luxury rounded-3xl overflow-hidden flex flex-col justify-between group shadow-lg"
              >
                <div className="aspect-[9/14] relative bg-black overflow-hidden">
                  <img 
                    src={reel.poster} 
                    alt={reel.title} 
                    loading="lazy" 
                    className="ken-burns-img w-full h-full object-cover group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#A35843] text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                    {reel.badge}
                  </div>
                  
                  {/* Overlay gradiente escurecido suave somente sobre o reel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <a 
                      href={reel.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-14 h-14 rounded-full bg-white/90 hover:bg-white text-[#A35843] flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
                      title="Assistir Reel no Instagram"
                    >
                      <i data-lucide="play" className="w-6 h-6 ml-1"></i>
                    </a>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#FFE0E8] font-bold">/reel/{reel.code}</span>
                    <h3 className="font-serif-luxury text-lg font-bold">{reel.title}</h3>
                    <p className="text-xs text-white/80 line-clamp-2">{reel.subtitle}</p>
                  </div>
                </div>

                <div className="p-5 bg-white border-t border-[#FFE0E8] flex items-center justify-between">
                  <a 
                    href={reel.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-semibold text-[#2D1B22] hover:text-[#A35843] flex items-center gap-1.5"
                  >
                    <i data-lucide="instagram" className="w-4 h-4 text-[#FF8FAB]"></i> Abrir Reel
                  </a>
                  <a 
                    href="https://wa.me/5538998604447?text=Ol%C3%A1%20Carla%20Barbosa!%20Vi%20o%20Reel%20no%20site%20e%20gostaria%20de%20agendar." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 rounded-full bg-[#A35843] hover:bg-[#8C4733] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-[#A35843]/20"
                  >
                    Agendar Esse
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== CATÁLOGO DE COSMÉTICOS DE CABINE (HOME CARE) ===== */}
      <section id="catalogo" className="py-24 lg:py-32 bg-white border-b border-[#FFE0E8]">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A35843]">Home Care de Alta Performance</span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#2D1B22] font-bold">
              Cosméticos de <em className="italic font-normal text-[#A35843]">Cabine</em>
            </h2>
            <p className="text-sm text-[#2D1B22]/70 leading-relaxed">
              Mantenha o efeito salão em casa com as mesmas fórmulas inteligentes utilizadas na cadeira de Carla Barbosa.
            </p>
          </div>

          {/* Filtros de Categoria */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: 'todos', label: 'Todos os Cosméticos' },
              { id: 'oleos', label: 'Óleos & Elixires' },
              { id: 'tratamento', label: 'Tratamento & Máscaras' },
              { id: 'loiros', label: 'Loiros Perolados' },
              { id: 'olhar', label: 'Olhar & Sobrancelhas' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? 'bg-[#A35843] text-white shadow-md shadow-[#A35843]/20' 
                    : 'bg-[#FAF7F2] text-[#2D1B22] border border-[#FFE0E8] hover:border-[#E8A0BF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grade de Produtos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter(p => activeCategory === 'todos' || p.category === activeCategory)
              .map(p => (
                <div key={p.id} className="card-luxury rounded-3xl overflow-hidden flex flex-col justify-between group">
                  <div 
                    onClick={() => setSelectedProduct(p)} 
                    className="aspect-square relative overflow-hidden bg-[#FAF7F2] cursor-pointer"
                  >
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      loading="lazy" 
                      className="ken-burns-img w-full h-full object-cover" 
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 border border-[#FFE0E8] text-[10px] uppercase font-bold tracking-wider text-[#A35843] backdrop-blur-sm">
                      {p.badge}
                    </span>
                  </div>

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-[#FF8FAB] text-xs mb-1">
                        <span>★★★★★</span>
                        <span className="text-[#2D1B22]/50 text-[11px]">({p.reviews} avaliações)</span>
                      </div>
                      <h3 
                        onClick={() => setSelectedProduct(p)} 
                        className="font-serif-luxury text-xl font-bold text-[#2D1B22] hover:text-[#A35843] transition-colors cursor-pointer"
                      >
                        {p.name}
                      </h3>
                      <p className="text-xs text-[#2D1B22]/70 font-light line-clamp-2 mt-1">{p.shortDesc}</p>
                    </div>

                    <div className="pt-4 border-t border-[#FFE0E8] flex items-center justify-between">
                      <div>
                        <span className="block font-serif-luxury text-xl font-bold text-[#2D1B22]">
                          R$ {p.price.toFixed(2).replace('.', ',')}
                        </span>
                        <span className="block text-[10px] text-[#C08497] font-semibold">em até 3x sem juros</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setSelectedProduct(p)} 
                          className="p-2.5 rounded-full border border-[#FFE0E8] text-[#2D1B22] hover:bg-[#FAF7F2] hover:text-[#A35843] transition"
                          title="Ver Detalhes"
                        >
                          <i data-lucide="info" className="w-4 h-4"></i>
                        </button>
                        <button 
                          onClick={() => addToCart(p)} 
                          className="px-4 py-2.5 rounded-full bg-[#A35843] hover:bg-[#8C4733] text-white text-xs font-semibold uppercase tracking-wider transition flex items-center gap-1.5 shadow-md shadow-[#A35843]/20"
                        >
                          <i data-lucide="plus" className="w-3.5 h-3.5"></i>
                          <span>Sacola</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

        </div>
      </section>

      {/* ===== DIAGNÓSTICO INTERATIVO (QUIZ DE BELEZA EM 30 SEGUNDOS) ===== */}
      <section id="quiz" className="py-24 lg:py-32 bg-[#FAF7F2] border-b border-[#FFE0E8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-[#FFE0E8] p-8 sm:p-12 shadow-xl text-center space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A35843]">Consultoria Digital de Cabine</span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#2D1B22]">
                Descubra o seu <em className="italic font-normal text-[#A35843]">Ritual Perfeito</em>
              </h2>
              <p className="text-xs sm:text-sm text-[#2D1B22]/70">
                Responda em 30 segundos e receba a prescrição exata de ativos para o seu fio.
              </p>
            </div>

            {/* Etapa 1 */}
            {quizStep === 1 && (
              <div className="space-y-4 pt-4">
                <p className="text-sm font-semibold text-[#2D1B22]">1. Qual é o estado atual dos seus cabelos?</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    'Loiro / Com Mechas',
                    'Morena / Castanho',
                    'Alisado / Quimicamente Tratado'
                  ].map(option => (
                    <button
                      key={option}
                      onClick={() => handleQuizSubmit('hairType', option)}
                      className="p-4 rounded-2xl border border-[#FFE0E8] hover:border-[#A35843] hover:bg-[#FAF7F2] text-xs font-bold text-[#2D1B22] transition-all"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Etapa 2 */}
            {quizStep === 2 && (
              <div className="space-y-4 pt-4">
                <p className="text-sm font-semibold text-[#2D1B22]">2. Qual é a sua prioridade máxima de cuidado?</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    'Neutralizar Amarelado',
                    'Reconstrução Pós-Química',
                    'Brilho Espelho & Anti-Frizz'
                  ].map(option => (
                    <button
                      key={option}
                      onClick={() => handleQuizSubmit('goal', option)}
                      className="p-4 rounded-2xl border border-[#FFE0E8] hover:border-[#A35843] hover:bg-[#FAF7F2] text-xs font-bold text-[#2D1B22] transition-all"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Etapa 3 */}
            {quizStep === 3 && (
              <div className="space-y-4 pt-4">
                <p className="text-sm font-semibold text-[#2D1B22]">3. Com que frequência você faz fontes de calor?</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    'Uso diário (Secador/Chapinha)',
                    '1 a 2 vezes por semana',
                    'Raramente ou Nunca'
                  ].map(option => (
                    <button
                      key={option}
                      onClick={() => handleQuizSubmit('routine', option)}
                      className="p-4 rounded-2xl border border-[#FFE0E8] hover:border-[#A35843] hover:bg-[#FAF7F2] text-xs font-bold text-[#2D1B22] transition-all"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Resultado */}
            {quizStep === 4 && quizResult && (
              <div className="space-y-6 pt-4 text-left bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#FFE0E8]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/10 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                  <i data-lucide="check" className="w-3.5 h-3.5"></i> Diagnóstico Concluído
                </div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#2D1B22]">{quizResult.title}</h3>
                <p className="text-sm text-[#2D1B22]/80 leading-relaxed font-light">{quizResult.description}</p>
                
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={`https://wa.me/5538998604447?text=Ol%C3%A1%20Carla%20Barbosa!%20Fiz%20o%20diagn%C3%B3stico%20no%20site:%20${encodeURIComponent(quizResult.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#A35843] hover:bg-[#8C4733] text-white text-xs font-bold uppercase tracking-widest text-center shadow-md shadow-[#A35843]/20"
                  >
                    Prescrever com Carla no WhatsApp
                  </a>
                  <button
                    onClick={() => { setQuizStep(1); setQuizResult(null); }}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#FFE0E8] bg-white text-xs font-semibold uppercase text-[#2D1B22] hover:bg-[#FAF7F2]"
                  >
                    Refazer Teste
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ===== LOCALIZAÇÃO & HORÁRIO DE ATENDIMENTO FACTUAL ===== */}
      <section id="localizacao" className="py-24 lg:py-32 bg-white border-b border-[#FFE0E8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A35843]">Espaço Físico & Cabine</span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#2D1B22] font-bold">
              Visite o Estúdio em <em className="italic font-normal text-[#A35843]">Montes Claros</em>
            </h2>
            <p className="text-sm text-[#2D1B22]/70 leading-relaxed">
              Ambiente climatizado, biossegurança rigorosa e atendimento com hora marcada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            
            {/* Endereço */}
            <div className="card-luxury rounded-2xl p-6 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#FFE0E8] flex items-center justify-center mx-auto text-[#A35843] mb-2">
                <i data-lucide="map-pin" className="w-5 h-5"></i>
              </div>
              <span className="font-bold text-[#2D1B22] text-sm block">Endereço Cadastral</span>
              <p className="text-xs text-[#2D1B22]/70 leading-relaxed">
                Rua Deputado Antônio Pimenta, nº 72<br />
                Bairro Jardim São Luiz<br />
                Montes Claros - MG • CEP 39401-054
              </p>
              <a 
                href="https://maps.google.com/?q=Rua+Deputado+Antonio+Pimenta+72+Montes+Claros+MG" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#A35843] font-bold hover:underline pt-2"
              >
                Abrir Rota no GPS →
              </a>
            </div>

            {/* Horário */}
            <div className="card-luxury rounded-2xl p-6 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#FFE0E8] flex items-center justify-center mx-auto text-[#A35843] mb-2">
                <i data-lucide="clock" className="w-5 h-5"></i>
              </div>
              <span className="font-bold text-[#2D1B22] text-sm block">Horário de Cabine</span>
              <p className="text-xs text-[#2D1B22]/70 leading-relaxed">
                <strong>Terça a sábado:</strong> 09h às 18h30<br />
                <strong>Domingo e Segunda:</strong> Fechado<br />
                Atendimento com hora marcada
              </p>
            </div>

            {/* Contato Oficial */}
            <div className="card-luxury rounded-2xl p-6 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#FFE0E8] flex items-center justify-center mx-auto text-[#A35843] mb-2">
                <i data-lucide="phone-call" className="w-5 h-5"></i>
              </div>
              <span className="font-bold text-[#2D1B22] text-sm block">WhatsApp & Contato</span>
              <p className="text-xs text-[#2D1B22]/70 leading-relaxed">
                Telefone: (38) 99860-4447<br />
                CNPJ: 57.423.968/0001-48<br />
                Barbosa Serviços de Beleza Ltda
              </p>
              <a 
                href="https://wa.me/5538998604447" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#A35843] font-bold hover:underline pt-2"
              >
                Conversar no WhatsApp →
              </a>
            </div>

          </div>

          {/* Banner de Ação Oficial */}
          <div className="rounded-3xl bg-[#FAF7F2] border border-[#FFE0E8] p-8 sm:p-12 text-center space-y-4 shadow-lg">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2D1B22]">
              Deseja agendar a sua transformação?
            </h3>
            <p className="text-sm text-[#2D1B22]/75 max-w-lg mx-auto font-light">
              Fale diretamente no nosso canal de agendamento oficial para reservar seu horário de cabine ou tirar dúvidas sobre os cosméticos.
            </p>
            <MagneticButton>
              <a
                href="https://wa.me/5538998604447?text=Ol%C3%A1%20Carla%20Barbosa%20Est%C3%BAdio!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio."
                target="_blank"
                rel="noopener noreferrer"
                className="shine-sweep-btn inline-flex items-center gap-2 px-9 py-4 bg-[#A35843] hover:bg-[#8C4733] text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-xl shadow-[#A35843]/20"
              >
                <i data-lucide="message-circle" className="w-4 h-4"></i>
                <span>Iniciar Conversa no WhatsApp</span>
              </a>
            </MagneticButton>
          </div>

        </div>
      </section>

      {/* ===== RODAPÉ / FOOTER EDITORIAL COM DADOS CADASTRAIS ===== */}
      <footer className="bg-white text-[#2D1B22] py-16 border-t border-[#FFE0E8]">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#FFE0E8] text-center md:text-left">
            <div>
              <span className="font-serif-luxury text-2xl tracking-widest font-bold uppercase text-[#2D1B22] block">
                CARLA BARBOSA
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#A35843] font-bold block mt-0.5">
                Estúdio de Beleza • Montes Claros - MG
              </span>
              <p className="text-[11px] text-[#2D1B22]/60 mt-2">
                Barbosa Serviços de Beleza Ltda • CNPJ: 57.423.968/0001-48
              </p>
              <p className="text-[11px] text-[#2D1B22]/60">
                Rua Deputado Antônio Pimenta, 72 - Bairro Jardim São Luiz • CEP 39401-054
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider font-semibold text-[#2D1B22]/80">
              <a href="#manifesto" className="hover:text-[#A35843] transition">Manifesto</a>
              <a href="#servicos" className="hover:text-[#A35843] transition">Serviços</a>
              <a href="#galeria" className="hover:text-[#A35843] transition">Galeria Real</a>
              <a href="#reels" className="hover:text-[#A35843] transition">Reels</a>
              <a href="#catalogo" className="hover:text-[#A35843] transition">Cosméticos</a>
              <a href="#quiz" className="hover:text-[#A35843] transition">Diagnóstico</a>
              <a 
                href="https://instagram.com/carlabarbosa.estudio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#A35843] font-bold flex items-center gap-1.5"
              >
                <i data-lucide="instagram" className="w-3.5 h-3.5 text-[#FF8FAB]"></i> @carlabarbosa.estudio (25k)
              </a>
            </div>
          </div>

          {/* Selos de Segurança Bancária, LGPD e PWA */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-6 border-b border-[#FFE0E8] text-[11px] text-[#2D1B22]/70">
            <span className="inline-flex items-center gap-1.5"><i data-lucide="shield-check" className="w-4 h-4 text-emerald-600"></i> Criptografia SSL 256-Bit</span>
            <span className="text-[#FFE0E8]">•</span>
            <span className="inline-flex items-center gap-1.5"><i data-lucide="lock" className="w-4 h-4 text-[#A35843]"></i> Privacidade & LGPD Blindada</span>
            <span className="text-[#FFE0E8]">•</span>
            <span className="inline-flex items-center gap-1.5"><i data-lucide="smartphone" className="w-4 h-4 text-[#FF8FAB]"></i> PWA Instalável</span>
            <span className="text-[#FFE0E8]">•</span>
            <span className="inline-flex items-center gap-1.5"><i data-lucide="map-pin" className="w-4 h-4 text-[#A35843]"></i> Jardim São Luiz, Montes Claros - MG</span>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#2D1B22]/60 gap-4">
            <p>© 2026 Carla Barbosa Estúdio de Beleza — Barbosa Serviços de Beleza Ltda. CNPJ: 57.423.968/0001-48.</p>
            <p>Montes Claros - MG • Todos os direitos reservados • Padrão Ouro</p>
          </div>

        </div>
      </footer>

      {/* ===== DRAWER CART (SACOLA LATERAL DE COMPRAS) ===== */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            onClick={() => setIsCartOpen(false)} 
            className="fixed inset-0 bg-[#2D1B22]/50 backdrop-blur-sm transition-opacity"
          ></div>
          
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between z-10 p-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#FFE0E8]">
              <div className="flex items-center gap-2">
                <i data-lucide="shopping-bag" className="w-5 h-5 text-[#A35843]"></i>
                <h3 className="font-serif-luxury text-xl font-bold text-[#2D1B22]">Sua Sacola ({cartCount})</h3>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 text-[#2D1B22]/60 hover:text-[#2D1B22]"
              >
                <i data-lucide="x" className="w-5 h-5"></i>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-12 text-[#2D1B22]/60 space-y-3">
                  <i data-lucide="shopping-bag" className="w-10 h-10 mx-auto text-[#FFE0E8]"></i>
                  <p className="text-sm font-semibold">Sua sacola está vazia.</p>
                  <p className="text-xs">Explore os cosméticos de cabine e adicione os rituais desejados.</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex items-center gap-3 p-3 rounded-2xl bg-[#FAF7F2] border border-[#FFE0E8]">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                    <div className="flex-1">
                      <h4 className="font-serif-luxury text-sm font-bold text-[#2D1B22] line-clamp-1">{item.name}</h4>
                      <span className="text-xs font-bold text-[#A35843]">R$ {item.price.toFixed(2).replace('.', ',')}</span>
                      <div className="flex items-center gap-3 mt-2">
                        <button 
                          onClick={() => updateCartQty(item.id, -1)} 
                          className="w-6 h-6 rounded-full bg-white border border-[#FFE0E8] text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold">{item.qty}</span>
                        <button 
                          onClick={() => updateCartQty(item.id, 1)} 
                          className="w-6 h-6 rounded-full bg-white border border-[#FFE0E8] text-xs font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-4 border-t border-[#FFE0E8] space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#2D1B22]/70">Subtotal:</span>
                  <span className="font-serif-luxury text-xl font-bold text-[#2D1B22]">
                    R$ {cartTotal.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <div className="text-[11px] text-emerald-700 bg-emerald-50 p-2 rounded-xl border border-emerald-200">
                  ✨ Desconto de 5% aplicado para pagamentos no PIX!
                </div>
                <a
                  href={`https://wa.me/5538998604447?text=${encodeURIComponent(
                    `Olá Carla Barbosa! Gostaria de finalizar meu pedido da sacola:\n\n${cart.map(i => `• ${i.name} (x${i.qty}) - R$ ${(i.price * i.qty).toFixed(2)}`).join('\n')}\n\nTotal: R$ ${cartTotal.toFixed(2)}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shine-sweep-btn w-full block text-center py-4 rounded-full bg-[#A35843] hover:bg-[#8C4733] text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#A35843]/20"
                >
                  Finalizar Pedido no WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===== MODAL DE VISUALIZAÇÃO RÁPIDA (QUICK VIEW) ===== */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setSelectedProduct(null)} 
            className="fixed inset-0 bg-[#2D1B22]/60 backdrop-blur-sm"
          ></div>
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border border-[#FFE0E8] max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedProduct(null)} 
              className="absolute top-4 right-4 p-2 text-[#2D1B22]/60 hover:text-[#2D1B22]"
            >
              <i data-lucide="x" className="w-5 h-5"></i>
            </button>
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="rounded-2xl aspect-square object-cover w-full shadow-md" />
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#FFE0E8] text-[10px] font-bold uppercase tracking-wider text-[#A35843]">
                  {selectedProduct.badge}
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#2D1B22]">{selectedProduct.name}</h3>
                <p className="text-xs text-[#2D1B22]/75 leading-relaxed font-light">{selectedProduct.fullDesc}</p>
                <div className="pt-2">
                  <span className="font-serif-luxury text-2xl font-bold text-[#2D1B22]">
                    R$ {selectedProduct.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}
                    className="flex-1 py-3.5 rounded-full bg-[#A35843] hover:bg-[#8C4733] text-white text-xs font-bold uppercase tracking-widest shadow-md"
                  >
                    Adicionar à Sacola
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== PAINEL ADMINISTRATIVO BLINDADO ===== */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setIsAdminOpen(false)} 
            className="fixed inset-0 bg-[#2D1B22]/70 backdrop-blur-md"
          ></div>
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border border-[#FFE0E8]">
            <div className="flex items-center justify-between pb-4 border-b border-[#FFE0E8]">
              <div className="flex items-center gap-2">
                <i data-lucide="shield-check" className="w-5 h-5 text-[#A35843]"></i>
                <h3 className="font-serif-luxury text-xl font-bold text-[#2D1B22]">Painel de Controle Blindado</h3>
              </div>
              <button onClick={() => setIsAdminOpen(false)} className="text-[#2D1B22]/60 hover:text-[#2D1B22]">
                <i data-lucide="x" className="w-5 h-5"></i>
              </button>
            </div>

            {!adminAuth ? (
              <div className="py-6 space-y-4">
                <p className="text-xs text-[#2D1B22]/70">Digite a senha de administrador do estúdio para gerenciar mídias e produtos.</p>
                <input 
                  type="password" 
                  value={adminPass} 
                  onChange={(e) => setAdminPass(e.target.value)} 
                  placeholder="Senha administrativa..." 
                  className="w-full px-4 py-3 rounded-xl border border-[#FFE0E8] text-sm focus:outline-none focus:border-[#A35843]" 
                />
                <button 
                  onClick={() => {
                    if (adminPass === 'carla2026' || adminPass === 'admin') {
                      setAdminAuth(true);
                      showToast('Acesso administrativo concedido!');
                    } else {
                      showToast('Senha incorreta.');
                    }
                  }} 
                  className="w-full py-3 rounded-full bg-[#A35843] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Acessar Painel
                </button>
              </div>
            ) : (
              <div className="py-6 space-y-4">
                <div className="flex items-center gap-2 border-b border-[#FFE0E8] pb-3">
                  <button 
                    onClick={() => setAdminTab('media')} 
                    className={`px-4 py-1.5 rounded-full text-xs font-bold ${adminTab === 'media' ? 'bg-[#A35843] text-white' : 'text-[#2D1B22]'}`}
                  >
                    Mídias do Site
                  </button>
                  <button 
                    onClick={() => setAdminTab('products')} 
                    className={`px-4 py-1.5 rounded-full text-xs font-bold ${adminTab === 'products' ? 'bg-[#A35843] text-white' : 'text-[#2D1B22]'}`}
                  >
                    Produtos
                  </button>
                  <button 
                    onClick={() => setAdminAuth(false)} 
                    className="ml-auto text-xs text-red-600 font-bold"
                  >
                    Sair
                  </button>
                </div>

                <div className="text-xs text-[#2D1B22]/70 leading-relaxed">
                  {adminTab === 'media' ? (
                    <div className="space-y-3">
                      <p className="font-semibold text-[#2D1B22]">Gerenciamento de Vídeos e Fotos do Instagram:</p>
                      <p>Os 5 posts reais e os 3 reels reais estão vinculados diretamente ao perfil oficial <strong>@carlabarbosa.estudio</strong>.</p>
                      <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#FFE0E8] text-[11px]">
                        Links ativos: /p/DYhtFGvll6G, /p/DeVYFbdqN5M, /p/DeO7l3yKWUD, /p/DTnvKPMDiz3, /p/DeSYxzNKl2f
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="font-semibold text-[#2D1B22]">Catálogo Ativo ({products.length} itens):</p>
                      <p>Todos os produtos possuem valores, parcelamento em 3x e integração instantânea com o WhatsApp oficial <strong>(38) 99860-4447</strong>.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

// ============================================================
// COMPONENTE: CUSTOM CURSOR COM LERP E TRAILING EFFECT
// Bolinha #FF8FAB + anel suave com trailing lerp (Desktop Only)
// ============================================================
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Apenas em desktops que suportam hover
    if (window.matchMedia('(hover: none)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isHovering = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const onMouseDown = () => {
      if (ringRef.current) ringRef.current.classList.add('active');
    };

    const onMouseUp = () => {
      if (ringRef.current) ringRef.current.classList.remove('active');
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    let animationFrame;
    const renderLoop = () => {
      // Suavização lerp de 0.15 para o anel
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      animationFrame = requestAnimationFrame(renderLoop);
    };
    renderLoop();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block"></div>
      <div ref={ringRef} className="cursor-ring hidden md:block"></div>
    </>
  );
}

// ============================================================
// COMPONENTE: MAGNETIC BUTTON COM RAIO DE ATRAÇÃO DE 100PX
// ============================================================
function MagneticButton({ children }) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    if (distance < 100) {
      // Atração suave magnética
      const moveX = distX * 0.28;
      const moveY = distY * 0.28;
      el.style.transform = `translate(${moveX}px, ${moveY}px)`;
    } else {
      el.style.transform = 'translate(0px, 0px)';
    }
  };

  const handleMouseLeave = () => {
    if (btnRef.current) {
      btnRef.current.style.transform = 'translate(0px, 0px)';
    }
  };

  return (
    <div 
      ref={btnRef} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave} 
      className="inline-block transition-transform duration-200 ease-out will-change-transform"
    >
      {children}
    </div>
  );
}
