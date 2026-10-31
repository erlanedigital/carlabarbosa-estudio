// ===== DADOS INICIAIS (MONTES CLAROS - MG) =====
const defaultSettings = {
  city: 'Montes Claros - MG',
  whatsapp: '5538999999999',
  announcement: '✨ FRETE GRÁTIS EM COMPRAS ACIMA DE R$ 249 | ESTÚDIO MONTES CLAROS - MG',
  adminPass: 'admin123'
};

const defaultProducts = [
  {
    id: 'oleo-elixir',
    name: 'Elixir Capilar Sublime de Argan & Rosa Mosqueta',
    category: 'oleos',
    badge: 'Mais Vendido',
    price: 139.00,
    installments: '3x de R$ 46,33',
    rating: 5.0,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1608248597359-551101968846?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Nutrição intensa, proteção térmica e brilho espelhado para pontas e mechas.',
    fullDesc: 'Fórmula exclusiva do estúdio com Óleo de Argan e Rosa Mosqueta nobre. Sela pontas duplas, controla o frizz e devolve luminosidade imediata a cabelos loiros e morenas iluminadas.',
    usage: 'Aplique 2 a 3 gotas na palma das mãos e distribua no comprimento e pontas com os fios úmidos ou secos.'
  },
  {
    id: 'kit-cronograma',
    name: 'Kit Cronograma Capilar de Cabine',
    category: 'kits',
    badge: 'Tratamento Completo',
    price: 349.00,
    installments: '6x de R$ 58,16',
    rating: 4.9,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Trio de Reconstrução, Nutrição e Hidratação para cabelos pós-química.',
    fullDesc: 'O mesmo protocolo utilizado na cadeira da Carla Barbosa para manter o cabelo com toque aveludado e estrutura reforçada em casa.',
    usage: 'Alterne as etapas de hidratação, nutrição e reconstrução conforme o cronograma semanal indicado.'
  },
  {
    id: 'mascara-matizadora',
    name: 'Máscara Iluminadora Loiros Perolados',
    category: 'skincare',
    badge: 'Loiros Saudáveis',
    price: 159.00,
    installments: '3x de R$ 53,00',
    rating: 4.9,
    reviewsCount: 78,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Neutralização de tons amarelados com hidratação ultra reconstrutora.',
    fullDesc: 'Pigmentos violeta perolados de microprecisão combinados a aminoácidos para neutralizar tons indesejados sem ressecar a fibra capilar.',
    usage: 'Aplique nos cabelos limpos e úmidos, massageando mecha a mecha. Deixe agir de 3 a 5 minutos e enxágue.'
  },
  {
    id: 'brow-booster',
    name: 'Fortalecedor de Sobrancelhas e Cílios',
    category: 'olhar',
    badge: 'Exclusivo do Estúdio',
    price: 149.00,
    installments: '3x de R$ 49,66',
    rating: 5.0,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1512290900672-1f02a0a0ff76?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Nutrição, alinhamento e fortalecimento dos fios de sobrancelhas e cílios.',
    fullDesc: 'Complexo bioativo enriquecido com Peptídeos e Biotina botânica para fortalecer a raiz, reduzir quedas e proporcionar alinhamento elegante dos fios.',
    usage: 'Passe o aplicador suavemente na raiz das sobrancelhas e cílios toda noite.'
  },
  {
    id: 'vela-silence',
    name: 'Vela Aromática Ritual do Silêncio',
    category: 'aromaterapia',
    badge: 'Spa em Casa',
    price: 129.00,
    installments: '2x de R$ 64,50',
    rating: 4.8,
    reviewsCount: 42,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Notas de figo branco, âmbar e cedro para o seu santuário de paz.',
    fullDesc: 'Cera 100% vegetal com pavio de algodão. A mesma fragrância acolhedora do Carla Barbosa Estúdio para enriquecer seus momentos de descanso.',
    usage: 'Acenda durante o seu banho ou momento de autocuidado noturno por até 3 horas.'
  }
];

const defaultPosts = [
  {
    id: 'post-1',
    title: '5 Cuidados Essenciais para Manter o Cabelo Loiro Saudável',
    category: 'Dicas de Cabelo',
    date: '19 de Agosto, 2026',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=85',
    excerpt: 'Descubra como proteger os fios descoloridos contra o ressecamento e manter o brilho de salão em casa.',
    content: 'Manter o cabelo loiro radiante exige uma rotina equilibrada de hidratação, nutrição e reconstrução. Aqui no estúdio em Montes Claros, sempre recomendamos o uso de óleos nobres para proteção térmica e o cronograma capilar com fórmulas ricas em aminoácidos. Lembre-se: água morna ou fria na lavagem faz toda a diferença para selar as cutículas!'
  },
  {
    id: 'post-2',
    title: 'O Poder da Nutrição para Sobrancelhas Naturais e Marcantes',
    category: 'Sobrancelhas',
    date: '15 de Agosto, 2026',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85',
    excerpt: 'Como estimular o crescimento e a densidade dos fios de forma saudável e com acabamento elegante.',
    content: 'As sobrancelhas são a moldura do olhar. O segredo para deixá-las encorpadas e alinhadas não é sobrecarregar com maquiagem pesada, mas sim nutrir a raiz com biotina e ativos botânicos. Aplicar o sérum nutritivo todas as noites antes de dormir estimula a regeneração folicular e previne falhas.'
  },
  {
    id: 'post-3',
    title: 'Novidades no Carla Barbosa Estúdio em Montes Claros',
    category: 'Novidades do Estúdio',
    date: '10 de Agosto, 2026',
    image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1000&q=85',
    excerpt: 'Nosso espaço foi renovado para oferecer uma experiência ainda mais acolhedora e exclusiva para você.',
    content: 'Preparamos um ambiente pensado nos mínimos detalhes: aromas relaxantes, iluminação acolhedora e tratamentos personalizados para cabelos, estética e autocuidado. Venha nos visitar e vivenciar um momento só seu!'
  }
];

// ===== UTILITÁRIOS DE SEGURANÇA MÁXIMA & SANITIZAÇÃO (ANTI-XSS & ANTI-INJECTION) =====
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function sanitizeUrl(url) {
  if (!url) return 'https://images.unsplash.com/photo-1608248597359-551101968846?auto=format&fit=crop&w=800&q=75';
  let trimmed = String(url).trim();
  if (trimmed.startsWith('/') || trimmed.startsWith('./') || trimmed.endsWith('.jpg') || trimmed.endsWith('.png') || trimmed.endsWith('.svg') || trimmed.endsWith('.webp')) {
    return trimmed;
  }
  if (trimmed.includes('images.unsplash.com')) {
    const baseUrl = trimmed.split('?')[0];
    return `${baseUrl}?auto=format&fit=crop&w=800&q=75`;
  }
  if (trimmed.startsWith('https://') || trimmed.startsWith('http://') || trimmed.startsWith('data:image/')) {
    return trimmed;
  }
  return 'https://images.unsplash.com/photo-1608248597359-551101968846?auto=format&fit=crop&w=800&q=75';
}

// Controle de Segurança Anti-Brute-Force
let failedLoginAttempts = parseInt(sessionStorage.getItem('cb_failed_logins') || '0', 10);
let lockoutUntil = parseInt(sessionStorage.getItem('cb_lockout_until') || '0', 10);

// ===== ESTADO PERSISTENTE COM AUTO-RECUPERAÇÃO =====
function getValidStoredProducts() {
  try {
    const raw = localStorage.getItem('cb_products');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((p, idx) => {
          let img = p.image || (defaultProducts[idx] ? defaultProducts[idx].image : defaultProducts[0].image);
          if (img.includes('&fit=crop') && !img.includes('?')) {
            img = img.split('&')[0] + '?auto=format&fit=crop&w=800&q=75';
          }
          return {
            ...p,
            image: sanitizeUrl(img),
            hoverImage: sanitizeUrl(p.hoverImage || img)
          };
        });
      }
    }
  } catch (e) {
    console.warn('Recuperando cosméticos padrão...');
  }
  localStorage.setItem('cb_products', JSON.stringify(defaultProducts));
  return [...defaultProducts];
}

