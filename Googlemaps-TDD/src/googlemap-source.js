 function drawMap() {
          var storeLocationOrig = new google.maps.LatLng(51.5011619,-0.1423084),
                  storeLocationNew = new google.maps.LatLng(51.5055338,-0.0753505);

          var mapOptions = {
              'center' : new google.maps.LatLng(51.507322, -0.102185),
              'zoom' : 12,
              'mapTypeId' : google.maps.MapTypeId.ROADMAP,
              'draggable' : true
          };

          map = new google.maps.Map(document.getElementById("my-map"), mapOptions);

          var markerOrig = new google.maps.Marker({
                      position: storeLocationOrig,
                      map: map,
                      title: 'Buckingham Palace'
                  }),
                  markerNew = new google.maps.Marker({
                      position: storeLocationNew,
                      map: map,
                      title: 'The London Tower Bridge'
                  });

          var popupContentOrig = 'Buckingham Palace<br />';
          popupContentOrig += 'Home to the British Queen <br />';
          popupContentOrig += 'London, UK';

          var popupContentNew = 'The Tower Bridge<br />';
          popupContentNew += 'Iconic Victorian<br />';
           popupContentNew += 'London, UK';

          var infowindowOrig = new google.maps.InfoWindow({
                      content: popupContentOrig,
                      maxWidth: 270
                  }),
                  infowindowNew = new google.maps.InfoWindow({
                      content: popupContentNew,
                      maxWidth: 270
                  });

          google.maps.event.addListener(markerOrig, 'click', function() {
              infowindowOrig.open(map, markerOrig);
          });

          google.maps.event.addListener(markerNew, 'click', function() {
              infowindowNew.open(map, markerNew);
          });
      }