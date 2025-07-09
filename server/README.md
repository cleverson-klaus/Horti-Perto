# Servidor de Upload - HortiPerto

Este é o servidor backend para gerenciar uploads de arquivos do sistema HortiPerto.

## 🚀 Funcionalidades

- ✅ Upload de imagens (JPG, PNG)
- ✅ Validação de tipo e tamanho de arquivo (máx. 5MB)
- ✅ Armazenamento em pasta específica (`/uploads/documentos/`)
- ✅ Geração de nomes únicos para arquivos
- ✅ Listagem de arquivos enviados
- ✅ Download de arquivos
- ✅ Deletar arquivos
- ✅ CORS habilitado para frontend

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## 🔧 Instalação

1. **Navegue para a pasta do servidor:**
   ```bash
   cd server
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor:**
   ```bash
   # Modo produção
   npm start
   
   # Modo desenvolvimento (com auto-reload)
   npm run dev
   ```

## 🌐 Endpoints da API

### POST `/api/upload`
**Upload de arquivo**
- **Content-Type:** `multipart/form-data`
- **Parâmetros:**
  - `file`: Arquivo a ser enviado
  - `type`: Tipo do documento (opcional)
  - `timestamp`: Timestamp do upload (opcional)

**Resposta de sucesso:**
```json
{
  "success": true,
  "message": "Arquivo enviado com sucesso",
  "file": {
    "id": 1234567890,
    "originalName": "documento.jpg",
    "fileName": "file-1234567890-987654321.jpg",
    "filePath": "/uploads/documentos/file-1234567890-987654321.jpg",
    "uploadDate": "2024-01-15T10:30:00.000Z",
    "fileSize": 1024000,
    "type": "delivery_vehicle_doc"
  }
}
```

### GET `/api/upload`
**Listar arquivos**
- **Query params:**
  - `type`: Filtrar por tipo (opcional)

**Resposta:**
```json
{
  "success": true,
  "files": [
    {
      "id": 1234567890,
      "originalName": "documento.jpg",
      "fileName": "file-1234567890-987654321.jpg",
      "filePath": "/uploads/documentos/file-1234567890-987654321.jpg",
      "uploadDate": "2024-01-15T10:30:00.000Z",
      "fileSize": 1024000,
      "type": "delivery_vehicle_doc"
    }
  ]
}
```

### DELETE `/api/upload/:id`
**Deletar arquivo**
- **Parâmetros:**
  - `id`: ID do arquivo

**Resposta:**
```json
{
  "success": true,
  "message": "Arquivo deletado com sucesso"
}
```

### GET `/api/upload/:id/download`
**Download de arquivo**
- **Parâmetros:**
  - `id`: ID do arquivo
- **Resposta:** Arquivo para download

## 📁 Estrutura de Pastas

```
server/
├── upload-server.js      # Servidor principal
├── package.json          # Dependências
├── README.md            # Este arquivo
└── uploads/             # Pasta criada automaticamente
    ├── documentos/      # Arquivos enviados
    └── files.json       # Metadados dos arquivos
```

## 🔒 Validações

- **Tipos permitidos:** JPG, JPEG, PNG
- **Tamanho máximo:** 5MB
- **Pasta de destino:** `/uploads/documentos/`

## 🛠️ Configuração

### Variáveis de Ambiente
```bash
PORT=3000  # Porta do servidor (padrão: 3000)
```

### Personalizar Configurações
Edite o arquivo `upload-server.js` para modificar:
- Tamanho máximo de arquivo
- Tipos de arquivo permitidos
- Pasta de destino
- Nomenclatura dos arquivos

## 🚨 Tratamento de Erros

O servidor retorna códigos de erro apropriados:
- `400`: Arquivo inválido ou muito grande
- `404`: Arquivo não encontrado
- `500`: Erro interno do servidor

## 🔄 Integração com Frontend

Para integrar com o frontend, atualize a URL no arquivo `js/hortiperto-main.js`:

```javascript
// Substitua esta linha:
const response = await fetch('/api/upload', {

// Por esta (ajuste a URL conforme necessário):
const response = await fetch('http://localhost:3000/api/upload', {
```

## 📝 Notas Importantes

1. **Em produção:** Use um banco de dados real em vez do arquivo JSON
2. **Segurança:** Implemente autenticação e autorização
3. **Backup:** Configure backup automático dos arquivos
4. **Monitoramento:** Adicione logs e monitoramento
5. **CDN:** Considere usar um CDN para arquivos estáticos

## 🐛 Solução de Problemas

### Erro de CORS
Se houver problemas de CORS, verifique se o middleware está configurado corretamente.

### Erro de Permissão
Certifique-se de que a pasta `uploads/` tem permissões de escrita.

### Arquivo não encontrado
Verifique se o arquivo existe na pasta correta e se o caminho está correto.

## 📞 Suporte

Para dúvidas ou problemas, consulte a documentação ou entre em contato com a equipe de desenvolvimento. 