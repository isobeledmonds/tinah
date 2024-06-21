//get local storage
//then clear local storage
//if local storage = x populate title and content

let getResults = JSON.parse(localStorage.getItem("results"));
console.log(getResults)

let healingStyleTitleObj = {
    "a": "The Unaware Wanderer",
    "b": "The Clarity Chaser",
    "c": "The Stuck Seeker",
    "d": "The Empowered Healer"
};

let healingStyleContentObj = {
    "a": `
        <p>
            <span>Sounds like you don’t know where to start</span><br>
            It sounds like maybe you’re feeling unsure of where to begin to help yourself. This could be a sign you subconsciously feel overwhelmed or disconnected from your own needs. This may be because of a lack of awareness of your personal mental and emotional state, or you have shut off your emotions over time because they felt too much to handle.
        </p>`,

    "b": `
        <p>
            <span>Sounds like you want to make some changes, but don’t know which path is best for you</span><br>
            Doing a deep dive into your history & feelings in a therapy session seems like A LOT. You’re not sure if you’re totally comfortable starting there.<br>
            But you recognize that you have all of this pent-up emotion & daily stress that needs to be addressed sooner rather than later…or soon you’ll find yourself in a hole you can’t get out of.<br>
            This is a common stage where many people find themselves. Recognizing your needs is an important step, and now it's about building a roadmap to meet those needs that you can REALISTICALLY follow.<br>
            Feeling uncertain about the steps you need to take can stem from a variety of reasons, including information overload, fear of failure, or simply not knowing where to start.<br>
            If you're not ready to deep dive into therapy, the best place to start is foundational care practices.<br>
            These practices—sleep, nutrition, body movement, and daily stress management—create a strong foundation for your mental health, offering stability, clarity, and resilience that can make it easier to navigate more intensive healing processes later on.
        </p>`,

    "c": `
        <p>
            <span>It sounds like you have a clear understanding of your needs for your mental well-being, but you feel stuck and/or find yourself avoiding taking action</span><br>
            This is a common experience where many people find themselves aware of what they need to do but are held back by various factors.<br>
            Feeling stuck or avoiding action can stem from fear, self-doubt, past experiences, or a lack of motivation.<br>
            Taking action often requires stepping out of your comfort zone. Fear of the unknown or of not succeeding can be paralyzing. This fear can keep you in a cycle of inaction, even when you know what steps to take.<br>
            The prospect of making significant changes can be overwhelming. When the steps ahead seem too large or numerous, it's easy to feel stuck and unsure where to begin.<br>
            Not to mention that negative past experiences can create a mental barrier. If you’ve tried and struggled before, it’s natural to feel hesitant about trying again.<br>
            And without a supportive environment or encouragement, it can be difficult to find the motivation to move forward. Which is where self-discipline is required.<br>
            It’s important to understand that this is a normal part of the healing journey. Acknowledging these feelings is the first step towards overcoming them.<br>
            As cliche as it then sounds, next, is all about taking SMALL steps to implement better habits around managing your mental, emotional & physical well-being.
        </p>`,

    "d": `
        <p>
            It sounds like you have a crystal clear understanding of your needs and the steps required for your healing journey. This is a fantastic place to be, and it’s important to acknowledge the hard work and self-awareness that has brought you to this point. You are ready to take action and confident in your approach, which is a testament to your dedication to your mental well-being.<br>
            Your clarity and readiness to take action indicate that you have done significant inner work. You’ve likely spent time reflecting on your needs, setting goals, and creating a plan to achieve them. This level of self-awareness and preparedness is commendable and sets a strong foundation for continued growth and healing.<br>
            While you are already doing great on your path, it’s important to remember that the journey to mental well-being is ongoing. There will always be new challenges and opportunities for growth. Staying committed to your practices and remaining open to new insights and adjustments will help you maintain and enhance your well-being.<br>
            Even though you are clear on your needs and confident in your approach, TINAH is here to support you every step of the way. Here are some ways we can help:
        </p>`
};

