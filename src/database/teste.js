//pega o retorno module.exports da classe db.js
const Database = require("./db.js");
const savePontoDeColeta = require("./savePontoDeColeta.js");

//function(db) é igual a async db, sem () pq só tem um parametro
Database.then(async (db) => {
  //insere no banco de dados
  await savePontoDeColeta(db, {
    lat: "-22.1254599",
    lng: "-51.350325",
    name: "Lar de Teste2",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    contato: "55 55555-5555",
    images: [
        "https://images.unsplash.com/photo-1576715159532-32eb4490f140?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

        "https://images.unsplash.com/photo-1567701554261-fcc4bda64847?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha se sentir a vontade e traga paciencia",
    opening_hours: "Das 8h as 17h.",
    open_on_weekends: "0"
  })

  //consulta todos os dados da tabela
  const selectedPontoDeColeta = await db.all("SELECT * FROM tabelaPontoDeColeta")
  console.log(selectedPontoDeColeta)

  //consultar somente 1 dado, pelo id
  const pontoDeColeta = await db.all(
    'SELECT * FROM tabelaPontoDeColeta WHERE id = "2"'
  );
  console.log(pontoDeColeta);
});
