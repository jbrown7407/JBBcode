$(document).ready(function(){
    let cl = (value) => console.log(value);
    cl("Jquery Active")
    
    // const $div = $('<div>')
    // $($div).addClass('title')
    // $('body').append($div)
    // $($div).text("This is the first div title")
    // $($div).css('width','100%')
    // $($div).css('height','20px')
    // $($div).css('background-color','black')
    
    const $bottom = $('<div>')
    $($bottom).addClass('bottom')
    $($div).append($bottom)
    $($bottom).css('width','100%')
    $($bottom).css('height','200px')
    $($bottom).css('background-color','black')
    $($bottom).css('padding','0px')
    $($bottom).text("This is the first div title")


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

   

const $ground = $('<div>')
 $($ground).addClass('ground')
       $('body').append($ground)
       $($ground).text("Line")



})