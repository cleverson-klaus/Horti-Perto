// Dados da aplicação
let cart = [];
let products = [
  {
    id: 1,
    name: "Tomates Frescos",
    price: 8.90,
    unit: "kg",
    category: "hortalicas",
    producer: "João Silva",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300",
    description: "Tomates frescos colhidos diariamente"
  },
  {
    id: 2,
    name: "Alface Orgânica",
    price: 3.50,
    unit: "un",
    category: "verduras",
    producer: "Maria Santos",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300",
    description: "Alface orgânica cultivada sem agrotóxicos"
  },
  {
    id: 3,
    name: "Queijo Colonial",
    price: 25.00,
    unit: "kg",
    category: "queijos",
    producer: "Fazenda Santa Clara",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300",
    description: "Queijo colonial artesanal"
  },
  {
    id: 4,
    name: "Bananas Prata",
    price: 4.50,
    unit: "kg",
    category: "frutas",
    producer: "Sítio Boa Vista",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
    description: "Bananas prata frescas"
  },
  {
    id: 5,
    name: "Cenouras Orgânicas",
    price: 6.80,
    unit: "kg",
    category: "hortalicas",
    producer: "Horta Verde",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300",
    description: "Cenouras orgânicas frescas"
  },
  {
    id: 6,
    name: "Geleia de Morango",
    price: 12.00,
    unit: "pote",
    category: "geleias",
    producer: "Doce Sabor",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300",
    description: "Geleia artesanal de morango"
  }
];

let saldos = {
  vendedor: 1250.50,
  entregador: 320.75
};

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  loadProducts();
  updateCartDisplay();
  updateSaldoDisplay();
});

// Função de inicialização
function initializeApp() {
  // Navegação mobile
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Links de navegação
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      showSection(targetId);
      
      // Fechar menu mobile
      if (hamburger) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });

  // Formulários
  setupFormHandlers();
  
  // Filtros de produtos
  setupProductFilters();
  
  // Métodos de pagamento
  setupPaymentMethods();
}

// Navegação entre seções
function showSection(sectionId) {
  // Esconder todas as seções
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  // Mostrar seção selecionada
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  
  // Atualizar URL
  history.pushState(null, null, `#${sectionId}`);
}

// Carregar produtos no catálogo
function loadProducts() {
  const catalog = document.getElementById('products-catalog');
  if (!catalog) return;
  
  catalog.innerHTML = '';
  
  products.forEach(product => {
    const productCard = createProductCard(product);
    catalog.appendChild(productCard);
  });
}

// Criar card de produto
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  
  const stars = generateStars(product.rating);
  
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product-info">
      <h3>${product.name}</h3>
      <div class="rating">
        ${stars}
        <span>(${product.rating})</span>
      </div>
      <p class="price">R$ ${product.price.toFixed(2).replace('.', ',')}/${product.unit}</p>
      <p class="producer">Produtor: ${product.producer}</p>
      <p class="description">${product.description}</p>
      <button class="btn btn-primary" onclick="addToCart('${product.name}', ${product.price}, '${product.unit}')">
        Adicionar ao Carrinho
      </button>
    </div>
  `;
  
  return card;
}

// Gerar estrelas de avaliação
function generateStars(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
  }
  
  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }
  
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>';
  }
  
  return stars;
}

// Adicionar ao carrinho
function addToCart(productName, price, unit) {
  const existingItem = cart.find(item => item.name === productName);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: productName,
      price: price,
      unit: unit,
      quantity: 1
    });
  }
  
  updateCartDisplay();
  showNotification(`${productName} adicionado ao carrinho!`);
}

// Atualizar exibição do carrinho
function updateCartDisplay() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  
  if (!cartItems || !cartTotal) return;
  
  if (cart.length === 0) {
    cartItems.innerHTML = '<p>Seu carrinho está vazio</p>';
    cartTotal.textContent = '0,00';
    return;
  }
  
  let total = 0;
  cartItems.innerHTML = '';
  
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>R$ ${item.price.toFixed(2).replace('.', ',')}/${item.unit}</p>
      </div>
      <div class="cart-item-actions">
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
        </div>
        <p>R$ ${itemTotal.toFixed(2).replace('.', ',')}</p>
        <button class="btn btn-secondary" onclick="removeFromCart(${index})">Remover</button>
      </div>
    `;
    
    cartItems.appendChild(cartItem);
  });
  
  cartTotal.textContent = total.toFixed(2).replace('.', ',');
}

