const container = document.querySelector('.container');
const arrayGrid = [];
let allGrid;
let column = 16;
let row = 16;
const buttonChangeGrid = document.querySelector('.changeGrid');
const buttonClear = document.querySelector('.clear');
buttonChangeGrid.addEventListener('click',changeGrid);
buttonClear.addEventListener('click',clear);

function spacePen() {
    for (let i=1;i<=column;i++) {
        arrayGrid[i] = document.createElement('div');
        container.appendChild(arrayGrid[i]);
        arrayGrid[i].classList.add('columnGrid');
        for (let j=1;j<=row;j++) {
            arrayGrid[i][j] = document.createElement('div');
            arrayGrid[i].appendChild(arrayGrid[i][j]);
            arrayGrid[i][j].classList.add('singleGrid');
        }
    }
    allGrid = document.querySelectorAll('.singleGrid');
    allGrid.forEach(singleGrid => {
        singleGrid.addEventListener('mouseover',() => singleGrid.classList.add('pen'));
    })
}

function changeGrid() {
    resetGrid();
    column = prompt("Column?","");
    row = prompt ("Row?","");
    spacePen()
}

function resetGrid() {
    for (let i=1;i<=column;i++) {
        arrayGrid[i].remove();
    }
}

function clear() {
    for (const singleGrid of allGrid) {
        singleGrid.classList.add('clear');
    }
    resetGrid()
    spacePen();
}
spacePen();