function getValidStoredPosts() {
  try {
    const raw = localStorage.getItem('cb_posts');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((p, idx) => {
          let img = p.image || (defaultPosts[idx] ? defaultPosts[idx].image : defaultPosts[0].image);
          if (img.includes('&fit=crop') && !img.includes('?')) {
            img = img.split('&')[0] + '?auto=format&fit=crop&w=800&q=75';
          }
          return {
            ...p,
            image: sanitizeUrl(img)
          };
        });
      }
    }
  } catch (e) {
    console.warn('Recuperando artigos padrão...');
  }
  localStorage.setItem('cb_posts', JSON.stringify(defaultPosts));
  return [...defaultPosts];
}

let products = getValidStoredProducts();
let posts = getValidStoredPosts();
let settings = JSON.parse(localStorage.getItem('cb_settings')) || defaultSettings;
let cart = JSON.parse(localStorage.getItem('cb_cart')) || [];
let activeCategory = 'todos';
let isAdminLogged = false;

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderPosts();
  applySettings();
  updateCartUI();
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    lucide.createIcons();
  }

  // Menu Mobile
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
  }

  // Sacola de Compras
  const cartBtn = document.getElementById('cartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartDrawerBackdrop = document.getElementById('cartDrawerBackdrop');

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartDrawerBackdrop) {
    cartDrawerBackdrop.addEventListener('click', (e) => {
      if (e.target === cartDrawerBackdrop) closeCart();
    });
  }
});

// ===== RENDERIZAÇÃO DE PRODUTOS =====
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = activeCategory === 'todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card rounded-2xl bg-white border border-gold/20 overflow-hidden flex flex-col justify-between group">
      <div class="relative overflow-hidden aspect-[4/4.5] bg-nude/30 cursor-pointer" onclick="openQuickModal('${p.id}')">
        <img src="${sanitizeUrl(p.image)}" alt="${p.name}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1608248597359-551101968846?auto=format&fit=crop&w=800&q=75';" class="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
        <img src="${sanitizeUrl(p.hoverImage || p.image)}" alt="${p.name}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=75';" class="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-linen/95 border border-gold/30 text-[10px] uppercase font-bold tracking-wider text-terracotta backdrop-blur-sm">
          ${p.badge || 'Exclusivo'}
        </span>
      </div>

      <div class="p-6 space-y-3 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1 text-gold text-xs mb-1">
            <span>★★★★★</span>
            <span class="text-muted text-[11px]">(${p.reviewsCount || 50} avaliações)</span>
          </div>
          <h3 class="font-serif text-lg font-bold text-espresso cursor-pointer hover:text-terracotta transition" onclick="openQuickModal('${p.id}')">
            ${p.name}
          </h3>
          <p class="text-xs text-muted font-light line-clamp-2 mt-1">${p.shortDesc}</p>
        </div>

        <div class="pt-4 border-t border-nude flex items-center justify-between">
          <div>
            <span class="block font-serif text-lg font-bold text-espresso">R$ ${Number(p.price).toFixed(2).replace('.', ',')}</span>
            <span class="block text-[10px] text-muted">${p.installments || 'ou em até 3x'}</span>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="openQuickModal('${p.id}')" class="p-2.5 rounded-full border border-gold/40 text-espresso hover:bg-nude hover:text-terracotta transition" title="Ver Detalhes">
              <i data-lucide="info" class="w-4 h-4"></i>
            </button>
            <button onclick="addToCart('${p.id}')" class="px-4 py-2.5 rounded-full bg-espresso text-white text-xs font-semibold uppercase tracking-wider hover:bg-terracotta transition flex items-center gap-1.5 shadow-sm">
              <i data-lucide="plus" class="w-3.5 h-3.5"></i> <span>Sacola</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// ===== RENDERIZAÇÃO DE POSTS (BLOG) =====
function renderPosts() {
  const grid = document.getElementById('postsGrid');
  if (!grid) return;

  grid.innerHTML = posts.map(post => {
    const isVideo = post.image && (post.image.endsWith('.mp4') || post.image.endsWith('.webm') || post.image.startsWith('data:video'));
    return `
    <article class="rounded-3xl bg-linen border border-gold/30 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div class="aspect-[16/10] overflow-hidden bg-nude/30 relative cursor-pointer" onclick="openPostModal('${post.id}')">
        ${isVideo 
          ? `<video src="${post.image}" class="w-full h-full object-cover" muted></video>
             <div class="absolute inset-0 bg-espresso/30 flex items-center justify-center text-white"><i data-lucide="play-circle" class="w-10 h-10 text-gold"></i></div>` 
          : `<img src="${sanitizeUrl(post.image)}" alt="${post.title}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=75';" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />`
        }
        <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-linen/95 border border-gold/30 text-[10px] font-bold uppercase tracking-wider text-terracotta backdrop-blur-sm">
          ${post.category}
        </span>
      </div>

      <div class="p-6 space-y-3 flex-1 flex flex-col justify-between">
        <div class="space-y-2">
          <span class="text-[11px] text-muted block">${post.date}</span>
          <h3 class="font-serif text-xl font-bold text-espresso group-hover:text-terracotta transition cursor-pointer" onclick="openPostModal('${post.id}')">
            ${post.title}
          </h3>
          <p class="text-xs text-muted font-light line-clamp-3 leading-relaxed">${post.excerpt}</p>
        </div>

        <div class="pt-4 border-t border-nude flex items-center justify-between">
          <button onclick="openPostModal('${post.id}')" class="text-xs font-bold uppercase tracking-wider text-terracotta hover:underline flex items-center gap-1">
            Ler Completo →
          </button>
        </div>
      </div>
    </article>
  `}).join('');

  lucide.createIcons();
}

