$(document).ready(function(){
    let cl = (value) => console.log(value);
    cl("Jquery Active")
let counter =  0
    let $div = $('<div>')
    $($div).addClass('title')
    $('body').append($div)
    $($div).text("This is the first div title")
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

const $gameScene1 = document.getElementsByClassName("gameScene1")
const $gameScene2 = document.getElementsByClassName("gameScene2")
const $titleScene = document.getElementsByClassName("titleScene")
const $gameOverScene = document.getElementsByClassName("gameOverScene")
       
$($gameScene1).hide()   //HIDE ENTIRE DIV
$($gameScene2).hide() 
$($gameOverScene).hide()
$($titleScene).show     // SHOW TITLE SCENE FIRST
         
        //event.currentTarget TARGET SPECIFIC ELEMENT!!!
           // $( "p" ).click(function( event ) {
           //   alert( event.currentTarget === this ); // true
           // });
       
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
