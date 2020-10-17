//API LINK
//URL = https://opentdb.com/api.php?amount=50&category=18&type=multiple&encode=url3986

const baseURL =` https://opentdb.com/api.php?amount=50&category=18&type=multiple&encode=url3986 `
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
                console.log(data);
              }
              });