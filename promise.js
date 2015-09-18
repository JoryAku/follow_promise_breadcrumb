// var key = AIzaSyC1AkIQ6Jxt3ek4VFda5kA_PpfncuzTcKY
function makeURL(query) {
  LOCATION_URL = "https://maps.googleapis.com/maps/api/geocode/json"
  locationUrl = LOCATION_URL + '?address=' + encodeURIComponent(query) + '&sensor=false'
  return locationUrl
}

$(document).ready(function(){
  $('#geocode').submit(function(event){
      event.preventDefault()
      var query = $("input").val()
      var url = makeURL(query)
      $.get(url)
        .then(lngLat)
        .then(flickrSearch)

    })
  })


function lngLat(data){
  console.log(data)
  data = {
  latitude: data.results[0].geometry.location.lat,
  longitude: data.results[0].geometry.location.lng
  }
  return data
}

function flickrSearch(data) {
  console.log(data.latitude, data.longitude)
  base = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5a9a640806bdd46cde1870bb009ffd5c&lat=' + data.latitude +
  '&lon=' + data.longitude +'&format=json&nojsoncallback=1&api_sig=cc3bd31ea7fb95636423fdd61862071d'
  console.log(base)
  $.get(base)
}






