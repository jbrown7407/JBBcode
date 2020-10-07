  
  $(() => {
  
let toggleScreen = 0
let points = 0
let pictureNumber = 0

//create an ARRAYpictureS object with picture, 3 class="wrong" answers, 1 class="wrong" right
       //An OBJECT for each picture?

       //ADD $pictureText


    let cl = (value) => console.log(value);
    cl("Jquery Active")
    

//PRACTICE SESSION
        const addH2 = () => {
          let $h2 =$('<h2>').text("PHOTO GENERATOR!")
          $('body').prepend($h2)
        }
    addH2()


   // $($img1).addClass('title')
   //$('body').prepend($img1)// ADDS IMG
   


    const $div = $('<div>')
    $($div).addClass('title')
    $('body').prepend($div)
    $($div).text("?dog Module")

    const $points = $('<div>')
    $($points).addClass('points')
    $('body').prepend($points)
    // $($points).text("X correct, " +points) // DISPLAYS POINTS AT TOP
   // $($div).style.color("blue")
//JQUERY HERE

$(".btn1").click(function btn1(){ //TITLE SCREEN
  pictureNumber++
    points= points+1 // FIX UPDATE EACH pictureS
    $points.text(points)
    // points = $points
    const $pictureCanvas = $('<canvas>');
    const $lhead = $('<lhead>');
    const $ul = $('<ul>').attr('storage','trunk');

  
    
    const $img1 = $('<img src="dog1.jpg" style="height:100px">')
    const $img2 = $('<img src="dog2.jpeg" style="height:100px">')
    const $img3 = $('<img src="dog3.jpg" style="height:100px">')
    const $img4 = $('<img src="dog4.jpeg" style="height:100px">')
    const $img5 = $('<img src="dog5.jpeg" style="height:100px">')
    const $img6 = $('<img src="dog6.jpg" style="height:100px">')
    const $img7 = $('<img src="dog7.jpeg" style="height:100px">')
    const $img8 = $('<img src="dog8.jpeg" style="height:100px">')
    const $img9 = $('<img src="dog0.jpg" style="height:100px">')
    const $img0 = $('<img src="dog9.jpg" style="height:100px">')
    const $img10 = $('<img src="dog10.jpg" style="height:100px">')

let $pictureSelector = [$img1, $img2, $img3, $img4, $img5, $img6, $img7, $img8, $img9]
    
let previousSelection = []

 function generateNum() {
   let x = (Math.floor(Math.random() * 8))
   console.log(x)
    $('body').prepend($pictureSelector[x])
    $('body').append($pictureCanvas);
   // $('body').append($img0);

 }

 generateNum()

//  x.push(previousSelection)
// //  console.log(previousSelection + "xx")
// for (let i; i<$pictureSelector.length; i++) {
//   if ($pictureSelector[i] == x)
//   $this.remove
// }


// previousSelection STORE X
//index X and use .hide()



    // $('.canvas').append($lhead);
    // $('.canvas').append($ul);
if (toggleScreen = 0) {
  toggleScreen++

}
else  {
  toggleScreen--
}
console.log(toggleScreen + 'toggle')

       });

//CREATE IMAGE DIVS


   

//BUTTON FUNCTION TEMPLATE
// $(".btn1").click(function btn1(){ //TITLE SCREEN
//     $(".scene").hide()
//     $(".gameOverScene").fadeIn(700).show();
//     $(".gameScene2").hide()
//     $(".phase2").hide()
//     $(".phase5").hide()
//     cl("Title Screen")
//        });



});
//END JQUE