// Declare variables below to save the different divs of your story.
let opening = document.querySelector(".story-opening");
let layout = document.querySelector("body");

let button1 = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");

let option1 = document.querySelector(".option-one-screen");
let option2 = document.querySelector(".option-two-screen");

let option1End = document.querySelector(".option-one-end");
let option2End = document.querySelector(".option-two-end");
// When you're ready to make event handlers, uncomment the code below.
//  - Then fill in the blanks with the correct variables.

option1.style.display = "none";
option2.style.display = "none";
option1End.style.display = "none";
option2End.style.display = "none";

button1.addEventListener("click",
    function () {
        opening.style.display = "none";
        option2.style.display = "none";
        option1.style.display = "block";
    });

button2.addEventListener("click",
    function () {
        opening.style.display = "none";
        option1.style.display = "none";
        option2.style.display = "block";
    });


// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){
//layout.addEventListener("mouseover",
//  function () {
//      body.style.backgroundColor = "black";
//      body.style.fontColor = "white";
//   });

//layout.addEventListener("mouseout",
//  function () {
//     body.style.backgroundColor = "white";
//     body.style.fontColor = "black";
//  });