let readMoreObj = {
    "a": `
        <p>
            <span>It’s important to recognize this is normal</span><br>
            This is simply your body trying to protect you from feeling a certain way, so the way you have been responding is not wrong, however not feeling your emotions and meeting your own needs may not be good for you in the longer term.<br>
            Distracting yourself, or not setting boundaries has probably been working well for you up until this point, but in the long-term you may start to feel some more intense emotions bubble up and there is a possibility later down the line it might become too much to handle.<br>
            When it comes to dealing with feelings of anxiety or low-mood - prevention can often be the cure, so the earlier you can start to tune in with your mental and emotional state, the easier you are going to find maintaining your mental well-being in the future.<br>
            Our best suggestion for you would be to begin with an exercise that helps you really tune in to how you are feeling. The starting point to healing yourself begins with self-awareness. This is a great opportunity to begin to recognize your own needs and boundaries, and why you might be feeling certain ways in different situations.
        </p>
        <p>
            <span>TINAHs recommendations for starting your mental wellbeing healing journey:</span><br>
            A good place to start is by practicing self-reflection. Journaling can help you identify your thoughts and feelings. Below we’ve given you a few journal prompts for FREE, so grab a notebook and start writing down some of your thoughts.
        </p>`,

    "b": `
        <p>
            <span>TINAH’s Recommendations for You To help you further along your journey, consider the following actions:</span><br>
            Sleep:<br>
            Ensuring you get quality sleep is crucial for mental health. Aim for 7-9 hours of sleep per night. Develop a consistent sleep schedule by going to bed and waking up at the same time every day, even on weekends. Create a relaxing bedtime routine to signal to your body that it's time to wind down. This might include activities like reading a book, taking a warm bath, or practicing gentle yoga.<br>
            Some of our favorite sleep hygiene practices at TINAH are to start unwinding with the <a href="https://timeisnotahealer.com/products/sleepy-bunny" target="_blank">Teapsy Sleep Bunny</a> blend, whilst you use your <a href="https://timeisnotahealer.com/products/the-lover-journal" target="_blank">Wilde House Paper Nightly Journal</a> to get out any remaining thoughts from the day. When you are ready for bed, switch on your <a href="https://timeisnotahealer.com/products/sleepy-bunny" target="_blank">Zeez Sleep Pebble</a>, which mimics the alpha, theta and delta frequencies generated by the brain of a good sleeper to help your body get into a good regular sleep pattern.<br>
            Nutrition:<br>
            A balanced diet can significantly impact your mood and energy levels. Focus on eating a variety of whole foods, including fruits, vegetables, lean proteins, and whole grains. Stay hydrated by drinking plenty of water throughout the day. And most importantly, limit the intake of processed foods, caffeine, and sugar, which can cause energy spikes and crashes.<br>
            We at TINAH understand the reality of needing sweet treats now and again or that delicious cup of coffee. We love the <a href="https://timeisnotahealer.com/products/box-of-7-bestselling-collection" target="_blank">Cosmic Dealer Chocolate</a>, <a href="https://timeisnotahealer.com/products/ayurvedic-teas-infusions" target="_blank">Ayurvedic Tea Infusions</a> & <a href="https://timeisnotahealer.com/products/herbal-koffee" target="_blank">Coffee Alternatives</a> to satisfy that desire without then feeling like crap!<br>
            Body Movement:<br>
            Regular physical activity can improve your mood and reduce anxiety. Aim for at least 30 minutes of moderate exercise most days of the week. This can be anything from walking, running, or biking to yoga or dancing. Choose activities that you enjoy, as this will make it easier to stick with them.<br>
            We get it though that sometimes making the leap to get back into the gym can be really hard. Like REALLY HARD. At TINAH, we recognize the importance of taking baby steps, but TAKING THEM none-the-less. We recommend the <a href="https://www.yogi-bare.co.uk/TINAH" target="_blank">Yogi Bare Ever Grip Mat</a> for getting started with basic body movements at home! PSST… Use code <span>TINAH</span> at checkout and you’ll get 15% off your order.<br>
            If you aren’t quite there mentally yet, we recommend checking out the books <a href="https://timeisnotahealer.com/products/dopamine-nation-finding-balance-in-the-age-of-indulgence" target="_blank">Dopamine Nation</a> and <a href="https://timeisnotahealer.com/products/atomic-habits-the-life-changing-million-copy-1-bestseller" target="_blank">Atomic Habit</a>. Then get to work in shifting your mindset with the <a href="https://timeisnotahealer.com/products/do-it-for-yourself-guided-journal-a-motivational-journal" target="_blank">Do It For Yourself (Guided Journal)</a>. It will be a game changer in helping you take action!<br>
            Stress Management:<br>
            Finding effective ways to manage stress is essential. Experiment with different stress-relief techniques to find what works best for you. This could include mindfulness meditation, deep breathing exercises, progressive muscle relaxation, or spending time in nature.<br>
            One of TINAH’s favorite ways to process & release stress is through Journaling! Check out some from our favourite brands:<br>
            <ul>
                <li><span>Journal:</span><a href="https://timeisnotahealer.com/products/the-habit-journal" target="_blank">Habit Journal by MalPaper</a></li>
                <li><span>Journal:</span><a href="https://timeisnotahealer.com/products/the-lover-journal" target="_blank">The Lover Journal from Wilde House Paper</a></li>
                <li><span>Journal:</span><a href="https://timeisnotahealer.com/products/day-of-gratitude-journal-cotton" target="_blank">A day of gratitude journal from MalPaper</a></li>
            </ul>
        </p>`,

    "c": `
        <p>
            <span>TINAH’s Recommendations for You To help you take actionable steps toward your mental well-being, consider the following:</span><br>
            Break Down Your Goals:<br>
            Start by breaking down your larger goals into smaller, more manageable steps. Focus on taking one step at a time rather than trying to tackle everything at once. Celebrate your progress, no matter how small.<br>
            At TINAH we love the <a href="https://timeisnotahealer.com/products/do-it-for-yourself-guided-journal-a-motivational-journal" target="_blank">Do It For Yourself (Guided Journal)</a> to help get the chaos out of our mind & onto paper so that we can get more clear & organized in our actions. And to help follow through on the goals that we have, we love the <a href="https://timeisnotahealer.com/products/do-it-or-dont-a-boundary-creating-journal" target="_blank">Do It (or Don't): A Boundary-Creating Journal</a>!<br>
            Practice Self-Compassion:<br>
            Be kind to yourself. Acknowledge that feeling stuck is part of the journey, not a personal failure. Treat yourself with the same compassion you would offer a friend in a similar situation.<br>
            We at TINAH recommend the book, <a href="https://timeisnotahealer.com/products/a-toolkit-for-your-emotions-45-ways-to-feel-better" target="_blank">A tool kit for our emotions</a>, as it brings a lot of knowledge & understanding about how we process & manage our emotions - which is the first step to practicing self compassion! From there, you can put things into practice with the <a href="https://timeisnotahealer.com/products/a-hug-in-a-book-everyday-self-care-and-comforting-rituals-1" target="_blank">Hug in a Book Journal</a>!<br>
            Develop a Routine:<br>
            Establishing a consistent routine can help create a sense of stability and progress. Integrate small, regular practices that align with your needs, such as mindfulness exercises, regular physical activity, or dedicated time for hobbies.<br>
            At TINAH we understand how hard it is to create new habits and sometimes having a little guidance & support in doing so can be helpful. We love the book,<a href="https://timeisnotahealer.com/products/atomic-habits-the-life-changing-million-copy-1-bestseller" target="_blank">Atomic Habits</a>, for exactly this! And we recommend the first habit you try to implement is to implement to be around breathing. It will help calm your nervous system & make implementing other habits down the road easier. Check out the book <a href="https://timeisnotahealer.com/products/breath-the-new-science-of-a-lost-art-1" target="_blank">Breath: The New Science of a Lost Art</a> to learn all about it!<br>
            Challenge Negative Thoughts:<br>
            Identify and challenge any negative thoughts that are holding you back. Replace them with positive affirmations and remind yourself of your strengths and past successes.<br>
            Don’t get us wrong, at TINAH, we know how hard it can be to stop the chaos that happens in our thoughts. A few helpful resources to get you start on tackling this challenge check out <a href="https://timeisnotahealer.com/products/the-little-book-of-mindfulness-10-minutes-a-day-to-less-stress-more-peace" target="_blank">The Little Book of Mindfulness</a>. The hardest part is self-awareness, but once you start to be more aware of the unhelpful thoughts that plague you, you now have the power to actively work on them!<br>
            Seek Professional Help:<br>
            If you find it particularly difficult to move forward on your own, consider seeking help from a therapist or counselor. Professional guidance can provide you with strategies and support tailored to your specific situation.<br>
            We get that sometimes professional support isn’t as easily accessible. And we at TINAH do not want you to feel left without resources despite this. Some really great self-guided therapy, educational books we recommend are:<br>
            <ul>
                <li><a href="https://timeisnotahealer.com/products/retrain-your-brain-cognitive-behavioural-therapy-in-7-weeks-a-workbook-for-managing-anxiety-and-depression" target="_blank">Retrain your brain: Cognitive Behavioural Therapy in 7 weeks</a></li>
                <li><a href="https://timeisnotahealer.com/products/scattered-minds-the-origins-and-healing-of-attention-deficit-disorder-1" target="_blank">Scattered Minds</a></li>
            </ul>
        </p>`,

    "d": `
        <p>
            Advanced Resources and Tools:<br>
            Explore advanced resources on the TINAH marketplace that can further support your journey. This includes in-depth guides, specialized courses, and advanced journaling techniques designed to help you deepen your self-awareness and enhance your practices.<br>
            Community and Support:<br>
            Connect with a community of like-minded individuals who are also on their healing journeys. Sharing experiences, challenges, and successes can provide additional motivation and insights.<br>
            Personalized Recommendations:<br>
            Take advantage of personalized recommendations tailored to your specific needs and goals. Whether it’s finding a new meditation technique, discovering a therapeutic hobby, or exploring professional services, TINAH offers a range of resources to support your ongoing growth.
        </p>`
};

