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
    let cssCode = "<style>"+document.querySelector(".editor #css").value+"</style>";
  //  let jsCode = document.querySelector(".editor #js").value;
    let output = document.querySelector("#output"); // Store output div as variable
    output.contentDocument.body.innerHTML = htmlCode+cssCode; //Link to CSS + HTML
  //  output.contentWindow.eval(jsCode);    //Link to in-editor script
  }


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
  $("#btn1").click(function fullScreen(){ //Full Screen
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
 

    
      function resizePreview() {
        // $(event.currentTarget).css('color', '100%')
        $('#output').css('height', '200px')
        $('#output').css('width', '200px')
        $('iframe').css('height', '200px')
        $('iframe').css('width', '200px')
        $('iframe').css('wordwrap', 'normal')
        $('iframe').css('scroll', 'no')
        $('iframe').css('overflow', 'auto')
        // $('iframe').css('scrolling","no") 
        // $('iframe').css("overflow', 'hidden')
        //  $('body').css('height', '200px')
        //  $('body').css('width', '200px')
       
         console.log("resoze button active")
      }
      function resizePreview1() {
        console.log("resoze button active")
        $($phase2).css('height', '200px')
        $($phase2).css('width', '200px')
       }
       function resizePreview2() {
        $($phase2).css('height', '400px')
        $($phase2).css('width', '400px')
        console.log("resize button active")
       }
       function resizePreview3() {
        console.log("resize button active")
       }
       function resizePreview4() {
        console.log("resoze button active")
       }
       function resizePreview5() {
        console.log("resoze button active")
       }
       function resizePreview6() {
        console.log("resoze button active")
       }
       function resizePreview7() {
        console.log("resize button active")
       }
       function resizePreview8() {
        console.log("resize button active")
       }
       function resizePreview9() {
        console.log("resize button active")
       }
      
      {/* <button class="dropper" type="button" onClick="resizePreview()" > Galaxy S5 </button> 
      <button class="dropper" type="button" onClick="resizePreview1()" > Pixel 2 </button>
      <button class="dropper" type="button" onClick="resizePreview2()" > Pixel 2 XL </button>
      <button class="dropper" type="button" onClick="resizePreview3()" > iPhone 6/7/8 </button>
      <button class="dropper" type="button" onClick="resizePreview4()" > iPhone6/7/8 Plus </button>
      <button class="dropper" type="button" onClick="resizePreview5()" > iPhone X </button>
      <button class="dropper" type="button" onClick="resizePreview6()" > iPad </button>
      <button class="dropper" type="button" onClick="resizePreview7()" > iPad Pro </button>
      <button class="dropper" type="button" onClick="resizePreview8()" > Surface Duo </button>
      <button class="dropper" type="button" onClick="resizePreview9()" > Galaxy Pro </button> */}


  

          
