# 🧪 Como Testar o Typebot - HortiPerto

## 🚀 **Teste Rápido**

### **1. Abrir a Plataforma**
1. Abra o arquivo `HortiPerto.html` no navegador
2. Aguarde 3 segundos - o widget de boas-vindas deve aparecer no canto inferior direito

### **2. Testar Widget de Boas-vindas**
- ✅ **Deve aparecer**: Widget verde com logo HortiPerto
- ✅ **Botões funcionais**: "Comprar produtos", "Vender produtos", "Fechar"
- ✅ **Navegação**: Clicar em "Comprar produtos" deve levar para a aba Produtos

### **3. Testar Onboarding de Vendedor**
- Clique em "Seja Vendedor" no menu ou no widget
- ✅ **Modal deve abrir**: Formulário em etapas
- ✅ **Etapa 1**: Nome e tipo de produtor
- ✅ **Etapa 2**: Produtos cultivados (checkboxes)
- ✅ **Etapa 3**: Benefícios personalizados
- ✅ **Finalização**: "Começar Cadastro" deve levar para o formulário completo

### **4. Testar Recomendações de Produtos**
- Vá para a aba "Produtos"
- Clique em qualquer botão "+ Carrinho"
- ✅ **Após 1 segundo**: Widget de recomendação deve aparecer
- ✅ **Produtos sugeridos**: 3 produtos com imagens e preços
- ✅ **Adicionar ao carrinho**: Botão deve funcionar e mostrar notificação

### **5. Testar Notificações**
- Adicione um produto ao carrinho
- ✅ **Notificação verde**: "Produto adicionado ao carrinho!" deve aparecer

## 🔧 **Página de Teste Avançado**

### **Acessar Página de Teste**
1. Abra `tests/typebot-test.html` no navegador
2. Esta página testa todas as funções individualmente

### **Testes Disponíveis**
- ✅ **Widget de Boas-vindas**: Testa função `showWelcomeWidget()`
- ✅ **Onboarding Vendedor**: Testa função `showSellerOnboarding()`
- ✅ **Recomendações**: Testa função `showProductRecommendations()`
- ✅ **Notificações**: Testa função `showNotification()`

## 📊 **O que Observar**

### **Funcionalidades Implementadas**
1. **Widget de Boas-vindas**
   - Aparece automaticamente após 3 segundos
   - Só aparece uma vez por dia (localStorage)
   - Design responsivo e animado

2. **Onboarding Conversacional**
   - Substitui formulário estático por experiência interativa
   - Coleta dados de forma natural
   - Mostra benefícios personalizados

3. **Recomendações Inteligentes**
   - Aparece após adicionar produto ao carrinho
   - Sugere produtos similares
   - Interface limpa e intuitiva

4. **Sistema de Notificações**
   - Feedback imediato para ações do usuário
   - Design consistente com a marca
   - Auto-remove após 3 segundos

## 🎯 **Métricas para Observar**

### **Engajamento**
- **Tempo na página**: Se aumentou com o widget
- **Taxa de clique**: Quantos clicam nos botões do widget
- **Navegação**: Se direciona corretamente para as seções

### **Conversão**
- **Taxa de início**: Quantos começam o onboarding
- **Taxa de conclusão**: Quantos completam o processo
- **Conversão final**: Quantos vão para o cadastro completo

### **Experiência**
- **Feedback visual**: Se as animações estão suaves
- **Responsividade**: Se funciona bem em mobile
- **Usabilidade**: Se é intuitivo e fácil de usar

## 🐛 **Problemas Comuns e Soluções**

### **Widget não aparece**
- ✅ Verificar se o JavaScript está carregando
- ✅ Verificar console do navegador por erros
- ✅ Limpar localStorage: `localStorage.removeItem('welcome-widget-shown')`

### **Modal não abre**
- ✅ Verificar se a função `showSellerOnboarding()` existe
- ✅ Verificar se não há conflitos de CSS
- ✅ Verificar z-index dos elementos

### **Recomendações não aparecem**
- ✅ Verificar se os botões têm a classe correta
- ✅ Verificar se a função `showProductRecommendations()` existe
- ✅ Verificar se há produtos para recomendar

### **Notificações não aparecem**
- ✅ Verificar se a função `showNotification()` existe
- ✅ Verificar se há conflitos de z-index
- ✅ Verificar se o CSS está carregando

## 📱 **Teste em Mobile**

### **Responsividade**
- ✅ Widget deve se adaptar ao tamanho da tela
- ✅ Modal deve ser scrollável em telas pequenas
- ✅ Botões devem ter tamanho adequado para touch

### **Performance**
- ✅ Carregamento deve ser rápido
- ✅ Animações devem ser suaves
- ✅ Não deve travar o navegador

## 🔄 **Próximos Passos**

### **Após Teste Inicial**
1. **Coletar Feedback**: Perguntar aos usuários sobre a experiência
2. **Ajustar Timing**: Modificar quando os widgets aparecem
3. **Personalizar Conteúdo**: Adaptar mensagens e recomendações
4. **Adicionar Analytics**: Rastrear cliques e conversões

### **Melhorias Futuras**
1. **Machine Learning**: Recomendações mais inteligentes
2. **Integração Real**: Conectar com backend real
3. **Mais Widgets**: Suporte ao cliente, recuperação de carrinho
4. **A/B Testing**: Testar diferentes abordagens

## 📞 **Suporte**

Se encontrar problemas:
1. Verificar console do navegador (F12)
2. Testar na página `tests/typebot-test.html`
3. Verificar se todos os arquivos estão carregando
4. Limpar cache do navegador se necessário

---

*Este teste validará se o Typebot está funcionando corretamente e criando a experiência desejada para os usuários.* 