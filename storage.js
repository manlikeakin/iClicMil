

// ==========================================
// iClicMIL Shared Storage
// ==========================================

// Default statistics
const defaultStats = {

    articlesRead: 0,

    claimsVerified: 0,

    graphicsCreated: 0,

    gamesCompleted: 0,

    truthPoints: 0

};

// Get current statistics
function getStats(){

    return JSON.parse(

        localStorage.getItem("iClicMILStats")

    ) || defaultStats;

}

// Save statistics
function saveStats(stats){

    localStorage.setItem(

        "iClicMILStats",

        JSON.stringify(stats)

    );

}

// Increase a statistic
function updateStat(statName, amount){

    const stats = getStats();

    if(stats.hasOwnProperty(statName)){

        stats[statName] += amount;

    }

    saveStats(stats);

}

// Calculate Rank
function getRank(points){

    if(points >= 1000){

        return "👑 MIL Champion";

    }

    if(points >= 500){

        return "🏆 Master Detective";

    }

    if(points >= 250){

        return "🧠 Young Guru";

    }

    if(points >= 100){

        return "📘 Intern";

    }

    return "🌱 Explorer";

}





