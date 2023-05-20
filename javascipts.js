const container = document.querySelector('.container');
const arrayGrid = [];
for (let i=1;i<=16;i++) {
    arrayGrid[i] = document.createElement('div');
    container.appendChild(arrayGrid[i]);
    arrayGrid[i].classList.add('rowGrid');
    for (let j=1;j<=16;j++) {
        arrayGrid[i][j] = document.createElement('div');
        arrayGrid[i].appendChild(arrayGrid[i][j]);
        arrayGrid[i][j].classList.add('singleGrid');
    }
}
const allGrid = document.querySelectorAll('.singleGrid');
allGrid.forEach(singleGrid => {
    singleGrid.addEventListener('mouseover',() => singleGrid.classList.add('pen'));
})