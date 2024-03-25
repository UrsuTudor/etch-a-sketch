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
        row.style.backgroundColor = 'black';
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
            row.style.backgroundColor = 'black';
        });
    });
};

let numberOfSquares = '';

newGridBtn.addEventListener('click', () => {
    opacityBtn.disabled = false
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

//functionality for a button that makes the colors displayed on hover be random

const randomColorBtn = document.querySelector('#randomColorBtn')

function randomRGBValue() {
    return (Math.floor(Math.random() * 255))
}

randomColorBtn.addEventListener('click', () => {
    gridRows.forEach((row) => {
        row.addEventListener('mouseenter', ()  => {
            const RGBValue1 = randomRGBValue()
            const RGBValue2 = randomRGBValue()
            const RGBValue3 = randomRGBValue()
            row.style.backgroundColor = 'rgb' + '(' + RGBValue1 + ',' + RGBValue2 + ',' + RGBValue3 + ')';
        });
    });
});

//functionality for a button that makes the opacityValue of the color increase by increments of 10% until it gets to 100%

const btnContainer = document.getElementById('btnContainer');
const opacityBtn = document.createElement('button');
opacityBtn.textContent = 'Toggle opacity';
btnContainer.appendChild(opacityBtn);


let opacityValue = 0.1;

opacityBtn.addEventListener('click', function opacityToggle() {
    enableRowOpacity();
});

    //opacityBtn.disabled = true;

let clicks = 0

function enableRowOpacity() {
    clicks++;
    console.log(clicks)
    let enableOpacity //might not be needed;
    gridRows.forEach((row) => {
        row.addEventListener('mouseenter', enableOpacity = function enableOpacity() {
            row.style.opacity = opacityValue;
            opacityValue = opacityValue + 0.1;
            opacityValue = Math.round(opacityValue * 10) /10;
            if (opacityValue == 1.1) {
                opacityValue = 0.1;
            };
            
            console.log(opacityValue);
        });

    if (clicks > 1) {
        row.removeEventListener('mouseenter', enableOpacity);
        console.log('removing');
        row.addEventListener ('mouseenter', () => {
            row.style.opacity = 1;
        })
    }
})}