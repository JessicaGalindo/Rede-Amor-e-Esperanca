const pontosDeColeta = require('./database/fakedata.js');

module.exports = {
    
    index(request, response) {
        // / é o mesmo que index.hbs
        return response.render('index')
    }, 

    ponto(request, response) {
        return response.render('ponto')
    }, 

    pontosDeColeta(request, response) {
        return response.render('pontos_de_coleta', {pontosDeColeta})
    }, 

    createPontoDeColeta(request, response) {
        return response.render('create-ponto-de-coleta')
    }

}