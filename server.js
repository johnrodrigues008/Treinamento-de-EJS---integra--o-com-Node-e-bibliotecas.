const express = require('express'); // Chamar o express
const app = express(); // instanciar o express e guardando na variavel app

app.set("view engine", "ejs"); // Vamos falar para o express como ele vai renderizar os arquivos

// criando uma Rota, para poder renderizar o arquivo no retorno da rota 

// 1° Rota 
app.get("/", function(req,res){
      res.render("pages/index");
}); 

// 2° Rota
app.get("/sobre", function(req, res){
      res.render("pages/about");
});

// 3° Rota
app.get("/usuarios", function (req, res) {
      res.render("pages/usuarios", {usuarios: ['Pedro', 'Paulo', 'João', 'newgate']});
});

// Falar em qual porta o express irá escutar para poder renderizar os arquivos
app.listen(4201);
console.log("Servidor rodando na porta http://localhost:4201/");