// HortiPerto - JavaScript Principal
// Funcionalidades unificadas para todas as abas da plataforma

// ========================================
// DADOS GLOBAIS DA APLICAÇÃO
// ========================================

// Carrinho de compras
let cart = [];
let cartTotal = 0;

// Produtos disponíveis
let products = [
    {
        id: 1,
        name: "Cesta de Legumes Orgânicos",
        price: 25.90,
        category: "vegetables",
        rating: 4.5,
        reviews: 24,
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: "Seleção de legumes frescos da fazenda familiar"
    },
    {
        id: 2,
        name: "Queijo Artesanal",
        price: 32.50,
        category: "cheese",
        rating: 4.0,
        reviews: 18,
        image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: "Queijo colonial feito com leite fresco"
    },
    {
        id: 3,
        name: "Salada Pronta",
        price: 15.90,
        category: "salad",
        rating: 5.0,
        reviews: 36,
        image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: "Mix de folhas lavadas e prontas para consumo"
    },
    {
        id: 4,
        name: "Geleia Caseira de Morango",
        price: 18.50,
        category: "jam",
        rating: 4.5,
        reviews: 29,
        image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: "Geleia artesanal sem conservantes"
    },
    {
        id: 5,
        name: "Cesta de Frutas da Estação",
        price: 28.90,
        category: "fruits",
        rating: 4.0,
        reviews: 21,
        image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: "Seleção de frutas frescas colhidas no dia"
    },
    {
        id: 6,
        name: "Tomate Cereja Orgânico",
        price: 12.90,
        category: "vegetables",
        rating: 5.0,
        reviews: 42,
        image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        description: "Tomates cereja cultivados sem agrotóxicos"
    },
    {
        id: 7,
        name: "Queijo Minas Frescal",
        price: 24.90,
        category: "cheese",
        rating: 4.5,
        reviews: 19,
        image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: "Queijo minas tradicional feito artesanalmente"
    },
    {
        id: 8,
        name: "Geleia de Pimenta",
        price: 19.90,
        category: "jam",
        rating: 4.0,
        reviews: 15,
        image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: "Geleia artesanal com um toque picante"
    }
];

// Produtos cadastrados pelos vendedores
let sellerProducts = [
    {
        id: 1,
        name: "Tomates Frescos",
        category: "hortalicas",
        price: 8.90,
        unit: "kg",
        quantity: 50,
        description: "Tomates frescos colhidos diariamente da nossa horta",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300",
        organic: true,
        dateCreated: "2024-01-15",
        status: "ativo"
    },
    {
        id: 2,
        name: "Queijo Colonial",
        category: "queijos",
        price: 25.00,
        unit: "kg",
        quantity: 10,
        description: "Queijo colonial artesanal feito com leite fresco",
        image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300",
        organic: false,
        dateCreated: "2024-01-10",
        status: "ativo"
    }
];

// Saldos dos usuários
let balances = {
    seller: 1250.50,
    delivery: 320.75
};

// ========================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadProducts();
    updateCartDisplay();
    setupCEPValidation();
    setupCPFValidation(); // Configurar validação de CPF
    setupFileUploads(); // Configurar upload de arquivos
    
    // Inicializar efeitos 3D e animações
    createParticles();
    initParallax();
    init3DHover();
    animateOnScroll();
    initNeonButtons();
    initLogoRotation();
    
    // Adicionar efeito de onda aos botões
    const buttons = document.querySelectorAll('.btn-neon, .action-btn');
    buttons.forEach(button => {
        button.addEventListener('click', createRippleEffect);
    });
    
    // Efeito de digitação no título principal
    const mainTitle = document.querySelector('.glow-text');
    if (mainTitle && mainTitle.textContent.includes('Bem-vindo')) {
        const originalText = mainTitle.textContent;
        setTimeout(() => {
            typeWriter(mainTitle, originalText, 80);
        }, 1000);
    }
    setupLoginModal();
});

function initializeApp() {
    // Navegação entre abas
    setupTabNavigation();
    
    // Menu mobile
    setupMobileMenu();
    
    // Formulários
    setupFormHandlers();
    
    // Filtros de produtos
    setupProductFilters();
    
    // Carrinho
    setupCartHandlers();
    
    // Passos dos formulários
    setupFormSteps();
}

// ========================================
// NAVEGAÇÃO E INTERFACE
// ========================================

function setupTabNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.getAttribute('data-tab');
            showTab(targetTab);
            
            // Fechar menu mobile
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
}

function showTab(tabId) {
    // Esconder todas as abas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Mostrar aba selecionada
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
        
        // Se for a aba de entregador, configurar uploads
        if (tabId === 'delivery-register') {
            setTimeout(() => {
                setupFileUploads();
            }, 100);
        }
    }
    
    // Atualizar navegação ativa
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-tab') === tabId) {
            link.classList.add('active');
        }
    });
    
    // Carregar conteúdo específico da aba
    if (tabId === 'seller-register') {
        loadSellerProducts();
    } else if (tabId === 'products') {
        loadProducts();
    }
}

function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// ========================================
// PRODUTOS E CATÁLOGO
// ========================================

