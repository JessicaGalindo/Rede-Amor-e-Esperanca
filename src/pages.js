//const pontosDeColeta = require('./database/fakedata.js');
const Database = require("./database/db");
const savePontoDeColeta = require("./database/savePontoDeColeta");

module.exports = {
  index(request, response) {
    // / é o mesmo que index.hbs
    return response.render("index");
  },

  //unico ponto de coleta
  async ponto(request, response) {
    const id = request.query.id;

    try {
      const db = await Database;
      const results = await db.all(
        `SELECT * FROM tabelaPontoDeColeta WHERE id = "${id}"`
      );
      const ponto = results[0];

      ponto.images = ponto.images.split(","); //array com as imagens separadas por ,
      ponto.firstImage = ponto.images[0]; //adiciona a primeira imagem

      //trocar por if ternario
      if (ponto.open_on_weekends == "0") {
        ponto.open_on_weekends = false;
      } else {
        ponto.open_on_weekends = true;
      }

      return response.render("ponto", { ponto }); //nao precisa passar ponto[0] por causa da variavel results
    } catch (error) {
      console.log(error);
      return response.send("Erro no banco de dados!");
    }

    //return response.render("ponto");
  },

  //todos os pontos de coleta
  //deve colocar o async na frente por causa do await
  async pontosDeColeta(request, response) {
    try {
      const db = await Database; //para acessar o database sem precisar usar o then
      //colocar a variavel pelo banco de dados
      const pontosDeColeta = await db.all("SELECT * FROM tabelaPontoDeColeta");

      return response.render("pontos_de_coleta", { pontosDeColeta });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }

    //return response.render("pontos_de_coleta");
  },

  createPontoDeColeta(request, response) {
    return response.render("create-ponto-de-coleta");
  },

  async savePontoDeColeta(request, response) {
    const fields = request.body;

    //verifica se todos os campos estão preenchidos
    //o fields é um array, onde cada posição é um dado do formulario
    if(Object.values(fields).includes('')){
      return response.send('Todos os campos devem ser preenchidos.')
    }
    
    try{
      //salva um ponto de coleta
      const db = await Database
      await savePontoDeColeta(db, {
        lat: fields.lat, 
        lng: fields.lng, 
        name: fields.name, 
        description: fields.description, 
        contato: fields.contato, 
        images: fields.images.toString(), 
        instructions: fields.instructions, 
        opening_hours: fields.opening_hours, 
        open_on_weekends: fields.open_on_weekends
      })

      //redirecionamento
      return response.redirect('/pontos_de_coleta')
    } catch(error){
      console.log(error)
      return response.send('Erro no banco de dados')
    }
  } 
}
