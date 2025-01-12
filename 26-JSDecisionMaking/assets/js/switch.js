let club = window.prompt("Enter your favorite EPL club name: ").toLowerCase();


switch (club) {
    case "arsenal":
        window.alert("You are supporting Arsenal");
        break;
    case "chelsea":
        window.alert("You are supporting Chelsea");
        break;
    case "manchester united":
        window.alert("You are supporting Manchester United");
        break;
    case "manchester city":
        window.alert("You are supporting Manchester City");
        break;
    case "liverpool":
        window.alert("You are supporting Liverpool");
        break;
    case "tottenham":
        window.alert("You are supporting Tottenham");
        break;
    default:
        window.alert("You are supporting a club that is not in the top 6");
}


