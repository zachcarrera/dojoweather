// function to remove the cookie card when the button is clicked
function deleteMe() {
    var cookieContent = document.querySelector(".cookies-card");
    cookieContent.remove();
}

// function to show an alert when a city is clicked
function clickCity() {
    alert("Loading weather report...");
}

// function to change the degree measurement that displays when selected
function changeDegrees(element) {
    // get all the spans in .high and in .low and put them in an array
    var temps = document.querySelectorAll(".high span, .low span");

    // convert to celcius
    if (element.value == "celcius") {
        for (var i = 0; i < temps.length; i++) {
            temps[i].innerHTML = Math.ceil((temps[i].innerHTML - 32) * (5 / 9));
        }
    }
    // convert to farenheit
    else if (element.value == "farenheit") {
        for (var i = 0; i < temps.length; i++) {
            temps[i].innerHTML = Math.floor(temps[i].innerHTML * (9 / 5) + 32);
        }
    }
}
