// Определяем переменную map
window.$ = window.jQuery = require('jquery');
var map;

// Функция initMap которая отрисует карту на странице
function initMap() {

  // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
  map = new google.maps.Map(document.getElementById('map'), {
    // При создании объекта карты необходимо указать его свойства
    // center - определяем точку на которой карта будет центрироваться
    center: {lat: 47.237117, lng: 39.594006},
    // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
    zoom: 13,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: false,
    disableDefaultUI: true

  });
  // Создаем маркер на карте
  var marker = new google.maps.Marker({

    // Определяем позицию маркера
    position: {lat:  47.237117, lng: 39.594006},

    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
    map: map,

    // Пишем название маркера - появится если навести на него курсор и немного подождать
    title: 'Порошковая окраска'
  });

  console.log('map inited');
}
$(document).ready(function () {
  initMap();
});
