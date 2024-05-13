



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
    if (nextButton.hasAttribute("disabled") || currentArray < 16) {
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




//let results = []; 
//let emailList = [];

let getResults = JSON.parse(localStorage.getItem("results")) || [];

let resultObjs = {
    "a": "Sounds like you don’t know where to start?",
    "b": "Sounds like you want to make some changes, but don’t know which path is best for you?",
    "c": "Sounds like you are so ready to take some positive steps to improving your mental wellbeing? It’s time to take that first step!",
    "d": "Yay congratulations - Sounds like you are already working on improving your mental wellbeing!"
};

let resultContentObjs = {
    "a": "<p>It sounds like maybe you’re feeling unsure of where to begin to help yourself. This could be a sign you subconsciously feel overwhelmed or disconnected from your own needs. This may be because of a lack of awareness of your personal mental and emotional state, or you have shut off your emotions  over time because they felt too much to handle.</p>",
    "b": "Know what I need, unsure of path...",
    "c": "Know what I need, avoiding it...",
    "d": "Crystal clear on needs..."
};

let resultTitle = document.querySelectorAll(".healing-style-title");
let resultContent = document.querySelectorAll(".healing-style-content");

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

console.log("Results:", getResults);

let key = displayResults(getResults);

resultTitle.forEach((titleElement, index) => {
    titleElement.innerHTML = resultObjs[key];
});

resultContent.forEach((contentElement, index) => {
    contentElement.innerHTML = resultContentObjs[key];
});


//function saveResults() {
//    let resultMap = {};
  //  for (let i = 0; i < emailList.length; i++) {
   //     let email = emailList[i];
   //     resultMap[email] = results;
   // }

  //  localStorage.setItem("resultList", JSON.stringify(resultMap));
  //  console.log(resultMap);
//}


function saveResults() {
    // Retrieve existing resultMap from localStorage, if any
    let resultMap = JSON.parse(localStorage.getItem("resultList")) || {};

    // Iterate through emailList and update resultMap
    for (let i = 0; i < emailList.length; i++) {
        let email = emailList[i];
        if (resultMap.hasOwnProperty(email)) {
            // Email already exists, update results
            resultMap[email] = results;
        } else {
            // Email doesn't exist, add new entry
            resultMap[email] = results;
        }
    }

    // Save updated resultMap to localStorage
    localStorage.setItem("resultList", JSON.stringify(resultMap));

    console.log(resultMap);
}

