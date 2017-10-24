document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  initMap()

  const reviewList = document.getElementById('review-list')

  fetch('http://localhost:3000/api/v1/reviews')

    .then(res => res.json())

    .then(json => json.forEach(review => {
       reviewList.appendChild(new Review(review).renderReview())
  })
)



// var marker = new google.maps.Marker({
//    position: myLatLng,
//    map: map,
//    title: 'Hello World!'
//  });
    // function appendReview(review){
    //   const reviewHolder = document.createElement('li')
    //   reviewHolder.innerText = review.name
    //   reviewList.appendChild(reviewHolder)
    // }
});

function initMap() {
  var school = {lat: 40.705439, lng: -74.014002};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: school
  });
}
