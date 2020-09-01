let image = document.querySelector("#kitten")

image.onclick = toggleClass;

function toggleClass(){
 if(image.className == 'image'){
     image.className = ''
 } else {
     image.className = 'image'
 }
}
