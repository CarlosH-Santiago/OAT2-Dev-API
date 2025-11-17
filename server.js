// importa o modulo Express
const express = require('express');


// Cria uma intancia do aplicativo Express
const app = express();

// Define a porta que o servidor vai escutar
const port = 3000;

// Configura o servidor para servir arquivos estáticos da pasta 'public'
// (Isso faz o index.html abrir automaticamente na raiz)
app.use(express.static('public'));


// Inicia o servidor e o coloca para escutar na porta definida
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
