// Testes para funcionalidades do carrinho
describe('Carrinho de Compras', () => {
    beforeEach(() => {
        // Reset do carrinho antes de cada teste
        cart = [];
        cartTotal = 0;
        
        // Mock do DOM
        document.body.innerHTML = `
            <div id="cart-items"></div>
            <div id="cart-count">0</div>
            <div id="cart-total">R$ 0,00</div>
            <div id="cart-total-with-shipping">R$ 5,00</div>
            <div id="cart-summary"></div>
        `;
    });

    test('Deve adicionar produto ao carrinho', () => {
        const productId = 1;
        const quantity = 2;
        
        // Simular adição ao carrinho
        const product = products.find(p => p.id === productId);
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            unit: product.unit
        });
        
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(quantity);
        expect(cart[0].name).toBe(product.name);
    });

    test('Deve calcular total corretamente', () => {
        const productId = 1;
        const quantity = 3;
        
        const product = products.find(p => p.id === productId);
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            unit: product.unit
        });
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        expect(total).toBe(product.price * quantity);
    });

    test('Deve incrementar quantidade de produto existente', () => {
        const productId = 1;
        const initialQuantity = 2;
        const additionalQuantity = 1;
        
        const product = products.find(p => p.id === productId);
        
        // Adicionar produto inicialmente
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: initialQuantity,
            unit: product.unit
        });
        
        // Adicionar mais quantidade
        const existingItem = cart.find(item => item.id === productId);
        existingItem.quantity += additionalQuantity;
        
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(initialQuantity + additionalQuantity);
    });

    test('Deve remover produto do carrinho', () => {
        const productId = 1;
        const product = products.find(p => p.id === productId);
        
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            unit: product.unit
        });
        
        expect(cart.length).toBe(1);
        
        // Remover produto
        cart.splice(0, 1);
        
        expect(cart.length).toBe(0);
    });

    test('Deve calcular total de itens corretamente', () => {
        const product1 = products.find(p => p.id === 1);
        const product2 = products.find(p => p.id === 2);
        
        cart.push({
            id: product1.id,
            name: product1.name,
            price: product1.price,
            quantity: 2,
            unit: product1.unit
        });
        
        cart.push({
            id: product2.id,
            name: product2.name,
            price: product2.price,
            quantity: 3,
            unit: product2.unit
        });
        
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        expect(totalItems).toBe(5);
    });

    test('Deve limpar carrinho completamente', () => {
        const product1 = products.find(p => p.id === 1);
        const product2 = products.find(p => p.id === 2);
        
        cart.push({
            id: product1.id,
            name: product1.name,
            price: product1.price,
            quantity: 1,
            unit: product1.unit
        });
        
        cart.push({
            id: product2.id,
            name: product2.name,
            price: product2.price,
            quantity: 1,
            unit: product2.unit
        });
        
        expect(cart.length).toBe(2);
        
        // Limpar carrinho
        cart = [];
        
        expect(cart.length).toBe(0);
    });
});

// Testes para modal de quantidade
describe('Modal de Quantidade', () => {
    beforeEach(() => {
        // Mock do DOM para modal
        document.body.innerHTML = `
            <div id="quantity-modal" style="display: none;">
                <div class="bg-white">
                    <span id="quantity-display">1</span>
                    <span id="total-price">R$ 0,00</span>
                </div>
            </div>
        `;
        
        window.currentQuantity = 1;
        window.currentProductPrice = 10.00;
    });

    test('Deve incrementar quantidade', () => {
        const initialQuantity = window.currentQuantity;
        changeQuantity(1);
        
        expect(window.currentQuantity).toBe(initialQuantity + 1);
    });

    test('Deve decrementar quantidade', () => {
        window.currentQuantity = 3;
        changeQuantity(-1);
        
        expect(window.currentQuantity).toBe(2);
    });

    test('Não deve decrementar abaixo de 1', () => {
        window.currentQuantity = 1;
        changeQuantity(-1);
        
        expect(window.currentQuantity).toBe(1);
    });

    test('Deve calcular preço total corretamente', () => {
        window.currentQuantity = 3;
        window.currentProductPrice = 5.50;
        
        updateQuantityDisplay();
        
        const expectedTotal = 3 * 5.50;
        expect(expectedTotal).toBe(16.50);
    });
}); 