# 🌱 HortiPerto - Plataforma de Conectividade Rural

## 📋 Visão Geral

O HortiPerto é uma plataforma web inovadora que conecta produtores rurais diretamente aos consumidores, facilitando a comercialização de produtos frescos e artesanais. A plataforma oferece um sistema completo de e-commerce com funcionalidades avançadas de pagamento, atendimento automatizado e gestão de usuários.

## ✨ Funcionalidades Principais

### 🛒 Sistema de E-commerce
- **Catálogo de Produtos**: Visualização organizada por categorias
- **Carrinho de Compras**: Gestão completa de itens e quantidades
- **Filtros Inteligentes**: Busca por categoria, preço e disponibilidade
- **Avaliações e Reviews**: Sistema de feedback dos clientes

### 💳 Sistema de Pagamento Avançado
- **Cartão de Crédito/Débito**: Suporte a múltiplas bandeiras
- **Pagamento em Dinheiro**: Com opção de troco personalizado
- **PIX Instantâneo**: QR Code e chave PIX da empresa
- **Validação em Tempo Real**: Formatação automática e validação de dados
- **Taxas Dinâmicas**: Cálculo automático baseado no método de pagamento

### 🔐 Sistema de Autenticação
- **Login Simples**: Acesso por e-mail/senha
- **Gestão de Conta**: Interface para usuários logados
- **Logout Seguro**: Encerramento de sessão
- **Credenciais Demo**: demo/1234 para testes

### 👨‍🌾 Cadastros Especializados
- **Produtores**: Formulário completo com validação de documentos
- **Entregadores**: Cadastro com documentos de veículo
- **Consumidores**: Registro simplificado para compras

## 🚀 Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript
- **Estilização**: Tailwind CSS
- **Ícones**: Font Awesome 6.4.0
- **Validações**: JavaScript nativo com regex
- **APIs**: ViaCEP para validação de endereços
- **Armazenamento**: IndexedDB para dados locais
- **Front-end**: Lorena,Raquel
-**Back-end** :Cleverson,Bruna

## 📁 Estrutura do Projeto

```
Horti-Perto/
├── css/
│   ├── hortiperto-styles.css      # Estilos principais
│   ├── form-fix.css              # Correções de formulário
│   └── shopping-assistant.css    # Estilos do assistente
├── js/
│   ├── hortiperto-main.js        # JavaScript principal
│   ├─
│   └── shopping-assistant.js     # Assistente de compras
├── imagens/                      # Assets de imagem
├── docs/                         # Documentação
├── tests/                        # Testes automatizados
├── server/                       # Servidor de upload
└── HortiPerto.html              # Página principal
```

## 🎯 Funcionalidades Detalhadas

### Sistema de Pagamento

#### 💳 Cartão de Crédito/Débito
- Formatação automática do número do cartão
- Validação de data de validade (MM/AA)
- Verificação de CVV (3-4 dígitos)
- Parcelamento em até 6x sem juros
- Taxa de 2.9% sobre o valor

#### 💵 Dinheiro
- Pagamento na entrega
- Campo opcional para troco
- Observações personalizadas
- Sem taxa adicional

#### 📲 PIX
- QR Code gerado automaticamente
- Chave PIX: hortiperto@email.com
- Pagamento instantâneo
- Sem taxa de processamento
- Feedback visual ao copiar chave

#### 🎯 Ações Contextuais
- Navegação direta para produtos
- Acesso rápido aos cadastros
- Exibição de notificações informativas

### Sistema de Login

#### 🔑 Autenticação
- Credenciais de teste: demo/1234
- Validação em tempo real
- Feedback visual de erros
- Persistência de sessão


## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone [url-do-repositorio]
   cd Horti-Perto
   ```

2. **Abra o arquivo principal**:
   ```bash
   # No navegador, abra:
   HortiPerto.html
   ```

3. **Teste as funcionalidades**:
   - Adicione produtos ao carrinho
   - Teste o sistema de pagamento
   - Interaja com o Typebot
   - Faça login com demo/1234

## 📱 Responsividade

A plataforma é totalmente responsiva e funciona em:
- 📱 Dispositivos móveis
- 💻 Tablets
- 🖥️ Desktops
- 📺 Telas grandes

## 🎨 Design System

### Cores Principais
- **Verde Primário**: #22c55e
- **Verde Secundário**: #16a34a
- **Verde Escuro**: #166534
- **Cinza**: #6b7280

## 🔧 Configurações

### Pagamento
- **Taxa cartão**: 2.9%
- **Taxa PIX**: 0%
- **Taxa dinheiro**: 0%
- **Frete padrão**: R$ 5,00

## 📞 Suporte

Para dúvidas ou problemas:
- 📧 Email: hortiperto@email.com
- 📱 WhatsApp: (11) 99999-9999
- 🌐 Website: [hortiperto.com.br]

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ para conectar o campo à cidade**
