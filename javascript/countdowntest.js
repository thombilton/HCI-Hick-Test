function startCountdown(timerText) {
    var obj = document.getElementById(timerText);
    var timer = 5;
    setInterval(function () {
        if (timer > 0) {
            --timer;
            obj.innerText = timer;
        } else {
            // Switch pages or do something
        }
        

    }, 1000);
}

// TODO: Make it more modular
function beginTime(beginTimeText) {
    var d = new Date();
    beginTime = d.getTime();

    localStorage.setItem("beginTime", beginTime);

    var obj = document.getElementById(beginTimeText);
    obj.innerText = "Started!";

}

function endTime(endTimeText) {
    var d = new Date();
    var endTime = d.getTime();

    var beginTime = localStorage.getItem("beginTime");
    var duration = endTime - beginTime;
    
    var obj = document.getElementById(endTimeText);
    obj.innerText = "Duration: " + duration / 1000;
}