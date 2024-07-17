let input = document.querySelector(".input");
let enterButton = document.querySelector(".enter-button");
let firstNameInput = document.querySelector(".first");
let lastNameInput = document.querySelector(".last");
let emailList = JSON.parse(localStorage.getItem("emails")) || [];
let results = JSON.parse(localStorage.getItem("results")) || [];
let finalResults = JSON.parse(localStorage.getItem("finalResults")) || {}; // Store final results for each email
const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://tinah-quiz.netlify.app/.netlify/functions';

function validateEmail(email) {
    return email.trim() !== "" && email.includes("@") && email.includes(".");
}

function validateFirstName(first) {
    return first.trim() !== "";
}

function enter() {
    let email = input.value;
    let first = firstNameInput.value;
    let last = lastNameInput.value;
    let isEmailValid = validateEmail(email);
    let isFirstNameValid = validateFirstName(first);
    
    console.log("Email valid:", isEmailValid, "First name valid:", isFirstNameValid); // Debugging line

    if (isEmailValid && isFirstNameValid) {
        enterButton.removeAttribute("disabled");
        if (!emailList.includes(email)) {
            emailList.push(email);
            localStorage.setItem("emails", JSON.stringify(emailList));
            localStorage.setItem("firstName", first);
            localStorage.setItem("lastName", last);
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

function calculateFinalResult(results) {
    return displayResults(results); // Using displayResults function to determine the final result
}

function saveResults() {
    let resultMap = JSON.parse(localStorage.getItem("resultList")) || {};
    let first = localStorage.getItem("firstName");
    let last = localStorage.getItem("lastName");

    emailList.forEach(email => {
        console.log('Processing email:', email);

        // Ensure final result is calculated for each email
        finalResults[email] = calculateFinalResult(results);
        console.log('Calculated final result for', email, ':', finalResults[email]);

        resultMap[email] = {
            firstName: first,
            lastName: last,
            email: email,
            results: results,
            finalResult: finalResults[email] || '' // Ensure finalResult is set for each email
        };

        console.log('Updated resultMap entry:', resultMap[email]);
    });

    localStorage.setItem("resultList", JSON.stringify(resultMap));
    localStorage.setItem("finalResults", JSON.stringify(finalResults)); // Store finalResults in localStorage
    console.log('Final resultMap:', resultMap);
}

async function submitData() {
    let email = input.value;
    let first = firstNameInput.value;
    let isFirstNameValid = validateFirstName(first);

    if (!isFirstNameValid) {
        alert("Please enter your first name.");
        return;
    }

    let resultsList = JSON.parse(localStorage.getItem("resultList")) || {};

    console.log("Submitting resultsList:", JSON.stringify(resultsList));

    if (validateEmail(email) && isFirstNameValid) {
        try {
            const response = await fetch(`${API_BASE_URL}/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ resultsList }), // Send resultsList to the server
            });

            if (response.ok) {
                window.location.href('./results.html'); // Open results.html in a new tab
            } else {
                const errorText = await response.text();
                console.error('Error submitting data:', errorText);
                alert('Error submitting data: ' + errorText);
            }
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('Error submitting data');
        }
    } else {
        alert("Please ensure all fields are filled out correctly.");
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
    // Calculate and store final results for each email
    emailList.forEach(email => {
        finalResults[email] = calculateFinalResult(getResults);
        console.log("Calculated final result for", email, ":", finalResults[email]);
    });

    // Store the final results in localStorage
    localStorage.setItem("finalResults", JSON.stringify(finalResults));
    console.log("Stored final results in localStorage:", finalResults);
}

// Verify if the final result is stored correctly
let storedFinalResults = JSON.parse(localStorage.getItem("finalResults"));
console.log("Stored final results in localStorage:", storedFinalResults);