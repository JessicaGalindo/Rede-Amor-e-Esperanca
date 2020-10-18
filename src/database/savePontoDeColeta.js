function savePontoDeColeta(db, pontoDeColeta){ 
    //trocar pontoDeColeta por {lat, lng, name, description, contato, images, instructions, opening_hours, open_on_weekends}

    //{lat, lng, name, description, contato, images, instructions, opening_hours, open_on_weekends}){

    //insere dados na tabela
    //await permite que nao coloque then no final, pois ele espera a execução e ja vai para o proximo comando
    return db.run(`
        INSERT INTO tabelaPontoDeColeta (
            lat, 
            lng, 
            name, 
            description,
            contato, 
            images, 
            instructions, 
            opening_hours, 
            open_on_weekends
        ) VALUES (
            '${pontoDeColeta.lat}',
            '${pontoDeColeta.lng}',
            '${pontoDeColeta.name}',
            '${pontoDeColeta.description}',
            '${pontoDeColeta.contato}',
            '${pontoDeColeta.images}',
            '${pontoDeColeta.instructions}',
            '${pontoDeColeta.opening_hours}',
            '${pontoDeColeta.open_on_weekends}'
        );
    `); //retirar pontoDeColeta no VALUES
};

module.exports = savePontoDeColeta;