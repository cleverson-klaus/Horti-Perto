// Dados dos produtos cadastrados pelo vendedor
let meusProdutos = [
  {
    id: 1,
    nome: "Tomates Frescos",
    categoria: "hortalicas",
    preco: 8.90,
    unidade: "kg",
    quantidade: 50,
    descricao: "Tomates frescos colhidos diariamente da nossa horta",
    foto: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300",
    organico: true,
    dataCadastro: "2024-01-15",
    status: "ativo"
  },
  {
    id: 2,
    nome: "Queijo Colonial",
    categoria: "queijos",
    preco: 25.00,
    unidade: "kg",
    quantidade: 10,
    descricao: "Queijo colonial artesanal feito com leite fresco",
    foto: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300",
    organico: false,
    dataCadastro: "2024-01-10",
    status: "ativo"
  }
];

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
  initializeCadastroProdutos();
  loadMeusProdutos();
  setupFormHandlers();
  setupSearchFilter();
});

// Inicialização
function initializeCadastroProdutos() {
  // Navegação
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      showSection(targetId);
    });
  });

  // Preview de imagem
  setupImagePreview();
}

// Navegação entre seções
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
}

// Configurar handlers dos formulários
function setupFormHandlers() {
  const produtoForm = document.getElementById('produto-form');
  if (produtoForm) {
    produtoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleProdutoSubmit();
    });
  }
}

// Handler do formulário de produto
function handleProdutoSubmit() {
  const formData = {
    nome: document.getElementById('produto-nome').value,
    categoria: document.getElementById('produto-categoria').value,
    preco: parseFloat(document.getElementById('produto-preco').value),
    unidade: document.getElementById('produto-unidade').value,
    quantidade: parseInt(document.getElementById('produto-quantidade').value),
    descricao: document.getElementById('produto-descricao').value,
    organico: document.getElementById('produto-organico').checked,
    validade: document.getElementById('produto-validade').value,
    observacoes: document.getElementById('produto-observacoes').value
  };

  // Validação básica
  if (!formData.nome || !formData.categoria || !formData.preco || 
      !formData.unidade || !formData.quantidade || !formData.descricao) {
    showNotification('Por favor, preencha todos os campos obrigatórios', 'error');
    return;
  }

  if (formData.preco <= 0) {
    showNotification('O preço deve ser maior que zero', 'error');
    return;
  }

  if (formData.quantidade < 0) {
    showNotification('A quantidade não pode ser negativa', 'error');
    return;
  }

  // Simular upload de foto
  const fotoInput = document.getElementById('produto-foto');
  if (!fotoInput.files[0]) {
    showNotification('Por favor, selecione uma foto do produto', 'error');
    return;
  }

  // Criar novo produto
  const novoProduto = {
    id: Date.now(), // ID único baseado no timestamp
    ...formData,
    foto: URL.createObjectURL(fotoInput.files[0]), // Preview da imagem
    dataCadastro: new Date().toISOString().split('T')[0],
    status: 'ativo'
  };

  // Adicionar à lista
  meusProdutos.push(novoProduto);

  // Limpar formulário
  document.getElementById('produto-form').reset();
  
  // Remover preview de imagem
  const previewContainer = document.getElementById('image-preview');
  if (previewContainer) {
    previewContainer.innerHTML = '';
  }

  // Mostrar sucesso
  showNotification('Produto cadastrado com sucesso!', 'success');
  
  // Atualizar lista
  loadMeusProdutos();
  
  // Ir para lista de produtos
  showSection('produtos-cadastrados');
}

