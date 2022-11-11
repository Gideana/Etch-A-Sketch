const container = document.querySelector('#container');
const btn = document.querySelector('button');


window.onload = createGrid(16);

function createGrid(z) {
    for (i=0; i<(z*z); i++) {
        const square = document.createElement('div');
        square.id = 'square';
        container.appendChild(square);
        square.addEventListener('mouseover', (event) =>{
            event.target.style.backgroundColor = 'black';
        });
    };
    document.getElementById("container").style.gridTemplateColumns = `repeat(${z}, 1fr)`;
    document.getElementById("container").style.gridTemplateRows = `repeat(${z}, 1fr)`;
};

btn.addEventListener('click', function() {
    container.innerHTML='';
    let z = prompt('Please select number of squares per side for the new grid (max. 100)');
    if (z > 100) {
        alert('Maximum number possible = 100, please select a new number');
    } else {
    return(createGrid(z));
    }
});
