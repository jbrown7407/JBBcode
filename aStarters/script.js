$(document).ready(function(){
    let cl = (value) => console.log(value);
    cl("Jquery Active")
    
    const $div = $('<div>')
    $($div).addClass('title')
    $('body').append($div)
    $($div).text("This is the first div title")
   // $($div).style.color("blue")
//JQUERY HERE


   
})