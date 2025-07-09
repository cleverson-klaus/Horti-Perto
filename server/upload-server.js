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
app.use('/uploads', express.static('uploads'));

// Configuração do Multer para upload de arquivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = 'uploads/documentos/';
        
        // Criar diretório se não existir
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        // Gerar nome único para o arquivo
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

// Filtro para validar tipos de arquivo
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Tipo de arquivo não permitido. Apenas JPG e PNG são aceitos.'), false);
    }
};

// Configuração do upload
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
});

// Simular banco de dados (em produção, use um banco real)
let uploadedFiles = [];

// Rota para upload de arquivo
app.post('/api/upload', upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Nenhum arquivo enviado' });
        }

        const fileInfo = {
            id: Date.now(),
            originalName: req.file.originalname,
            fileName: req.file.filename,
            filePath: `/uploads/documentos/${req.file.filename}`,
            uploadDate: new Date().toISOString(),
            fileSize: req.file.size,
            type: req.body.type || 'unknown'
        };

        // Salvar informações do arquivo (simulando banco de dados)
        uploadedFiles.push(fileInfo);

        // Salvar em arquivo JSON (em produção, use um banco real)
        fs.writeFileSync('uploads/files.json', JSON.stringify(uploadedFiles, null, 2));

        res.json({
            success: true,
            message: 'Arquivo enviado com sucesso',
            file: fileInfo
        });

    } catch (error) {
        console.error('Erro no upload:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Rota para listar arquivos
app.get('/api/upload', (req, res) => {
    try {
        const type = req.query.type;
        let files = uploadedFiles;

        if (type) {
            files = uploadedFiles.filter(file => file.type === type);
        }

        res.json({
            success: true,
            files: files
        });

    } catch (error) {
        console.error('Erro ao listar arquivos:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Rota para deletar arquivo
app.delete('/api/upload/:id', (req, res) => {
    try {
        const fileId = parseInt(req.params.id);
        const fileIndex = uploadedFiles.findIndex(file => file.id === fileId);

        if (fileIndex === -1) {
            return res.status(404).json({ error: 'Arquivo não encontrado' });
        }

        const file = uploadedFiles[fileIndex];
        const filePath = path.join(__dirname, file.filePath.replace('/uploads', 'uploads'));

        // Deletar arquivo físico
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        // Remover do array
        uploadedFiles.splice(fileIndex, 1);

        // Atualizar arquivo JSON
        fs.writeFileSync('uploads/files.json', JSON.stringify(uploadedFiles, null, 2));

        res.json({
            success: true,
            message: 'Arquivo deletado com sucesso'
        });

    } catch (error) {
        console.error('Erro ao deletar arquivo:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Rota para download de arquivo
app.get('/api/upload/:id/download', (req, res) => {
    try {
        const fileId = parseInt(req.params.id);
        const file = uploadedFiles.find(file => file.id === fileId);

        if (!file) {
            return res.status(404).json({ error: 'Arquivo não encontrado' });
        }

        const filePath = path.join(__dirname, file.filePath.replace('/uploads', 'uploads'));

        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ error: 'Arquivo não encontrado no servidor' });
        }

        res.download(filePath, file.originalName);

    } catch (error) {
        console.error('Erro no download:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Middleware para tratamento de erros
app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ error: 'Arquivo muito grande. Máximo 5MB permitido.' });
        }
    }
    
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
});

// Carregar arquivos salvos ao iniciar o servidor
try {
    if (fs.existsSync('uploads/files.json')) {
        const data = fs.readFileSync('uploads/files.json', 'utf8');
        uploadedFiles = JSON.parse(data);
    }
} catch (error) {
    console.error('Erro ao carregar arquivos salvos:', error);
}

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor de upload rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
    console.log(`Upload endpoint: http://localhost:${PORT}/api/upload`);
});

module.exports = app; 