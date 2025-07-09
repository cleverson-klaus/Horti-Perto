// HortiPerto - Gerenciador de Formulários
// Captura e validação de dados dos formulários para IndexedDB

class FormHandler {
    constructor() {
        this.currentUserId = null;
        this.currentSellerId = null;
        this.currentDeliveryId = null;
    }

    // ========================================
    // FORMULÁRIO DE USUÁRIO
    // ========================================

    async handleUserSubmit(formData) {
        try {
            // Validar dados obrigatórios
            const requiredFields = ['name', 'email', 'cpf', 'phone', 'address', 'city', 'state'];
            const missingFields = requiredFields.filter(field => !formData[field]);
            
            if (missingFields.length > 0) {
                throw new Error(`Campos obrigatórios não preenchidos: ${missingFields.join(', ')}`);
            }

            // Verificar se usuário já existe
            const existingUser = await window.hortiPertoDB.getUserByEmail(formData.email);
            if (existingUser) {
                throw new Error('Email já cadastrado');
            }

            const existingCPF = await window.hortiPertoDB.getUserByCPF(formData.cpf);
            if (existingCPF) {
                throw new Error('CPF já cadastrado');
            }

            // Preparar dados do usuário
            const userData = {
                name: formData.name,
                email: formData.email,
                cpf: formData.cpf,
                phone: formData.phone,
                address: formData.address,
                city: formData.city,
                state: formData.state,
                cep: formData.cep || '',
                complement: formData.complement || '',
                paymentMethod: formData.paymentMethod || 'pix',
                cardNumber: formData.cardNumber || '',
                cardExpiry: formData.cardExpiry || '',
                cardCVV: formData.cardCVV || ''
            };

            // Salvar no banco
            const userId = await window.hortiPertoDB.addUser(userData);
            this.currentUserId = userId;

            showNotification('Usuário cadastrado com sucesso!', 'success');
            return userId;

        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            showNotification(error.message, 'error');
            throw error;
        }
    }

    // ========================================
    // FORMULÁRIO DE VENDEDOR
    // ========================================

    async handleSellerSubmit(formData) {
        try {
            // Validar dados obrigatórios
            const requiredFields = [
                'name', 'email', 'document', 'phone', 'cpp',
                'address', 'city', 'state', 'cep',
                'bank', 'agency', 'account', 'pix'
            ];
            
            const missingFields = requiredFields.filter(field => !formData[field]);
            
            if (missingFields.length > 0) {
                throw new Error(`Campos obrigatórios não preenchidos: ${missingFields.join(', ')}`);
            }

            // Verificar se vendedor já existe
            const existingEmail = await window.hortiPertoDB.getSellerByEmail(formData.email);
            if (existingEmail) {
                throw new Error('Email já cadastrado');
            }

            const existingDoc = await window.hortiPertoDB.getSellerByDocument(formData.document);
            if (existingDoc) {
                throw new Error('CPF/CNPJ já cadastrado');
            }

            // Preparar dados do vendedor
            const sellerData = {
                name: formData.name,
                email: formData.email,
                document: formData.document,
                phone: formData.phone,
                cpp: formData.cpp,
                address: formData.address,
                city: formData.city,
                state: formData.state,
                cep: formData.cep,
                complement: formData.complement || '',
                bank: formData.bank,
                agency: formData.agency,
                account: formData.account,
                pix: formData.pix,
                sanitaryLicense: formData.sanitaryLicense || '',
                car: formData.car || '',
                stateRegistration: formData.stateRegistration || '',
                organicCertification: formData.organicCertification || false
            };

            // Salvar no banco
            const sellerId = await window.hortiPertoDB.addSeller(sellerData);
            this.currentSellerId = sellerId;

            showNotification('Vendedor cadastrado com sucesso!', 'success');
            return sellerId;

        } catch (error) {
            console.error('Erro ao cadastrar vendedor:', error);
            showNotification(error.message, 'error');
            throw error;
        }
    }

    // ========================================
    // FORMULÁRIO DE ENTREGADOR
    // ========================================

