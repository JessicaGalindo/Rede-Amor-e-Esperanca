//const pontosDeColeta = require('./database/fakedata.js');
const Database = require("./database/db")
const savePontoDeColeta = require("./database/savePontoDeColeta")

module.exports = {
  index(request, response) {
    // / é o mesmo que index.hbs
    return response.render("index");
  },

  //unico ponto de coleta
  async ponto(request, response) {
    const id = request.query.id
    console.log('entrei no ponto async ponto')

    try {
      const db = await Database; 
      const results = await db.all(
        `SELECT * FROM tabelaPontoDeColeta WHERE id = "${id}"`
      )
      const ponto = results[0]

      ponto.images = ponto.images.split(",")
      
      return response.render("ponto", {ponto})
    } catch (error) {
      console.log(error)
      return res.send("Erro no banco de dados!")
    } 

    //return response.render("ponto");
  },

  //todos os pontos de coleta
  //deve colocar o async na frente por causa do await
  async pontosDeColeta(request, response) {
    console.log('entrei no ponto async pontosDeColeta') 
    try {
      const db = await Database; //para acessar o database sem precisar usar o then
      //colocar a variavel pelo banco de dados
      const pontosDeColeta = await db.all(
        "SELECT * FROM tabelaPontoDeColeta"
      )
      
      console.log(pontosDeColeta)
      return response.render("pontos_de_coleta", {pontosDeColeta})
    } catch (error) {
      console.log(error)
      return res.send("Erro no banco de dados!")
    } 

    //return response.render("pontos_de_coleta");
  },

  createPontoDeColeta(request, response) {
    return response.render("create-ponto-de-coleta")
  }
}
