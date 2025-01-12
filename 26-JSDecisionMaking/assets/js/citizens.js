// write a switch statement to display what a country's citizens are called. For example, if the user enters "USA", the output should be "Americans". If the user enters "Germany", the output should be "Germans". If the user enters "Nigeria", the output should be "Nigerians". If the user enters any other country, the output should be "I don't know what citizens of that country are called". Use the code below to get the user's input:



let country = window.prompt("Enter your country : ").toLowerCase();

switch (country) {
    case "morocco":
        window.alert("You are Moroccan");
        break;
    case "turkey":
        window.alert("You are Turkish");
        break;
    case "england":
        window.alert("You are English");
        break;
    case "lithuania":
        window.alert("You are Lithuanian");
        break;
    case "pakistan":
        window.alert("You are Pakistani");
        break;
    case "nigeria":
        window.alert("You are Nigerian");
        break;
    default:
        window.alert("You are from a country we don't cover")
}