



let lastClicked = null;
var results = [];
let nextButton = document.getElementById("nextButton");


results = JSON.stringify(results)

localStorage.setItem("results", results)
//localStorage.setItem("results", JSON.stringify(results));


//var storedResults = JSON.parse(localStorage.getItem("results"));


function handleButtonClick(buttonId, currentButton) {
    // Remove 'clicked' class from previously clicked button
    if (lastClicked !== null) {
        lastClicked.classList.remove("clicked");
    }
    
    // Disable previously clicked button
    if (lastClicked !== null) {
        lastClicked.disabled = false;
    }

    // Disable the current button
    currentButton.disabled = true;

    // Add 'clicked' class to the current button
    currentButton.classList.add("clicked");

    // Enable or disable the next button based on whether any button has been clicked
    nextButton.removeAttribute("disabled");

    // Update the lastClicked variable after all operations related to current button click
    lastClicked = currentButton;
}


function logResults(event) {
    if (nextButton.hasAttribute("disabled")) {
    event.preventDefault();
    }
    if (lastClicked !== null) {
        results.push(lastClicked.getAttribute("id"));; // Push the buttonId to results array
        console.log("Results:", results);
    } else {
        console.log("No button has been clicked yet.");
    }
}

let question = document.querySelectorAll(".question");  
let questionNumber = 0; // Initialize questionNumber outside the loop

function progress() {
    
    question.forEach((questionElement) => {
        let number = parseInt(questionElement.textContent);
        if (!isNaN(number) && number >= 1) {
            questionNumber = number; // Update questionNumber inside the loop
        }
    });
    let progressWidth = (questionNumber) * 4.54545454545;
    let myBar = document.getElementById("myBar");
    myBar.style.width = `${progressWidth}%`;
};

document.addEventListener("DOMContentLoaded", function() {
    progress();
});



//function progress () {
 //   let currentArray = results.length;
 //   let progressWidth = currentArray * 5;
   // let myBar = document.getElementById("myBar");
    //myBar.style.width = `${progressWidth}%`;
//}

//document.addEventListener("DOMContentLoaded", function() {
  //  progress();
//});



