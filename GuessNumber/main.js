let drawRandomNumber = Math.floor(Math.random() * 100) + 1;

function drawNumber() {
    
    if (document.getElementById("input-number").value > 0 && 
        document.getElementById("input-number").value <  101) {

        document.getElementById("input-number").disabled = true;
        document.getElementById("draw-result").innerText = drawRandomNumber
        document.getElementById("input-result").innerText = `You choose ${document.getElementById("input-number").value}`

    } else {

        document.getElementById("input-result").innerText = "Choose a Number Between 1 and 100."

    }
    
}

function submitNumber() {

    let inputNumber = document.getElementById("input-number").value

    if (inputNumber >= drawRandomNumber) {

        document.getElementById("submit-result").innerText = "Your number is winning!"

    } else {

        document.getElementById("submit-result").innerText = "Your number is losing!"

    }

}


function clearNumber() {

    window.location.reload();

}



