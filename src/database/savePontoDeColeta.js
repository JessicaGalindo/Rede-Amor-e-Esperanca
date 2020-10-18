function savePontoDeColeta(db, pontoDeColeta){
    //insere dados na tabela
    //await permite que nao coloque then no final, pois ele espera a execução e ja vai para o proximo comando
    return db.run(`
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
            '${pontoDeColeta.lat}',
            '${pontoDeColeta.lng}',
            '${pontoDeColeta.name}',
            '${pontoDeColeta.about}',
            '${pontoDeColeta.contato}',
            '${pontoDeColeta.images}',
            '${pontoDeColeta.instructions}',
            '${pontoDeColeta.opening_hours}',
            '${pontoDeColeta.open_on_weeken}'
        );
    `);
};

module.exports = savePontoDeColeta;