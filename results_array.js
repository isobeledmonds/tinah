//get local storage
//then clear local storage
//if local storage = x populate title and content

let getResults = JSON.parse(localStorage.getItem("results")) || [];

let resultObjs = {
"a": "Sounds like you don’t know where to start?",
"b": "Sounds like you want to make some changes, but don’t know which path is best for you?",
"c": "Sounds like you are so ready to take some positive steps to improving your mental wellbeing? It’s time to take that first step!",
"d": "Yay congratulations - Sounds like you are already working on improving your mental wellbeing!"
}

let resultContentObjs = {
"a": "<p>It sounds like maybe you’re feeling unsure of where to begin to help yourself. This could be a sign you subconsciously feel overwhelmed or disconnected from your own needs. This may be because of a lack of awareness of your personal mental and emotional state, or you have shut off your emotions  over time because they felt too much to handle.</p>",
"b": "Know what I need, unsure of path...",
"c": "Know what I need, avoiding it...",
"d": "Crystal clear on needs..."
}


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


console.log("Results:", results);


let index = displayResults(results);


resultTitle.forEach((titleElement, index) => {
    titleElement.textContent = resultObjs[index];
});

resultContent.forEach((contentElement, index) => {
    contentElement.innerHTML = resultContentObjs[index];
});

function saveResults() {
    let resultMap = {};
    for (let i = 0; i < emailList.length; i++) {
        let email = emailList[i];
        resultMap[email] = results;
    }
    localStorage.setItem("resultList", JSON.stringify(resultMap));
    localStorage.removeItem("results");
    localStorage.removeItem("emailList");
    console.log(resultMap);
}


