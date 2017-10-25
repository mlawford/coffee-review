document.addEventListener("DOMContentLoaded", function(event) {
  const reviewList = document.getElementById('review-list')
  reviewList.style.visibility = 'hidden'
  const appController = new App()
  appController.attachEventListeners()

  var geocoder = new google.maps.Geocoder();
  var infowindow = new google.maps.InfoWindow();
  var school = {lat: 40.705439, lng: -74.014002};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: school
  });

  fetch('http://localhost:3000/api/v1/reviews')
  .then(res => res.json())
  .then(json => json.forEach(review => {
    console.log('review', review);
    reviewList.appendChild(new Review(review).renderReview())

    geocoder.geocode( { 'address': review.address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        results.forEach((result, i) => {
          const lat = result.geometry.location.lat();
          const lng = result.geometry.location.lng();
          console.log({lat, lng});
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            map: map,
          });

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(`
                <h2>${review.name}</h2>
                <div>Rating: ${review.rating} stars</div>
                <div>What Did You Order?: ${review.drink_ordered}</div>
                <div>How Much Was It?: $${review.price}</div>
                `);
              infowindow.open(map, marker);
            }
          })(marker, i));
        })
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }))
  .catch(e => console.log(e))

});
