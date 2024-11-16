'use strict';

const container = document.querySelector(".container");
const initialGridDimensions = 64;
let finalGridDimensions = initialGridDimensions * initialGridDimensions;
container.setAttribute('style', `display:flex; flex:none; flex-basis:457px; height:200px; flex-wrap:wrap; align-items:center; justify-content:center;`);


for (let i = 0; i < finalGridDimensions; i++){
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
}

const grid = document.querySelectorAll('.grid');

grid.forEach(function(el) {
    el.setAttribute('style', `border:1px solid black; height:16px; width:16px;`);
});


grid.forEach(function(el) {
    el.addEventListener('mouseover', (e) => {
        let c1 = Math.floor(Math.random() * 255);
        let c2 = Math.floor(Math.random() * 255);
        let c3 = Math.floor(Math.random() * 255);
        e.target.style.backgroundColor = `rgb(${c1} ${c2} ${c3})`;
    });
});