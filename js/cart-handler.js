// HortiPerto - Gerenciador de Carrinho de Compras
// Integração completa com IndexedDB

class CartHandler {
    constructor() {
        this.cart = [];
        this.cartTotal = 0;
        this.currentUserId = null;
    }

    // ========================================
    // INICIALIZAÇÃO
    // ========================================

    async init() {
        // Carregar usuário atual
        this.currentUserId = window.formHandler.getCurrentUser();
        
        // Carregar carrinho do banco se houver usuário logado
        if (this.currentUserId) {
            await this.loadCartFromDB();
        } else {
            // Carregar carrinho do localStorage como fallback
            this.loadCartFromLocalStorage();
        }
        
        this.updateCartDisplay();
    }

    // ========================================
    // OPERAÇÕES DO CARRINHO
    // ========================================

    async addToCart(productId, quantity = 1) {
        try {
            // Buscar produto no banco
            const product = await window.hortiPertoDB.getProductById(productId);
            if (!product) {
                throw new Error('Produto não encontrado');
            }

            // Verificar se já existe no carrinho
            const existingItem = this.cart.find(item => item.productId === productId);
            
            if (existingItem) {
                // Atualizar quantidade
                existingItem.quantity += quantity;
                existingItem.total = existingItem.price * existingItem.quantity;
                
                // Atualizar no banco se houver usuário logado
                if (this.currentUserId) {
                    await window.hortiPertoDB.updateCartItem(existingItem.id, existingItem);
                }
            } else {
                // Adicionar novo item
                const cartItem = {
                    productId: productId,
                    name: product.name,
                    price: product.price,
                    quantity: quantity,
                    total: product.price * quantity,
                    image: product.image,
                    sellerId: product.sellerId,
                    userId: this.currentUserId
                };

                // Salvar no banco se houver usuário logado
                if (this.currentUserId) {
                    const cartItemId = await window.hortiPertoDB.addToCart(cartItem);
                    cartItem.id = cartItemId;
                } else {
                    cartItem.id = Date.now(); // ID temporário
                }

                this.cart.push(cartItem);
            }

            this.calculateTotal();
            this.updateCartDisplay();
            this.saveCartToLocalStorage();
            
            showNotification(`Produto "${product.name}" adicionado ao carrinho!`, 'success');
            return true;

        } catch (error) {
            console.error('Erro ao adicionar ao carrinho:', error);
            showNotification(error.message, 'error');
            return false;
        }
    }

    async updateQuantity(itemId, newQuantity) {
        try {
            if (newQuantity <= 0) {
                return await this.removeFromCart(itemId);
            }

            const item = this.cart.find(item => item.id === itemId);
            if (!item) {
                throw new Error('Item não encontrado no carrinho');
            }

            item.quantity = newQuantity;
            item.total = item.price * newQuantity;

            // Atualizar no banco se houver usuário logado
            if (this.currentUserId) {
                await window.hortiPertoDB.updateCartItem(itemId, item);
            }

            this.calculateTotal();
            this.updateCartDisplay();
            this.saveCartToLocalStorage();

            return true;

        } catch (error) {
            console.error('Erro ao atualizar quantidade:', error);
            showNotification(error.message, 'error');
            return false;
        }
    }

    async removeFromCart(itemId) {
        try {
            const itemIndex = this.cart.findIndex(item => item.id === itemId);
            if (itemIndex === -1) {
                throw new Error('Item não encontrado no carrinho');
            }

            const removedItem = this.cart[itemIndex];
            this.cart.splice(itemIndex, 1);

            // Remover do banco se houver usuário logado
            if (this.currentUserId) {
                await window.hortiPertoDB.deleteCartItem(itemId);
            }

            this.calculateTotal();
            this.updateCartDisplay();
            this.saveCartToLocalStorage();

            showNotification(`Produto "${removedItem.name}" removido do carrinho!`, 'info');
            return true;

        } catch (error) {
            console.error('Erro ao remover do carrinho:', error);
            showNotification(error.message, 'error');
            return false;
        }
    }

    async clearCart() {
        try {
            // Limpar do banco se houver usuário logado
            if (this.currentUserId) {
                await window.hortiPertoDB.clearUserCart(this.currentUserId);
            }

            this.cart = [];
            this.cartTotal = 0;
            this.updateCartDisplay();
            this.saveCartToLocalStorage();

            showNotification('Carrinho limpo com sucesso!', 'info');
            return true;

        } catch (error) {
            console.error('Erro ao limpar carrinho:', error);
            showNotification(error.message, 'error');
            return false;
        }
    }

    // ========================================
    // CÁLCULOS E ATUALIZAÇÕES
    // ========================================

    calculateTotal() {
        this.cartTotal = this.cart.reduce((total, item) => total + item.total, 0);
        return this.cartTotal;
    }

    getCartCount() {
        return this.cart.reduce((count, item) => count + item.quantity, 0);
    }

    updateCartDisplay() {
        // Atualizar contador no menu
        const cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            const count = this.getCartCount();
            cartCountElement.textContent = count;
            cartCountElement.style.display = count > 0 ? 'block' : 'none';
        }

        // Atualizar total no carrinho
        const cartTotalElement = document.getElementById('cart-total');
        if (cartTotalElement) {
            cartTotalElement.textContent = `R$ ${this.cartTotal.toFixed(2)}`;
        }

