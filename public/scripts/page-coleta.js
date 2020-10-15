//create map 
const map = L.map('mapid').setView([-22.1254599,-51.390325], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

//create icon
const icon =L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupArchor: [170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240, 
    minHeight: 240
}).setContent('Lar das meninas <a href="coleta.html?id=1" class="choose-coleta"> <img src="./public/images/arrow-white.svg" > </a> ')

L.marker([-22.1254599,-51.390325], {icon}).addTo(map)
    .bindPopup(popup)
