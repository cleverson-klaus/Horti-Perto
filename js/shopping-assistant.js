// ========================================
// SHOPPING ASSISTANT - HORTIPERTO
// ========================================

// Variável global para salvar grade original
let originalProductGridHTML = null;

// Produtos sugeridos por categoria
function getSuggestedProducts(category, budget) {
    const all = {
        'Frutas': [
            {name:'Cesta de Frutas', price:'R$ 28,90', image:'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', desc:'Seleção de frutas frescas da estação.'},
            {name:'Banana Nanica', price:'R$ 4,50', image:'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80', desc:'Bananas maduras e saborosas.'},
            {name:'Morangos Orgânicos', price:'R$ 9,90', image:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80', desc:'Morangos frescos direto do produtor.'}
        ],
        'Legumes': [
            {name:'Cesta de Legumes', price:'R$ 25,90', image:'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', desc:'Legumes frescos da fazenda.'},
            {name:'Cenoura Orgânica', price:'R$ 3,90', image:'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80', desc:'Cenouras doces e crocantes.'},
            {name:'Alface Crespa', price:'R$ 2,50', image:'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80', desc:'Alface crocante e fresca.'}
        ],
        'Queijos': [
            {name:'Queijo Artesanal', price:'R$ 32,50/kg', image:'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', desc:'Queijo colonial feito com leite fresco.'},
            {name:'Queijo Minas Frescal', price:'R$ 24,90/kg', image:'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', desc:'Queijo minas tradicional artesanal.'}
        ],
        'Saladas': [
            {name:'Salada Pronta', price:'R$ 15,90', image:'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', desc:'Mix de folhas lavadas e prontas para consumo.'}
        ],
        'Geleias': [
            {name:'Geleia de Morango', price:'R$ 18,50', image:'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', desc:'Geleia artesanal sem conservantes.'}
        ]
    };
    
    let total = 0;
    const result = [];
    for(const p of (all[category]||[])) {
        const valor = parseFloat(p.price.replace('R$','').replace(',','.'));
        if(total + valor <= budget) {
            result.push(p);
            total += valor;
        }
    }
    if(result.length === 0 && all[category] && all[category].length > 0) result.push(all[category][0]);
    return result;
}

// Widget do assistente de compras
function showShoppingAssistantWidget() {
    const old = document.getElementById('shopping-assistant-widget');
    if (old) old.remove();

    const widget = document.createElement('div');
    widget.id = 'shopping-assistant-widget';
    widget.className = 'typebot-widget';
    widget.style.right = '24px';
    widget.style.left = 'auto';
    widget.style.bottom = '90px';
    widget.style.maxWidth = '380px';
    widget.innerHTML = `
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
            <i class="fas fa-shopping-basket" style="color:#16a34a; font-size: 22px; margin-right: 8px;"></i>
            <span style="font-weight: bold; color: #16a34a; font-size: 18px;">Assistente de Compras</span>
            <button onclick="closeShoppingAssistantWidget()" style="margin-left:auto; background:none; border:none; color:#888; font-size:20px; cursor:pointer;">&times;</button>
        </div>
        <div id="shopping-assistant-step">
            <div id="shopping-step-1">
                <div style='margin-bottom:10px;'>Qual categoria você prefere?</div>
                <div style='display:flex; flex-wrap:wrap; gap:8px;'>
                    <button class='shop-cat-btn' onclick="selectShoppingCategory('Frutas')">🍎 Frutas</button>
                    <button class='shop-cat-btn' onclick="selectShoppingCategory('Legumes')">🥕 Legumes</button>
                    <button class='shop-cat-btn' onclick="selectShoppingCategory('Queijos')">🧀 Queijos</button>
                    <button class='shop-cat-btn' onclick="selectShoppingCategory('Saladas')">🥗 Saladas</button>
                    <button class='shop-cat-btn' onclick="selectShoppingCategory('Geleias')">🍯 Geleias</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(widget);
}

// Passo 2: Seleção de orçamento
function selectShoppingCategory(category) {
    const stepDiv = document.getElementById('shopping-assistant-step');
    stepDiv.innerHTML = `
        <div id='shopping-step-2'>
            <div style='margin-bottom:10px;'>Qual seu orçamento aproximado?</div>
            <div style='display:flex; gap:8px; flex-wrap:wrap;'>
                <button class='shop-budget-btn' onclick="suggestShoppingList('${category}', 20)">R$20</button>
                <button class='shop-budget-btn' onclick="suggestShoppingList('${category}', 50)">R$50</button>
                <button class='shop-budget-btn' onclick="suggestShoppingList('${category}', 100)">R$100</button>
                <button class='shop-budget-btn' onclick="suggestShoppingList('${category}', 200)">R$200</button>
            </div>
            <button onclick="showShoppingAssistantWidget()" class='shop-budget-btn' style='background:#6b7280;color:#fff;margin-top:10px;'>Voltar</button>
        </div>
    `;
}

// Passo 3: Sugestão de produtos com campos de quantidade
function suggestShoppingList(category, budget) {
    const products = getSuggestedProducts(category, budget);
    const stepDiv = document.getElementById('shopping-assistant-step');
    stepDiv.innerHTML = `
        <div id='shopping-step-3'>
            <div style='margin-bottom:10px;'>Sugestão de compra para <strong>${category}</strong> até <strong>R$${budget}</strong>:</div>
            <form id='assistant-products-form'>
            <div style='margin-bottom:10px;'>
                ${products.map((p, idx) => `
                    <div style='display:flex;align-items:flex-start;gap:8px;margin-bottom:12px;padding:8px;background:#f9f9f9;border-radius:6px;'>
                        <img src='${p.image}' style='width:40px;height:40px;border-radius:4px;object-fit:cover;margin-top:2px;'>
                        <div style='flex:1;'>
                            <div style='font-weight:bold;font-size:14px;'>${p.name}</div>
                            <div style='font-size:12px;color:#666;margin-bottom:4px;'>${p.desc || ''}</div>
                            <div style='display:flex;align-items:center;gap:8px;'>
                                <span style='color:#16a34a;font-weight:bold;font-size:13px;'>${p.price}</span>
                                <div style='display:flex;align-items:center;gap:4px;'>
                                    <label style='font-size:12px;color:#666;'>Qtd:</label>
                                    <input type='number' min='1' value='1' name='qty${idx}' style='width:50px;padding:4px;border:1px solid #ddd;border-radius:4px;font-size:12px;text-align:center;'>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div style='display:flex;gap:8px;'>
                <button type='submit' class='shop-budget-btn' style='background:#16a34a;color:#fff;flex:1;'>🛒 Adicionar ao carrinho</button>
                <button type='button' onclick="restoreProductGrid()" class='shop-budget-btn' style='background:#6b7280;color:#fff;'>🔄 Nova sugestão</button>
            </div>
            </form>
        </div>
    `;
    
    // Atualizar grade de produtos na aba
    updateProductGrid(products);
    
    // Handler do submit do form
    const form = document.getElementById('assistant-products-form');
    if (form) {
        form.onsubmit = function(e) {
            e.preventDefault();
            const qtys = Array.from(form.querySelectorAll('input[type=number]')).map(input => Math.max(1, parseInt(input.value)||1));
            addSuggestedToCartWithQty(products, qtys);
        };
    }
}

// Adicionar ao carrinho real com quantidades
function addSuggestedToCartWithQty(products, qtys) {
    let totalAdded = 0;
    products.forEach((p, i) => {
        for(let q=0; q<qtys[i]; q++) {
            addToCartByName(p.name);
            totalAdded++;
        }
    });
    closeShoppingAssistantWidget();
    showNotification(`✅ ${totalAdded} itens adicionados ao carrinho!`, 'success');
}

// Função para adicionar ao carrinho real pelo nome do produto
function addToCartByName(productName) {
    const grid = document.querySelector('#products .section-products .grid');
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.product-item'));
    for(const card of cards) {
        const h3 = card.querySelector('h3');
        if(h3 && h3.textContent.trim() === productName) {
            const btn = card.querySelector('button.btn-success, button.add-to-cart');
            if(btn) { 
                btn.click(); 
                break; 
            }
        }
    }
}

// Atualizar grade de produtos
function updateProductGrid(products) {
    const grid = document.querySelector('#products .section-products .grid');
    if (!grid) return;
    if (!originalProductGridHTML) originalProductGridHTML = grid.innerHTML;
    
    // Limpar grade e mostrar apenas sugeridos
    grid.innerHTML = products.map(p => `
        <div class="product-item card" style="min-width:200px;">
            <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">${p.name}</h3>
                <p class="text-gray-700 mb-2" style="font-size:14px;">${p.desc || ''}</p>
                <div class="flex justify-between items-center">
                    <span class="font-bold text-success-color">${p.price}</span>
                    <button class="btn btn-success text-sm">+ Carrinho</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Restaurar grade original
function restoreProductGrid() {
    const grid = document.querySelector('#products .section-products .grid');
    if (grid && originalProductGridHTML) grid.innerHTML = originalProductGridHTML;
    closeShoppingAssistantWidget();
}

// Fechar widget
function closeShoppingAssistantWidget() {
    const widget = document.getElementById('shopping-assistant-widget');
    if (widget) widget.remove();
}

// Exibir botão do assistente só na aba de produtos
function toggleShoppingAssistantBtn() {
    const btn = document.getElementById('shopping-assistant-btn');
    const productsTab = document.getElementById('products');
    if (!btn || !productsTab) return;
    if (productsTab.classList.contains('active')) {
        btn.style.display = 'flex';
    } else {
        btn.style.display = 'none';
        closeShoppingAssistantWidget();
    }
}

// Inicializar quando DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    toggleShoppingAssistantBtn();
    document.querySelectorAll('[data-tab]').forEach(tabBtn => {
        tabBtn.addEventListener('click', function() {
            setTimeout(toggleShoppingAssistantBtn, 200);
        });
    });
    
    // Listener do botão do assistente
    const shopBtn = document.getElementById('shopping-assistant-btn');
    if (shopBtn) {
        shopBtn.addEventListener('click', showShoppingAssistantWidget);
    }
}); 