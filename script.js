// Make a 16x16 column grid with JS
// If we use CSS Grid the columns and rows would be 6.25%
const container = document.getElementById('container');

function createGrid() {
    container.style.gridTemplateColumns = 'repeat(16, 1fr)';
    container.style.gridTemplateRows = 'repeat(16, 1fr)';

    for (let i=0; i < 256; i++) {
        let div = document.createElement('div');
        div.classList.add('block');
        div.style.backgroundColor = '#dcdcdc';
        container.appendChild(div);
    }
}

createGrid();

const block = document.getElementsByClassName('block');

for (const foo of block) {
    foo.addEventListener('mouseover', () => {
        foo.style.backgroundColor = '#696969';
    });
    foo.addEventListener('mouseout', () => {
        foo.style.backgroundColor = '#696969';
    });
}