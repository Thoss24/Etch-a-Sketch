// Function to create 16x16 grid
let gridSquares = 256;

function createGrid(squares) {
const container = document.querySelector('.board');

for (let i = 0; i < squares; i++){
    const cell = document.createElement('div');
    
    cell.addEventListener('mouseenter', () => cell.style.backgroundColor = "black");

    cell.style.backgroundColor = "white";
    cell.setAttribute('id', "cell-style");
    container.appendChild(cell);
}
}
createGrid(gridSquares);
 

function resetBoard() {
    const container = document.querySelector('.board');
    let cell = container.querySelectorAll('div')
    cell.forEach((div) => div.style.backgroundColor = "white");
}