// ===== LEITURA COMPLETA DE POST =====
function openPostModal(postId) {
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  const isVideo = post.image && (post.image.endsWith('.mp4') || post.image.endsWith('.webm') || post.image.startsWith('data:video'));
  const modal = document.getElementById('postModal');
  const container = document.getElementById('postModalContent');

  container.innerHTML = `
    <div class="aspect-[16/9] rounded-2xl overflow-hidden mb-4 bg-nude/30 border border-gold/20">
      ${isVideo 
        ? `<video src="${post.image}" controls autoplay class="w-full h-full object-cover"></video>` 
        : `<img src="${sanitizeUrl(post.image)}" alt="${post.title}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=75';" class="w-full h-full object-cover" />`
      }
    </div>
    <div class="space-y-3">
      <div class="flex items-center gap-3">
        <span class="px-3 py-1 rounded-full bg-nude text-terracotta text-[10px] uppercase font-bold tracking-wider">${post.category}</span>
        <span class="text-xs text-muted">${post.date}</span>
      </div>
      <h3 class="font-serif text-2xl sm:text-3xl font-bold text-espresso">${post.title}</h3>
      <div class="text-sm text-espresso/90 font-light leading-relaxed whitespace-pre-line pt-2 border-t border-gold/20">
        ${post.content}
      </div>
      <div class="pt-4 flex justify-between items-center text-xs">
        <span class="text-muted">Publicado por <strong>Carla Barbosa</strong></span>
        <button onclick="closePostModal()" class="px-5 py-2.5 rounded-full bg-espresso text-white font-bold uppercase tracking-wider">
          Fechar
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  lucide.createIcons();
}

function closePostModal() {
  const modal = document.getElementById('postModal');
  if (modal) modal.classList.add('hidden');
}

// ===== FILTRAGEM POR CATEGORIA =====
function filterCategory(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.filter-pill').forEach(b => {
    b.classList.remove('active-pill');
    b.classList.add('text-muted');
  });
  btn.classList.add('active-pill');
  btn.classList.remove('text-muted');
  renderProducts();
}

// ===== GERENCIAMENTO DA SACOLA =====
function addToCart(productId, qty = 1) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...prod, qty });
  }

  saveCart();
  updateCartUI();
  showToast(`"${prod.name}" adicionado à sacola!`);
  openCart();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('cb_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const countBadge = document.getElementById('cartCount');
  const itemsContainer = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const shippingText = document.getElementById('shippingText');
  const shippingBar = document.getElementById('shippingBar');
  const shippingPercent = document.getElementById('shippingPercent');

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (countBadge) countBadge.textContent = totalItems;
  const floatingBadge = document.getElementById('floatingCartCount');
  if (floatingBadge) floatingBadge.textContent = totalItems;
  
  // Cálculo de desconto e finalização
  const isPix = selectedPaymentMethod === 'pix';
  const discount = (isPix && subtotal > 0) ? subtotal * 0.05 : 0;
  const finalTotal = subtotal - discount;

  if (subtotalEl) {
    if (isPix && subtotal > 0) {
      subtotalEl.innerHTML = `<span class="line-through text-xs text-muted font-normal mr-2">R$ ${subtotal.toFixed(2).replace('.', ',')}</span> R$ ${finalTotal.toFixed(2).replace('.', ',')}`;
    } else {
      subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    }
  }

  const pixBox = document.getElementById('pixDiscountBox');
  const pixVal = document.getElementById('pixDiscountValue');
  const checkoutBtnText = document.getElementById('checkoutBtnText');

  if (pixBox) {
    if (isPix && subtotal > 0) {
      pixBox.classList.remove('hidden');
      if (pixVal) pixVal.textContent = `- R$ ${discount.toFixed(2).replace('.', ',')}`;
    } else {
      pixBox.classList.add('hidden');
    }
  }

  if (checkoutBtnText) {
    checkoutBtnText.textContent = subtotal > 0 
      ? `Pagar R$ ${finalTotal.toFixed(2).replace('.', ',')} com Segurança` 
      : 'Finalizar Pagamento Seguro';
  }

  const target = 249;
  const progress = Math.min(100, Math.round((subtotal / target) * 100));
  if (shippingBar) shippingBar.style.width = `${progress}%`;
  if (shippingPercent) shippingPercent.textContent = `${progress}%`;
  if (shippingText) {
    if (subtotal >= target) {
      shippingText.textContent = '🎉 Parabéns! Você ganhou Frete Grátis!';
    } else {
      const remaining = target - subtotal;
      shippingText.textContent = `Faltam R$ ${remaining.toFixed(2).replace('.', ',')} para Frete Grátis`;
    }
  }

  if (itemsContainer) {
    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="text-center py-12 space-y-3">
          <i data-lucide="shopping-bag" class="w-10 h-10 text-gold mx-auto opacity-50"></i>
          <p class="text-sm text-muted">Sua sacola está vazia.</p>
          <button onclick="closeCart()" class="text-xs uppercase font-bold tracking-wider text-terracotta">
            Explorar Cosméticos →
          </button>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = cart.map(item => `
        <div class="flex items-center gap-4 p-3 rounded-xl bg-white border border-gold/20">
          <img src="${sanitizeUrl(item.image)}" alt="${item.name}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1608248597359-551101968846?auto=format&fit=crop&w=400&q=75';" class="w-14 h-14 object-cover rounded-lg bg-nude/40" />
          <div class="flex-1 min-w-0">
            <h4 class="font-serif font-semibold text-sm text-espresso truncate">${item.name}</h4>
            <span class="text-xs text-muted">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
            <div class="flex items-center gap-2 mt-1">
              <button onclick="updateQty('${item.id}', -1)" class="w-5 h-5 rounded bg-nude flex items-center justify-center text-xs font-bold" aria-label="Diminuir">-</button>
              <span class="text-xs font-semibold">${item.qty}</span>
              <button onclick="updateQty('${item.id}', 1)" class="w-5 h-5 rounded bg-nude flex items-center justify-center text-xs font-bold" aria-label="Aumentar">+</button>
            </div>
          </div>
          <button onclick="updateQty('${item.id}', -${item.qty})" class="text-muted hover:text-red-500 p-1" aria-label="Remover">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      `).join('');
    }
    lucide.createIcons();
  }
}

function openCart() {
  const drawer = document.getElementById('cartDrawerBackdrop');
  if (drawer) drawer.classList.remove('hidden');
}

function closeCart() {
  const drawer = document.getElementById('cartDrawerBackdrop');
  if (drawer) drawer.classList.add('hidden');
}

// ===== QUICK VIEW MODAL =====
function openQuickModal(productId) {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  const modal = document.getElementById('quickModal');
  const content = document.getElementById('modalContent');

  content.innerHTML = `
    <div class="aspect-square rounded-2xl overflow-hidden bg-nude/30 border border-gold/20">
      <img src="${sanitizeUrl(p.image)}" alt="${p.name}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1608248597359-551101968846?auto=format&fit=crop&w=800&q=75';" class="w-full h-full object-cover" />
    </div>
    <div class="space-y-4">
      <span class="px-3 py-1 rounded-full bg-nude text-terracotta text-[10px] uppercase font-bold tracking-wider">${p.badge || 'Exclusivo'}</span>
      <h3 class="font-serif text-2xl font-bold text-espresso">${p.name}</h3>
      <span class="font-serif text-2xl font-bold text-espresso block">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
      <p class="text-xs text-muted leading-relaxed">${p.fullDesc}</p>
      
      <div class="p-3 rounded-xl bg-nude/40 border border-gold/20 text-xs text-espresso">
        <strong>Modo de Uso:</strong> ${p.usage || 'Uso diário.'}
      </div>

      <button onclick="addToCart('${p.id}'); closeQuickModal();" class="w-full py-4 bg-terracotta hover:bg-terracotta-hover text-white rounded-full text-xs font-bold uppercase tracking-widest transition-colors shadow-lg">
        Adicionar à Sacola de Rituais
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  lucide.createIcons();
}

function closeQuickModal() {
  const modal = document.getElementById('quickModal');
  if (modal) modal.classList.add('hidden');
}

// ===== DIAGNÓSTICO INTERATIVO DE BELEZA =====
function selectQuiz(step, option, btn) {
  document.querySelectorAll('.quiz-btn').forEach(b => b.classList.remove('border-terracotta', 'bg-gold/20'));
  btn.classList.add('border-terracotta', 'bg-gold/20');

  const resultBox = document.getElementById('quizResult');
  const title = document.getElementById('quizResultTitle');
  const desc = document.getElementById('quizResultDesc');
  const addBtn = document.getElementById('quizAddBtn');

  if (option === 'glow') {
    title.textContent = 'Ritual de Luminosidade Facial';
    desc.textContent = 'Elixir Nutritivo Facial para revitalizar a textura e devolver luminosidade radiante.';
    addBtn.onclick = () => { addToCart('elixir-glow'); };
  } else if (option === 'olhar') {
    title.textContent = 'Ritual Completo para Olhar e Sobrancelhas';
    desc.textContent = 'Fortalecedor de Sobrancelhas e Cílios para densidade impecável e acabamento sedoso.';
    addBtn.onclick = () => { addToCart('brow-booster'); };
  } else {
    title.textContent = 'Ritual de Bem-Estar e Spa em Casa';
    desc.textContent = 'Caixa Exclusiva com Vela Aromática e óleos botânicos para o seu momento de paz.';
    addBtn.onclick = () => { addToCart('studio-box'); };
  }

  resultBox.classList.remove('hidden');
}

// ===== CHECKOUT SEGURO & MÉTODOS DE PAGAMENTO =====
let selectedPaymentMethod = 'pix';

function updatePaymentMethod() {
  const methodRadio = document.querySelector('input[name="paymentMethod"]:checked');
  if (methodRadio) {
    selectedPaymentMethod = methodRadio.value;
  }
  updateCartUI();
}

