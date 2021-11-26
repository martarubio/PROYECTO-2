
initMap();

function initMap() {

    const map = new google.maps.Map(
        //1. este id pertenece al div del html
        document.querySelector('#map'),
        {
            zoom: 10,
            center: {
                //2 este centro es unu obj lat, lng
                //todo: poner centro del usuario
                lat: 40.41290473938333,
                lng: - 3.7035347514879446,
            },
        }
    )

    getShelters(map)
}

function getShelters(map) {
    //3. como sacamos el valor de nuestro input escondido en el html
    const idInput = document.querySelector("#id-input")
    const id = idInput.value
    console.log(id)

    //4. cual es el endpoint que responde con res.json a este axios
    axios
        .get('/shelters/api/' + id)
        .then(response => {

            console.log(response.data.allShelters)
            printShelters(response.data.allShelters, map)
        })
        .catch(err => console.log(err))
}


function printShelters(shelter, map) {

    //5. como recibe esta funcione el shelter para hacer el marker
    let position = {
        lat: shelter.location.coordinates[0],
        lng: shelter.location.coordinates[1]
    }

    new google.maps.Marker({ map, position, title: shelter.name })

}

