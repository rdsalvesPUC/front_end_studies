const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
app.use(express.json());

const produtos = [];

// Configurar o Express para servir arquivos estáticos de diferentes diretórios
app.use(express.static(path.join(__dirname, 'src/pages')));
app.use('/styles', express.static(path.join(__dirname, 'public/styles')));
app.use('/scripts', express.static(path.join(__dirname, 'src/scripts')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/pages/index.html'));
});


// criando api rest
const router = express.Router();

router.get("/api/produtos/", (request, response) => {
    // console.log("entrou no api produtos")
    // response.status(200).send("Ola Mundo!!!")
    response.status(200).json(produtos);
});

router.post("/api/produtos", (request, response) => {
    const produto = request.body;
    console.log(produto);
    produto.id = produtos.length + 1;
    produtos.push(produto);
    response.status(201).send(produto)
});

router.delete("/api/produtos/:id", (request, response) => {
    const id = request.params.id;
    // console.log(id);
    const produtoEncontrado = produtos.filter(p => p.id == id)[0];
    produtos.splice(produtoEncontrado, 1);

    response.status(204).send("produto excluido com sucesso");
});

app.use(router);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});