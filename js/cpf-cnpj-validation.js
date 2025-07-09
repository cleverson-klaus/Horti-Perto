// ========================================
// VALIDAÇÃO AVANÇADA DE CPF E CNPJ
// ========================================

class CPFCNPJValidator {
    constructor() {
        this.init();
    }

    init() {
        this.setupValidation();
        this.setupRealTimeValidation();
        this.setupFormSubmission();
    }

    // Configurar validação para todos os campos
    setupValidation() {
        // Campos de CPF específicos
        const cpfInputs = document.querySelectorAll('input[id*="-cpf"]');
        cpfInputs.forEach(input => {
            this.setupCPFInput(input);
        });

        // Campo de CPF/CNPJ (vendedor)
        const docInputs = document.querySelectorAll('input[id="seller-doc"]');
        docInputs.forEach(input => {
            this.setupDocInput(input);
        });
    }

    // Configurar input de CPF
    setupCPFInput(input) {
        // Formatação em tempo real
        input.addEventListener('input', (e) => {
            this.formatCPF(e.target);
            this.validateRealTime(e.target);
        });

        // Validação ao perder foco
        input.addEventListener('blur', (e) => {
            this.validateOnBlur(e.target);
        });

        // Validação ao pressionar Enter
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.validateOnBlur(e.target);
            }
        });

        // Limpar validação ao começar a digitar
        input.addEventListener('input', (e) => {
            const value = e.target.value.replace(/\D/g, '');
            if (value.length < 11) {
                this.clearValidation(e.target);
            }
        });
    }

    // Configurar input de CPF/CNPJ
    setupDocInput(input) {
        // Formatação em tempo real
        input.addEventListener('input', (e) => {
            this.formatCPForCNPJ(e.target);
            this.validateRealTime(e.target);
        });

        // Validação ao perder foco
        input.addEventListener('blur', (e) => {
            this.validateOnBlur(e.target);
        });

        // Validação ao pressionar Enter
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.validateOnBlur(e.target);
            }
        });

        // Limpar validação ao começar a digitar
        input.addEventListener('input', (e) => {
            const value = e.target.value.replace(/\D/g, '');
            if (value.length < 11) {
                this.clearValidation(e.target);
            }
        });
    }

    // Validação em tempo real
    setupRealTimeValidation() {
        // Validar todos os campos periodicamente
        setInterval(() => {
            const allInputs = document.querySelectorAll('input[id*="-cpf"], input[id="seller-doc"]');
            allInputs.forEach(input => {
                if (input.value.trim()) {
                    this.validateRealTime(input);
                }
            });
        }, 2000);
    }

    // Configurar validação no envio do formulário
    setupFormSubmission() {
        const forms = document.querySelectorAll('#seller-form, #delivery-form, #user-form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!this.validateAllFields()) {
                    e.preventDefault();
                    this.showNotification('Por favor, corrija os erros de CPF/CNPJ antes de continuar.', 'error');
                }
            });
        });
    }

    // Formatar CPF
    formatCPF(input) {
        let value = input.value.replace(/\D/g, '');
        value = value.substring(0, 11);
        
        if (value.length > 0) {
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        }
        
        input.value = value;
    }

    // Formatar CPF ou CNPJ
    formatCPForCNPJ(input) {
        let value = input.value.replace(/\D/g, '');
        
        if (value.length <= 11) {
            // Formatar como CPF
            value = value.substring(0, 11);
            if (value.length > 0) {
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            }
        } else {
            // Formatar como CNPJ
            value = value.substring(0, 14);
            if (value.length > 0) {
                value = value.replace(/(\d{2})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d)/, '$1/$2');
                value = value.replace(/(\d{4})(\d{1,2})$/, '$1-$2');
            }
        }
        
        input.value = value;
    }

    // Validar CPF
    validateCPF(cpf) {
        cpf = cpf.replace(/\D/g, '');
        
        if (cpf.length !== 11) return false;
        if (/^(\d)\1{10}$/.test(cpf)) return false;
        
        // Validação do primeiro dígito verificador
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cpf.charAt(9))) return false;
        
        // Validação do segundo dígito verificador
        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cpf.charAt(i)) * (11 - i);
        }
        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cpf.charAt(10))) return false;
        
        return true;
    }

    // Validar CNPJ
    validateCNPJ(cnpj) {
        cnpj = cnpj.replace(/\D/g, '');
        
        if (cnpj.length !== 14) return false;
        if (/^(\d)\1{13}$/.test(cnpj)) return false;
        
        // Validação do primeiro dígito verificador
        let sum = 0;
        const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        
        for (let i = 0; i < 12; i++) {
            sum += parseInt(cnpj.charAt(i)) * weights1[i];
        }
        
        let remainder = sum % 11;
        let digit1 = remainder < 2 ? 0 : 11 - remainder;
        
        if (digit1 !== parseInt(cnpj.charAt(12))) return false;
        
        // Validação do segundo dígito verificador
        sum = 0;
        const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        
        for (let i = 0; i < 13; i++) {
            sum += parseInt(cnpj.charAt(i)) * weights2[i];
        }
        
        remainder = sum % 11;
        let digit2 = remainder < 2 ? 0 : 11 - remainder;
        
        if (digit2 !== parseInt(cnpj.charAt(13))) return false;
        
        return true;
    }

    // Validar CPF ou CNPJ
    validateCPForCNPJ(document) {
        const cleanDoc = document.replace(/\D/g, '');
        
        if (cleanDoc.length === 11) {
            return this.validateCPF(cleanDoc);
        } else if (cleanDoc.length === 14) {
            return this.validateCNPJ(cleanDoc);
        }
        
        return false;
    }

    // Validação em tempo real
    validateRealTime(input) {
        const value = input.value.replace(/\D/g, '');
        
        if (value.length === 0) {
            this.clearValidation(input);
            return;
        }
        
        if (value.length === 11 || value.length === 14) {
            const isValid = this.validateCPForCNPJ(input.value);
            this.updateValidationUI(input, isValid, value.length);
        }
    }

    // Validação ao perder foco
    validateOnBlur(input) {
        const value = input.value.replace(/\D/g, '');
        
        if (value.length === 0) {
            this.clearValidation(input);
            return true;
        }
        
        if (value.length === 11 || value.length === 14) {
            const isValid = this.validateCPForCNPJ(input.value);
            this.updateValidationUI(input, isValid, value.length);
            return isValid;
        } else {
            this.showValidationMessage(input, 'CPF deve ter 11 dígitos ou CNPJ deve ter 14 dígitos', 'error');
            return false;
        }
    }

    // Atualizar interface de validação
    updateValidationUI(input, isValid, length) {
        input.classList.remove('valid', 'invalid');
        
        if (isValid) {
            input.classList.add('valid');
            const docType = length === 11 ? 'CPF' : 'CNPJ';
            this.showValidationMessage(input, `${docType} válido!`, 'success');
        } else {
            input.classList.add('invalid');
            const docType = length === 11 ? 'CPF' : 'CNPJ';
            this.showValidationMessage(input, `${docType} inválido!`, 'error');
        }
    }

    // Mostrar mensagem de validação
    showValidationMessage(input, message, type) {
        // Remover mensagem anterior
        this.removeValidationMessage(input);
        
        const messageElement = document.createElement('div');
        messageElement.className = `validation-message ${type}`;
        messageElement.textContent = message;
        messageElement.style.fontSize = '12px';
        messageElement.style.marginTop = '4px';
        messageElement.style.padding = '4px 8px';
        messageElement.style.borderRadius = '4px';
        
        if (type === 'success') {
            messageElement.style.color = '#059669';
            messageElement.style.backgroundColor = '#d1fae5';
            messageElement.style.border = '1px solid #a7f3d0';
        } else {
            messageElement.style.color = '#dc2626';
            messageElement.style.backgroundColor = '#fee2e2';
            messageElement.style.border = '1px solid #fca5a5';
        }
        
        // Inserir após o input
        input.parentNode.insertBefore(messageElement, input.nextSibling);
    }

    // Remover mensagem de validação
    removeValidationMessage(input) {
        const existingMessage = input.parentElement.querySelector('.validation-message');
        if (existingMessage) {
            existingMessage.remove();
        }
    }

    // Limpar validação
    clearValidation(input) {
        input.classList.remove('valid', 'invalid');
        this.removeValidationMessage(input);
    }

    // Validar todos os campos
    validateAllFields() {
        const allInputs = document.querySelectorAll('input[id*="-cpf"], input[id="seller-doc"]');
        let allValid = true;
        
        allInputs.forEach(input => {
            if (input.value.trim()) {
                const isValid = this.validateOnBlur(input);
                if (!isValid) {
                    allValid = false;
                }
            }
        });
        
        return allValid;
    }

    // Mostrar notificação
    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.padding = '12px 20px';
        notification.style.borderRadius = '8px';
        notification.style.color = 'white';
        notification.style.fontWeight = 'bold';
        notification.style.zIndex = '10000';
        notification.style.animation = 'slideIn 0.3s ease';
        
        if (type === 'error') {
            notification.style.backgroundColor = '#dc2626';
        } else {
            notification.style.backgroundColor = '#059669';
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    // Obter CPF/CNPJ limpo
    getCleanDocument(document) {
        return document.replace(/\D/g, '');
    }

    // Verificar se é CPF ou CNPJ
    getDocumentType(document) {
        const clean = this.getCleanDocument(document);
        if (clean.length === 11) return 'CPF';
        if (clean.length === 14) return 'CNPJ';
        return null;
    }
}

// Inicializar validador quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    window.cpfCnpjValidator = new CPFCNPJValidator();
});

// Função global para validar CPF
window.validateCPF = function(cpf) {
    return window.cpfCnpjValidator.validateCPF(cpf);
};

// Função global para validar CNPJ
window.validateCNPJ = function(cnpj) {
    return window.cpfCnpjValidator.validateCNPJ(cnpj);
};

// Função global para validar CPF ou CNPJ
window.validateCPForCNPJ = function(document) {
    return window.cpfCnpjValidator.validateCPForCNPJ(document);
};

// Função global para formatar CPF
window.formatCPF = function(input) {
    window.cpfCnpjValidator.formatCPF(input);
};

// Função global para formatar CPF ou CNPJ
window.formatCPForCNPJ = function(input) {
    window.cpfCnpjValidator.formatCPForCNPJ(input);
}; 