//importar pacotes
const express = require("express");
const path = require("path");

//iniciando o express
const server = express()
server
  //pasta de arquivos estaticos - cria a rota para o dinamico
  .use(express.static("public"))

  // configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  //criar um caminho
  .get("/", (request, response) => {
    // / é o mesmo que index.html
    return response.render('index')
  })

//ligar o servidor
server.listen(5500)
