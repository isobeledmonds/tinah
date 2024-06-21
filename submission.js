let input = document.querySelector(".input");
let enterButton = document.querySelector(".enter-button");
let emailList = JSON.parse(localStorage.getItem("emails")) || [];
let results = JSON.parse(localStorage.getItem("results")) || [];
let finalResult = JSON.parse(localStorage.getItem("finalResult")) || [];
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
        resultMap[email] = {
            results: results,
            finalResult: finalResult[email] || '' // Ensure finalResult is set for each email
        };
    });

    localStorage.setItem("resultList", JSON.stringify(resultMap));
    console.log(resultMap);
}

async function refreshToken() {
    try {
        const response = await fetch(`${API_BASE_URL}/refresh-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            // Store the new tokens in localStorage
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            return data.accessToken;
        } else {
            const errorText = await response.text();
            console.error('Error refreshing token:', errorText);
            throw new Error('Token refresh failed');
        }
    } catch (error) {
        console.error('Error refreshing token:', error);
        throw error;
    }
}

async function makeAuthenticatedRequest(url, options = {}) {
    let accessToken = localStorage.getItem('accessToken');

    // If no access token, try refreshing it
    if (!accessToken) {
        accessToken = await refreshToken();
    }

    // Add the access token to the request headers
    options.headers = {
        ...options.headers,
        'Authorization': `Bearer ${accessToken}`,
    };

    let response = await fetch(url, options);

    // If the response indicates the token is expired, try refreshing the token
    if (response.status === 401) {
        accessToken = await refreshToken();
        options.headers['Authorization'] = `Bearer ${accessToken}`;
        response = await fetch(url, options);
    }

    return response;
}


async function submitData() {
    let email = input.value;
    let resultsList = JSON.parse(localStorage.getItem("resultList")) || {};

    console.log("Submitting resultsList:", JSON.stringify(resultsList));

    if (validateEmail(email)) {
        try {
            const response = await makeAuthenticatedRequest(`${API_BASE_URL}/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ resultsList }), // Include finalResult if necessary
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

    // Verify if the final result is stored correctly
    let storedFinalResult = localStorage.getItem("finalResult");
    console.log("Stored final result in localStorage:", storedFinalResult);
}

 // Verify if the final result is stored correctly
 let storedFinalResult = localStorage.getItem("finalResult");
 console.log("Stored final result in localStorage:", storedFinalResult);