function loadProducts() {
    const productsContainer = document.querySelector('#products .grid');
    if (!productsContainer) return;
    
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-item bg-white rounded-lg shadow-md overflow-hidden transition duration-300';
    card.setAttribute('data-category', product.category);
    
    const stars = generateStars(product.rating);
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
        <div class="p-4">
            <h3 class="font-bold text-lg mb-2">${product.name}</h3>
            <div class="flex items-center mb-2">
                <div class="rating-stars">
                    ${stars}
                </div>
                <span class="text-gray-600 text-sm ml-2">(${product.reviews})</span>
            </div>
            <p class="text-gray-700 mb-3">${product.description}</p>
            <div class="flex justify-between items-center">
                <span class="font-bold text-green-700">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                <button class="add-to-cart bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 transition" data-product-id="${product.id}">+ Carrinho</button>
            </div>
        </div>
    `;
    
    return card;
}

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

function setupProductFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterProducts(category);
            
            // Atualizar botões ativos
            categoryButtons.forEach(btn => {
                btn.classList.remove('bg-green-600', 'text-white');
                btn.classList.add('bg-gray-200');
            });
            
            this.classList.remove('bg-gray-200');
            this.classList.add('bg-green-600', 'text-white');
        });
    });
}

function filterProducts(category) {
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// ========================================
// CARRINHO DE COMPRAS
// ========================================

function setupCartHandlers() {
    // Adicionar ao carrinho
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-product-id'));
            addToCart(productId);
        }
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showNotification(`${product.name} adicionado ao carrinho!`, 'success');
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const mobileCartCount = document.getElementById('mobile-cart-count');
    
    if (!cartContainer) return;
    
    // Atualizar contador
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
    if (mobileCartCount) mobileCartCount.textContent = totalItems;
    
    // Atualizar lista de itens
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="text-center text-gray-500 py-8">Seu carrinho está vazio</p>';
        return;
    }
    
    cartContainer.innerHTML = '';
    cartTotal = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        cartTotal += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item flex justify-between items-center p-4 border-b border-gray-200';
        cartItem.innerHTML = `
            <div class="flex-1">
                <h4 class="font-semibold">${item.name}</h4>
                <p class="text-gray-600">R$ ${item.price.toFixed(2).replace('.', ',')} x ${item.quantity}</p>
            </div>
            <div class="flex items-center space-x-2">
                <button class="quantity-btn bg-gray-200 text-gray-700 px-2 py-1 rounded" onclick="updateQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn bg-gray-200 text-gray-700 px-2 py-1 rounded" onclick="updateQuantity(${index}, 1)">+</button>
                <button class="remove-item text-red-500 hover:text-red-700" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        cartContainer.appendChild(cartItem);
    });
    
    // Atualizar total
    const cartTotalElement = document.getElementById('cart-total');
    const cartTotalWithShippingElement = document.getElementById('cart-total-with-shipping');
    
    if (cartTotalElement) {
        cartTotalElement.textContent = `R$ ${cartTotal.toFixed(2).replace('.', ',')}`;
    }
    
    if (cartTotalWithShippingElement) {
        const shippingCost = cart.length > 0 ? 5.00 : 0.00;
        const totalWithShipping = cartTotal + shippingCost;
        cartTotalWithShippingElement.textContent = `R$ ${totalWithShipping.toFixed(2).replace('.', ',')}`;
    }
}

function updateQuantity(index, change) {
    if (index < 0 || index >= cart.length) return;
    
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
        showNotification('Item removido do carrinho', 'info');
    }
    
    updateCartDisplay();
}

function removeFromCart(index) {
    if (index < 0 || index >= cart.length) return;
    
    const removedItem = cart[index];
    cart.splice(index, 1);
    updateCartDisplay();
    showNotification(`${removedItem.name} removido do carrinho`, 'info');
}

function clearCart() {
    cart = [];
    updateCartDisplay();
    showNotification('Carrinho limpo', 'info');
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Adicione itens ao carrinho antes de finalizar a compra', 'error');
        return;
    }
    
    showNotification('Redirecionando para o checkout...', 'success');
    // Aqui você pode adicionar a lógica para ir para a página de checkout
    // Por enquanto, apenas mostra uma notificação
}

// ========================================
// FORMULÁRIOS E CADASTROS
// ========================================

function setupFormHandlers() {
    // Formulário de vendedor
    const sellerForm = document.getElementById('seller-form');
    if (sellerForm) {
        sellerForm.addEventListener('submit', handleSellerSubmit);
    }
    
    // Formulário de entregador
    const deliveryForm = document.getElementById('delivery-form');
    if (deliveryForm) {
        deliveryForm.addEventListener('submit', handleDeliverySubmit);
    }
    
    // Formulário de usuário
    const userForm = document.getElementById('user-form');
    if (userForm) {
        userForm.addEventListener('submit', handleUserSubmit);
    }
}

function setupFormSteps() {
    // Botões de próximo
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('next-step')) {
            const currentStep = e.target.closest('.form-step');
            const nextStepNum = e.target.getAttribute('data-next');
            goToFormStep(currentStep, nextStepNum);
        }
        
        if (e.target.classList.contains('prev-step')) {
            const currentStep = e.target.closest('.form-step');
            const prevStepNum = e.target.getAttribute('data-prev');
            goToFormStep(currentStep, prevStepNum);
        }
    });
}

function goToFormStep(currentStep, targetStepNum) {
    // Esconder passo atual
    currentStep.classList.remove('active');
    
    // Mostrar passo alvo
    const targetStep = currentStep.parentElement.querySelector(`[data-step="${targetStepNum}"]`);
    if (targetStep) {
        targetStep.classList.add('active');
    }
}

