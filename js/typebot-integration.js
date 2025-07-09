// ========================================
// INTEGRAÇÃO TYPEBOT - HORTIPERTO
// ========================================

class HortiPertoTypebot {
    constructor() {
        this.currentUser = null;
        this.userPreferences = {};
        this.conversationHistory = [];
        this.init();
    }

    init() {
        this.setupTypebotWidgets();
        this.setupEventListeners();
        this.loadUserPreferences();
    }

    // ========================================
    // CONFIGURAÇÃO DOS WIDGETS TYPEBOT
    // ========================================

    setupTypebotWidgets() {
        // Widget principal de boas-vindas
        this.createWelcomeWidget();
        
        // Widget de onboarding para vendedores
        this.createSellerOnboardingWidget();
        
        // Widget de suporte ao cliente
        this.createCustomerSupportWidget();
        
        // Widget de recomendação de produtos
        this.createProductRecommendationWidget();
        
        // Widget de feedback e avaliação
        this.createFeedbackWidget();
    }

    createWelcomeWidget() {
        const welcomeWidget = {
            id: 'welcome-widget',
            position: 'bottom-right',
            trigger: 'page-load',
            config: {
                theme: {
                    primaryColor: '#22c55e',
                    secondaryColor: '#16a34a',
                    backgroundColor: '#ffffff',
                    textColor: '#1f2937'
                },
                messages: [
                    {
                        type: 'text',
                        content: '🌱 Olá! Bem-vindo ao HortiPerto! Como posso te ajudar hoje?',
                        delay: 1000
                    },
                    {
                        type: 'buttons',
                        options: [
                            { text: '🛒 Quero comprar produtos', action: 'navigate-to-products' },
                            { text: '👨‍🌾 Quero vender produtos', action: 'seller-onboarding' },
                            { text: '🚚 Quero ser entregador', action: 'delivery-onboarding' },
                            { text: '❓ Preciso de ajuda', action: 'customer-support' }
                        ]
                    }
                ]
            }
        };

        this.renderWidget(welcomeWidget);
    }

    createSellerOnboardingWidget() {
        const sellerWidget = {
            id: 'seller-onboarding',
            position: 'center',
            trigger: 'manual',
            config: {
                theme: {
                    primaryColor: '#22c55e',
                    backgroundColor: '#f0fdf4'
                },
                flow: [
                    {
                        type: 'text',
                        content: '👨‍🌾 Ótimo! Vamos te ajudar a se tornar um vendedor no HortiPerto!'
                    },
                    {
                        type: 'text',
                        content: 'Primeiro, me conte um pouco sobre você:'
                    },
                    {
                        type: 'input',
                        field: 'seller-name',
                        label: 'Qual é o seu nome completo?',
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
                        ]
                    },
                    {
                        type: 'input',
                        field: 'seller-location',
                        label: 'Em que cidade/região você está localizado?',
                        validation: 'required'
                    },
                    {
                        type: 'text',
                        content: 'Perfeito! Agora vou te explicar os próximos passos...'
                    },
                    {
                        type: 'buttons',
                        options: [
                            { text: '📋 Ver requisitos completos', action: 'show-requirements' },
                            { text: '📝 Começar cadastro', action: 'start-registration' },
                            { text: '📞 Falar com consultor', action: 'contact-consultant' }
                        ]
                    }
                ]
            }
        };

