// Loop to create 16x16 grid
function createGrid() {
const container = document.querySelector('.board');

for (let i = 0; i < 256; i++){
    const cell = document.createElement('div');
    
    cell.addEventListener('mouseenter', () => 
    console.log('Mouse Enter'));

    cell.addEventListener('mouseleave', () =>
    console.log('Mouse Leave'));

    cell.style.backgroundColor = "blue";
    cell.setAttribute('id', "cell-style");
    container.appendChild(cell);
}

}
createGrid();


