const container = document.querySelector('.container')
for (i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.classList.add('squares');
    container.appendChild(div);
}

const squares = document.querySelectorAll('.squares')

squares.forEach((square) => {
    square.addEventListener('mouseenter', ()  => {
        square.style.backgroundColor = 'yellow'
    })
})

let newGridBtn = document.createElement('button')
newGridBtn.textContent = 'Reset canvas'
container.appendChild(newGridBtn)

newGridBtn.addEventListener('click', () => {
    let numberOfSquares = prompt('How many pixels would you like your canvas to have on each side?')
})