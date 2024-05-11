let map = L.map('ITmap').setView([51.23009, 4.41616], 17)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let ITmarker = L.marker([51.23009, 4.41616]).addTo(map);
ITmarker.bindPopup("<b>Kantoor NetworkIT</b><br>Ellermanstraat 33").openPopup();