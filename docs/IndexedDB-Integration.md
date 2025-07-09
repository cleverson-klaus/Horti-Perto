# Integração com IndexedDB - HortiPerto

## 📋 Visão Geral

A plataforma HortiPerto agora utiliza o **IndexedDB** como banco de dados local para persistir dados dos usuários, vendedores, entregadores, produtos, carrinho de compras e pedidos. Esta integração oferece uma experiência offline completa e sincronização automática quando há conexão com a internet.

## 🏗️ Arquitetura do Sistema

### **Estrutura do Banco de Dados**

O IndexedDB da HortiPerto é organizado em **7 stores (tabelas)** principais:

1. **`users`** - Dados dos consumidores
2. **`sellers`** - Dados dos vendedores
3. **`delivery`** - Dados dos entregadores
4. **`products`** - Catálogo de produtos
5. **`cart`** - Carrinho de compras
6. **`orders`** - Pedidos realizados
7. **`uploads`** - Arquivos enviados

### **Índices e Relacionamentos**

```javascript
// Users
- email (unique)
- cpf (unique)

// Sellers
- email (unique)
- document (unique) - CPF/CNPJ
- cep

// Delivery
- email (unique)
- cpf (unique)
- cep

// Products
- sellerId - Relacionamento com vendedor
- category
- status

// Cart
- userId - Relacionamento com usuário
- productId - Relacionamento com produto

// Orders
- userId - Relacionamento com usuário
- sellerId - Relacionamento com vendedor
- status
- date

// Uploads
- userId - Relacionamento com usuário
- type
- fileName
```

## 🚀 Como Usar

### **1. Inicialização**

O banco de dados é inicializado automaticamente quando a página carrega:

```javascript
document.addEventListener('DOMContentLoaded', async function() {
    // Aguardar inicialização do banco de dados
    await window.hortiPertoDB.init();
    
    // Resto da inicialização da aplicação
    initializeApp();
    await loadProductsFromDB();
});
```

### **2. Operações CRUD**

#### **Usuários**
```javascript
// Adicionar usuário
const userId = await window.hortiPertoDB.addUser(userData);

// Buscar usuário por ID
const user = await window.hortiPertoDB.getUserById(userId);

// Buscar usuário por email
const user = await window.hortiPertoDB.getUserByEmail(email);

// Buscar usuário por CPF
const user = await window.hortiPertoDB.getUserByCPF(cpf);

// Atualizar usuário
await window.hortiPertoDB.updateUser(userId, updatedData);

// Deletar usuário
await window.hortiPertoDB.deleteUser(userId);

// Listar todos os usuários
const users = await window.hortiPertoDB.getAllUsers();
```

#### **Vendedores**
```javascript
// Adicionar vendedor
const sellerId = await window.hortiPertoDB.addSeller(sellerData);

// Buscar vendedor por ID
const seller = await window.hortiPertoDB.getSellerById(sellerId);

// Buscar vendedor por email
const seller = await window.hortiPertoDB.getSellerByEmail(email);

// Buscar vendedor por documento (CPF/CNPJ)
const seller = await window.hortiPertoDB.getSellerByDocument(document);

// Atualizar saldo do vendedor
await window.hortiPertoDB.updateSellerBalance(sellerId, amount);

// Listar todos os vendedores
const sellers = await window.hortiPertoDB.getAllSellers();
```

#### **Entregadores**
```javascript
// Adicionar entregador
const deliveryId = await window.hortiPertoDB.addDelivery(deliveryData);

// Buscar entregador por ID
const delivery = await window.hortiPertoDB.getDeliveryById(deliveryId);

// Buscar entregador por email
const delivery = await window.hortiPertoDB.getDeliveryByEmail(email);

// Buscar entregador por CPF
const delivery = await window.hortiPertoDB.getDeliveryByCPF(cpf);

// Atualizar saldo do entregador
await window.hortiPertoDB.updateDeliveryBalance(deliveryId, amount);

// Listar todos os entregadores
const deliveries = await window.hortiPertoDB.getAllDelivery();
```

#### **Produtos**
```javascript
// Adicionar produto
const productId = await window.hortiPertoDB.addProduct(productData);

// Buscar produto por ID
const product = await window.hortiPertoDB.getProductById(productId);

// Buscar produtos por vendedor
const products = await window.hortiPertoDB.getProductsBySeller(sellerId);

// Buscar produtos por categoria
const products = await window.hortiPertoDB.getProductsByCategory(category);

// Buscar produtos ativos
const products = await window.hortiPertoDB.getActiveProducts();

// Atualizar produto
await window.hortiPertoDB.updateProduct(productId, updatedData);

// Deletar produto
await window.hortiPertoDB.deleteProduct(productId);

// Alternar status do produto
await window.hortiPertoDB.toggleProductStatus(productId);

// Listar todos os produtos
const products = await window.hortiPertoDB.getAllProducts();
```

