let currentQuestionIndex = parseInt(localStorage.getItem("currentQuestionIndex")) || 0;


function start() {
    if (currentQuestionIndex === 17) {
        currentQuestionIndex = 0;
        // If you also want to clear the results array in localStorage, you should call clear as a function
        localStorage.clear();
    }
}

// Attach the start function to a button click or call it as needed
document.getElementById("startButton").addEventListener("click", start);