// Atualizar quantidade no carrinho
function updateQuantity(index, change) {
  cart[index].quantity += change;
  
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  
  updateCartDisplay();
}

// Remover do carrinho
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
  showNotification('Item removido do carrinho');
}

// Limpar carrinho
function clearCart() {
  cart = [];
  updateCartDisplay();
  showNotification('Carrinho limpo');
}

// Configurar formulários
function setupFormHandlers() {
  // Formulário de vendedor
  const vendedorForm = document.getElementById('vendedor-form');
  if (vendedorForm) {
    vendedorForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleVendedorSubmit();
    });
  }
  
  // Formulário de entregador
  const entregadorForm = document.getElementById('entregador-form');
  if (entregadorForm) {
    entregadorForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleEntregadorSubmit();
    });
  }
  
  // Formulário de usuário
  const usuarioForm = document.getElementById('usuario-form');
  if (usuarioForm) {
    usuarioForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleUsuarioSubmit();
    });
  }
}

// Handler do formulário de vendedor
function handleVendedorSubmit() {
  const formData = {
    cpf: document.getElementById('vendedor-cpf').value,
    alvara: document.getElementById('vendedor-alvara').files[0],
    endereco: document.getElementById('vendedor-endereco').value,
    email: document.getElementById('vendedor-email').value,
    telefone: document.getElementById('vendedor-telefone').value,
    cpp: document.getElementById('vendedor-cpp').value
  };
  
  // Validação básica
  if (!formData.cpf || !formData.endereco || !formData.email || !formData.telefone || !formData.cpp) {
    showNotification('Por favor, preencha todos os campos obrigatórios', 'error');
    return;
  }
  
  // Simular envio
  showNotification('Cadastro de vendedor enviado com sucesso! Aguarde nossa análise.', 'success');
  document.getElementById('vendedor-form').reset();
}

// Handler do formulário de entregador
function handleEntregadorSubmit() {
  const formData = {
    nome: document.getElementById('entregador-nome').value,
    endereco: document.getElementById('entregador-endereco').value,
    email: document.getElementById('entregador-email').value,
    telefone: document.getElementById('entregador-telefone').value,
    cnh: document.getElementById('entregador-cnh').value,
    categoria: document.getElementById('entregador-categoria').value,
    veiculo: document.getElementById('entregador-veiculo').value,
    seguro: document.getElementById('entregador-seguro').files[0],
    foto: document.getElementById('entregador-foto').files[0],
    conta: document.getElementById('entregador-conta').value
  };
  
  // Validação básica
  if (!formData.nome || !formData.endereco || !formData.email || !formData.telefone || 
      !formData.cnh || !formData.categoria || !formData.veiculo || !formData.conta) {
    showNotification('Por favor, preencha todos os campos obrigatórios', 'error');
    return;
  }
  
  // Simular envio
  showNotification('Cadastro de entregador enviado com sucesso! Aguarde nossa análise.', 'success');
  document.getElementById('entregador-form').reset();
}

// Handler do formulário de usuário
function handleUsuarioSubmit() {
  const formData = {
    nome: document.getElementById('usuario-nome').value,
    email: document.getElementById('usuario-email').value,
    telefone: document.getElementById('usuario-telefone').value,
    endereco: document.getElementById('usuario-endereco').value,
    senha: document.getElementById('usuario-senha').value,
    confirmarSenha: document.getElementById('usuario-confirmar-senha').value
  };
  
  // Validação básica
  if (!formData.nome || !formData.email || !formData.telefone || !formData.endereco || 
      !formData.senha || !formData.confirmarSenha) {
    showNotification('Por favor, preencha todos os campos obrigatórios', 'error');
    return;
  }
  
  if (formData.senha !== formData.confirmarSenha) {
    showNotification('As senhas não coincidem', 'error');
    return;
  }
  
  // Simular cadastro
  showNotification('Cadastro realizado com sucesso! Bem-vindo ao HortiPerto!', 'success');
  document.getElementById('usuario-form').reset();
}