#### **Carrinho de Compras**
```javascript
// Adicionar item ao carrinho
const cartItemId = await window.hortiPertoDB.addToCart(cartData);

// Buscar carrinho do usuário
const cartItems = await window.hortiPertoDB.getCartByUser(userId);

// Atualizar item do carrinho
await window.hortiPertoDB.updateCartItem(cartItemId, updatedData);

// Deletar item do carrinho
await window.hortiPertoDB.deleteCartItem(cartItemId);

// Limpar carrinho do usuário
await window.hortiPertoDB.clearUserCart(userId);
```

#### **Pedidos**
```javascript
// Criar pedido
const orderId = await window.hortiPertoDB.addOrder(orderData);

// Buscar pedido por ID
const order = await window.hortiPertoDB.getOrderById(orderId);

// Buscar pedidos do usuário
const orders = await window.hortiPertoDB.getOrdersByUser(userId);

// Buscar pedidos do vendedor
const orders = await window.hortiPertoDB.getOrdersBySeller(sellerId);

// Atualizar status do pedido
await window.hortiPertoDB.updateOrderStatus(orderId, newStatus);

// Deletar pedido
await window.hortiPertoDB.deleteOrder(orderId);

// Listar todos os pedidos
const orders = await window.hortiPertoDB.getAllOrders();
```

#### **Uploads**
```javascript
// Adicionar upload
const uploadId = await window.hortiPertoDB.addUpload(uploadData);

// Buscar upload por ID
const upload = await window.hortiPertoDB.getUploadById(uploadId);

// Buscar uploads do usuário
const uploads = await window.hortiPertoDB.getUploadsByUser(userId);

// Buscar uploads por tipo
const uploads = await window.hortiPertoDB.getUploadsByType(type);

// Deletar upload
await window.hortiPertoDB.deleteUpload(uploadId);

// Listar todos os uploads
const uploads = await window.hortiPertoDB.getAllUploads();
```

### **3. Gerenciamento de Formulários**

O `FormHandler` facilita a captura e validação de dados dos formulários:

```javascript
// Capturar dados do formulário de usuário
const userData = window.formHandler.captureUserFormData();

// Capturar dados do formulário de vendedor
const sellerData = window.formHandler.captureSellerFormData();

// Capturar dados do formulário de entregador
const deliveryData = window.formHandler.captureDeliveryFormData();

// Capturar dados do formulário de produto
const productData = window.formHandler.captureProductFormData();

// Salvar dados no banco
const userId = await window.formHandler.handleUserSubmit(userData);
const sellerId = await window.formHandler.handleSellerSubmit(sellerData);
const deliveryId = await window.formHandler.handleDeliverySubmit(deliveryData);
const productId = await window.formHandler.handleProductSubmit(productData);
```

### **4. Gerenciamento de Carrinho**

O `CartHandler` gerencia todo o ciclo de vida do carrinho:

```javascript
// Adicionar produto ao carrinho
await window.cartHandler.addToCart(productId, quantity);

// Atualizar quantidade
await window.cartHandler.updateQuantity(itemId, newQuantity);

// Remover item do carrinho
await window.cartHandler.removeFromCart(itemId);

// Limpar carrinho
await window.cartHandler.clearCart();

// Finalizar compra
const orderId = await window.cartHandler.proceedToCheckout();

// Sincronizar carrinho no login
await window.cartHandler.syncCartOnLogin(userId);

// Limpar carrinho no logout
window.cartHandler.clearCartOnLogout();
```

## 📊 Estrutura de Dados

### **Dados do Usuário**
```javascript
{
    id: 1,
    name: "João Silva",
    email: "joao@email.com",
    cpf: "12345678901",
    phone: "(11) 99999-9999",
    address: "Rua das Flores, 123",
    city: "São Paulo",
    state: "SP",
    cep: "01234-567",
    complement: "Apto 45",
    paymentMethod: "pix",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
    createdAt: "2024-01-15T10:30:00.000Z",
    updatedAt: "2024-01-15T10:30:00.000Z"
}
```

### **Dados do Vendedor**
```javascript
{
    id: 1,
    name: "Maria Santos",
    email: "maria@email.com",
    document: "12345678000195", // CNPJ
    phone: "(11) 88888-8888",
    cpp: "123456789",
    address: "Fazenda Santa Maria",
    city: "Campinas",
    state: "SP",
    cep: "13000-000",
    complement: "",
    bank: "Banco do Brasil",
    agency: "1234",
    account: "12345-6",
    pix: "maria@email.com",
    sanitaryLicense: "123456789",
    car: "CAR123456789",
    stateRegistration: "123456789",
    organicCertification: true,
    balance: 1250.50,
    status: "ativo",
    createdAt: "2024-01-10T08:00:00.000Z",
    updatedAt: "2024-01-15T14:30:00.000Z"
}
```

