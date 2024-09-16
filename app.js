const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017/TCHOVÊ")
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((erro) => console.error("Erro ao conectar ao MongoDB:", erro));

//LIVROS
const criarLivro = require ('./Livros/criarLivro')
app.post('/', criarLivro)

const listarLivros = require ('./Livros/listarLivros')
app.get('/', listarLivros)

//ALUGUEL
const criarAluguel = require ('./Aluguel/criarAluguel')
app.post('/', criarLivro)

const listarAlugueis = require ('./Aluguel/listarAlugueis')
app.get('/', listarAlugueis)

const atualizarAluguel = require('./Aluguel/atualizarAluguel');
app.put('/', atualizarAluguel);

const {deletarAluguel} = require('./Aluguel/deletarAluguel');
app.delete('/', deletarAluguel);

const esquemaLivro = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    ano: { type: Number, required: true },
    genero: { type: String, required: true },
    });

const Livro = mongoose.model("Livro", esquemaLivro);

const esquemaEstudante = new mongoose.Schema({
    nome: { type: String, required: true },
    matrcula: { type: String, required: true },
    curso: { type: Number, required: true },
    ano: { type: String, required: true },
    });

const Estudante = mongoose.model("Estudante", esquemaEstudante);

const esquemaAluguel = new mongoose.Schema({
    idLivro: { type: String, required: true },
    idEstudante: { type: String, required: true },
    dataAluguel: { type: Number, required: true },
    dataDevolucao: { type: String, required: true },
    });

const Aluguel = mongoose.model("Aluguel", esquemaAluguel);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});