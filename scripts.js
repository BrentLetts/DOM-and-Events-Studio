// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeOffButton = null;
let landButton = null;
let abortMissionButton = null;
let astronautChat = null;
let shuttleBackground = null;
let spaceShuttleHeight = null;
let lcRocket = null;
let upButton = null;
let downButton = null;
let rightButton = null;
let leftButton = null;
let flightStatus = null;


function init(){
    takeOffButton = document.getElementById("takeoff");
    landButton = document.getElementById("landing");
    abortMissionButton = document.getElementById("missionAbort");
    astronautChat = document.getElementById("astronautChat");
    shuttleBackground = document.getElementById("shuttleBackground");
    spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    lcRocket = document.getElementById("LC-rocket");
    upButton = document.getElementById("upButton");
    downButton = document.getElementById("downButton");
    rightButton = document.getElementById("rightButton");
    leftButton = document.getElementById("leftButton");
    flightStatus = document.getElementById("flightStatus");
    let resetButton = document.getElementById("reset");


    takeOffButton.addEventListener('click', takeOff);
    landButton.addEventListener('click', land);
    abortMissionButton.addEventListener('click', abortMission);
    upButton.addEventListener('click', up);
    downButton.addEventListener('click', down);
    rightButton.addEventListener('click', right);
    leftButton.addEventListener('click', left);
    resetButton.addEventListener('click', reset);

    function takeOff(){
        if(window.confirm("Confirm that the shuttle is ready for takeoff.")){
            shuttleBackground.style.backgroundColor = "blue";
            flightStatus.innerHTML = "Shuttle in flight";
            up();
        }
    }

    function land(){
        if(window.confirm("Confirm that you want to abort the mission.")){
            flightStatus.innerHTML = "The shuttle has landed";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    }

    function abortMission(){
        if(window.confirm("Confirm that you want to abort the mission.")){
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    }
    
    
    
}


let rocketY = 0;
let rocketX = 0;
function up(e){
    let backgroundPosition = shuttleBackground.getBoundingClientRect();
    let lcRocketPosition = lcRocket.getBoundingClientRect();
    if(lcRocketPosition.top !== backgroundPosition.top){
        rocketY -= 10;
        lcRocket.style.transform = "translate("+ rocketX + "px," + rocketY + "px)";
        let height = parseInt(document.getElementById("spaceShuttleHeight").innerHTML) + 10000;
        spaceShuttleHeight.innerHTML = height;
    }
        
    e.preventDefault();
}

function down(e){
    let height = parseInt(document.getElementById("spaceShuttleHeight").innerHTML);
    let backgroundPosition = shuttleBackground.getBoundingClientRect();
    let lcRocketPosition = lcRocket.getBoundingClientRect();
    if(lcRocketPosition.bottom !== backgroundPosition.bottom){//if(height !== 0){
        rocketY += 10;
        lcRocket.style.transform = "translate("+ rocketX + "px," + rocketY + "px)";
        spaceShuttleHeight.innerHTML = height - 10000;
    }
    e.preventDefault();
}

function right(e){
    let backgroundPosition = shuttleBackground.getBoundingClientRect();
    let lcRocketPosition = lcRocket.getBoundingClientRect();
    if(lcRocketPosition.right < backgroundPosition.right){
        rocketX += 10;
        lcRocket.style.transform = "translate("+ rocketX + "px," + rocketY + "px)";
    }
    e.preventDefault();
}

function left(e){
    let backgroundPosition = shuttleBackground.getBoundingClientRect();
    let lcRocketPosition = lcRocket.getBoundingClientRect();   
    if(lcRocketPosition.x > backgroundPosition.x){
        rocketX -= 10;
        lcRocket.style.transform = "translate("+ rocketX + "px," + rocketY + "px)";
    }
    e.preventDefault();
}

function reset(e){
    rocketX = 0;
    rocketY = 0;
    lcRocket.style = "position: absolute; height: 5em; width: 30%; bottom: 0; right: 35%";
    spaceShuttleHeight.innerHTML = 0;
}
    

window.onload = init;