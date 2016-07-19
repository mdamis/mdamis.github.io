var message;
var red, green, blue, currentRed, currentGreen, currentBlue;

window.onload = function() {
    message = document.getElementById('message');
    randomColor();
    currentRed = red;
    currentGreen = green;
    currentBlue = blue;
    setInterval(updateTextColor, 50);
}

function updateTextColor() {
    message.style.color = 'rgb(' + currentRed + ',' + currentGreen + ',' + currentBlue + ')';
    updateColor();
}

function updateColor() {
    if (red === currentRed && green === currentGreen && blue === currentBlue) {
        randomColor();
        return;
    }

    if (currentRed < red) {
        currentRed++;
    } else if (currentRed > red) {
        currentRed--;
    }

    if (currentGreen < green) {
        currentGreen++;
    } else if (currentGreen > green) {
        currentGreen--;
    }

    if (currentBlue < blue) {
        currentBlue++;
    } else if (currentBlue > blue) {
        currentBlue--;
    }
}

function randomColor() {
    red = randomInt(30, 225);
    green = randomInt(30, 225);
    blue = randomInt(30, 225);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
