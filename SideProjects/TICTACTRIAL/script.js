let arrayX = []
let arrayO = []  
  let gridNumber

$(document).ready(function(){   
    let cl = (value) => console.log(value);
    cl("Jquery Active")
    
    for (i=0; i<9; i++){
    const $div = $('<div>')
    $($div).addClass('square')
    $($div).addClass(i) // 0 ,1, 2
    let $idNum = $($div).attr('id', i)
    $('body').append($div)
    
    $($div).text(i).css("text-align", "center")
 
    }                             
    
    // GENERATE GRID

$('.square').on('click', playMove); 
});
let choice = true
function toggle() {
    choice = choice ? false : true
}
function playMove() {
    // let $idNum = $($div).attr('id', i)
    let $move = $(event.target)
        if (choice === true) {
            $move.text('X').addClass('played').css('pointer-events', 'none')
            .css('background-color', 'yellow')
            toggle()
            arrayX.push()
            console.log(arrayX)
            winFunctionX()
          
        } else {
            $move.text('O').addClass('played').css('pointer-events', 'none')
            .css('background-color', 'lightblue')
            toggle()
            arrayO.push($idNum)
            console.log(arrayO)
     
            winFunctionO()
        }
        // winFunctionX()
        // winFunctionO()
}

function playerXwins() {
    console.log("playerX wins")
console.log("playerX wins")
}
function playerOwins() {
    console.log("playerO wins")
}

const winFunctionX = () => {
  //if ARRAY FOR X OR ARRAY FOR Y CONTAINS ALL 3 ==> WIN
  if (arrayX.includes([0, 1, 2])){
     playerXwins()
  }
}
const winFunctionO = () => {
    //if ARRAY FOR X OR ARRAY FOR Y CONTAINS ALL 3 ==> WIN
    if (arrayO.includes([0, 1, 2])){
       playerOwins()
    }
}





    //  [3, 4, 5]
    //  [6, 7, 8]
    //  [0, 3, 6]
    //  [1, 4, 7]
    // [2, 5, 8]
    //[0, 4, 8]
    //[2, 4, 6]
  
