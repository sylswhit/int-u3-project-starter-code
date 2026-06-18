// Declare variables below to save the different divs of your story.
let opening = document.querySelector(".story-opening");
let openingText = document.querySelector("h1");
let buttons = document.querySelector("button");

let button1 = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");
let endButton = document.querySelector(".end-game");

let option1 = document.querySelector(".option-one-screen");
let option2 = document.querySelector(".option-two-screen");

let option1End = document.querySelector(".option-one-end");
let option2End = document.querySelector(".option-two-end");

let button1Clicked = false;
let button2Clicked = false;
// When you're ready to make event handlers, uncomment the code below.
//  - Then fill in the blanks with the correct variables.

option1.style.display = "none";
option2.style.display = "none";
option1End.style.display = "none";
option2End.style.display = "none";

button1.addEventListener("click",
    function () {
        if (!button1Clicked) {
            opening.style.display = "none";
            option2.style.display = "none";
            option1.style.display = "block";

            button1.innerHTML = "Continue down the hallway?";
            button2.innerHTML = "Quickly check out the area?";

            button1Clicked = true;
        }
        else {
            option1.style.display = "none";
            option2.style.display = "none";
            option1End.style.display = "block";
            button1.style.display = "none";
            button2.style.display = "none";
        }
    });

button2.addEventListener("click",
    function () {
        if (!button2Clicked) {
            opening.style.display = "none";
            option1.style.display = "none";
            option2.style.display = "block";

            button1.innerHTML = "Hide from the librarian?";
            button2.innerHTML = "Run away?";

            button2Clicked = true;
        }
        else {
            option2.style.display = "none";
            option2End.style.display = "block";
            button1.style.display = "none";
            button2.style.display = "none";
        }
    });

endButton.addEventListener("click",
    function () {
        button1Clicked = false;
        button2Clicked = false;

        option1.style.display = "none";
        option2.style.display = "none";
        option1End.style.display = "none";
        option2End.style.display = "none";

        opening.style.display = "block";

        button1.style.display = "block";
        button2.style.display = "block";
        button1.style.justifyContent = "center";
        button2.style.justifyContent = "center";

        button1.innerHTML = "No, move on.";
        button2.innerHTML = "Follow the book's recommended path.";
    });

endButton.addEventListener("mouseover",
    function () {
        buttons.style.background = "black";
        buttons.style.fontColor = "white";

        opening.style.background = "black";
        openingText.style.fontColor = "white";
    });

endButton.addEventListener("mouseout",
    function () {
        buttons.style.background = "#007bff";
        buttons.style.fontColor = "white";

        opening.style.background = "white";
        openingText.style.fontColor = "black";
    });
// });

