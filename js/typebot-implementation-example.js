// ========================================
// EXEMPLO DE IMPLEMENTAÇÃO TYPEBOT - HORTIPERTO
// ========================================
    
    // Configurações do chat
    chatWindow: {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        width: '400px',
        height: '600px'
    },
    
    // Configurações do botão flutuante
    floatingButton: {
        backgroundColor: '#22c55e',
        iconColor: '#ffffff',
        size: '60px',
        borderRadius: '50%'
    }

// ========================================
// WIDGETS ESPECÍFICOS PARA HORTIPERTO
// ========================================

// 1. WIDGET DE BOAS-VINDAS
const welcomeWidget = {
    id: 'hortiperto-welcome',
    trigger: 'page-load',
    delay: 3000, // Aparece após 3 segundos
    position: 'bottom-right',
    
    flow: [
        {
            type: 'text',
            content: '🌱 Olá! Bem-vindo ao HortiPerto!',
            delay: 1000
        },
        {
            type: 'text',
            content: 'Conectamos produtores rurais diretamente aos consumidores. Como posso te ajudar?',
            delay: 1500
        },
        {
            type: 'buttons',
            options: [
                {
                    text: '🛒 Quero comprar produtos frescos',
                    action: 'navigate-to-products',
                    color: '#22c55e'
                },
                {
                    text: '👨‍🌾 Quero vender meus produtos',
                    action: 'start-seller-onboarding',
                    color: '#16a34a'
                },
                {
                    text: '🚚 Quero ser entregador',
                    action: 'start-delivery-onboarding',
                    color: '#15803d'
                },
                {
                    text: '❓ Preciso de ajuda',
                    action: 'start-support-chat',
                    color: '#6b7280'
                }
            ]
        }
    ]
};

// 2. WIDGET DE ONBOARDING PARA VENDEDORES
const sellerOnboardingWidget = {
    id: 'seller-onboarding',
    trigger: 'manual',
    position: 'center',
    
    flow: [
        {
            type: 'text',
            content: '👨‍🌾 Perfeito! Vamos te ajudar a se tornar um vendedor no HortiPerto!'
        },
        {
            type: 'text',
            content: 'Primeiro, me conte um pouco sobre você e sua produção:'
        },
        {
            type: 'input',
            field: 'seller-name',
            label: 'Qual é o seu nome completo?',
            placeholder: 'Digite seu nome completo',
            validation: 'required'
        },
        {
            type: 'select',
            field: 'seller-type',
            label: 'Que tipo de produtor você é?',
            options: [
                'Produtor Rural Individual',
                'Cooperativa',
                'Associação de Produtores',
                'Empresa Rural',
                'Outro'
            ],
            validation: 'required'
        },
        {
            type: 'input',
            field: 'seller-location',
            label: 'Em que cidade/região você está localizado?',
            placeholder: 'Ex: Santa Catarina, SC',
            validation: 'required'
        },
        {
            type: 'select',
            field: 'production-type',
            label: 'Que tipo de produtos você cultiva/produz?',
            options: [
                'Hortaliças (alface, tomate, cenoura, etc.)',
                'Frutas (maçã, banana, morango, etc.)',
                'Queijos e derivados do leite',
                'Geleias e conservas',
                'Produtos orgânicos',
                'Outros'
            ],
            validation: 'required'
        },
        {
            type: 'text',
            content: 'Excelente! Baseado nas suas respostas, vou te mostrar os benefícios específicos para você:'
        },
        {
            type: 'benefits-display',
            benefits: [
                {
                    icon: '💰',
                    title: 'Aumento de 40% na margem',
                    description: 'Elimine intermediários e venda direto ao consumidor'
                },
                {
                    icon: '📱',
                    title: 'Gestão simplificada',
                    description: 'Controle vendas, estoque e pagamentos em um só lugar'
                },
                {
                    icon: '🚚',
                    title: 'Logística integrada',
                    description: 'Nossa rede de entregadores cuida da distribuição'
                }
            ]
        },
        {
            type: 'buttons',
            options: [
                {
                    text: '📋 Ver requisitos completos',
                    action: 'show-requirements',
                    color: '#22c55e'
                },
                {
                    text: '📝 Começar cadastro agora',
                    action: 'start-registration',
                    color: '#16a34a'
                },
                {
                    text: '📞 Falar com consultor',
                    action: 'contact-consultant',
                    color: '#15803d'
                }
            ]
        }
    ]
};