function handleSellerSubmit(e) {
    e.preventDefault();
    
    // Validação básica
    const requiredFields = ['seller-name', 'seller-doc', 'seller-email', 'seller-phone', 'seller-cpp'];
    const isValid = validateRequiredFields(requiredFields);
    
    if (!isValid) {
        showNotification('Por favor, preencha todos os campos obrigatórios', 'error');
        return;
    }
    
    // Validar CPF/CNPJ
    if (!validateAllCPFs()) {
        showNotification('Por favor, verifique o CPF/CNPJ informado', 'error');
        return;
    }
    
    showNotification('Cadastro de vendedor enviado com sucesso! Aguarde nossa análise.', 'success');
    e.target.reset();
    
    // Resetar para primeiro passo
    const formSteps = e.target.querySelectorAll('.form-step');
    formSteps.forEach((step, index) => {
        if (index === 0) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

function handleDeliverySubmit(e) {
    e.preventDefault();
    
    // Validação básica
    const requiredFields = ['delivery-name', 'delivery-cpf', 'delivery-email', 'delivery-phone'];
    const isValid = validateRequiredFields(requiredFields);
    
    if (!isValid) {
        showNotification('Por favor, preencha todos os campos obrigatórios', 'error');
        return;
    }
    
    // Validar CPF
    if (!validateAllCPFs()) {
        showNotification('Por favor, verifique os CPFs informados', 'error');
        return;
    }
    
    showNotification('Cadastro de entregador enviado com sucesso! Aguarde nossa análise.', 'success');
    e.target.reset();
    
    // Resetar para primeiro passo
    const formSteps = e.target.querySelectorAll('.form-step');
    formSteps.forEach((step, index) => {
        if (index === 0) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

function handleUserSubmit(e) {
    e.preventDefault();
    
    // Validação básica
    const requiredFields = ['user-name', 'user-cpf', 'user-email', 'user-phone'];
    const isValid = validateRequiredFields(requiredFields);
    
    if (!isValid) {
        showNotification('Por favor, preencha todos os campos obrigatórios', 'error');
        return;
    }
    
    // Validar CPF
    if (!validateAllCPFs()) {
        showNotification('Por favor, verifique os CPFs informados', 'error');
        return;
    }
    
    showNotification('Cadastro realizado com sucesso! Bem-vindo ao HortiPerto!', 'success');
    e.target.reset();
    
    // Resetar para primeiro passo
    const formSteps = e.target.querySelectorAll('.form-step');
    formSteps.forEach((step, index) => {
        if (index === 0) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

function validateRequiredFields(fieldIds) {
    for (const fieldId of fieldIds) {
        const field = document.getElementById(fieldId);
        if (!field || !field.value.trim()) {
            return false;
        }
    }
    return true;
}

// ========================================
// CADASTRO DE PRODUTOS (VENDEDORES)
// ========================================

function loadSellerProducts() {
    const productsGrid = document.getElementById('seller-products-grid');
    if (!productsGrid) return;
    
    if (sellerProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="col-span-full text-center py-8">
                <i class="fas fa-box-open text-4xl text-gray-400 mb-4"></i>
                <h3 class="text-lg font-semibold text-gray-600 mb-2">Nenhum produto cadastrado</h3>
                <p class="text-gray-500 mb-4">Comece cadastrando seu primeiro produto!</p>
                <button class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" onclick="showProductForm()">
                    Cadastrar Produto
                </button>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = '';
    sellerProducts.forEach(product => {
        const productCard = createSellerProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createSellerProductCard(product) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-md overflow-hidden';
    
    const statusClass = product.status === 'ativo' ? 'bg-green-500' : 'bg-gray-500';
    const statusText = product.status === 'ativo' ? 'Ativo' : 'Inativo';
    
    card.innerHTML = `
        <div class="relative">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="absolute top-2 right-2 ${statusClass} text-white text-xs px-2 py-1 rounded">
                ${statusText}
            </div>
        </div>
        <div class="p-4">
            <h3 class="font-bold text-lg mb-2">${product.name}</h3>
            <p class="text-gray-600 text-sm mb-2">${getCategoryName(product.category)}</p>
            <p class="font-bold text-green-700 mb-2">R$ ${product.price.toFixed(2).replace('.', ',')}/${product.unit}</p>
            <p class="text-gray-600 text-sm mb-2">Quantidade: ${product.quantity} ${product.unit}</p>
            <p class="text-gray-700 text-sm mb-3">${product.description}</p>
            ${product.organic ? '<span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-3">🌱 Orgânico</span>' : ''}
            <div class="flex space-x-2">
                <button class="flex-1 bg-blue-600 text-white py-1 px-3 rounded text-sm hover:bg-blue-700" onclick="editProduct(${product.id})">
                    <i class="fas fa-edit mr-1"></i> Editar
                </button>
                <button class="flex-1 bg-red-600 text-white py-1 px-3 rounded text-sm hover:bg-red-700" onclick="deleteProduct(${product.id})">
                    <i class="fas fa-trash mr-1"></i> Excluir
                </button>
                <button class="flex-1 ${product.status === 'ativo' ? 'bg-yellow-600' : 'bg-green-600'} text-white py-1 px-3 rounded text-sm hover:${product.status === 'ativo' ? 'bg-yellow-700' : 'bg-green-700'}" onclick="toggleProductStatus(${product.id})">
                    <i class="fas ${product.status === 'ativo' ? 'fa-pause' : 'fa-play'} mr-1"></i> ${product.status === 'ativo' ? 'Pausar' : 'Ativar'}
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function getCategoryName(category) {
    const categories = {
        'frutas': 'Frutas',
        'verduras': 'Verduras',
        'hortalicas': 'Hortaliças',
        'queijos': 'Queijos',
        'geleias': 'Geleias',
        'outros': 'Outros'
    };
    return categories[category] || category;
}

function showProductForm() {
    // Criar modal de cadastro de produtos
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.id = 'product-form-modal';
    
    modal.innerHTML = `
        <div class="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-gray-800">Cadastrar Novo Produto</h2>
                <button onclick="closeProductForm()" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <form id="new-product-form" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label for="product-name" class="block text-sm font-medium text-gray-700 mb-1">Nome do Produto *</label>
                        <input type="text" id="product-name" required class="w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500">
                    </div>
                    <div>
                        <label for="product-category" class="block text-sm font-medium text-gray-700 mb-1">Categoria *</label>
                        <select id="product-category" required class="w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500">
                            <option value="">Selecione</option>
                            <option value="frutas">Frutas</option>
                            <option value="verduras">Verduras</option>
                            <option value="hortalicas">Hortaliças</option>
                            <option value="queijos">Queijos</option>
                            <option value="geleias">Geleias</option>
                            <option value="outros">Outros</option>
                        </select>
                    </div>
                    <div>
                        <label for="product-price" class="block text-sm font-medium text-gray-700 mb-1">Preço *</label>
                        <input type="number" id="product-price" step="0.01" min="0" required class="w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500">
                    </div>
                    <div>
                        <label for="product-unit" class="block text-sm font-medium text-gray-700 mb-1">Unidade *</label>
                        <select id="product-unit" required class="w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500">
                            <option value="">Selecione</option>
                            <option value="kg">Quilograma (kg)</option>
                            <option value="g">Grama (g)</option>
                            <option value="un">Unidade</option>
                            <option value="pct">Pacote</option>
                            <option value="l">Litro (L)</option>
                            <option value="ml">Mililitro (ml)</option>
                        </select>
                    </div>
                    <div>
                        <label for="product-quantity" class="block text-sm font-medium text-gray-700 mb-1">Quantidade Disponível *</label>
                        <input type="number" id="product-quantity" min="0" required class="w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500">
                    </div>
                    <div>
                        <label for="product-organic" class="flex items-center">
                            <input type="checkbox" id="product-organic" class="rounded text-green-600 focus:ring-green-500">
                            <span class="ml-2 text-sm font-medium text-gray-700">Produto Orgânico</span>
                        </label>
                    </div>
                </div>
                
                <div>
                    <label for="product-description" class="block text-sm font-medium text-gray-700 mb-1">Descrição *</label>
                    <textarea id="product-description" rows="3" required class="w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500"></textarea>
                </div>
                
                <div>
                    <label for="product-image" class="block text-sm font-medium text-gray-700 mb-1">Foto do Produto *</label>
                    <input type="file" id="product-image" accept="image/*" required class="w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500">
                    <div id="image-preview" class="mt-2"></div>
                </div>
                
                <div class="flex justify-end space-x-4">
                    <button type="button" onclick="closeProductForm()" class="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition">
                        Cancelar
                    </button>
                    <button type="submit" class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                        Cadastrar Produto
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Configurar handlers
    setupProductFormHandlers();
    setupImagePreview();
}

function closeProductForm() {
    const modal = document.getElementById('product-form-modal');
    if (modal) {
        modal.remove();
    }
}

function setupProductFormHandlers() {
    const form = document.getElementById('new-product-form');
    if (form) {
        form.addEventListener('submit', handleNewProductSubmit);
    }
}

function handleNewProductSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('product-name').value,
        category: document.getElementById('product-category').value,
        price: parseFloat(document.getElementById('product-price').value),
        unit: document.getElementById('product-unit').value,
        quantity: parseInt(document.getElementById('product-quantity').value),
        description: document.getElementById('product-description').value,
        organic: document.getElementById('product-organic').checked
    };
    
    // Validação
    if (!formData.name || !formData.category || !formData.price || 
        !formData.unit || !formData.quantity || !formData.description) {
        showNotification('Por favor, preencha todos os campos obrigatórios', 'error');
        return;
    }
    
    if (formData.price <= 0) {
        showNotification('O preço deve ser maior que zero', 'error');
        return;
    }
    
    if (formData.quantity < 0) {
        showNotification('A quantidade não pode ser negativa', 'error');
        return;
    }
    
    // Simular upload de foto
    const imageInput = document.getElementById('product-image');
    if (!imageInput.files[0]) {
        showNotification('Por favor, selecione uma foto do produto', 'error');
        return;
    }
    
    // Criar novo produto
    const newProduct = {
        id: Date.now(),
        name: formData.name,
        category: formData.category,
        price: formData.price,
        unit: formData.unit,
        quantity: formData.quantity,
        description: formData.description,
        image: URL.createObjectURL(imageInput.files[0]),
        organic: formData.organic,
        dateCreated: new Date().toISOString().split('T')[0],
        status: 'ativo'
    };
    
    // Adicionar à lista
    sellerProducts.push(newProduct);
    
    // Fechar modal e limpar formulário
    closeProductForm();
    
    // Mostrar sucesso
    showNotification('Produto cadastrado com sucesso!', 'success');
    
    // Atualizar lista
    loadSellerProducts();
}

function setupImagePreview() {
    const imageInput = document.getElementById('product-image');
    if (imageInput) {
        imageInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            const preview = document.getElementById('image-preview');
            
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    preview.innerHTML = `
                        <img src="${e.target.result}" alt="Preview" class="w-32 h-32 object-cover rounded-lg border">
                    `;
                };
                reader.readAsDataURL(file);
            } else {
                preview.innerHTML = '';
            }
        });
    }
}

function editProduct(id) {
    const product = sellerProducts.find(p => p.id === id);
    if (!product) return;
    
    showNotification(`Editando produto: ${product.name}`, 'info');
}

function deleteProduct(id) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
        sellerProducts = sellerProducts.filter(p => p.id !== id);
        loadSellerProducts();
        showNotification('Produto excluído com sucesso!', 'success');
    }
}

function toggleProductStatus(id) {
    const product = sellerProducts.find(p => p.id === id);
    if (!product) return;
    
    product.status = product.status === 'ativo' ? 'inativo' : 'ativo';
    loadSellerProducts();
    
    const statusText = product.status === 'ativo' ? 'ativado' : 'pausado';
    showNotification(`Produto ${statusText} com sucesso!`, 'success');
}



// ========================================
// SISTEMA DE NOTIFICAÇÕES
// ========================================

function showNotification(message, type = 'info') {
    // Remover notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = `notification fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm`;
    
    const bgColor = type === 'success' ? 'bg-green-500' : 
                   type === 'error' ? 'bg-red-500' : 
                   type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500';
    
    notification.className += ` ${bgColor} text-white`;
    notification.innerHTML = `
        <div class="flex justify-between items-center">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remover após 5 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// ========================================
// FUNÇÕES GLOBAIS (para uso no HTML)
// ========================================

// Funções para serem chamadas diretamente no HTML
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.proceedToCheckout = proceedToCheckout;
window.showTab = showTab;
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
window.toggleProductStatus = toggleProductStatus;
window.showProductForm = showProductForm;
window.closeProductForm = closeProductForm;

// Funções de upload
window.removeFile = removeFile;
window.deleteFile = deleteFile;
window.downloadFile = downloadFile;
window.displayUploadedFiles = displayUploadedFiles;

// Funções de validação
window.validateCPF = validateCPF;
window.validateCNPJ = validateCNPJ;
window.validateCPForCNPJ = validateCPForCNPJ;
window.formatCPF = formatCPF;
window.formatCNPJ = formatCNPJ;
window.formatCPForCNPJ = formatCPForCNPJ;
window.validateCPFInput = validateCPFInput;
window.validateAllCPFs = validateAllCPFs;
window.getCleanCPF = getCleanCPF;

// Sistema de partículas para efeito 3D
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posição aleatória
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        // Tamanho aleatório
        const size = Math.random() * 3 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Opacidade aleatória
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        
        particlesContainer.appendChild(particle);
    }
}

// Efeito de parallax suave
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Efeito de hover 3D para cards
function init3DHover() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

// Efeito de digitação para títulos
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Animação de entrada para elementos
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    const elements = document.querySelectorAll('.product-card, .floating');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Efeito de brilho nos botões neon
function initNeonButtons() {
    const neonButtons = document.querySelectorAll('.btn-neon');
    
    neonButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.boxShadow = `
                0 0 10px #22c55e,
                0 0 20px #22c55e,
                0 0 30px #22c55e,
                0 0 40px #22c55e
            `;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = '';
        });
    });
}

// Efeito de rotação suave da logo
function initLogoRotation() {
    const logo = document.querySelector('.logo-rotating');
    if (!logo) return;
    
    let isHovered = false;
    
    logo.addEventListener('mouseenter', () => {
        isHovered = true;
        logo.style.animationDuration = '2s';
    });
    
    logo.addEventListener('mouseleave', () => {
        isHovered = false;
        logo.style.animationDuration = '8s';
    });
}

// Efeito de onda nos botões
function createRippleEffect(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ========================================
// VALIDAÇÃO DE CEP
// ========================================

// Função para validar e buscar dados do CEP
async function validateCEP(cepInput) {
    const cep = cepInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    
    // Limpar estados anteriores
    cepInput.classList.remove('valid', 'invalid');
    const messageElement = cepInput.parentElement.querySelector('.cep-validation-message');
    if (messageElement) {
        messageElement.className = 'cep-validation-message';
        messageElement.textContent = '';
    }
    
    if (cep.length !== 8) {
        cepInput.classList.add('invalid');
        if (messageElement) {
            messageElement.classList.add('error');
            messageElement.textContent = 'CEP deve ter 8 dígitos';
        }
        showNotification('CEP deve ter 8 dígitos', 'error');
        return false;
    }
    
    try {
        // Mostrar loading
        cepInput.disabled = true;
        cepInput.classList.add('loading');
        
        // Buscar dados do CEP
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        
        if (data.erro) {
            cepInput.classList.add('invalid');
            if (messageElement) {
                messageElement.classList.add('error');
                messageElement.textContent = 'CEP não encontrado';
            }
            showNotification('CEP não encontrado', 'error');
            return false;
        }
        
        // CEP válido
        cepInput.classList.add('valid');
        if (messageElement) {
            messageElement.classList.add('success');
            messageElement.textContent = `CEP válido - ${data.localidade}/${data.uf}`;
        }
        
        // Preencher campos automaticamente
        fillAddressFields(data);
        showNotification('CEP válido! Endereço preenchido automaticamente.', 'success');
        return true;
        
    } catch (error) {
        console.error('Erro ao validar CEP:', error);
        cepInput.classList.add('invalid');
        if (messageElement) {
            messageElement.classList.add('error');
            messageElement.textContent = 'Erro ao validar CEP. Tente novamente.';
        }
        showNotification('Erro ao validar CEP. Tente novamente.', 'error');
        return false;
    } finally {
        cepInput.disabled = false;
        cepInput.classList.remove('loading');
    }
}

// Função para preencher campos de endereço automaticamente
function fillAddressFields(cepData) {
    const formType = getCurrentFormType();
    
    if (!formType) return;
    
    const fields = {
        address: `${cepData.logradouro}`,
        neighborhood: cepData.bairro,
        city: cepData.localidade,
        state: cepData.uf
    };
    
    // Preencher campos baseado no tipo de formulário
    Object.keys(fields).forEach(field => {
        const element = document.getElementById(`${formType}-${field}`);
        if (element) {
            element.value = fields[field];
            element.classList.add('auto-filled');
            
            // Remover classe após 3 segundos
            setTimeout(() => {
                element.classList.remove('auto-filled');
            }, 3000);
        }
    });
}

// Função para identificar o tipo de formulário atual
function getCurrentFormType() {
    const activeForm = document.querySelector('.form-step.active');
    if (!activeForm) return null;
    
    const form = activeForm.closest('form');
    if (!form) return null;
    
    const formId = form.id;
    
    if (formId === 'seller-form') return 'seller';
    if (formId === 'delivery-form') return 'delivery';
    if (formId === 'user-form') return 'user';
    
    return null;
}

// Função para formatar CEP automaticamente
function formatCEP(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    input.value = value;
}

// Função para configurar validação de CEP em todos os campos
function setupCEPValidation() {
    const cepInputs = document.querySelectorAll('input[id*="-cep"]');
    
    cepInputs.forEach(input => {
        // Formatar CEP enquanto digita
        input.addEventListener('input', () => formatCEP(input));
        
        // Validar CEP quando perder o foco
        input.addEventListener('blur', () => {
            if (input.value.length >= 8) {
                validateCEP(input);
            }
        });
        
        // Validar CEP quando pressionar Enter
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (input.value.length >= 8) {
                    validateCEP(input);
                }
            }
        });
    });
}

// Função para validar se o CEP está no formato correto
function isValidCEPFormat(cep) {
    const cepClean = cep.replace(/\D/g, '');
    return cepClean.length === 8 && /^\d{8}$/.test(cepClean);
}

// Função para obter dados do CEP sem preencher campos (apenas validação)
async function getCEPData(cep) {
    const cepClean = cep.replace(/\D/g, '');
    
    if (!isValidCEPFormat(cepClean)) {
        return null;
    }
    
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cepClean}/json/`);
        const data = await response.json();
        
        if (data.erro) {
            return null;
        }
        
        return data;
    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        return null;
    }
}

// Função para validar todos os CEPs antes do envio do formulário
async function validateAllCEPs() {
    const cepInputs = document.querySelectorAll('input[id*="-cep"]');
    const validationPromises = [];
    
    for (const cepInput of cepInputs) {
        if (cepInput.value.trim()) {
            validationPromises.push(validateCEP(cepInput));
        }
    }
    
    try {
        const results = await Promise.all(validationPromises);
        return results.every(result => result === true);
    } catch (error) {
        console.error('Erro ao validar CEPs:', error);
        return false;
    }
}

// Função para verificar se o CEP está na área de entrega
function isCEPInDeliveryArea(cepData) {
    // Lista de estados/regiões atendidas (pode ser expandida)
    const supportedStates = ['SC', 'PR', 'RS']; // Exemplo: Santa Catarina, Paraná, Rio Grande do Sul
    
    return supportedStates.includes(cepData.uf);
}

// ========================================
// UPLOAD DE ARQUIVOS
// ========================================

// Configurações de upload
const UPLOAD_CONFIG = {
    maxFileSize: 5 * 1024 * 1024, // 5MB
    allowedTypes: ['image/jpeg', 'image/jpg', 'image/png'],
    uploadPath: '/uploads/documentos/',
    previewContainer: '.file-preview-container'
};

// Função para validar arquivo
function validateFile(file) {
    // Verificar tipo de arquivo
    if (!UPLOAD_CONFIG.allowedTypes.includes(file.type)) {
        showNotification('Apenas arquivos JPG e PNG são permitidos', 'error');
        return false;
    }
    
    // Verificar tamanho do arquivo
    if (file.size > UPLOAD_CONFIG.maxFileSize) {
        showNotification('Arquivo muito grande. Máximo 5MB permitido', 'error');
        return false;
    }
    
    return true;
}

// Função para criar preview da imagem
function createImagePreview(file, containerId) {
    const reader = new FileReader();
    const container = document.getElementById(containerId);
    
    if (!container) return;
    
    reader.onload = function(e) {
        container.innerHTML = `
            <div class="file-preview bg-gray-100 rounded-lg p-4 mb-4">
                <div class="flex items-center justify-between mb-2">
                    <h4 class="font-semibold text-gray-800">${file.name}</h4>
                    <button type="button" class="text-red-500 hover:text-red-700" onclick="removeFile('${containerId}')">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <img src="${e.target.result}" alt="Preview" class="w-full h-32 object-cover rounded">
                <div class="text-sm text-gray-600 mt-2">
                    Tamanho: ${(file.size / 1024 / 1024).toFixed(2)} MB
                </div>
            </div>
        `;
        container.style.display = 'block';
    };
    
    reader.readAsDataURL(file);
}

// Função para remover arquivo
function removeFile(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '';
        container.style.display = 'none';
    }
    
    // Limpar input file
    const inputId = containerId.replace('-preview', '');
    const input = document.getElementById(inputId);
    if (input) {
        input.value = '';
    }
    
    showNotification('Arquivo removido', 'info');
}

// Função para upload de arquivo
async function uploadFile(file, type) {
    if (!validateFile(file)) {
        return null;
    }
    
    try {
        // Mostrar loading
        showNotification('Enviando arquivo...', 'info');
        
        // Criar FormData
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', type);
        formData.append('timestamp', new Date().toISOString());
        
        // Simular upload (substitua pela URL real do seu backend)
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('Erro no upload');
        }
        
        const result = await response.json();
        
        // Salvar informações no localStorage (simulando banco de dados)
        saveFileInfo(result, type);
        
        showNotification('Arquivo enviado com sucesso!', 'success');
        return result;
        
    } catch (error) {
        console.error('Erro no upload:', error);
        showNotification('Erro ao enviar arquivo. Tente novamente.', 'error');
        return null;
    }
}

