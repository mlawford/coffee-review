
class App{

  attachEventListeners(){
    const divs = Array.from(document.getElementsByClassName("review-holder"))
    divs.forEach(div => console.log(div))
  }
    // {
    //     div.addEventListener('click',function(ev){
    //       ev.preventDefault();
    //       let target = ev.target
    //
    //       if(target.children.length === 5){
    //         console.log(target.lastChild.innerText)
    //       } else {
    //         console.log("no")
    //       }
    //     })
    //  )}

}



//   var school = new google.maps.LatLng({lat: 40.705439, lng: -74.014002});
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 15,
//     center: school
//   });
//   console.log("target",target.parentNode.lastChild.innerText)
//   const address = target.parentNode.lastChild.innerText
//
//   var geocoder = new google.maps.Geocoder();
//   geocoder.geocode( { 'address': address}, function(results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//       var latitude = results[0].geometry.location.lat();
//       var longitude = results[0].geometry.location.lng();
//       const latLng = {lat: latitude, lng: longitude};
//       const school = {lat: 40.705439, lng: -74.014002};
//
//       console.log(latitude)
//       console.log(longitude)
//       var marker = new google.maps.Marker({
//         title: "YO",
//         position: new google.maps.LatLng(latitude, longitude),
//         visible: true,
//
//       });
//       marker.setMap(map)
//     }
//     console.log(marker.position)
//   }
// )
//
// if(ev.target.parentNode){
//   console.log("target", target)
// } else {
//   console.log("no")
// }
// const address = ev.target.address
//
// var geocoder = new google.maps.Geocoder();
// geocoder.geocode( { 'address': address}, function(results, status) {
//   if (status == google.maps.GeocoderStatus.OK) {
//     var latitude = results[0].geometry.location.lat();
//     var longitude = results[0].geometry.location.lng();
//     const latLng = {lat: latitude, lng: longitude};
//     const school = {lat: 40.705439, lng: -74.014002};
//
//     console.log(latitude)
//     console.log(longitude)
//     var marker = new google.maps.Marker({
//       title: "YO",
//       position: new google.maps.LatLng(latitude, longitude),
//       visible: true,
//       map: map
//     });
//
//     console.log(marker.position)
//   }
