// HOME TEAM
const home_section = document.getElementById("homeTeam");
const home_name = document.getElementById("homeName");
const home_logo = document.getElementById("homeLogo");
const home_score = document.getElementById("homeScore").firstChild;
const home_fouls = document.getElementById("homeFouls");

// AWAY TEAM
const away_section = document.getElementById("awayTeam");
const away_name = document.getElementById("awayName");
const away_logo = document.getElementById("awayLogo");
const away_score = document.getElementById("awayScore").firstChild;
const away_fouls = document.getElementById("awayFouls");


function addScore(team, points) {
    if (team == "H"){
        team_score = home_score.innerText;
        team_score = parseInt(team_score);
        team_score += points;
        home_score.innerText = team_score;
        return 1;
    }
    if (team == "A"){
        team_score = away_score.innerText;
        team_score = parseInt(team_score);
        team_score += points;
        away_score.innerText = team_score;
    }
}
