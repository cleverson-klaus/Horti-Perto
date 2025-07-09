function runComponentTests() {
  // Teste 1: Verificar se o modal de login está presente
  testar("COMPONENT - Modal de login deve estar presente na página", () => {
    const loginModal = document.getElementById("login-modal");
    if (!loginModal) throw new Error("Modal de login não encontrado");
    
    const loginForm = document.getElementById("login-form");
    if (!loginForm) throw new Error("Formulário de login não encontrado");
  });

  // Teste 2: Verificar se os campos do formulário de login funcionam
  testar("COMPONENT - Campos do formulário de login devem receber valores", () => {
    const emailInput = document.getElementById("login-email");
    const passwordInput = document.getElementById("login-password");
    const typeSelect = document.getElementById("login-type");

    if (!emailInput || !passwordInput || !typeSelect) {
      throw new Error("Campos do formulário de login não encontrados");
    }

    emailInput.value = "teste@exemplo.com";
    passwordInput.value = "senha123";
    typeSelect.value = "consumer";

    if (emailInput.value !== "teste@exemplo.com" || 
        passwordInput.value !== "senha123" || 
        typeSelect.value !== "consumer") {
      throw new Error("Campos do formulário não aceitaram valores corretamente");
    }
  });

  // Teste 3: Verificar se o carrinho está presente e funcional
  testar("COMPONENT - Carrinho de compras deve estar presente", () => {
    const cartCount = document.getElementById("cart-count");
    if (!cartCount) throw new Error("Contador do carrinho não encontrado");
    
    // Verificar se o contador inicia com 0
    if (cartCount.textContent !== "0") {
      throw new Error("Contador do carrinho não inicia com 0");
    }
  });

  // Teste 4: Verificar se a navegação por abas funciona
  testar("COMPONENT - Navegação por abas deve estar presente", () => {
    const tabs = document.querySelectorAll('[data-tab]');
    if (tabs.length === 0) throw new Error("Nenhuma aba de navegação encontrada");
    
    const tabContents = document.querySelectorAll('.tab-content');
    if (tabContents.length === 0) throw new Error("Nenhum conteúdo de aba encontrado");
  });

  // Teste 5: Verificar se o catálogo de produtos está presente
  testar("COMPONENT - Catálogo de produtos deve estar presente", () => {
    const productsCatalog = document.getElementById("products-catalog");
    if (!productsCatalog) throw new Error("Catálogo de produtos não encontrado");
    
    const filterButtons = document.querySelectorAll('[data-category]');
    if (filterButtons.length === 0) throw new Error("Botões de filtro não encontrados");
  });

  // Teste 6: Verificar se o formulário de vendedor está presente
  testar("COMPONENT - Formulário de cadastro de vendedor deve estar presente", () => {
    const sellerForm = document.getElementById("seller-form");
    if (!sellerForm) throw new Error("Formulário de vendedor não encontrado");
    
    const formSteps = document.querySelectorAll('.form-step');
    if (formSteps.length === 0) throw new Error("Passos do formulário não encontrados");
  });

  // Teste 7: Verificar se os campos do formulário de vendedor funcionam
  testar("COMPONENT - Campos do formulário de vendedor devem receber valores", () => {
    const nameInput = document.getElementById("seller-name");
    const docInput = document.getElementById("seller-doc");
    const emailInput = document.getElementById("seller-email");

    if (!nameInput || !docInput || !emailInput) {
      throw new Error("Campos do formulário de vendedor não encontrados");
    }

    nameInput.value = "João Silva";
    docInput.value = "123.456.789-00";
    emailInput.value = "joao@exemplo.com";

    if (nameInput.value !== "João Silva" || 
        docInput.value !== "123.456.789-00" || 
        emailInput.value !== "joao@exemplo.com") {
      throw new Error("Campos do formulário de vendedor não aceitaram valores");
    }
  });

  // Teste 8: Verificar se o assistente de compras está disponível
  testar("COMPONENT - Assistente de compras deve estar disponível", () => {
    // Verificar se a função existe globalmente
    if (typeof showShoppingAssistantWidget !== 'function') {
      throw new Error("Função do assistente de compras não encontrada");
    }
    
    // Verificar se a função getSuggestedProducts existe
    if (typeof getSuggestedProducts !== 'function') {
      throw new Error("Função de sugestão de produtos não encontrada");
    }
  });

  // Teste 9: Verificar se a validação de CEP está presente
  testar("COMPONENT - Validação de CEP deve estar presente", () => {
    const cepInput = document.getElementById("seller-cep");
    if (!cepInput) throw new Error("Campo de CEP não encontrado");
    
    // Verificar se a função de validação existe
    if (typeof validateCEP !== 'function') {
      throw new Error("Função de validação de CEP não encontrada");
    }
  });

  // Teste 10: Verificar se a validação de CPF/CNPJ está presente
  testar("COMPONENT - Validação de CPF/CNPJ deve estar presente", () => {
    const docInput = document.getElementById("seller-doc");
    if (!docInput) throw new Error("Campo de documento não encontrado");
    
    // Verificar se as funções de validação existem
    if (typeof validateCPF !== 'function') {
      throw new Error("Função de validação de CPF não encontrada");
    }
    
    if (typeof validateCNPJ !== 'function') {
      throw new Error("Função de validação de CNPJ não encontrada");
    }
  });

  // Teste 11: Verificar se o sistema de notificações está presente
  testar("COMPONENT - Sistema de notificações deve estar presente", () => {
    if (typeof showNotification !== 'function') {
      throw new Error("Função de notificação não encontrada");
    }
  });

  // Teste 12: Verificar se o sistema de upload de arquivos está presente
  testar("COMPONENT - Sistema de upload de arquivos deve estar presente", () => {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    if (fileInputs.length === 0) throw new Error("Nenhum campo de upload encontrado");
    
    if (typeof validateFile !== 'function') {
      throw new Error("Função de validação de arquivo não encontrada");
    }
  });

  // Teste 13: Verificar se o sistema de filtros de produtos funciona
  testar("COMPONENT - Sistema de filtros de produtos deve estar presente", () => {
    const filterButtons = document.querySelectorAll('[data-category]');
    if (filterButtons.length === 0) throw new Error("Botões de filtro não encontrados");
    
    if (typeof filterProducts !== 'function') {
      throw new Error("Função de filtro de produtos não encontrada");
    }
  });

  // Teste 14: Verificar se o sistema de carrinho funciona
  testar("COMPONENT - Sistema de carrinho deve estar presente", () => {
    if (typeof addToCart !== 'function') {
      throw new Error("Função de adicionar ao carrinho não encontrada");
    }
    
    if (typeof updateCartDisplay !== 'function') {
      throw new Error("Função de atualizar carrinho não encontrada");
    }
  });

  // Teste 15: Verificar se o sistema de navegação por abas funciona
  testar("COMPONENT - Sistema de navegação por abas deve estar presente", () => {
    if (typeof showTab !== 'function') {
      throw new Error("Função de navegação por abas não encontrada");
    }
    
    const tabLinks = document.querySelectorAll('[data-tab]');
    if (tabLinks.length === 0) throw new Error("Links de navegação não encontrados");
  });
}
