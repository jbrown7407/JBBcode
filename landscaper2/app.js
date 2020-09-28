let clicks = 0
let cash = 0
let level
let rank = ""
let highScore = 0
let score = 0

let upgrade = document.getElementById ("upgradeTool")

let player = {
    powerLevel: 1
 
}

let tool = ["Teeth", "Metal Teeth", "Pluck", "Sticks", "Safe Scissors", "Scissors", "Exacto", "Tiny Sword", "Snipper", "Weedwacker", "Shears", "Katana", "Lawn-Saber", "Attack Chopper", "Mow-Ops Team", "Nukes"
, "Planet Buster"]

let power = player.powerLevel 
let equipped ="Teeth"

//FIX WEAPON SELECTION
function upgradeTool() {
  
     if (cash >= 10 && upgrade < (tool.length-1)) {
        cash = cash - 10
        power = power + 1
        upgrade = upgrade +1
        equipped= tool[power-1]
        document.getElementById("clicks").innerHTML = clicks;  
        document.getElementById("cash").innerHTML = cash;
        document.getElementById("level").innerHTML = level;
        document.getElementById("highScore").innerHTML = highScore;
        document.getElementById("power").innerHTML = power;
        document.getElementById("equipped").innerHTML = equipped;
    }
    else if (upgrade >= (tool.length-1))  {
       
        document.getElementById("equipped").innerHTML = "Planet Buster";}
    else {
    alert("You are too broke!")
    }
    
}

function onClick() { //Called only when MOW BUTTON is pressed
   
clicks = clicks + power; //clicks = one mow. One click can mow more than one lawn if power level>1
cash += power;
level = Math.ceil(clicks / 10);
if (cash >= highScore) {
highScore = cash;}

document.getElementById("clicks").innerHTML = clicks;
document.getElementById("cash").innerHTML = cash;
document.getElementById("level").innerHTML = level;
document.getElementById("rank").innerHTML = rank;
document.getElementById("highScore").innerHTML = highScore;
document.getElementById("equipped").innerHTML = equipped;
document.getElementById("power").innerHTML = power;

//high score, level, rank. Runs when Mow is clicked.
if (clicks<2) {

      alert("YOUR JOURNEY BEGINS, YOUNG GRASSHOPPER....")
      document.getElementById('clicks').style.backgroundColor = "lightgreen";
      document.getElementById("rank").innerHTML = "Grasshopper";}
              else if (clicks==2) {
                  document.getElementById('clicks').style.backgroundColor = "orange";
                  document.getElementById("rank").innerHTML = "Grasshopper";}
              else if (clicks==3) {
                alert("THREE LAWNS...!")
                document.getElementById('clicks').style.Color = "black";
                document.getElementById('clicks').style.backgroundColor = "lightyellow";
                document.getElementById("rank").innerHTML = "Grasshopper";}
              else if (clicks==4) {
                document.getElementById('clicks').style.Color = "black";
                document.getElementById('clicks').style.backgroundColor = "yellow";
                document.getElementById("rank").innerHTML = "Grasshopper";}
              else if (clicks==5) {
                  alert("FIVE LAWNS... You are an entrepeneur!")
                  document.getElementById('clicks').style.Color = "green";
                  document.getElementById("rank").innerHTML = "Grasshopper";}
              else if (clicks >= 6 && clicks <=9) {
              document.getElementById('clicks').style.color = "darkgreen";
              document.getElementById("rank").innerHTML = "Grasshopper";}
              else if (clicks ==10) {
                  alert("TEN LAWNS! You should probably invest in protecting your teeth.")
                  document.getElementById("rank").innerHTML = "Peon";}
              else if (clicks > 10 && clicks <20) {
                  document.getElementById("rank").innerHTML = "Baby Sprout";}
              else if (clicks >= 20 && clicks <30 ) {
                  document.getElementById("rank").innerHTML = "Scrub";}
              else if (clicks >= 30 && clicks <40 ) {
                  document.getElementById("rank").innerHTML = "Greenling";}
              else if (clicks >= 40 && clicks <50 ) {
                  document.getElementById("rank").innerHTML = "Baby Tycoon";}
              else if (clicks == 50) {
                  alert("You have potential...")}
              else if (clicks > 50 && clicks <60 ) {
                  document.getElementById("rank").innerHTML = "Grass Barber";}
              else if (clicks >= 60 && clicks <70 ) {
                    document.getElementById("rank").innerHTML = "Lawn Doctor";}
              else if (clicks >= 70 && clicks <80 ) {
                    document.getElementById("rank").innerHTML = "Trim Trooper";}   
             else if (clicks >= 80 && clicks <90 ) {
                    document.getElementById("rank").innerHTML = "Landscape Lion";} 
             else if (clicks >= 90 && clicks <100 ) {
                     document.getElementById("rank").innerHTML = "Grass Deity";}             
              else if (clicks >= 100 && clicks <=499) { 
                  document.getElementById("rank").innerHTML = "Crop Commander";}
              else if (clicks >= 500 && clicks <=1000) {
                  document.getElementById("rank").innerHTML = "Snip Sensei";}
              else if (clicks >= 1001 && clicks <=9999) {
                  document.getElementById("rank").innerHTML = "Lawn Legend";}
               else if (clicks >= 10000) {
                  alert("WINNER. PLEASE CLAP...")
                  document.getElementById("rank").innerHTML = "GOAT";}
    else {
      alert("EDGECASE for RANK")
    }
}