    async handleDeliverySubmit(formData) {
        try {
            // Validar dados obrigatórios
            const requiredFields = [
                'name', 'email', 'cpf', 'phone',
                'address', 'city', 'state', 'cep',
                'bank', 'agency', 'account', 'pix'
            ];
            
            const missingFields = requiredFields.filter(field => !formData[field]);
            
            if (missingFields.length > 0) {
                throw new Error(`Campos obrigatórios não preenchidos: ${missingFields.join(', ')}`);
            }

            // Verificar se entregador já existe
            const existingEmail = await window.hortiPertoDB.getDeliveryByEmail(formData.email);
            if (existingEmail) {
                throw new Error('Email já cadastrado');
            }

            const existingCPF = await window.hortiPertoDB.getDeliveryByCPF(formData.cpf);
            if (existingCPF) {
                throw new Error('CPF já cadastrado');
            }

            // Preparar dados do entregador
            const deliveryData = {
                name: formData.name,
                email: formData.email,
                cpf: formData.cpf,
                phone: formData.phone,
                address: formData.address,
                city: formData.city,
                state: formData.state,
                cep: formData.cep,
                complement: formData.complement || '',
                bank: formData.bank,
                agency: formData.agency,
                account: formData.account,
                pix: formData.pix,
                cnh: formData.cnh || '',
                vehicleDocuments: formData.vehicleDocuments || '',
                profilePhoto: formData.profilePhoto || '',
                vehicleType: formData.vehicleType || 'moto',
                vehiclePlate: formData.vehiclePlate || ''
            };

            // Salvar no banco
            const deliveryId = await window.hortiPertoDB.addDelivery(deliveryData);
            this.currentDeliveryId = deliveryId;

            showNotification('Entregador cadastrado com sucesso!', 'success');
            return deliveryId;

        } catch (error) {
            console.error('Erro ao cadastrar entregador:', error);
            showNotification(error.message, 'error');
            throw error;
        }
    }

    // ========================================
    // FORMULÁRIO DE PRODUTO
    // ========================================

    async handleProductSubmit(formData) {
        try {
            // Validar dados obrigatórios
            const requiredFields = ['name', 'category', 'price', 'unit', 'quantity', 'description'];
            const missingFields = requiredFields.filter(field => !formData[field]);
            
            if (missingFields.length > 0) {
                throw new Error(`Campos obrigatórios não preenchidos: ${missingFields.join(', ')}`);
            }

            if (!this.currentSellerId) {
                throw new Error('Vendedor não identificado. Faça login primeiro.');
            }

            // Preparar dados do produto
            const productData = {
                name: formData.name,
                category: formData.category,
                price: parseFloat(formData.price),
                unit: formData.unit,
                quantity: parseInt(formData.quantity),
                description: formData.description,
                image: formData.image || '',
                organic: formData.organic || false,
                sellerId: this.currentSellerId
            };

            // Salvar no banco
            const productId = await window.hortiPertoDB.addProduct(productData);
            
            showNotification('Produto cadastrado com sucesso!', 'success');
            return productId;

        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            showNotification(error.message, 'error');
            throw error;
        }
    }

    // ========================================
    // CAPTURA DE DADOS DOS FORMULÁRIOS
    // ========================================

    // Capturar dados do formulário de usuário
    captureUserFormData() {
        const form = document.getElementById('user-form');
        if (!form) return null;

        const formData = {
            name: this.getInputValue('user-name'),
            email: this.getInputValue('user-email'),
            cpf: this.getInputValue('user-cpf'),
            phone: this.getInputValue('user-phone'),
            address: this.getInputValue('user-address'),
            city: this.getInputValue('user-city'),
            state: this.getInputValue('user-state'),
            cep: this.getInputValue('user-cep'),
            complement: this.getInputValue('user-complement'),
            paymentMethod: this.getInputValue('user-payment-method'),
            cardNumber: this.getInputValue('user-card-number'),
            cardExpiry: this.getInputValue('user-card-expiry'),
            cardCVV: this.getInputValue('user-card-cvv')
        };

        return formData;
    }

