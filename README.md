# 🌱 HortiPerto - Plataforma Digital

**Conectando produtores rurais a consumidores finais**

HortiPerto é uma plataforma digital inovadora que facilita a venda direta de produtos frescos entre produtores rurais e consumidores finais, promovendo o acesso a alimentos saudáveis e valorizando o pequeno produtor.

## 🚀 Funcionalidades Implementadas

### 📱 Interface Principal
- **Navegação por Abas**: Sistema de navegação intuitivo entre diferentes seções
- **Menu Mobile**: Menu responsivo para dispositivos móveis
- **Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- **Notificações**: Sistema de notificações em tempo real

### 🏠 Página Inicial
- **Apresentação da Plataforma**: Informações sobre o HortiPerto
- **Produtos em Destaque**: Exibição dos produtos mais populares
- **Como Funciona**: Explicação do processo da plataforma
- **Call-to-Action**: Botões para comprar ou se tornar vendedor

### 🛍️ Catálogo de Produtos
- **Listagem de Produtos**: Grid responsivo com cards de produtos
- **Filtros por Categoria**: Filtros para frutas, verduras, queijos, geleias, etc.
- **Sistema de Avaliações**: Estrelas e comentários dos clientes
- **Adição ao Carrinho**: Funcionalidade de adicionar produtos ao carrinho

### 🛒 Carrinho de Compras
- **Gestão de Itens**: Adicionar, remover e alterar quantidades
- **Cálculo Automático**: Total atualizado automaticamente
- **Contador de Itens**: Indicador visual no menu de navegação
- **Limpeza do Carrinho**: Opção para limpar todos os itens

### 👨‍🌾 Cadastro de Vendedores
- **Formulário Multi-step**: Processo dividido em 4 etapas
- **Informações Pessoais**: Nome, CPF/CNPJ, email, telefone, CPP
- **Validação de CPF/CNPJ**: Validação automática de dígitos verificadores
- **Endereço Completo**: CEP, endereço, cidade, estado
- **Documentos**: Alvará sanitário, CAR, inscrição estadual
- **Informações Bancárias**: Banco, agência, conta, PIX
- **Gestão de Produtos**: Cadastro, edição e exclusão de produtos
- **Resgate de Valores**: Sistema de saldo e solicitação de resgate

### 🚚 Cadastro de Entregadores
- **Formulário Multi-step**: Processo dividido em 3 etapas
- **Informações Pessoais**: Nome, CPF, email, telefone
- **Validação de CPF**: Validação automática de dígitos verificadores
- **Endereço**: Endereço completo do entregador
- **Documentos**: CNH, documentos do veículo, foto de perfil
- **Informações Bancárias**: Dados bancários ou PIX
- **Resgate de Valores**: Sistema de saldo e solicitação de resgate

### 👤 Cadastro de Usuários
- **Formulário Completo**: Dados pessoais e de pagamento
- **Validação de CPF**: Validação automática de dígitos verificadores
- **Validação de Campos**: Verificação de campos obrigatórios
- **Dados de Pagamento**: Informações para finalizar compras

### 💳 Sistema de Pagamento
- **Métodos de Pagamento**: Cartão de crédito, PIX, boleto
- **Cupons de Desconto**: Sistema de cupons promocionais
- **Cálculo de Frete**: Opções de entrega e pickup
- **Resumo do Pedido**: Detalhes completos antes da finalização

### ✅ Sistema de Validações
- **Validação de CPF**: Algoritmo oficial de dígitos verificadores
- **Validação de CNPJ**: Algoritmo oficial de dígitos verificadores
- **Detecção Automática**: Identifica CPF (11 dígitos) ou CNPJ (14 dígitos)
- **Formatação Automática**: Máscara aplicada durante a digitação
- **Validação de CEP**: Integração com ViaCEP para endereços
- **Feedback Visual**: Estados de validação com cores e mensagens
- **Validação no Backend**: Endpoints REST para validação no servidor

### 📦 Gestão de Produtos (Vendedores)
- **Cadastro de Produtos**: Formulário completo com foto
- **Edição de Produtos**: Modificar informações existentes
- **Exclusão de Produtos**: Remover produtos do catálogo
- **Ativação/Desativação**: Controle de status dos produtos
- **Preview de Imagem**: Visualização antes do upload
- **Categorização**: Organização por tipos de produtos
- **Controle de Estoque**: Gestão de quantidades disponíveis

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3 (Tailwind CSS)**: Framework CSS utilitário para design responsivo
- **JavaScript (ES6+)**: Funcionalidades interativas e dinâmicas
- **Font Awesome**: Ícones e elementos visuais

