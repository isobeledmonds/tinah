
//let questionArray = Arrat.from(Object.entries(questions), ([key, value]) => value);

//let answerArray= []



//let obj = {a: 1, b: 2, c: 3};
//let arr = Array.from(Object.entries(obj), ([key, value]) => value);

//console.log(arr);
// Output: [1, 2, 3]


//const questions = {
   // 1: "You've had a rough day at work. <br> What helps you unwind best?",
   // 2: "Things have been piling up lately, and you're starting to feel totally overwhelmed. What's your typical reaction?"
//}

//





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
    "Ugh, you've been in a funk all week. What's your usual go-to?",
    "You're committed to making some positive changes. How does that actually play out?",
    "Work is a total nightmare. How do you cope when the stress is through the roof?:",
    "Things feel tense with your partner lately. When that argument starts brewing, you usually…",
    "It's been one of those days where you feel super isolated. How do you usually handle it?",
    "You need to get something done, but your brain feels like scrambled eggs.  What happens?",
    "That negative voice in your head is being extra loud today. You usually…",
    "It's time for some self-care. What does that actually look like for you?",
    "Okay, you totally screwed something up. What's going through your head?",
    "Your friend is always asking for help, and it's starting to burn you out. Do you..."
];


let answersObjects = {
    "1a": "Probably just veg out in front of the TV or scroll on my phone. Gotta distract myself somehow.", 
    "1b": "I should probably go for a walk or something, but I'm so wiped. Maybe a long shower?",
    "1c": "Honestly, I need to talk this out, but I feel like I'm always burdening my friends with my problems.",
    "1d": "Gym time for sure! Gotta sweat out that stress, and then a good book always helps me reset.",
    "2a": "I kinda freeze up or shut down. Like, I don't even want to deal with any of it.",
    "2b": "I know I should make a to-do list or something, but where do I even start?",
    "2c": "I distract myself for as long as possible. Netflix marathon, anyone?",
    "2d": "Okay, time to take a deep breath. I need to break this down into small steps and tackle one thing at a time.",
    "3a": "I start spiraling and feeling even worse. It's like I can't stop the bad thoughts.",
    "3b": "I tell myself I should be more positive, but I don't know how to change my thinking.",
    "3c": "I push the thoughts aside and try to stay busy. Don't want to dwell on that stuff.",
    "3d": "Okay, time to challenge those thoughts. Are they really true? Where's the evidence?",
    "4a": "I get super defensive or lash out, then feel awful afterward.",
    "4b": "I want to make things right, but I'm not sure how to approach the conversation.",
    "4c": "I kind of just ignore it and hope it blows over. I don't like confrontation.",
    "4d": "Okay, I need to cool down first. When I'm calmer, I'll try to talk it out and listen to their perspective.",
    "5a": "Just scroll on my phone all day or binge a show. Whatever numbs the feeling.",
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
"11a": "Harsh and critical. I wouldn't talk to a friend the way I talk to myself.",
"11b": "A bit of a mixed bag. Sometimes encouraging, but often negative.",
"11c": "I try to ignore the negative thoughts, but they always seem to come back.",
"11d": "I'm working on being kinder to myself and reframing those negative thoughts.",
"12a": "Go on autopilot. Get through the work week, then try to forget about it on the weekends.",
"12b": "Daydream about a different career, but it feels unrealistic to make a change.",
"12c": "Distract yourself with hobbies or side projects, hoping the feeling will fade.",
"12d": "Start actively researching other options or looking into ways to make your current job more satisfying.",
"13a": "Numb it out with snacks and mindless TV, hoping it passes on its own.",
"13b": "I know getting up and doing something would help, but I can't find the motivation.",
"13c": "Fake it 'til you make it. Smile on the outside, crumbling on the inside.",
"13d": "Okay, time for a mood-boosting playlist, a walk outside, or journaling to get it out.",
"14a": "Big goals, but zero follow-through. 'New year, new me' lasts, like, a week.",
"14b": "I try, but get overwhelmed and don't know how to make those changes stick.",
"14c": "Good intentions, but then... Netflix. Or takeout. Procrastination always wins.",
"14d": "Small steps, tracking my progress, and finding what actually works for me.",
"15a": "Unhealthy snacks and stress-scrolling become your best friends.",
"15b": "I should take a break, but feel guilty stepping away from my desk.",
"15c": "Bottle it up, then either explode at someone or totally shut down later.",
"15d": "Okay, mini-meditation break at my desk, or time to step outside for a few minutes.",
"16a": "Lash out or shut down completely. Then you both end up feeling worse.",
"16b": "Want to talk it out calmly, but it ends up turning into another fight.",
"16c": "Sweep it under the rug for now, hoping it'll somehow fix itself (it won't).",
"16d": "Okay, need to cool down first. Then let's try talking when we're both ready to actually listen.",
"17a": "Distract yourself with endless scrolling, but end up feeling even worse.",
"17b": "Want to reach out to someone, but worry about coming across as needy.",
"17c": "Convince yourself you prefer being alone, but deep down you crave connection.",
"17d": "Time to text a friend and plan something, or join an online group for shared interests.",
"18a": "Stare blankly at the task, overwhelmed. Then give up and find something mindless to do.",
"18b": "Want to break it down into smaller steps, but don't know where to begin.",
"18c": "Procrastinate by doing random chores, promising yourself you'll get to it 'soon.'",
"18d": "Okay, noise-canceling headphones on, timer for focused work, then a short break.",
"19a": "Believe those harsh thoughts, spiraling down into feeling totally worthless.",
"19b": "Try to tell yourself to think positively, but it doesn't really stick.",
"19c": "Distract yourself with anything to avoid sitting with those uncomfortable feelings.",
"19d": "Okay, time to challenge those thoughts and remind yourself of your strengths.",
"20a": "Uhhh...a long shower? Or maybe just ordering takeout because I'm too tired to cook.",
"20b": "I know I should prioritize myself, but I feel guilty taking time for anything 'extra.'",
"20c": "'Someday I'll get a massage' or whatever, but make excuses instead of actually doing it.",
"20d": "It's time to block off time for something that recharges me, whether it's reading, a hobby, or just relaxing.",
"21a": "‘I'm the worst!’ spiral. Followed by hours of feeling like a total failure.",
"21b": "I know I should learn from it and move on, but I just beat myself up nonstop.",
"21c": "Try to ignore it happened. Distract yourself until you can just...pretend it didn't.",
"21d": "Okay, what went wrong? How can I fix it, or prevent it in the future?",
"22a": "Say yes even when you resent it, then feel terrible for not having your own back.",
"22b": "Want to say no, but feel guilty and afraid of hurting their feelings.",
"22c": "Come up with vague excuses instead of being direct about your limits.",
"22d": "Kindly explain that you're stretched thin, and maybe suggest alternatives."
};

let answers = document.querySelectorAll(".abcd p");

let questions = document.querySelectorAll(".question");

questions.forEach((questionElement) => {
    let questionNumber = parseInt(questionElement.textContent);
    if (!isNaN(questionNumber) && questionNumber >= 1 && questionNumber <= questionArray.length) {
        let index = questionNumber - 1;
        questionElement.innerHTML = questionArray[index];
    }


    answers.forEach((answerElement, index) => {
        let key = questionNumber + answerElement.textContent.trim(); // Concatenate question number and answer text
        if (answersObjects.hasOwnProperty(key)) {
            answerElement.textContent = answersObjects[key];
        }
});

});





