
class App{

  attachEventListeners(){
    const nameInput = document.getElementById('name-value').value
    const drinkInput = document.getElementById('drink-value').value
    const priceInput = document.getElementById('price-value').value
    const ratingInput = document.getElementById('rating-value').value
    const addressInput = document.getElementById('address-value').value
    const submitInputs = document.getElementById('submit-review')


    // document.addEventListener('click', function(event){
    //   event.preventDefault()
    //   let target = event.target
    //
    //   if (target.className === 'edit-review-button'){
    //     console.log(target.id)
    //
    //     const reviewData = {
    //       name: document.getElementById('name-value').value,
    //       drink_ordered: document.getElementById('drink-value').value,
    //       price: document.getElementById('price-value').value,
    //       rating: document.getElementById('rating-value').value,
    //       address: document.getElementById('address-value').value
    //     }
    //
    //     fetch(`http://localhost:3000/api/v1/reviews/${target.id}`,{
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //       method: "PATCH",
    //       body: JSON.stringify(reviewData)
    //     })
    //     .then(json => console.log(json))
    //   })
    //
    //   }
    // })

    submitInputs.addEventListener('click',
     function(event){
      event.preventDefault()
      const reviewData = {
        name: document.getElementById('name-value').value,
        drink_ordered: document.getElementById('drink-value').value,
        price: document.getElementById('price-value').value,
        rating: document.getElementById('rating-value').value,
        address: document.getElementById('address-value').value
      }
      fetch('http://localhost:3000/api/v1/reviews',{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(reviewData)
      })
      .then(json => console.log(json))
    })
  }
}
