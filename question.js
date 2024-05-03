


let lastClicked = null;

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
    }



let results = []

