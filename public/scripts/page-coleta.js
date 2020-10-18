//create map 
const map = L.map('mapid').setView([-22.1254599,-51.390325], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

//create icon
const icon =L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupArchor: [170, 2]
})

function addMarker({id, name, lat, lng}) { //desestrutura o objeto 'ponto'. Ao inves de fazer ponto.id, faz {} e chama id

    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240, 
        minHeight: 240
    }).setContent(`${name} <a href="/ponto?id=${id}"> <img src="/images/arrow-white.svg"> </a>`)
    //a `` é chamada de template string ou template literal
    
    L.marker([lat,lng], {icon})
    .addTo(map)
    .bindPopup(popup)
}

const pontosSpan = document.querySelectorAll('.pontosDeColeta span')
console.log(pontosSpan)
console.log("passei no querySelectorAll")

pontosSpan.forEach(span => {
    const pontoDeColeta = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    console.log('adicionei ponto')
    addMarker(pontoDeColeta)
})