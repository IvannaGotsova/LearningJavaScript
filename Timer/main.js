let hoursInput 
let minutesInput 
let secondsInput 
let interval


function start() {

    hoursInput = document.getElementById("hours-input").value
    minutesInput = document.getElementById("minutes-input").value
    secondsInput = document.getElementById("seconds-input").value

    let hours = Number(hoursInput)
    let minutes = Number(minutesInput)
    let seconds = Number(secondsInput)

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

    let count = Number(secondsInput) + Number(minutesInput) * 60 + Number(hoursInput) * 60 * 60

    reduceCount(count)
        
}

function stop() {

    timerArray = document.getElementById('timer').innerText.split(":")
    document.getElementById("hours-input").value = [timerArray[0]]
    document.getElementById("minutes-input").value = [timerArray[1]]
    document.getElementById("seconds-input").value =  [timerArray[2]]
    
    clearInterval(interval)

}

function reset() {

    document.getElementById("hours-input").value = '0'
    document.getElementById("minutes-input").value = '0'
    document.getElementById("seconds-input").value = '0'
    document.getElementById('timer').innerText = "00:00:00"
    
}

function reduceCount(count) {

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
    
    count--


    if (count >= 0) {
        
        clearInterval(interval);
        interval = setInterval(function () {reduceCount(count)}, 1000);
  }

}


