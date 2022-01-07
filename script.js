let turn = 'x';
let title = document.querySelector('.title');

let squares = [];

function finish(n1, n2, n3) {

    document.getElementById('item' + n1).style.backgroundColor = '#6b0b30'
    document.getElementById('item' + n2).style.backgroundColor = '#6b0b30'
    document.getElementById('item' + n3).style.backgroundColor = '#6b0b30'
    title.innerHTML = `${squares[n1]} Won !!`

    setInterval(function() { title.innerHTML += '.' }, 1000)
    setTimeout(function() { location.reload() }, 4000)
}

function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML
    }
    if (squares[1] == squares[2] && squares[1] == squares[3] && squares[1] != '') {
        finish(1, 2, 3)

    } else if (squares[4] == squares[5] && squares[4] == squares[6] && squares[4] != '') {
        finish(4, 5, 6)

    } else if (squares[7] == squares[8] && squares[7] == squares[9] && squares[7] != '') {
        finish(7, 8, 9)
    } else if (squares[1] == squares[4] && squares[1] == squares[7] && squares[1] != '') {
        finish(1, 4, 7)
    } else if (squares[2] == squares[5] && squares[2] == squares[8] && squares[2] != '') {
        finish(2, 5, 8)
    } else if (squares[3] == squares[6] && squares[3] == squares[9] && squares[3] != '') {
        finish(3, 6, 9)
    } else if (squares[1] == squares[5] && squares[1] == squares[9] && squares[1] != '') {
        finish(1, 5, 9)
    } else if (squares[3] == squares[5] && squares[3] == squares[7] && squares[3] != '') {
        finish(3, 5, 7)
    }
}

function game(id) {
    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'X'
        turn = 'O'
        title.innerHTML = 'O'
    } else if (turn === 'O' && element.innerHTML == '') {
        element.innerHTML = 'O'
        turn = 'x'
        title.innerHTML = 'X'
    }
    winner()
}