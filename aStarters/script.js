document.addEventListener('DOMContentLoaded', () => {
    elementToGrab().onclick = function() {
        // Code that should run 
     };

// select the first h1 element
const h1 = document.querySelector();
// select the element with the id of company-name
const companyName = document.querySelector();
// select the element with the class of sales-pitch
const salesPitch = document.querySelector();
// select all paragraph tags
const allParagraphTags = document.querySelectorAll();
// select all elements inside of the advertisement div
const allAdvertisementContent = document.querySelectorAll();


const h1ID = document.querySelector('h1').getAttribute('id');
// This would store the ID attribute of the <h1> in the variable called h1ID.
//Add a class to an element!!!

document.querySelector('#title').setAttribute('class', 'blue');
// This would give the element with the ID of "title" a class of "blue."

document.querySelectorAll('p').removeAttribute('class');
// This would remove the class attribute from all <p> elements.

const paragraph = document.createElement('p');
paragraph.innerText = "Your passwords did not match.";
paragraph.setAttribute("class", "registration-error");
//create a NEW element


//Adding a new div into the page itself!
// First, we create the element and store it in a variable named newPost
const newPost = document.createElement("p");
// Then, we can set properties such as the innerText
newPost.innerText = "JavaScript can be tough!";
// Then, we can grab the parent element that we want to attach our new element to
const postsDiv = document.querySelector("#posts");
// Finally, we use the appendChild method to add our newPost inside of the postsDiv
postsDiv.appendChild(newPost);