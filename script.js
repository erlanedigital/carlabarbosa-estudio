// ===== MOCK PRODUCTS DATA =====
const products = [
  {
    id: 'elixir-glow',
    name: 'Elixir Nutri-Glow Facial',
    category: 'skincare',
    badge: 'Best-Seller',
    price: 189.00,
    installments: '3x de R$ 63,00',
    rating: 4.9,
    reviewsCount: 86,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Regeneração celular, luminosidade instantânea e toque aveludado.',
    fullDesc: 'Criado a partir da vivência prática em cabine do estúdio, este elixir combina Ácido Hialurônico multimolecular e Óleo de Rosa Mosqueta puro para hidratar e restaurar o viço sem pesar.',
    usage: 'Aplique 3 a 4 gotas no rosto limpo pela manhã e à noite antes do seu hidratante.'
  },
  {
    id: 'brow-booster',
    name: 'Brow & Lash Density Booster',
    category: 'olhar',
    badge: 'Exclusivo Estúdio',
    price: 149.00,
    installments: '3x de R$ 49,66',
    rating: 5.0,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1512290900672-1f02a0a0ff76?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Nutrição, alinhamento e fortalecimento de sobrancelhas e cílios.',
    fullDesc: 'Complexo bioativo com Peptídeos e Biotina botânica para fortalecer a raiz, reduzir quedas e proporcionar alinhamento elegante dos fios.',
    usage: 'Passe o aplicador suavemente na raiz das sobrancelhas e cílios toda noite.'
  },
  {
    id: 'vela-silence',
    name: 'Vela Aromática Rituel de Silence',
    category: 'aromaterapia',
    badge: 'Home Spa',
    price: 129.00,
    installments: '2x de R$ 64,50',
    rating: 4.8,
    reviewsCount: 42,
    image: 'https://images.unsplash.com/photo-1608248597359-551101968846?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Notas de figo branco, âmbar e cedro para o seu santuário de paz.',
    fullDesc: 'Cera 100% vegetal com pavio de algodão. A mesma fragrância icônica do Carla Barbosa Estúdio para acolher seus momentos de descanso.',
    usage: 'Acenda durante o seu banho ou momento de autocuidado noturno por até 3 horas.'
  },
  {
    id: 'studio-box',
    name: 'The Signature Studio Box',
    category: 'kits',
    badge: 'Edição Especial',
    price: 390.00,
    installments: '6x de R$ 65,00',
    rating: 5.0,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1512290900672-1f02a0a0ff76?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Curadoria completa: Elixir + Brow Booster + Vela + Gua Sha de Quartzo.',
    fullDesc: 'O presente supremo de autocuidado. Acompanha caixa rígida colecionável, laço de linho e cartão personalizado.',
    usage: 'O ritual completo para transformar a sua rotina diária em experiência de luxo.'
  },
  {
    id: 'serum-bakuchiol',
    name: 'Sérum Noturno Renovador Bakuchiol',
    category: 'skincare',
    badge: 'Alta Performance',
    price: 210.00,
    installments: '3x de R$ 70,00',
    rating: 4.9,
    reviewsCount: 51,
    image: 'https://images.unsplash.com/photo-1608248597359-551101968846?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Alternativa botânica ao retinol para firmeza e uniformidade.',
    fullDesc: 'Estimula o colágeno sem causar irritação nem sensibilidade ao sol. Textura aveludada de rápida absorção.',
    usage: 'Aplique 3 gotas à noite após a higienização facial.'
  },
  {
    id: 'nevoa-botanica',
    name: 'Névoa Hidratante Rosas & Camomila',
    category: 'skincare',
    badge: 'Sensorial',
    price: 115.00,
    installments: '2x de R$ 57,50',
    rating: 4.8,
    reviewsCount: 39,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Refresco instantâneo, equilíbrio do pH e viço revigorante.',
    fullDesc: 'Água floral destilada pura com infusão de camomila e aloe vera. Ideal para preparar a pele antes da maquiagem ou refrescar ao longo do dia.',
    usage: 'Borrife a 20cm do rosto sempre que sentir necessidade de hidratação e frescor.'
  }
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('cb_cart')) || [];
let activeCategory = 'todos';

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  lucide.createIcons();

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
  }

  // Cart Drawer Events
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