// Função para salvar informações do arquivo
function saveFileInfo(fileInfo, type) {
    const fileData = {
        id: Date.now(),
        originalName: fileInfo.originalName,
        fileName: fileInfo.fileName,
        filePath: fileInfo.filePath,
        uploadDate: new Date().toISOString(),
        fileSize: fileInfo.fileSize,
        type: type
    };
    
    // Obter dados existentes
    const existingFiles = JSON.parse(localStorage.getItem('uploadedFiles') || '[]');
    existingFiles.push(fileData);
    
    // Salvar no localStorage
    localStorage.setItem('uploadedFiles', JSON.stringify(existingFiles));
}

// Função para deletar arquivo
async function deleteFile(fileId) {
    try {
        // Simular requisição de delete (substitua pela URL real do seu backend)
        const response = await fetch(`/api/upload/${fileId}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error('Erro ao deletar arquivo');
        }
        
        // Remover do localStorage
        const existingFiles = JSON.parse(localStorage.getItem('uploadedFiles') || '[]');
        const updatedFiles = existingFiles.filter(file => file.id !== fileId);
        localStorage.setItem('uploadedFiles', JSON.stringify(updatedFiles));
        
        showNotification('Arquivo deletado com sucesso!', 'success');
        return true;
        
    } catch (error) {
        console.error('Erro ao deletar arquivo:', error);
        showNotification('Erro ao deletar arquivo. Tente novamente.', 'error');
        return false;
    }
}

// Função para configurar upload de arquivos
function setupFileUploads() {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    
    fileInputs.forEach((input, index) => {
        // Remover event listeners existentes para evitar duplicação
        const newInput = input.cloneNode(true);
        input.parentNode.replaceChild(newInput, input);
        
        // Event listener para mudança de arquivo
        newInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (!file) return;
            
            handleFileSelection(file, this);
        });
        
        // Configurar drag and drop
        setupDragAndDrop(newInput);
    });
}

// Função para configurar drag and drop
function setupDragAndDrop(input) {
    const wrapper = input.closest('.file-input-wrapper');
    if (!wrapper) return;
    
    const label = wrapper.querySelector('.file-input-label');
    if (!label) return;
    
    // Prevenir comportamento padrão do navegador
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        label.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });
    
    // Destacar área de drop
    ['dragenter', 'dragover'].forEach(eventName => {
        label.addEventListener(eventName, highlight, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        label.addEventListener(eventName, unhighlight, false);
    });
    
    // Lidar com o drop
    label.addEventListener('drop', handleDrop, false);
    
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    function highlight(e) {
        label.classList.add('dragover');
    }
    
    function unhighlight(e) {
        label.classList.remove('dragover');
    }
    
    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        
        if (files.length > 0) {
            const file = files[0];
            input.files = files;
            handleFileSelection(file, input);
        }
    }
}

// Função para lidar com seleção de arquivo
function handleFileSelection(file, input) {
    // Criar ID para o container de preview
    const previewId = input.id + '-preview';
    
    // Criar container de preview se não existir
    let previewContainer = document.getElementById(previewId);
    if (!previewContainer) {
        previewContainer = document.createElement('div');
        previewContainer.id = previewId;
        previewContainer.className = 'file-preview-container';
        previewContainer.style.display = 'none';
        
        // Inserir após o wrapper
        const wrapper = input.closest('.file-input-wrapper');
        if (wrapper) {
            wrapper.parentNode.insertBefore(previewContainer, wrapper.nextSibling);
        }
    }
    
    // Validar e criar preview
    if (validateFile(file)) {
        createImagePreview(file, previewId);
        
        // Upload automático
        const type = input.id.replace('-', '_');
        uploadFile(file, type);
    }
}

// Função para obter arquivos salvos
function getUploadedFiles(type = null) {
    const files = JSON.parse(localStorage.getItem('uploadedFiles') || '[]');
    
    if (type) {
        return files.filter(file => file.type === type);
    }
    
    return files;
}

// Função para exibir arquivos salvos
function displayUploadedFiles(containerId, type = null) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const files = getUploadedFiles(type);
    
    if (files.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center py-4">Nenhum arquivo enviado</p>';
        return;
    }
    
    let html = '<div class="space-y-4">';
    
    files.forEach(file => {
        html += `
            <div class="file-item bg-white border rounded-lg p-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-file-image text-blue-500 text-xl"></i>
                        <div>
                            <h4 class="font-semibold">${file.originalName}</h4>
                            <p class="text-sm text-gray-600">
                                Enviado em: ${new Date(file.uploadDate).toLocaleDateString()}
                            </p>
                            <p class="text-sm text-gray-600">
                                Tamanho: ${(file.fileSize / 1024 / 1024).toFixed(2)} MB
                            </p>
                        </div>
                    </div>
                    <div class="flex space-x-2">
                        <button type="button" class="text-blue-500 hover:text-blue-700" onclick="downloadFile('${file.filePath}')">
                            <i class="fas fa-download"></i>
                        </button>
                        <button type="button" class="text-red-500 hover:text-red-700" onclick="deleteFile(${file.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// Função para download de arquivo (simulada)
function downloadFile(filePath) {
    // Simular download (substitua pela implementação real)
    const link = document.createElement('a');
    link.href = filePath;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('Download iniciado', 'success');
}

// ========================================
// VALIDAÇÃO DE CPF E CNPJ
// ========================================

// Função para validar CPF
function validateCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');
    
    // Verifica se tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }
    
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }
    
    // Validação do primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.charAt(9))) {
        return false;
    }
    
    // Validação do segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.charAt(10))) {
        return false;
    }
    
    return true;
}

