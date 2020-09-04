var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
    greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening';

document.getElementById('lblGreetings').innerHTML =
    '<b>' + greet + '</b>, Jeffrey';


   
    var myDate = new Date(); 
    var myDay = myDate.getDay(); 
    
    // Array of days. 
    var weekday = ['Sunday', 'Monday', 'Tuesday', 
        'Wednesday', 'Thursday', 'Friday', 'Saturday' 
    ]; 
    document.write("Today is : " + weekday[myDay]); 
    document.write("<br/>"); 
    
    // get hour value. 
    var hours = myDate.getHours(); 
    var ampm = hours >= 12 ? 'PM' : 'AM'; 
    hours = hours % 12; 
    hours = hours ? hours : 12; 
    var minutes = myDate.getMinutes(); 
    minutes = minutes < 10 ? '0' + minutes : minutes; 
    var myTime = hours + " " + ampm + " : " + minutes +  
        " : " + myDate.getMilliseconds(); 
    document.write("\tCurrent time is : " + myTime); 

