// ========================================
// CORREÇÃO ESPECÍFICA PARA FORMULÁRIOS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Função para corrigir a visibilidade dos inputs
    function fixInputVisibility() {
        const formInputs = document.querySelectorAll('#seller-register input, #delivery-register input, #user-register input');
        
        formInputs.forEach(input => {
            // Garantir que o input tenha as propriedades corretas
            input.style.backgroundColor = '#ffffff';
            input.style.color = '#000000';
            input.style.border = '1px solid #d1d5db';
            input.style.borderRadius = '8px';
            input.style.padding = '12px 16px';
            input.style.fontSize = '16px';
            input.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
            input.style.lineHeight = '1.5';
            input.style.transition = 'all 0.3s ease';
            input.style.webkitAppearance = 'none';
            input.style.mozAppearance = 'none';
            input.style.appearance = 'none';
            input.style.boxSizing = 'border-box';
            input.style.width = '100%';
            input.style.display = 'block';
            input.style.opacity = '1';
            input.style.visibility = 'visible';
            input.style.webkitTextFillColor = '#000000';
            input.style.webkitTextStroke = '0';
            
            // Adicionar event listeners para garantir que a cor seja mantida
            input.addEventListener('focus', function() {
                this.style.borderColor = '#22c55e';
                this.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.1)';
                this.style.backgroundColor = '#ffffff';
                this.style.color = '#000000';
                this.style.webkitTextFillColor = '#000000';
                this.style.webkitTextStroke = '0';
            });
            
            input.addEventListener('blur', function() {
                this.style.borderColor = '#d1d5db';
                this.style.boxShadow = 'none';
                this.style.backgroundColor = '#ffffff';
                this.style.color = '#000000';
                this.style.webkitTextFillColor = '#000000';
                this.style.webkitTextStroke = '0';
            });
            
            input.addEventListener('input', function() {
                this.style.color = '#000000';
                this.style.webkitTextFillColor = '#000000';
                this.style.webkitTextStroke = '0';
            });
            
            input.addEventListener('change', function() {
                this.style.color = '#000000';
                this.style.webkitTextFillColor = '#000000';
                this.style.webkitTextStroke = '0';
            });
        });
        
        // Corrigir selects
        const formSelects = document.querySelectorAll('#seller-register select, #delivery-register select, #user-register select');
        
        formSelects.forEach(select => {
            select.style.backgroundColor = '#ffffff';
            select.style.color = '#000000';
            select.style.border = '1px solid #d1d5db';
            select.style.borderRadius = '8px';
            select.style.padding = '12px 16px';
            select.style.fontSize = '16px';
            select.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
            select.style.lineHeight = '1.5';
            select.style.transition = 'all 0.3s ease';
            select.style.webkitAppearance = 'none';
            select.style.mozAppearance = 'none';
            select.style.appearance = 'none';
            select.style.boxSizing = 'border-box';
            select.style.width = '100%';
            select.style.display = 'block';
            select.style.opacity = '1';
            select.style.visibility = 'visible';
            select.style.webkitTextFillColor = '#000000';
            select.style.webkitTextStroke = '0';
            
            select.addEventListener('focus', function() {
                this.style.borderColor = '#22c55e';
                this.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.1)';
                this.style.backgroundColor = '#ffffff';
                this.style.color = '#000000';
                this.style.webkitTextFillColor = '#000000';
                this.style.webkitTextStroke = '0';
            });
            
            select.addEventListener('blur', function() {
                this.style.borderColor = '#d1d5db';
                this.style.boxShadow = 'none';
                this.style.backgroundColor = '#ffffff';
                this.style.color = '#000000';
                this.style.webkitTextFillColor = '#000000';
                this.style.webkitTextStroke = '0';
            });
            
            select.addEventListener('change', function() {
                this.style.color = '#000000';
                this.style.webkitTextFillColor = '#000000';
                this.style.webkitTextStroke = '0';
            });
        });
        
        // Corrigir textareas
        const formTextareas = document.querySelectorAll('#seller-register textarea, #delivery-register textarea, #user-register textarea');
        
        formTextareas.forEach(textarea => {
            textarea.style.backgroundColor = '#ffffff';
            textarea.style.color = '#000000';
            textarea.style.border = '1px solid #d1d5db';
            textarea.style.borderRadius = '8px';
            textarea.style.padding = '12px 16px';
            textarea.style.fontSize = '16px';
            textarea.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
            textarea.style.lineHeight = '1.5';
            textarea.style.transition = 'all 0.3s ease';
            textarea.style.webkitAppearance = 'none';
            textarea.style.mozAppearance = 'none';
            textarea.style.appearance = 'none';
            textarea.style.boxSizing = 'border-box';
            textarea.style.width = '100%';
            textarea.style.display = 'block';
            textarea.style.opacity = '1';
            textarea.style.visibility = 'visible';
            textarea.style.webkitTextFillColor = '#000000';
            textarea.style.webkitTextStroke = '0';
            
            textarea.addEventListener('focus', function() {
                this.style.borderColor = '#22c55e';
                this.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.1)';
                this.style.backgroundColor = '#ffffff';
                this.style.color = '#000000';
                this.style.webkitTextFillColor = '#000000';
                this.style.webkitTextStroke = '0';
            });
            
            textarea.addEventListener('blur', function() {
                this.style.borderColor = '#d1d5db';
                this.style.boxShadow = 'none';
                this.style.backgroundColor = '#ffffff';
                this.style.color = '#000000';
                this.style.webkitTextFillColor = '#000000';
                this.style.webkitTextStroke = '0';
            });
            
            textarea.addEventListener('input', function() {
                this.style.color = '#000000';
                this.style.webkitTextFillColor = '#000000';
                this.style.webkitTextStroke = '0';
            });
        });
    }
    
    // Executar a correção imediatamente
    fixInputVisibility();
    
    // Executar a correção quando as abas são alteradas
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            setTimeout(fixInputVisibility, 100);
        });
    });
    
    // Executar a correção periodicamente para garantir que funcione
    setInterval(fixInputVisibility, 1000);
    
    // Executar a correção quando o DOM é modificado
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                setTimeout(fixInputVisibility, 100);
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Função global para forçar a correção
window.fixFormInputs = function() {
    const formInputs = document.querySelectorAll('#seller-register input, #delivery-register input, #user-register input');
    formInputs.forEach(input => {
        input.style.color = '#000000';
        input.style.webkitTextFillColor = '#000000';
        input.style.webkitTextStroke = '0';
        input.style.backgroundColor = '#ffffff';
    });
}; 