'use strict'

const container = document.querySelector('.container');
const initialDimension = 16;
let currentColor = 1;

let randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r} ${g} ${b})`;
}

for (let i = 0; i < initialDimension * initialDimension; i++){
    const d = document.createElement('div');
    d.classList.add('grid-element');
    container.appendChild(d);
}

function addEvents(nodes){
    nodes.forEach(function(el) {
        el.addEventListener('mouseover', () => {
            if (currentColor === 1)
            el.style.backgroundColor = 'black';
            else
            el.style.backgroundColor = randomColor();
        });
    });
}
let nodes = container.childNodes;

addEvents(nodes);

const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', ()=>{
    container.childNodes.forEach((el) => {
        el.style.backgroundColor = 'white';
    });
});

const changeSize = document.querySelector('.change-size');

changeSize.addEventListener('click',()=>{
    let x = prompt('New grid size: (Your number * Your number)');
    x = Number(x);
    while (isNaN(x)){
        x = Number(prompt("Please enter a number!!!"));
    }
    while (x > 100){
        x = Number(prompt("Please enter a number lower or equal to 100!"));
        while (isNaN(x)){
            x = Number(prompt("Please enter a number!!!"));
        }
    }
    const squareDimension = 600 / x;
    console.log(squareDimension);
    x = x * x;
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    for (let i = 0; i < x; i++){
        const d = document.createElement('div');
        d.classList.add('grid-element');
        d.style.height = `${squareDimension}px`;
        d.style.width = `${squareDimension}px`;
        container.appendChild(d);
    }
    nodes = container.childNodes;
    addEvents(nodes);
});

const changeColor = document.querySelector(".change-color");
changeColor.textContent = 'Change color to random';


changeColor.addEventListener('click', () => {
    if (currentColor === 1){
        currentColor = 2;
        changeColor.textContent = 'Change color to black';
    }
    else{
        currentColor = 1;
        changeColor.textContent = 'Change color to random';
    }
});