const baseURL = `http://www.omdbapi.com/?`
const apiKey = `apikey=53aa2cd6`
// ff05b1a8 MINE
const queryType = `t=`
let titleQuery = "fight club"
let queryURL = baseURL + apiKey + '&' + queryType

const getMovie = () => {
  $.ajax({
    url: queryURL + titleQuery
  }).then((movieData) => {
    $('.container').html(`
      <h2> ${movieData.Title} </h2>
      <h3> ${movieData.Year} </h3>
      <h4> ${movieData.Rated} <h4>
      <h5> ${movieData.Genre} <h5>
      <p>  ${movieData.Plot} </p>
      `)
      const $img = $('<img>').attr('src', movieData.Poster).attr('alt', movieData.Title)
      $('.container').append($img)
  }, (error) => {
    console.error(error)
  })
}

$(()=> {
  getMovie()

  $('form').on('submit', (event) => {
    event.preventDefault()
    console.log('clicky')
    titleQuery = $('input[type="text"]').val() //value in text input form
    getMovie()
  })
  console.log(queryURL)
})