        this.registerWidget(sellerWidget);
    }

    createCustomerSupportWidget() {
        const supportWidget = {
            id: 'customer-support',
            position: 'bottom-left',
            trigger: 'manual',
            config: {
                theme: {
                    primaryColor: '#22c55e',
                    backgroundColor: '#ffffff'
                },
                flow: [
                    {
                        type: 'text',
                        content: '🤝 Como posso te ajudar?'
                    },
                    {
                        type: 'buttons',
                        options: [
                            { text: '❓ Dúvidas sobre compras', action: 'shopping-help' },
                            { text: '📦 Problemas com entrega', action: 'delivery-help' },
                            { text: '💳 Problemas com pagamento', action: 'payment-help' },
                            { text: '👤 Problemas com cadastro', action: 'registration-help' },
                            { text: '📞 Falar com atendente', action: 'human-support' }
                        ]
                    }
                ]
            }
        };

        this.registerWidget(supportWidget);
    }

    createProductRecommendationWidget() {
        const recommendationWidget = {
            id: 'product-recommendation',
            position: 'inline',
            trigger: 'product-view',
            config: {
                theme: {
                    primaryColor: '#22c55e',
                    backgroundColor: '#f0fdf4'
                },
                flow: [
                    {
                        type: 'text',
                        content: '🍎 Que tal experimentar estes produtos similares?'
                    },
                    {
                        type: 'product-carousel',
                        products: [
                            { id: 1, name: 'Cesta de Legumes Orgânicos', price: 'R$ 25,90', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655' },
                            { id: 2, name: 'Queijo Artesanal', price: 'R$ 32,50/kg', image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a' },
                            { id: 3, name: 'Salada Pronta', price: 'R$ 15,90', image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716' }
                        ],
                        maxItems: 3
                    },
                    {
                        type: 'buttons',
                        options: [
                            { text: '👍 Gostei!', action: 'add-to-cart' },
                            { text: '👎 Não gostei', action: 'provide-feedback' },
                            { text: '❌ Fechar', action: 'close' }
                        ]
                    }
                ]
            }
        };

        this.registerWidget(recommendationWidget);
    }

    createFeedbackWidget() {
        const feedbackWidget = {
            id: 'feedback-widget',
            position: 'bottom-right',
            trigger: 'purchase-complete',
            config: {
                theme: {
                    primaryColor: '#22c55e',
                    backgroundColor: '#ffffff'
                },
                flow: [
                    {
                        type: 'text',
                        content: '⭐ Como foi sua experiência com o HortiPerto?'
                    },
                    {
                        type: 'rating',
                        field: 'overall-rating',
                        maxStars: 5,
                        label: 'Avalie sua experiência geral'
                    },
                    {
                        type: 'input',
                        field: 'feedback-comment',
                        label: 'Conte-nos mais sobre sua experiência (opcional)',
                        multiline: true
                    },
                    {
                        type: 'buttons',
                        options: [
                            { text: '📤 Enviar avaliação', action: 'submit-feedback' },
                            { text: '❌ Pular', action: 'skip-feedback' }
                        ]
                    }
                ]
            }
        };

        this.registerWidget(feedbackWidget);
    }

    // ========================================
    // FUNÇÕES DE INTEGRAÇÃO
    // ========================================

    renderWidget(widget) {
        // Simulação de renderização do widget
        console.log(`Renderizando widget: ${widget.id}`);
        
        // Aqui você integraria com a API do Typebot
        // Exemplo: Typebot.render(widget);
    }

    registerWidget(widget) {
        this.widgets = this.widgets || {};
        this.widgets[widget.id] = widget;
    }

    // ========================================
    // FLUXOS ESPECÍFICOS PARA DIFERENCIAÇÃO
    // ========================================

    // Fluxo de onboarding para produtores rurais
    startSellerOnboarding() {
        const flow = [
            {
                type: 'text',
                content: '🌾 Vamos te ajudar a digitalizar sua produção!'
            },
            {
                type: 'text',
                content: 'O HortiPerto conecta você diretamente aos consumidores, eliminando intermediários.'
            },
            {
                type: 'input',
                field: 'production-type',
                label: 'Que tipo de produtos você cultiva?',
                placeholder: 'Ex: Hortaliças, Frutas, Queijos, etc.'
            },
            {
                type: 'select',
                field: 'production-scale',
                label: 'Qual o tamanho da sua produção?',
                options: [
                    'Familiar (até 1 hectare)',
                    'Pequeno produtor (1-10 hectares)',
                    'Médio produtor (10-50 hectares)',
                    'Grande produtor (acima de 50 hectares)'
                ]
            },
            {
                type: 'text',
                content: 'Baseado nas suas respostas, vou te mostrar os benefícios específicos para você:'
            },
            {
                type: 'benefits-display',
                benefits: this.getPersonalizedBenefits()
            }
        ];

        this.executeFlow(flow);
    }

    // Fluxo de recomendação inteligente
    startProductRecommendation(userData) {
        const recommendations = this.generateRecommendations(userData);
        
        const flow = [
            {
                type: 'text',
                content: '🍎 Descobrimos produtos perfeitos para você!'
            },
            {
                type: 'product-showcase',
                products: recommendations,
                layout: 'grid'
            },
            {
                type: 'buttons',
                options: [
                    { text: '🛒 Adicionar ao carrinho', action: 'add-selected' },
                    { text: '💾 Salvar para depois', action: 'save-wishlist' },
                    { text: '🔄 Ver mais opções', action: 'show-more' }
                ]
            }
        ];

        this.executeFlow(flow);
    }

    // Fluxo de suporte contextual
    startContextualSupport(context) {
        let flow = [];

        switch(context) {
            case 'payment-issue':
                flow = [
                    {
                        type: 'text',
                        content: '💳 Vou te ajudar com o pagamento!'
                    },
                    {
                        type: 'text',
                        content: 'Quais métodos de pagamento você prefere usar?'
                    },
                    {
                        type: 'buttons',
                        options: [
                            { text: '💳 Cartão de crédito', action: 'card-help' },
                            { text: '📱 PIX', action: 'pix-help' },
                            { text: '💵 Dinheiro', action: 'cash-help' }
                        ]
                    }
                ];
                break;

            case 'delivery-issue':
                flow = [
                    {
                        type: 'text',
                        content: '🚚 Vamos resolver sua questão de entrega!'
                    },
                    {
                        type: 'text',
                        content: 'Em que etapa da entrega você está?'
                    },
                    {
                        type: 'buttons',
                        options: [
                            { text: '⏰ Pedido em preparação', action: 'preparation-help' },
                            { text: '🚚 Pedido em transporte', action: 'transport-help' },
                            { text: '📦 Pedido entregue com problema', action: 'delivery-problem' }
                        ]
                    }
                ];
                break;
        }

        this.executeFlow(flow);
    }

    // ========================================
    // FUNÇÕES AUXILIARES
    // ========================================

    getPersonalizedBenefits() {
        return [
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
            },
            {
                icon: '📊',
                title: 'Analytics avançado',
                description: 'Entenda o comportamento dos seus clientes'
            }
        ];
    }

    generateRecommendations(userData) {
        // Lógica de recomendação baseada no histórico do usuário
        return [
            {
                id: 1,
                name: 'Cesta de Legumes Orgânicos',
                price: 'R$ 25,90',
                image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655',
                match: '95%'
            },
            {
                id: 2,
                name: 'Queijo Artesanal Colonial',
                price: 'R$ 32,50/kg',
                image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a',
                match: '88%'
            },
            {
                id: 3,
                name: 'Salada Pronta Premium',
                price: 'R$ 15,90',
                image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716',
                match: '82%'
            }
        ];
    }

    executeFlow(flow) {
        console.log('Executando fluxo:', flow);
        // Implementação da execução do fluxo
    }

    // ========================================
    // EVENT LISTENERS
    // ========================================

    setupEventListeners() {
        // Listener para mudança de aba
        document.addEventListener('tabChange', (e) => {
            this.handleTabChange(e.detail.tab);
        });

        // Listener para adição ao carrinho
        document.addEventListener('addToCart', (e) => {
            this.handleAddToCart(e.detail.product);
        });

        // Listener para finalização de compra
        document.addEventListener('purchaseComplete', (e) => {
            this.handlePurchaseComplete(e.detail.order);
        });
    }

    handleTabChange(tab) {
        switch(tab) {
            case 'seller-register':
                this.triggerWidget('seller-onboarding');
                break;
            case 'delivery-register':
                this.triggerWidget('delivery-onboarding');
                break;
            case 'products':
                this.triggerWidget('product-recommendation');
                break;
        }
    }

    handleAddToCart(product) {
        // Atualizar recomendações baseadas no produto adicionado
        this.updateRecommendations(product);
    }

    handlePurchaseComplete(order) {
        // Trigger feedback widget após 24h
        setTimeout(() => {
            this.triggerWidget('feedback-widget');
        }, 24 * 60 * 60 * 1000);
    }

    triggerWidget(widgetId) {
        const widget = this.widgets[widgetId];
        if (widget) {
            this.renderWidget(widget);
        }
    }

    // ========================================
    // PERSISTÊNCIA DE DADOS
    // ========================================

    loadUserPreferences() {
        const saved = localStorage.getItem('hortiperto-preferences');
        if (saved) {
            this.userPreferences = JSON.parse(saved);
        }
    }

    saveUserPreferences() {
        localStorage.setItem('hortiperto-preferences', JSON.stringify(this.userPreferences));
    }

    updateUserPreference(key, value) {
        this.userPreferences[key] = value;
        this.saveUserPreferences();
    }
}

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    window.hortiPertoTypebot = new HortiPertoTypebot();
});

// ========================================
// EXPOSIÇÃO DE FUNÇÕES GLOBAIS
// ========================================

window.triggerTypebot = (widgetId) => {
    if (window.hortiPertoTypebot) {
        window.hortiPertoTypebot.triggerWidget(widgetId);
    }
};

window.startSellerOnboarding = () => {
    if (window.hortiPertoTypebot) {
        window.hortiPertoTypebot.startSellerOnboarding();
    }
};

window.startProductRecommendation = (userData) => {
    if (window.hortiPertoTypebot) {
        window.hortiPertoTypebot.startProductRecommendation(userData);
    }
}; 