const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map 
const map = L.map('mapid', options).setView([-22.1254599,-51.390325], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

//create icon
const icon =L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupArchor: [170, 2]
})

L.marker([-22.1254599,-51.390325], {icon}).addTo(map)

function selectImage(event) {
    const button = event.currentTarget

    //remove todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass) //() => {}) arrow function

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //seleciona a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".ponto-details > img")

    //atualiza o container de imagem (imagem grande)
    imageContainer.src = image.src

    //adiciona a classe .active para o botão clicado
    button.classList.add("active")
}