// 3. WIDGET DE RECOMENDAÇÃO DE PRODUTOS
const productRecommendationWidget = {
    id: 'product-recommendation',
    trigger: 'product-view',
    position: 'inline',
    
    flow: [
        {
            type: 'text',
            content: '🍎 Que tal experimentar estes produtos similares?'
        },
        {
            type: 'product-carousel',
            products: [
                {
                    id: 1,
                    name: 'Cesta de Legumes Orgânicos',
                    price: 'R$ 25,90',
                    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655',
                    match: '95%',
                    description: 'Seleção de legumes frescos da fazenda familiar'
                },
                {
                    id: 2,
                    name: 'Queijo Artesanal Colonial',
                    price: 'R$ 32,50/kg',
                    image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a',
                    match: '88%',
                    description: 'Queijo colonial feito com leite fresco'
                },
                {
                    id: 3,
                    name: 'Salada Pronta Premium',
                    price: 'R$ 15,90',
                    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716',
                    match: '82%',
                    description: 'Mix de folhas lavadas e prontas para consumo'
                }
            ],
            maxItems: 3
        },
        {
            type: 'buttons',
            options: [
                {
                    text: '👍 Gostei! Adicionar ao carrinho',
                    action: 'add-recommended-to-cart',
                    color: '#22c55e'
                },
                {
                    text: '👎 Não gostei destas opções',
                    action: 'provide-feedback',
                    color: '#6b7280'
                },
                {
                    text: '❌ Fechar',
                    action: 'close',
                    color: '#ef4444'
                }
            ]
        }
    ]
};

// 4. WIDGET DE RECUPERAÇÃO DE CARRINHO
const cartRecoveryWidget = {
    id: 'cart-recovery',
    trigger: 'cart-abandonment',
    position: 'bottom-right',
    
    flow: [
        {
            type: 'text',
            content: '🛒 Vi que você deixou alguns produtos no carrinho!'
        },
        {
            type: 'text',
            content: 'Não perca a chance de levar produtos frescos para casa. Que tal finalizar sua compra?'
        },
        {
            type: 'cart-summary',
            showItems: true,
            showTotal: true
        },
        {
            type: 'buttons',
            options: [
                {
                    text: '✅ Finalizar compra agora',
                    action: 'complete-purchase',
                    color: '#22c55e'
                },
                {
                    text: '💰 Ver ofertas especiais',
                    action: 'show-special-offers',
                    color: '#16a34a'
                },
                {
                    text: '❌ Remover do carrinho',
                    action: 'clear-cart',
                    color: '#ef4444'
                }
            ]
        }
    ]
};

// 5. WIDGET DE SUPORTE AO CLIENTE
const customerSupportWidget = {
    id: 'customer-support',
    trigger: 'manual',
    position: 'bottom-left',
    
    flow: [
        {
            type: 'text',
            content: '🤝 Como posso te ajudar hoje?'
        },
        {
            type: 'buttons',
            options: [
                {
                    text: '❓ Dúvidas sobre compras',
                    action: 'shopping-help',
                    color: '#22c55e'
                },
                {
                    text: '📦 Problemas com entrega',
                    action: 'delivery-help',
                    color: '#16a34a'
                },
                {
                    text: '💳 Problemas com pagamento',
                    action: 'payment-help',
                    color: '#15803d'
                },
                {
                    text: '👤 Problemas com cadastro',
                    action: 'registration-help',
                    color: '#059669'
                },
                {
                    text: '📞 Falar com atendente',
                    action: 'human-support',
                    color: '#dc2626'
                }
            ]
        }
    ]
};

// ========================================
// FUNÇÕES DE INTEGRAÇÃO
// ========================================

// Função para configurar event listeners
function setupEventListeners() {
    // Listener para mudança de aba
    document.addEventListener('tabChange', (e) => {
        handleTabChange(e.detail.tab);
    });
    
    // Listener para adição ao carrinho
    document.addEventListener('addToCart', (e) => {
        handleAddToCart(e.detail.product);
    });
    
    // Listener para visualização de produto
    document.addEventListener('productView', (e) => {
        handleProductView(e.detail.product);
    });
    
    // Listener para abandono de carrinho
    document.addEventListener('cartAbandonment', (e) => {
        handleCartAbandonment(e.detail.cart);
    });
}

// ========================================
// HANDLERS DE EVENTOS
// ========================================

