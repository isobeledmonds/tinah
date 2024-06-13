let input = document.querySelector(".input");
let enterButton = document.querySelector(".enter-button");
let emailList = JSON.parse(localStorage.getItem("emails")) || [];
let results = JSON.parse(localStorage.getItem("results")) || [];
let finalResult = JSON.parse(localStorage.getItem("finalResult")) || [];

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
        const response = await fetch('http://localhost:4000/refresh-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            // Update tokens in localStorage or your preferred storage
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            return data.accessToken;
        } else {
            const errorText = await response.text();
            console.error('Error refreshing token:', errorText);
            alert('Error refreshing token: ' + errorText);
            throw new Error('Token refresh failed');
        }
    } catch (error) {
        console.error('Error refreshing token:', error);
        alert('Error refreshing token');
        throw error;
    }
}

async function submitData() {
    let email = input.value;
    let resultsList = JSON.parse(localStorage.getItem("resultList")) || {};
    let finalResult = JSON.parse(localStorage.getItem("finalResult"));
    console.log(finalResult);
   

    if (resultsList.hasOwnProperty(email)) {
        resultsList[email].finalResult = finalResult;
    } else {
        // Optionally handle the case where the email is not found in resultsList
        console.error("Email not found in resultsList");
    }
    
    // Save the updated resultsList back to localStorage
    localStorage.setItem("resultList", JSON.stringify(resultsList));

    // Check structure in the console
    console.log("resultsList to be submitted:", JSON.stringify(resultsList, null, 2));

    if (validateEmail(email)) {
        try {
            let accessToken = localStorage.getItem('accessToken');

            // Check if the access token is expired and refresh if necessary
            if (!accessToken) {
                accessToken = await refreshToken();
            }

            const response = await fetch('http://localhost:4000/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({ resultsList }), // Include finalResult if necessary
            });

            if (response.ok) {
                window.location.href = './results.html';
            } else if (response.status === 401) { // Unauthorized, try refreshing token
                accessToken = await refreshToken();
                const retryResponse = await fetch('http://localhost:4000/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                    body: JSON.stringify({ resultsList }), // Include finalResult if necessary
                });

                if (retryResponse.ok) {
                    window.location.href = './results.html';
                } else {
                    const errorText = await retryResponse.text();
                    console.error('Error submitting data after refresh:', errorText);
                    alert('Error submitting data after refresh: ' + errorText);
                }
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


//function decreaseIndex() {
 //   currentQuestionIndex--;
 //   console.log("Current Question Index:", currentQuestionIndex);
//}

// Event listener for the browser back button
//window.addEventListener('popstate', function(event) {
//    decreaseIndex();
//});



 // Verify if the final result is stored correctly
 let storedFinalResult = JSON.parse(localStorage.getItem("finalResult"));
 console.log("Stored final result in localStorage:", storedFinalResult);
