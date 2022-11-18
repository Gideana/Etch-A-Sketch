const container = document.querySelector('#container');
const btn = document.querySelector('.btn');
const clear = document.querySelector('.clear');
const square = document.querySelectorAll('.square');
const radioButtons = document.querySelectorAll('input[name="colors"]');
const squares = document.getElementsByClassName('square');

const defaultColor = '#FFFFFF';
const defaultBackgroundColor = '#000000';
var color = '#000000';

window.onload = createGrid(16);

function getRainbowColors() {
    var rainbowColors = '#' + Math.floor(Math.random()*16777215).toString(16);
    return(rainbowColors);
}

function draw() {
    for (const square of squares) {
        square.addEventListener('mouseover', (event) =>{
            let colorName = document.querySelector('input[name="colors"]:checked').value;
            if (colorName === 'Rainbow') {
                color = getRainbowColors();
            } else if (colorName === 'Black') {
                color = '#000000';
            } else if (colorName === 'Eraser') {
                color = '#FFFFFF';
            }
            
            square.style.backgroundColor = color;
            console.log(color);
            return(color);
        });
    };
};

function createGrid(z) {
    for (i=0; i<(z*z); i++) {
        const square = document.createElement('div');
        square.className = 'square';
        container.appendChild(square);
        let color = defaultColor;
        square.style.backgroundColor = color;
        document.getElementById("container").style.gridTemplateColumns = `repeat(${z}, 1fr)`;
        document.getElementById("container").style.gridTemplateRows = `repeat(${z}, 1fr)`;
        square.addEventListener('mouseover', ()=>draw());
        
    };
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

clear.addEventListener('click', function() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.backgroundColor= defaultColor;
    })
})
