const boxes = document.querySelectorAll(".box");
const mole = document.querySelector(".mole");
const restart = document.getElementById("restart");
const timeCounter = document.getElementById("time");
const scoreCounter = document.getElementById("score");

let score = 0;
let courrentBox = 0;
let isLocked = false;
let currentTime = 10;

function showMole(){
    boxes.forEach((box) =>{
        box.classList.remove("mole");
    });
    isLocked = false;
    let randomBox = boxes[Math.floor(Math.random() * 6)];

    randomBox.classList.add("mole");

    courrentBox = randomBox.id;
}



function start(){
    moleTimer = setInterval(showMole, 1000);
    timeTimer = setInterval (countTime, 1000);
}

start();

boxes.forEach(box => {
    box.addEventListener('click', ()=>{
        if (box.id == courrentBox){
            if(isLocked) return;

            score++;
            scoreCounter.innerText = score;
            box.classList.remove("mole");
            isLocked = true;
        }
    });
});

function countTime(){
    currentTime--;
    timeCounter.innerText = currentTime;

    if (currentTime == 0){
        clearInterval(timeTimer);
        clearInterval(moleTimer);
        alert("Game Ended")
    }
}

function reload(){
    location.reload(); 
   
};

restart.addEventListener('click', ()=>{
    reload();
})