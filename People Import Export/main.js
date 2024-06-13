import { Person, newDate } from "./Person.js";


let person = new Person(1, "Ivan", "Ivanov", "Ivanov", 11111111111111, "email@email.com", 35, "Sofia", "str First", 2000)

let fullName = person.fullName()

document.getElementById("fullName").innerText = fullName

document.getElementById("phone-number-old").innerText = `Phone Number: ${person.phoneNumber}`
document.getElementById("email-old").innerText = `Email: ${person.emailAddress}`
document.getElementById("salary-old").innerText = `Salary: ${person.salary}`

person.changePhoneNumber(22222222222222)
person.changeEmail("new@email.com")
person.increaseSalary()

document.getElementById("phone-number-new").innerText = `Phone Number: ${person.phoneNumber}`
document.getElementById("email-new").innerText = `Email: ${person.emailAddress}`
document.getElementById("salary-new").innerText = `Salary: ${person.salary}`

let date = newDate()

document.getElementById("current-date").innerText = date



