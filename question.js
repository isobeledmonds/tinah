


let lastClicked = null;
let results = [];
let nextButton = document.getElementById("nextButton");

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

        // Update the lastClicked variable
        lastClicked = currentButton;

        // Enable or disable the next button based on whether any button has been clicked
        nextButton.removeAttribute("disabled");

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





