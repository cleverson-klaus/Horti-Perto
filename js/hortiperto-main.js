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
        name: "Geleia de Maracujá",
        price: 25.00,
        category: "geleias",
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
        rating: 4.3,
        reviews: 6,
        image: "imagens/img-mandioca.jpg",
        unit: "kg",
        description: "Nossas <b>Mandiocas</b> são selecionadas, macias e de excelente qualidade! Perfeitas para cozinhar, fritar, assar ou preparar aquele purê cremoso. Fonte de energia e muito sabor, são ideais para receitas tradicionais e para inovar na cozinha. Vendidas por quilo, sempre fresquinhas para garantir o melhor resultado nos seus pratos!"
    }
];

// Produtos cadastrados pelos vendedores
let sellerProducts = [
    {
        id: 1,
        name: "Tomates Frescos",
        category: "tomates",
        price: 8.90,
        unit: "kg",
        quantity: 50,
        description: "Tomates frescos colhidos diariamente da nossa horta",
        image: "imagens/img-tomatefresco.png",
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
        image: "imagens/img-queijocolonialum.jpg",
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
    // Removidas todas as animações
    
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
    console.log('🚀 Inicializando HortiPerto...');
    
    // Inicializar funcionalidades existentes
    setupTabNavigation();
    setupMobileMenu();
    loadProducts();
    setupProductFilters();
    setupCartHandlers();
    setupFormHandlers();
    setupFormSteps();
    setupCEPValidation();
    setupCPFValidation();
    setupFileUploads();
    setupLoginModal();
    
    // Inicializar novas funcionalidades
    setupPaymentSystem();
    
    console.log('✅ HortiPerto inicializado com sucesso!');
    setupRippleEffect();
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
        showNotification('Seu carrinho está vazio', 'error');
        return;
    }
    
    showTab('payment');
    updatePaymentSummary();
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
        'geleias': 'Doces e Geleias',
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
                            <option value="hortalicas">Legumes</option>
                            <option value="queijos">Queijos</option>
                            <option value="geleias">Doces e Geleias</option>
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

// Todas as animações foram removidas para criar uma experiência estática

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

// ========================================
// SISTEMA DE PAGAMENTO
// ========================================

function setupPaymentSystem() {
    setupPaymentMethodSelection();
    setupCardFormValidation();
    setupPixCopy();
    setupPixQRCode();
    updatePaymentSummary();
}

function setupPaymentMethodSelection() {
    const paymentOptions = document.querySelectorAll('input[name="payment-method"]');
    const paymentForms = document.querySelectorAll('.payment-form');
    
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            // Esconder todos os formulários
            paymentForms.forEach(form => {
                form.classList.add('hidden');
            });
            
            // Mostrar o formulário selecionado
            const selectedForm = document.getElementById(this.value + '-form');
            if (selectedForm) {
                selectedForm.classList.remove('hidden');
            }
            
            // Atualizar resumo do pagamento
            updatePaymentSummary();
            
            // Atualizar visual dos botões de opção
            updatePaymentOptionVisuals();
        });
    });
}

function updatePaymentOptionVisuals() {
    const paymentOptions = document.querySelectorAll('.payment-option');
    
    paymentOptions.forEach(option => {
        const radio = option.querySelector('input[type="radio"]');
        const circle = option.querySelector('.w-3.h-3');
        const label = option.querySelector('label');
        
        if (radio.checked) {
            circle.classList.remove('hidden');
            label.classList.add('border-green-500', 'bg-green-50');
        } else {
            circle.classList.add('hidden');
            label.classList.remove('border-green-500', 'bg-green-50');
        }
    });
}

function setupCardFormValidation() {
    const cardNumber = document.getElementById('card-number');
    const cardExpiry = document.getElementById('card-expiry');
    const cardCvv = document.getElementById('card-cvv');
    
    if (cardNumber) {
        cardNumber.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            this.value = value;
        });
    }
    
    if (cardExpiry) {
        cardExpiry.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            this.value = value;
        });
    }
    
    if (cardCvv) {
        cardCvv.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '');
        });
    }
}

function setupPixCopy() {
    const pixKey = document.getElementById('pix-key');
    if (pixKey) {
        pixKey.addEventListener('click', function() {
            this.select();
        });
    }
}

function copyPixKey() {
    const pixKey = document.getElementById('pix-key');
    if (pixKey) {
        pixKey.select();
        document.execCommand('copy');
        
        // Mostrar feedback visual
        const copyBtn = document.querySelector('button[onclick="copyPixKey()"]');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i>';
        copyBtn.classList.add('bg-green-700');
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.classList.remove('bg-green-700');
        }, 2000);
        
        showNotification('Chave PIX copiada!', 'success');
    }
}

function updatePaymentSummary() {
    const subtotal = cartTotal;
    const shipping = 5.00;
    let paymentFee = 0.00;
    
    // Calcular taxa baseada no método de pagamento
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked');
    if (selectedMethod) {
        switch (selectedMethod.value) {
            case 'card':
                paymentFee = subtotal * 0.029; // 2.9% para cartão
                break;
            case 'pix':
                paymentFee = 0; // PIX sem taxa
                break;
            case 'cash':
                paymentFee = 0; // Dinheiro sem taxa
                break;
        }
    }
    
    const total = subtotal + shipping + paymentFee;
    
    // Atualizar valores na interface usando os elementos existentes
    const cartTotalElement = document.getElementById('cart-total');
    const cartTotalWithShippingElement = document.getElementById('cart-total-with-shipping');
    
    if (cartTotalElement) {
        cartTotalElement.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    }
    
    if (cartTotalWithShippingElement) {
        const totalWithShipping = subtotal + shipping + paymentFee;
        cartTotalWithShippingElement.textContent = `R$ ${totalWithShipping.toFixed(2).replace('.', ',')}`;
    }
}

