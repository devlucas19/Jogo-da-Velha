
function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function (letra, i) {

        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 75 * i)

    });
}
const titulo = document.querySelector('h1');
typeWrite(titulo);

document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("click", handleClick)
    })

})

updateSquares()

function handleClick(element) {

    let square = element.target;
    let position = square.id;
    let playerName = ""

    if (handleMove(position)) {
        if (playerTime == 0) {
            playerName = "Jogador 1"
        } else {
            playerName = "Jogador 2"
        }

        setTimeout(() => {
            alert(" O Jogo Acabou! O vencedor foi o " + playerName)
        }, 100)
    };
    updateSquares()

}

function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position]

        if (symbol != " ") {
            square.innerHTML = `<div class="${symbol}"></div>`
        }
    })
}

let restartBtn = document.querySelector(".restartGame")
restartBtn.addEventListener("click", () => {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;

    if (gameOver) {
        gameOver = false
    }
    updateSquares()
})