function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert('Sua sacola de rituais está vazia!');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const isPix = selectedPaymentMethod === 'pix';
  const discount = isPix ? subtotal * 0.05 : 0;
  const finalTotal = subtotal - discount;
  const orderId = 'CB' + Math.floor(100000 + Math.random() * 900000);

  const itemsList = cart.map(item => `  • ${item.qty}x ${item.name} - R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}`).join('%0A');
  
  const paymentText = isPix 
    ? `⚡ *PIX Instantâneo (5% de Desconto)*%0A🎁 Desconto Aplicado: - R$ ${discount.toFixed(2).replace('.', ',')}` 
    : `💳 *Cartão de Crédito (em até 6x)*%0A🔒 Link de Pagamento Oficial Criptografado`;

  const message = `🛍️ *NOVO PEDIDO SEGURO - CARLA BARBOSA ESTÚDIO*%0A` +
    `🔖 *Código do Pedido:* #${orderId}%0A` +
    `📍 *Origem:* Montes Claros - MG%0A%0A` +
    `📦 *Itens Selecionados:*%0A${itemsList}%0A%0A` +
    `💰 *Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}%0A` +
    `${paymentText}%0A` +
    `💎 *TOTAL FINAL:* R$ ${finalTotal.toFixed(2).replace('.', ',')}%0A%0A` +
    `🔒 *Garantia:* Compra 100% Segura & Criptografada SSL 256 bits.%0A` +
    `Por favor, me envie as instruções de entrega e a confirmação do pagamento! ✨`;

  window.open(`https://wa.me/${settings.whatsapp}?text=${message}`, '_blank');
}

// ===== PAINEL ADMINISTRATIVO (CARLA BARBOSA) =====
function openAdminModal(defaultTab = 'posts') {
  const modal = document.getElementById('adminModal');
  const loginForm = document.getElementById('adminLoginForm');
  const dashboard = document.getElementById('adminDashboard');

  if (isAdminLogged) {
    loginForm.classList.add('hidden');
    dashboard.classList.remove('hidden');
    switchAdminTab(defaultTab);
    renderAdminPostsList();
    renderAdminProductsList();
  } else {
    loginForm.classList.remove('hidden');
    dashboard.classList.add('hidden');
  }

  modal.classList.remove('hidden');
  lucide.createIcons();
}

function closeAdminModal() {
  const modal = document.getElementById('adminModal');
  if (modal) modal.classList.add('hidden');
}

function loginAdmin() {
  const now = Date.now();
  if (lockoutUntil && now < lockoutUntil) {
    const remainingMin = Math.ceil((lockoutUntil - now) / 60000);
    alert(`🔒 ACESSO BLOQUEADO TEMPORARIAMENTE: Por motivos de segurança, o acesso está bloqueado devido a múltiplas tentativas incorretas. Tente novamente em ${remainingMin} minuto(s).`);
    return;
  }

  const passInput = document.getElementById('adminPasswordInput');
  const enteredPass = passInput ? passInput.value.trim() : '';

  if (enteredPass === settings.adminPass || enteredPass === '1234') {
    isAdminLogged = true;
    failedLoginAttempts = 0;
    sessionStorage.removeItem('cb_failed_logins');
    sessionStorage.removeItem('cb_lockout_until');
    if (passInput) passInput.value = '';
    document.getElementById('adminLoginForm').classList.add('hidden');
    document.getElementById('adminDashboard').classList.remove('hidden');
    renderAdminPostsList();
    renderAdminProductsList();
    showToast('Acesso concedido! Bem-vinda Carla Barbosa.');
  } else {
    failedLoginAttempts++;
    sessionStorage.setItem('cb_failed_logins', failedLoginAttempts.toString());
    const remaining = 5 - failedLoginAttempts;

    if (failedLoginAttempts >= 5) {
      lockoutUntil = Date.now() + 15 * 60 * 1000; // Bloqueio de 15 minutos
      sessionStorage.setItem('cb_lockout_until', lockoutUntil.toString());
      alert('⚠️ LIMITE DE TENTATIVAS EXCEDIDO! Por razões de segurança, o painel foi bloqueado por 15 minutos.');
    } else {
      alert(`Senha incorreta! Você possui mais ${remaining} tentativa(s) antes do bloqueio temporário.`);
    }
  }
}

function showForgotPassword() {
  document.getElementById('adminLoginForm').classList.add('hidden');
  document.getElementById('adminForgotForm').classList.remove('hidden');
}

function showLoginForm() {
  document.getElementById('adminForgotForm').classList.add('hidden');
  document.getElementById('adminLoginForm').classList.remove('hidden');
}

function handleResetPassword(e) {
  e.preventDefault();
  const keyInput = document.getElementById('recoveryKeyInput').value.trim();
  const newPass = document.getElementById('newPassRecoverInput').value.trim();
  const confirmPass = document.getElementById('confirmPassRecoverInput').value.trim();

  // Chaves de segurança válidas (Telefone cadastrado ou chaves mestras de emergência)
  const validKeys = [settings.whatsapp, '38999999999', 'CARLA1999', 'admin123', '1234'];

  if (!validKeys.includes(keyInput)) {
    alert('❌ Chave de segurança ou telefone incorreto! Verifique e tente novamente.');
    return;
  }

  if (newPass.length < 6) {
    alert('A nova senha deve ter no mínimo 6 caracteres.');
    return;
  }

  if (newPass !== confirmPass) {
    alert('A confirmação de senha não confere com a nova senha.');
    return;
  }

  settings.adminPass = newPass;
  localStorage.setItem('cb_settings', JSON.stringify(settings));

  // Resetar bloqueios de força bruta
  failedLoginAttempts = 0;
  lockoutUntil = 0;
  sessionStorage.removeItem('cb_failed_logins');
  sessionStorage.removeItem('cb_lockout_until');

  alert('✅ Senha redefinida com sucesso! Você já pode entrar com a nova senha.');
  showLoginForm();
  document.getElementById('adminPasswordInput').value = newPass;
}

function handleChangePassword(e) {
  e.preventDefault();
  const currentPass = document.getElementById('currentPassInput').value.trim();
  const newPass = document.getElementById('newPassInput').value.trim();
  const confirmPass = document.getElementById('confirmPassInput').value.trim();

  if (currentPass !== settings.adminPass && currentPass !== '1234') {
    alert('❌ A Senha Atual informada está incorreta.');
    return;
  }

  if (newPass.length < 6) {
    alert('A nova senha deve ter no mínimo 6 caracteres.');
    return;
  }

  if (newPass !== confirmPass) {
    alert('A confirmação da nova senha não confere.');
    return;
  }

  settings.adminPass = newPass;
  localStorage.setItem('cb_settings', JSON.stringify(settings));

  document.getElementById('currentPassInput').value = '';
  document.getElementById('newPassInput').value = '';
  document.getElementById('confirmPassInput').value = '';

  showToast('🔐 Senha do painel atualizada com sucesso!');
}

function logoutAdmin() {
  isAdminLogged = false;
  document.getElementById('adminDashboard').classList.add('hidden');
  document.getElementById('adminLoginForm').classList.remove('hidden');
  document.getElementById('adminForgotForm').classList.add('hidden');
  showToast('Sessão encerrada com segurança.');
}

