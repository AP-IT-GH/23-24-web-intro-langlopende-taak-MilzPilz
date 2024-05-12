let map = L.map('locatiemap').setView([51.0998978782059, 4.404866911576395], 18)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let locatiemarker = L.marker([51.0998978782059, 4.404866911576395]).addTo(map);
locatiemarker.bindPopup("<b>Apparaat 1</b>").openPopup();