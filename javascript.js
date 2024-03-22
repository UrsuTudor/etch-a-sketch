const container = document.querySelector('.container')
for (i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.textContent = i
    div.classList.add('squares');
    container.appendChild(div);
}

const squares = document.querySelectorAll('.squares')

squares.forEach((square) => {
    square.addEventListener('mouseenter', ()  => {
        square.style.backgroundColor = 'yellow'
    })
})

const btnContainer = document.querySelector('.btnContainer')
let newGridBtn = document.createElement('button')
newGridBtn.textContent = 'Reset canvas'
btnContainer.appendChild(newGridBtn)

function createNewCanvas(numOfSquares) {
    numberOfSquares = prompt('How many pixels would you like your canvas to have on each side?');
    for (i = 1; i <= (numberOfSquares * numberOfSquares); i++) {
        const div = document.createElement('div');
        div.classList.add('squares');
        div.textContent = i
        container.appendChild(div);
    }
}
newGridBtn.addEventListener('click', () => {
    squares.forEach((square) => {
        container.removeChild(square)
    });
    createNewCanvas();
})

