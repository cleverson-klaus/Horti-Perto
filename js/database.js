// HortiPerto - Sistema de Banco de Dados IndexedDB
// Gerenciamento completo de dados locais da plataforma

class HortiPertoDB {
    constructor() {
        this.dbName = 'HortiPertoDB';
        this.dbVersion = 2;
        this.db = null;
        this.stores = {
            users: 'users',
            sellers: 'sellers',
            delivery: 'delivery',
            products: 'products',
            cart: 'cart',
            orders: 'orders',
            uploads: 'uploads'
        };
    }

    // Inicializar o banco de dados
    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);

            request.onerror = () => {
                console.error('Erro ao abrir banco de dados:', request.error);
                reject(request.error);
            };

            request.onsuccess = () => {
                this.db = request.result;
                console.log('Banco de dados HortiPerto conectado com sucesso');
                resolve(this.db);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                this.createStores(db);
            };
        });
    }

    // Criar as stores (tabelas) do banco
    createStores(db) {
        // Store de usuários
        if (!db.objectStoreNames.contains(this.stores.users)) {
            const userStore = db.createObjectStore(this.stores.users, { keyPath: 'id', autoIncrement: true });
            userStore.createIndex('email', 'email', { unique: true });
            userStore.createIndex('cpf', 'cpf', { unique: true });
            console.log('Store "users" criada');
        }

        // Store de vendedores
        if (!db.objectStoreNames.contains(this.stores.sellers)) {
            const sellerStore = db.createObjectStore(this.stores.sellers, { keyPath: 'id', autoIncrement: true });
            sellerStore.createIndex('email', 'email', { unique: true });
            sellerStore.createIndex('document', 'document', { unique: true });
            sellerStore.createIndex('cep', 'cep', { unique: false });
            console.log('Store "sellers" criada');
        }

        // Store de entregadores
        if (!db.objectStoreNames.contains(this.stores.delivery)) {
            const deliveryStore = db.createObjectStore(this.stores.delivery, { keyPath: 'id', autoIncrement: true });
            deliveryStore.createIndex('email', 'email', { unique: true });
            deliveryStore.createIndex('cpf', 'cpf', { unique: true });
            deliveryStore.createIndex('cep', 'cep', { unique: false });
            console.log('Store "delivery" criada');
        }

        // Store de produtos
        if (!db.objectStoreNames.contains(this.stores.products)) {
            const productStore = db.createObjectStore(this.stores.products, { keyPath: 'id', autoIncrement: true });
            productStore.createIndex('sellerId', 'sellerId', { unique: false });
            productStore.createIndex('category', 'category', { unique: false });
            productStore.createIndex('status', 'status', { unique: false });
            console.log('Store "products" criada');
        }

        // Store do carrinho
        if (!db.objectStoreNames.contains(this.stores.cart)) {
            const cartStore = db.createObjectStore(this.stores.cart, { keyPath: 'id', autoIncrement: true });
            cartStore.createIndex('userId', 'userId', { unique: false });
            cartStore.createIndex('productId', 'productId', { unique: false });
            console.log('Store "cart" criada');
        }

        // Store de pedidos
        if (!db.objectStoreNames.contains(this.stores.orders)) {
            const orderStore = db.createObjectStore(this.stores.orders, { keyPath: 'id', autoIncrement: true });
            orderStore.createIndex('userId', 'userId', { unique: false });
            orderStore.createIndex('sellerId', 'sellerId', { unique: false });
            orderStore.createIndex('status', 'status', { unique: false });
            orderStore.createIndex('date', 'date', { unique: false });
            console.log('Store "orders" criada');
        }

        // Store de uploads
        if (!db.objectStoreNames.contains(this.stores.uploads)) {
            const uploadStore = db.createObjectStore(this.stores.uploads, { keyPath: 'id', autoIncrement: true });
            uploadStore.createIndex('userId', 'userId', { unique: false });
            uploadStore.createIndex('type', 'type', { unique: false });
            uploadStore.createIndex('fileName', 'fileName', { unique: false });
            console.log('Store "uploads" criada');
        }
    }

    // ========================================
    // OPERAÇÕES CRUD - USUÁRIOS
    // ========================================

    async addUser(userData) {
        return this.addRecord(this.stores.users, {
            ...userData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    }

    async getUserById(id) {
        return this.getRecordById(this.stores.users, id);
    }

    async getUserByEmail(email) {
        return this.getRecordByIndex(this.stores.users, 'email', email);
    }

    async getUserByCPF(cpf) {
        return this.getRecordByIndex(this.stores.users, 'cpf', cpf);
    }

    async updateUser(id, userData) {
        return this.updateRecord(this.stores.users, id, {
            ...userData,
            updatedAt: new Date().toISOString()
        });
    }

    async deleteUser(id) {
        return this.deleteRecord(this.stores.users, id);
    }

    async getAllUsers() {
        return this.getAllRecords(this.stores.users);
    }

    // ========================================
    // OPERAÇÕES CRUD - VENDEDORES
    // ========================================

    async addSeller(sellerData) {
        return this.addRecord(this.stores.sellers, {
            ...sellerData,
            balance: 0,
            status: 'ativo',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    }

    async getSellerById(id) {
        return this.getRecordById(this.stores.sellers, id);
    }

    async getSellerByEmail(email) {
        return this.getRecordByIndex(this.stores.sellers, 'email', email);
    }

    async getSellerByDocument(document) {
        return this.getRecordByIndex(this.stores.sellers, 'document', document);
    }

    async updateSeller(id, sellerData) {
        return this.updateRecord(this.stores.sellers, id, {
            ...sellerData,
            updatedAt: new Date().toISOString()
        });
    }

    async deleteSeller(id) {
        return this.deleteRecord(this.stores.sellers, id);
    }

    async getAllSellers() {
        return this.getAllRecords(this.stores.sellers);
    }

    async updateSellerBalance(id, amount) {
        const seller = await this.getSellerById(id);
        if (seller) {
            seller.balance += amount;
            return this.updateSeller(id, seller);
        }
        throw new Error('Vendedor não encontrado');
    }

    // ========================================
    // OPERAÇÕES CRUD - ENTREGADORES
    // ========================================

    async addDelivery(deliveryData) {
        return this.addRecord(this.stores.delivery, {
            ...deliveryData,
            balance: 0,
            status: 'ativo',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    }

    async getDeliveryById(id) {
        return this.getRecordById(this.stores.delivery, id);
    }

    async getDeliveryByEmail(email) {
        return this.getRecordByIndex(this.stores.delivery, 'email', email);
    }

    async getDeliveryByCPF(cpf) {
        return this.getRecordByIndex(this.stores.delivery, 'cpf', cpf);
    }

    async updateDelivery(id, deliveryData) {
        return this.updateRecord(this.stores.delivery, id, {
            ...deliveryData,
            updatedAt: new Date().toISOString()
        });
    }

    async deleteDelivery(id) {
        return this.deleteRecord(this.stores.delivery, id);
    }

    async getAllDelivery() {
        return this.getAllRecords(this.stores.delivery);
    }

    async updateDeliveryBalance(id, amount) {
        const delivery = await this.getDeliveryById(id);
        if (delivery) {
            delivery.balance += amount;
            return this.updateDelivery(id, delivery);
        }
        throw new Error('Entregador não encontrado');
    }

    // ========================================
    // OPERAÇÕES CRUD - PRODUTOS
    // ========================================

    async addProduct(productData) {
        return this.addRecord(this.stores.products, {
            ...productData,
            status: 'ativo',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    }

    async getProductById(id) {
        return this.getRecordById(this.stores.products, id);
    }

    async getProductsBySeller(sellerId) {
        return this.getRecordsByIndex(this.stores.products, 'sellerId', sellerId);
    }

    async getProductsByCategory(category) {
        return this.getRecordsByIndex(this.stores.products, 'category', category);
    }

    async getActiveProducts() {
        return this.getRecordsByIndex(this.stores.products, 'status', 'ativo');
    }

    async updateProduct(id, productData) {
        return this.updateRecord(this.stores.products, id, {
            ...productData,
            updatedAt: new Date().toISOString()
        });
    }

    async deleteProduct(id) {
        return this.deleteRecord(this.stores.products, id);
    }

    async getAllProducts() {
        return this.getAllRecords(this.stores.products);
    }

    async toggleProductStatus(id) {
        const product = await this.getProductById(id);
        if (product) {
            product.status = product.status === 'ativo' ? 'inativo' : 'ativo';
            return this.updateProduct(id, product);
        }
        throw new Error('Produto não encontrado');
    }

    // ========================================
    // OPERAÇÕES CRUD - CARRINHO
    // ========================================

    async addToCart(cartData) {
        return this.addRecord(this.stores.cart, {
            ...cartData,
            createdAt: new Date().toISOString()
        });
    }

    async getCartByUser(userId) {
        return this.getRecordsByIndex(this.stores.cart, 'userId', userId);
    }

    async updateCartItem(id, cartData) {
        return this.updateRecord(this.stores.cart, id, cartData);
    }

    async deleteCartItem(id) {
        return this.deleteRecord(this.stores.cart, id);
    }

    async clearUserCart(userId) {
        const cartItems = await this.getCartByUser(userId);
        const deletePromises = cartItems.map(item => this.deleteCartItem(item.id));
        return Promise.all(deletePromises);
    }

    // ========================================
    // OPERAÇÕES CRUD - PEDIDOS
    // ========================================

    async addOrder(orderData) {
        return this.addRecord(this.stores.orders, {
            ...orderData,
            status: 'pendente',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    }

    async getOrderById(id) {
        return this.getRecordById(this.stores.orders, id);
    }

    async getOrdersByUser(userId) {
        return this.getRecordsByIndex(this.stores.orders, 'userId', userId);
    }

    async getOrdersBySeller(sellerId) {
        return this.getRecordsByIndex(this.stores.orders, 'sellerId', sellerId);
    }

    async updateOrderStatus(id, status) {
        const order = await this.getOrderById(id);
        if (order) {
            order.status = status;
            order.updatedAt = new Date().toISOString();
            return this.updateRecord(this.stores.orders, id, order);
        }
        throw new Error('Pedido não encontrado');
    }

    async deleteOrder(id) {
        return this.deleteRecord(this.stores.orders, id);
    }

    async getAllOrders() {
        return this.getAllRecords(this.stores.orders);
    }

    // ========================================
    // OPERAÇÕES CRUD - UPLOADS
    // ========================================

    async addUpload(uploadData) {
        return this.addRecord(this.stores.uploads, {
            ...uploadData,
            createdAt: new Date().toISOString()
        });
    }

    async getUploadById(id) {
        return this.getRecordById(this.stores.uploads, id);
    }

    async getUploadsByUser(userId) {
        return this.getRecordsByIndex(this.stores.uploads, 'userId', userId);
    }

    async getUploadsByType(type) {
        return this.getRecordsByIndex(this.stores.uploads, 'type', type);
    }

    async deleteUpload(id) {
        return this.deleteRecord(this.stores.uploads, id);
    }

    async getAllUploads() {
        return this.getAllRecords(this.stores.uploads);
    }

    // ========================================
    // OPERAÇÕES GENÉRICAS
    // ========================================

    async addRecord(storeName, data) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.add(data);

            request.onsuccess = () => {
                console.log(`Registro adicionado em ${storeName}:`, data);
                resolve(request.result);
            };

            request.onerror = () => {
                console.error(`Erro ao adicionar registro em ${storeName}:`, request.error);
                reject(request.error);
            };
        });
    }

    async getRecordById(storeName, id) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            const request = store.get(id);

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                console.error(`Erro ao buscar registro em ${storeName}:`, request.error);
                reject(request.error);
            };
        });
    }

    async getRecordByIndex(storeName, indexName, value) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            const index = store.index(indexName);
            const request = index.get(value);

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                console.error(`Erro ao buscar registro por índice em ${storeName}:`, request.error);
                reject(request.error);
            };
        });
    }

    async getRecordsByIndex(storeName, indexName, value) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            const index = store.index(indexName);
            const request = index.getAll(value);

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                console.error(`Erro ao buscar registros por índice em ${storeName}:`, request.error);
                reject(request.error);
            };
        });
    }

    async updateRecord(storeName, id, data) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.put({ ...data, id });

            request.onsuccess = () => {
                console.log(`Registro atualizado em ${storeName}:`, data);
                resolve(request.result);
            };

            request.onerror = () => {
                console.error(`Erro ao atualizar registro em ${storeName}:`, request.error);
                reject(request.error);
            };
        });
    }

    async deleteRecord(storeName, id) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.delete(id);

            request.onsuccess = () => {
                console.log(`Registro deletado em ${storeName}:`, id);
                resolve();
            };

            request.onerror = () => {
                console.error(`Erro ao deletar registro em ${storeName}:`, request.error);
                reject(request.error);
            };
        });
    }

    async getAllRecords(storeName) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            const request = store.getAll();

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                console.error(`Erro ao buscar todos os registros em ${storeName}:`, request.error);
                reject(request.error);
            };
        });
    }

    // ========================================
    // UTILITÁRIOS
    // ========================================

    // Limpar todo o banco de dados
    async clearDatabase() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.deleteDatabase(this.dbName);

            request.onsuccess = () => {
                console.log('Banco de dados deletado com sucesso');
                this.db = null;
                resolve();
            };

            request.onerror = () => {
                console.error('Erro ao deletar banco de dados:', request.error);
                reject(request.error);
            };
        });
    }

    // Verificar se o banco está conectado
    isConnected() {
        return this.db !== null;
    }

    // Obter informações do banco
    getDatabaseInfo() {
        if (!this.db) {
            return { connected: false };
        }

        return {
            connected: true,
            name: this.db.name,
            version: this.db.version,
            stores: Array.from(this.db.objectStoreNames)
        };
    }

    // Exportar dados do banco
    async exportData() {
        const data = {};
        
        for (const storeName of Object.values(this.stores)) {
            try {
                data[storeName] = await this.getAllRecords(storeName);
            } catch (error) {
                console.error(`Erro ao exportar dados de ${storeName}:`, error);
                data[storeName] = [];
            }
        }

        return data;
    }

    // Importar dados para o banco
    async importData(data) {
        const results = {};

        for (const [storeName, records] of Object.entries(data)) {
            if (this.stores[storeName]) {
                results[storeName] = [];
                for (const record of records) {
                    try {
                        const id = await this.addRecord(storeName, record);
                        results[storeName].push({ id, success: true });
                    } catch (error) {
                        results[storeName].push({ error: error.message, success: false });
                    }
                }
            }
        }

        return results;
    }
}

