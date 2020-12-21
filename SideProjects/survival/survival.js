$(document).ready(function(){
    let cl = (value) => console.log(value);
    cl("Jquery Active")
    //build this out in React instead?
    
    
    // const $div = $('<div>')
    // $($div).addClass('title')
    // $('body').append($div)
    // $($div).text("Div Example")
   // $($div).style.color("blue")
//JQUERY HERE

const $tellplayer=  document.getElementById("tellPlayer")
const $gameScene1 = document.getElementsByClassName("gameScene1")
const $gameScene2 = document.getElementsByClassName("gameScene2")
const $titleScene = document.getElementsByClassName("titleScene")
const $waterScene = document.getElementsByClassName("waterScene")

 $($gameScene1).hide()   //START WITH TITLE SCREEN OPEN ONLY
 $($gameScene2).hide() 
 $($waterScene).hide()

//SCENE TRANSITIONS
$(".btn1").click(function btn1(){ //TITLE SCREEN
    $(".titleScene").fadeIn(700).show()
    $(".gameScene1").hide()
    $(".gameScene2").hide()
    $(".waterScene").hide()
    console.log("Title Screen")});
$(".btn2").click(function btn2(){ //Game Scene 1
    $(".titleScene").hide()
    $(".gameScene1").fadeIn(700).show()
    $(".gameScene2").hide()
    $(".waterScene").hide()
    console.log("Scene1")});
$(".btn3").click(function btn3(){ //Game Scene 2
    $(".titleScene").hide()
    $(".gameScene1").hide()
    $(".gameScene2").fadeIn(700).show()
    $(".waterScene").hide()
    console.log("Scene2")});
$(".btn4").click(function btn4(){ //Game Over Scene
    $(".titleScene").hide()
    $(".gameScene1").hide()
    $(".gameScene2").hide()
    $(".waterScene").fadeIn(700).show()
    console.log("Player has Died")});  
       
let water
let food
let foodValue=25
let stamina
//interval/timer

function gameBegin() {
    water = 50;
    food = 50;
    stamina = 50;
    console.log("You awaken cold and alone on an island.");
    console.log("water: " + water + ",food: " + food + ",stamina: " + stamina);
}

gameBegin() //STARTS GAME
travelTo() //Travel to base
//you are hungry
seekFood()
drinkWater()
rest()

function travelTo() {
    stamina = stamina - 5
    food = food - 1
    water = water - 1
    console.log("travel across the island")
    console.log("water: " + water + ",food: " + food + ",stamina: " + stamina);
}

function seekFood() {
    //menu to choose activity
    stamina = stamina - 5
    console.log("Hunt or fish or trap");
    food = food + foodValue
    console.log("water: " + water + ",food: " + food + ",stamina: " + stamina);
}

function drinkWater() {
    water = water + 25
    stamina = stamina - 1
    console.log("walk to the water and drink");
    console.log("water: " + water + ",food: " + food + ",stamina: " + stamina);
}
function rest() {
    stamina = stamina + 25
    console.log("go home and then rest");
    console.log("water: " + water + ",food: " + food + ",stamina: " + stamina);
}
function craftTool() {
    stamina = stamina - 10 // per tool?!
    console.log("craft");
    console.log("water: " + water + ",food: " + food + ",stamina: " + stamina);
}

function timeInterval() {
    stamina = stamina - 1
    food = food - 1
    water = water - 1
    //interval = 1000
    //if any stat <=0, player has died   // function gameOver()
    //figure out how to use time to reduce resources
    console.log("time interval passed x 1")
}

});  