// Função para validar CNPJ
function validateCNPJ(cnpj) {
    // Remove caracteres não numéricos
    cnpj = cnpj.replace(/\D/g, '');
    
    // Verifica se tem 14 dígitos
    if (cnpj.length !== 14) {
        return false;
    }
    
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{13}$/.test(cnpj)) {
        return false;
    }
    
    // Validação do primeiro dígito verificador
    let sum = 0;
    const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    
    for (let i = 0; i < 12; i++) {
        sum += parseInt(cnpj.charAt(i)) * weights1[i];
    }
    
    let remainder = sum % 11;
    let digit1 = remainder < 2 ? 0 : 11 - remainder;
    
    if (digit1 !== parseInt(cnpj.charAt(12))) {
        return false;
    }
    
    // Validação do segundo dígito verificador
    sum = 0;
    const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    
    for (let i = 0; i < 13; i++) {
        sum += parseInt(cnpj.charAt(i)) * weights2[i];
    }
    
    remainder = sum % 11;
    let digit2 = remainder < 2 ? 0 : 11 - remainder;
    
    if (digit2 !== parseInt(cnpj.charAt(13))) {
        return false;
    }
    
    return true;
}

// Função para detectar e validar CPF ou CNPJ
function validateCPForCNPJ(document) {
    const cleanDoc = document.replace(/\D/g, '');
    
    if (cleanDoc.length === 11) {
        return validateCPF(cleanDoc);
    } else if (cleanDoc.length === 14) {
        return validateCNPJ(cleanDoc);
    }
    
    return false;
}

