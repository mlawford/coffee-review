class Review{


  constructor(data){
    this.id = data.id
    this.name = data.name
    this.drink_ordered = data.drink_ordered
    this.price = data.price
    this.rating = data.rating
    this.address = data.address
    Review.all.push(this)

  }

  renderReview(){

    const reviewHolder = document.createElement('div')
    reviewHolder.setAttribute("class","review-holder")
    reviewHolder.innerHTML = `<h3 class="name-tag">${this.name}</h3><p>${this.drink_ordered}</p><p>${this.price}</p><p>${this.rating}</p><p>${this.address}</p>`

    const reviewEditButton = document.createElement('BUTTON')
    reviewEditButton.id = this.id
    reviewEditButton.innerText = "Edit"

    const reviewMarkup = document.createElement('div')
    reviewMarkup.appendChild(reviewHolder)
    reviewMarkup.appendChild(reviewEditButton)
    
    return reviewHolder

  }
}

Review.all = []
