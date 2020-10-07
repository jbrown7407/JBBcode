  
  $(() => {
  
let toggleScreen = 0
let points = 0
let questionNumber = 0
let questionBank = ["Question Alpha","Question Bravo","Question Charlie","Question Delta",]
//create an ARRAY questionS object with question, 3 class="wrong" answers, 1 class="wrong" right
       //An OBJECT for each question?

       //ADD $questionText


    let cl = (value) => console.log(value);
    cl("Jquery Active")
    

    //event.currentTarget TARGET SPECIFIC ELEMENT!!!
    // $( "p" ).click(function( event ) {
    //   alert( event.currentTarget === this ); // true
    // });


//PRACTICE SESSION
        const addH2 = () => {
          let $h2 =$('<h2>').text("Coding Trivia!")
          $('body').prepend($h2)
        }
    addH2()


    const $div = $('<div>')
    $($div).addClass('title')
    $('body').prepend($div)
    $($div).text("Welcome to Coding Trivia")

    const $points = $('<div>')
    $($points).addClass('points')
    $('body').prepend($points)
    $($points).text("X correct, " +points)
   // $($div).style.color("blue")
//JQUERY HERE

$(".btn1").click(function btn1(){ //TITLE SCREEN
    questionNumber++
    points= points+1 // FIX UPDATE EACH QUESTIONS
    $points.text(points)
    // points = $points
    const $questionCanvas = $('<canvas>');
    const $lhead = $('<lhead>');
    const $ul = $('<ul>').attr('storage','trunk');


    $('<li>').text(questions[0].address).appendTo($ul);   //link to list id#
    $('<li>').text('Answer Option 2').addClass('answer').appendTo($ul);
    $('<li>').text('Answer Option 3').addClass('answer').appendTo($ul);
    $('<li>').text('Answer Option 4').addClass('answer').appendTo($ul);
 
    
    $('<lhead>').text("Question #" + questionNumber + ". " + questions[questionNumber].name + "?.").attr('id',questions[questionNumber].name).appendTo($lhead);
   
    //  GIVE each lhead an `ID` tag of the corresponding question #
    // $lhead.attr("id", questions[i]);
    //$('<lhead>').attr('id',questions[questionNumber]); // NEW
  
    $('body').append($questionCanvas);
    $('.canvas').append($lhead);
    $('.canvas').append($ul);
if (toggleScreen = 0) {
  toggleScreen++

}
else  {
  toggleScreen--
}
console.log(toggleScreen + 'toggle')

       });


       const questions = [ // {question:   , answer:    , correctCheck: false}

        //ADD TOPICS, CORRECTNESS, QUESTION
        { name: "Megatron", address: "Cybertron" },
        { name: "Some guy", address: "Some street" },
        { name: "Grace Hopper", address: "Arlington, Virginia" },
        { name: "Ching Shih", address: "The High Seas" },
        { name: "Slimer", address: "The Library" },
        { name: "Umbra", address: "The Void" },
        { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
        { name: "Matt Huntington", address: "Remote" },
        { name: "Ronald McDonald", address: "Casa del McDonalds" },
        { name: "Jem", address: "Starlight Music" }
    ];
    
    const buildTable = () => {
      console.log("buildTable")
        const $infoTable = $('<table>').addClass('info-table');
        $infoTable.html(
            `<thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
              </tr>
            </thead>`
        );
        for (const question of questions) {
            // console.log(question);
    
            const $infoRow = $('<tr>');
            const $nameCell = $('<td>').addClass('name').text(question.name);
            const $addressCell = $('<td>').addClass('address').text(question.address);
            $infoRow.append($nameCell, $addressCell);
            $infoTable.append($infoRow);
        }
        $('.container').append($infoTable);
    }
    
    const addData = (name, address) => {
        questions.push({ name: name, address: address });
        $('.container').empty();
        buildTable();
    }
    
    const addText = () => {
        $('body').append("It seems as if it has been clicked!");
    }
    
    const changeClass = () => {
        $('body').toggleClass('black');
    }
    
    const addJamesToTable = () => {
        addData('James', 'Atlanta');
    }
    
 
        buildTable();
    
        const $btn = $('#btn');
        console.log($btn);
        // $btn.on('click', addText);
        // $btn.on('click', changeClass);
        $btn.on('click', addJamesToTable);
    

     //   TOGGLE CLASS FOR ONLY THE CLICKED ELEMENT (add a check or X?)
  //    const $card = $('.card').on('click', (event)=>{
  //   $(event.currentTarget).toggleClass('card-back')
  //   playHand()
  // })
    


//MODAL     MOVE INTO EACH QUESTION
//Grabbing Elements
const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('#close');

//Event Handlers
const openModal = () => {
  $modal.css('display', 'block');
}

const closeModal = () => {
  $modal.css('display', 'none');
}

//Event Listeners
$openBtn.on('click', openModal);

$closeBtn.on('click', closeModal);

});
//END JQUE