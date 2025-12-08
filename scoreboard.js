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

const scores = [home_score,away_score];
const fouls = [home_fouls, away_fouls];
const foul_count = [0,0];

function addScore(team, points) {
    var teams = {
        'H':0,
        'A':1
    }
    team_score = scores[teams[team]].innerText;
    team_score = parseInt(team_score);
    team_score += points;
    scores[teams[team]].innerText = team_score;

}
function foul(team, value) {
    var teams = {
        'H':0,
        'A':1
    }
    if (value > 0  && foul_count[teams[team]] < 5){
        foul_count[teams[team]] += value;
    }
    else if(value < 0 && foul_count[teams[team]] > 0){
        foul_count[teams[team]] += value;
    }
    // foul_count[teams[team]] += value;
    console.log(foul_count[teams[team]])
    console.log(fouls[teams[team]]);
    
}