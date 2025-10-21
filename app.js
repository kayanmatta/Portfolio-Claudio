var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Armazenamento em memória para os clientes
var pessoa = {
    nome: "Kayan dos Santos da Matta",
    github: "kayanmatta",
    linkedin: "kayanmatta",
    telefone: "(XX) XXXXX-XXXX",
    email: "kayan@example.com",
    endereco: "Rua Exemplo, 123",
    descricao: "Sou desenvolvedor navegando pelas correntes do conhecimento tecnológico. Assim como as marés moldam a costa, acredito que cada desafio e experiência contribui para moldar minhas habilidades como profissional de tecnologia. Atualmente cursando Análise e Desenvolvimento de Sistemas, mergulho constantemente em novas tecnologias e metodologias ágeis."
}
var formacao = [];
var cursos = [];
var projetos = [];
var competencias = [];
var links = [];

// Rota principal que exibe a lista de clientes
app.get('/', function(req, res) {
    res.render('index', { formacao: formacao, cursos: cursos, projetos: projetos, competencias: competencias, pessoa: pessoa, links: links });
});

// Rota que recebe os dados do novo cliente e o adiciona à lista
app.post('/adicionar', function(req, res) {
    var opcao = req.body.opcao;
    if (opcao == "pessoa") {
        pessoa = req.body.pessoa;
    } else if (opcao == "formacao") {
        formacao.push(req.body.formacao);
    } else if (opcao == "curso") {
        cursos.push(req.body.curso);
    } else if (opcao == "projeto") {
        projetos.push(req.body.projeto);
    } else if (opcao == "competencia") {
        competencias.push(req.body.competencia);
    } else if (opcao == "link") {
        links.push(req.body.link);
    }
    res.redirect('/');
});


app.post('/excluir', function(req, res) {
    var opcao = req.body.opcao;
    if (opcao == "formacao") {
        formacao.splice(req.body.id, 1);
    } else if (opcao == "curso") {
        cursos.splice(req.body.id, 1);
    } else if (opcao == "projeto") {
        projetos.splice(req.body.id, 1);
    } else if (opcao == "competencia") {
        competencias.splice(req.body.id, 1);
    } else if (opcao == "link") {
        links.splice(req.body.id, 1);
    }
    res.redirect('/');
});

app.listen(3000, function() {
    console.log("Servidor rodando na porta 3000");
});
