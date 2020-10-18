//importando sqlite
const Database = require('sqlite-async');

function execute(db) {
    //cria a tabela e retorna no then acima
    return db.exec(`
        CREATE TABLE IF NOT EXISTS tabelaPontoDeColeta(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT, 
            lng TEXT, 
            name TEXT, 
            description TEXT, 
            contato TEXT, 
            images TEXT, 
            instructions TEXT, 
            opening_hours TEXT, 
            open_on_weekends TEXT
        );
    `) //a crase permite fazer quebra de linha e passar variaveis - template literals/strings
}

//abre o diretorio local e coloca um arquivo chamado database.sqlite
//nao pode fazer nada sem ter criado o db, por isso utiliza a função then
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)
//o module.exports executa o comando acima e joga para 'fora' 