//get local storage
//then clear local storage
//if local storage = x populate title and content

let getResults = JSON.parse(localStorage.getItem("results")) || [];

let resultObjs = {
"a": "Not really aware...",
"b": "Know what I need, unsure of path...",
"c": "Know what I need, avoiding it...",
"d": "Crystal clear on needs..."
}

let resultContentObjs = {
"a": "Not really aware...",
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


let key = displayResults(results);


resultTitle.forEach((titleElement, index) => {
    titleElement.textContent = resultObjs[key];
});

resultContent.forEach((contentElement, index) => {
    contentElement.textContent = resultContentObjs[key];
});

localStorage.clear();