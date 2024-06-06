function ConvertCurrency() {

    let amountInput = document.getElementById("ammount-input").value
    let bgnInput = document.getElementById("bgn-input")
    let eurInput = document.getElementById("eur-input")
    let usdInput = document.getElementById("usd-input")
    let gbpInput = document.getElementById("gbp-input")
    let bgnOutput = document.getElementById("bgn-output")
    let eurOutput = document.getElementById("eur-output")
    let usdOutput = document.getElementById("usd-output")
    let gbpOutput = document.getElementById("gbp-output")

    if (bgnInput.checked) {
        
        if (bgnOutput.checked) {

            document.getElementById("result-output").innerText = "It`s the same currency."
            
        } else if (eurOutput.checked) {

            document.getElementById("result-output").innerText = amountInput * 0.51
            
        } else if (usdOutput.checked) {

            document.getElementById("result-output").innerText = amountInput * 0.56
            
        } else if (gbpOutput.checked) {

            document.getElementById("result-output").innerText = amountInput * 0.43
            
        } else {

            document.getElementById("result-output").innerText = "Choose a currency to convert to!"
        }
    } else if (eurInput.checked) {
        
        if (bgnOutput.checked) {

            document.getElementById("result-output").innerText = amountInput * 1.96
            
        } else if (eurOutput.checked) {

            document.getElementById("result-output").innerText = "It`s the same currency."
            
        } else if (usdOutput.checked) {

            document.getElementById("result-output").innerText = amountInput * 1.09
            
        } else if (gbpOutput.checked) {

            document.getElementById("result-output").innerText = amountInput * 0.85
            
        } else {

            document.getElementById("result-output").innerText = "Choose a currency to convert to!"
        }

    } else if (usdInput.checked) {

        if (bgnOutput.checked) {
            
            document.getElementById("result-output").innerText = amountInput * 1.80

        } else if (eurOutput.checked) {

            document.getElementById("result-output").innerText = amountInput * 0.92
            
        } else if (usdOutput.checked) {

            document.getElementById("result-output").innerText = "It`s the same currency."
            
        } else if (gbpOutput.checked) {

            document.getElementById("result-output").innerText = amountInput * 0.78
            
        } else {

            document.getElementById("result-output").innerText = "Choose a currency to convert to!"
        }
        
    } else if (gbpInput.checked) {

        if (bgnOutput.checked) {

            document.getElementById("result-output").innerText = amountInput * 2.30
            
        } else if (eurOutput.checked) {

            document.getElementById("result-output").innerText = amountInput * 1.18
            
        } else if (usdOutput.checked) {

            document.getElementById("result-output").innerText = amountInput * 1.28
            
        } else if (gbpOutput.checked) {

            document.getElementById("result-output").innerText = "It`s the same currency."
            
        } else {

            document.getElementById("result-output").innerText = "Choose a currency to convert to!"
        }

    } else {

        document.getElementById("result-output").innerText = "Choose a currency to convert from!"

    }
}


function Clear () {

    document.getElementById("ammount-input").value = 0

    var radioInputs = document.getElementsByName("radio-input");
    for(var i=0;i<radioInputs.length;i++)
        radioInputs[i].checked = false;

    var radioOutputs = document.getElementsByName("radio-output");
    for(var i=0;i<radioOutputs.length;i++)
        radioOutputs[i].checked = false;

    document.getElementById("result-output").innerText = "No result!"

}