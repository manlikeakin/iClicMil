
// =======================================
// iClicMIL Graphics Generator
// =======================================

// Form Elements

const titleInput = document.getElementById("graphicTitle");

const textInput = document.getElementById("graphicText");

const themeSelect = document.getElementById("themeSelect");

const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const categorySelect = document.getElementById("categorySelect");



// Preview Elements

const previewCard = document.getElementById("graphicPreview");

const previewTitle = document.getElementById("previewTitle");

const previewText = document.getElementById("previewText");
const categoryBadge = document.getElementById("categoryBadge");
const currentDate = document.getElementById("currentDate");



// =======================================
// Generate Graphic
// =======================================

generateBtn.addEventListener("click", function(){

    // Get User Input

    const title = titleInput.value.trim();

    const message = textInput.value.trim();

    const theme = themeSelect.value;

    // Validation

    if(title === "" || message === ""){

        alert("Please enter both a title and a message.");

        return;

    }

    // Update Preview

    previewTitle.textContent = title;

    previewText.textContent = message;

    categoryBadge.textContent = categorySelect.value;

const today = new Date();

currentDate.textContent = today.toLocaleDateString(
    "en-GB",
    {
        day:"numeric",
        month:"long",
        year:"numeric"
    }
);


    // Remove Previous Themes

    previewCard.classList.remove("purple");
    previewCard.classList.remove("green");
    previewCard.classList.remove("dark");

    // Apply Selected Theme

    previewCard.classList.add(theme);

});

// =======================================
// Download Graphic
// =======================================
downloadBtn.addEventListener("click", function(){

    html2canvas(previewCard).then(canvas => {

        const link = document.createElement("a");

        link.download = "iClicMIL-Graphic.png";

        link.href = canvas.toDataURL("image/png");

        link.click();

        // ===============================
        // Update user statistics
        // ===============================

        updateStat("graphicsCreated", 1);

        updateStat("truthPoints", 15);

    });

});



// =======================================
// Load Data from Feed
// =======================================

const savedGraphic = JSON.parse(localStorage.getItem("graphicData"));

if(savedGraphic){

    titleInput.value = savedGraphic.title;

    textInput.value = savedGraphic.summary;

    // Set category if it matches one of the options
    if(savedGraphic.category === "AI"){

        categorySelect.value = "AI";

    }else if(savedGraphic.category === "Fact Check"){

        categorySelect.value = "FACT CHECK";

    }else if(savedGraphic.category === "MIL"){

        categorySelect.value = "MEDIA LITERACY";

    }

    // Automatically generate the preview
    generateBtn.click();

    // Clear the saved data
    localStorage.removeItem("graphicData");

}