let findOutMoreObj = {
    "a": `
        <p>
            <span>Journal prompts:</span><br>
            <ul>
                <li><span>What are 3 things you are grateful for in your life right now?</span> How do these things make you feel and why do they make you feel that way?</li>
                <li><span>Think about a recent situation that triggered a strong emotional response.</span> Describe the event and your reaction. What thoughts were behind your reaction? Why do you think you felt so triggered by this? Have you ever felt this way before?</li>
                <li><span>What is your favourite thing to do/eat/watch - something that makes you really feel something?</span> Write about the last time you experienced it and the feeling that presented. Why do you love that feeling so much and how is it connected to the thing you were doing?</li>
                <li><span>Are there any repeated behaviors or thought patterns that keep coming up for you?</span> Why do you think this is? When did you first experience these? What do you think they are trying to tell you?</li>
                <li><span>Reflect on the last time you said no!</span> What was the situation and how did that feel for you?</li>
            </ul>
            If you love this exercise you might want to consider checking out the journals on the TINAH marketplace which will guide you through this process even further. Here’s some journals we love to get you started…<br>
            <ul>
                <li><span>Journal:</span><a href="https://timeisnotahealer.com/products/the-habit-journal" target="_blank">Habit Journal by MalPaper</a></li>
                <li><span>Journal:</span><a href="https://timeisnotahealer.com/products/the-lover-journal" target="_blank">The Lover Journal from Wilde House Paper</a></li>
                <li><span>Journal:</span><a href="https://timeisnotahealer.com/products/day-of-gratitude-journal-cotton" target="_blank">A day of gratitude journal from MalPaper</a></li>
            </ul>
        </p>`,

    "b": `
        <p>
            By focusing on foundational care and taking one step at a time, you’ll begin to find your path to healing and mental well-being. Explore the resources and tools available on the TINAH marketplace to support you in this process. Click here to discover more! LINK TO RESOURCES PAGE ON TINAH.
        </p>`,

    "c": `
        <p>
            Explore More Resources: Utilize the resources available on the TINAH marketplace to find tools and support that resonate with you. Whether it’s guided journals, online courses, or mental wellbeing products, there’s something to help you move forward. <a href="https://timeisnotahealer.com/blogs/news" target="_blank">Click here to explore now!</a><br>
            By addressing the reasons behind your feelings of being stuck and taking small, consistent steps forward, you can begin to overcome avoidance and make meaningful progress in your self-healing journey.
        </p>`,

    "d": `
        <p>
            <span>TINAH’s Recommendations for You To continue thriving on your journey, consider the following actions:</span><br>
            Engage in Continuous Learning:<br>
            Keep exploring new areas of growth and healing. Whether it’s through books, workshops, or online courses, continuous learning can provide fresh perspectives and techniques.<br>
            Some resources for your to check out:<br>
            <ul>
                <li><span>Journal:</span><a href="https://timeisnotahealer.com/products/retrain-your-brain-cognitive-behavioural-therapy-in-7-weeks-a-workbook-for-managing-anxiety-and-depression" target="_blank">Retrain your brain: Cognitive Behavioural Therapy in 7 weeks</a></li>
                <li><span>Journal:</span><a href="https://timeisnotahealer.com/products/scattered-minds-the-origins-and-healing-of-attention-deficit-disorder-1" target="_blank">Scattered Minds</a></li>
                <li><span>Journal:</span><a href="https://timeisnotahealer.com/products/questions-to-empower-card-deck" target="_blank">Questions to empower card deck</a></li>
                <li><span>Journal:</span><a href="https://timeisnotahealer.com/products/recovery-max%E2%84%A2-ice-bath" target="_blank">Lumi Recovery Max Ice Bath</a></li>
                <li><span>Journal:</span><a href="https://timeisnotahealer.com/products/recovery-max%E2%84%A2-ice-bath" target="_blank">Lumi Recovery Max Ice Bath</a></li>
                <li><span>Journal:</span><a href="https://timeisnotahealer.com/products/premium-acupressure-mat-and-pillow-set-black" target="_blank">Unmera Acupressure Mat</a></li>
            </ul><br>
            Have you tried subconscious work before? Tapping into your subconscious mind can really help you take your healing to the next level and understand why you are the way you are, reprogram any limitations and beliefs, and figure out the next steps to achieving your goals. If this sounds interesting to you <a href="https://timeisnotahealer.com/products/to-be-magnetic-the-pathway-membership" target="_blank">The to-be magnetic pathway membership</a> might be something to consider. You’ll get access to workshops and guided meditations that will take you into your subconscious to start manifesting the life you really want. Find out more about it here!<br>
            Seek Professional Growth:<br>
            If you haven’t already, consider working with a coach, mentor, or therapist who can offer additional insights and support as you advance on your path.<br>
            You are doing an incredible job on your mental well-being journey. Remember, TINAH is here to support you with resources, tools, and a community to help you continue thriving. Explore the TINAH marketplace to find the perfect resources for your ongoing growth. <a href="www.timeisnotahealer.com" target="_blank">Click here to discover more!</a>
        </p>`
};