    // Capturar dados do formulário de vendedor
    captureSellerFormData() {
        const formData = {
            name: this.getInputValue('seller-name'),
            email: this.getInputValue('seller-email'),
            document: this.getInputValue('seller-doc'),
            phone: this.getInputValue('seller-phone'),
            cpp: this.getInputValue('seller-cpp'),
            address: this.getInputValue('seller-address'),
            city: this.getInputValue('seller-city'),
            state: this.getInputValue('seller-state'),
            cep: this.getInputValue('seller-cep'),
            complement: this.getInputValue('seller-complement'),
            bank: this.getInputValue('seller-bank'),
            agency: this.getInputValue('seller-agency'),
            account: this.getInputValue('seller-account'),
            pix: this.getInputValue('seller-pix'),
            sanitaryLicense: this.getInputValue('seller-sanitary-license'),
            car: this.getInputValue('seller-car'),
            stateRegistration: this.getInputValue('seller-state-registration'),
            organicCertification: this.getCheckboxValue('seller-organic-certification')
        };

        return formData;
    }

    // Capturar dados do formulário de entregador
    captureDeliveryFormData() {
        const formData = {
            name: this.getInputValue('delivery-name'),
            email: this.getInputValue('delivery-email'),
            cpf: this.getInputValue('delivery-cpf'),
            phone: this.getInputValue('delivery-phone'),
            address: this.getInputValue('delivery-address'),
            city: this.getInputValue('delivery-city'),
            state: this.getInputValue('delivery-state'),
            cep: this.getInputValue('delivery-cep'),
            complement: this.getInputValue('delivery-complement'),
            bank: this.getInputValue('delivery-bank'),
            agency: this.getInputValue('delivery-agency'),
            account: this.getInputValue('delivery-account'),
            pix: this.getInputValue('delivery-pix'),
            cnh: this.getInputValue('delivery-cnh'),
            vehicleDocuments: this.getInputValue('delivery-vehicle-documents'),
            profilePhoto: this.getInputValue('delivery-profile-photo'),
            vehicleType: this.getInputValue('delivery-vehicle-type'),
            vehiclePlate: this.getInputValue('delivery-vehicle-plate')
        };

        return formData;
    }

    // Capturar dados do formulário de produto
    captureProductFormData() {
        const formData = {
            name: this.getInputValue('product-name'),
            category: this.getInputValue('product-category'),
            price: this.getInputValue('product-price'),
            unit: this.getInputValue('product-unit'),
            quantity: this.getInputValue('product-quantity'),
            description: this.getInputValue('product-description'),
            image: this.getInputValue('product-image'),
            organic: this.getCheckboxValue('product-organic')
        };

        return formData;
    }

    // ========================================
    // UTILITÁRIOS
    // ========================================

    // Obter valor de um input
    getInputValue(inputId) {
        const input = document.getElementById(inputId);
        return input ? input.value.trim() : '';
    }

    // Obter valor de um checkbox
    getCheckboxValue(checkboxId) {
        const checkbox = document.getElementById(checkboxId);
        return checkbox ? checkbox.checked : false;
    }

    // Obter valor de um select
    getSelectValue(selectId) {
        const select = document.getElementById(selectId);
        return select ? select.value : '';
    }

    // Limpar formulário
    clearForm(formId) {
        const form = document.getElementById(formId);
        if (form) {
            form.reset();
        }
    }

