/*
**write a code to determine if a number is neutral, or positive, or negative on the number scale
**         ... -9 -8 -7 -6 -5 -4 -3 -2 -1 0 1 2 3 4 5 6 7 8 9 ...
*/

// capture number input from user

let userInput = Number(window.prompt("Enter a number")) 

if(userInput === 0){
    window.alert(`${userInput} is a neutral number`)
} 
else if ( userInput > 0) {
    window.alert(`${userInput} is a positive number`)
}
else if (userInput < 0) {
    window.alert(`${userInput} is a negative number`)
}
else {
    window.alert(`${userInput} invalid input. please refresh and enter a valid number.`)
}
 

