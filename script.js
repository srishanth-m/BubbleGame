var timer = 60;
let score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.getElementById("scoreVal").textContent = score;
}

function makeBubbles() {
    var clutter = "";

    for (let i = 0; i <= 55; i++) {
        let num = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${num}</div>`
    }

    document.getElementById("b-panel").innerHTML = clutter;
}

function runTimer(){
    var timerInt = setInterval(function(){
        if(timer > 0) {
            timer--;
            document.getElementById("timer").innerHTML = timer;
        }else{
            document.getElementById("b-panel").innerHTML = "<div>GAME OVER</div>"
            clearInterval(timerInt);
        }
    },1000)
}

function getNewHit(){
    hitrn = Math.floor(Math.random() *10);
    document.getElementById("hitval").textContent = hitrn;
}

document.getElementById("b-panel").addEventListener("click" , function(dets){
    var clickeNum = Number(dets.target.textContent);
    if(clickeNum === hitrn){
        increaseScore();
        makeBubbles();
        getNewHit();
    }
})

makeBubbles();
runTimer();
getNewHit();
