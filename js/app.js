// Dados da aplicação
let cart = [];
// Produtos disponíveis
let products = [
  {
      id: 1,
      name: "Geleia de Maracujá",
      price: 25.00,
      category: "geleias",
      producer: "Doce Sabor",
rating: 5.0,
      reviews: 0,
      image: "imagens/img-geleiademaracuja.jpg",
      unit: "500ml",
      description: "Descubra o sabor tropical da nossa <b>Geleia de Maracujá</b> artesanal! Preparada com maracujás frescos e selecionados, ela traz o equilíbrio perfeito entre o doce e o azedinho da fruta. Sem conservantes, é ideal para acompanhar pães, torradas, queijos ou dar um toque especial em sobremesas. Cada pote de 500ml é feito com carinho, levando o frescor e a tradição do campo direto para sua mesa. Experimente e surpreenda-se com essa explosão de sabor!"
  },
  {
      id: 2,
      name: "Alfaces",
      price: 3.99,
      category: "salad",
producer: "Horta Verde",
      rating: 4.5,
      reviews: 9,
      image: "imagens/img-alfaces.jpg",
      unit: "unidade",
      description: "Nossas <b>Alfaces</b> são cultivadas com todo cuidado para garantir folhas frescas, crocantes e cheias de sabor. Perfeitas para saladas, sanduíches ou como acompanhamento, trazem leveza e saúde para o seu dia a dia. Vendidas por unidade, são colhidas no ponto ideal para você levar o melhor da horta para sua mesa!"
  },
  {
      id: 3,
      name: "Rúculas",
      price: 3.99,
      category: "salad",
producer: "Horta Verde",
      rating: 4.7,
      reviews: 12,
      image: "imagens/img-ruculas.jpg",
      unit: "unidade",
      description: "Aproveite a delicadeza e o sabor marcante das nossas <b>Rúculas</b> frescas! Colhidas diariamente, são ideais para saladas, pizzas, sanduíches ou para dar um toque especial em pratos quentes. Fonte de nutrientes e com aquele leve amargor característico, nossas rúculas vão conquistar seu paladar. Vendidas por unidade, sempre fresquinhas para você!"
  },
  {
      id: 4,
      name: "Agrião",
      price: 3.99,
      category: "salad",
producer: "Fazenda Feliz",
      rating: 4.3,
      reviews: 6,
      image: "imagens/img-agriao.jpg",
      unit: "unidade",
      description: "O <b>Agrião</b> fresco é perfeito para quem busca sabor e saúde na mesma folha! Rico em vitaminas e minerais, tem sabor levemente picante e textura crocante. Ideal para saladas, sucos verdes ou como acompanhamento de pratos quentes. Vendido por unidade, sempre colhido no ponto certo para garantir frescor e qualidade na sua mesa!"
  },
  {
      id: 5,
      name: "Acelga",
      price: 4.99,
      category: "salad",
producer: "Sítio Boa Vista",
      rating: 4.6,
      reviews: 8,
      image: "imagens/img-acelga.jpg",
      unit: "unidade",
      description: "<b>Acelga</b> fresca, crocante e de folhas macias, perfeita para saladas, refogados ou pratos orientais. Vendida por unidade, colhida no ponto ideal para garantir sabor e qualidade."
  },
  {
      id: 6,
      name: "Repolho",
      price: 2.99,
      category: "salad",
      producer: "Sítio Boa Vista",
rating: 4.9,
      reviews: 15,
      image: "imagens/img-repolho.jpg",
      unit: "kg",
      description: "<b>Repolho</b> fresco, firme e de folhas crocantes, ideal para saladas, refogados e pratos tradicionais. Rico em nutrientes, é colhido diariamente para garantir sabor, qualidade e frescor na sua mesa. Vendido por quilo."
  },
  {
      id: 7,
      name: "Bananas",
      price: 3.99,
      category: "frutas",
      producer: "Fazenda Santa Clara",
rating: 4.4,
      reviews: 11,
      image: "imagens/img-bananas.jpg",
      unit: "kg",
      description: "<b>Bananas</b> frescas, docinhas e colhidas no ponto ideal de maturação. Perfeitas para consumo in natura, vitaminas, sobremesas ou receitas caseiras. Fonte natural de energia, potássio e fibras. Vendidas por quilo para garantir sempre o melhor sabor na sua mesa!"
  },
  {
      id: 8,
      name: "Morangos",
      price: 25.00,
      category: "frutas",
      producer: "Sítio Boa Vista",
rating: 4.2,
      reviews: 7,
      image: "imagens/img-morangos.jpg",
      unit: "kg",
      description: "<b>Morangos</b> frescos, colhidos diretamente da horta, selecionados um a um para garantir doçura, suculência e qualidade. Ideais para consumo in natura, sobremesas, geleias ou sucos. Rico em vitamina C e antioxidantes. Vendidos por quilo para você levar o melhor da produção local para sua casa!"
  },
  {
      id: 9,
      name: "Mangas",
      price: 4.49,
      category: "frutas",
      producer: "Chácara do Pedrinho",
rating: 4.8,
      reviews: 13,
      image: "imagens/img-mangas.jpg",
      unit: "kg",
      description: "<b>Mangas</b> frescas, suculentas e naturalmente doces, colhidas no auge da maturação para garantir sabor e aroma irresistíveis. Perfeitas para consumo in natura, sucos, sobremesas ou saladas de frutas. Fonte de vitaminas, fibras e energia. Vendidas por quilo para você aproveitar o melhor da estação!"
  },
  {
      id: 10,
      name: "Queijo Colonial",
      price: 40.00,
      category: "queijos",
      producer: "Propriedade Dona Ana",
rating: 4.7,
      reviews: 14,
      image: "imagens/img-queijocolonialum.jpg",
      unit: "kg",
      description: "<b>Queijo Colonial</b> artesanal, produzido com leite fresco e selecionado, maturado para garantir textura macia e sabor marcante. Ideal para degustar puro, em tábuas de frios, lanches ou receitas especiais. Uma tradição da roça que leva qualidade e autenticidade à sua mesa. Vendido por quilo."
  },
  {
      id: 11,
      name: "Queijo Colonial",
      price: 35.00,
      category: "queijos",
producer: "Chácara do Pedrinho",
      rating: 4.6,
      reviews: 10,
      image: "imagens/img-queijocolonialdois.jpg",
      unit: "kg",
      description: "<b>Queijo Colonial</b> tradicional, feito artesanalmente com leite fresco da fazenda. Sabor suave, textura macia e aroma irresistível, perfeito para acompanhar cafés, pães ou compor tábuas de frios. Uma opção deliciosa e versátil para todas as ocasiões. Vendido por quilo, direto do produtor para sua mesa!"
  },
  {
      id: 12,
      name: "Geleia de Goiaba",
      price: 25.00,
      category: "geleias",
      producer: "Doce Sabor",
rating: 4.9,
      reviews: 16,
      image: "imagens/img-geleiadegoiaba.jpg",
      unit: "500ml",
      description: "Descubra o sabor irresistível da nossa <b>Geleia de Goiaba</b> artesanal! Feita com goiabas frescas selecionadas, preparada lentamente para preservar o aroma e a textura da fruta, sem adição de conservantes. Ideal para acompanhar pães, torradas, queijos ou dar um toque especial em sobremesas. Cada pote de 500ml é puro carinho e tradição, trazendo o melhor da fruta direto para sua mesa. Experimente essa delícia e surpreenda-se com o verdadeiro sabor caseiro!"
  },
  {
      id: 13,
      name: "Doce de Mamão",
      price: 25.00,
      category: "geleias",
      producer: "Doces da Vovó",
rating: 4.5,
      reviews: 8,
      image: "imagens/img-docedemamao.png",
      unit: "1kg",
      description: "Experimente o nosso <b>Doce de Mamão</b> artesanal, preparado com mamões frescos e selecionados, cozidos lentamente até atingir o ponto perfeito de sabor e textura. Sem conservantes, é uma verdadeira iguaria da culinária caseira, ideal para acompanhar pães, torradas, queijos ou ser apreciado puro. Cada pote de 1kg é feito com carinho, trazendo o gostinho da fazenda direto para sua mesa. Surpreenda-se com a doçura natural e a tradição em cada colherada!"
  },
  {
      id: 14,
      name: "Doce de Abóbora",
      price: 22.00,
      producer: "Doces da Vovó",
category: "geleias",
      rating: 4.7,
      reviews: 12,
      image: "imagens/img-docedeabobora.jpg",
      unit: "1kg",
      description: "Delicie-se com o nosso <b>Doce de Abóbora</b> artesanal, feito com abóboras frescas e selecionadas, cozidas lentamente com açúcar na medida certa para realçar o sabor natural e a cremosidade. Sem conservantes, é perfeito para acompanhar pães, torradas, queijos ou ser saboreado puro. Cada pote de 1kg traz o verdadeiro gostinho da roça, preparado com carinho e tradição para adoçar seus melhores momentos!"
  },
  {
      id: 15,
      name: "Cenouras",
      price: 2.99,
      category: "verduras",
      rating: 4.8,
      reviews: 11,
      image: "imagens/img-cenouras.jpg",
      unit: "kg",
      description: "Nossas <b>Cenouras</b> são fresquinhas, crocantes e cheias de sabor! Colhidas diretamente da horta, são perfeitas para saladas, sucos, refogados ou para dar aquele toque especial em suas receitas. Ricas em vitaminas e nutrientes, garantem mais saúde e cor no seu prato. Vendidas por quilo, sempre com a qualidade que você merece!"
  },
  {
      id: 16,
      name: "Beringelas",
      price: 4.99,
      category: "verduras",
producer: "Chácara do Pedrinho",
      rating: 4.6,
      reviews: 9,
      image: "imagens/img-beringelas.jpg",
      unit: "kg",
      description: "Nossas <b>Beringelas</b> são frescas, firmes e de cor vibrante! Perfeitas para grelhados, assados, refogados ou para preparar deliciosas receitas como caponata e lasanha. Ricas em fibras e nutrientes, trazem mais sabor e saúde para o seu dia a dia. Vendidas por quilo, sempre com a qualidade e o frescor que você merece!"
  },
  {
      id: 17,
      name: "Brócolis",
      price: 4.99,
      category: "verduras",
      producer: "Horta Verde",
rating: 4.4,
      reviews: 7,
      image: "imagens/img-brocolis.jpg",
      unit: "unidade",
      description: "O <b>Brócolis</b> fresquinho é indispensável para quem busca sabor e saúde! Rico em fibras, vitaminas e minerais, é perfeito para saladas, refogados, tortas ou como acompanhamento de pratos variados. Com textura macia e sabor suave, vai conquistar toda a família. Vendido por unidade, sempre colhido no ponto certo para garantir qualidade e frescor na sua mesa!"
  },
  {
      id: 18,
      name: "Mandiocas",
      price: 6.99,
      category: "verduras",
producer: "Fazenda Feliz",
      rating: 4.3,
      reviews: 6,
      image: "imagens/img-mandioca.jpg",
      unit: "kg",
      description: "Nossas <b>Mandiocas</b> são selecionadas, macias e de excelente qualidade! Perfeitas para cozinhar, fritar, assar ou preparar aquele purê cremoso. Fonte de energia e muito sabor, são ideais para receitas tradicionais e para inovar na cozinha. Vendidas por quilo, sempre fresquinhas para garantir o melhor resultado nos seus pratos!"
  },
  {
    id: 19,
    name: "Mel Puro",
    price: 20.00,
    category: "geleias",
    rating: 4.9,
    reviews: 37,
    image: "imagens/img-mel.jpg",
    unit: "kg",
    description: "Nosso <b>Mel Puro</b> é 100% natural, extraído diretamente dos favos e embalado com todo cuidado para preservar seu sabor e propriedades. Ideal para adoçar pães, frutas, chás ou receitas especiais, traz o melhor da natureza para sua mesa. Experimente a pureza e a doçura incomparável do mel produzido na Fazenda Feliz, o qual é vendido por quilo."
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
  setupProductFilters();
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
      <h3 class="text-black font-extrabold text-lg mb-2">${product.name}</h3>
      <p class="text-gray-600 text-sm mb-2">${getCategoryName(product.category)}</p>
      <div class="rating">
        ${stars}
        <span>(${product.reviews || 0})</span>
      </div>
      <p class="price">R$ ${product.price.toFixed(2).replace('.', ',')}/${product.unit}</p>
      <p class="text-gray-600 text-sm mb-2">Produtor: ${product.producer || ''}</p>
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

// Substituir setupProductFilters por uma versão que usa os botões de categoria
function setupProductFilters() {
  const categoryButtons = document.querySelectorAll('[data-category]');
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const selected = this.getAttribute('data-category');
      filterProductsByCategory(selected);
    });
  });
}

function filterProductsByCategory(category) {
  console.log('Filtro funcionando!', category);
  let filteredProducts;
  if (category === 'all') {
    filteredProducts = products;
  } else if (category === 'vegetables') {
    filteredProducts = products.filter(p => p.category === 'hortalicas');
  } else if (category === 'fruits') {
    filteredProducts = products.filter(p => p.category === 'frutas');
  } else if (category === 'cheese') {
    filteredProducts = products.filter(p => p.category === 'queijos');
  } else if (category === 'salad') {
    filteredProducts = products.filter(p => p.category === 'verduras');
  } else if (category === 'geleias') {
    filteredProducts = products.filter(p => p.category === 'geleias');
  } else {
    filteredProducts = products;
  }
  displayFilteredProducts(filteredProducts);
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
    animation: slideIn 0.3s ease;
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
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
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