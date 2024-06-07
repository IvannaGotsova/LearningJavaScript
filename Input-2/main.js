function Submit() {

    class Person {
        constructor(id, firstName, middleName, lastName, phoneNumber, emailAddress, age, city, address) {
            id = id
            firstName = firstName
            middleName = middleName
            lastName = lastName
            phoneNumber = phoneNumber
            emailAddress = emailAddress
            age = age
            city = city
            address = address
        }
    
        Information() {
    
            return `${id} - ${firstName}  ${middleName}  ${lastName},  ${age} years old, address: ${address},  ${city}, contacts:  ${phoneNumber},  ${emailAddress}.`
    
      }
    }

    let id = document.getElementById("id").value
    let firstName = document.getElementById("first-name").value
    let middleName = document.getElementById("middle-name").value
    let lastName = document.getElementById("last-name").value
    let phoneNumber = document.getElementById("phone-number").value
    let emailAddress = document.getElementById("email-address").value
    let age = document.getElementById("age").value
    let city = document.getElementById("city").value
    let address = document.getElementById("address").value

    const person = new Person (id, firstName, middleName, lastName, phoneNumber, emailAddress, age, city, address)
    
    document.getElementById("information").innerText = person.Information()
}





