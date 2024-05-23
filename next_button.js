let answers = document.querySelectorAll(".abcd p");
let questions = document.querySelectorAll(".question");

let currentQuestionIndex = 0; // Initialize the current question index
console.log(currentQuestionIndex);



//question section

let questionArray = [
    "You've had a rough day at work.<br> What helps you unwind best?",
    "Things have been piling up lately, and you're starting to feel totally overwhelmed. <br>What's your typical reaction?",
    "Ugh, those negative thoughts about yourself are creeping in again. <br>What do you usually do?",
    "You got into an argument with a friend/partner/family member.  How do you typically handle it?",
    "It's been one of those weeks where you just can't find the motivation to do anything. What's your go-to?",
    "You're feeling really stressed out.  What's your first instinct for getting some relief?",
    "Things have been really tough lately. Who or what do you turn to first for support?",
    "Ever find yourself comparing your life to what you see on social media? How does it make you feel?",
    "How's your sleep been lately?",
    "Your friend often asks you for last-minute favors that disrupt your plans.  How do you typically respond?",
    "Pay attention to your inner voice. Is it mostly…",
    "You've been in the same job for a while now, and it's just not fulfilling. Do you…",
    "You're committed to making some positive changes. How does that actually play out?", 
    "It's been one of those days where you feel super isolated. How do you usually handle it?",
    "You need to get something done, but your brain feels like scrambled eggs.  What happens?",
    "It's time for some self-care. What does that actually look like for you?",
    "Okay, you totally screwed something up. What's going through your head?"

];



let answersObjects = {
    "1a": "I'll take some time to relax and unwind, probably binge watch something on the TV, or scroll on TikTok.",
    "1b": "I should probably go for a walk or something, but I'm so wiped. Maybe a long shower?",
    "1c": "Honestly, I need to talk this out, but I feel like I'm always burdening my friends with my problems.",
    "1d": "Gym or yoga time for sure! Gotta move out that stress, and then a good book or podcast always helps me reset.",
    "2a": "I'll probably just carry on as usual, and ignore that it’s happening.",
    "2b": "I know I should make a to-do list or something, but where do I even start?",
    "2c": "I distract myself for as long as possible. Netflix marathon, anyone?",
    "2d": "Okay, time to take a deep breath. I need to break this down into small steps and tackle one thing at a time.",
    "3a": "My thoughts are always negative. I can't stop the bad thoughts, so it’s normal to me.",
    "3b": "I tell myself I should be more positive, but I don't know how to change my thinking.",
    "3c": "I push the thoughts aside and try to stay busy. Don't want to dwell on that stuff.",
    "3d": "Okay, time to challenge those thoughts. Are they really true? Where's the evidence?",
    "4a": "I get super defensive and start an argument, then I feel awful afterwards.",
    "4b": "I always want to find a solution, but I find it hard to approach the conversation.",
    "4c": "I ignore it and pretend everything is fine. I don't like confrontation.",
    "4d": "I took some time out to cool down, then when I'm calmer, I'll try to talk it out and listen to their perspective.",
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
    "8a": "I don't really think about it. I just scroll for fun.",
    "8b": "It definitely makes me feel down sometimes, but I can't seem to stop scrolling.",
    "8c": "I know I should probably cut back, but it's hard to break the habit.",
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
    "13a": "I set myself some goals, but they never really materialize.",
    "13b": "I try, but get overwhelmed and don't know how to make those changes stick.",
    "13c": "Good intentions, but then I get distracted by something. Procrastination always wins.",
    "13d": "Small steps, tracking my progress, and finding what actually works for me.",
    "14a": "Distract myself with something - maybe endless scrolling or binging a TV series, but end up feeling even worse.",
    "14b": "Want to reach out to someone, but worry about coming across as needy.",
    "14c": "Convince myself I prefer being alone, but deep down I crave connection.",
    "14d": "Time to text a friend and plan something, or join an online group for shared interests.",
    "15a": "Stare blankly at the task, get overwhelmed. Then give up and find something else to do.",
    "15b": "Want to break it down into smaller steps, but don't know where to begin.",
    "15c": "Procrastinate by doing random chores, promising myself I’ll get to it 'soon.'",
    "15d": "Okay, noise-canceling headphones on, timer for focused work, then a short break.",
    "16a": "Paint my nails, or take a bath? Sometimes I’ll treat myself to a takeout, or buy something new.",
    "16b": "I know I should prioritize taking some time for myself, but I feel guilty taking the time for anything 'extra.'",
    "16c": "I always plan to go and get a massage or spa day or something, but the time never actually comes around, there's always something else to prioritize.",
    "16d": "It's time to block off time for something that I know recharges me, whether it's reading, a hobby, or just relaxing.",
    "17a": "‘I'm the worst!’ spiral. Followed by hours of feeling like a total failure.",
    "17b": "I know I should learn from it and move on, but I just beat myself up nonstop.",
    "17c": "Try to ignore that it happened. Distract yourself until you can just...pretend it didn't.",
    "17d": "Okay, what went wrong? How can I fix it, or prevent it in the future?"
};



