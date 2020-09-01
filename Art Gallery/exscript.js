
/*
//Create an accurate user greeting
var today = new date();
var hourNow =today.getHours();
var greeting;
if(hourNow > 18){
  greeting="Good Evening";
} else if (hourNow>12){
greeting="Good Afternoon";
} else if (hourNow>0){
greeting="Good Morning";
} else { greeting = 'Welcome';
}document.write(greeting);
 */

//this is Z text 3d script for Name plate
var ztxt = new Ztextify(".hero-text", {
   depth: "10px",
   layers: 2,
   fade: true,
   direction: "forwards",
   event: "pointer",
   eventRotation: "35deg"
});
