
fetch (imageURL)
  .then (res => res.json())
  .then (showImg)
const showImg = (jsonImg) => {
  const imageCard = document.querySelector("#image_card")
  imageCard.dataset.id = jsonImg.id
  imageCard.innerHTML = `
    <img src="${jsonImg.url}" id="image" data-id="${jsonImg.id}"/>
    <h4 id="name">${jsonImg.name}</h4>
    <span>Likes:
      <span id="likes">${jsonImg.like_count}</span>
    </span>
    <button id="like_button">Like</button>
  `
}

const showImg = (jsonImg) => {
    const imageCard = document.querySelector("#image_card")
    imageCard.dataset.id = jsonImg.id
    imageCard.innerHTML = `
      <img src="${jsonImg.url}" id="image" data-id="${jsonImg.id}"/>
      <h4 id="name">${jsonImg.name}</h4>
      <span>Likes:
        <span id="likes">${jsonImg.like_count}</span>
      </span>
      <button id="like_button">Like</button>
    ` 
    const button = document.querySelector("#like_button")
    button.addEventListener("click", likeButton)
  }

  const likeButton = (event) => {
    id = parseInt(event.target.parentElement.dataset.id)
    let likes = document.querySelector("#likes")
    num = parseInt(likes.innerText)
    num += 1
    likes.innerText = num
    fetch (likeURL, {
      method: "POST",
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify ({
        image_id: id
      })
    })
  }