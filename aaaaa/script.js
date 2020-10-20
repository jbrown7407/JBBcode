$(document).ready(function(){
    let cl = (value) => console.log(value);
    cl("Jquery Active")
    
    const $div = $('<div>')
    $($div).addClass('title')
    $('body').append($div)
    $($div).text("This is the first div title")
   // $($div).style.color("blue")
//JQUERY HERE

$(".generate").click(function btn1(){ //TITLE SCREEN
    $(".scene").hide()
    $(".gameOverScene").fadeIn(700).show();
    $(".gameScene2").hide()
    $(".phase2").hide()
    $(".phase5").hide()
    cl("Title Screen")
       });

   
})