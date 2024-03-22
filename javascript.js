const gridContainer = document.querySelector('.gridContainer')

for (i = 1; i <= 16; i++) {
    const gridColumns = document.createElement('div');
    gridColumns.classList.add('gridColumns' );
    gridColumns.setAttribute('id', i);
    gridContainer.appendChild(gridColumns);
}

const gridColumns = document.querySelectorAll('.gridColumns');
console.log(gridColumns)
gridColumns.forEach((column) => {
    for(i = 1; i <= 16; i++) {
        const gridRows = document.createElement('div');
        gridRows.classList.add('gridRows');
        column.appendChild(gridRows)
    }
})

let squares = document.querySelectorAll('.squares')

squares.forEach((square) => {
    square.addEventListener('mouseenter', ()  => {
        square.style.backgroundColor = 'yellow'
    })
})

let newGridBtn = document.querySelector('.resetBtn')


newGridBtn.addEventListener('click', () => {
    squares.forEach((square) => {
        gridContainer.removeChild(square);
    });
    squares = document.querySelectorAll('.squares')

    let numberOfSquares = prompt('How many pixels would you like your canvas to have on each side?')

    for (i = 1; i <= numberOfSquares; i++) {
        const div = document.createElement('div');
        div.classList.add('squares');
        gridContainer.appendChild(div);
    };
    
})