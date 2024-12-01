// if statement

let timeOfTheDay = window.prompt("What time of the day is it?")

if(timeOfTheDay.toLowerCase() === "morning"){
    alert(`Good ${timeOfTheDay}`);
}
else if (timeOfTheDay.toLowerCase() === "afternoon") {
    alert(`Good ${timeOfTheDay}`)
}
else if(timeOfTheDay.toLowerCase() === "evening"){
    alert(`Good ${timeOfTheDay}`)
}
else if(timeOfTheDay.toLowerCase() === "night"){
    alert(`Good ${timeOfTheDay}`)
}
else {
    alert("What are you doing on the internet at this time?")
}

window.alert("i am not a part of the if else if block")



