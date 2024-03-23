const gridContainer = document.querySelector('.gridContainer');

//creates initial canvas of 16x16
for (i = 1; i <= 16; i++) {
    const gridColumns = document.createElement('div');
    gridColumns.classList.add('gridColumns' );
    gridColumns.setAttribute('id', i);
    gridContainer.appendChild(gridColumns);
};


let gridColumns = document.querySelectorAll('.gridColumns');

gridColumns.forEach((column) => {
    for(i = 1; i <= 16; i++) {
        const gridRows = document.createElement('div');
        gridRows.classList.add('gridRows');
        column.appendChild(gridRows);
    };
});

//enables coloring of squares on hover
let gridRows = document.querySelectorAll('.gridRows');

gridRows.forEach((row) => {
    row.addEventListener('mouseenter', ()  => {
        row.style.backgroundColor = 'yellow';
    });
});


const newGridBtn = document.querySelector('#resetBtn');

function removeOldGrid() {
    gridColumns.forEach((column) => {
        gridContainer.removeChild(column);
    });
};

function createCustomColumns() {
    for(i = 1; i <= numberOfSquares; i++) {
    const gridColumns = document.createElement('div');
    gridColumns.classList.add('gridColumns' );
    gridColumns.setAttribute('id', i);
    gridContainer.appendChild(gridColumns);
};
};

function createCustomRows() {
    gridColumns = document.querySelectorAll('.gridColumns');
    gridColumns.forEach((column) => {
    for(i = 1; i <= numberOfSquares; i++) {
        const gridRows = document.createElement('div');
        gridRows.classList.add('gridRows');
        column.appendChild(gridRows);
    };
});
};

function enableColoring() {
    gridRows = document.querySelectorAll('.gridRows');

    gridRows.forEach((row) => {
        row.addEventListener('mouseenter', ()  => {
            row.style.backgroundColor = 'yellow';
        });
    });
};

let numberOfSquares = '';

newGridBtn.addEventListener('click', () => {
    numberOfSquares = prompt ('How many pixels would you like your canvas to have on each side?');
    if (numberOfSquares < 0 || numberOfSquares > 100 ) {
        alert ('Please choose a number between 0 and 100');
    } else {
        removeOldGrid();
        createCustomColumns();
        createCustomRows();
        enableColoring();
    };
});

const multicolorBtn = document.querySelector('#multicolorBtn')

multicolorBtn.addEventListener('click', () => {
    gridRows = document.querySelectorAll('.gridRows');

    gridRows.forEach((row) => {
        row.addEventListener('mouseenter', ()  => {
            row.style.backgroundColor = 'rgb(100,50,54)';
        });
    });
});