/** 
** A variable is more like a container for storing data that has to with our programme. Variables are declared using the keyword let. For example, let age = 15; 

* Varibles declated with let can be reassigned but not redeclared within the same block.

** Constants this is a kind of data that its value does not change. Lets say the boiling point of water. Constants are declared using the keyword const. For example, const boilingPoint = 100;

* constants cannot be reassigned or redeclared within the same block.


** Variables that are not declared inside of an if block, loop, or function are said to have a local or block scope. Variables declared outside of the above mentioned are said to have global scope within our programme.

* A block of code can be a line of  code or lines of code that are separated from other codes in the programme. It could be for the sake of reusability as in a function, control flow as in if and else blocks or iteration purposes as in loops.
*/


// Global Scope
let age = 18;
age = 20; // reassigning

const boilingPoint = 100;
let globalScope = "Global scope";

function determineAge(){
    // Local or Block Scope
    let age = 21;
    const boilingPoint = 1000;
    console.log(globalScope);
    
}



if(age >= 18){
    //Local or Block Scope
    let age = 21;
    const boilingPoint = 1200;
    let localScope = "Local scope";
    console.log(globalScope);
    console.log(localScope);
}


console.log(localScope)

