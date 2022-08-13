// global variable for square color value
let color = "black";

// Function to create 16x16 grid
let gridSquares = 256;

function createGrid(squares) {
const container = document.querySelector('.board');

for (let i = 0; i < squares; i++){
    const cell = document.createElement('div');
    
    cell.addEventListener('mouseenter', colorSquare);

    cell.style.backgroundColor = "white";
    cell.setAttribute('id', "cell-style");
    container.appendChild(cell);
}
}
createGrid(gridSquares);

// function to color the squares. (this) refers to the element that received the event. here, (this) is referring to the div that is being hovered over by the user.
function colorSquare() {
    this.style.backgroundColor = color;
}
 
// function to reset Etch-a-Sketch board
function resetBoard() {
    const container = document.querySelector('.board');
    let cell = container.querySelectorAll('div')
    cell.forEach((div) => div.style.backgroundColor = "white");
}

// function to change color of the squares. the (select) parameter refers to the color which has been passed into the changeColor function inside the onclick event within the HTML file.
function changeColor(select) {
    color = select;                    /* When the changeColor function is invoked with a different color passed in as an argument, 
                                          the value of the global (color) variable is being changed. changeColor('grey) changes (color) to grey instead of its default value of black.*/
}

function colorSquare() {
    if (color === "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}