// Configurar filtros de produtos
function setupProductFilters() {
  const searchInput = document.getElementById('search-products');
  const categoryFilter = document.getElementById('category-filter');
  
  if (searchInput) {
    searchInput.addEventListener('input', filterProducts);
  }
  
  if (categoryFilter) {
    categoryFilter.addEventListener('change', filterProducts);
  }
}

// Filtrar produtos
function filterProducts() {
  const searchTerm = document.getElementById('search-products').value.toLowerCase();
  const selectedCategory = document.getElementById('category-filter').value;
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                         product.producer.toLowerCase().includes(searchTerm);
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  displayFilteredProducts(filteredProducts);
}

// Exibir produtos filtrados
function displayFilteredProducts(filteredProducts) {
  const catalog = document.getElementById('products-catalog');
  if (!catalog) return;
  
  catalog.innerHTML = '';
  
  if (filteredProducts.length === 0) {
    catalog.innerHTML = '<p>Nenhum produto encontrado</p>';
    return;
  }
  
  filteredProducts.forEach(product => {
    const productCard = createProductCard(product);
    catalog.appendChild(productCard);
  });
}

// Configurar métodos de pagamento
function setupPaymentMethods() {
  const paymentOptions = document.querySelectorAll('input[name="payment"]');
  
  paymentOptions.forEach(option => {
    option.addEventListener('change', function() {
      const pixPayment = document.getElementById('pix-payment');
      const cardPayment = document.getElementById('card-payment');
      
      if (this.value === 'pix') {
        pixPayment.style.display = 'block';
        cardPayment.style.display = 'none';
      } else {
        pixPayment.style.display = 'none';
        cardPayment.style.display = 'block';
      }
    });
  });
}

// Aplicar cupom
function aplicarCupom() {
  const cupomCode = document.getElementById('cupom-code').value;
  
  if (!cupomCode) {
    showNotification('Digite um código de cupom', 'error');
    return;
  }
  
  // Simular validação de cupom
  if (cupomCode.toLowerCase() === 'hortiperto10') {
    showNotification('Cupom aplicado! 10% de desconto', 'success');
    updateCheckoutTotal(0.1); // 10% de desconto
  } else {
    showNotification('Cupom inválido', 'error');
  }
}

// Atualizar total do checkout
function updateCheckoutTotal(discount = 0) {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = total * discount;
  const finalTotal = total - discountAmount;
  
  document.getElementById('total-final').textContent = finalTotal.toFixed(2).replace('.', ',');
}

// Confirmar pagamento
function confirmarPagamento() {
  if (cart.length === 0) {
    showNotification('Adicione produtos ao carrinho primeiro', 'error');
    return;
  }
  
  const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
  
  if (paymentMethod === 'cartao') {
    const cardNumber = document.getElementById('card-number').value;
    const cardExpiry = document.getElementById('card-expiry').value;
    const cardCvv = document.getElementById('card-cvv').value;
    const cardName = document.getElementById('card-name').value;
    
    if (!cardNumber || !cardExpiry || !cardCvv || !cardName) {
      showNotification('Preencha todos os dados do cartão', 'error');
      return;
    }
  }
  
  // Simular processamento
  showNotification('Processando pagamento...', 'info');
  
  setTimeout(() => {
    showNotification('Pagamento confirmado! Seu pedido foi realizado com sucesso!', 'success');
    cart = [];
    updateCartDisplay();
    showSection('home');
  }, 2000);
}

