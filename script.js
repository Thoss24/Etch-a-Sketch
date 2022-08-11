const container = document.querySelector('.board');



for (let i = 0; i < 256; i++){
    const cell = document.createElement('div');
    cell.style.backgroundColor = "blue";
    container.appendChild(cell);
}




