
initMap();

function initMap() {

    const map = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 10,
            center: shelters.location.coordinates,
        }
    )

    getShelters(map)
}

function getShelters(map) {

    axios
        .get('/localhost/llevame-contigo')
        .then(response => printShelters(response.data, map))
        .catch(err => console.log(err))
}


function printShelters(shelters, map) {

    shelters.forEach(elm => {

        let position = {
            lat: elm.location.coordinates[0],
            lng: elm.location.coordinates[1]
        }

        new google.maps.Marker({ map, position, title: elm.name })
    })
}

