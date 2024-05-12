let map = L.map('verkeersmap').setView([41.394032932785684, 2.163192153914355], 18)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let verkeersmarker = L.marker([41.394032932785684, 2.163192153914355]).addTo(map);
verkeersmarker.bindPopup("<b>Inkomend verkeer</b>").openPopup();