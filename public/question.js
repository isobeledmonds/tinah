

let lastClicked = null;
let results = JSON.parse(localStorage.getItem("results")) || [];
let nextButton = document.getElementById("nextButton");
let currentQuestionIndex = parseInt(localStorage.getItem("currentQuestionIndex")) || 0;
const totalQuestions = 17; // Total number of questions
let backButton = document.getElementById("backButton");

// Arrays and objects containing questions and answers (assuming these are defined elsewhere)
let questionArray = [
    "You've had a rough day at work.<br> What helps you unwind best?",
    "Things have been piling up lately, and you're starting to feel totally overwhelmed. <br>What's your typical reaction?",
    "Ugh, those negative thoughts about yourself are creeping in again. <br>What do you usually do?",
    "You got into a conflict with a friend/partner/family member/colleague. <br>How do you typically handle it?",
    "It's been one of those weeks where you just can't find the motivation to do anything. What's your go-to?",
    "You're feeling really stressed out.  What's your first instinct for getting some relief?",
    "Things have been really tough lately. Who or what do you turn to first for support?",
    "Ever find yourself comparing your life to what you see on social media? How does it make you feel?",
    "How's your sleep been lately?",
    "Someone asks you for last-minute favors that disrupt your plans. <br>How do you typically respond?",
    "Pay attention to your inner voice. Is it mostly…",
    "You've been in the same job for a while now, and it's just not fulfilling you or maybe it’s making you miserable. Do you...",
    "You're committed to making some positive changes. How does that actually play out?", 
    "It's been one of those days where you’ve been feeling a bit isolated and lonely. <br>How do you usually handle it?",
    "You need to get something done, but your brain feels like scrambled eggs.  What happens?",
    "It's time for some self-care. What does that actually look like for you?",
    "Okay, you totally screwed something up. What's going through your head?"

];