### **Dados do Produto**
```javascript
{
    id: 1,
    name: "Tomates Orgânicos",
    category: "hortalicas",
    price: 8.90,
    unit: "kg",
    quantity: 50,
    description: "Tomates frescos colhidos diariamente",
    image: "https://example.com/tomate.jpg",
    organic: true,
    sellerId: 1,
    status: "ativo",
    createdAt: "2024-01-15T09:00:00.000Z",
    updatedAt: "2024-01-15T09:00:00.000Z"
}
```

### **Dados do Carrinho**
```javascript
{
    id: 1,
    productId: 1,
    userId: 1,
    name: "Tomates Orgânicos",
    price: 8.90,
    quantity: 2,
    total: 17.80,
    image: "https://example.com/tomate.jpg",
    sellerId: 1,
    createdAt: "2024-01-15T15:00:00.000Z"
}
```

### **Dados do Pedido**
```javascript
{
    id: 1,
    userId: 1,
    sellerId: 1,
    items: [
        {
            productId: 1,
            name: "Tomates Orgânicos",
            price: 8.90,
            quantity: 2,
            total: 17.80
        }
    ],
    total: 17.80,
    status: "pendente",
    paymentMethod: "pix",
    deliveryAddress: "Rua das Flores, 123",
    createdAt: "2024-01-15T16:00:00.000Z",
    updatedAt: "2024-01-15T16:00:00.000Z"
}
```

## 🔧 Utilitários

### **Informações do Banco**
```javascript
// Verificar se está conectado
const isConnected = window.hortiPertoDB.isConnected();

// Obter informações do banco
const dbInfo = window.hortiPertoDB.getDatabaseInfo();
console.log(dbInfo);
// {
//     connected: true,
//     name: "HortiPertoDB",
//     version: 1,
//     stores: ["users", "sellers", "delivery", "products", "cart", "orders", "uploads"]
// }
```

### **Exportar e Importar Dados**
```javascript
// Exportar todos os dados
const allData = await window.hortiPertoDB.exportData();

// Importar dados
const results = await window.hortiPertoDB.importData(allData);
```

### **Limpar Banco de Dados**
```javascript
// Limpar todo o banco (cuidado!)
await window.hortiPertoDB.clearDatabase();
```

## 🎯 Funcionalidades Especiais

### **Sincronização de Carrinho**

O sistema automaticamente:
1. Salva itens no localStorage quando não há usuário logado
2. Migra itens do localStorage para o banco quando o usuário faz login
3. Mantém o carrinho sincronizado entre sessões

### **Validação Automática**

Todos os formulários incluem:
- Validação de CPF/CNPJ em tempo real
- Validação de CEP com preenchimento automático
- Validação de email e telefone
- Verificação de campos obrigatórios

### **Gestão de Sessão**

```javascript
// Definir usuário atual
window.formHandler.setCurrentUser(userId);

// Obter usuário atual
const currentUser = window.formHandler.getCurrentUser();

// Limpar sessão
window.formHandler.clearSession();
```

## 🐛 Solução de Problemas

### **Banco não inicializa**
```javascript
// Verificar se o IndexedDB é suportado
if (!window.indexedDB) {
    console.error('IndexedDB não é suportado neste navegador');
    return;
}

// Verificar erros de inicialização
try {
    await window.hortiPertoDB.init();
} catch (error) {
    console.error('Erro ao inicializar banco:', error);
}
```

### **Dados não são salvos**
```javascript
// Verificar se o banco está conectado
if (!window.hortiPertoDB.isConnected()) {
    console.error('Banco não está conectado');
    return;
}

// Verificar permissões
if (navigator.permissions) {
    const permission = await navigator.permissions.query({ name: 'persistent-storage' });
    if (permission.state === 'denied') {
        console.error('Permissão de armazenamento negada');
    }
}
```

### **Erro de quota excedida**
```javascript
// Verificar espaço disponível
if (navigator.storage && navigator.storage.estimate) {
    const estimate = await navigator.storage.estimate();
    console.log('Espaço usado:', estimate.usage);
    console.log('Espaço disponível:', estimate.quota);
}
```

## 📱 Compatibilidade

### **Navegadores Suportados**
- ✅ Chrome 23+
- ✅ Firefox 16+
- ✅ Safari 10+
- ✅ Edge 12+
- ✅ Opera 15+

### **Funcionalidades por Navegador**
- **Chrome/Edge**: Suporte completo
- **Firefox**: Suporte completo
- **Safari**: Suporte básico (algumas limitações)
- **Opera**: Suporte completo

## 🔮 Próximos Passos

1. **Sincronização com Backend**: Implementar sincronização com servidor
2. **Cache Inteligente**: Sistema de cache para melhor performance
3. **Backup Automático**: Backup automático dos dados
4. **Migração de Versão**: Sistema de migração automática de esquemas
5. **Compressão**: Compressão de dados para economizar espaço
6. **Criptografia**: Criptografia local dos dados sensíveis

## 📞 Suporte

Para dúvidas ou problemas com a integração IndexedDB:

1. Verifique a documentação
2. Teste no console do navegador
3. Verifique a compatibilidade do navegador
4. Consulte os logs de erro no console 