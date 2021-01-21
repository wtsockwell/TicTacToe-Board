let cells = document.querySelectorAll(".row>div");

let winScreen = document.querySelector("h3")

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked)
}

let turn = 0

function cellClicked() {
    if (event.target.textContent == "O" && winScreen.textContent == " " || event.target.textContent == "X" && winScreen.textContent == " ") {

        return
    }
    turn++;
    if (turn % 2 == 0) {
        event.target.textContent = "O";
    } else {
        event.target.textContent = "X";
    };
    if (turn > 4) {
        winCon();
    };
    if (turn == 9 && winScreen.textContent == " ") {
        winScreen.textContent = "Draw!";
    } else if (turn == 10) {
        turn = 0;
        for (j = 0; j < cells.length; j++) {
            cells[j].textContent = " ";
        }
        winScreen.textContent = " ";
    };
    if (winScreen.textContent !== " ") {
        turn = 9
    };
    console.log(turn)
};

function winCon() {
    if (cells[0].textContent == "X" && cells[1].textContent == "X" && cells[2].textContent == "X") {
        winScreen.textContent = "X Wins!"
    } else if (cells[3].textContent == "X" && cells[4].textContent == "X" && cells[5].textContent == "X") {
        winScreen.textContent = "X Wins!"
    } else if (cells[6].textContent == "X" && cells[7].textContent == "X" && cells[8].textContent == "X") {
        winScreen.textContent = "X Wins!"
    } else if (cells[0].textContent == "X" && cells[3].textContent == "X" && cells[6].textContent == "X") {
        winScreen.textContent = "X Wins!"
    } else if (cells[1].textContent == "X" && cells[4].textContent == "X" && cells[7].textContent == "X") {
        winScreen.textContent = "X Wins!"
    } else if (cells[2].textContent == "X" && cells[5].textContent == "X" && cells[8].textContent == "X") {
        winScreen.textContent = "X Wins!"
    } else if (cells[0].textContent == "X" && cells[4].textContent == "X" && cells[8].textContent == "X") {
        winScreen.textContent = "X Wins!"
    } else if (cells[2].textContent == "X" && cells[4].textContent == "X" && cells[6].textContent == "X") {
        winScreen.textContent = "X Wins!"
    }
    if (cells[0].textContent == "O" && cells[1].textContent == "O" && cells[2].textContent == "O") {
        winScreen.textContent = "O Wins!"
    } else if (cells[3].textContent == "O" && cells[4].textContent == "O" && cells[5].textContent == "O") {
        winScreen.textContent = "O Wins!"
    } else if (cells[6].textContent == "O" && cells[7].textContent == "O" && cells[8].textContent == "O") {
        winScreen.textContent = "O Wins!"
    } else if (cells[0].textContent == "O" && cells[3].textContent == "O" && cells[6].textContent == "O") {
        winScreen.textContent = "O Wins!"
    } else if (cells[1].textContent == "O" && cells[4].textContent == "O" && cells[7].textContent == "O") {
        winScreen.textContent = "O Wins!"
    } else if (cells[2].textContent == "O" && cells[5].textContent == "O" && cells[8].textContent == "O") {
        winScreen.textContent = "O Wins!"
    } else if (cells[0].textContent == "O" && cells[4].textContent == "O" && cells[8].textContent == "O") {
        winScreen.textContent = "O Wins!"
    } else if (cells[2].textContent == "O" && cells[4].textContent == "O" && cells[6].textContent == "O") {
        winScreen.textContent = "O Wins!"
    }
}