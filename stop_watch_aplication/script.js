let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

// Start button event listener
startBtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

// Stop button event listener
stopBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
});

// Reset button event listener
resetBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = 0;
    secs = 0;
    mins = 0;
});

// Timer function
function startTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        secs++;
        if (secs === 60) {
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
