// // Define GEOcode url
// const url = 'https://maps.googleapis.com/maps/api/geocode/json';
// // define API key
// const apiKey = 'AIzaSyAjWIqfdInsDvWO99opGRXvpMCGnYBIdD8';
// // Initialize variables
// let lat, lng
//
//
// // Optionally the request above could also be done as
// axios.get(url, {
//     params: {
//         address: 'new york NY',
//         key: apiKey
//     }
// })
//     .then(function (response) {
//         console.log(response);
//         let location = response.data.results[0].geometry.location;
//         lat = location.lat;
//         lng = location.lng;
//         console.log(`${lat}, ${lng}`);
//         setMap();
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });
//
// let map;
// function setMap() {
//     console.log("initilaize map")
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: {lat: lat, lng: lng},
//         zoom: 8,
//     });
// }
//
// function initMap(){
//
// }
//




/// // Define GEOcode url
const url = 'https://maps.googleapis.com/maps/api/geocode/json';
// // define API key
const apiKey = 'AIzaSyAjWIqfdInsDvWO99opGRXvpMCGnYBIdD8';

// Optionally the request above could also be done as
axios.get(url, {
    params: {
        address: 'new york NY',
        key: apiKey
    }
})
    .then(function (response) {
        console.log(response);
        let location = response.data.results[0].geometry.location;
        lat = location.lat;
        lng = location.lng;
        console.log(`${lat}, ${lng}`);
        setMap(lat, lng);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        // always executed
    });

// let map;

function setMap(lat, lng) {
    console.log("initilaize map")
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: lat, lng: lng},
        zoom: 8,
    });
}

function initMap() {}