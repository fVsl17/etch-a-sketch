'use strict'

const container = document.querySelector('.container');

const initialDimension = 16;


for (let i = 0; i < initialDimension * initialDimension; i++){
    const d = document.createElement('div');
    d.classList.add('grid-element');
    container.appendChild(d);
}

container.childNodes.forEach(function(el) {
    el.addEventListener('mouseover', () => {
        el.style.backgroundColor = 'black';
    });
});

const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', ()=>{
    container.childNodes.forEach((el) => {
        el.style.backgroundColor = 'white';
    });
});

const changeSize = document.querySelector('.change-size');

changeSize.addEventListener('click',()=>{
    const x = Number(prompt("New grid size: (Your number * Your number)"));
    console.log(x);
});