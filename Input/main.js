function Information() {
    let firstName = document.getElementById("first-name").value
    let lastName = document.getElementById("last-name").value
    let age = document.getElementById("age").value
    let city = document.getElementById("city").value

    let information = firstName + " " + lastName + " - " + age +"  years old, from " + city + "."
    
    document.getElementById("information").innerText = information
}