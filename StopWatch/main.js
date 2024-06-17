let interval


function begin() {
    
    hours = 0
    minutes = 0
    seconds = 0

    if (hours < 10) {
        
        hours = "0" + hours
    }

    if (minutes < 10) {
        
        minutes = "0" + minutes
    }

    if (seconds < 10) {
        
        seconds = "0" + seconds
    }

    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds

    let count = 0

    updateCount(count)
        
}

function stop() {
    
    clearInterval(interval)

}

function start() {

    timerArray = (document.getElementById('timer').innerText).split(":")

    let count = Number(timerArray[0]) * 60 * 60 + Number(timerArray[1]) + Number(timerArray[2]) 

    updateCount(count)
    
}

function updateCount(count) {

    let countToHours = Math.floor(count / 3600)
    let countToMinutes = Math.floor((count % 3600) / 60)
    let countToSeconds = count % 60
    
    if (countToHours < 10) {
        
        countToHours = "0" + countToHours
    }

    if (countToMinutes < 10) {
        
        countToMinutes = "0" + countToMinutes
    }

    if (countToSeconds < 10) {
        
        countToSeconds = "0" + countToSeconds
    }

    let formattedTime = `${countToHours}:${countToMinutes}:${countToSeconds}`

    document.getElementById('timer').innerText = formattedTime
    
    count++
    
    clearInterval(interval);
    interval = setInterval(function () {updateCount(count)}, 1000);
    

}


