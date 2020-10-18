//const pontosDeColeta = require('./database/fakedata.js');
const Database = require("./database/db")
const savePontoDeColeta = require("./database/savePontoDeColeta")

module.exports = {
  index(request, response) {
    // / é o mesmo que index.hbs
    return response.render("index");
  },

  ponto(request, response) {
    return response.render("ponto");
  },

  //deve colocar o async na frente por causa do await
  async pontosDeColeta(request, response) {
    try {
      const db = await Database; //para acessar o database sem precisar usar o then
      //colocar a variavel pelo banco de dados
      const pontoDeColeta = await db.all(
        'SELECT * FROM tabelaPontoDeColeta'
      )
      return response.render("pontos_de_coleta", { pontoDeColeta })
    } catch (error) {
      console.log(error)
      return res.send("Erro no banco de dados!")
    }
  },

  createPontoDeColeta(request, response) {
    return response.render("create-ponto-de-coleta")
  }
}
