const fiveMin = document.getElementById('fiveMinutes');
const tenMin = document.getElementById('tenMinutes');
const twentyMin = document.getElementById('twentyMinutes');
const halfMin = document.getElementById('halfMinutes');
const fourtyMin = document.getElementById('fourtyMinutes');
const pomodoroMinutes = document.getElementById('minutes');
const pomodoroSecond = document.getElementById('seconds');
const shortBreak = document.getElementById('shortBreak');
const longBreak = document.getElementById('longBreak');
const clearButton = document.getElementById('clear');
const stopTime = document.getElementById('stop');
const pomodoroContinue = document.getElementById('continue');

let minutes = 0;
let seconds = 0;
let timer; 

function stopTimer(){
    clearInterval(timer);
}

function startTimer(){
    clearInterval(timer);

    timer = setInterval(function(){
        if(seconds==0){
            if(minutes ==0){
                clearInterval(timer);
                alert("Pomodoro Saniyesi Doldu!!");
                return;
            }
            minutes--;
            seconds = 59;
        } else{
            seconds--;
        }

        pomodoroMinutes.textContent = minutes.toString().padStart(2,'0');
        pomodoroSecond.textContent = seconds.toString().padStart(2,'0'); 
    }, 1000);
};



fiveMin.addEventListener('click', function() {
    minutes = 5;
    seconds = 0;
    startTimer();
});

tenMin.addEventListener('click', function() {
    minutes = 10;
    seconds = 0;
    startTimer();
});

twentyMin.addEventListener('click', function() {
    minutes = 20;
    seconds = 0;
    startTimer();
});

halfMin.addEventListener('click', function() {
    minutes = 30;
    seconds = 0;
    startTimer();
});

fourtyMin.addEventListener('click', function() {
    minutes = 40;
    seconds = 0;
    startTimer();
});


shortBreak.addEventListener('click', function(){
    minutes = 15;
    seconds = 0;
    startTimer();
});

longBreak.addEventListener('click', function(){
    minutes = 25;
    seconds = 0;
    startTimer();
});

clearButton.addEventListener('click', function(){
    pomodoroMinutes.textContent = "";
    pomodoroSecond.textContent = "";
    clearInterval(timer);
});

stopTime.addEventListener('click',function(){
    stopTimer();
})

pomodoroContinue.addEventListener('click', function() {
    startTimer();
});