// Instância global do banco de dados
window.hortiPertoDB = new HortiPertoDB();

// Inicializar o banco quando o documento carregar
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.hortiPertoDB.init();
        console.log('Banco de dados HortiPerto inicializado com sucesso');
        
        // Carregar dados demo se o banco estiver vazio
        const products = await window.hortiPertoDB.getAllProducts();
        if (products.length === 0) {
            await loadDemoData();
        }
    } catch (error) {
        console.error('Erro ao inicializar banco de dados:', error);
    }
});

// Função para carregar dados demo
async function loadDemoData() {
    console.log('Carregando dados demo...');
    
    const demoProducts = [
        {
            name: "Cesta de Legumes Orgânicos",
            price: 25.90,
            category: "hortalicas",
            rating: 4.5,
            reviews: 24,
            image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: "Seleção de legumes frescos da fazenda familiar",
            unit: "cesta",
            quantity: 10,
            organic: true,
            sellerId: 1
        },
        {
            name: "Queijo Artesanal",
            price: 32.50,
            category: "queijos",
            rating: 4.0,
            reviews: 18,
            image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: "Queijo colonial feito com leite fresco",
            unit: "kg",
            quantity: 5,
            organic: false,
            sellerId: 1
        }
    ];

    for (const product of demoProducts) {
        try {
            await window.hortiPertoDB.addProduct(product);
        } catch (error) {
            console.error('Erro ao adicionar produto demo:', error);
        }
    }

    console.log('Dados demo carregados com sucesso');
} 