let answersObjects = {
    "1a": "Just another day. Probably will veg out in front of the TV or scroll on my phone.",
    "1b": "I should probably go for a walk or something, but I'm so wiped. Maybe a long shower?",
    "1c": "Honestly, I need to talk this out, but I feel like I'm always burdening my friends with my problems.",
    "1d": "Gym or yoga time for sure! Gotta move out of that stress, and then a good book or podcast always helps me reset.",
    "2a": "I'll probably just carry on as usual. I mean this is just the way things are, right?",
    "2b": "I know I should make a to-do list or something, but where do I even start?",
    "2c": "I kinda freeze up or shut down. Netflix marathon here I come.",
    "2d": "Okay, time to take a deep breath. I need to break this down into small steps and tackle one thing at a time.",
    "3a": "My thoughts are always negative. I can't stop the bad thoughts, so it’s normal to me.",
    "3b": "I tell myself I should be more positive, but I don't know how to change my thinking.",
    "3c": "I push the thoughts aside and try to stay busy. Don't want to dwell on that stuff.",
    "3d": "Okay, time to challenge those thoughts. Are they really true? Where's the evidence?",
    "4a": "I get super defensive and start an argument, then I feel awful afterward.",
    "4b": "I always want to find a solution, but I find it hard to approach the conversation.",
    "4c": "I ignore it and pretend everything is fine. I don't like confrontation.",
    "4d": "I took some time out to cool down, and then when I'm calmer, I'll try to talk it out and listen to their perspective.",
    "5a": "Just scroll on my phone all day or binge a show.",
    "5b": "I know getting up and moving would help, but I can't find the energy.",
    "5c": "I'm the queen/king of procrastination. I'll definitely tackle it... eventually.",
    "5d": "Even a 10-minute walk helps. Small action is better than none, and it usually boosts my mood.",
    "6a": "Might grab a drink or snack to feel better in the moment, even if it's not good for me.",
    "6b": "I know I should meditate or something, but my mind races and I can't seem to relax.",
    "6c": "I just try to power through and hope the feeling passes on its own.",
    "6d": "Need some fresh air and a few minutes of deep breathing. That always helps calm me down.",
    "7a": "Honestly, I mostly bottle things up and try to deal with it myself.",
    "7b": "I want to talk to someone, but I'm afraid of being judged or being a burden.",
    "7c": "I know I should reach out to a friend or therapist, but it feels like too big a step.",
    "7d": "I have a few trusted people I can talk to, or I know there are resources like hotlines available.",
    "8a": "Ya, isn't that normal?",
    "8b": "It definitely makes me feel down sometimes, but I don't know how to avoid social media in today's world.",
    "8c": "It doesn't always feel great, but it is just a regular habit now.",
    "8d": "I try to limit my time on social media, and I'm careful about who I follow.",
    "9a": "I'm exhausted all the time, but then I can't fall asleep at night. It's a mess.",
    "9b": "I know I need better sleep habits, but I don't know where to start.",
    "9c": "I stay up way too late watching shows or scrolling, even though I regret it in the morning.",
    "9d": "I try to stick to a sleep schedule and have a relaxing bedtime routine.",
    "10a": "I usually drop everything and help out, even if it's inconvenient for me.",
    "10b": "I want to say 'no' sometimes, but I don't want to hurt their feelings.",
    "10c": "I say yes, but then secretly resent them for putting me on the spot.",
    "10d": "It's okay to set limits. I can kindly explain that I'm not always available to help at the last minute.",
    "11a": "I’m pretty harsh and critical of myself.",
    "11b": "A bit of a mixed bag. Sometimes encouraging, but often negative.",
    "11c": "I try to ignore the negative thoughts, but they always seem to come back.",
    "11d": "I'm working on being kinder to myself and reframing those negative thoughts.",
    "12a": "Go on autopilot. Get through the work week, then try to forget about it on the weekends.",
    "12b": "Daydream about a different career, but it feels unrealistic to make a change.",
    "12c": "Distract yourself with hobbies or side projects, hoping the feeling will fade.",
    "12d": "Start actively researching other options or looking into ways to make your current job more satisfying.",
    "13a": "Mmm great question, I am not really sure what sort of changes I need right now.",
    "13b": "I create a list but get overwhelmed and don't know where to start with tackling it.",
    "13c": "I try but I don't know how to make those changes stick, so I procrastinate or simply give up.",
    "13d": "Small steps, tracking my progress, and finding what actually works for me.",
    "14a": "Distract myself with something - maybe endless scrolling or binging a TV series, but end up feeling even worse.",
    "14b": "Want to reach out to someone, but I wouldn't even know how to begin that convo.",
    "14c": "Convince myself I prefer being alone, despite the deep down craving for connection.",
    "14d": "Time to text a friend and plan something, or join an online group for shared interests.",
    "15a": "Stare blankly at the task, get overwhelmed. Then give up and find something else to do.",
    "15b": "Want to break it down into smaller steps, but don't know where to begin.",
    "15c": "Procrastinate by doing random chores, promising myself I’ll get to it 'soon.'",
    "15d": "Okay, noise-canceling headphones on, timer for focused work, then a short break.",
    "16a": "Take out and binge-watching Netflix till I fall asleep seems to do the trick.",
    "16b": "I know I should prioritize taking some time for myself, but I feel guilty taking the time for anything 'extra.'",
    "16c": "There really isn't any time for something like self-care. There are so many other important things I need to focus on.",
    "16d": "It's time to block off time for something that I know recharges me, whether it's reading, a hobby, or just relaxing.",
    "17a": "‘I'm the worst!’ spiral. Followed by hours of feeling like a total failure.",
    "17b": "I know I should learn from it and move on, but I just beat myself up nonstop.",
    "17c": "Try to ignore that it happened. Distract yourself until you can just...pretend it didn't.",
    "17d": "Okay, what went wrong? How can I fix it, or prevent it in the future?"
  };
  

function handleButtonClick(buttonId, currentButton) {
    if (lastClicked !== null) {
        lastClicked.classList.remove("clicked");
        lastClicked.disabled = false;
    }

    currentButton.disabled = true;
    currentButton.classList.add("clicked");

    nextButton.removeAttribute("disabled");

    lastClicked = currentButton;
}

function onNextButtonClick(event) {


    if (nextButton.hasAttribute("disabled")) {
        event.preventDefault();
        return;
    }

    // Log the results regardless of lastClicked
    logResults(event);

    if (lastClicked === null) { 
        event.preventDefault();
    } else {
        currentQuestionIndex++;
    }

    // Reset lastClicked to null after checking if it's null
    lastClicked = null;

    if (currentQuestionIndex >= questionArray.length) {
        window.location.href = "./email_submission.html";
        return;
    }

    displayQuestionAndOptions();
    updateImages();
    

    document.querySelectorAll(".abcd").forEach(element => {
        element.classList.remove("clicked");
        element.removeAttribute("disabled");
    });

    progress();

    // reset view to top of the page
    console.log("Calling resetView");
    resetView();


    colourReset();

   
};


