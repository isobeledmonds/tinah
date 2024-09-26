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
            <span>You're not sure where to start, and that's okay.</span></p>
            <p>You might feel lost about how to help yourself. This could mean you're overwhelmed or disconnected from your needs. Maybe you're not aware of how you feel, or you've shut off your emotions because they seemed too hard to handle.
        </p>`,

    "b": `
        <p>
            <span>Sounds like you want to make some changes, but don’t know which path is best for you.</span></p>
            <p>Doing a deep dive into your history & feelings in a therapy session seems like A LOT. You’re not sure if you’re totally comfortable starting there. But you recognize that you have all of this pent-up emotion & daily stress that needs to be addressed sooner rather than later you’ll find yourself in a hole you can’t get out of.<br>
            <p>This is a common stage where many people find themselves. Recognizing your needs is an important step. From there, it's about building a roadmap to meet those needs that you can REALISTICALLY follow. Feeling uncertain about the steps you need to take can stem from a variety of reasons. These may include information overload, fear of failure, or simply not knowing where to start.<br>
            <p>If you're not ready to deep dive into therapy, the best place to start is foundational care practices. These practices—sleep, nutrition, body movement, and daily stress management—create a strong foundation for your mental health. They offer stability, clarity, and resilience that can make it easier to navigate more intensive healing processes later on.
        </p>`,

    "c": `
        <p>
            <span>It sounds like you have a clear understanding of your needs for your mental well-being, but you feel stuck and/or find yourself avoiding taking action.</span></p>
            <p>This is a common experience where many people find themselves aware of what they need to do but are held back by various factors. Feeling stuck or avoiding action can stem from fear, self-doubt, past experiences, or a lack of motivation.</p>
            <p>Taking action often requires stepping out of your comfort zone. Fear of the unknown or of not succeeding can be paralyzing. This fear can keep you in a cycle of inaction, even when you know what steps to take. The prospect of making significant changes can be overwhelming. When the steps ahead seem too large or numerous, it's easy to feel stuck and unsure where to begin. Not to mention that negative past experiences can create a mental barrier. If you’ve tried and struggled before, it’s natural to feel hesitant about trying again. And without a supportive environment or encouragement, it can be difficult to find the motivation to move forward. This is where self-discipline is required.</p>
            <p>It’s important to understand that this is a normal part of the healing journey. Acknowledging these feelings is the first step towards overcoming them. As cliche as it then sounds, the next step is all about taking SMALL steps to implement better habits around managing your mental, emotional & physical well-being.
        </p>`,

    "d": `
        <p>
            It sounds like you have a crystal clear understanding of your needs and the steps required for your healing journey. This is a fantastic place to be, and it’s important to acknowledge the hard work and self-awareness that has brought you to this point. You are ready to take action and confident in your approach, which is a testament to your dedication to your mental well-being.</p>
            <p> Your clarity and readiness to take action indicate that you have done significant inner work. You’ve likely spent time reflecting on your needs, setting goals, and creating a plan to achieve them. This level of self-awareness and preparedness is commendable and sets a strong foundation for continued growth and healing.</p>
            <p> While you are already doing great on your path, it’s important to remember that the journey to mental well-being is ongoing. There will always be new challenges and opportunities for growth. Staying committed to your practices and remaining open to new insights and adjustments will help you maintain and enhance your well-being.</p>
            <p> Even though you are clear on your needs and confident in your approach, TINAH is here to support you every step of the way. Here are some ways we can help:
        </p>`
};

let readMoreObj = {
    "a": `
        <p>
            <span>It’s important to recognize this is normal.</span></p>
            <p>Your body is trying to protect you. While ignoring your feelings might have worked so far, it often is not good for you in the long run. If you keep pushing your emotions away, they can build up and become too much later on.
