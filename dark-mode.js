

// =======================================
// iClicMIL - Dark Mode
// =======================================

const darkModeToggle = document.getElementById("darkModeToggle");


// =======================================
// Load Saved Theme
// =======================================

const savedTheme = localStorage.getItem("iClicMIL-theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    if (darkModeToggle) {
        darkModeToggle.textContent = "☀️";
    }

}


// =======================================
// Toggle Dark Mode
// =======================================

if (darkModeToggle) {

    darkModeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");


        const darkModeEnabled =
            document.body.classList.contains("dark-mode");


        if (darkModeEnabled) {

            darkModeToggle.textContent = "☀️";

            localStorage.setItem(
                "iClicMIL-theme",
                "dark"
            );

        } else {

            darkModeToggle.textContent = "🌙";

            localStorage.setItem(
                "iClicMIL-theme",
                "light"
            );

        }

    });

}