    // Validar email
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validar CPF
    validateCPF(cpf) {
        const cleanCPF = cpf.replace(/\D/g, '');
        if (cleanCPF.length !== 11) return false;
        
        // Verificar se todos os dígitos são iguais
        if (/^(\d)\1{10}$/.test(cleanCPF)) return false;
        
        // Calcular dígitos verificadores
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
        }
        let remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cleanCPF.charAt(9))) return false;
        
        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
        }
        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cleanCPF.charAt(10))) return false;
        
        return true;
    }

    // Validar CNPJ
    validateCNPJ(cnpj) {
        const cleanCNPJ = cnpj.replace(/\D/g, '');
        if (cleanCNPJ.length !== 14) return false;
        
        // Verificar se todos os dígitos são iguais
        if (/^(\d)\1{13}$/.test(cleanCNPJ)) return false;
        
        // Calcular primeiro dígito verificador
        let sum = 0;
        const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        for (let i = 0; i < 12; i++) {
            sum += parseInt(cleanCNPJ.charAt(i)) * weights1[i];
        }
        let remainder = sum % 11;
        let digit1 = remainder < 2 ? 0 : 11 - remainder;
        if (digit1 !== parseInt(cleanCNPJ.charAt(12))) return false;
        
        // Calcular segundo dígito verificador
        sum = 0;
        const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        for (let i = 0; i < 13; i++) {
            sum += parseInt(cleanCNPJ.charAt(i)) * weights2[i];
        }
        remainder = sum % 11;
        let digit2 = remainder < 2 ? 0 : 11 - remainder;
        if (digit2 !== parseInt(cleanCNPJ.charAt(13))) return false;
        
        return true;
    }

    // Validar CEP
    validateCEP(cep) {
        const cleanCEP = cep.replace(/\D/g, '');
        return cleanCEP.length === 8;
    }

    // Validar telefone
    validatePhone(phone) {
        const cleanPhone = phone.replace(/\D/g, '');
        return cleanPhone.length >= 10 && cleanPhone.length <= 11;
    }

    // ========================================
    // CARREGAMENTO DE DADOS
    // ========================================

    // Carregar produtos do banco
    async loadProductsFromDB() {
        try {
            const products = await window.hortiPertoDB.getActiveProducts();
            return products;
        } catch (error) {
            console.error('Erro ao carregar produtos:', error);
            return [];
        }
    }

    // Carregar produtos de um vendedor específico
    async loadSellerProducts(sellerId) {
        try {
            const products = await window.hortiPertoDB.getProductsBySeller(sellerId);
            return products;
        } catch (error) {
            console.error('Erro ao carregar produtos do vendedor:', error);
            return [];
        }
    }

    // Carregar carrinho do usuário
    async loadUserCart(userId) {
        try {
            const cartItems = await window.hortiPertoDB.getCartByUser(userId);
            return cartItems;
        } catch (error) {
            console.error('Erro ao carregar carrinho:', error);
            return [];
        }
    }

    // Carregar pedidos do usuário
    async loadUserOrders(userId) {
        try {
            const orders = await window.hortiPertoDB.getOrdersByUser(userId);
            return orders;
        } catch (error) {
            console.error('Erro ao carregar pedidos:', error);
            return [];
        }
    }

    // Carregar pedidos do vendedor
    async loadSellerOrders(sellerId) {
        try {
            const orders = await window.hortiPertoDB.getOrdersBySeller(sellerId);
            return orders;
        } catch (error) {
            console.error('Erro ao carregar pedidos do vendedor:', error);
            return [];
        }
    }

    // ========================================
    // GESTÃO DE SESSÃO
    // ========================================

    // Definir usuário atual
    setCurrentUser(userId) {
        this.currentUserId = userId;
        localStorage.setItem('currentUserId', userId);
    }

    // Obter usuário atual
    getCurrentUser() {
        if (!this.currentUserId) {
            this.currentUserId = localStorage.getItem('currentUserId');
        }
        return this.currentUserId;
    }

    // Definir vendedor atual
    setCurrentSeller(sellerId) {
        this.currentSellerId = sellerId;
        localStorage.setItem('currentSellerId', sellerId);
    }

    // Obter vendedor atual
    getCurrentSeller() {
        if (!this.currentSellerId) {
            this.currentSellerId = localStorage.getItem('currentSellerId');
        }
        return this.currentSellerId;
    }

    // Definir entregador atual
    setCurrentDelivery(deliveryId) {
        this.currentDeliveryId = deliveryId;
        localStorage.setItem('currentDeliveryId', deliveryId);
    }

    // Obter entregador atual
    getCurrentDelivery() {
        if (!this.currentDeliveryId) {
            this.currentDeliveryId = localStorage.getItem('currentDeliveryId');
        }
        return this.currentDeliveryId;
    }

    // Limpar sessão
    clearSession() {
        this.currentUserId = null;
        this.currentSellerId = null;
        this.currentDeliveryId = null;
        localStorage.removeItem('currentUserId');
        localStorage.removeItem('currentSellerId');
        localStorage.removeItem('currentDeliveryId');
    }
}

// Instância global do gerenciador de formulários
window.formHandler = new FormHandler(); 