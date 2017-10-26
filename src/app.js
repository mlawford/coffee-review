
class App{

  attachEventListeners(){
    const nameInput = document.getElementById('name-value').value
    const drinkInput = document.getElementById('drink-value').value
    const priceInput = document.getElementById('price-value').value
    const ratingInput = document.getElementById('rating-value').value
    const addressInput = document.getElementById('address-value').value
    const submitInputs = document.getElementById('submit-review')


    document.addEventListener('click', function(event){
      event.preventDefault()
      let target = event.target

      if (target.className === 'button2'){
        let targetId = parseInt(target.id)
        let findReview = Review.findByReviewsId(targetId)

        const editForm = document.createElement("form")
        const editNameInput = document.createElement("input")
        editNameInput.setAttribute('id', 'edit-name-input')
        editNameInput.setAttribute('value', `${findReview.name}`)
        const editDrinkInput = document.createElement("input")
        editDrinkInput.setAttribute('id', 'edit-drink-input')
        editDrinkInput.setAttribute('value', `${findReview.drink_ordered}`)
        const editPriceInput = document.createElement("input")
        editPriceInput.setAttribute('id', 'edit-price-input')
        editPriceInput.setAttribute('value', `${findReview.price}`)
        const editRatingInput = document.createElement("input")
        editRatingInput.setAttribute('id', 'edit-rating-input')
        editRatingInput.setAttribute('value', `${findReview.rating}`)
        const editAddressInput = document.createElement("input")
        editAddressInput.setAttribute('id', 'edit-address-input')
        editAddressInput.setAttribute('value', `${findReview.address}`)
        const editSubmit = document.createElement("button")
        editSubmit.setAttribute("type", "submit")
        editSubmit.setAttribute("id", "edit-submit")
        editSubmit.innerText = "Edit"

        editForm.appendChild(editNameInput)
        editForm.appendChild(editDrinkInput)
        editForm.appendChild(editPriceInput)
        editForm.appendChild(editRatingInput)
        editForm.appendChild(editAddressInput)
        editForm.appendChild(editSubmit)
        const editFormHolder = target.parentNode.lastChild

        editFormHolder.appendChild(editForm)


        const editSubmitButton = document.getElementById('edit-submit')
        editSubmitButton.addEventListener('click', (e) => {
          e.preventDefault()
          const editreviewData = {
            name: document.getElementById('edit-name-input').value,
            drink_ordered: document.getElementById('edit-drink-input').value,
            price: document.getElementById('edit-price-input').value,
            rating: document.getElementById('edit-rating-input').value,
            address: document.getElementById('edit-address-input').value
          }

          fetch(`http://localhost:3000/api/v1/reviews/${targetId}`,{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(editreviewData)
          })
          .then(json => console.log(json))
        })
      }

    })

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

      document.getElementById('name-value').value = ""
      document.getElementById('drink-value').value = ""
      document.getElementById('price-value').value = ""
      document.getElementById('rating-value').value = ""
      document.getElementById('address-value').value = ""

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
