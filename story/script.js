let map;

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 22.920, lng: 75.854,  },
      mapTypeId: "hybrid",
    });

    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let labelIndex = 0;
    
    const flightPlanCoordinates = [
      {lat: 19.091, lng: 72.893, name: 'Mumbai'},
      {lat: 22.920, lng: 75.854, name: 'Indore'},
      {lat: 28.551, lng: 77.390, name: 'Noida'},
      {lat: 28.407, lng: 77.325, name: 'Faridabad'},
      {lat: 44.356, lng: -78.736, name: 'Lindsay'}
    ];
    const flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#33FF83",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
  
    flightPath.setMap(map);

    const tourStops = [
      {lat: 19.091, lng: 72.893, name: 'Mumbai'},
      {lat: 22.920, lng: 75.854, name: 'Indore'},
      {lat: 28.551, lng: 77.390, name: 'Noida'},
      {lat: 28.407, lng: 77.325, name: 'Faridabad'},
      {lat: 44.356, lng: -78.736, name: 'Lindsay'}]
      
      // Create an info window to share between markers.
      const infoWindow = new google.maps.InfoWindow();
    
      // Create the markers.
      var StopMarkers = new google.maps.Marker({
      position: tourStops[0],
      map: map,
      icon: "https://i.ibb.co/WxQFxD6/pin-house-logo-icon-design-vector-22734497-removebg-preview.png"
      });
            // Create the markers.
            var StopMarkers
 = new google.maps.Marker({
                  position: {lat: 22.920, lng: 75.854, name: 'Indore'},
                  map: map,
                  icon: "https://i.ibb.co/WxQFxD6/pin-house-logo-icon-design-vector-22734497-removebg-preview.png"
                  });
            // Create the markers.
            var StopMarkers
 = new google.maps.Marker({
                  position: {lat: 28.551, lng: 77.390, name: 'Noida'},
                  map: map,
                  icon: "https://i.ibb.co/WxQFxD6/pin-house-logo-icon-design-vector-22734497-removebg-preview.png"
                  });
            // Create the markers.
            var StopMarkers
= new google.maps.Marker({
                  position: {lat: 28.407, lng: 77.325, name: 'Faridabad'},
                  map: map,
                  icon: "https://i.ibb.co/WxQFxD6/pin-house-logo-icon-design-vector-22734497-removebg-preview.png"
                  });
            // Create the markers.
            var StopMarkers
= new google.maps.Marker({
                  position: {lat: 44.356, lng: -78.736, name: 'Lindsay'},
                  map: map,
                  icon: "https://i.ibb.co/WxQFxD6/pin-house-logo-icon-design-vector-22734497-removebg-preview.png"
                  });
  
        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", () => {
          infoWindow.close();
          infoWindow.setContent(marker.getTitle());
          infoWindow.open(marker.getMap(), marker);
        });
      }


window.initMap = initMap;

