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
const attackTimerDisplay = document.getElementById("attack-timer-display");

const INITIAL_MINUTES = 10;
const INITIAL_SECONDS = INITIAL_MINUTES * 60;
let DISPLAY_MINUTES = INITIAL_SECONDS / 60;
let DISPLAY_SECONDS = Math.floor(INITIAL_SECONDS % 60);
let CURRENT_SECONDS = INITIAL_SECONDS;

let RUNNING = false;
let countdownTimer;

const INITIAL_ATTACK_TIME = 24;
let CURRENT_ATTACK_TIME = INITIAL_ATTACK_TIME;



function updateTimer(){
    

    if (CURRENT_SECONDS <= 0){
        pauseTimer();
        CURRENT_SECONDS = INITIAL_SECONDS;
        return;
    }
    if(CURRENT_ATTACK_TIME <= 0){
        pauseTimer();
        
        CURRENT_ATTACK_TIME = INITIAL_ATTACK_TIME;
        return;
    }
    CURRENT_SECONDS--;
    CURRENT_ATTACK_TIME--;

    DISPLAY_MINUTES =  parseInt(CURRENT_SECONDS / 60);
    DISPLAY_SECONDS =  Math.floor(CURRENT_SECONDS % 60);
    attackTimerDisplay.innerText = String(CURRENT_ATTACK_TIME);
    console.log(CURRENT_ATTACK_TIME)

    if (DISPLAY_SECONDS < 10){
        periodTimerDisplay.innerText =`${DISPLAY_MINUTES}:0${DISPLAY_SECONDS}`;
        console.log(`${DISPLAY_MINUTES} : 0${DISPLAY_SECONDS}`);
    }else{
        periodTimerDisplay.innerText =`${DISPLAY_MINUTES}:${DISPLAY_SECONDS}`;
        console.log(`${DISPLAY_MINUTES} : ${DISPLAY_SECONDS}`);
    }  
   
}
function runTimer(){
    
    countdownTimer = setInterval(()=>updateTimer(), 1000);
    
};
function pauseTimer(){
    RUNNING = false;
    clearInterval(countdownTimer);
    
};

function resetTimer(){
    clearInterval(countdownTimer);
    CURRENT_ATTACK_TIME = INITIAL_ATTACK_TIME;
    attackTimerDisplay.innerText = CURRENT_ATTACK_TIME;
}
function toggleTimer(){
    RUNNING = !RUNNING ;
    if(RUNNING){
        console.log("Timer is now running...");
        runTimer();
    }else{
        console.log("Timer is now paused.")
        pauseTimer();
    }
    

}



// let periodTimer = {
//     INITIAL_MINUTES : 10,
//     init(){

//         INITIAL_SECONDS : this.INITIAL_MINUTES * 60;
//         DISPLAY_MINUTES : this.INITIAL_SECONDS / 60;
//         DISPLAY_SECONDS : Math.floor(this.INITIAL_SECONDS % 60);
//         CURRENT_SECONDS : this.INITIAL_SECONDS;
//         COUNTER : 0;
//         RUNNING : false;
//     },
//     showStats(){
//         return DISPLAY_MINUTES;
//     }
//     // updateCountdown : function(){
//     //     this.DISPLAY_MINUTES = this.CURRENT_SECONDS / 60;
//     //     this.DISPLAY_SECONDS =  Math.floor(this.CURRENT_SECONDS % 60);
//     //     clearInterval(this.COUNTER);
//     //     console.log("UPDATED");
//     // },
//     // RUN: function(){
//     //     // this.RUNNING = true;
//     //     // this.update();
//     //     this.COUNTER++;
//     //     this.CURRENT_SECONDS--;
//     //     console.log(isNaN(this.COUNTER));
        
//     // }
    
// }
// // let counter = setInterval(periodTimer.RUN, 1000);
// periodTimer.init();
// console.log(periodTimer.showStats());
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
    toggleTimer();
    resetTimer();

}

function foul(team, value) {
    let currTeam = teams[teamsKey[team]];
    if ((currTeam.currentFouls < 5 && value >0) || (currTeam.currentFouls > 0 && value < 0)){
        currTeam.currentFouls += value;

    }
    renderFouls(currTeam);
    console.log(currTeam.currentFouls);
    toggleTimer();
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