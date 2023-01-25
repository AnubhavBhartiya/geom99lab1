// Initialize the map
let map;

function initMap() {
    const myLatLng = { lat: 22.758, lng: 75.921 };
    map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 5,
    mapTypeId: 'satellite'
  });

  // Define the Line path as an array of LatLng coordinates

  const line = new google.maps.Polyline({
      path: [
    {lat: 19.091, lng: 72.893, name: 'Mumbai'},
    {lat: 22.920, lng: 75.854, name: 'Indore'},
    {lat: 28.551, lng: 77.390, name: 'Noida'},
    {lat: 28.407, lng: 77.325, name: 'Faridabad'},
    {lat: 44.356, lng: -78.736, name: 'Lindsay'}
],
icons: [
      {
        icon: lineSymbol,
        offset: "100%",
      },
    ],
    map: map,
  });
}

window.initMap = initMap;

//   // Create the flight path on the map
//   // Sources : https://developers.google.com/maps/documentation/javascript/examples/polyline-simple
//   var flightPath = new google.maps.Polyline({
//     path: flightPlanCoordinates,
//     geodesic: true,
//     strokeColor: 'blue',
//     strokeOpacity: 1.0,
//     strokeWeight: 2
//   });
//   flightPath.setMap(map);

    
//   // Create a marker for the flight
//   // Sources : https://developers.google.com/maps/documentation/javascript/examples/icon-simple
//   var flightMarker = new google.maps.Marker({
//     position: flightPlanCoordinates[0],
//     map: map,
//     icon: 'https://i.ibb.co/r0rtVBj/airplane.png'
//   });
  
//   // Define the animation for the marker
//   // Sources : https://developers.google.com/maps/documentation/javascript/examples/marker-animations-iteration

//     var flightPlanIndex = 0;
//     function animateFlight() {
//     var currentCoordinate = flightPlanCoordinates[flightPlanIndex];
//     flightMarker.setPosition(currentCoordinate);
//     map.setCenter(currentCoordinate);
//     map.setZoom(8);
//     map.setTilt(45);
//     setTimeout(function(){
//         map.setZoom(4);
//         map.setTilt(0);
//         flightPlanIndex = (flightPlanIndex + 1) % flightPlanCoordinates.length;
//     },3000);
//     }

//     var intervalId = setInterval(animateFlight, 6000);

//   // Add airport markers
//   // Sources : https://developers.google.com/maps/documentation/javascript/adding-a-google-map
//   // https://developers.google.com/maps/documentation/javascript/custom-markers

  
//   flightPlanCoordinates.forEach(function(coordinate) {
//     var airportMarker = new google.maps.Marker({
//       position: coordinate,
//       map: map,
//       title: coordinate.name,
//       animation: google.maps.Animation.DROP,
//       icon: 'https://i.ibb.co/c39PGjG/airport.png'
//     });
  
//     // Add popup text box to airport markers
//     // https://developers.google.com/maps/documentation/javascript/examples/overlay-popup

//     var airportInfoWindow = new google.maps.InfoWindow({
//       content: coordinate.name
//     });
  
//     airportMarker.addListener('click', function() {
//       airportInfoWindow.open(map, airportMarker);
//     });
//   });
// }