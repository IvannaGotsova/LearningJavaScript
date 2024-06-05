function Information() {
    let firstName = document.getElementById("first-name").value
    let lastName = document.getElementById("last-name").value
    let age = document.getElementById("age").value
    let city = document.getElementById("city").value

    let information = firstName + " " + lastName + " - " + age +"  years old, from " + city + "."
    
    document.getElementById("information").innerText = information
}

function CheckBoxRadio() {
    let yesCheckbox = document.getElementById("yes-checkbox")
    let noCheckbox = document.getElementById("no-checkbox")
    let oneRadio = document.getElementById("one-radio")
    let twoRadio = document.getElementById("two-radio")
    let threeRadio = document.getElementById("three-radio")

    if (yesCheckbox.checked && noCheckbox.checked) {

        document.getElementById("result").innerText = "Choose only one option!"

    } else if (yesCheckbox.checked) {
        if (oneRadio.checked && twoRadio.checked == false && threeRadio.checked == false) {

            document.getElementById("result").innerText = "You choose option one!"

        } else if (twoRadio.checked && oneRadio.checked == false && threeRadio.checked == false) {
            
            document.getElementById("result").innerText = "You choose option two!"

        } else if (threeRadio.checked && twoRadio.checked == false && oneRadio.checked == false) {
            
            document.getElementById("result").innerText = "You choose option three!"
        } else {

            document.getElementById("result").innerText = "Choose only one option!"
        }
    } else {
        document.getElementById("result").innerText = "You choose NO!"
    }
}