function confirmPayment() {
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked');
    
    if (!selectedMethod) {
        showNotification('Selecione uma forma de pagamento', 'error');
        return;
    }
    
    // Validar formulário baseado no método selecionado
    if (!validatePaymentForm(selectedMethod.value)) {
        return;
    }
    
    // Simular processamento de pagamento
    const confirmBtn = document.getElementById('confirm-payment');
    const originalText = confirmBtn.textContent;
    confirmBtn.textContent = 'Processando...';
    confirmBtn.disabled = true;
    
    setTimeout(() => {
        // Simular sucesso do pagamento
        showNotification('Pagamento processado com sucesso!', 'success');
        
        // Limpar carrinho
        cart = [];
        cartTotal = 0;
        updateCartDisplay();
        
        // Redirecionar para página de sucesso ou home
        showTab('home');
        
        // Resetar botão
        confirmBtn.textContent = originalText;
        confirmBtn.disabled = false;
        
    }, 2000);
}

function validatePaymentForm(method) {
    switch (method) {
        case 'card':
            return validateCardForm();
        case 'cash':
            return validateCashForm();
        case 'pix':
            return true; // PIX não precisa de validação específica
        default:
            return false;
    }
}

function validateCardForm() {
    const cardNumber = document.getElementById('card-number');
    const cardExpiry = document.getElementById('card-expiry');
    const cardCvv = document.getElementById('card-cvv');
    const cardHolder = document.getElementById('card-holder');
    
    if (!cardNumber.value.replace(/\s/g, '').match(/^\d{16}$/)) {
        showNotification('Número do cartão inválido', 'error');
        return false;
    }
    
    if (!cardExpiry.value.match(/^\d{2}\/\d{2}$/)) {
        showNotification('Data de validade inválida', 'error');
        return false;
    }
    
    if (!cardCvv.value.match(/^\d{3,4}$/)) {
        showNotification('CVV inválido', 'error');
        return false;
    }
    
    if (!cardHolder.value.trim()) {
        showNotification('Nome do titular é obrigatório', 'error');
        return false;
    }
    
    return true;
}

function validateCashForm() {
    // Validação básica para dinheiro (opcional)
    return true;
}

// Modificar a função proceedToCheckout para atualizar o resumo do pagamento
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Seu carrinho está vazio', 'error');
        return;
    }
    
    // Atualizar resumo do pagamento
    updatePaymentSummary();
    showNotification('Carrinho atualizado! Escolha sua forma de pagamento.', 'success');
}

// ========================================
// INICIALIZAÇÃO DO SISTEMA
// ========================================

// ========================================
// INICIALIZAÇÃO DO SISTEMA
// ========================================

// Modificar a função initializeApp para incluir as novas funcionalidades
function initializeApp() {
    console.log('🚀 Inicializando HortiPerto...');
    
    // Inicializar funcionalidades existentes
    setupTabNavigation();
    setupMobileMenu();
    loadProducts();
    setupProductFilters();
    setupCartHandlers();
    setupFormHandlers();
    setupFormSteps();
    setupCEPValidation();
    setupCPFValidation();
    setupFileUploads();
    setupLoginModal();
    
    // Inicializar novas funcionalidades
    setupPaymentSystem();
    
    console.log('✅ HortiPerto inicializado com sucesso!');
    setupRippleEffect();
}

// Chamar inicialização quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Exportar funções para o escopo global
window.confirmPayment = confirmPayment;
window.copyPixKey = copyPixKey;
window.proceedToCheckout = proceedToCheckout;
window.updateCartDisplay = updateCartDisplay;
window.clearCart = clearCart;
window.showTab = showTab;
window.showNotification = showNotification;

function setupPixQRCode() {
    const qrContainer = document.getElementById('pix-qr-code');
    if (qrContainer) {
        // Limpa o conteúdo anterior
        qrContainer.innerHTML = '';
        // Gera o QR Code real
        const qr = new QRious({
            element: document.createElement('canvas'),
            value: '00020126580014br.gov.bcb.pix0136hortiperto@email.com5204000053039865405100.005802BR5920HortiPerto Teste6009Sao Paulo62070503***6304B14F', // Exemplo de payload PIX fake
            size: 180
        });
        qrContainer.appendChild(qr.element);
    }
}

// Efeito visual de ripple para botões
function createRippleEffect(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');
    // Remove ripples antigos
    const rippleOld = button.querySelector('.ripple');
    if (rippleOld) rippleOld.remove();
    button.appendChild(circle);
    setTimeout(() => {
        circle.remove();
    }, 600);
}

// Adicionar ripple a todos os botões com classe .btn-neon ou .action-btn
function setupRippleEffect() {
    const rippleButtons = document.querySelectorAll('.btn-neon, .action-btn');
    rippleButtons.forEach(btn => {
        btn.addEventListener('click', createRippleEffect);
    });
}

 