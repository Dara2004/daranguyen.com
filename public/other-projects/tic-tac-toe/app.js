var buttons = document.getElementsByClassName('btn');
var header = document.getElementById('header');
var active = "X";
var player1 = [];
var player2 = [];
var count = 0;
var gamePlaying = true;


//http: //tobyho.com/2011/11/02/callbacks-in-loops/
for (var i = 0; i < buttons.length; i++) {
    ! function outer(i) {
        buttons[i].addEventListener('click', function () {
            if (gamePlaying === true && this.innerHTML != "X" && this.innerHTML != "O") {
                if (count !== 0) {
                    active = active == "X" ? "O" : "X";
                    this.innerHTML = active;
                    active == "X" ? player1[i] = i : player2[i] = i;
                } else {
                    this.innerHTML = "X";
                    player1[0] = 0;
                }
                removeUndefined(player1);
                removeUndefined(player2);
                count += 1;
                if (win(player1)) {
                    header.innerHTML = "Player 1 won!";
                    alert("Player 1 won!");
                    gamePlaying = false;
                } else if (win(player2)) {
                    header.innerHTML = "Player 2 won!";
                    alert("Player 2 won!");
                    gamePlaying = false;
                } else if (count > 8) {
                    header.innerHTML = "It's a tie!";
                    alert("It's a tie!");
                    gamePlaying = false;
                }
            }
        }, false);


    }(i)
}

//exclude undefined element from player arrays
function removeUndefined(player) {
    //    console.log("Hello");
    //    console.log(player.length);
    for (var i = 0; i < player.length; i++) {
        if (player[i] == undefined) {
            player.splice(i, 1);
            removeUndefined(player);
        }
    }
    return player;
}

var arr = [[0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];

function win(player) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < player.length; j++) {
            if (arr[i].includes(player[j]) && player.length >= 3) {
                newArr.push(true);
            }
        }
        if (newArr.length == 3) {
            return true;
        } else {
            newArr = [];
        }
    }
    return false;
}
