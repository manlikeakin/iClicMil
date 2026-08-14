// ==========================================
// iClicMIL Dashboard
// ==========================================

// Get saved statistics
const stats = getStats();

// Update dashboard numbers
document.getElementById("articlesCount").textContent = stats.articlesRead;

document.getElementById("claimsCount").textContent = stats.claimsVerified;

document.getElementById("graphicsCount").textContent = stats.graphicsCreated;

document.getElementById("gamesCount").textContent = stats.gamesCompleted;

document.getElementById("truthPoints").textContent = stats.truthPoints;

// Update Rank
document.getElementById("rankText").textContent = getRank(stats.truthPoints);

// ==========================================
// Optional XP Display
// ==========================================

// For now, we'll use Truth Points as XP.
// Later we can separate XP and Truth Points if we want.

const xpBox = document.querySelector(".xp-box");

if (xpBox) {
    xpBox.textContent = `⭐ ${stats.truthPoints} XP`;
}

// ==========================================
// Update Welcome Level
// ==========================================

const welcomeHeading = document.querySelector(".welcome-card h1");

if (welcomeHeading) {

    let level = 1;

    if (stats.truthPoints >= 1000) {

        level = 5;

    } else if (stats.truthPoints >= 500) {

        level = 4;

    } else if (stats.truthPoints >= 250) {

        level = 3;

    } else if (stats.truthPoints >= 100) {

        level = 2;

    }

    welcomeHeading.textContent = `Level ${level} · ${getRank(stats.truthPoints)}`;
}

// ==========================================
// Update Progress Bar
// ==========================================

const progressFill = document.querySelector(".progress-fill");

if (progressFill) {

    // Percentage toward the next 100 Truth Points
    const percentage = stats.truthPoints % 100;

    progressFill.style.width = `${percentage}%`;
}

// ==========================================
// Update Progress Text
// ==========================================

const progressText = document.querySelector(".progress-card p");

if (progressText) {

    const remaining = 100 - (stats.truthPoints % 100);

    progressText.innerHTML =
        `<strong>${stats.truthPoints} XP</strong> earned • ${remaining} XP to next level`;
}

