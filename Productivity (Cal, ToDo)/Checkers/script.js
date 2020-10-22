
    const $gameScene1 = document.getElementsByClassName("gameScene1")
    const $gameScene2 = document.getElementsByClassName("gameScene2")
    const $titleScene = document.getElementsByClassName("titleScene")
    const $gameOverScene = document.getElementsByClassName("gameOverScene")
    const $topGrab = document.getElementsByClassName("topGrab")
           
    $($gameScene1).hide()   //HIDE ENTIRE DIV
    $($gameScene2).hide() 
    $($gameOverScene).hide()
    $($titleScene).show()     // SHOW TITLE SCENE FIRST
    
    let cl = (value) => console.log(value);
    cl("Jquery Active")
    let counter =  0

    
    let $container = $('<div>')
    $($container).addClass('gameGraph')
    $($gameScene1).append($container)    // added to first scene
    $container.css('width', '500px')
    $container.css('height', '500px')
    

let i
for (i=1; i <= 100; i++) {
    let $div = $('<div>')
    $($div).addClass('gameGraph')
    $($container).append($div)
    $($div).css("width", '50px')
    $($div).text(i).css('color','blue')
    $($div).css('height', '50px')
    $($div).css('background-color', 'white')
    $($div).css('border-color', '1px solid white')
    $($div).css('display', 'inline-flex')
    $($div).css('flex-direction', 'auto')
    $($div).css('box-sizing', 'border-box')
    if (i % 2 === 0){
        $($div).css('background-color', 'black')
    }
}

   // $($div).style.color("blue")
//JQUERY HERE

$(".generate").click(function btn1(){ //TITLE SCREEN
    // $(".scene").hide()
    // $(".gameOverScene").fadeIn(700).show();
    // $(".gameScene2").hide()
    // $(".phase2").hide()
    // $(".phase5").hide()
    // cl("Title Screen")
    counter=counter+1
    const $div = $('<div>')
    $($div).addClass('.anchor')
    $('.anchor').prependTo('.anchor')
    $($div).text("This is the first div title")
       });





         
        //event.currentTarget TARGET SPECIFIC ELEMENT!!!
           // $( "p" ).click(function( event ) {
           //   alert( event.currentTarget === this ); // true
           // });
$(document).ready(function(){   
       //SCENE CHANGES
       $(".btn1").click(function btn1(){ //TITLE SCREEN
           $(".titleScene").fadeIn(700).show()
           $($gameScene1).hide()
           $($gameScene2).hide()
           $($gameOverScene).hide()
           console.log("btn1")
              });
       $(".btn2").click(function btn2(){ //Game Scene 1
           $(".titleScene").hide()
           $(".gameScene1").fadeIn(700).show()
           $(".gameScene2").hide()
           $(".gameOverScene").hide()
           console.log("btn2")
           });
       $(".btn3").click(function btn3(){ //Game Scene 2
           $(".titleScene").hide()
           $(".gameScene1").hide()
           $(".gameScene2").fadeIn(700).show()
           $(".gameOverScene").hide()
           console.log("btn3")
           });
       $(".btn4").click(function btn4(){ //Game Over Scene
           $(".titleScene").hide()
           $(".gameScene1").hide()
           $(".gameScene2").hide()
           $(".gameOverScene").fadeIn(700).show()
           console.log("btn4")
           });  

        })
