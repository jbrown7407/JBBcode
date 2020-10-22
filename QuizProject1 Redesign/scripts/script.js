$(() => {


  let nextsound = document.getElementById('audio')
  let completesound = document.getElementById('audio1')
  let endsound = document.getElementById('audio2')
  let startsound = document.getElementById('audio3')
  let landsound1 = document.getElementById('audio4')
  
  function preload () {
    nextsound = loadSound ('JBBcode/QuizProject1/sounds/nextsound.wav')
    completesound = loadSound ('JBBcode/QuizProject1/sounds/completesound.wav')
    endsound = loadSound ('JBBcode/QuizProject1/sounds/endsound.mp3')
    startsound = loadSound ('JBBcode/QuizProject1/sounds/startsound.mp3')
    landsound1 = loadSound ('JBBcode/QuizProject1/sounds/landsound1.wav')
  }

  let clickCount = 1
  let totalCorrect = 0
  let bonus = 0
  let seconds, data, baseURL
  let cl = (value) => console.log(value); // cl("Jquery Active")
  // let bonus = 0 //extra time
  let level = 1
  let questionNumber = 0
  let playerScore = 0
  let $currentScore =0
  let highScore =0
  highScore = localStorage.getItem("highScore", highScore)// "SCORE""?
  let rank = "Noob "
  let questionsCorrect = []
  let doNotRepeat = [51]
  let categoryChoice = 1
  let points = 0
  let $points = points
  let categoryDisplay = document.getElementById('categoryDisplay')
  let $playerScore = $('<playerScore>')
  let $highScore = $('<highScore>')
  let x = -1 //counter for shuffle
  let score = 0
  if (score == 0) {
    localStorage.getItem("highScore", highScore);      
    $highScore.innerHTML = highScore
    
   
  }
      $($playerScore).addClass('score')
    
     
      $($playerScore).css('color', 'white')
      $($playerScore).css('font-size', '48px')
      $($playerScore).html(playerScore)
    
      $($playerScore).hide()

    
  let $mega = document.getElementsByClassName('mega')
  
  $($mega).hide()
  //////
  // TITLE SCREEN LOGIC HERE
  /////// then activate mega.show()   // (below)
  // $($mega).show()

  const $titlescreen = $('<div>')
      $($titlescreen).addClass('h1')
      $('body').prepend($titlescreen)
      $($titlescreen).text("Welcome to Trivia League")
      $($titlescreen).css("font-size", "64px")
      $($titlescreen).css("color", "white")
      $($titlescreen).css("background-color", "green")
      $($titlescreen).css("text-align", "center")
      $($titlescreen).css("justify-content", "center")
const $selectacat = $('<h3>')
      $($selectacat).addClass('h3')
      $($titlescreen).append($selectacat)
      $($selectacat).text("Select a Category:")
      $($selectacat).css("font-size", "36px")
      $($selectacat).css("color", "white")
      $($selectacat).css("background-color", "green")
      $($selectacat).css("text-align", "center")

let $categorydisplay = $('<categoryDisplay>')
$($categorydisplay).text(categoryDisplay)
$($categorydisplay).appendTo('.categories')
 
// cATEGORY SELECTION
  
   categoryChoice=15   // DEFAULT CATEGIRY AUTO-SELECTED. keep or remove?
       baseURL =` https://opentdb.com/api.php?amount=50&category=`+categoryChoice+`&type=multiple ` 
    

      //  const $topArea = $('<topArea>');
       
     $(".nextQuestion").click(function nextQuestion() { //NEXT QUIZ QUESTION
            // if (seconds > 0){
          clickCount++
    
            // completesound.play()
             $('.playerScreen').hide()
             $('.canvas').css('border',"2px solid white")
             $('.canvas').hide() 
              $('.canvas').empty()   //slideDown(450)
             $('.canvas').css('border',"2px solid black")           //STYLING THE QUESTION CANVAS 
             $('.canvas').css('background-color',"lightgreen")       // CHANGE COLOR AT NEW LEVEL?
             $('.canvas').css('color',"black")
             

           $('audio#audio1')[0].play()

             // cl(questionNumber + "old") 
             questionNumber++
            
            // playerScore++
            
             cl("playerScore= "+ playerScore)
               
                   const $bigCanvas = $('<bigCanvas>');
                   const $canvas = $('<canvas>');
                   const $lhead = $('<lhead>').attr('id',questionNumber);
                   const $ul = $('<ul>').attr('id',questionNumber);
                   const $li = $('<li>')
                   const $form = $('<form>')
                   $($form).appendTo($ul)
                
           
              //LOOP redraws question number if player has already had the question
  
                  //////////////////////////////// FISHER-YATES SHUFFLE where I have added a variable X to iterate through
                  function shuffle(array) {
                   var i = array.length,
                       j = 0,
                       temp;
               
                   while (i--) {
               
                       j = Math.floor(Math.random() * (i+1));
               
                       // swap randomly chosen element with current element
                       temp = array[i];
                       array[i] = array[j];
                       array[j] = temp;
               
                   }
               
                   return array;
                
               }
               
               var ranNums = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]);
               x++    // 
               console.log(ranNums)
               shuffledChoice= ranNums[x];
               console.log(ranNums)
                  // console.log(doNotRepeat)
                  console.log("shuffled CHoice"+ shuffledChoice)
               if (ranNums.length > 48) {  /// REFRESH QUESTIONS IF EXHAUSTED
                //  console.log("generate call if maxed")
              }
                   ////////////////////////////////////

             
               console.log(x)
            

                   $('<li>').html(obj.results[x].correct_answer).addClass('correct').appendTo($ul);
 
                   $('<li>').html(obj.results[x].incorrect_answers[0]).addClass('wrongAnswer').appendTo($ul);
                 
                   $('<li>').html(obj.results[x].incorrect_answers[1]).addClass('wrongAnswer').appendTo($ul);
               
                   $('<li>').html(obj.results[x].incorrect_answers[2]).addClass('wrongAnswer').appendTo($ul);
                  
                    doNotRepeat.push(x)


                   $.fn.shuffleChildren = function() {       //SHUFFLE LI CHILDREN https://css-tricks.com/snippets/jquery/shuffle-children/
                     $.each(this.get(), function(index, list) {
                         var $list = $(list);     //list saved as JQUERY object
                         var $find = $list.children();  //select children of list
                 
                         $find.sort(function() {
                             return 0.5 - Math.random();   //randomize sort
                         });
                 
                         $list.empty();                       //empty list
                         $find.appendTo($list);                //re-append
                     });
                 };
                 $($ul).shuffleChildren($li);                // shuffle just li in ul
                   


                       $($ul).click(function select()            // SPAM BLOCKER! 2 count required to select an answer, each new question ups the counter
                          {  
                         //  if (event.target.hasClass('correct'))

                         console.log("clickCount= "+clickCount)
                         if (clickCount >1) {
                         isCorrect()
                         isWrong()
                         clickCount--
                         } else {
                           "click count depleted"
                         }
                     
                          });

                   //  $('<span>').text(obj.results[x].category).addClass('answer').appendTo('body').css('color','white');
                   $('<category>').html(obj.results[x].category + ". Difficulty Level: " +obj.results[x].difficulty+'<br>').appendTo($lhead);

                   points++
                   $('<lhead>').html("Question #" + questionNumber + ". " + obj.results[x].question).attr('id',questionNumber).appendTo($lhead); //QUESTION
                   // $('<modal-open>').html($playerScore)
                   $('.canvas').fadeIn(500)                //FADE BACK IN
                   $('body').append($canvas);
                   $('.canvas').append($lhead);
                   $('.canvas').append($ul);

                   function moreTime(seconds) {
                     seconds=seconds+5// seconds = seconds+5 
                   }            

                   function chooseAnswer() {cl("chooseAnswer")
                   isCorrect()
                   isWrong()                
            }
            
function isCorrect() {cl(" checking isCorrect...")  //placed within NEXT question function due to Scoping issues
if($(event.target).is('.correct'))  {
 cl("verified correct")
 bonus= bonus+6
 $(event.target).css('color', "green")
 totalCorrect++
 updateScore()
 $('audio#audio3')[0].play()

 $('#timer').css('color', "gold")
 $('#timer').text("+5")
 $($playerScore).css('color', "gold")
 questionsCorrect.push(x)
 setTimeout(function(){ nextQuestion(); }, 1100); // AUTO MVOE TO NEXT QUESTION
  //Play "correct" sound
  console.log("correctQuestions" + questionsCorrect)
 }
}

function isWrong() {cl("checking is wrong...")
if($(event.target).is('.wrongAnswer')) {
 cl("verified wrong")
 cl($(this))
 $($ul).css('background-color', "lightred")
 $($bigCanvas).css('background-color', "lightred")
 $(event.target).css('color', "red")
 $(event.target).css('text-decoration', "line-through")
 $('.correct').css('color', "green")
 $('audio#audio4')[0].play()
 setTimeout(function(){ nextQuestion(); }, 800);
 //Play "wrong" sound
 }
}
                      });   //NEXT QUESTION END   


       $('.startGame').hide()  // HIDE START GAME UNTIL CATEGORY IS SELECTED!


