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


//TIMER EXPERIMENTS ---
const periodTimerDisplay = document.getElementById("timer-display");


let periodTimer = {
    INITIAL_MINUTES : 10,
    INITIAL_SECONDS : this.INITIAL_MINUTES * 60,
    DISPLAY_MINUTES : this.INITIAL_SECONDS / 60,
    DISPLAY_SECONDS : Math.floor(this.INITIAL_SECONDS % 60),
    CURRENT_SECONDS : this.INITIAL_SECONDS,
    COUNTER: setInterval(() => this.run(), 1000),
    RUNNING : false,
    update(){
        this.DISPLAY_MINUTES = this.CURRENT_SECONDS / 60;
        this.DISPLAY_SECONDS =  Math.floor(this.CURRENT_SECONDS % 60);
    },
    run(){
        this.RUNNING = true;
        this.update();
        this.CURRENT_SECONDS--;
        console.log("hello" + this.COUNTER);
    }
}


// ---TIMER BLOCK ENDS 



const teams = [
    homeTeam = {
    name : "Home Team",
    currentScore : 0,
    scoreShow : home_score,
    currentFouls : 0,
    foulsShow : home_fouls.children
    },
    awayTeam = {
        name: "Away Team",
        currentScore : 0,
        scoreShow : away_score,
        currentFouls: 0,
        foulsShow : away_fouls.children
    }
];
const teamsKey = {
    'H':0,
    'A':1
}
function addScore(team, points) {
    let currTeam = teams[teamsKey[team]];    
    currTeam.currentScore += points;
    currTeam.scoreShow.innerText = currTeam.currentScore;


}

function foul(team, value) {
    let currTeam = teams[teamsKey[team]];
    if ((currTeam.currentFouls < 5 && value >0) || (currTeam.currentFouls > 0 && value < 0)){
        currTeam.currentFouls += value;

    }
    renderFouls(currTeam);
    console.log(currTeam.currentFouls);
}
function renderFouls(team){
    let color = "yellow";
    for(let i=0; i<5;i++){
        color = i < 3 ? "yellow" : "red";
        if(i < team.currentFouls){
            team.foulsShow[i].classList.add(color);
        }else{
            team.foulsShow[i].classList.remove(color)
        } 
    }
}