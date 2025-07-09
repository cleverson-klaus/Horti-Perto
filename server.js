const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Configuração do Multer para upload de arquivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'uploads/documentos/';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    },
    fileFilter: function (req, file, cb) {
        const allowedTypes = /jpeg|jpg|png|pdf/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Apenas arquivos JPG, PNG e PDF são permitidos!'));
        }
    }
});

// ========================================
// VALIDAÇÃO DE CPF E CNPJ
// ========================================

// Função para validar CPF
function validateCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');
    
    // Verifica se tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }
    
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }
    
    // Validação do primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.charAt(9))) {
        return false;
    }
    
    // Validação do segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.charAt(10))) {
        return false;
    }
    
    return true;
}

// Função para validar CNPJ
function validateCNPJ(cnpj) {
    // Remove caracteres não numéricos
    cnpj = cnpj.replace(/\D/g, '');
    
    // Verifica se tem 14 dígitos
    if (cnpj.length !== 14) {
        return false;
    }
    
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{13}$/.test(cnpj)) {
        return false;
    }
    
    // Validação do primeiro dígito verificador
    let sum = 0;
    const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    
    for (let i = 0; i < 12; i++) {
        sum += parseInt(cnpj.charAt(i)) * weights1[i];
    }
    
    let remainder = sum % 11;
    let digit1 = remainder < 2 ? 0 : 11 - remainder;
    
    if (digit1 !== parseInt(cnpj.charAt(12))) {
        return false;
    }
    
    // Validação do segundo dígito verificador
    sum = 0;
    const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    
    for (let i = 0; i < 13; i++) {
        sum += parseInt(cnpj.charAt(i)) * weights2[i];
    }
    
    remainder = sum % 11;
    let digit2 = remainder < 2 ? 0 : 11 - remainder;
    
    if (digit2 !== parseInt(cnpj.charAt(13))) {
        return false;
    }
    
    return true;
}

// Função para detectar e validar CPF ou CNPJ
function validateCPForCNPJ(document) {
    const cleanDoc = document.replace(/\D/g, '');
    
    if (cleanDoc.length === 11) {
        return validateCPF(cleanDoc);
    } else if (cleanDoc.length === 14) {
        return validateCNPJ(cleanDoc);
    }
    
    return false;
}

// ========================================
// ROTAS DE VALIDAÇÃO
// ========================================

// Rota para validar CPF
app.post('/api/validate-cpf', (req, res) => {
    const { cpf } = req.body;
    
    if (!cpf) {
        return res.status(400).json({ 
            valid: false, 
            message: 'CPF não fornecido' 
        });
    }
    
    const isValid = validateCPF(cpf);
    
    res.json({
        valid: isValid,
        message: isValid ? 'CPF válido' : 'CPF inválido',
        document: cpf.replace(/\D/g, '')
    });
});

// Rota para validar CNPJ
app.post('/api/validate-cnpj', (req, res) => {
    const { cnpj } = req.body;
    
    if (!cnpj) {
        return res.status(400).json({ 
            valid: false, 
            message: 'CNPJ não fornecido' 
        });
    }
    
    const isValid = validateCNPJ(cnpj);
    
    res.json({
        valid: isValid,
        message: isValid ? 'CNPJ válido' : 'CNPJ inválido',
        document: cnpj.replace(/\D/g, '')
    });
});

// Rota para validar CPF ou CNPJ automaticamente
app.post('/api/validate-document', (req, res) => {
    const { document } = req.body;
    
    if (!document) {
        return res.status(400).json({ 
            valid: false, 
            message: 'Documento não fornecido' 
        });
    }
    
    const isValid = validateCPForCNPJ(document);
    const cleanDoc = document.replace(/\D/g, '');
    const docType = cleanDoc.length === 11 ? 'CPF' : cleanDoc.length === 14 ? 'CNPJ' : 'Inválido';
    
    res.json({
        valid: isValid,
        message: isValid ? `${docType} válido` : `${docType} inválido`,
        document: cleanDoc,
        type: docType
    });
});

// ========================================
// ROTAS DE UPLOAD
// ======================================== 