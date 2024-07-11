
  // Load the Google API client library
  gapi.load('client', initClient);

  // Initialize the Google API client
  function initClient() {
    // Load the GCS client library
    gapi.client.load('storage', 'v1', function() {
      // Your initialization code goes here
      console.log('Google Cloud Storage client loaded');
  
      // Call the function to create the bucket after the client library has been loaded
      createBucket('Participant_Details');
    });
  }
  
  function createBucket(bucketName) {
    var request = gapi.client.storage.buckets.insert({
      'project': 'tinah quiz',
      'resource': {
        'name': bucketName
      }
    });
  
    request.execute(function(response) {
      console.log('Bucket created:', response);
    });
  }
  


  //function uploadObject(bucketName, objectName, file) {
  //  var reader = new FileReader();
   // reader.readAsDataURL(file);
   // reader.onload = function(e) {
   ///   var requestData = {
   //     'bucket': ParticipantDetails,
   //     'name': objectName,
   //     'uploadType': 'media',
   //     'body': e.target.result
   //   };
  
   //   var request = gapi.client.storage.objects.insert(requestData);
  
   //   request.execute(function(response) {
   //     console.log('Object uploaded:', response);
    //  });
   // };
 // }



  // Example usage:
//var files = [/* Array of File objects to upload */];
//var bucketName = 'YOUR_BUCKET_NAME';

//files.forEach(function(file, index) {
//  var objectName = 'file_' + index + '.txt'; // Example object name
//  uploadObject(bucketName, objectName, file);
//});












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





function fetchResultsFromGCS() {
    // Make API request to fetch data from Google Cloud Storage
    // Replace 'YOUR_BUCKET_NAME' with your actual GCS bucket name and 'resultList.json' with the name of the file containing your results
    return gapi.client.storage.objects.get({
      'bucket': 'Participant_Details',
      'object': 'resultList.json'
    }).then(function(response) {
      return response.result; // Return the retrieved data
    }, function(error) {
      console.error('Error fetching results from Google Cloud Storage:', error);
      return null; // Return null in case of error
    });
  }
  
  async function printStorageFromGCS() {
    let resultMap = await fetchResultsFromGCS(); // Retrieve the resultMap from Google Cloud Storage
  
    if (resultMap) {
      console.log(resultMap); // Log the retrieved data
  
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
    } else {
      // Handle case where data couldn't be fetched from Google Cloud Storage
      console.log('No data fetched from Google Cloud Storage');
    }
  }
  
  // Call the function to print results from Google Cloud Storage
  printStorageFromGCS();
  