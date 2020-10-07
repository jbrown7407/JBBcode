//CREATE NEW FILE CODE





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
function resizePreview() {
 console.log("resoze button active")
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
      


  
  $(function() {  //JQUERY

let cl = (value) => {console.log(value)}

    
    const $fileName = document.getElementsByClassName("fileName")
    const $phase2 = document.getElementsByClassName("phase2")

  const $phase1 = document.getElementsByClassName("phase1")
  $("#btn2").hide()


 
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
        


const list = [];

const render = () => {
    console.log('list: ', list);

    // We can't replace the whole unordered list, because we may have
    // changed some CSS in its items

    //  $('ul').empty();
    //  for (const item of list) {
    //      $('ul').append('<li>' + item + '</li>');
    //  }

    // So instead we just add the last list item
    const $listItem = $('<li>');
    $listItem.text(list[list.length - 1]);
    $('ul').append($listItem);

// ADD TRASH CAN AND APPEND TO $listItem **********
     const $trashCan = $('<span>');
    $trashCan.text("TRASH");
    $($listItem).append($trashCan);

    // Add a click listener to each list item that adds a strike-through
    $('li').on('click', (event) => {
        $(event.currentTarget).css('text-decoration', 'line-through');
        $(event.currentTarget).effect('shake');
    });
};

// $('#submit-btn').on('click', () => {  // without using a form
$('form').on('submit', (event) => {
    const value = $('#input-box').val();

    list.push(value);
    event.preventDefault;//prevent reload

    // $('#input-box').val('');  // without using a form
    $(event.currentTarget).trigger('reset');
    event.preventDefault();

    render();
});


          })})
