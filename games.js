



// =======================================
// iClicMIL Truth Detective
// =======================================

// Questions

const questions = [

{
    question: "Which headline is more trustworthy?",

    answers: [

        "Scientists discover miracle cure for every disease!",

        "WHO releases a new report on malaria prevention.",

        "Aliens have landed in Africa!"

    ],

    correct:1,

    explanation:
    "Credible headlines usually reference trusted organisations and avoid sensational language."

},

{

    question:"What should you do before sharing breaking news?",

    answers:[

        "Forward it immediately",

        "Verify it from trusted sources",

        "Share only with friends"

    ],

    correct:1,

    explanation:
    "Always verify information before sharing."

},

{

    question:"Which website is a trusted fact-checking platform?",

    answers:[

        "Africa Check",

        "Random Blog",

        "Unknown Facebook Page"

    ],

    correct:0,

    explanation:
    "Africa Check is one of Africa's leading fact-checking organisations."

},

{

    question:"Why is Media & Information Literacy important?",

    answers:[

        "To recognise misinformation",

        "To increase rumours",

        "To avoid reading"

    ],

    correct:0,

    explanation:
    "MIL helps people think critically about information."

},

{

    question:"What is a sign of misinformation?",

    answers:[

        "Emotional headlines",

        "Reliable sources",

        "Verified evidence"

    ],

    correct:0,

    explanation:
    "Misinformation often uses emotional language to manipulate readers."

}

];

// =======================================

let currentQuestion = 0;

let score = 0;

// =======================================
// Elements
// =======================================

const startBtn = document.getElementById("startGameBtn");

const missionCard = document.querySelector(".mission-card");

const quizSection = document.getElementById("quizSection");

const questionText = document.getElementById("question");

const answersDiv = document.getElementById("answers");

const progressText = document.getElementById("progressText");

const scoreText = document.getElementById("scoreText");

const progressFill = document.getElementById("progressFill");
const feedbackCard = document.getElementById("feedbackCard");

const feedbackTitle = document.getElementById("feedbackTitle");

const feedbackExplanation = document.getElementById("feedbackExplanation");

const nextBtn = document.getElementById("nextBtn");



// =======================================
// Start Game
// =======================================

startBtn.addEventListener("click",function(){

    missionCard.style.display="none";

    quizSection.style.display="block";

    loadQuestion();

});

// =======================================
// Load Question
// =======================================

function loadQuestion(){

    const q = questions[currentQuestion];

    questionText.textContent = q.question;

    progressText.textContent =
    `Question ${currentQuestion+1} of ${questions.length}`;

    scoreText.textContent =
    `Score: ${score}`;

    progressFill.style.width =
    `${((currentQuestion)/questions.length)*100}%`;

    answersDiv.innerHTML="";
    feedbackCard.style.display="none";

    q.answers.forEach((answer,index)=>{

        const button=document.createElement("button");

        button.className="answer-btn";

        button.textContent=answer;

        button.addEventListener("click",function(){

            checkAnswer(index);

        });

        answersDiv.appendChild(button);

    });

}

// =======================================
// Check Answer
// =======================================
function checkAnswer(selected){

    const q = questions[currentQuestion];

    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(btn=>btn.disabled=true);

    if(selected===q.correct){

        buttons[selected].classList.add("correct");

        feedbackTitle.textContent="✅ Correct!";

        score++;

    }else{

        buttons[selected].classList.add("wrong");

        buttons[q.correct].classList.add("correct");

        feedbackTitle.textContent="❌ Not Quite";

    }

    feedbackExplanation.textContent=q.explanation;

    feedbackCard.style.display="block";

}




nextBtn.addEventListener("click",function(){

    feedbackCard.style.display="none";

    currentQuestion++;

    if(currentQuestion<questions.length){

        loadQuestion();

    }else{

        finishGame();

    }

});



// =======================================
// Finish
// =======================================

function finishGame(){

    progressFill.style.width="100%";

    let rank="Beginner 🥉";

    if(score===5){

        rank="Legendary 👑";

    }else if(score>=4){

        rank="Master 🏆";

    }else if(score>=3){

        rank="Young Guru 🎖";

    }else if(score>=2){

        rank="Intern 📘";

    }
    // ===============================
// Update user statistics
// ===============================

updateStat("gamesCompleted", 1);

updateStat("truthPoints", score * 20);


    quizSection.innerHTML=`

    <div class="mission-card">

        <div class="mission-badge">

            Mission Complete

        </div>

        <h2>

            🎉 Well Done!

        </h2>

        <h1>

            ${score} / ${questions.length}

        </h1>

        <p>

            Your Rank:

            <strong>${rank}</strong>

        </p>

        <button
            class="start-btn"
            onclick="location.reload()">

            🔄 Play Again

        </button>

    </div>

    `;

}