// ===== RENDER PRODUCTS =====
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = activeCategory === 'todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card rounded-2xl bg-white border border-gold/20 overflow-hidden flex flex-col justify-between group">
      <div class="relative overflow-hidden aspect-[4/4.5] bg-nude/30 cursor-pointer" onclick="openQuickModal('${p.id}')">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
        <img src="${p.hoverImage}" alt="${p.name}" class="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-linen/95 border border-gold/30 text-[10px] uppercase font-bold tracking-wider text-terracotta backdrop-blur-sm">
          ${p.badge}
        </span>

        <button onclick="event.stopPropagation(); openQuickModal('${p.id}')" class="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white text-espresso shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <i data-lucide="eye" class="w-4 h-4"></i>
        </button>
      </div>

      <div class="p-6 space-y-3 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1 text-gold text-xs mb-1">
            <span>★★★★★</span>
            <span class="text-muted text-[11px]">(${p.reviewsCount})</span>
          </div>
          <h3 class="font-serif text-lg font-bold text-espresso cursor-pointer hover:text-terracotta transition" onclick="openQuickModal('${p.id}')">
            ${p.name}
          </h3>
          <p class="text-xs text-muted font-light line-clamp-2 mt-1">${p.shortDesc}</p>
        </div>

        <div class="pt-4 border-t border-nude flex items-center justify-between">
          <div>
            <span class="block font-serif text-lg font-bold text-espresso">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
            <span class="block text-[10px] text-muted">${p.installments}</span>
          </div>
          <button onclick="addToCart('${p.id}')" class="px-4 py-2.5 rounded-full bg-espresso hover:bg-terracotta text-white text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i> Sacola
          </button>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// ===== FILTER CATEGORY =====
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

// ===== CART MANAGEMENT =====
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
  if (subtotalEl) subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;

  // Free shipping calculation (Target: R$ 249)
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
          <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-cover rounded-lg bg-nude/40" />
          <div class="flex-1 min-w-0">
            <h4 class="font-serif font-semibold text-sm text-espresso truncate">${item.name}</h4>
            <span class="text-xs text-muted">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
            <div class="flex items-center gap-2 mt-1">
              <button onclick="updateQty('${item.id}', -1)" class="w-5 h-5 rounded bg-nude flex items-center justify-center text-xs font-bold">-</button>
              <span class="text-xs font-semibold">${item.qty}</span>
              <button onclick="updateQty('${item.id}', 1)" class="w-5 h-5 rounded bg-nude flex items-center justify-center text-xs font-bold">+</button>
            </div>
          </div>
          <button onclick="updateQty('${item.id}', -${item.qty})" class="text-muted hover:text-red-500 p-1">
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
      <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" />
    </div>
    <div class="space-y-4">
      <span class="px-3 py-1 rounded-full bg-nude text-terracotta text-[10px] uppercase font-bold tracking-wider">${p.badge}</span>
      <h3 class="font-serif text-2xl font-bold text-espresso">${p.name}</h3>
      <span class="font-serif text-2xl font-bold text-espresso block">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
      <p class="text-xs text-muted leading-relaxed">${p.fullDesc}</p>
      
      <div class="p-3 rounded-xl bg-nude/40 border border-gold/20 text-xs text-espresso">
        <strong>Como Usar:</strong> ${p.usage}
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

// ===== THE STUDIO ROUTINE QUIZ =====
function selectQuiz(step, option, btn) {
  document.querySelectorAll('.quiz-btn').forEach(b => b.classList.remove('border-terracotta', 'bg-gold/20'));
  btn.classList.add('border-terracotta', 'bg-gold/20');

  const resultBox = document.getElementById('quizResult');
  const title = document.getElementById('quizResultTitle');
  const desc = document.getElementById('quizResultDesc');
  const addBtn = document.getElementById('quizAddBtn');

  if (option === 'glow') {
    title.textContent = 'Ritual Haute Glow Facial';
    desc.textContent = 'Elixir Nutri-Glow + Névoa Hidratante de Rosas para revitalizar a textura e devolver luminosidade radiante.';
    addBtn.onclick = () => { addToCart('elixir-glow'); addToCart('nevoa-botanica'); };
  } else if (option === 'olhar') {
    title.textContent = 'Ritual Couture Eyes & Brows';
    desc.textContent = 'Brow & Lash Density Booster para densidade de sobrancelhas e cílios impecáveis com acabamento sedoso.';
    addBtn.onclick = () => { addToCart('brow-booster'); };
  } else {
    title.textContent = 'Ritual Sanctuary Home Spa';
    desc.textContent = 'The Signature Studio Box com Vela Aromática e óleos botânicos para o seu momento de paz.';
    addBtn.onclick = () => { addToCart('studio-box'); };
  }

  resultBox.classList.remove('hidden');
}

// ===== CHECKOUT VIA WHATSAPP =====
function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert('Sua sacola está vazia!');
    return;
  }

  const itemsList = cart.map(item => `• ${item.qty}x ${item.name} (R$ ${(item.price * item.qty).toFixed(2)})`).join('%0A');
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0).toFixed(2);
  
  const text = `Ol%C3%A1%20Carla%20Barbosa%20Est%C3%BAdio!%20Gostaria%20de%20finalizar%20meu%20pedido:%0A%0A${itemsList}%0A%0A*Total:%20R$%20${total}*`;
  window.open(`https://wa.me/5500000000000?text=${text}`, '_blank');
}

// ===== TOAST =====
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
