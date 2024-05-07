



let lastClicked = null;
let results = [];
let nextButton = document.getElementById("nextButton");
results = JSON.parse(localStorage.getItem("results")) || [];
let emailList = []

//localStorage.clear();


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
        results.push(lastClicked.getAttribute("id"));
        localStorage.setItem("results", JSON.stringify(results));
    } else {
        console.log("No button has been clicked yet.");
    }
};

function removeResults(event) {
    if (results.length === 0) {
        console.log("No results to remove.");
        return; // Exit early if there are no results to remove
    }
    
    results.pop(); // Remove the last item from the results array
    
    // Update local storage
    localStorage.setItem("results", JSON.stringify(results));
    
    console.log("Last result removed.");
};

function restart(event) {
    localStorage.removeItem("results");
};




let questionTexts = document.querySelectorAll(".question");
let images = document.querySelectorAll(".question-img-container img");

images.forEach((image, index) => {
    let questionText = questionTexts[index].textContent;
    image.src = `./resources/${questionText.trim()}.png`;
});




let currentArray = results.length;
function progress() {
    let totalQuestions = 22; // Total number of questions
    let progressWidth = (currentArray / totalQuestions) * 100; // Calculate progress as a percentage
    let myBar = document.getElementById("myBar");
    myBar.style.width = `${progressWidth}%`;
}

document.addEventListener("DOMContentLoaded", function() {
    progress();
});



//question outcomes
    
function displayResults(arr) { 
    let candidate = null; 
    let count = 0; 
    for (let num of arr) { 
        if (count === 0) { 
            candidate = num; 
        } 
        count += (num === candidate) 
            ? 1 : -1; 
    } 
    return candidate; 
} 
console.log(displayResults(results));  
console.log(results);

function resultsReveal(event) {
    if (nextButton.hasAttribute("disabled") || currentArray < 21) {
        event.preventDefault();
    }
    if (lastClicked !== null) {
        results.push(lastClicked.getAttribute("id"));
        localStorage.setItem("results", JSON.stringify(results));
    } else {
        console.log("No button has been clicked yet.");
    }
    };



let input = document.querySelector(".input")
let enterButton = document.querySelector(".enter-button")

function enter(event) {
    if (input.value.trim() === "" || (!input.value.includes("@") && !input.value.includes("."))) {
        event.preventDefault();
        enterButton.setAttribute("disabled", "disabled");}
        else {
            enterButton.removeAttribute("disabled");
        }
        email = document.querySelector(".input").value;
        emailList.push(email);  
        localStorage.setItem("emails", JSON.stringify(emailList));
};


