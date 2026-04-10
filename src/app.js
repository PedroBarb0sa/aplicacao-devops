const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'views')));

// Dados dos integrantes do grupo
const data = {
    integrantes: [
        { nome: 'Pedro Barbosa' },
        { nome: 'Leandro Nivaldo' }
    ]
};

// Endpoint raiz - serve o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'), { root: __dirname });
});

// Endpoint para retornar integrantes em JSON
app.get('/integrantes', (req, res) => {
    res.json(data);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
    console.log(`📄 Acesse http://localhost:${PORT}/ para ver a página inicial`);
    console.log(`👥 Acesse http://localhost:${PORT}/integrantes para ver os integrantes em JSON`);
});