let alwaysVisibleObj = {
    "a": `
        <p>
            Also, sometimes listening to or reading other peoples experiences can help you identify your own emotions, behaviors and feelings.<br>
            Have you listened to the TINAH Talks podcast? We share our personal experiences with mental health over there and give even more advice on tools and techniques you can try to eliminate symptoms of some of the most common mental health challenges.
        </p>`,

    "b": `
        <p>
            Alternatively have you listened to the TINAH Talks podcast? We share our personal experiences with mental health over there and give even more advice on tools and techniques you can try to eliminate symptoms of some of the most common mental health challenges.
        </p>`,

    "c": `
        <p>
            On a side note if you want to ease yourself in and do a bit more self-discovery before you take the action you could start with our TINAH Talks podcast. We share our personal experiences with mental health over there and give even more advice on tools and techniques you can try to eliminate symptoms of some of the most common mental health challenges.
        </p>`,

    "d": `
        <p>
            If you want some inspiration of other things you can do to improve your mental wellbeing you could also check out the TINAH Talks podcast. We share our personal experiences with mental health over there and give even more advice on tools and techniques you can try to eliminate symptoms of some of the most common mental health challenges.
        </p>`
};

let linksObj = {
    "a": `
        <a href="https://www.youtube.com/@timeisnotahealer" target="_blank" class="link social-list-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon icon-youtube" viewBox="0 0 16 16" id="youtube">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
            </svg> 
            Listen on YouTube
        </a>
        <a href="https://open.spotify.com/show/6BGZpHiOatuMzhaf9JeWVC?si=9b98cb310cfb48f6" target="_blank" class="link social-list-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon icon-spotify" viewBox="0 0 16 16" id="spotify">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
            </svg> 
            Listen on Spotify
        </a>`,

    "b": `
        <a href="https://www.youtube.com/@timeisnotahealer" target="_blank" class="link social-list-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon icon-youtube" viewBox="0 0 16 16" id="youtube">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
            </svg> 
            Listen on YouTube
        </a>
        <a href="https://open.spotify.com/show/6BGZpHiOatuMzhaf9JeWVC?si=9b98cb310cfb48f6" target="_blank" class="link social-list-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon icon-spotify" viewBox="0 0 16 16" id="spotify">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
            </svg> 
            Listen on Spotify
        </a>`,

    "c": `
        <a href="https://www.youtube.com/@timeisnotahealer" target="_blank" class="link social-list-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon icon-youtube" viewBox="0 0 16 16" id="youtube">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
            </svg> 
            Listen on YouTube
        </a>
        <a href="https://open.spotify.com/show/6BGZpHiOatuMzhaf9JeWVC?si=9b98cb310cfb48f6" target="_blank" class="link social-list-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon icon-spotify" viewBox="0 0 16 16" id="spotify">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
            </svg> 
            Listen on Spotify
        </a>`,

    "d": `
        <a href="https://www.youtube.com/@timeisnotahealer" target="_blank" class="link social-list-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon icon-youtube" viewBox="0 0 16 16" id="youtube">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
            </svg> 
            Listen on YouTube
        </a>
        <a href="https://open.spotify.com/show/6BGZpHiOatuMzhaf9JeWVC?si=9b98cb310cfb48f6" target="_blank" class="link social-list-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon icon-spotify" viewBox="0 0 16 16" id="spotify">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
            </svg> 
            Listen on Spotify
        </a>`
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