document.addEventListener("DOMContentLoaded", function() {
    // Display the initial question and options
    displayQuestionAndOptions();

    // Attach event listener to the next button
    nextButton.addEventListener('click', onNextButtonClick);
});



// Function to display the current question and options
function displayQuestionAndOptions() {
    // Ensure currentQuestionIndex is within bounds
    if (currentQuestionIndex < questionArray.length) {
        let questionElement = questions; // Get the question element
        questionElement.innerHTML = questionArray[currentQuestionIndex]; // Update question text

       // Calculate the starting index of options for the current question
       let answersIndex = currentQuestionIndex * 4;
       for (let i = 0; i < 4; i++) {
           let answerElement = answers[i]; // Get the specific answer element
           let key = (currentQuestionIndex + 1) + String.fromCharCode(97 + i); // Generate key like "1a", "1b", etc.
           if (answersObjects.hasOwnProperty(key)) {
               answerElement.textContent = answersObjects[key];
           }
        
       }
   }
}


let questionTexts = document.querySelectorAll(".question");
let images = document.querySelectorAll(".question-img-container img");

function updateImages() {
    questionTexts.forEach((question, currentQuestionIndex) => {
        let questionNumber = currentQuestionIndex + 1;
        let image = images[currentQuestionIndex];
        image.src = `./resources/${questionNumber}.png`; // Update image source based on question number
    });
}

// Call the updateImages function initially to set the initial image sources
updateImages();


let lastClicked = null;
let results = [];
let nextButton = document.getElementById("nextButton");
results = JSON.parse(localStorage.getItem("results")) || [];
let emailList = [];

// Clear local storage for testing purposes
// localStorage.clear();

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

    // Enable or disable the next button based on whether any button has been clicked
    nextButton.removeAttribute("disabled");

    // Update the lastClicked variable after all operations related to current button click
    lastClicked = currentButton;
}



function logResults(event) {
    if (nextButton.hasAttribute("disabled")) {
        event.preventDefault();
    }
    if (lastClicked !== null) {
        results.push(lastClicked.getAttribute("id"));
        localStorage.setItem("results", JSON.stringify(results));
    } else {
        console.log("No button has been clicked yet.");
    }
};

function onNextButtonClick(event) {
    logResults(event);

    // Increment the current question index
    console.log("Before increment:", currentQuestionIndex);
    currentQuestionIndex++;
    console.log("After increment:", currentQuestionIndex);
    if (currentQuestionIndex >= questionArray.length) {
        // Redirect to the email submission page when the quiz ends
        window.location.href = "./email_submission.html";
        return;
    }

    // Display the updated question and options
    displayQuestionAndOptions();

    // Disable the next button after moving to the next question
    nextButton.setAttribute("disabled", "true");

    // Reset lastClicked for the new question
    lastClicked = null;
}

document.addEventListener("DOMContentLoaded", function() {
    // Display the initial question and options
    displayQuestionAndOptions();

    // Attach event listener to the next button
    //nextButton.addEventListener('click', onNextButtonClick);
});






function removeResults(event) {
    if (results.length === 0) {
        console.log("No results to remove.");
        return; // Exit early if there are no results to remove
    }
    
    results.pop(); // Remove the last item from the results array
    
    // Update local storage
    localStorage.setItem("results", JSON.stringify(results));
    
    console.log("Last result removed.");
};

function restart(event) {
    localStorage.removeItem("results");
};



let currentArray = results.length;
function progress() {
    let totalQuestions = 17; // Total number of questions
    let progressWidth = (currentArray / totalQuestions) * 100; // Calculate progress as a percentage
    let myBar = document.getElementById("myBar");
    myBar.style.width = `${progressWidth}%`;
}

document.addEventListener("DOMContentLoaded", function() {
    progress();
});




//question outcomes
    
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
console.log(displayResults(results));  
console.log(results);

function resultsReveal(event) {
    if (nextButton.hasAttribute("disabled") || currentArray < 16) {
        event.preventDefault();
    }
    if (lastClicked !== null) {
        results.push(lastClicked.getAttribute("id"));
        localStorage.setItem("results", JSON.stringify(results));
    } else {
        console.log("No button has been clicked yet.");
    }
    };
 


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








