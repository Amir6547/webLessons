/*
** Write a program that checks if a number is even or odd.
** 7 % 2 we get 1
** 7 % 5 we get 2
** 4 % 2 we get 0
*/

let userInput = Number(window.prompt("Enter a number"))


if( userInput % 2 === 0) {
    window.alert(`${userInput} is an even number`)
}
else {
    window.alert(`${userInput} is an odd number`)
}