</p>
            <p>When it comes to anxiety or feeling down, it's better to start early. The sooner you tune in to your feelings, the easier it will be to stay mentally healthy.</p>
            <p>We suggest you start with an exercise to help you understand your feelings. Healing begins with knowing yourself. This is a great chance to learn about your needs and limits, and why you feel certain ways in different situations.</p>
        </p>
        `,

    "b": `
        <p>
            <span>TINAH’s Recommendations to help you further along your journey, consider the following actions:</span></p>
            <p class="heading">Sleep:</p>
            <p class="content-rm">Ensuring you get quality sleep is crucial for mental health. Aim for 7-9 hours of sleep per night. Develop a consistent sleep schedule by going to bed and waking up at the same time every day, even on weekends. Create a relaxing bedtime routine to signal to your body that it's time to wind down. This might include activities like reading a book, taking a warm bath, or practicing gentle yoga.</p>
            <p class="content-rm">Some of our favorite sleep hygiene practices at TINAH are to start unwinding with the <a href="https://timeisnotahealer.com/products/sleepy-bunny" target="_blank">Teapsy Sleep Bunny</a> blend, while you use your <a href="https://timeisnotahealer.com/products/the-lover-journal" target="_blank">Wilde House Paper Nightly Journal</a> to get out any remaining thoughts from the day. When you are ready for bed, switch on your <a href="https://timeisnotahealer.com/products/sleepy-bunny" target="_blank">Zeez Sleep Pebble</a>, which mimics the alpha, theta and delta frequencies generated by the brain of a good sleeper to help your body get into a good regular sleep pattern.</p>
            <p class="heading">Nutrition:</p>
            <p class="content-rm">A balanced diet can significantly impact your mood and energy levels. Focus on eating a variety of whole foods, including fruits, vegetables, lean proteins, and whole grains. Stay hydrated by drinking plenty of water throughout the day. And most importantly, limit the intake of processed foods, caffeine, and sugar, which can cause energy spikes and crashes.</p>
            <p class="content-rm">We at TINAH understand the reality of needing sweet treats now and again or that delicious cup of coffee. We love the <a href="https://timeisnotahealer.com/products/box-of-7-bestselling-collection" target="_blank">Cosmic Dealer Chocolate</a>, <a href="https://timeisnotahealer.com/products/ayurvedic-teas-infusions" target="_blank">Ayurvedic Tea Infusions</a> & <a href="https://timeisnotahealer.com/products/herbal-koffee" target="_blank">Coffee Alternatives</a> to satisfy that desire without then feeling like crap!</p>
            <p class="heading">Body Movement:</p>
            <p class="content-rm">Regular physical activity can improve your mood and reduce anxiety. Aim for at least 30 minutes of moderate exercise most days of the week. This can be anything from walking, running, or biking to yoga or dancing. Choose activities that you enjoy, as this will make it easier to stick with them.</p>
            <p class="content-rm">We get it though that sometimes making the leap to get back into the gym can be really hard. Like REALLY HARD. At TINAH, we recognize the importance of taking baby steps, but TAKING THEM nonetheless. We recommend the <a href="https://www.yogi-bare.co.uk/TINAH" target="_blank">Yogi Bare Ever Grip Mat</a> for getting started with basic body movements at home! PSST… Use code <span>TINAH</span> at checkout and you’ll get 15% off your order.</p>
            <p class="content-rm">If you aren’t quite there mentally yet, we recommend checking out the books <a href="https://timeisnotahealer.com/products/dopamine-nation-finding-balance-in-the-age-of-indulgence" target="_blank">Dopamine Nation</a> and <a href="https://timeisnotahealer.com/products/atomic-habits-the-life-changing-million-copy-1-bestseller" target="_blank">Atomic Habit</a>. Then get to work on shifting your mindset with the <a href="https://timeisnotahealer.com/products/do-it-for-yourself-guided-journal-a-motivational-journal" target="_blank">Do It For Yourself (Guided Journal)</a>. It will be a game changer in helping you take action!</p>
            <p class="heading">Stress Management:</p>
            <p class="content-rm">Finding effective ways to manage stress is essential. Experiment with different stress-relief techniques to find what works best for you. This could include mindfulness meditation, deep breathing exercises, progressive muscle relaxation, or spending time in nature.</p>
            <p class="content-rm">One of TINAH’s favorite ways to process & release stress is through Journaling! Check out some from our favourite brands:</p>
            <ul>
                <li><span class="journal">Journal: </span><a href="https://timeisnotahealer.com/products/the-habit-journal" target="_blank">Habit Journal by MalPaper</a></li>
                <li><span class="journal">Journal: </span><a href="https://timeisnotahealer.com/products/the-lover-journal" target="_blank">The Lover Journal from Wilde House Paper</a></li>
                <li><span class="journal">Journal: </span><a href="https://timeisnotahealer.com/products/day-of-gratitude-journal-cotton" target="_blank">A day of gratitude journal from MalPaper</a></li>
            </ul>
        </p>`,

    "c": `
        <p>
            <span>TINAH’s Recommendations to help you take actionable steps toward your mental well-being, consider the following:</span></p>
            <p class="heading">Break Down Your Goals:</p>
            <p class="content-rm">Start by breaking down your larger goals into smaller, more manageable steps. Focus on taking one step at a time rather than trying to tackle everything at once. Celebrate your progress, no matter how small.<br>
           At TINAH, we love the <a href="https://timeisnotahealer.com/products/do-it-for-yourself-guided-journal-a-motivational-journal" target="_blank">Do It For Yourself (Guided Journal)</a> to help get the chaos out of our mind & onto paper so that we can get more clear & organized in our actions. And to help follow through on the goals that we have, we love the <a href="https://timeisnotahealer.com/products/do-it-or-dont-a-boundary-creating-journal" target="_blank">Do It (or Don't): A Boundary-Creating Journal</a>!</p>
            <p class="heading">Practice Self-Compassion:</p>
            <p class="content-rm">Be kind to yourself. Acknowledge that feeling stuck is part of the journey, not a personal failure. Treat yourself with the same compassion you would offer a friend in a similar situation.<br>
            We at TINAH recommend the book, <a href="https://timeisnotahealer.com/products/a-toolkit-for-your-emotions-45-ways-to-feel-better" target="_blank">A tool Kit for Our Emotions</a>, as it brings a lot of knowledge & understanding about how we process & manage our emotions - which is the first step to practicing self compassion! From there, you can put things into practice with the <a href="https://timeisnotahealer.com/products/a-hug-in-a-book-everyday-self-care-and-comforting-rituals-1" target="_blank">Hug in a Book Journal</a>!</p>
            <p class="heading">Develop a Routine:</p>
            <p class="content-rm">Establishing a consistent routine can help create a sense of stability and progress. Integrate small, regular practices that align with your needs, such as mindfulness exercises, regular physical activity, or dedicated time for hobbies.<br>
           At TINAH, we understand how hard it is to create new habits, and sometimes having a little guidance & support in doing so can be helpful. We love the book,<a href="https://timeisnotahealer.com/products/atomic-habits-the-life-changing-million-copy-1-bestseller" target="_blank">Atomic Habits</a>, for exactly this! We recommend the first habit you try to implement is around breathing. It will help calm your nervous system & make implementing other habits down the road easier. Check out the book <a href="https://timeisnotahealer.com/products/breath-the-new-science-of-a-lost-art-1" target="_blank">Breath: The New Science of a Lost Art</a> to learn all about it!</p>
            <p class="heading">Challenge Negative Thoughts:</p>
            <p class="content-rm">Identify and challenge any negative thoughts that are holding you back. Replace them with positive affirmations and remind yourself of your strengths and past successes.<br>
            Don’t get us wrong, at TINAH, we know how hard it can be to stop the chaos that happens in our thoughts. A helpful resource to get you started on tackling this challenge is the <a href="https://timeisnotahealer.com/products/the-little-book-of-mindfulness-10-minutes-a-day-to-less-stress-more-peace" target="_blank">The Little Book of Mindfulness</a>. The hardest part is self-awareness, but once you start to be more aware of the unhelpful thoughts that plague you, you now have the power to actively work on them!</p>
            <p class="heading">Seek Professional Help:</p>
            <p class="content-rm">If you find it particularly difficult to move forward on your own, consider seeking help from a therapist or counselor. Professional guidance can provide you with strategies and support tailored to your specific situation.</p>
            <p>We get that sometimes professional support isn’t as easily accessible. We at TINAH do not want you to feel left without resources despite this. Some really great self-guided therapy, educational books we recommend are:</p>
            <ul>
                <li><a href="https://timeisnotahealer.com/products/retrain-your-brain-cognitive-behavioural-therapy-in-7-weeks-a-workbook-for-managing-anxiety-and-depression" target="_blank">Retrain Your Brain: Cognitive Behavioural Therapy in 7 Weeks</a></li>
                <li><a href="https://timeisnotahealer.com/products/scattered-minds-the-origins-and-healing-of-attention-deficit-disorder-1" target="_blank">Scattered Minds</a></li>
            </ul>
        </p>`,

    "d": `
        <p class="heading">
            Advanced Resources and Tools:</p>
           <p class="content-rm"> Explore advanced resources on the TINAH marketplace that can further support your journey. This includes in-depth guides, specialized courses, and advanced journaling techniques designed to help you deepen your self-awareness and enhance your practices.</p>
            <p class="heading"> Community and Support:</p>
            <p class="content-rm"> Connect with a community of like-minded individuals who are also on their healing journeys. Sharing experiences, challenges, and successes can provide additional motivation and insights.</p>
            <p class="heading">Personalized Recommendations:</p>
            <p class="content-rm"> Take advantage of personalized recommendations tailored to your specific needs and goals. Whether it’s finding a new meditation technique, discovering a therapeutic hobby, or exploring professional services, TINAH offers a range of resources to support your ongoing growth.
        </p>`
};

let findOutMoreObj = {
    "a": `<p>
    <span class="yellow">TINAHs recommendations for starting your mental wellbeing healing journey:</span></p>
    <p>A good place to start is by practicing self-reflection. Journaling can help you identify your thoughts and feelings. Below we’ve given you a few journal prompts for FREE, so grab a notebook and start writing down some of your thoughts.
</p>
<p>
<span>Journal prompts:</span><br>
<ul>
    <li><span2 class="list-heading">What are 3 things you are grateful for in your life right now?</span> <br><span3 class="indent">How do these things make you feel and why do they make you feel that way?</span></li>
    <li><span2 class="list-heading">Think about a recent situation that triggered a strong emotional response.</span> <br><span3 class="indent">Describe the event and your reaction. What thoughts were behind your reaction? Why do you think you felt so triggered by this? Have you ever felt this way before?</span></li>
    <li><span2 class="list-heading">What is your favourite thing to do/eat/watch - something that makes you really feel something?</span> <br><span3 class="indent">Write about the last time you experienced it and the feeling that presented. Why do you love that feeling so much and how is it connected to the thing you were doing?</span></li>
    <li><span2 class="list-heading">Are there any repeated behaviors or thought patterns that keep coming up for you?</span> <br><span3 class="indent">Why do you think this is? When did you first experience these? What do you think they are trying to tell you?</span></li>
    <li><span2 class="list-heading">Reflect on the last time you said no!</span> <br><span3 class="indent">What was the situation and how did that feel for you?</span></li>
</ul>
<p>If you love this exercise you might want to consider checking out the journals on the TINAH marketplace which will guide you through this process even further. Here are some journals we love to get you started…</p>
<ul>
    <li><span class="journal">Journal: </span><a href="https://timeisnotahealer.com/products/the-habit-journal" target="_blank">Habit Journal by MalPaper</a></li>
    <li><span class="journal">Journal: </span><a href="https://timeisnotahealer.com/products/the-lover-journal" target="_blank">The Lover Journal from Wilde House Paper</a></li>
    <li><span class="journal">Journal: </span><a href="https://timeisnotahealer.com/products/day-of-gratitude-journal-cotton" target="_blank">A day of gratitude journal from MalPaper</a></li>
</ul>
</p>
`,

    "b": `
        <p>
            By focusing on foundational care and taking one step at a time, you’ll begin to find your path to healing and mental well-being. Explore the resources and tools available on the TINAH marketplace to support you in this process. Click <a href="https://timeisnotahealer.com/pages/routines" target="_blank"> here</a> to discover more!
        </p>`,

    "c": `
        <p>
        <p class="heading">Explore More Resources:</p> 
        <p>Utilize the resources available on the TINAH marketplace to find tools and support that resonate with you. Whether it’s guided journals, online courses, or mental wellbeing products, there’s something to help you move forward. <a href="https://timeisnotahealer.com/blogs/news" target="_blank">Click here to explore now!</a></p>
            <p>By addressing the reasons behind your feelings of being stuck and taking small, consistent steps forward, you can begin to overcome avoidance and make meaningful progress in your self-healing journey.
        </p>`,

    "d": `
        <p>
            <span>TINAH’s Recommendations for you to continue thriving on your journey, consider the following actions:</span></p>
            <p class="heading">Engage in Continuous Learning: Keep exploring new areas of growth and healing. Whether it’s through books, workshops, or online courses, continuous learning can provide fresh perspectives and techniques.</p>
         
            <p class="heading">Some resources for you to check out:</p>
            <ul>
                <li><span class="journal">Journal: </span><a href="https://timeisnotahealer.com/products/retrain-your-brain-cognitive-behavioural-therapy-in-7-weeks-a-workbook-for-managing-anxiety-and-depression" target="_blank">Retrain Your Brain: Cognitive Behavioural Therapy in 7 Weeks</a></li>
                <li><span class="journal">Journal: </span><a href="https://timeisnotahealer.com/products/scattered-minds-the-origins-and-healing-of-attention-deficit-disorder-1" target="_blank">Scattered Minds</a></li>
                <li><span class="journal">Journal: </span><a href="https://timeisnotahealer.com/products/questions-to-empower-card-deck" target="_blank">Questions to Empower Card Deck</a></li>
                <li><span class="journal">Journal: </span><a href="https://timeisnotahealer.com/products/recovery-max%E2%84%A2-ice-bath" target="_blank">Lumi Recovery Max Ice Bath</a></li>
                <li><span class="journal">Journal: </span><a href="https://timeisnotahealer.com/products/premium-acupressure-mat-and-pillow-set-black" target="_blank">Unmera Acupressure Mat</a></li>
            </ul><br>
            <p class="post-ul">Have you tried subconscious work before? Tapping into your subconscious mind can really help you take your healing to the next level and understand why you are the way you are, reprogram any limitations and beliefs, and figure out the next steps to achieving your goals. If this sounds interesting to you, <a href="https://timeisnotahealer.com/products/to-be-magnetic-the-pathway-membership" target="_blank">The To-Be Magnetic Pathway Membership</a> might be something to consider. You’ll get access to workshops and guided meditations that will take you into your subconscious to start manifesting the life you really want. Find out more about it here!</p>
            <p class="heading">Seek Professional Growth: If you haven’t already, consider working with a coach, mentor, or therapist who can offer additional insights and support as you advance on your path.
</p>
            <p>You are doing an incredible job on your mental well-being journey. Remember, TINAH is here to support you with resources, tools, and a community to help you continue thriving. Explore the TINAH marketplace to find the perfect resources for your ongoing growth.<a href="https://www.timeisnotahealer.com" target="_blank">Click here to discover more!</a>
        </p>`
};


let alwaysVisibleObj = {
    "a": `
        <p>
            Sometimes listening to or reading other peoples experiences can help you identify your own emotions, behaviors and feelings.<br>
            Have you listened to the TINAH Talks podcast? We share our personal experiences with mental health over there and give even more advice on tools and techniques you can try to eliminate symptoms of some of the most common mental health challenges.
        </p>`,

    "b": `
        <p>
            Alternatively, have you listened to the TINAH Talks podcast? We share our personal experiences with mental health over there and give even more advice on tools and techniques you can try to eliminate symptoms of some of the most common mental health challenges.
        </p>`,

    "c": `
        <p>
            On a side note, if you want to ease yourself in and do a bit more self-discovery before you take the action you could start with our TINAH Talks podcast. We share our personal experiences with mental health over there and give even more advice on tools and techniques you can try to eliminate symptoms of some of the most common mental health challenges.
        </p>`,

    "d": `
        <p>
          Alternatively, have you listened to the TINAH Talks podcast? We share our personal experiences with mental health there and give even more advice on tools and techniques you can try to eliminate symptoms of some of the most common mental health challenges.
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
        </a>
        <a href="https://www.youtube.com/@timeisnotahealer" target="_blank" class="link social-list-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon icon-podcasts" viewBox="0 0 120 120" id="podcasts">
       <rect width="48" height="48" fill="url(#a)" rx="24"></rect>
        <path fill="#fff" d="M23.788 8.68908C16.0715 8.80759 9.72449 14.9966 9.43479 22.7131C9.18459 29.363 13.4247 35.0779 19.3503 37.0794C19.482 37.119 19.6137 37.0136 19.5874 36.8688C19.5084 36.3289 19.4162 35.7758 19.3372 35.2227C19.3108 35.0647 19.2055 34.9199 19.0607 34.854C14.4782 32.892 11.2783 28.2963 11.3968 22.9764C11.5417 16.3529 16.8748 10.9276 23.4983 10.6643C30.6749 10.3878 36.6005 16.1422 36.6005 23.253C36.6005 28.4544 33.4402 32.9183 28.9367 34.854C28.7787 34.9199 28.6733 35.0516 28.6602 35.2227C28.5812 35.789 28.5022 36.342 28.41 36.8688C28.3836 37.0004 28.5153 37.119 28.647 37.0794C34.4146 35.1306 38.5757 29.679 38.5757 23.2661C38.5757 15.1546 31.9259 8.57056 23.788 8.68908Z"></path>
        <path fill="#fff" d="M24.0513 13.5349C18.6919 13.5086 14.2806 17.8935 14.2675 23.2529C14.2543 26.6503 15.9925 29.6395 18.6261 31.3908C18.7446 31.4698 18.9158 31.3777 18.9026 31.2328C18.85 30.5217 18.8105 29.8502 18.7973 29.2313C18.7973 29.0996 18.7446 28.9811 18.6393 28.8889C17.0854 27.4009 16.1373 25.2808 16.2427 22.9501C16.4139 18.9602 19.64 15.7208 23.63 15.5365C28.0808 15.3258 31.7547 18.8811 31.7547 23.2925C31.7547 25.5047 30.8329 27.4931 29.3449 28.9021C29.2527 28.9942 29.2001 29.1127 29.1869 29.2444C29.1737 29.8633 29.1342 30.5349 29.0816 31.246C29.0684 31.3908 29.2396 31.483 29.3581 31.404C31.9917 29.6658 33.7167 26.6766 33.7167 23.2925C33.7299 17.9199 29.3976 13.5612 24.0513 13.5349Z"></path>
        <path fill="#fff" d="M23.9987 25.5179C25.8968 25.5179 27.4355 23.9792 27.4355 22.081 27.4355 20.1829 25.8968 18.6442 23.9987 18.6442 22.1006 18.6442 20.5618 20.1829 20.5618 22.081 20.5618 23.9792 22.1006 25.5179 23.9987 25.5179zM27.4355 28.4938C26.6981 26.9663 25.1443 26.7425 23.9987 26.7425 22.8531 26.7425 21.2992 26.9663 20.5618 28.4938 19.8112 30.0477 21.1939 38.6464 21.6943 39.476 22.0893 40.1344 22.8136 40.6875 23.9987 40.6875 25.1838 40.6875 25.9081 40.1476 26.3031 39.476 26.8035 38.6464 28.1861 30.0477 27.4355 28.4938z"></path>
        <defs>
          <linearGradient id="a" x1="23.95" x2="23.544" y1="48.61" gradientUnits="userSpaceOnUse">
            <stop stop-color="#822CBE"></stop>
            <stop offset="1" stop-color="#D772FB"></stop>
          </linearGradient>
        </defs>
      </svg>
            Listen on Apple Podcasts
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