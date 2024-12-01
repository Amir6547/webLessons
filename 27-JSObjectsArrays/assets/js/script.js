// user registration
let user = {};


user.fullname = window.prompt("Enter your fullname");
user.email = window.prompt("Enter your email address")
user.age = Number(window.prompt("Enter your age"))
user.height = Number(window.prompt("Enter your height in cm"))
user.weight = Number(window.prompt("Enter your weight in kg"))
user.address = window.prompt("Enter your address")



//window.alert(JSON.stringify(user))

window.alert(`Fullname: ${user.fullname} \n Email: ${user.email} \n Age: ${user.age} \n Height: ${user.height} \n Weight: ${user.weight} \n Address: ${user.address} \n `)

console.table("keys",Object.keys(user)) //returns array of keys

console.table("values", Object.values(user)) // array of values

console.table("entries",Object.entries(user)) // an array with each array containing keys and values.


delete user.height;

window.alert(`Fullamae: ${user.fullname} \n Email: ${user.email} \n Age: ${user.age} \n Height: ${user.height} \n Weight: ${user.weight} \n Address: ${user.address} \n `)


//Hardcoding values

const car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: "2024",
    engineType: "V6",
    isElectric: false,
    vin: "23589233TYC",
}

//overiding hardcoded properities.
car.vin = "348849895883948dhufh";







