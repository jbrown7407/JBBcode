$(document).ready(function(){
    let cl = (value) => console.log(value);
    cl("Jquery Active")
    
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
const $gameOverScene = document.getElementsByClassName("gameOverScene")


 $($gameScene1).hide()   //HIDE ENTIRE DIV
 $($gameScene2).hide() 
 $($gameOverScene).hide()



$(".btn1").click(function btn1(){ //TITLE SCREEN
    $(".titleScene").fadeIn(700).show()
    $(".gameScene1").hide()
    $(".gameScene2").hide()
    $(".gameOverScene").hide()
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
       












var bugsLeft = 6

class Hero {
    constructor(name) {
        this.health = 20;
        this.firepower = 5;
        this.accuracy = 0.7
    };
    heroAttack = (bug) => {
        var randomNumber = Math.random()
        if (randomNumber >= this.accuracy) {
            console.log("Hero Attack has missed");
        } else {
            console.log("Hero hit the target");
            bug.health -= this.firepower
            check0()
        }
    }
}

class Bug {
    health = Math.floor(Math.random() * 4) + 3;
    firepower = Math.floor(Math.random() * 3) + 2;
    accuracy = (Math.floor(Math.random() * 3) + 6).toFixed(1) / 10;

    bugAttack = (hero) => {
        var randomNumber = Math.random();
        if (randomNumber >= this.accuracy) {
            console.log("Bug Attack has missed");
        } else {
            console.log("Bug hit the Hero");
            hero.health -= this.firepower
            check0()
        }
    }
}


class BugFactory {
    constructor(bugName) {
        this.bugName = bugName;
        this.bugs = [];
    }
    generateBug() {
        const newBug = new Bug(this.bugName, this.bugs.length);
        this.bugs.push(newBug);

    }
    findBug(index) {
        return this.bugs[index];
    }
}





const hero = new Hero("USS")


// cretae all the bug ships
const bug = new BugFactory("Bug")
for (let index = 0; index < 6; index++) {
    bug.generateBug()
}



var bug1 = bug.bugs[0]


console.log(bug1);

function check0() {
    if (hero.health <= 0) {
        console.log("The game is over!, Hero health zero")
        return
    } else if (bug1.health <= 0) {
        console.log("bug1 has lost the game.");
        console.log("Do you wanna keep fighting?");
    } else {
        console.log("Game is not over yet! Keep Fighting!");
    }
}


//fight sequence
for (let i = 0; i < 3; i++) {
    hero.heroAttack(bug1);
    console.log("hero health", hero.health);
    console.log("bug health", bug1.health);
    bug1.bugAttack(hero);
    check0()

}





});  


