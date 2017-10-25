
class Review{


  constructor(data){
    this.id = data.id
    this.name = data.name
    this.drink_ordered = data.drink_ordered
    this.price = data.price
    this.rating = data.rating
    this.address = data.address

  }

  renderReview(){
    const reviewHolder = document.createElement('div')
    reviewHolder.setAttribute("class","review-holder")
    reviewHolder.innerHTML = `<h3 class="name-tag">${this.name}</h3><p>Drink Ordered: ${this.drink_ordered}</p><p>Price: ${this.price}</p><p>Rating: ${this.rating}</p><p>Address: ${this.address}</p>`

    const allReviewsButton = document.getElementById('hide-and-show-all-reviews')
    allReviewsButton.addEventListener('click', (e) => {
      e.preventDefault()
      if(reviewHolder.style.visibility === "visible"){
        reviewHolder.style.visibility = "hidden"
      } else {
        reviewHolder.style.visibility = "visible"
      }
    })


    const reviewEditButton = document.createElement('BUTTON')
    reviewEditButton.setAttribute("class", "edit-review-button")
    reviewEditButton.id = this.id
    reviewEditButton.innerText = "Edit"

    const reviewEditHolder = document.createElement('div')
    reviewEditHolder.setAttribute("id","review-edit-holder")

    // const reviewMarkup = document.createElement('div')
    // reviewMarkup.appendChild(reviewHolder)
    reviewHolder.appendChild(reviewEditButton)
    reviewHolder.appendChild(reviewEditHolder)
    Review.all.push(this)

    return reviewHolder

  }

  static findByReviewsId(id) {
    return this.all.find(review => parseInt(review.id) === id)
  }
}

Review.all = []
