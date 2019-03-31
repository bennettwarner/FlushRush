/* eslint-env jquery, browser */
$(document).ready(() => {
  $(function () {
    $("#cleanlinessView").rateYo({
      rating: cleanliness,
      readOnly: true
    });
    $("#trafficView").rateYo({
      rating: traffic,
      readOnly: true
    });
    $("#tpQualityView").rateYo({
      rating: tpQuality,
      readOnly: true
    });
  });
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition);
    } else { 
      console.log("Geolocation is not supported by this browser.");
      alert("Geolocation is not supported by this browser.");
    }
  }
  function setPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    $('input[name=lat]').val(lat);
    $('input[name=lon]').val(lon);
    latitude = lat;
    longitude = lon;
    var request = new XMLHttpRequest()
  
    request.open('GET', 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+$('input[name=lat]').val()+','+$('input[name=lon]').val()+'&key=AIzaSyAumXpydW7Mo9r5QMTUqdWkPXcLNysTZyg', true)
    request.onload = function() {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      var address = ''
      if (request.status >= 200 && request.status < 400) {
        for (var i=0; i< data.results[0].address_components.length; i++ ){
          address = address + ' ' + data.results[0].address_components[i].short_name;
          if (i == data.results[0].address_components.length-1){
            address = $.trim(address);
            $('#address').val(address)
            console.log(address);
          }
        }
      } else {
        console.log('error')
      }
    }
    request.send()
  }
  getLocation();
 
  function distance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

});