function loadAPI(categoryChoice) {
  // call API 
  cl("load API.. CATEGORY: " + categoryChoice)
  baseURL =` https://opentdb.com/api.php?amount=50&category=`+categoryChoice+`&type=multiple ` 
  $('.startGame').show()
  generateCall()
  $('audio#audio2')[0].play()
  $("html, body").animate({ scrollTop: 0 }, "slow");
}

$('#b1').click(function() {
  

  loadAPI(18); // CHOOSES CATEGORY
});

$('#b2').click(function() {

  loadAPI(15); // CHOOSES CATEGORY
});

$('#b3').click(function() {
 
  loadAPI(21); // CHOOSES CATEGORY
});
$('#b4').click(function() {
 
  loadAPI(16); // CHOOSES CATEGORY
});
$('#b5').click(function() {
 
  loadAPI(9); // CHOOSES CATEGORY
});
$('#b6').click(function() {
 
  loadAPI(12); // CHOOSES CATEGORY
});
$('#b7').click(function() {
 
  loadAPI(17); // CHOOSES CATEGORY
});
$('#b8').click(function() {

  loadAPI(14); // CHOOSES CATEGORY
});
$('#b9').click(function() {

  loadAPI(22); // CHOOSES CATEGORY
});
$('#b0').click(function() {

  loadAPI(11); // CHOOSES CATEGORY
});

