let input = document.querySelector(".input");
let enterButton = document.querySelector(".enter-button");
let emailList = JSON.parse(localStorage.getItem("emails")) || [];
let results = JSON.parse(localStorage.getItem("results")) || [];
let storedFinalResult = localStorage.getItem("finalResult") || '';
const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://tinah-quiz.netlify.app/.netlify/functions';

function validateEmail(email) {
    return email.trim() !== "" && email.includes("@") && email.includes(".");
}

function enter() {
    let email = input.value;
    let isValid = validateEmail(email);
    if (isValid) {
        enterButton.removeAttribute("disabled");
        if (!emailList.includes(email)) {
            emailList.push(email);
            localStorage.setItem("emails", JSON.stringify(emailList));
        }
    } else {
        enterButton.setAttribute("disabled", "disabled");
    }
}

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        enterButton.click();
    }
});

function saveResults() {
    let resultMap = JSON.parse(localStorage.getItem("resultList")) || {};

    emailList.forEach(email => {
        console.log('Processing email:', email);

        resultMap[email] = {
            results: results,
            finalResult: storedFinalResult || '' // Use storedFinalResult for each email
        };

        console.log('Updated resultMap entry:', resultMap[email]);
    });

    localStorage.setItem("resultList", JSON.stringify(resultMap));
    console.log('Final resultMap:', resultMap);
}

async function submitData() {
    let email = input.value;
    let resultsList = JSON.parse(localStorage.getItem("resultList")) || {};

    console.log("Submitting resultsList:", JSON.stringify(resultsList));

    if (validateEmail(email)) {
        try {
            const response = await fetch(`${API_BASE_URL}/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ resultsList }), // Send resultsList to the server
            });

            if (response.ok) {
                window.location.href = './results.html';
            } else {
                const errorText = await response.text();
                console.error('Error submitting data:', errorText);
                alert('Error submitting data: ' + errorText);
            }
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('Error submitting data');
        }
    }
}

enterButton.addEventListener('click', function(event) {
    event.preventDefault();
    enter();
    saveResults();
    submitData(); // Submit data to the server
});

function restart(event) {
    localStorage.clear();
}

// Function to find the candidate with the majority vote
function displayResults(arr) { 
    let candidate = null; 
    let count = 0; 
    for (let num of arr) { 
        if (count === 0) { 
            candidate = num; 
        } 
        count += (num === candidate) ? 1 : -1; 
    } 
    return candidate; 
}

// Retrieve and parse the 'results' item from localStorage
let getResults = JSON.parse(localStorage.getItem("results"));
console.log("Retrieved results from localStorage:", getResults);

// Check if getResults is valid
if (!Array.isArray(getResults)) {
    console.error("Invalid results in localStorage");
} else {
    // Determine the final result
    let finalResult = displayResults(getResults);
    console.log("Calculated final result:", finalResult);

    // Store the final result in localStorage
    localStorage.setItem("finalResult", JSON.stringify(finalResult));

    // Update storedFinalResult
    storedFinalResult = finalResult;

    // Verify if the final result is stored correctly
    console.log("Stored final result in localStorage:", storedFinalResult);
}

// Verify if the final result is stored correctly
storedFinalResult = localStorage.getItem("finalResult");
console.log("Stored final result in localStorage:", storedFinalResult);