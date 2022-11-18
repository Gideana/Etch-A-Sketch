const container = document.querySelector('#container');
const btn = document.querySelector('.btn');
//const rainbow = document.querySelector('.rainbow');
//const black = document.querySelector('.black');
const square = document.querySelectorAll('.square');
const radioButtons = document.querySelectorAll('input[name="colors"]');

const defaultColor = '#FFFFFF';
const defaultBackgroundColor = '#000000';
var color = '#000000';

window.onload = createGrid(16);

function changeColor() {
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            colorName = radioButton.value;

            if (colorName === 'Rainbow') {
                color = '#' + Math.floor(Math.random()*16777215).toString(16);
            } else if (colorName === 'Black') {
                color = '#000000';
            } else if (colorName === 'Eraser') {
                color = '#FFFFFF';
            }
            return(color);
        };
    };  
};

function draw() {
    const squares = document.getElementsByClassName('square');
    for (const square of squares) {
        square.addEventListener('mouseover', (event) =>{
            square.style.backgroundColor = color;
            console.log(color);
        });
    };
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                colorName = radioButton.value;
                console.log(colorName);
            };
            radioButton.addEventListener('change', ()=>changeColor());
        }
    //};
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



//const buttons = document.querySelectorAll('#colors');
//       buttons.forEach((button) => {
//           button.addEventListener('click', changeColor())
//        })  


//function changeColor() {
//    square.addEventListener('mouseover', (event) =>{
//        const squares = document.querySelectorAll('#square')
//        event.target.style.backgroundColor = color;
//    
//        if (this.className === 'rainbow') {
//            let color = '#' + Math.floor(Math.random()*16777215).toString(16);
//        } else if (this.className === 'black') {
//            let color = '#000000';
//        } else {
//            let color = '#000000';
//        }
//    console.log(color);
//});
//}