// Função para formatar CPF automaticamente
function formatCPF(input) {
    let value = input.value.replace(/\D/g, '');
    
    // Limita a 11 dígitos
    value = value.substring(0, 11);
    
    // Aplica a máscara
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    
    input.value = value;
}

// Função para formatar CNPJ automaticamente
function formatCNPJ(input) {
    let value = input.value.replace(/\D/g, '');
    
    // Limita a 14 dígitos
    value = value.substring(0, 14);
    
    // Aplica a máscara
    value = value.replace(/(\d{2})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1/$2');
    value = value.replace(/(\d{4})(\d{1,2})$/, '$1-$2');
    
    input.value = value;
}

// Função para formatar CPF ou CNPJ automaticamente
function formatCPForCNPJ(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length <= 11) {
        // Formatar como CPF
        value = value.substring(0, 11);
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    } else {
        // Formatar como CNPJ
        value = value.substring(0, 14);
        value = value.replace(/(\d{2})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1/$2');
        value = value.replace(/(\d{4})(\d{1,2})$/, '$1-$2');
    }
    
    input.value = value;
}

// Função para validar CPF/CNPJ em tempo real
function validateCPFInput(input) {
    const document = input.value.replace(/\D/g, '');
    const isValid = validateCPForCNPJ(input.value);
    
    // Limpar estados anteriores
    input.classList.remove('valid', 'invalid');
    
    // Remover mensagem anterior
    const existingMessage = input.parentElement.querySelector('.cpf-validation-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    if (document.length === 11 || document.length === 14) {
        if (isValid) {
            input.classList.add('valid');
            const docType = document.length === 11 ? 'CPF' : 'CNPJ';
            showCPFMessage(input, `${docType} válido!`, 'success');
        } else {
            input.classList.add('invalid');
            const docType = document.length === 11 ? 'CPF' : 'CNPJ';
            showCPFMessage(input, `${docType} inválido!`, 'error');
        }
    } else if (document.length > 0) {
        input.classList.add('invalid');
        showCPFMessage(input, 'CPF deve ter 11 dígitos ou CNPJ deve ter 14 dígitos', 'error');
    }
    
    return isValid;
}

// Função para mostrar mensagem de validação do CPF/CNPJ
function showCPFMessage(input, message, type) {
    const messageElement = document.createElement('div');
    messageElement.className = `cpf-validation-message ${type}`;
    messageElement.textContent = message;
    
    // Inserir após o input
    input.parentNode.insertBefore(messageElement, input.nextSibling);
}

// Função para configurar validação de CPF/CNPJ em todos os campos
function setupCPFValidation() {
    const cpfInputs = document.querySelectorAll('input[id*="-cpf"]');
    const docInputs = document.querySelectorAll('input[id="seller-doc"]');
    
    // Configurar campos de CPF
    cpfInputs.forEach(input => {
        // Formatar CPF enquanto digita
        input.addEventListener('input', () => formatCPF(input));
        
        // Validar CPF quando perder o foco
        input.addEventListener('blur', () => {
            validateCPFInput(input);
        });
        
        // Validar CPF quando pressionar Enter
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                validateCPFInput(input);
            }
        });
        
        // Limpar validação quando começar a digitar
        input.addEventListener('input', () => {
            const cpf = input.value.replace(/\D/g, '');
            if (cpf.length < 11) {
                input.classList.remove('valid', 'invalid');
                const messageElement = input.parentElement.querySelector('.cpf-validation-message');
                if (messageElement) {
                    messageElement.remove();
                }
            }
        });
    });
    
    // Configurar campo de CPF/CNPJ
    docInputs.forEach(input => {
        // Formatar CPF/CNPJ enquanto digita
        input.addEventListener('input', () => formatCPForCNPJ(input));
        
        // Validar CPF/CNPJ quando perder o foco
        input.addEventListener('blur', () => {
            validateCPFInput(input);
        });
        
        // Validar CPF/CNPJ quando pressionar Enter
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                validateCPFInput(input);
            }
        });
        
        // Limpar validação quando começar a digitar
        input.addEventListener('input', () => {
            const doc = input.value.replace(/\D/g, '');
            if (doc.length < 11) {
                input.classList.remove('valid', 'invalid');
                const messageElement = input.parentElement.querySelector('.cpf-validation-message');
                if (messageElement) {
                    messageElement.remove();
                }
            }
        });
    });
}

