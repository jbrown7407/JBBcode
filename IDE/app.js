//CREATE NEW FILE CODE


const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);
const color = 'rgb('+red+','+green+','+blue+')';



//ORIGINAL
// function run() {
//   let htmlCode = document.querySelector(".editor #html").value; //store editor content as variables
//   let cssCode = "<style>"+document.querySelector(".editor #css").value+"</style>";
// //  let jsCode = document.querySelector(".editor #js").value;
//   let output = document.querySelector("#output"); // Store output div as variable
//   output.contentDocument.body.innerHTML = htmlCode+cssCode; //Link to CSS + HTML
// //  output.contentWindow.eval(jsCode);    //Link to in-editor script
// }

function run() {
    let htmlCode = document.querySelector(".editor #html").value; //store editor content as variables

    document.body.style.wordWrap = 'break-word';// IFRAME LINES

    let cssCode = "<style>"+document.querySelector(".editor #css").value+"</style>";
  //  let jsCode = document.querySelector(".editor #js").value;
    let output = document.querySelector("#output"); // Store output div as variable
    $(output).addClass("hotText")
    output.contentDocument.body.innerHTML = htmlCode+cssCode; //Link to CSS + HTML
   // iframe.contentWindow.document.body.style.wordWrap = 'break-word';
  //   iframe.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}
  //  output.contentWindow.eval(jsCode);    //Link to in-editor script
  output.contentDocument.body.style.wordWrap = 'break-word';


function onClick() {
  let jsCode = document.querySelector(".editor #js").value;
  output.contentWindow.eval(jsCode);  //Run JS in editor
}





function copyThisHTML() {  //COPIES HTML TO CLIPBOARD
    let copyText = document.querySelector(".editor #html");  // Get the text field 
  
    copyText.select();       // Select the text field 
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    document.execCommand("copy");   // Copy the text inside the text field 

    console.log("Copied the text: " + copyText.value);    // Alert the copied text 
  } 
  function copyThisCSS() {  //COPIES CSS TO CLIPBOARD
    let copyText = document.querySelector(".editor #css");  // Get the text field 
  
    copyText.select();       // Select the text field 
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    document.execCommand("copy");   // Copy the text inside the text field 

    console.log("Copied the text: " + copyText.value);    // Alert the copied text 
  } 
  function copyThisJS() {  //COPIES JS TO CLIPBOARD
    let copyText = document.querySelector(".editor #js");  // Get the text field 
  
    copyText.select();       // Select the text field 
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    document.execCommand("copy");   // Copy the text inside the text field 

    console.log("Copied the text: " + copyText.value);    // Alert the copied text 
  } 


  document.querySelector(".editor #html").addEventListener("keyup",run); //update html in editor each press by calling run()
  document.querySelector(".editor #css").addEventListener("keyup",run);  //update css in editor each press by calling run()
  //document.querySelector(".editor #js").addEventListener("keyup",run);   //update js only onClick(), this updates every keystroke (replaced with button)
  
  
  var saveData = (function () {                          // SAVE FILE from Stack Overflow
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        var json = JSON.stringify(data),
            blob = new Blob([json], {type: "octet/stream"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
       a.click();
        window.URL.revokeObjectURL(url);
        console.log('saving!')
    };
    }());

    let htmlCode = document.querySelector(".editor #html").value;
         var data = { value : 33, htmlCode}, // THIS OBJECT IS PASSED
         fileName = "passed.txt";
     
    function saveFile() {
  
    //  data = "Hello World"
     // var data = document.getElementById('html')
      // NAME OF SAVED FILE works shere. erase above parameters
      saveData(data, fileName);
    }

  function newFile() {
      location.reload();
    }
      


  
  //JQUERY




let cl = (value) => {console.log(value)}

    
    const $fileName = document.getElementsByClassName("fileName")
    const $phase2 = document.getElementsByClassName("phase2")

  const $phase1 = document.getElementsByClassName("phase1")
  $("#btn2").hide()


 //PREVIEW MODE
   $("#btn2").click(function restore(){ //RETURN TO EDITOR
 
    $(".phase1").fadeIn(500).show();
    $("#btn1").show()
    $("#btn2").hide()
    $(".phase2").fadeIn(500).show()

    cl("Title Screen")
       });
let counterx = 1
  $("#btn1").click(function fullScreen(){ //Full ScreenMode
        $(".phase3").hide()
        $(".phase1").slideUp(400).hide();
        $(".phase4").hide()
        $(".phase2").show();
        $(".phase5").hide()
        console.log("Full screen preview")
  
        counterx++
        $("#btn1").hide()
        $("#btn2").show()
  })




const $colorPalette = $('#color-palette');
const $myPalette = $('#my-palette');
const $generate = $('#generate');



const makePalette = () => {
  $colorPalette.empty()
  for(let i = 0; i < 10; i++){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = 'rgb('+red+','+green+','+blue+')';

    const $square = $('<div>');
    $square.addClass('square')
    $square.css('background-color', color);
    $colorPalette.append($square);
    console.log("making palette")
  }
}
makePalette()

$($generate).click(function generate(){ //TITLE SCREEN
  $colorPalette.empty()
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = 'rgb('+red+','+green+','+blue+')';

  const $square = $('<div>');
  $square.addClass('square')
  $square.css('background-color', color);
  $colorPalette.append($square);

    $myPalette.show()
    // $colorPalette.hide()
    $myPalette.text("Color Red:" + red + " ,Color Blue:" + blue +" ,Color Green:" + green)

    console.log("replace");
    
      })
   
   
   
      let $deviceName = document.getElementById('deviceName')



    //RESIZE PREVIEW
  let monitorsize =document.getElementsByClassName("monitorSize")
  $monitorsize= monitorsize
      function resizePreview() {

        // $(event.currentTarget).css('color', '100%')
        $('#output').css('height', '200px')
     $('iframe').css('overflow', 'break-word')
     $('iframe').css('wordwrap', 'break-word')
        $('iframe').css('height', '640px')
        $('iframe').css('width', '360px')
        $('iframe').css('wordwrap', 'break-word')
       
        $('#deviceName').text(" Galaxy S5")
       
         console.log("resize Galaxy S5")
      }
      function resizePreview2() {
        $('#output').css('height', '200px')
        $('iframe').css('overflow', 'break-word')
        $('iframe').css('wordwrap', 'break-word')
           $('iframe').css('height', '411px')
           $('iframe').css('width', '731px')
           $('iframe').css('wordwrap', 'break-word')
           $('#deviceName').text(" Pixel 2")
          
            console.log("resize Pixel2")
       }
       function resizePreview3() {
        $('#output').css('height', '200px')
        $('iframe').css('overflow', 'break-word')
        $('iframe').css('wordwrap', 'break-word')
           $('iframe').css('height', '411px')
           $('iframe').css('width', '823px')
           $('iframe').css('wordwrap', 'break-word')
           $('#deviceName').text(" Pixel 2 XL")
          
            console.log("resize Pixel 2 XL")
       }
       function resizePreview1() {
        $('#output').css('height', '200px')
        $('iframe').css('overflow', 'break-word')
        $('iframe').css('wordwrap', 'break-word')
           $('iframe').css('height', '667px')
           $('iframe').css('width', '375px')
           $('iframe').css('wordwrap', 'break-word')
           $('#deviceName').text(" iPhone 6/7/8")
          
            console.log("resize iPhone 6/7/8")
       }
       function resizePreview4() {
        $('#output').css('height', '200px')
        $('iframe').css('overflow', 'break-word')
        $('iframe').css('wordwrap', 'break-word')
           $('iframe').css('height', '736px')
           $('iframe').css('width', '414px')
           $('iframe').css('wordwrap', 'break-word')
           $('#deviceName').text(" iPhone 6/7/8+")
          
        console.log("resize iPhone 6/7/8+")
       }
       function resizePreview5() {
        $('#output').css('height', '200px')
        $('iframe').css('overflow', 'break-word')
        $('iframe').css('wordwrap', 'break-word')
           $('iframe').css('height', '812px')
           $('iframe').css('width', '375px')
           $('iframe').css('wordwrap', 'break-word')
           $('#deviceName').text(" iPhone X")
        console.log("Iphone X")
       }
       function resizePreview6() {
        console.log("Ipad")
        $('#output').css('height', '200px')
        $('iframe').css('overflow', 'break-word')
        $('iframe').css('wordwrap', 'break-word')
           $('iframe').css('height', '1024px')
           $('iframe').css('width', '768px')
           $('iframe').css('wordwrap', 'break-word')
           $('#deviceName').text(" iPad")
       }
       function resizePreview7() {
        $('#output').css('height', '200px')
        $('iframe').css('overflow', 'break-word')
        $('iframe').css('wordwrap', 'break-word')
           $('iframe').css('height', '1366px')
           $('iframe').css('width', '1024px')
           $('iframe').css('wordwrap', 'break-word')
        console.log("resize Ipad Pro")
        $('#deviceName').text(" iPad Pro")
       }
       function resizePreview8() {
        $('#output').css('height', '200px')
        $('iframe').css('overflow', 'break-word')
        $('iframe').css('wordwrap', 'break-word')
           $('iframe').css('height', '720px')
           $('iframe').css('width', '540px')
           $('iframe').css('wordwrap', 'break-word')
           $('#deviceName').text(" Surface Duo")
        console.log("resize Surface Duo")
       }
       function resizePreview9() {
        $('#output').css('height', '280px')
        $('iframe').css('overflow', 'break-word')
        $('iframe').css('wordwrap', 'break-word')
           $('iframe').css('height', '653px')
           $('iframe').css('width', '280px')
           $('iframe').css('wordwrap', 'break-word')
           $('#deviceName').text(" Galaxy Fold")
        console.log("resize Galaxy Fold")
       }
       function resizePreview10() {
        $('#output').css('height', '1080px')
        $('iframe').css('overflow', 'break-word')
        $('iframe').css('wordwrap', 'break-word')
           $('iframe').css('height', '1080px')
           $('iframe').css('width', '1920px')
           $('iframe').css('wordwrap', 'break-word')
           $('#deviceName').text(" 1920x1080")
        console.log(" 1920x1080")
       }
       function resizePreview11() {
        $('#output').css('height', '1080px')
        $('iframe').css('overflow', 'break-word')
        $('iframe').css('wordwrap', 'break-word')
           $('iframe').css('height', '800px')
           $('iframe').css('width', '1280px')
           $('iframe').css('wordwrap', 'break-word')
           $('#deviceName').text(" 1200x800 (13-inch)")
        console.log(" 13 inch")
       }


       resizePreview11()

          