// Carregar meus produtos
function loadMeusProdutos() {
  const grid = document.getElementById('meus-produtos-grid');
  if (!grid) return;

  if (meusProdutos.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-box-open"></i>
        <h3>Nenhum produto cadastrado</h3>
        <p>Comece cadastrando seu primeiro produto!</p>
        <button class="btn btn-primary" onclick="showSection('cadastro-produtos')">
          Cadastrar Produto
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = '';
  meusProdutos.forEach(produto => {
    const produtoCard = createProdutoCard(produto);
    grid.appendChild(produtoCard);
  });
}

// Criar card de produto
function createProdutoCard(produto) {
  const card = document.createElement('div');
  card.className = 'product-card';
  
  const statusClass = produto.status === 'ativo' ? 'status-ativo' : 'status-inativo';
  const statusText = produto.status === 'ativo' ? 'Ativo' : 'Inativo';
  
  card.innerHTML = `
    <div class="product-status ${statusClass}">
      <span>${statusText}</span>
    </div>
    <img src="${produto.foto}" alt="${produto.nome}">
    <div class="product-info">
      <h3>${produto.nome}</h3>
      <p class="category">${getCategoriaNome(produto.categoria)}</p>
      <p class="price">R$ ${produto.preco.toFixed(2).replace('.', ',')}/${produto.unidade}</p>
      <p class="quantity">Quantidade: ${produto.quantidade} ${produto.unidade}</p>
      <p class="description">${produto.descricao}</p>
      ${produto.organico ? '<span class="badge-organic">🌱 Orgânico</span>' : ''}
      <div class="product-actions">
        <button class="btn btn-secondary" onclick="editProduto(${produto.id})">
          <i class="fas fa-edit"></i> Editar
        </button>
        <button class="btn btn-danger" onclick="deleteProduto(${produto.id})">
          <i class="fas fa-trash"></i> Excluir
        </button>
        <button class="btn btn-primary" onclick="toggleStatus(${produto.id})">
          ${produto.status === 'ativo' ? '<i class="fas fa-pause"></i> Pausar' : '<i class="fas fa-play"></i> Ativar'}
        </button>
      </div>
    </div>
  `;
  
  return card;
}

// Obter nome da categoria
function getCategoriaNome(categoria) {
  const categorias = {
    'frutas': 'Frutas',
    'verduras': 'Verduras',
    'hortalicas': 'Hortaliças',
    'queijos': 'Queijos',
    'geleias': 'Geleias',
    'outros': 'Outros'
  };
  return categorias[categoria] || categoria;
}

// Editar produto
function editProduto(id) {
  const produto = meusProdutos.find(p => p.id === id);
  if (!produto) return;

  // Preencher formulário com dados do produto
  document.getElementById('produto-nome').value = produto.nome;
  document.getElementById('produto-categoria').value = produto.categoria;
  document.getElementById('produto-preco').value = produto.preco;
  document.getElementById('produto-unidade').value = produto.unidade;
  document.getElementById('produto-quantidade').value = produto.quantidade;
  document.getElementById('produto-descricao').value = produto.descricao;
  document.getElementById('produto-organico').checked = produto.organico;
  document.getElementById('produto-validade').value = produto.validade || '';
  document.getElementById('produto-observacoes').value = produto.observacoes || '';

  // Ir para formulário
  showSection('cadastro-produtos');
  
  // Atualizar botão
  const submitBtn = document.querySelector('#produto-form button[type="submit"]');
  submitBtn.innerHTML = '<i class="fas fa-save"></i> Atualizar Produto';
  submitBtn.onclick = function(e) {
    e.preventDefault();
    updateProduto(id);
  };
}

// Atualizar produto
function updateProduto(id) {
  const index = meusProdutos.findIndex(p => p.id === id);
  if (index === -1) return;

  const formData = {
    nome: document.getElementById('produto-nome').value,
    categoria: document.getElementById('produto-categoria').value,
    preco: parseFloat(document.getElementById('produto-preco').value),
    unidade: document.getElementById('produto-unidade').value,
    quantidade: parseInt(document.getElementById('produto-quantidade').value),
    descricao: document.getElementById('produto-descricao').value,
    organico: document.getElementById('produto-organico').checked,
    validade: document.getElementById('produto-validade').value,
    observacoes: document.getElementById('produto-observacoes').value
  };

  // Validação
  if (!formData.nome || !formData.categoria || !formData.preco || 
      !formData.unidade || !formData.quantidade || !formData.descricao) {
    showNotification('Por favor, preencha todos os campos obrigatórios', 'error');
    return;
  }

  // Atualizar produto
  meusProdutos[index] = {
    ...meusProdutos[index],
    ...formData
  };

  // Limpar formulário e resetar botão
  document.getElementById('produto-form').reset();
  const submitBtn = document.querySelector('#produto-form button[type="submit"]');
  submitBtn.innerHTML = '<i class="fas fa-plus"></i> Cadastrar Produto';
  submitBtn.onclick = function(e) {
    e.preventDefault();
    handleProdutoSubmit();
  };

  showNotification('Produto atualizado com sucesso!', 'success');
  loadMeusProdutos();
  showSection('produtos-cadastrados');
}

// Excluir produto
function deleteProduto(id) {
  if (confirm('Tem certeza que deseja excluir este produto?')) {
    meusProdutos = meusProdutos.filter(p => p.id !== id);
    loadMeusProdutos();
    showNotification('Produto excluído com sucesso!', 'success');
  }
}

// Alternar status do produto
function toggleStatus(id) {
  const produto = meusProdutos.find(p => p.id === id);
  if (!produto) return;

  produto.status = produto.status === 'ativo' ? 'inativo' : 'ativo';
  loadMeusProdutos();
  
  const statusText = produto.status === 'ativo' ? 'ativado' : 'pausado';
  showNotification(`Produto ${statusText} com sucesso!`, 'success');
}

// Configurar preview de imagem
function setupImagePreview() {
  const fotoInput = document.getElementById('produto-foto');
  if (!fotoInput) return;

  fotoInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    // Validar tipo de arquivo
    if (!file.type.startsWith('image/')) {
      showNotification('Por favor, selecione apenas arquivos de imagem', 'error');
      this.value = '';
      return;
    }

    // Validar tamanho (5MB)
    if (file.size > 5 * 1024 * 1024) {
      showNotification('A imagem deve ter no máximo 5MB', 'error');
      this.value = '';
      return;
    }

    // Criar preview
    const reader = new FileReader();
    reader.onload = function(e) {
      let previewContainer = document.getElementById('image-preview');
      if (!previewContainer) {
        previewContainer = document.createElement('div');
        previewContainer.id = 'image-preview';
        previewContainer.style.cssText = `
          margin-top: 10px;
          text-align: center;
        `;
        fotoInput.parentNode.appendChild(previewContainer);
      }

      previewContainer.innerHTML = `
        <img src="${e.target.result}" alt="Preview" style="
          max-width: 200px;
          max-height: 200px;
          border-radius: 5px;
          border: 2px solid #e9ecef;
        ">
      `;
    };
    reader.readAsDataURL(file);
  });
}

