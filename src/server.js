//importar pacotes
const express = require("express");
const path = require("path");
const pages = require('./pages.js')

//iniciando o express
const server = express()
server
  //pasta de arquivos estaticos - cria a rota para o dinamico
  .use(express.static("public"))

  // configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  //rotas da aplicação
  .get("/", pages.index)
  .get('/ponto', pages.ponto)
  .get('/pontos_de_coleta', pages.pontosDeColeta)
  .get('/create-ponto-de-coleta', pages.createPontoDeColeta)

//ligar o servidor
server.listen(5500)
