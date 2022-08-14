// global variable for square color value and click value
let color = "black";
let click = true;

// Function to create 16x16 grid

function createGrid(size) {

const container = document.querySelector('.board');
let squares = container.querySelectorAll('div');   // These 2 lines of code ensure that every time the board is changed in size, the old squares are being removed. going rom 16 to 17 would just append a 17x17 grid onto the old 16x16 grid.
squares.forEach((div) => div.remove());      // Without the forEach statement to remove the div's each time the user changes the boards size, the new size and number of squares would be appended to the old size and number of squares.
container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

let amount = size * size;  // amount to represent the value inputted by user then * by each other. i.e., 16 x 16 or 24 x24 etc..


for (let i = 0; i < amount; i++){   // amount is equal to the value passed in by the user into the input element on the page.
    const cell = document.createElement('div');
    
    cell.addEventListener('mouseenter', colorSquareTwo);

    cell.style.backgroundColor = "white";
    cell.setAttribute('id', "cell-style");
    container.appendChild(cell);
}
}
createGrid(16);

// function to change grid pixels
function changeGrid(input) {
    if (input >= 2 && input <= 100){
        createGrid(input)    // changeGrid(input) is equal to the value that was passed in by the user into the input element on the page. Therefore (size) inside createGrid is referring to the users input.
    } else {
        alert("Too many, or not enough squares");
    }
}


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
    color = select;         /* When the changeColor function is invoked with a different color passed in as an argument, 
                            the value of the global (color) variable is being changed because we are assigning the value of "select" to "color". changeColor('grey) changes (color) to grey instead of its default value of black.*/
}

// function to generate random color. If the value passed into the changeColor function inside the onclick event is equal to "random", the code below will execute.
function colorSquareTwo() {
    if (click) {
    if (color === "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;   // the hsl() function defines colors using hue-saturation-lightness. Math.random is used to generate a random number on the hue color wheel between 0 and 360.
    } else {
        this.style.backgroundColor = color;
    }
    }
}

document.querySelector('body').addEventListener('click', () => {  // if click is true then it is equal to false and vice versa. Alternating between true or false and color or no color.
    click = !click;
})






