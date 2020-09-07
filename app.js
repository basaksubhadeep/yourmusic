// select the body part of document
var light = document.querySelector("html").classList;

//detects keypress event
document.addEventListener("keypress", function (e) {
    var pressedKey = e.key;

    makeSound(pressedKey);

    buttonAnimation(pressedKey);
});

//detects click event
document.addEventListener("click", function (e) {
    var clickedButton = e.target.classList[1];

    makeSound(clickedButton);

    buttonAnimation(clickedButton);
});


// makes sound on keypress

function makeSound(currentKey) {
    switch (currentKey) {
        case "a":
            var audio1 = new Audio("sounds/boom.wav");
            audio1.play();
            break;

        case "s":
            var audio2 = new Audio("sounds/clap.wav");
            audio2.play();
            break;

        case "d":
            var audio3 = new Audio("sounds/hihat.wav");
            audio3.play();
            break;
        case "f":
            var audio4 = new Audio("sounds/kick.wav");
            audio4.play();
            break;

        case "g":
            var audio5 = new Audio("sounds/crash.mp3");
            audio5.play();
            break;

        case "h":
            var audio6 = new Audio("sounds/ride.wav");
            audio6.play();
            break;

        case "j":
            var audio7 = new Audio("sounds/snare.mp3");
            audio7.play();
            break;

        case "k":
            var audio8 = new Audio("sounds/tink.wav");
            audio8.play();
            break;

        case "l":
            var audio9 = new Audio("sounds/tom.mp3");
            audio9.play();
            break;

        default: console.log(currentKey);
            break;
    }
}

// makes an animation to the button

function buttonAnimation(activeKey) {
    document.querySelector("." + activeKey).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("." + activeKey).classList.remove("pressed");
    }, 200);
}