function resetView() {
    console.log("Resetting view to the top");
    setTimeout(() => {
        if (window.scrollTo) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        } else {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }
    }, 50); // Delay of 100ms to ensure smooth scrolling
}

function colourReset () {
    document.getElementById("nextButton").setAttribute("disabled");
}

function logResults(event) {
    if (lastClicked !== null) {
        results.push(lastClicked.getAttribute("id"));
        localStorage.setItem("results", JSON.stringify(results));
    } else {
        console.log("No button has been clicked yet.");
    }
}

function displayQuestionAndOptions() {
    if (currentQuestionIndex < questionArray.length) {
        let questionElement = document.querySelector(".question");
        questionElement.innerHTML = questionArray[currentQuestionIndex];

        let answers = document.querySelectorAll(".abcd");

        for (let i = 0; i < 4; i++) {
            let answerElement = answers[i];
            let key = (currentQuestionIndex + 1) + String.fromCharCode(97 + i);

            if (answersObjects.hasOwnProperty(key)) {
                answerElement.querySelector("p").textContent = answersObjects[key];
            }
        }
    }
}

function updateImages() {
    let image = document.querySelector(".question-img-container img");
    let questionNumber = currentQuestionIndex + 1;
    image.src = `./resources/${questionNumber}.png`;
}

function removeResults(event) {
    if (results.length === 0) {
        return;
    }

    results.pop();
    localStorage.setItem("results", JSON.stringify(results));
}

function restart(event) {
    localStorage.removeItem("results");
    localStorage.removeItem("currentQuestionIndex");
    currentQuestionIndex = 0;
    results = [];
    displayQuestionAndOptions();
    updateImages();
    nextButton.setAttribute("disabled", "true");
    document.querySelectorAll(".abcd").forEach(element => {
        element.classList.remove("clicked");
        element.removeAttribute("disabled");
    });

    progress();
}


function onBackButtonClick(event) {
    currentQuestionIndex--;

    if (currentQuestionIndex < 0) {
        // If currentQuestionIndex becomes negative, redirect to index.html
        window.location.href = "./index.html";
        restart();
        return;
    }

    // Display the question and options corresponding to the updated currentQuestionIndex
    displayQuestionAndOptions();

    // Update any images associated with the question
    updateImages();

    // Remove any results displayed
    removeResults();

    // Reset the state of answer options
    document.querySelectorAll(".abcd").forEach(element => {
        element.classList.remove("clicked");
        element.removeAttribute("disabled");
    });

    // Update the progress of the quiz or survey
    progress();
}


function progress() {
    console.log("Results length:", results.length);
    let progressWidth = ((results.length) / totalQuestions) * 100;
    let myBar = document.getElementById("myBar");
    myBar.style.width = `${progressWidth}%`;
}


// Attach event listeners
nextButton.addEventListener('click', onNextButtonClick);
nextButton.addEventListener('click', logResults);
nextButton.addEventListener('click', progress);
backButton.addEventListener('click', onBackButtonClick);


window.addEventListener("beforeunload", function() {
    localStorage.setItem("currentQuestionIndex", currentQuestionIndex.toString());
});

document.addEventListener("DOMContentLoaded", function() {
 if (currentQuestionIndex.length === 17) {
   removeResults();
   decreaseIndex();
} else {
    displayQuestionAndOptions();
    updateImages();
    progress();
}
});


// Push initial state to the history
//history.pushState({ page: 'question_page' }, ""); // Adjust the state object as needed

window.addEventListener('popstate', function(event) {
    // Check if the event was triggered by a history change from the question page
    if (event.state && event.state.page === 'question_page') {
        // Execute the restart function
        if (currentQuestionIndex < 0) {
            window.location.href = "./index.html";
            restart();
            return;
        }
        removeResults();
    }
});


function decreaseIndex() {
    currentQuestionIndex--;
    console.log("Current Question Index:", currentQuestionIndex);
    // Add any additional logic needed when the index is decreased
}

// Event listener for the browser back button
window.addEventListener('popstate', function(event) {
    decreaseIndex();
});






let input = document.querySelector(".input")
let enterButton = document.querySelector(".enter-button")

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


