//let printResults = document.querySelector(".results");

//function printStorage() {
//    return JSON.parse(localStorage.getItem("resultList")) || {};
//}

//let resultMap = printStorage(); 

//console.log(printStorage());

//printResults.textContent = JSON.stringify(resultMap);


//printResults.forEach(resultElement => {
  //  let email = resultMap[email]; 
    //let results = resultMap[results]; 
    //if (results) {
      //  resultElement.textContent = JSON.stringify(results); // Display results as JSON string
    //} else {
      //  resultElement.textContent = "No results found for this email"; // Display a message if no results found
    //}
//});


let printResults = document.querySelectorAll(".results");

function printStorage() {
    return JSON.parse(localStorage.getItem("resultList")) || {}; // Return an empty object if "resultList" doesn't exist
}

let resultMap = printStorage(); // Retrieve the resultMap from local storage

console.log(printStorage());

// Iterate through the resultMap object and format entries for display
let output = "";
for (let email in resultMap) {
    if (resultMap.hasOwnProperty(email)) {
        let results = resultMap[email];
        output += `${email}: ${JSON.stringify(results)}\n <br>`;
    }
}

// Set the text content of all .results elements to the formatted output
printResults.forEach(resultElement => {
    resultElement.innerHTML = output;
});