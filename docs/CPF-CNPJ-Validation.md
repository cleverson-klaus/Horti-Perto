# Validação de CPF e CNPJ - HortiPerto

## 📋 Visão Geral

O sistema de validação de CPF e CNPJ da plataforma HortiPerto oferece validação em tempo real, formatação automática e detecção inteligente do tipo de documento.

## ✨ Funcionalidades

### 🔍 Validação em Tempo Real
- Validação automática enquanto o usuário digita
- Feedback visual imediato (verde para válido, vermelho para inválido)
- Mensagens de erro claras e específicas

### 🎨 Formatação Automática
- **CPF**: `000.000.000-00`
- **CNPJ**: `00.000.000/0000-00`
- Formatação aplicada automaticamente durante a digitação

### 🧠 Detecção Inteligente
- Detecta automaticamente se é CPF (11 dígitos) ou CNPJ (14 dígitos)
- Funciona com o campo `seller-doc` que aceita ambos os tipos

## 📁 Arquivos do Sistema

### JavaScript
- `js/cpf-cnpj-validation.js` - Sistema principal de validação
- `js/hortiperto-main.js` - Funções de validação existentes (mantidas para compatibilidade)

### CSS
- `css/cpf-cnpj-validation.css` - Estilos para validação e feedback visual

## 🎯 Campos Validados

### Formulário de Vendedor
```html
<input type="text" id="seller-doc" placeholder="Digite apenas números (CPF: 11 dígitos, CNPJ: 14 dígitos)">
```
- Aceita CPF ou CNPJ
- Detecção automática do tipo
- Máximo 18 caracteres (formatação incluída)

### Formulário de Entregador
```html
<input type="text" id="delivery-cpf" placeholder="Digite apenas números (11 dígitos)">
```
- Aceita apenas CPF
- Máximo 14 caracteres (formatação incluída)

### Formulário de Usuário
```html
<input type="text" id="user-cpf" placeholder="Digite apenas números (11 dígitos)">
```
- Aceita apenas CPF
- Máximo 14 caracteres (formatação incluída)

## 🔧 Como Usar

### 1. Inicialização Automática
O sistema é inicializado automaticamente quando a página carrega:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    window.cpfCnpjValidator = new CPFCNPJValidator();
});
```

### 2. Validação Manual
```javascript
// Validar CPF
const cpfValido = window.validateCPF('11144477735');

// Validar CNPJ
const cnpjValido = window.validateCNPJ('11222333000181');

// Validar CPF ou CNPJ (detecção automática)
const documentoValido = window.validateCPForCNPJ('11144477735');
```

### 3. Formatação Manual
```javascript
// Formatar CPF
window.formatCPF(inputElement);

// Formatar CNPJ
window.formatCNPJ(inputElement);

// Formatar CPF ou CNPJ (detecção automática)
window.formatCPForCNPJ(inputElement);
```

## 🎨 Estilos Visuais

### Estados dos Campos
- **Normal**: Borda cinza
- **Válido**: Borda verde com fundo verde claro
- **Inválido**: Borda vermelha com fundo vermelho claro
- **Foco**: Borda azul com sombra

### Mensagens de Validação
- **Sucesso**: Fundo verde com ícone ✓
- **Erro**: Fundo vermelho com ícone ✗
- Animações suaves de entrada

## 🧪 Testes

### Página de Teste
Acesse `tests/cpf-cnpj-test.html` para testar todas as funcionalidades:

- Teste de CPFs válidos e inválidos
- Teste de CNPJs válidos e inválidos
- Teste de detecção automática
- Exemplos práticos

### CPFs de Teste Válidos
- `11144477735`
- `12345678909`
- `98765432100`

### CNPJs de Teste Válidos
- `11222333000181`
- `12345678000195`
- `98765432000100`

## 🔍 Algoritmo de Validação

### CPF
1. Remove caracteres não numéricos
2. Verifica se tem 11 dígitos
3. Verifica se não são todos iguais
4. Calcula primeiro dígito verificador
5. Calcula segundo dígito verificador
6. Compara com os dígitos informados

### CNPJ
1. Remove caracteres não numéricos
2. Verifica se tem 14 dígitos
3. Verifica se não são todos iguais
4. Calcula primeiro dígito verificador (pesos: 5,4,3,2,9,8,7,6,5,4,3,2)
5. Calcula segundo dígito verificador (pesos: 6,5,4,3,2,9,8,7,6,5,4,3,2)
6. Compara com os dígitos informados

## 🚀 Eventos

### Eventos de Input
- `input`: Formatação e validação em tempo real
- `blur`: Validação final ao perder foco
- `keypress`: Validação ao pressionar Enter

### Eventos de Formulário
- `submit`: Validação de todos os campos antes do envio
- Previne envio se houver campos inválidos

## 🔧 Configuração

### Personalização de Estilos
Edite `css/cpf-cnpj-validation.css` para personalizar:

```css
/* Cores de validação */
input.valid {
    border-color: #10b981;
    background-color: #f0fdf4;
}

input.invalid {
    border-color: #ef4444;
    background-color: #fef2f2;
}
```

### Mensagens Personalizadas
Edite as mensagens no arquivo JavaScript:

```javascript
showValidationMessage(input, 'Sua mensagem personalizada', 'success');
```

## 🐛 Solução de Problemas

### Campo não está sendo validado
1. Verifique se o ID do campo está correto
2. Confirme se o arquivo `cpf-cnpj-validation.js` está carregado
3. Verifique o console do navegador para erros

### Formatação não está funcionando
1. Verifique se o evento `input` está sendo disparado
2. Confirme se a função de formatação está sendo chamada
3. Verifique se há conflitos com outros scripts

### Estilos não estão sendo aplicados
1. Verifique se o arquivo `cpf-cnpj-validation.css` está carregado
2. Confirme se não há conflitos com outros estilos
3. Use `!important` se necessário para sobrescrever estilos

## 📞 Suporte

Para dúvidas ou problemas com a validação:

1. Verifique a documentação
2. Teste na página de testes
3. Consulte o console do navegador
4. Entre em contato com a equipe de desenvolvimento

---

**Desenvolvido para HortiPerto** 🌱
*Conectando produtores e consumidores* 