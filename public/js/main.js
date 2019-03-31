/* eslint-env jquery, browser */
$(document).ready(() => {
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
  }
  getLocation();

});