// Configurar filtro de busca
function setupSearchFilter() {
  const searchInput = document.getElementById('search-my-products');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      filterMeusProdutos(this.value);
    });
  }
}

// Filtrar meus produtos
function filterMeusProdutos(searchTerm) {
  const filteredProdutos = meusProdutos.filter(produto => 
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produto.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
    getCategoriaNome(produto.categoria).toLowerCase().includes(searchTerm.toLowerCase())
  );

  displayFilteredProdutos(filteredProdutos);
}

// Exibir produtos filtrados
function displayFilteredProdutos(filteredProdutos) {
  const grid = document.getElementById('meus-produtos-grid');
  if (!grid) return;

  if (filteredProdutos.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <h3>Nenhum produto encontrado</h3>
        <p>Tente ajustar os termos de busca</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = '';
  filteredProdutos.forEach(produto => {
    const produtoCard = createProdutoCard(produto);
    grid.appendChild(produtoCard);
  });
}

// Sistema de notificações
function showNotification(message, type = 'info') {
  // Remover notificação existente
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  // Criar nova notificação
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span>${message}</span>
      <button onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;

  // Adicionar estilos
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
    color: white;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    z-index: 10000;
    max-width: 300px;
            /* Removida animação */
  `;

  notification.querySelector('.notification-content').style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  `;

  notification.querySelector('button').style.cssText = `
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;
  `;

  // Adicionar animação CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        /* Removida transformação */
        opacity: 0;
      }
      to {
        /* Removida transformação */
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);

  document.body.appendChild(notification);

  // Auto-remover após 5 segundos
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
} 