function handleTabChange(tab) {
    switch(tab) {
        case 'seller-register':
            Typebot.triggerWidget('seller-onboarding');
            break;
        case 'delivery-register':
            Typebot.triggerWidget('delivery-onboarding');
            break;
        case 'products':
            // Não trigger automático, apenas quando visualizar produto
            break;
        case 'cart':
            // Verificar se há itens no carrinho
            checkCartStatus();
            break;
    }
}

function handleAddToCart(product) {
    // Atualizar recomendações baseadas no produto adicionado
    updateProductRecommendations(product);
    
    // Salvar no histórico do usuário
    saveUserPreference('lastAddedProduct', product);
}

function handleProductView(product) {
    // Trigger recomendação de produtos
    Typebot.triggerWidget('product-recommendation', {
        currentProduct: product,
        userHistory: getUserHistory()
    });
}

function handleCartAbandonment(cart) {
    // Verificar se o carrinho tem valor significativo
    if (cart.total > 20) {
        Typebot.triggerWidget('cart-recovery', { cart: cart });
    }
}

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

function updateProductRecommendations(product) {
    // Lógica para atualizar recomendações baseada no produto adicionado
    const recommendations = generateRecommendations(product);
    
    // Atualizar widget de recomendação
    Typebot.updateWidget('product-recommendation', {
        products: recommendations
    });
}

function generateRecommendations(product) {
    // Simulação de algoritmo de recomendação
    const recommendations = [];
    
    // Baseado na categoria do produto
    switch(product.category) {
        case 'vegetables':
            recommendations.push({
                id: 'veg-1',
                name: 'Mix de Folhas Verdes',
                price: 'R$ 12,90',
                match: '85%'
            });
            break;
        case 'fruits':
            recommendations.push({
                id: 'fruit-1',
                name: 'Cesta de Frutas da Estação',
                price: 'R$ 28,90',
                match: '90%'
            });
            break;
        case 'cheese':
            recommendations.push({
                id: 'cheese-1',
                name: 'Queijo Minas Frescal',
                price: 'R$ 24,90/kg',
                match: '88%'
            });
            break;
    }
    
    return recommendations;
}

function checkCartStatus() {
    const cartItems = getCartItems();
    if (cartItems.length === 0) {
        // Carrinho vazio - não trigger recovery
        return;
    }
    
    // Verificar se há produtos há mais de 10 minutos no carrinho
    const lastUpdate = getCartLastUpdate();
    const timeDiff = Date.now() - lastUpdate;
    
    if (timeDiff > 10 * 60 * 1000) { // 10 minutos
        handleCartAbandonment({ items: cartItems, total: calculateCartTotal() });
    }
}

function saveUserPreference(key, value) {
    const preferences = JSON.parse(localStorage.getItem('hortiperto-preferences') || '{}');
    preferences[key] = value;
    localStorage.setItem('hortiperto-preferences', JSON.stringify(preferences));
}

function getUserHistory() {
    return JSON.parse(localStorage.getItem('hortiperto-user-history') || '[]');
}

function getCartItems() {
    return JSON.parse(localStorage.getItem('hortiperto-cart') || '[]');
}

function getCartLastUpdate() {
    return parseInt(localStorage.getItem('hortiperto-cart-last-update') || '0');
}

function calculateCartTotal() {
    const items = getCartItems();
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// ========================================
// INICIALIZAÇÃO
// ========================================

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    initializeTypebot();
});

// ========================================
// EXPOSIÇÃO DE FUNÇÕES GLOBAIS
// ========================================

// Funções para serem chamadas de outros scripts
window.triggerTypebot = (widgetId, data = {}) => {
    Typebot.triggerWidget(widgetId, data);
};

window.startSellerOnboarding = () => {
    Typebot.triggerWidget('seller-onboarding');
};

window.startCustomerSupport = () => {
    Typebot.triggerWidget('customer-support');
};

window.showProductRecommendations = (product) => {
    Typebot.triggerWidget('product-recommendation', { currentProduct: product });
};

// ========================================
// EXEMPLO DE USO
// ========================================

/*
// Para usar em outros scripts:

// Trigger manual do onboarding de vendedor
document.getElementById('seller-register-btn').addEventListener('click', () => {
    window.startSellerOnboarding();
});

// Trigger de suporte ao cliente
document.getElementById('support-btn').addEventListener('click', () => {
    window.startCustomerSupport();
});

// Trigger de recomendação ao visualizar produto
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
        const product = {
            id: e.currentTarget.dataset.productId,
            name: e.currentTarget.querySelector('.product-name').textContent,
            category: e.currentTarget.dataset.category
        };
        window.showProductRecommendations(product);
    });
});
*/ 