// Resgatar valor
function resgatarValor(tipo) {
  const saldo = saldos[tipo];
  
  if (saldo <= 0) {
    showNotification('Saldo insuficiente para resgate', 'error');
    return;
  }
  
  // Simular resgate
  showNotification(`Resgate de R$ ${saldo.toFixed(2).replace('.', ',')} solicitado!`, 'success');
  saldos[tipo] = 0;
  updateSaldoDisplay();
}

// Atualizar exibição dos saldos
function updateSaldoDisplay() {
  const saldoVendedor = document.getElementById('saldo-vendedor');
  const saldoEntregador = document.getElementById('saldo-entregador');
  
  if (saldoVendedor) {
    saldoVendedor.textContent = saldos.vendedor.toFixed(2).replace('.', ',');
  }
  
  if (saldoEntregador) {
    saldoEntregador.textContent = saldos.entregador.toFixed(2).replace('.', ',');
  }
}

// Sistema de notificações
function showNotification(message, type = 'info') {
  // Remover notificação existente
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Criar nova notificação
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span>${message}</span>
      <button onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;
  
  // Adicionar estilos
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
    color: white;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    z-index: 10000;
    max-width: 300px;
            /* Removida animação */
  `;
  
  notification.querySelector('.notification-content').style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  `;
  
  notification.querySelector('button').style.cssText = `
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;
  `;
  
  // Adicionar animação CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        /* Removida transformação */
        opacity: 0;
      }
      to {
        /* Removida transformação */
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(notification);
  
  // Auto-remover após 5 segundos
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

// Função para atualizar checkout quando navegar para a página
function updateCheckoutDisplay() {
  const checkoutItems = document.getElementById('checkout-items');
  const freteTaxa = document.getElementById('frete-taxa');
  
  if (!checkoutItems) return;
  
  if (cart.length === 0) {
    checkoutItems.innerHTML = '<p>Nenhum item no carrinho</p>';
    return;
  }
  
  let total = 0;
  checkoutItems.innerHTML = '';
  
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    
    const checkoutItem = document.createElement('div');
    checkoutItem.style.cssText = `
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0;
      border-bottom: 1px solid #e9ecef;
    `;
    checkoutItem.innerHTML = `
      <span>${item.name} x${item.quantity}</span>
      <span>R$ ${itemTotal.toFixed(2).replace('.', ',')}</span>
    `;
    
    checkoutItems.appendChild(checkoutItem);
  });
  
  // Adicionar total
  const totalItem = document.createElement('div');
  totalItem.style.cssText = `
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    font-weight: bold;
    border-top: 2px solid #e9ecef;
  `;
  totalItem.innerHTML = `
    <span>Subtotal:</span>
    <span>R$ ${total.toFixed(2).replace('.', ',')}</span>
  `;
  
  checkoutItems.appendChild(totalItem);
  
  // Atualizar taxa de frete
  if (freteTaxa) {
    const freteOption = document.getElementById('frete-option');
    if (freteOption && freteOption.value === 'entrega') {
      freteTaxa.textContent = '8,00';
    } else {
      freteTaxa.textContent = '0,00';
    }
  }
  
  updateCheckoutTotal();
}

// Event listener para mudança na opção de frete
document.addEventListener('DOMContentLoaded', function() {
  const freteOption = document.getElementById('frete-option');
  if (freteOption) {
    freteOption.addEventListener('change', function() {
      const freteTaxa = document.getElementById('frete-taxa');
      if (freteTaxa) {
        if (this.value === 'entrega') {
          freteTaxa.textContent = '8,00';
        } else {
          freteTaxa.textContent = '0,00';
        }
      }
    });
  }
});

// Função para atualizar checkout quando entrar na seção
function showSection(sectionId) {
  // Esconder todas as seções
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  // Mostrar seção selecionada
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    
    // Atualizar checkout se necessário
    if (sectionId === 'pagamento') {
      updateCheckoutDisplay();
    }
  }
  
  // Atualizar URL
  history.pushState(null, null, `#${sectionId}`);
} 