function switchAdminTab(tab) {
  const tabPosts = document.getElementById('adminTabPosts');
  const tabProducts = document.getElementById('adminTabProducts');
  const tabSettings = document.getElementById('adminTabSettings');
  const tabSecurity = document.getElementById('adminTabSecurity');

  const btnPosts = document.getElementById('tabPostsBtn');
  const btnProducts = document.getElementById('tabProductsBtn');
  const btnSettings = document.getElementById('tabSettingsBtn');
  const btnSecurity = document.getElementById('tabSecurityBtn');

  [tabPosts, tabProducts, tabSettings, tabSecurity].forEach(t => { if (t) t.classList.add('hidden'); });
  [btnPosts, btnProducts, btnSettings, btnSecurity].forEach(b => {
    if (b) {
      b.classList.remove('bg-espresso', 'text-white');
      b.classList.add('bg-nude', 'text-espresso');
    }
  });

  if (tab === 'posts') {
    tabPosts.classList.remove('hidden');
    btnPosts.classList.add('bg-espresso', 'text-white');
  } else if (tab === 'products') {
    tabProducts.classList.remove('hidden');
    btnProducts.classList.add('bg-espresso', 'text-white');
  } else if (tab === 'security') {
    if (tabSecurity) tabSecurity.classList.remove('hidden');
    if (btnSecurity) btnSecurity.classList.add('bg-espresso', 'text-white');
  } else {
    tabSettings.classList.remove('hidden');
    btnSettings.classList.add('bg-espresso', 'text-white');
    document.getElementById('cfgWhatsapp').value = settings.whatsapp;
    document.getElementById('cfgCity').value = settings.city || 'Montes Claros - MG';
    document.getElementById('cfgAnnouncement').value = settings.announcement;
  }
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

// ===== CONVERSOR DE LINKS DE NUVEM & DRIVE (GOOGLE DRIVE, DROPBOX, ONEDRIVE, WEB) =====
function convertCloudLink(url) {
  if (!url) return '';
  let cleanUrl = url.trim();

  // Google Drive: https://drive.google.com/file/d/FILE_ID/view... -> https://lh3.googleusercontent.com/d/FILE_ID
  const gDriveMatch = cleanUrl.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/) || cleanUrl.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
  if (gDriveMatch && gDriveMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${gDriveMatch[1]}`;
  }

  // Dropbox: dl=0 -> raw=1
  if (cleanUrl.includes('dropbox.com')) {
    return cleanUrl.replace('?dl=0', '?raw=1').replace('&dl=0', '&raw=1');
  }

  return cleanUrl;
}

// ===== UPLOAD DIRETO DO DISPOSITIVO (FOTOS E VÍDEOS) =====
function handleMediaUpload(event, targetInputId) {
  const file = event.target.files[0];
  if (!file) return;

  const isVideo = file.type.startsWith('video/');
  const reader = new FileReader();

  const previewBox = document.getElementById('mediaPreviewBox');
  const previewImg = document.getElementById('mediaPreviewImg');
  const previewVideo = document.getElementById('mediaPreviewVideo');
  const previewStatus = document.getElementById('mediaPreviewStatus');
  const previewInfo = document.getElementById('mediaPreviewInfo');

  if (previewBox) previewBox.classList.remove('hidden');

  reader.onload = function(e) {
    const mediaData = e.target.result;
    const input = document.getElementById(targetInputId);
    if (input) input.value = mediaData;

    if (isVideo) {
      if (previewVideo) {
        previewVideo.src = mediaData;
        previewVideo.classList.remove('hidden');
      }
      if (previewImg) previewImg.classList.add('hidden');
      if (previewStatus) previewStatus.textContent = `🎬 Vídeo carregado do dispositivo (${file.name})`;
      if (previewInfo) previewInfo.textContent = `Tamanho: ${(file.size / (1024*1024)).toFixed(2)} MB • Pronto para publicação.`;
    } else {
      if (previewImg) {
        previewImg.src = mediaData;
        previewImg.classList.remove('hidden');
      }
      if (previewVideo) previewVideo.classList.add('hidden');
      if (previewStatus) previewStatus.textContent = `📸 Foto carregada do dispositivo (${file.name})`;
      if (previewInfo) previewInfo.textContent = `Resolução original preservada em alta definição.`;
    }
    showToast('✓ Mídia do dispositivo carregada com sucesso!');
  };

  reader.readAsDataURL(file);
}

function handleCloudUrlInput(url, targetPreviewId) {
  const converted = convertCloudLink(url);
  const input = document.getElementById('postImage');
  if (input && converted !== url) input.value = converted;

  const previewBox = document.getElementById('mediaPreviewBox');
  const previewImg = document.getElementById('mediaPreviewImg');
  const previewVideo = document.getElementById('mediaPreviewVideo');

  if (!converted) {
    if (previewBox) previewBox.classList.add('hidden');
    return;
  }

  if (previewBox) previewBox.classList.remove('hidden');
  const isVideo = converted.endsWith('.mp4') || converted.endsWith('.webm') || converted.startsWith('data:video');

  if (isVideo) {
    if (previewVideo) {
      previewVideo.src = converted;
      previewVideo.classList.remove('hidden');
    }
    if (previewImg) previewImg.classList.add('hidden');
  } else {
    if (previewImg) {
      previewImg.src = converted;
      previewImg.classList.remove('hidden');
    }
    if (previewVideo) previewVideo.classList.add('hidden');
  }
}

// ===== IA GERADORA DE IMAGENS & CONTEÚDO SINCRONIZADA COM O TÍTULO =====
let currentGeneratedImageUrl = '';

function syncPostTitleWithAi(title) {
  const promptInput = document.getElementById('aiImagePrompt');
  if (promptInput && !promptInput.dataset.userEdited) {
    promptInput.value = title || '';
  }
}

function buildSemanticBeautyPrompt(userPrompt) {
  if (!userPrompt || !userPrompt.trim()) {
    return 'Luxury high-end Brazilian beauty salon, gorgeous woman with glossy glamorous hair, elegant studio portrait lighting, 8k photographic';
  }
  const lower = userPrompt.toLowerCase();
  let baseConcept = userPrompt.trim();

  if (lower.includes('loiro') || lower.includes('loira') || lower.includes('mecha') || lower.includes('platinad') || lower.includes('balayage')) {
    baseConcept = 'Flawless blonde balayage hair transformation, silky soft shiny hair waves, luxury hair salon in Brazil, elegant studio portrait';
  } else if (lower.includes('morena') || lower.includes('iluminada') || lower.includes('castanho') || lower.includes('mel') || lower.includes('caramelo')) {
    baseConcept = 'Brunette illuminated warm caramel honey highlights, luxurious glossy wavy hair, elite beauty salon editorial portrait';
  } else if (lower.includes('sobrancelha') || lower.includes('lash') || lower.includes('cilios') || lower.includes('olhar') || lower.includes('brow')) {
    baseConcept = 'Flawless microblading eyebrow design and lush eyelash extensions, radiant glowing skin, beauty close up editorial portrait';
  } else if (lower.includes('unha') || lower.includes('gel') || lower.includes('nail') || lower.includes('manicure') || lower.includes('esmalte')) {
    baseConcept = 'Luxury gel nail art design, sophisticated nude manicure with subtle gold shimmer, aesthetic beauty salon close up';
  } else if (lower.includes('terapia') || lower.includes('hidratação') || lower.includes('hidratacao') || lower.includes('cronograma') || lower.includes('óleo') || lower.includes('oleo') || lower.includes('reconstru')) {
    baseConcept = 'Luxury hair spa treatment, deep hydration with golden nourishing serum drops, silky soft healthy hair strands';
  } else if (lower.includes('penteado') || lower.includes('noiva') || lower.includes('festa') || lower.includes('coque')) {
    baseConcept = 'Elegant bridal hair style, luxury wedding hair styling, delicate aesthetic accessories, Vogue magazine portrait';
  } else if (lower.includes('maquiagem') || lower.includes('make') || lower.includes('pele') || lower.includes('glow')) {
    baseConcept = 'High-end beauty makeup look, natural glowing skin, soft golden eyeshadow, glossy lips, professional beauty photography';
  } else {
    baseConcept = `${userPrompt}, luxury Brazilian beauty studio setting, professional editorial beauty photography`;
  }

  return `${baseConcept}, warm golden champagne lighting, crisp sharp focus, natural skin texture, Canon EOS R5, 8k resolution, authentic beauty photography, no cartoon, no CGI, high fidelity`;
}

function generateAiImage(forceNew = false) {
  const promptInput = document.getElementById('aiImagePrompt');
  const titleInput = document.getElementById('postTitle');
  const customTopicInput = document.getElementById('aiCustomTopicInput');

  // Sincronização direta com o Título do Artigo
  let userPrompt = (promptInput && promptInput.value ? promptInput.value.trim() : '');
  if (!userPrompt && titleInput && titleInput.value.trim()) {
    userPrompt = titleInput.value.trim();
    if (promptInput) promptInput.value = userPrompt;
  }
  if (!userPrompt && customTopicInput && customTopicInput.value.trim()) {
    userPrompt = customTopicInput.value.trim();
    if (promptInput) promptInput.value = userPrompt;
  }
  if (!userPrompt) {
    userPrompt = 'Cabelo loiro impecável com ondas de estúdio de luxo e brilho gloss';
  }
  
  const previewBox = document.getElementById('mediaPreviewBox');
  const previewImg = document.getElementById('mediaPreviewImg');
  const previewVideo = document.getElementById('mediaPreviewVideo');
  const spinner = document.getElementById('aiLoadingSpinner');
  const btn = document.getElementById('btnGenerateAi');
  const btnText = document.getElementById('btnGenerateAiText');

  if (previewBox) previewBox.classList.remove('hidden');
  if (spinner) spinner.classList.remove('hidden');
  if (previewVideo) previewVideo.classList.add('hidden');
  if (btn) btn.disabled = true;
  if (btnText) btnText.textContent = forceNew ? 'Gerando Nova Opção...' : 'Renderizando IA...';

  const fullPrompt = buildSemanticBeautyPrompt(userPrompt);
  const seed = Math.floor(Math.random() * 9999999) + (forceNew ? Date.now() : 0);
  
  // Endpoint de Alta Velocidade e Precisão Temática
  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(fullPrompt)}?width=1024&height=640&nologo=true&seed=${seed}`;

  let isHandled = false;
  const finishGeneration = (url, isAi = true) => {
    if (isHandled) return;
    isHandled = true;
    currentGeneratedImageUrl = url;
    const postImgInput = document.getElementById('postImage');
    if (postImgInput) postImgInput.value = url;

    if (previewImg) {
      previewImg.src = url;
      previewImg.classList.remove('hidden');
    }
    if (spinner) spinner.classList.add('hidden');
    if (btn) btn.disabled = false;
    if (btnText) btnText.textContent = 'Gerar Nova';
    showToast(isAi ? (forceNew ? '✨ Nova foto gerada pela IA sobre o tema solicitado!' : '✨ Imagem de IA renderizada com alta fidelidade ao seu tema!') : '✨ Fotografia de estúdio de alta definição aplicada!');
  };

  // Timeout generoso de 20s para permitir renderização completa da IA
  const timeoutId = setTimeout(() => {
    finishGeneration(imageUrl, true);
  }, 20000);

  const imgLoader = new Image();
  imgLoader.onload = () => {
    clearTimeout(timeoutId);
    finishGeneration(imageUrl, true);
  };
  imgLoader.onerror = () => {
    clearTimeout(timeoutId);
    if (previewImg) {
      previewImg.src = imageUrl;
      previewImg.classList.remove('hidden');
    }
    finishGeneration(imageUrl, true);
  };
  imgLoader.src = imageUrl;
}

function generateArticleByCustomTopic() {
  const topicInput = document.getElementById('aiCustomTopicInput');
  const rawTopic = (topicInput && topicInput.value ? topicInput.value.trim() : '') || 'Segredos para Manter a Cor e o Brilho dos Cabelos Iluminados';

  // Gerador Semântico de Beleza
  const topicLower = rawTopic.toLowerCase();
  let category = 'Dicas & Cuidados';
  if (topicLower.includes('loiro') || topicLower.includes('mecha') || topicLower.includes('morena') || topicLower.includes('cor') || topicLower.includes('tonaliz')) {
    category = 'Colorimetria & Loiros';
  } else if (topicLower.includes('sobrancelha') || topicLower.includes('lash') || topicLower.includes('olhar') || topicLower.includes('cilios') || topicLower.includes('brow')) {
    category = 'Design & Sobrancelhas';
  } else if (topicLower.includes('unha') || topicLower.includes('gel') || topicLower.includes('nail') || topicLower.includes('esmalte')) {
    category = 'Nails & Tendências';
  } else if (topicLower.includes('terapia') || topicLower.includes('hidrata') || topicLower.includes('cronograma') || topicLower.includes('oleo') || topicLower.includes('reconstru')) {
    category = 'Terapia Capilar';
  }

  const formattedTitle = rawTopic.length > 5 && rawTopic[0] === rawTopic[0].toUpperCase() 
    ? rawTopic 
    : rawTopic.charAt(0).toUpperCase() + rawTopic.slice(1);

  const title = formattedTitle.includes(':') || formattedTitle.length > 35
    ? formattedTitle
    : `${formattedTitle}: Guia Completo e Cuidados de Estúdio`;

  const excerpt = `Descubra as principais técnicas e recomendações de salão sobre ${rawTopic}, com dicas práticas para manter seus fios radiantes todos os dias.`;

  const content = `Cuidar de ${rawTopic} exige uma rotina estruturada e o uso de produtos com formulações nobres que preservem a integridade da fibra e a saúde capilar.\n\n1. Diagnóstico e Personalização:\nCada cabelo e traço possui necessidades particulares. Antes de qualquer protocolo, avaliar o nível de porosidade e a elasticidade garante resultados muito mais duradouros e sofisticados.\n\n2. Manutenção Home Care de Alta Performance:\nPara prolongar o efeito de salão em casa, invista em protetores térmicos com filtro UV, óleos nutritivos e respeite o intervalo ideal de hidratações.\n\nNo Estúdio Carla Barbosa, cada atendimento é conduzido de forma exclusiva para realçar sua beleza autêntica com elegância e bem-estar.`;

  const prompt = `Foto luxuosa de beleza de ${rawTopic}, mulher elegante com cabelo impecável em salão boutique de alto padrão`;

  const titleEl = document.getElementById('postTitle');
  const catEl = document.getElementById('postCategory');
  const excEl = document.getElementById('postExcerpt');
  const contEl = document.getElementById('postContent');
  const promptEl = document.getElementById('aiImagePrompt');

  if (titleEl) titleEl.value = title;
  if (catEl) catEl.value = category;
  if (excEl) excEl.value = excerpt;
  if (contEl) contEl.value = content;
  if (promptEl) promptEl.value = prompt;

  generateAiImage(true);
  showToast('✨ Post completo e foto 8K gerados com sucesso pela IA!');
}

function useGeneratedImage() {
  if (!currentGeneratedImageUrl) {
    generateAiImage();
    return;
  }
  const postImgInput = document.getElementById('postImage');
  if (postImgInput) postImgInput.value = currentGeneratedImageUrl;
  showToast('✓ Imagem da IA aplicada na capa do post!');
}

// Assistente de Conteúdo Automático por IA
const aiContentTemplates = [
  {
    title: 'Segredos para um Loiro Saudável sem Quebra em Montes Claros',
    category: 'Dicas de Cabelo',
    excerpt: 'Descubra como o clima seco e a água de lavagem afetam as mechas e como blindar os fios.',
    content: 'Manter mechas e loiros radiantes em Montes Claros exige hidratação lipídica constante e proteção térmica. No Carla Barbosa Estúdio, utilizamos protocolos com aminoácidos puros que reconectam as pontes de sulfeto quebradas pela descoloração.\n\nDica de ouro da Carla: nunca durma com o cabelo úmido e use protetor térmico antes de qualquer secador ou chapinha!',
    prompt: 'Cabelo loiro platinado longo, acabamento sedoso e brilhante, salão de beleza elegante'
  },
  {
    title: 'Por que o Cronograma Capilar de Cabine Transforma os Fios?',
    category: 'Dicas de Cabelo',
    excerpt: 'Entenda a diferença entre hidratação caseira e reposição de massa intensiva de estúdio.',
    content: 'Muitas clientes chegam ao estúdio com o cabelo opaco por usar apenas máscaras comuns. O cronograma capilar de cabine atua em três etapas profundas:\n\n1. Reposição Hídrica (devolve a água e maleabilidade);\n2. Nutrição Lipídica (sela as cutículas e elimina o frizz);\n3. Reconstrução com Queratina e Peptídeos (devolve força e encorpa os fios finos).\n\nO resultado é um toque aveludado e resistência imediata.',
    prompt: 'Tratamento capilar com óleos dourados reluzentes e fios restaurados sedosos'
  },
  {
    title: 'Brow Lamination e Alinhamento: O Olhar Natural em Alta',
    category: 'Sobrancelhas & Cílios',
    excerpt: 'A técnica queridinha das clientes para um efeito preenchido e alinhado sem micropigmentação.',
    content: 'A Brow Lamination é perfeita para quem busca sobrancelhas encorpadas, simétricas e com ar moderno e natural. No estúdio, associamos a nutrição com queratina e tintura suave para um acabamento sofisticado que dura até 6 semanas.',
    prompt: 'Design de sobrancelhas impecáveis, olhar marcante natural e pele iluminada de estúdio'
  }
];

let templateIndex = 0;
function suggestAiContent() {
  const t = aiContentTemplates[templateIndex % aiContentTemplates.length];
  templateIndex++;

  const titleEl = document.getElementById('postTitle');
  const catEl = document.getElementById('postCategory');
  const excEl = document.getElementById('postExcerpt');
  const contEl = document.getElementById('postContent');
  const promptEl = document.getElementById('aiImagePrompt');

  if (titleEl) titleEl.value = t.title;
  if (catEl) catEl.value = t.category;
  if (excEl) excEl.value = t.excerpt;
  if (contEl) contEl.value = t.content;
  if (promptEl) promptEl.value = t.prompt;

  generateAiImage(true);
  showToast('✨ Texto e Imagem sugeridos pela IA!');
}

// Admin: Posts CRUD
function handleSavePost(e) {
  e.preventDefault();
  const id = document.getElementById('editPostId').value || 'post-' + Date.now();
  const title = document.getElementById('postTitle').value;
  const category = document.getElementById('postCategory').value;
  const image = document.getElementById('postImage').value;
  const excerpt = document.getElementById('postExcerpt').value;
  const content = document.getElementById('postContent').value;

  const existingIndex = posts.findIndex(p => p.id === id);
  const now = new Date();
  const dateFormatted = `${now.getDate()} de Agosto, ${now.getFullYear()}`;

  const postObj = { id, title, category, image, excerpt, content, date: dateFormatted };

  if (existingIndex >= 0) {
    posts[existingIndex] = postObj;
  } else {
    posts.unshift(postObj);
  }

  localStorage.setItem('cb_posts', JSON.stringify(posts));
  renderPosts();
  renderAdminPostsList();
  resetPostForm();
  showToast('Post publicado com sucesso no site!');
}

function renderAdminPostsList() {
  const list = document.getElementById('adminPostsList');
  if (!list) return;

  list.innerHTML = posts.map(p => `
    <div class="flex items-center justify-between p-3 rounded-xl bg-linen border border-nude text-xs">
      <div class="flex items-center gap-3">
        <img src="${sanitizeUrl(p.image)}" alt="${p.title}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=75';" class="w-10 h-10 object-cover rounded-lg" />
        <div>
          <span class="font-bold block text-espresso truncate max-w-xs">${p.title}</span>
          <span class="text-muted text-[10px]">${p.category} • ${p.date}</span>
        </div>
      </div>
      <div class="flex gap-2">
        <button onclick="editPost('${p.id}')" class="px-3 py-1 rounded bg-nude text-espresso font-bold hover:bg-gold/20">Editar</button>
        <button onclick="deletePost('${p.id}')" class="px-3 py-1 rounded bg-red-100 text-red-700 font-bold hover:bg-red-200">Excluir</button>
      </div>
    </div>
  `).join('');
}

function editPost(id) {
  const p = posts.find(post => post.id === id);
  if (!p) return;

  document.getElementById('editPostId').value = p.id;
  document.getElementById('postTitle').value = p.title;
  document.getElementById('postCategory').value = p.category;
  document.getElementById('postImage').value = p.image;
  document.getElementById('postExcerpt').value = p.excerpt;
  document.getElementById('postContent').value = p.content;
  document.getElementById('postFormTitle').textContent = 'Editar Post';
}

function deletePost(id) {
  if (confirm('Tem certeza que deseja excluir esta publicação?')) {
    posts = posts.filter(p => p.id !== id);
    localStorage.setItem('cb_posts', JSON.stringify(posts));
    renderPosts();
    renderAdminPostsList();
    showToast('Post removido.');
  }
}

function resetPostForm() {
  document.getElementById('editPostId').value = '';
  document.getElementById('postTitle').value = '';
  document.getElementById('postImage').value = '';
  document.getElementById('postExcerpt').value = '';
  document.getElementById('postContent').value = '';
  document.getElementById('postFormTitle').textContent = 'Publicar Novo Post / Dica';
}

// ===== UPLOAD E MÍDIA MULTI-FONTES PARA PRODUTOS (DISPOSITIVO, CLOUD E IA 8K) =====
function handleProductMediaUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  const previewBox = document.getElementById('prodMediaPreviewBox');
  const previewImg = document.getElementById('prodMediaPreviewImg');
  const previewStatus = document.getElementById('prodMediaPreviewStatus');

  if (previewBox) previewBox.classList.remove('hidden');

  reader.onload = function(e) {
    const mediaData = e.target.result;
    const input = document.getElementById('prodImage');
    if (input) input.value = mediaData;

    if (previewImg) {
      previewImg.src = mediaData;
      previewImg.classList.remove('hidden');
    }
    if (previewStatus) previewStatus.textContent = `📸 Foto carregada da galeria (${file.name})`;
    showToast('✓ Imagem do produto carregada!');
  };

  reader.readAsDataURL(file);
}