### Funcionalidades JavaScript
- **Navegação por Abas**: Sistema de roteamento client-side
- **Gestão de Estado**: Controle de dados da aplicação
- **Validação de Formulários**: Verificação de campos obrigatórios
- **Upload de Imagens**: Preview e gestão de arquivos
- **Sistema de Notificações**: Feedback visual para o usuário
- **Carrinho de Compras**: Gestão de itens e cálculos
- **Filtros Dinâmicos**: Busca e filtragem de produtos

## 📁 Estrutura do Projeto

```
HortiPerto/
├── HortiPerto.html          # Página principal da aplicação
├── cadastro-produtos.html   # Página específica de cadastro de produtos
├── js/
│   ├── hortiperto-main.js   # JavaScript principal unificado
│   ├── app.js              # JavaScript anterior (legado)
│   └── cadastro-produtos.js # JavaScript específico de produtos (legado)
├── css/
│   └── styles.css          # Estilos customizados
├── tests/                  # Testes automatizados
├── README.md              # Documentação do projeto
└── DEMO.md               # Guia de demonstração
```

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone [url-do-repositorio]
   cd HortiPerto
   ```

2. **Abra o arquivo principal**:
   - Abra `HortiPerto.html` em qualquer navegador moderno
   - Ou use um servidor local para melhor experiência

3. **Para desenvolvimento**:
   ```bash
   # Usando Python
   python -m http.server 8000
   
   # Usando Node.js
   npx serve .
   
   # Usando PHP
   php -S localhost:8000
   ```

## 🎯 Funcionalidades Principais

### Para Consumidores
- ✅ Navegação pelo catálogo de produtos
- ✅ Filtros por categoria
- ✅ Adição de produtos ao carrinho
- ✅ Gestão do carrinho de compras
- ✅ Cadastro de usuário
- ✅ Sistema de pagamento
- ✅ Avaliações e comentários

### Para Vendedores
- ✅ Cadastro completo com validação
- ✅ Gestão de produtos (CRUD completo)
- ✅ Upload de fotos com preview
- ✅ Controle de estoque
- ✅ Sistema de resgate de valores
- ✅ Dashboard de produtos

### Para Entregadores
- ✅ Cadastro com documentos
- ✅ Informações de veículo
- ✅ Sistema de resgate de valores
- ✅ Gestão de perfil

## 🔧 Funcionalidades Técnicas

### Sistema de Navegação
- Navegação por abas sem recarregamento da página
- Menu mobile responsivo
- Histórico de navegação

### Gestão de Dados
- Armazenamento local de produtos
- Gestão de estado da aplicação
- Sincronização entre componentes

### Validação e Segurança
- Validação de formulários em tempo real
- Verificação de campos obrigatórios
- Sanitização de dados de entrada

### Interface do Usuário
- Design responsivo com Tailwind CSS
- Animações e transições suaves
- Feedback visual para ações do usuário
- Sistema de notificações

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1440px+)

## 🎨 Design System

### Cores
- **Verde Principal**: #059669 (green-600)
- **Verde Escuro**: #047857 (green-700)
- **Verde Claro**: #10b981 (green-500)
- **Cinza**: #6b7280 (gray-500)
- **Branco**: #ffffff

### Tipografia
- **Fonte Principal**: Inter/Sans-serif
- **Títulos**: Font-weight 700 (bold)
- **Subtítulos**: Font-weight 600 (semibold)
- **Texto**: Font-weight 400 (normal)

### Componentes
- Cards com sombras suaves
- Botões com hover effects
- Formulários com focus states
- Modais responsivos

## 🔮 Próximas Funcionalidades

### Planejadas
- [ ] Sistema de login/autenticação
- [ ] Backend com banco de dados
- [ ] Sistema de pagamentos real
- [ ] Chat entre vendedor e cliente
- [ ] Sistema de avaliações
- [ ] Notificações push
- [ ] App mobile nativo

### Melhorias
- [ ] PWA (Progressive Web App)
- [ ] Cache offline
- [ ] Compressão de imagens
- [ ] SEO otimizado
- [ ] Analytics integrado

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Desenvolvido por

**HortiPerto Team**
- Plataforma para conectar produtores e consumidores
- Foco em produtos frescos e artesanais
- Suporte ao pequeno produtor rural

---

**HortiPerto** - Conectando o campo à cidade, um produto de cada vez! 🌱
