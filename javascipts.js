const container = document.querySelector('.container');
const arrayGrid = [];
let column = 16;
let row = 16;
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
const allGrid = document.querySelectorAll('.singleGrid');
allGrid.forEach(singleGrid => {
    singleGrid.addEventListener('mouseover',() => singleGrid.classList.add('pen'));
})