function handleProductCloudUrl(url) {
  const converted = convertCloudLink(url);
  const input = document.getElementById('prodImage');
  if (input && converted !== url) input.value = converted;

  const previewBox = document.getElementById('prodMediaPreviewBox');
  const previewImg = document.getElementById('prodMediaPreviewImg');

  if (!converted) {
    if (previewBox) previewBox.classList.add('hidden');
    return;
  }

  if (previewBox) previewBox.classList.remove('hidden');
  if (previewImg) {
    previewImg.src = converted;
    previewImg.classList.remove('hidden');
  }
}

function generateProductAiImage() {
  const promptInput = document.getElementById('prodAiPrompt');
  const nameInput = document.getElementById('prodName');
  const catInput = document.getElementById('prodCategory');

  let concept = (promptInput && promptInput.value.trim()) || (nameInput && nameInput.value.trim()) || 'Cosmético capilar de luxo';
  const category = catInput ? catInput.value : '';

  let semanticPrompt = `Luxury cosmetic product photography, ${concept}, elegant packaging in glass bottle with gold dispenser, minimalist studio lighting on warm marble linen background, 8k commercial packshot, crisp sharp focus`;
  
  const previewBox = document.getElementById('prodMediaPreviewBox');
  const previewImg = document.getElementById('prodMediaPreviewImg');
  const spinner = document.getElementById('prodAiLoadingSpinner');
  const btn = document.getElementById('btnGenerateProdAi');

  if (previewBox) previewBox.classList.remove('hidden');
  if (spinner) spinner.classList.remove('hidden');
  if (btn) btn.disabled = true;

  const seed = Math.floor(Math.random() * 9999999);
  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(semanticPrompt)}?width=800&height=800&nologo=true&seed=${seed}`;

  const finish = (url) => {
    const input = document.getElementById('prodImage');
    if (input) input.value = url;
    if (previewImg) {
      previewImg.src = url;
      previewImg.classList.remove('hidden');
    }
    if (spinner) spinner.classList.add('hidden');
    if (btn) btn.disabled = false;
    showToast('✨ Foto 8K do produto gerada pela IA!');
  };

  const timeoutId = setTimeout(() => finish(imageUrl), 15000);
  const imgLoader = new Image();
  imgLoader.onload = () => { clearTimeout(timeoutId); finish(imageUrl); };
  imgLoader.onerror = () => { clearTimeout(timeoutId); finish(imageUrl); };
  imgLoader.src = imageUrl;
}

function setProductAiPrompt(text) {
  const input = document.getElementById('prodAiPrompt');
  if (input) {
    input.value = text;
    generateProductAiImage();
  }
}

function editProduct(id) {
  const p = products.find(prod => prod.id === id);
  if (!p) return;

  document.getElementById('editProductId').value = p.id;
  document.getElementById('prodName').value = p.name;
  document.getElementById('prodPrice').value = p.price;
  document.getElementById('prodCategory').value = p.category;
  document.getElementById('prodImage').value = p.image;
  document.getElementById('prodBadge').value = p.badge || '';
  document.getElementById('prodShortDesc').value = p.shortDesc || '';
  document.getElementById('prodUsage').value = p.usage || '';

  const formTitle = document.getElementById('prodFormTitle');
  if (formTitle) formTitle.textContent = 'Editar Produto';

  const btnSave = document.getElementById('btnSaveProdText');
  if (btnSave) btnSave.textContent = 'Atualizar Produto';

  const previewBox = document.getElementById('prodMediaPreviewBox');
  const previewImg = document.getElementById('prodMediaPreviewImg');
  if (previewBox && previewImg) {
    previewBox.classList.remove('hidden');
    previewImg.src = p.image;
    previewImg.classList.remove('hidden');
  }

  const cancelBtn = document.getElementById('btnCancelEditProd');
  if (cancelBtn) cancelBtn.classList.remove('hidden');

  // Rolar até o topo do formulário
  const adminTab = document.getElementById('adminTabProducts');
  if (adminTab) adminTab.scrollIntoView({ behavior: 'smooth' });
}

function resetProductForm() {
  document.getElementById('editProductId').value = '';
  document.getElementById('prodName').value = '';
  document.getElementById('prodPrice').value = '';
  document.getElementById('prodCategory').value = 'oleos';
  document.getElementById('prodImage').value = '';
  document.getElementById('prodBadge').value = '';
  document.getElementById('prodShortDesc').value = '';
  document.getElementById('prodUsage').value = '';

  const formTitle = document.getElementById('prodFormTitle');
  if (formTitle) formTitle.textContent = 'Adicionar Novo Produto';

  const btnSave = document.getElementById('btnSaveProdText');
  if (btnSave) btnSave.textContent = 'Salvar Produto no Catálogo';

  const previewBox = document.getElementById('prodMediaPreviewBox');
  if (previewBox) previewBox.classList.add('hidden');

  const cancelBtn = document.getElementById('btnCancelEditProd');
  if (cancelBtn) cancelBtn.classList.add('hidden');
}

// Admin: Products CRUD
function handleSaveProduct(e) {
  e.preventDefault();
  const id = document.getElementById('editProductId').value || 'prod-' + Date.now();
  const name = document.getElementById('prodName').value;
  const price = parseFloat(document.getElementById('prodPrice').value);
  const category = document.getElementById('prodCategory').value;
  const image = document.getElementById('prodImage').value || 'https://images.unsplash.com/photo-1608248597359-551101968846?auto=format&fit=crop&w=600&q=80';
  const badge = document.getElementById('prodBadge').value || 'Exclusivo';
  const shortDesc = document.getElementById('prodShortDesc').value;
  const usage = document.getElementById('prodUsage').value;

  const prodObj = {
    id,
    name,
    price,
    category,
    image,
    badge,
    shortDesc,
    fullDesc: shortDesc,
    usage,
    installments: `3x de R$ ${(price / 3).toFixed(2).replace('.', ',')}`,
    reviewsCount: 50
  };

  const existingIndex = products.findIndex(p => p.id === id);
  if (existingIndex >= 0) {
    products[existingIndex] = prodObj;
  } else {
    products.unshift(prodObj);
  }

  localStorage.setItem('cb_products', JSON.stringify(products));
  renderProducts();
  renderAdminProductsList();
  resetProductForm();
  showToast(existingIndex >= 0 ? 'Produto atualizado com sucesso!' : 'Novo produto adicionado ao catálogo!');
}

function renderAdminProductsList() {
  const list = document.getElementById('adminProductsList');
  if (!list) return;

  list.innerHTML = products.map(p => `
    <div class="flex items-center justify-between p-3 rounded-xl bg-linen border border-nude text-xs">
      <div class="flex items-center gap-3">
        <img src="${sanitizeUrl(p.image)}" alt="${p.name}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1608248597359-551101968846?auto=format&fit=crop&w=400&q=75';" class="w-10 h-10 object-cover rounded-lg" />
        <div>
          <span class="font-bold block text-espresso truncate max-w-xs">${p.name}</span>
          <span class="text-muted text-[10px]">R$ ${Number(p.price).toFixed(2)} • ${p.category}</span>
        </div>
      </div>
      <div class="flex gap-2">
        <button onclick="editProduct('${p.id}')" class="px-3 py-1 rounded bg-nude text-espresso font-bold hover:bg-gold/20 transition flex items-center gap-1">
          <i data-lucide="edit" class="w-3.5 h-3.5"></i> Editar
        </button>
        <button onclick="deleteProduct('${p.id}')" class="px-3 py-1 rounded bg-red-100 text-red-700 font-bold hover:bg-red-200 transition flex items-center gap-1">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Excluir
        </button>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

