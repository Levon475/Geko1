let userName = prompt("Enter your Login", "");

if (userName === "Admin") {
    
    let pass = prompt("Enter your password", "");

    if (pass === "Master") {
        alert("Welcome!");
    } else if (pass === "" || pass === null) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }

} else if (userName === "" || userName === null) {
    alert("Canceled");
} else {
    alert("I don't know you");
}