        // Atualizar lista de itens
        this.renderCartItems();
    }

    renderCartItems() {
        const cartContainer = document.getElementById('cart-items');
        if (!cartContainer) return;

        if (this.cart.length === 0) {
            cartContainer.innerHTML = '<p class="text-center text-gray-500 py-4">Carrinho vazio</p>';
            return;
        }

        const cartHTML = this.cart.map(item => `
            <div class="cart-item bg-white rounded-lg p-4 mb-3 shadow-sm" data-id="${item.id}">
                <div class="flex items-center gap-3">
                    <img src="${item.image || 'https://via.placeholder.com/60x60'}" 
                         alt="${item.name}" 
                         class="w-15 h-15 object-cover rounded-lg">
                    <div class="flex-1">
                        <h4 class="font-semibold text-gray-800">${item.name}</h4>
                        <p class="text-green-600 font-medium">R$ ${item.price.toFixed(2)}</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <button onclick="cartHandler.updateQuantity(${item.id}, ${item.quantity - 1})" 
                                class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                            <i class="fas fa-minus text-sm"></i>
                        </button>
                        <span class="w-8 text-center font-medium">${item.quantity}</span>
                        <button onclick="cartHandler.updateQuantity(${item.id}, ${item.quantity + 1})" 
                                class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600">
                            <i class="fas fa-plus text-sm"></i>
                        </button>
                        <button onclick="cartHandler.removeFromCart(${item.id})" 
                                class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 ml-2">
                            <i class="fas fa-trash text-sm"></i>
                        </button>
                    </div>
                </div>
                <div class="mt-2 text-right">
                    <span class="font-semibold text-gray-800">Total: R$ ${item.total.toFixed(2)}</span>
                </div>
            </div>
        `).join('');

        cartContainer.innerHTML = cartHTML;
    }

    // ========================================
    // PERSISTÊNCIA DE DADOS
    // ========================================

    async loadCartFromDB() {
        try {
            if (!this.currentUserId) return;

            const cartItems = await window.hortiPertoDB.getCartByUser(this.currentUserId);
            this.cart = cartItems;
            this.calculateTotal();
            
        } catch (error) {
            console.error('Erro ao carregar carrinho do banco:', error);
            this.loadCartFromLocalStorage();
        }
    }

    loadCartFromLocalStorage() {
        try {
            const savedCart = localStorage.getItem('hortiPertoCart');
            if (savedCart) {
                this.cart = JSON.parse(savedCart);
                this.calculateTotal();
            }
        } catch (error) {
            console.error('Erro ao carregar carrinho do localStorage:', error);
            this.cart = [];
        }
    }

    saveCartToLocalStorage() {
        try {
            localStorage.setItem('hortiPertoCart', JSON.stringify(this.cart));
        } catch (error) {
            console.error('Erro ao salvar carrinho no localStorage:', error);
        }
    }

    // ========================================
    // FINALIZAÇÃO DE COMPRA
    // ========================================

    async proceedToCheckout() {
        try {
            if (this.cart.length === 0) {
                showNotification('Carrinho vazio!', 'warning');
                return false;
            }

            if (!this.currentUserId) {
                showNotification('Faça login para finalizar a compra!', 'warning');
                return false;
            }

            // Criar pedido
            const orderData = {
                userId: this.currentUserId,
                items: this.cart,
                total: this.cartTotal,
                status: 'pendente',
                paymentMethod: 'pix', // Pode ser dinâmico
                deliveryAddress: '', // Pode ser obtido do usuário
                sellerId: this.cart[0].sellerId // Assumindo mesmo vendedor
            };

            const orderId = await window.hortiPertoDB.addOrder(orderData);

            // Limpar carrinho
            await this.clearCart();

            showNotification(`Pedido #${orderId} criado com sucesso!`, 'success');
            return orderId;

        } catch (error) {
            console.error('Erro ao finalizar compra:', error);
            showNotification(error.message, 'error');
            return false;
        }
    }

    // ========================================
    // UTILITÁRIOS
    // ========================================

    getCartSummary() {
        return {
            itemCount: this.cart.length,
            totalItems: this.getCartCount(),
            total: this.cartTotal,
            items: this.cart
        };
    }

    isCartEmpty() {
        return this.cart.length === 0;
    }

    getCartItemById(itemId) {
        return this.cart.find(item => item.id === itemId);
    }

    // Migrar carrinho do localStorage para o banco
    async migrateCartToDB() {
        try {
            if (!this.currentUserId) return;

            const localCart = localStorage.getItem('hortiPertoCart');
            if (localCart) {
                const cartItems = JSON.parse(localCart);
                
                for (const item of cartItems) {
                    await window.hortiPertoDB.addToCart({
                        ...item,
                        userId: this.currentUserId
                    });
                }

                // Limpar localStorage após migração
                localStorage.removeItem('hortiPertoCart');
                console.log('Carrinho migrado para o banco com sucesso');
            }
        } catch (error) {
            console.error('Erro ao migrar carrinho:', error);
        }
    }

    // Sincronizar carrinho quando usuário faz login
    async syncCartOnLogin(userId) {
        this.currentUserId = userId;
        await this.migrateCartToDB();
        await this.loadCartFromDB();
        this.updateCartDisplay();
    }

    // Limpar carrinho quando usuário faz logout
    clearCartOnLogout() {
        this.currentUserId = null;
        this.cart = [];
        this.cartTotal = 0;
        this.updateCartDisplay();
        this.saveCartToLocalStorage();
    }
}

// Instância global do gerenciador de carrinho
window.cartHandler = new CartHandler();
// Removido: Inicializar carrinho automaticamente
// document.addEventListener('DOMContentLoaded', () => {
//     window.cartHandler.init();
// }); 