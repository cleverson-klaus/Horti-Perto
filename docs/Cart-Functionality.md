# Funcionalidades do Carrinho de Compras - HortiPerto

## Visão Geral

O sistema de carrinho de compras do HortiPerto foi aprimorado com funcionalidades modernas e intuitivas para melhorar a experiência do usuário.

## Funcionalidades Implementadas

### 1. Modal de Seleção de Quantidade

**Como funciona:**
- Ao clicar no botão "Comprar" de qualquer produto, um modal aparece
- O usuário pode escolher a quantidade desejada usando os botões + e -
- O preço total é calculado automaticamente
- O modal mostra uma imagem do produto, nome, preço unitário e total

**Características:**
- Interface intuitiva com botões de incremento/decremento
- Cálculo automático do preço total
- Botões de "Cancelar" e "Adicionar ao Carrinho"
- Responsivo para dispositivos móveis

### 2. Controle de Quantidade no Carrinho

**Funcionalidades:**
- Botões + e - para ajustar quantidade diretamente no carrinho
- Remoção automática quando quantidade chega a zero
- Notificações informativas sobre mudanças de quantidade
- Cálculo automático do subtotal por item

### 3. Indicadores Visuais

**Produtos no Carrinho:**
- Produtos já adicionados ao carrinho recebem uma borda verde
- Ícone de check (✓) aparece no canto superior direito
- Botão "Comprar" fica desabilitado e mostra "✓ Adicionado"

**Contador do Carrinho:**
- Mostra o número total de itens
- Tooltip com informações detalhadas ao passar o mouse
- Atualização em tempo real

### 4. Resumo Detalhado do Carrinho

**Informações exibidas:**
- Número total de itens
- Número de produtos diferentes
- Preço total
- Subtotal e frete
- Total com frete

### 5. Notificações Inteligentes

**Tipos de notificação:**
- **Sucesso:** Produto adicionado com quantidade e preço total
- **Info:** Mudanças de quantidade e remoções
- **Confirmação:** Pergunta se deseja adicionar mais de um produto já existente

## Estrutura Técnica

### Variáveis Globais
```javascript
let cart = [];           // Array com itens do carrinho
let cartTotal = 0;       // Total do carrinho
```

### Estrutura do Item do Carrinho
```javascript
{
    id: number,          // ID do produto
    name: string,        // Nome do produto
    price: number,       // Preço unitário
    quantity: number,    // Quantidade
    unit: string         // Unidade (kg, unidade, etc.)
}
```

### Funções Principais

#### `showQuantityModal(productId)`
- Cria e exibe o modal de seleção de quantidade
- Configura variáveis globais para controle
- Adiciona event listeners para interação

#### `confirmAddToCart(productId)`
- Adiciona produto ao carrinho com quantidade selecionada
- Atualiza display do carrinho
- Mostra notificação de sucesso

#### `updateCartDisplay()`
- Atualiza todos os elementos visuais do carrinho
- Calcula totais
- Atualiza indicadores visuais dos produtos

#### `updateQuantity(index, change)`
- Altera quantidade de um item no carrinho
- Remove item se quantidade chegar a zero
- Mostra notificações apropriadas

## Estilos CSS

### Modal de Quantidade
- Animações suaves de entrada e saída
- Design responsivo
- Botões com efeitos hover

### Carrinho Melhorado
- Itens com hover effects
- Botões de quantidade estilizados
- Indicadores visuais para produtos no carrinho

### Responsividade
- Layout adaptado para dispositivos móveis
- Botões maiores em telas pequenas
- Modal otimizado para mobile

## Melhorias de UX

### 1. Feedback Visual
- Produtos no carrinho são destacados
- Contadores atualizados em tempo real
- Notificações informativas

### 2. Prevenção de Erros
- Confirmação antes de adicionar produto já existente
- Validação de quantidade mínima (1)
- Feedback claro sobre ações

### 3. Acessibilidade
- Tooltips informativos
- Controles de teclado
- Indicadores visuais claros

## Como Usar

### Para Desenvolvedores

1. **Adicionar produto ao carrinho:**
```javascript
showQuantityModal(productId);
```

2. **Atualizar display do carrinho:**
```javascript
updateCartDisplay();
```

3. **Alterar quantidade:**
```javascript
updateQuantity(index, change);
```

### Para Usuários

1. **Comprar produto:**
   - Clique em "Comprar" no card do produto
   - Escolha a quantidade no modal
   - Clique em "Adicionar ao Carrinho"

2. **Gerenciar carrinho:**
   - Use os botões + e - para ajustar quantidade
   - Clique no ícone de lixeira para remover
   - Use "Limpar Carrinho" para remover tudo

3. **Finalizar compra:**
   - Verifique o resumo do pedido
   - Escolha forma de pagamento
   - Clique em "Finalizar Compra"

## Testes

O arquivo `tests/cart-functionality.test.js` contém testes automatizados para:
- Adição de produtos
- Cálculo de totais
- Controle de quantidade
- Remoção de itens
- Funcionalidades do modal

## Compatibilidade

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móveis (iOS/Android)

## Próximas Melhorias

1. **Persistência de dados:** Salvar carrinho no localStorage
2. **Favoritos:** Lista de produtos favoritos
3. **Histórico:** Histórico de compras
4. **Cupons:** Sistema de cupons de desconto
5. **Frete dinâmico:** Cálculo de frete baseado no CEP 