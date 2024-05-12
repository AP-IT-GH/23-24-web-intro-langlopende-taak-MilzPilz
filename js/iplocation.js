function getGeolocation() {
    let ip = document.getElementById("ipInput").value;
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=f2f82ed13ecf4eaeb5e5486735aa23f5&fields=continent_name,country_name,state_prov,city,zipcode,connection_type,time_zone&ip=${ip}`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response.status);
            }
        })
        .then(data => {
            console.log(data);
            let resultTable = document.getElementById("ipLocationResults");
            resultTable.innerHTML = `
                <tr>
                    <td><strong>IP Adres:</strong></td>
                    <td>${data.ip}</td>
                </tr>   
                <tr>
                    <td><strong>Continent:</strong></td>
                    <td>${data.continent_name}</td>
                </tr>
                <tr>
                    <td><strong>Land:</strong></td>
                    <td>${data.country_name}</td>
                </tr>
                <tr>
                    <td><strong>Provincie:</strong></td>
                    <td>${data.state_prov}</td>
                </tr>
                <tr>
                    <td><strong>Stad:</strong></td>
                    <td>${data.city}</td>
                </tr>
                <tr>
                    <td><strong>Postcode:</strong></td>
                    <td>${data.zipcode}</td>
                </tr>
                <tr>
                    <td><strong>Connectie type:</strong></td>
                    <td>${data.connection_type}</td>
                </tr>
                <tr>
                    <td><strong>Tijdzone:</strong></td>
                    <td>${data.time_zone.name}</td>
                </tr>
                <tr>
                    <td><strong>Tijdstip:</strong></td>
                    <td>${data.time_zone.current_time}</td>
                </tr>
            `;
        })
        .catch(error => {
            console.error("Error with message: " + error)
        });
}


