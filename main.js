const container = document.querySelector('#container');

for (i=0; i<(16*16); i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.textContent = '';
    container.appendChild(square);
    square.addEventListener('mouseover', (event) =>{
        event.target.style.backgroundColor = 'black';
    }
    )
}

