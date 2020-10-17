//API LINK
//URL = https://opentdb.com/api.php?amount=50&category=18&type=multiple&encode=url3986


$(document).ready(function(){ 

function shuffleDeck() {
  const baseURL =` https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1 ` //shuffle cards
const apiKey = ``  
let currentQuestion=0

const queryType = `t=`
let questionQuery = "trivia_categories"


let queryURL = baseURL + apiKey + '&' + queryType



      jQuery.ajax({
          url:baseURL,
          dataType: 'text',
          type: "GET",
              success: function(data) {
                let dataObject = {}
                obj = JSON.parse(data);
                console.log(data);
              }
              })


            }
            shuffleDeck()








            })