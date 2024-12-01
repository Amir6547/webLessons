


// Array an ordered collection of items

let arr1 = []

arr1[0] = 1;
arr1[1] = 2;
arr1[3] = 4;
arr1[2] = 3;
console.log(arr1)

arr1[2] = 5;
arr1[3] = 6;
console.log(arr1)


let arr2 = [20, 10, 50, 40, 55];
console.log(arr2.length)

arr2[5] = 100;

console.log(arr2.length);

let mixedArr = [20, "mango", {name: "Amir", age: 14}, "iphone", "manchester city"];
let twoDimArray = [
    [2,3,4, 20, 32, 100, 101], 
    [10, 12, 13, 26, 32], 
    [24, 25, 23],
    [35, 31, 67, 87, 90, 200, 205, 210]

]

console.log(twoDimArray[1][1])
console.log(twoDimArray[2][1])

console.log(twoDimArray[0][2])

console.log(twoDimArray[2][2])
console.log(twoDimArray[1][2])

//locate 100, 26, 87, 210, & 35
console.log(twoDimArray[0][5])
console.log(twoDimArray[1][3])
console.log(twoDimArray[3][3])
console.log(twoDimArray[3][7])
console.log(twoDimArray[3][0])

const employee = {
    name: "Paul Scholes",
    role: "Software Engineer",
    department: "IT",
    salary: 56000,
    dependent: ["Sarah", "Paul Jr", "Samantha"],
}

const employees = [
    {
        name: "Paul Scholes",
        role: "Software Engineer",
        department: "IT",
        salary: 56000,
        dependent: ["Sarah", "Paul Jr", "Samantha"],
    },
    {
        name: "Raheem Sterling",
        role: "Accountant",
        department: "Accounts",
        salary: 70000,
        dependent: ["Victoria", "Raheem Jr", "Raheem Jr II"],
    },
    {
        name: "Dona Smith",
        role: "HR",
        department: "Admin",
        salary: 56000,
        dependent: ["Donald", "Jacob", "Sydney"],
    },
    {
        name: "Khadijah Shaw",
        role: "Legal Representative",
        department: "Legal",
        salary: 56000,
        dependent: ["Khalid", "Fahreed", "Khairah"],
    },
    {
        name: "Amin Davis",
        role: "Software Engineer",
        department: "IT",
        salary: 56000,
        dependent: ["Amen", "Ameen", "Amin O"],
    },
]


console.table(employees)


const players = [
    {
        name: "Alexis Sanchez",
        jerseyNumber: 7,
        position: "Forward",
        weight: 75,
        height: 150,
        age: 35,
        previousClubs: [ "Barcelona", "Arsenal", "Internazionale Milan"],
        currentClub: "Udinise",
    },
    {
        name: "Ciro Immobile",
        jerseyNumber: 9,
        position: "Forward",
        weight: 75,
        height: 150,
        age: 31,
        previousClubs: ["Pescara", "Torino", "BVB Dortmund", "Sevilla", "SS Lazio"],
        currentClub: "Besiktas",
    },
    {
        name:"Cole Palmer",
        jerseyNumber: 20,
        position:"Forward",
        weight: 68,
        height: 185,
        age: 22,
        previousClubs:["Manchester City"],
        currentClub: "Chelsea",
    },
    {
        name:"Manuel Akanji",
        jerseyNumber: 25,
        position:"Defender",
        weight: 78,
        height: 185,
        age: 29,
        currentClub:"Manchester City",
        previousClubs:["Dortmund"]

    },
    {
        name:"Alessandro Bastoni",
        jerseyNumber: 95,
        position:"Defender",
        weight: 83,
        height: 187,
        age: 25,
        currentClub: "Inter Milan",
        previousClubs: ["Atalanta", "Parma"]
    },
    {
        name: "Timo Werner",
        jerseyNumber: 16,
        position: "Forward",
        weight: 64,
        height: 178,
        age: 29,
        currentClub: "Tottenham Hotspur",
        previousClubs:["Stuttgart", "RB Leipzig", "Chelsea"]
    },
    {
        name: "Francisco Conceicao",
        jerseyNumber: 7,
        position: "Forward",
        weight: 62,
        height: 174,
        age: 21,
        currentClub: "Juventus",
        previousClubs:["Porto", "Ajax",]
    },
]   


console.log(players[1].name)

console.table(players)

players[7] = {
    name: "Kareem Benzema",
    jerseyNumber: 9,
    position: "Forward",
    weight: 81,
    height: 182,
    age: 36,
    currentClub: "Al Ithihad",
    previousClubs:["Lyon", "Real Madrid",]
}

console.log(players.length)
console.table(players)


console.log(players[5]["name"])
console.log(players[5].name)