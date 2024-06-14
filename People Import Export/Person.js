export class Person {
    constructor(id, firstName, middleName, lastName, phoneNumber, emailAddress, age, city, address, salary) {
      this.id = id
      this.firstName = firstName
      this.middleName = middleName
      this.lastName = lastName
      this.phoneNumber = phoneNumber
      this.emailAddress = emailAddress
      this.age = age
      this.city = city
      this.address = address
      this.salary = salary
    }
  
    fullName() {
       return `${this.firstName} ${this.middleName} ${this.lastName}`
    }

    changePhoneNumber(newNumber) {
        this.phoneNumber = newNumber
    }

    changeEmail(newEmail) {
        this.emailAddress = newEmail
    }

    increaseSalary() {
      this.salary +=200;
    }
    
  }


export function newDate() {

    return new Date()
}