//get local storage
//then clear local storage
//if local storage = x populate title and content

let getResults = JSON.parse(localStorage.getItem("results"));
console.log(getResults)

let healingStyleTitleObj = {
    "a": "Sounds like you don’t know where to start?",
    "b": "Sounds like you want to make some changes, but don’t know which path is best for you? ",
    "c":"Sounds like you are so ready to take some positive steps to improving your mental wellbeing? It’s time to take that that that first step!",
    "d": "Yay congratulations - Sounds like you are already working on improving your mental wellbeing!"

    };
    
    let healingStyleContentObj = {
        "a":"It sounds like maybe you’re feeling unsure of where to begin to help yourself. This could be a sign you subconsciously feel overwhelmed or disconnected from your own needs. This may be because of a lack of awareness of your personal mental and emotional state, or you have shut off your emotions  over time because they felt too much to handle.",
        "b":"It sounds like maybe you’re wanting to make sure changes, but you’re feeling unsure of the best path to take. You’ve been thinking maybe you might benefit from therapy or switching up your routine, but possibly you’re holding back as you’re not sure about what therapy entails or  you’ve got a bit of a fear of the unknown?<br>The great news is this indicates you’re willing to seek help, which is so positive as that’s the first step to you beginning your mental-wellbeing journey. The not so great news is that it’s now time to take some action, which we totally know can be scary, but we’re here to help guide you in the right direction. ",
        "c":"It sounds like maybe up until now you’ve been avoiding making a start on your mental well being journey, but you know it’s getting to the point where you are ready to take some action. You’ve probably been feeling ready for a while, but you might have held off due to a lack of understanding around what action to take and what is really going to help you!<br>Well, fear not as we are here to point you in the right direction! The good news is that you are already halfway there, just by acknowledging you want to make a change is such a huge achievement and you should be really proud of yourself for finding the courage to feel into what is going on for you and understanding that making change is the way forward to improving your mental wellbeing.",
        "d":"It sounds like you are super clear on what you need to address and work on in relation to your mental-health, and probably you have already started making some positive changes that are beginning to pay off! You clearly have a very strong sense of self-awareness, emotional intelligence and a proactive approach to mental health, so congratulations as this means you are already immersed and committed to exploring and addressing any underlying mental health issues.<br>You’ve probably already tried a few different solutions, so to help you continue in your mental-wellbeing journey we have a couple of suggestions to keep you exploring new things and finding the best fit for what works for you!"
    
    };
    
    
    let readMoreObj = {
        "a":"<p><span>It’s important to recognize this is normal</span><br>This is simply your body trying to protect you from feeling a certain way, so the way you have been responding is not wrong, however not feeling your emotions and meeting your own needs may not be good for you in the longer term.<br>Distracting yourself, or not setting boundaries has probably been working well for you up until this point, but in the long-term you may start to feel some more intense emotions bubble up and there is a possibility later down the line it might become too much to handle.<br> When it comes to dealing with feelings of anxiety or low-mood - prevention can often be the cure, so the earlier you can start to tune in with your mental and emotional state, the easier you are going to find maintaining your mental well-being in the future.<br>Our best suggestion for you would be to begin with an exercise that helps you really tune in to how you are feeling. The starting point to healing yourself begins with self-awareness. This is a great opportunity to begin to recognize your own needs and boundaries, and why you might be feeling certain ways in different situations.<br></p><p><span>TINAHs recommendations for starting your mental wellbeing healing journey:</span><br>A good place to start is by practicing self-reflection. Journaling can help you identify your thoughts and feelings. Below we’ve given you a few journal prompts for FREE, so grab a notebook and start writing down some of your thoughts.</p>",
        "b":"<p>It can be hard to label your feelings, when maybe you are experiencing them for the first time, so the first step to identifying which help might be best for you would be to figure out what you want to work on.<br>The first way to do that could be to seek support from a mental health professional. Try going to your local doctor, or identifying some therapists or specialist mental health services in your area - a quick google search “mental health service in INSERT YOUR LOCAL AREA NAME” will help you find them. Speaking to a mental health professional can provide valuable tools and insights to help you navigate your emotions and improve your mental health.<br>We do, however, understand not everyone has the option to access these kinds of support, in which case doing some self-reflection work would be a good place for you to start.</p> ",
        "c":"<p>As a reminder TINAH is not a replacement for therapy or professional mental health services, however if you feel like talking to someone or trying a course of CBT (cognitive behavioral therapy) to help you better understand what you are going through and get to the root cause of your problems then we’d highly recommend this route to get you started. Try going to your local doctor, or identifying some therapists or specialist mental health services in your area - a quick google search “mental health service in INSERT YOUR LOCAL AREA NAME” will help you find them.<br>Alternatively we would suggest starting off by increasing the time during your day where you prioritize yourself, and begin by practicing some basic self care needs. Making some small tweaks to your morning & evening routine can also be super beneficial to set yourself up for the day and get you  ready for a deep and nourishing sleep. Here’s 2 easy things you can start incorporating into both your morning and evening routines.</p>",
        "d":"<p>Have you tried subconscious work before? Tapping into your subconscious mind can really help you to take your healing to the next level and understand why you are the way you are, reprogramme any limitations and beliefs and figure out the next steps to achieving your goals. If this sounds interesting to you The to be magnetic pathway membership might be something to consider. You’ll get access to workshops and guided meditations that will take you in to your subconscious to start manifesting the life you really want.</p>"
    
    };
    
    
    let findOutMoreObj = {
        "a":"<p><span>Journal prompts:</span></p><ul><li><span>What are 3 things you are grateful for in your life right now?</span> How do these things make you feel and why do they make you feel that way?</li><li><span>Think about a recent situation that triggered a strong emotional response.</span> Describe the event and your reaction. What thoughts were behind your reaction? Why do you think you felt so triggered by this? Have you ever felt this way before?</li><li><span>What is your favourite thing to do/eat/watch - something that makes you really feel something?</span> Write about the last time you experienced it and the feeling that presented. Why do you love that feeling so much and how is it connected to the thing you were doing?</li><li><span>Are there any repeated behaviors or thought patterns that keep coming up for you?</span> Why do you think this is? When did you first experience these? What do you think they are trying to tell you?</li><li><span>Reflect on the last time you said no!</span> What was the situation and how did that feel for you?</li></ul><p>If you love this exercise you might want to consider checking out the journals on the TINAH marketplace which will guide you through this process even further. Click here to explore now!</p>",
        "b":"<p>In that case why not try reading some self-help books that might open up your mindset on the challenges you are facing and figure out what the best solution might be for you - here’s a few we can recommend to get you started.<br>X Link to book on TINAH<br>X Link to book on TINAH<br>X Link to book on TINAH <br></p>",
        "c":"<p><span>2 actions to take in the morning:</p></span><ul><li>When you wake up DON’T look at your phone as the first thing you do. Switch off your alarm and then put that phone back down - this will help eliminate overwhelming your brain, which is still waking up. Instead take 5-10 minutes to yourself, tune in to your breath - we recommend this guided breath meditation if you need support. LINK TO MEDITATION</li><li>Time to brush your teeth and practice some gratitudes or affirmations, depending on what you’re feeling today. Just by looking at yourself in the mirror and repeating back to yourself something positive is proven to massively increase your mood and self-worth, and tagging it on to a task you are already doing in your day like brushing your teeth is going to make it super easy to not make excuses not to do it. If you are stuck on which affirmations to say to yourself - check out our XXX here! LINK TO PRODUCT</li></ul><p><span>2 actions to take in the evening:</p></span><ul><li>Before heading to bed why not make yourself a soothing drink to get you winding down and ready for a nourishing sleep. We recommended the Teapsy XXX to get you feeling super sleepy. LINK TO PRODUCT</li><li>Instead of scrolling on your phone before you go to sleep, why not journal about your day or write down the things you need to do tomorrow. Getting all of your thoughts out from your head on to paper can help you clear your mind to not have those racing thoughts going through your mind which prevent you from falling asleep. We have loads of incredible journals that you can choose from to help you with this. Click here to explore now! LINK TO JOURNALS PAGE ON TINAH</li></ul>",
        "d":""
    
    
    };
    
    let alwaysVisibleObj = {
        "a":"<p> Also, sometimes listening to or reading other peoples experiences can help you identify your own emotions, behaviors and feelings.<br>Have you listened to the TINAH Talks podcast? We share our personal experiences with mental health over there and give even more advice on tools and techniques you can try to eliminate symptoms of some of the most common mental health challenges.</p>",
        "b":"<p>Alternatively have you listened to the TINAH Talks podcast? We share our personal experiences with mental health over there and give even more advice on tools and techniques you can try to eliminate symptoms of some of the most common mental health challenges.</p> ",
        "c":"<p>On a side note if you want to ease yourself in and do a bit more self-discovery before you take the action you could start with our TINAH Talks podcast. We share our personal experiences with mental health over there and give even more advice on tools and techniques you can try to eliminate symptoms of some of the most common mental health challenges.</p>",
        "d":"<p>If you want some inspiration of other things you can do to improve your mental wellbeing you could also check out the TINAH Talks podcast. We share our personal experiences with mental health over there and give even more advice on tools and techniques you can try to eliminate symptoms of some of the most common mental health challenges.</p>"
    
    
    };
    
    let linksObj = {
        "a":`<a href="https://www.youtube.com/@timeisnotahealer" target="_blank" class="link social-list-link" > 
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon icon-youtube" viewBox="0 0 16 16" id="youtube">
        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
      </svg> Listen on YouTube</a>          
    <a href="https://podcasters.spotify.com/pod/show/tinahtalks" target="_blank" class="link social-list-link"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon icon-spotify" viewBox="0 0 16 16" id="spotify">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
      </svg> Listen on Spotify</a>`,
        "b":`<a href="https://www.youtube.com/@timeisnotahealer" target="_blank" class="link social-list-link" > <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon icon-youtube" viewBox="0 0 16 16" id="youtube"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg> Listen on YouTube</a>          <a href="https://podcasters.spotify.com/pod/show/tinahtalks" target="_blank" class="link social-list-link"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon icon-spotify" viewBox="0 0 16 16" id="spotify"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/></svg> Listen on Spotify</a>`,
        "c":`<a href="https://www.youtube.com/@timeisnotahealer" target="_blank" class="link social-list-link" > <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon icon-youtube" viewBox="0 0 16 16" id="youtube"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg> Listen on YouTube</a>          <a href="https://podcasters.spotify.com/pod/show/tinahtalks" target="_blank" class="link social-list-link"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon icon-spotify" viewBox="0 0 16 16" id="spotify"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/></svg> Listen on Spotify</a>`,
        "d":`<a href="https://www.youtube.com/@timeisnotahealer" target="_blank" class="link social-list-link" > <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon icon-youtube" viewBox="0 0 16 16" id="youtube"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg> Listen on YouTube</a>          <a href="https://podcasters.spotify.com/pod/show/tinahtalks" target="_blank" class="link social-list-link"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon icon-spotify" viewBox="0 0 16 16" id="spotify"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/></svg> Listen on Spotify</a>`,
    };

    