// Função para validar todos os CPFs/CNPJs antes do envio do formulário
function validateAllCPFs() {
    const cpfInputs = document.querySelectorAll('input[id*="-cpf"]');
    const docInputs = document.querySelectorAll('input[id="seller-doc"]');
    let allValid = true;
    
    cpfInputs.forEach(input => {
        if (input.value.trim()) {
            const isValid = validateCPFInput(input);
            if (!isValid) {
                allValid = false;
            }
        }
    });
    
    docInputs.forEach(input => {
        if (input.value.trim()) {
            const isValid = validateCPFInput(input);
            if (!isValid) {
                allValid = false;
            }
        }
    });
    
    return allValid;
}

// Função para obter CPF/CNPJ limpo (apenas números)
function getCleanCPF(cpf) {
    return cpf.replace(/\D/g, '');
}

// =========================
// LOGIN MODAL E AUTENTICAÇÃO
// =========================
let isLoggedIn = false;

function setupLoginModal() {
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeModalBtn = document.getElementById('close-login-modal');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');

    // Abrir modal
    loginBtn.addEventListener('click', function() {
        loginModal.classList.remove('hidden');
        loginModal.classList.add('active');
        loginModal.focus();
        document.body.style.overflow = 'hidden';
        document.getElementById('login-usuario').focus();
    });

    // Fechar modal
    closeModalBtn.addEventListener('click', closeLoginModal);
    loginModal.addEventListener('click', function(e) {
        if (e.target === loginModal) closeLoginModal();
    });
    document.addEventListener('keydown', function(e) {
        if (loginModal.classList.contains('active') && e.key === 'Escape') closeLoginModal();
    });
    function closeLoginModal() {
        loginModal.classList.remove('active');
        loginModal.classList.add('hidden');
        document.body.style.overflow = '';
        loginError.classList.add('hidden');
        loginForm.reset();
    }

    // Simulação de login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const usuario = loginForm.usuario.value.trim();
        const senha = loginForm.senha.value;
        if ((usuario === 'demo' || usuario === 'demo@email.com') && senha === '1234') {
            isLoggedIn = true;
            updateLoginButton();
            closeLoginModal();
        } else {
            loginError.textContent = 'Usuário ou senha inválidos. Use demo/1234.';
            loginError.classList.remove('hidden');
        }
    });

    updateLoginButton();
}

function updateLoginButton() {
    const loginBtn = document.getElementById('login-btn');
    if (!loginBtn) return;
    if (isLoggedIn) {
        loginBtn.textContent = 'Minha Conta';
        loginBtn.classList.remove('btn-outline');
        loginBtn.classList.add('btn-success');
        // Adiciona dropdown de conta
        if (!document.getElementById('logout-btn')) {
            const dropdown = document.createElement('div');
            dropdown.id = 'logout-btn';
            dropdown.innerHTML = '<button class="btn btn-danger w-full mt-2">Sair</button>';
            loginBtn.parentNode.appendChild(dropdown);
            dropdown.querySelector('button').onclick = function() {
                isLoggedIn = false;
                updateLoginButton();
            };
        }
    } else {
        loginBtn.textContent = 'Entrar';
        loginBtn.classList.remove('btn-success');
        loginBtn.classList.add('btn-outline');
        // Remove dropdown
        const dropdown = document.getElementById('logout-btn');
        if (dropdown) dropdown.remove();
    }
}

 