///CODE FOR KEEPING TIME
let ticks

 //Adapted from https://stackoverflow.com/questions/52547625/1-minutes-30-second-countdown-timer-javascript

function startTime() {
 function countdown(minutes, seconds) {
  var seconds = 61;
  var mins = minutes

function tick() {
  var counter = document.getElementById("timer");
  $timer = counter
  ticks++
  $('#timer').css('color', "white")
  $($playerScore).css('color', "white")
  var currentMinutes = mins - 1 
  seconds--;
  seconds = seconds + bonus           //ADD BONUS TIME
  bonus = 0   //CLEAR BONUS POINTS
  
  // seconds = seconds+ bonus
  // console.log(seconds+ " seconds remain")
 
      if (ticks>90){                                  // TURN ORANGE ON 30 SECONDS LEFT
       $('#timer').css('color','orange')
      }
                                                   //// SWITCH STATEMENT HERE
      if (seconds<=15 && minutes == 0){                  // TURN RED ON 15 SECONDS LEFT
        $('#timer').css('color','red')
       }

  counter.innerHTML =
  // currentMinutes.toString() + ":" + (seconds < 10 ? "0" : "") + 
  String(seconds);
  if (seconds > 0) {
    timeoutHandle = setTimeout(tick, 1000); //one second
  } else if (seconds==0 && bonus!=0) {
     bonus--
     timeoutHandle = setTimeout(tick, 1000); 
  }  else {
   
    console.log("timer cp?")
    openModal()
    if (seconds=-1 && minutes<1) {
      
      //THIS CODE IS NOT TRIGGERING BUT EVERYTHING WORKS 
      console.log("timer ended?")

      //END GAME FUNCTION HERE
       // never reach “00″ issue solved:Contributed by Victor Streithorst (via Stack Overflow)
       openModal()
       setTimeout(function() {
        // countdown(mins - 1);
        cl("timeout function not needed anymore")
      }, 1000);
    }
  }
} //close Tick FUNCTION
tick();
}   //close Countdown Function
countdown(2); //three minutes  
}

