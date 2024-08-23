const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configurar o Express para servir arquivos estáticos de diferentes diretórios
app.use(express.static(path.join(__dirname, 'src/pages')));
app.use('/styles', express.static(path.join(__dirname, 'public/styles')));
app.use('/scripts', express.static(path.join(__dirname, 'src/scripts')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/pages/index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
