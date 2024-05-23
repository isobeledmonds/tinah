

let input = document.querySelector(".input")
let enterButton = document.querySelector(".enter-button")
let emailList = [];
let results = JSON.parse(localStorage.getItem("results")) || [];

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
};