let obj
function generateCall() {
  const apiKey = ``  

  let currentQuestion=0
  
  const queryType = `t=`
 
  
  let queryURL = baseURL + apiKey + '&' + queryType   

                                   // ADD FUNCTION SO THIS DOES NOT RUN IMMEDIATELY ON LOAD (UNTIL AFTER CATEGORY SELECTION)
                                    //function startGame()  **BRING UP HERE***
 
        jQuery.ajax({
            url:baseURL,   /////// Charles helped debug
            dataType: 'text',
            type: "GET",
                 
          success: function(data) {
                let dataObject = {}
                obj = JSON.parse(data);
                dataObject = data

                let category= data.category
                let myquestions = data
                console.log(obj.results[1])
          }})
        }    // END GENERATE CALL                 
                          
  $(".startGame").click(function startGame(){ //BUTTON "START GAME" 
  // $(counter).appendTo('.banner').css('font-size', '24px')
  $($mega).show()
      $($titlescreen).hide()
      $('.btn4').hide()
      $('.categories').hide()
      $('.startGame').hide()
      $($banner).show()
      
      nextQuestion()
      // setTimeout(function(){ nextQuestion(); }, 1000);             AUTO START GAME                      // NEXT QUESTION NOT YET DEFINED
      startTime()
     
      // $('#timer').html("Time Left: "+seconds)
      let timeoutHandle;
      var ticks= 0
  
      $($highScore).prependTo($banner)
      //  nextQuestion()
      // $($canvas).show()
  }) // close StartGame Function

  function updateScore() {
    //add 100 points to score
  
  //MODIFY POINT VALUES
  playerScore = playerScore+100
  
  if (playerScore >= highScore){
    highScore=playerScore
    localStorage.setItem("highScore", highScore);      
  
  // localStorage.setItem(highScore, highScore)
  }
  
  $($playerScore).html("Score: "+playerScore).css('float','right').css('margin-top', '-75px')
  $($playerScore).show()
  $($highScore).html("High Score: "+highScore)

  $($highScore).prependTo($banner)
 
  cl("Score: "+playerScore + ", High Score: "+ highScore)
}

$(".restart").click(function restart(){ //BUTTON "RESTART GAME" 
location.reload();
})


    // Citation - Modal declaration adapted from technique learned in Modal lab
  const $openBtn = $('#openModal'); //variables declared
  const $modal = $('#modal');
  const $modaltextbox = $('#modal-textbox');
  const $restart = $('#restart');
  const $banner = $('.banner');
  $modal.css('display', 'none');
  const openModal = () => {     //open Modal
    $modal.css('display', 'block');
    $modal.css('text-align', 'center');
    $($modaltextbox).html("Questions Correct: "+ totalCorrect + '<br>'+ "Final Score: "+ playerScore + '<br>'+"High Score: "+highScore + '<br>'+ '<button class="restart" id="restart" href="#"><A HREF="javascript:history.go(0)">Main Menu</button>')
  }
  const closeModal = () => {     //close Modal
    $modal.css('display', 'none');
    location.reload();
  }

  $openBtn.on('click', openModal); // REVISE TO OPEN ON QUESTION ANSWER
  
  $($playerScore).appendTo('.banner')
  $($highScore).appendTo('.banner').css('font-size', '24px')
 
  $($banner).hide()





