//create map
const map = L.map("mapid").setView([-22.1254599, -51.390325], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker; //let indica que pode ser alterado a qualquer momento da aplicação

//create and add marker ao clicar
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  //seleciona lat e lgn para enviar no formulario
  document.querySelector("[name=lat").value = lat;
  document.querySelector("[name=lng").value = lng;

  //se o marker ja existe, remove icon
  marker && map.removeLayer(marker);

  //add icon later
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//adicionar o campo de fotos
function addPhotoField() {
  //pega o container de fotos #images
  const container = document.querySelector("#images")

  //pega o container a ser duplicado .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload")

  //clona a ultima imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true); //cloneNode(true) clona tudo que esta na div, false = clona só a div externa

  //verifica se o campo de imagem esta vazio
  const input = newFieldContainer.children[0]

  if (input.value == "") {
    return //nao executa o restante do codigo
  }

  //limpa o campo antes de adicionar ao container de .imagens
  input.value = ""

  //adiciona o clone ao container de imagens
  container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll(".new-upload")

    if(fieldsContainer.length <= 1){ 
        span.parentNode.children[0].value = ""
        return 
    }
    
    //deletar o campo
    span.parentNode.remove();
}

//toggleSelect
function toggleSelect(event){
    //retira a class .active 
    document.querySelectorAll('.button-select button')
    //arrow function com 1 linha para todos os botões
    .forEach((button) => button.classList.remove('active')) 
    /*.forEach(function(button) {
        button.classList.remove('active')
    }) */

    //colocar a class .active no botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualiza o input hidden com o valor selecionado
    const input = document.querySelector('[name="open-on-weekends"]')
    
    //verifica se é sim ou nao

    input.value = button.dataset.value
}