let resultTitle = document.querySelectorAll(".healing-style-title");
let resultContent = document.querySelectorAll(".healing-style-content");
let resultMore = document.querySelectorAll(".read-more");
let resultFind = document.querySelectorAll(".find-out-more");
let resultVisible = document.querySelectorAll(".always-visible-text");
let resultLinks = document.querySelectorAll(".links");

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


localStorage.setItem("finalResult", JSON.stringify(displayResults(getResults)));
console.log("Results:", displayResults(getResults));



let key = displayResults(getResults);


resultTitle.forEach((titleElement, index) => {
    titleElement.innerHTML = healingStyleTitleObj[key];
});

resultContent.forEach((contentElement, index) => {
    contentElement.innerHTML = healingStyleContentObj[key];
});

resultMore.forEach((moreElement, index) => {
    moreElement.innerHTML = readMoreObj[key];
});

resultFind.forEach((findElement, index) => {
    findElement.innerHTML = findOutMoreObj[key];
});

resultVisible.forEach((visibleElement, index) => {
    visibleElement.innerHTML = alwaysVisibleObj[key];
});

resultLinks.forEach((linksElement, index) => {
    linksElement.innerHTML = linksObj[key];
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



function updateImages() {
    let image = document.querySelector(".email-img-container img");
    let resultsArray = getResults; // Call getResults to get the array
    let resultLetter = displayResults(resultsArray); // Pass the array to displayResults
    image.src = `./resources/${resultLetter}.png`;
}

updateImages();