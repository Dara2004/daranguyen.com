var buttons = document.getElementsByClassName('btn');
var start = document.getElementById('start');
var count = document.getElementById('count');
var green = document.getElementById('green');
var red = document.getElementById('red');
var yellow = document.getElementById('yellow');
var blue = document.getElementById('blue');
var counter = 0;
var result = [];
var strictMode = false;

start.addEventListener('click', function () {
    var arr = [];
    counter += 1;
    count.innerHTML = counter;
    var innerCounter = 0;
    var simonSaid = setInterval(function () {
            innerCounter += 1;
            var rand = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
            if (innerCounter > counter) {
                clearInterval(simonSaid);
            } else if (rand == 1) {
                playAudio(doo);
                setTimeout(function () {
                    green.style.background = "linear-gradient(to bottom right, #2e8b57, #7fffd4)";
                }, 100);
                arr.push(1);
            } else if (rand == 2) {
                playAudio(re);
                setTimeout(function () {
                    red.style.background = "linear-gradient(to bottom left, #cd0000, #ffb6c1)";
                }, 100);
                arr.push(2);
            } else if (rand == 3) {
                playAudio(mi);
                setTimeout(function () {
                    yellow.style.background = "linear-gradient(to top right, #eec900, #ffffe0)";
                }, 100);
                arr.push(3);
            } else if (rand == 4) {
                playAudio(fa);
                setTimeout(function () {
                    blue.style.background = "linear-gradient(to top left, #00688b, #bfefff)";
                }, 100);
                arr.push(4);
            }
            green.style.background = "linear-gradient(to top right, #2e8b57, #43cd80)";
            red.style.background = "linear-gradient(to bottom right, #cd0000, #ff4500)";
            yellow.style.background = "linear-gradient(to top left, #eec900, #ffff00)";
            blue.style.background = "linear-gradient(to bottom left, #00688b, #00ced1)";
            result = arr;
        },
        1500);
});

//play sound on click
var doo = document.getElementById("do"); //"do.wav"
var re = document.getElementById("re"); //"re.wav"
var mi = document.getElementById("mi"); //"mi.wav"
var fa = document.getElementById("fa"); //"fa.wav"

function playAudio(sound) {
    sound.play();
}


//get player's guesses
var playerGuess = [];
for (var i = 0; i < buttons.length; i++) {
    ! function outer(i) {
        buttons[i].addEventListener('click', function () {
            playerGuess.push(i + 1);
            console.log(result);
            console.log(playerGuess);
            for (var j = 0; j < result.length; j++) {
                if (result[j] != playerGuess[j] && result.length == playerGuess.length) {
                    playerGuess = [];
                    alert("You hit a wrong button!");
                    if (strictMode === true) {
                        count.innerHTML = 0;
                        counter = 0;
                        alert("Play again!");
                    }
                }
            }
            if (result.length == playerGuess.length) {
                playerGuess = [];
            }
        }, false)
    }(i)
}

var strictCntr = 0;
strict.addEventListener('click', function () {
    strictCntr += 1;
    if (strictCntr % 2 === 0 && strictCntr !== 0) {
        strictMode = false;
        alert("Strict mode is off");
    } else {
        strictMode = true;
        alert("Strict mode is on");
    }
})