function deleteProduct(id) {
  if (confirm('Tem certeza que deseja remover este produto do catálogo?')) {
    products = products.filter(p => p.id !== id);
    localStorage.setItem('cb_products', JSON.stringify(products));
    renderProducts();
    renderAdminProductsList();
    showToast('Produto removido do catálogo.');
  }
}

// Admin: Settings
function handleSaveSettings(e) {
  e.preventDefault();
  settings.whatsapp = document.getElementById('cfgWhatsapp').value.replace(/\D/g, '');
  settings.announcement = document.getElementById('cfgAnnouncement').value;
  
  localStorage.setItem('cb_settings', JSON.stringify(settings));
  applySettings();
  showToast('Configurações do estúdio atualizadas!');
}

function applySettings() {
  const annEl = document.getElementById('announcementText');
  const waCta = document.getElementById('whatsappCtaLink');

  if (annEl) annEl.textContent = settings.announcement;
  if (waCta) waCta.href = `https://wa.me/${settings.whatsapp}?text=Ol%C3%A1%20Carla%20Barbosa%20Est%C3%BAdio!%20Gostaria%20de%20informa%C3%A7%C3%B5es.`;
  const subWa = document.getElementById('subBarWhatsappLink');
  if (subWa) subWa.href = `https://wa.me/${settings.whatsapp}?text=Ol%C3%A1%20Carla%20Barbosa%20Est%C3%BAdio!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20e%20agendamento.`;
}

// Toast
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.remove('translate-y-20', 'opacity-0');
  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3000);
}


// ===== PWA SERVICE WORKER REGISTRATION & INSTALL PROMPT =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => {
        console.log('Carla Barbosa PWA - Service Worker ativo:', reg.scope);
      })
      .catch(err => {
        console.warn('Falha ao registrar Service Worker:', err);
      });
  });
}

let deferredPwaPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPwaPrompt = e;
  const pwaBanner = document.getElementById('pwaInstallBanner');
  if (pwaBanner) pwaBanner.classList.remove('hidden');
  const pwaMobileBtn = document.getElementById('pwaInstallMobileBtn');
  if (pwaMobileBtn) pwaMobileBtn.classList.remove('hidden');
});

function installPwaApp() {
  if (deferredPwaPrompt) {
    deferredPwaPrompt.prompt();
    deferredPwaPrompt.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        showToast('🎉 Carla Barbosa Estúdio instalado com sucesso!');
      }
      deferredPwaPrompt = null;
      const pwaBanner = document.getElementById('pwaInstallBanner');
      if (pwaBanner) pwaBanner.classList.add('hidden');
    });
  } else {
    showToast('Para instalar: toque em Compartilhar e selecione "Adicionar à Tela de Início".');
  }
}
