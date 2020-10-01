//CREATE NEW FILE CODE
/*
let newFile() {
  console.log("newFile")
}
document.getElementById('#newFile').addEventListener('click', newFile() => {

  
}
*/




/*
let function renameFile() {
     let rename = document.querySelector(".nav #fileName").innerHTML;
  
//document.getElementById('button')
//class="new"
console.log("renameFile called")
}
*/
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



////SAVE FILE CODE
/*function saveFile() {
const downloadToFile = (content, filename, contentType) => {
  const a = document.createElement('a');
  const file = new Blob([content], {type: contentType});
  a.href= URL.createObjectURL(file);
  a.download = filename;
  a.click();
    URL.revokeObjectURL(a.href);
};
document.querySelector('#btnSave').addEventListener('click', () => {
  const textArea = document.querySelector('textarea');
  downloadToFile(textArea.value, 'my-new-file.txt', 'text/plain');
});
}
*/





/*
  For custom clear and execute shortcuts Ctrl-Enter and Ctrl-I
 function kbd(e){
  if (e.key === "i") html.clear();
  if (e.key === "Enter") eval(editor.getValue());
}

window.addEventListener('keydown', function (e) {
  if (e.key === "Control") window.addEventListener('keydown', kbd);
});
window.addEventListener('keyup', function (e) {
  if(e.key === "Control") window.removeEventListener('keydown', kbd);
})
// For phones and devices without a control key
$("[action]").get(0).addEventListener('click', function (){ eval(editor.getValue()); });
$("[action]").get(1).addEventListener('click', function (){ html.clear(); });
*/
