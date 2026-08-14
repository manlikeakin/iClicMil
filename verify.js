// =======================================
// iClicMIL - Verify Claim (MVP)
// =======================================

// Demo Database

const claimsDatabase = [
    {
        claim: "ai images are always fake",
        verdict: "🟡 Misleading",
        confidence: "92%",
        explanation:
            "AI-generated images are not always fake. They are used for education, design, entertainment and many legitimate purposes.",
        sources: ["UNESCO", "Africa Check", "Dubawa"]
    },

    {
        claim: "the earth is flat",
        verdict: "🔴 False",
        confidence: "100%",
        explanation:
            "Scientific evidence confirms that the Earth is an oblate spheroid.",
        sources: ["NASA", "Britannica"]
    },

    {
        claim: "water boils at 100°c at sea level",
        verdict: "🟢 Verified",
        confidence: "99%",
        explanation:
            "Pure water boils at approximately 100°C at sea level under normal atmospheric pressure.",
        sources: ["Britannica", "ScienceDirect"]
    },

    {
        claim: "vaccines cause autism",
        verdict: "🔴 False",
        confidence: "99%",
        explanation:
            "Extensive scientific studies have shown no link between vaccines and autism.",
        sources: ["WHO", "CDC", "UNICEF"]
    }
];

// =======================================
// Get Elements
// =======================================

const claimInput = document.getElementById("claimInput");
const verifyBtn = document.getElementById("verifyBtn");
const clearBtn = document.getElementById("clearBtn");
const resultCard = document.getElementById("resultCard");

// =======================================
// Verify Button
// =======================================

verifyBtn.addEventListener("click", verifyClaim);

// Press Enter

claimInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        verifyClaim();

    }

});

// =======================================
// Verification Function
// =======================================

function verifyClaim(){

    let userClaim = claimInput.value
        .trim()
        .toLowerCase();

    if(userClaim === ""){

        resultCard.className = "result-card";

        resultCard.innerHTML = `

            <h2>⚠ No Claim Entered</h2>

            <p>Please type a claim first.</p>

        `;

        return;

    }

    let result = null;

    for(let i = 0; i < claimsDatabase.length; i++){

        if(claimsDatabase[i].claim === userClaim){

            result = claimsDatabase[i];

            break;

        }

    }

    if(result){

       let sourcesHTML = "";

const sourceLinks = {

    "UNESCO": "https://www.unesco.org",

    "Africa Check": "https://africacheck.org",

    "Dubawa": "https://dubawa.org",

    "NASA": "https://www.nasa.gov",

    "Britannica": "https://www.britannica.com",

    "ScienceDirect": "https://www.sciencedirect.com",

    "WHO": "https://www.who.int",

    "CDC": "https://www.cdc.gov",

    "UNICEF": "https://www.unicef.org"

};

for(let i = 0; i < result.sources.length; i++){

    sourcesHTML += `
        <a href="${sourceLinks[result.sources[i]]}"
           class="source"
           target="_blank">
           ${result.sources[i]}
        </a>
    `;

}


        resultCard.innerHTML = `

            <h2>${result.verdict}</h2>

            <p><strong>Confidence:</strong> ${result.confidence}</p>

            <br>

            <p>${result.explanation}</p>

            <br>

            <h3>Trusted Sources</h3>

            <div class="sources">

                ${sourcesHTML}

            </div>

        `;

        //update statistics
    updateStat("claimsVerified", 1);
    updateStat("truthPoints", 20);


    }
    
    else{

        resultCard.innerHTML = `

            <h2>⚪ No Match Found</h2>

            <p>

                We couldn't find this claim in the demo database.

            </p>

            <p>

                Future versions of iClicMIL will search trusted African
                fact-checking platforms automatically.

            </p>

        `;

    }

}

clearBtn.addEventListener("click", function(){

    claimInput.value = "";

    resultCard.innerHTML = `

        <h2>👋 Ready to verify?</h2>

        <p>

            Enter a claim above and click Verify.

        </p>

    `;

    resultCard.className = "result-card";

    claimInput.focus();

});



