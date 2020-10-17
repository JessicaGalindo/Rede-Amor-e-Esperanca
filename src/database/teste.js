//pega o retorno module.exports da classe db.js 
const Database = require('./db.js');


//function(db) é igual a async db, sem () pq só tem um parametro
Database.then(async db => {
    //insere dados na tabela
    //await permite que nao coloque then no final, pois ele espera a execução e ja vai para o proximo comando
    /* await db.run(`
        INSERT INTO tabelaPontoDeColeta (
            lat, 
            lng, 
            name, 
            about,
            contato, 
            images, 
            instructions, 
            opening_hours, 
            open_on_weekends
        ) VALUES (
            '-22.1254599',
            '-51.390325',
            "Lar das meninas",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            '99 99999-9999',
            "https://images.unsplash.com/photo-1576715159532-32eb4490f140?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha se sentir a vontade e traga paciencia",
            "Das 8h as 18h.",
            '1'
        );

        INSERT INTO tabelaPontoDeColeta (
            lat, 
            lng, 
            name, 
            about,
            contato, 
            images, 
            instructions, 
            opening_hours, 
            open_on_weekends
        ) VALUES (
            '-22.1254599',
            '-51.380325',
            "Lar dos meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            '88 88888-8888',
            "https://images.unsplash.com/photo-1576715159532-32eb4490f140?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha se sentir a vontade e traga paciencia",
            "Das 8h as 18h.",
            '0'
        );
    `) */

    //consulta dados na tabela
    //const selectedPontoDeColeta = await db.all("SELECT * FROM tabelaPontoDeColeta")
    //console.log(selectedPontoDeColeta)

    //consultar somente 1 dado, pelo id
    const pontoDeColeta = await db.all('SELECT * FROM tabelaPontoDeColeta WHERE id = "2"')
    console.log(pontoDeColeta)
})