//TURN BACK! CODE IS NOT DRY! THIS IS A REPEAT FUNCTION






  // REPEATS IN ORDER TO MAKE ACCESSIBLE FOR IMMEDIATE DEPLOYMENT
  function nextQuestion() { //NEXT QUIZ QUESTION
    // if (seconds > 0){
  clickCount++

    // completesound.play()
     $('.playerScreen').hide()
     $('.canvas').css('border',"2px solid white")
     $('.canvas').hide() 
      $('.canvas').empty()   //slideDown(450)
     $('.canvas').css('border',"2px solid black")           //STYLING THE QUESTION CANVAS 
     $('.canvas').css('background-color',"lightgreen")       // CHANGE COLOR AT NEW LEVEL?
     $('.canvas').css('color',"black")
     

   $('audio#audio1')[0].play()

     // cl(questionNumber + "old") 
     questionNumber++
    
    // playerScore++
    
     cl("playerScore= "+ playerScore)
       
           const $bigCanvas = $('<bigCanvas>');
           const $canvas = $('<canvas>');
           const $lhead = $('<lhead>').attr('id',questionNumber);
           const $ul = $('<ul>').attr('id',questionNumber);
           const $li = $('<li>')
           const $form = $('<form>')
           $($form).appendTo($ul)
        
   
      //LOOP redraws question number if player has already had the question

          //////////////////////////////// FISHER-YATES SHUFFLE where I have added a variable X to iterate through
          function shuffle(array) {
           var i = array.length,
               j = 0,
               temp;
       
           while (i--) {
       
               j = Math.floor(Math.random() * (i+1));
       
               // swap randomly chosen element with current element
               temp = array[i];
               array[i] = array[j];
               array[j] = temp;
       
           }
       
           return array;
        
       }
       
       var ranNums = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]);
       x++    // 
       console.log(ranNums)
       shuffledChoice= ranNums[x];
       console.log(ranNums)
          // console.log(doNotRepeat)
          console.log("shuffled CHoice"+ shuffledChoice)
       if (ranNums.length > 48) {  /// REFRESH QUESTIONS IF EXHAUSTED
        //  console.log("generate call if maxed")
      }
           ////////////////////////////////////

     
       console.log(x)
    

           $('<li>').html(obj.results[x].correct_answer).addClass('correct').appendTo($ul);

           $('<li>').html(obj.results[x].incorrect_answers[0]).addClass('wrongAnswer').appendTo($ul);
         
           $('<li>').html(obj.results[x].incorrect_answers[1]).addClass('wrongAnswer').appendTo($ul);
       
           $('<li>').html(obj.results[x].incorrect_answers[2]).addClass('wrongAnswer').appendTo($ul);
          
            doNotRepeat.push(x)


           $.fn.shuffleChildren = function() {       //SHUFFLE LI CHILDREN https://css-tricks.com/snippets/jquery/shuffle-children/
             $.each(this.get(), function(index, list) {
                 var $list = $(list);     //list saved as JQUERY object
                 var $find = $list.children();  //select children of list
         
                 $find.sort(function() {
                     return 0.5 - Math.random();   //randomize sort
                 });
         
                 $list.empty();                       //empty list
                 $find.appendTo($list);                //re-append
             });
         };
         $($ul).shuffleChildren($li);                // shuffle just li in ul
           


               $($ul).click(function select()            // SPAM BLOCKER! 2 count required to select an answer, each new question ups the counter
                  {  
                 //  if (event.target.hasClass('correct'))

                 console.log("clickCount= "+clickCount)
                 if (clickCount >1) {
                 isCorrect()
                 isWrong()
                 clickCount--
                 } else {
                   "click count depleted"
                 }
             
                  });

           //  $('<span>').text(obj.results[x].category).addClass('answer').appendTo('body').css('color','white');
           $('<category>').html(obj.results[x].category + ". Difficulty Level: " +obj.results[x].difficulty+'<br>').appendTo($lhead);

           points++
           $('<lhead>').html("Question #" + questionNumber + ". " + obj.results[x].question).attr('id',questionNumber).appendTo($lhead); //QUESTION
           // $('<modal-open>').html($playerScore)
           $('.canvas').fadeIn(500)                //FADE BACK IN
           $('body').append($canvas);
           $('.canvas').append($lhead);
           $('.canvas').append($ul);

           function moreTime(seconds) {
             seconds=seconds+5// seconds = seconds+5 
           }            

           function chooseAnswer() {cl("chooseAnswer")
           isCorrect()
           isWrong()                
    }
    
function isCorrect() {cl(" checking isCorrect...")  //placed within NEXT question function due to Scoping issues
if($(event.target).is('.correct'))  {
cl("verified correct")
bonus= bonus+4
$(event.target).css('color', "green")
totalCorrect++
updateScore()
$('audio#audio3')[0].play()

$('#timer').css('color', "gold")
$('#timer').text("+3 seconds")
$($playerScore).css('color', "gold")
questionsCorrect.push(x)
setTimeout(function(){ nextQuestion(); }, 1100); // AUTO MVOE TO NEXT QUESTION
//Play "correct" sound
console.log("correctQuestions" + questionsCorrect)
}
}

function isWrong() {cl("checking is wrong...")
if($(event.target).is('.wrongAnswer')) {
cl("verified wrong")
cl($(this))
$($ul).css('background-color', "lightred")
$($bigCanvas).css('background-color', "lightred")
$(event.target).css('color', "red")
$(event.target).css('text-decoration', "line-through")
$('.correct').css('color', "green")
$('audio#audio4')[0].play()
setTimeout(function(){ nextQuestion(); }, 800);
//Play "wrong" sound
}
}
              }   //NEXT QUESTION END   




}

)