
// ======================================
// iClicMIL Feed
// ======================================

// Demo Articles

const articles = [

{
    title: "UNESCO launches new AI Literacy Guide",

    category: "AI",

    image: "🤖",

    summary:
    "UNESCO has introduced a new AI Literacy Guide to help young people understand Artificial Intelligence and use it responsibly.",

    why:
    "AI tools are becoming part of our everyday lives. Young people need the skills to identify AI-generated content and use these technologies responsibly.",

    lesson:
    "Always question AI-generated information before sharing it online.",

    source:"https://www.unesco.org"

},

{

    title:"Africa Check debunks viral election claim",

    category:"Fact Check",

    image:"✔️",

    summary:
    "Africa Check investigated a viral election claim and found that the available evidence does not support it.",

    why:
    "False election information can influence public opinion and reduce trust in democratic processes.",

    lesson:
    "Always verify election-related information through trusted fact-checking organisations.",

    source:"https://africacheck.org"

},

{

    title:"Understanding Media & Information Literacy",

    category:"MIL",

    image:"📚",

    summary:
    "Media and Information Literacy helps people access, analyse and evaluate information responsibly.",

    why:
    "MIL helps young people avoid misinformation and become responsible digital citizens.",

    lesson:
    "Think critically before believing or sharing online information.",

    source:"https://www.unesco.org"

},

{

    title:"Dubawa explains misinformation trends",

    category:"Fact Check",

    image:"📰",

    summary:
    "Dubawa highlights common misinformation tactics spreading across social media.",

    why:
    "Understanding misinformation patterns makes them easier to recognise.",

    lesson:
    "Emotional posts deserve extra scrutiny before you share them.",

    source:"https://dubawa.org"

},

{

    title:"Can AI detect Fake News?",

    category:"AI",

    image:"🧠",

    summary:
    "Researchers continue improving AI systems that detect misleading content.",

    why:
    "AI can assist fact-checkers, but human judgement remains essential.",

    lesson:
    "Technology supports critical thinking—it should never replace it.",

    source:"https://www.unesco.org"

},

{

    title:"5 Ways to Spot Misinformation",

    category:"MIL",

    image:"🔍",

    summary:
    "Simple techniques everyone should know before sharing information online.",

    why:
    "A few extra seconds of verification can stop false information from spreading.",

    lesson:
    "Pause. Verify. Then Share.",

    source:"https://www.unesco.org"

}

];

// ======================================
// Elements
// ======================================

const feedGrid = document.getElementById("feedGrid");

const searchInput = document.getElementById("searchInput");

const filterButtons = document.querySelectorAll(".filter-btn");

const modal = document.getElementById("articleModal");

const modalTitle = document.getElementById("modalTitle");

const modalSummary = document.getElementById("modalSummary");

const modalWhy = document.getElementById("modalWhy");

const modalLesson = document.getElementById("modalLesson");

const modalSource = document.getElementById("modalSource");

const closeModal = document.querySelector(".close-modal");

// ======================================
// Display Articles
// ======================================

function displayArticles(articleList){

    feedGrid.innerHTML = "";

    articleList.forEach((article,index)=>{

        feedGrid.innerHTML += `

        <div class="feed-card">

            <div class="feed-image">

                ${article.image}

            </div>

            <div class="feed-content">

                <span class="category">

                    ${article.category}

                </span>

                <h3>${article.title}</h3>

                <p>${article.summary}</p>

               <div class="feed-buttons">

    <button
        class="summary-btn"
        data-index="${index}">

        📖 Learn More

    </button>

    <button
        class="graphic-btn"
        data-index="${index}">

        🎨 Create Graphic

    </button>

    <a
        href="${article.source}"
        target="_blank"
        class="source-btn">

        🌍 Visit Source

    </a>

</div>


            </div>

        </div>

        `;

    });

    attachEvents();

}

// ======================================
// Summary Buttons
// ======================================

function attachEvents(){

    // Read Summary buttons
    document.querySelectorAll(".summary-btn").forEach(button=>{

        button.addEventListener("click",function(){

            openModal(this.dataset.index);

        });

    });

    // Create Graphic buttons
    document.querySelectorAll(".graphic-btn").forEach(button=>{

        button.addEventListener("click",function(){

            const article = articles[this.dataset.index];

            localStorage.setItem(
                "graphicData",
                JSON.stringify(article)
            );

            window.location.href = "graphics.html";

        });

    });

}




// ======================================
// Modal
// ======================================

function openModal(index){

    const article = articles[index];
   ;


    modal.style.display="flex";

    modalTitle.textContent = article.title;

    modalSummary.textContent = article.summary;
     // Update statistics

updateStat("articlesRead", 1);

updateStat("truthPoints", 10)

    modalWhy.textContent = article.why;

    modalLesson.textContent = article.lesson;

    modalSource.href = article.source;

}

// Close Button

closeModal.addEventListener("click",function(){

    modal.style.display="none";

});

// Click Outside

window.addEventListener("click",function(e){

    if(e.target===modal){

        modal.style.display="none";

    }

});

// ======================================
// Search
// ======================================

searchInput.addEventListener("keyup",function(){

    const keyword=this.value.toLowerCase();

    const filtered=articles.filter(article=>

        article.title.toLowerCase().includes(keyword) ||

        article.summary.toLowerCase().includes(keyword)

    );

    displayArticles(filtered);

});

// ======================================
// Filters
// ======================================

filterButtons.forEach(button=>{

    button.addEventListener("click",function(){

        document.querySelector(".filter-btn.active").classList.remove("active");

        this.classList.add("active");

        const category=this.dataset.category;

        if(category==="All"){

            displayArticles(articles);

            return;

        }

        const filtered=articles.filter(article=>article.category===category);

        displayArticles(filtered);

    });

});

// ======================================

displayArticles(articles);



