'use strict'

const container = document.querySelector('.container');
const initialDimension = 16;


for (let i = 0; i < initialDimension * initialDimension; i++){
    const d = document.createElement('div');
    d.classList.add('grid-element');
    container.appendChild(d);
}

function addEvents(nodes){
    nodes.forEach(function(el) {
        el.addEventListener('mouseover', () => {
            el.style.backgroundColor = 'black';
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

