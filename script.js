// Make a 16x16 column grid with JS
// If we use CSS Grid the columns and rows would be 6.25%
const container = document.getElementById('container');

container.style.display = 'grid';

for( let i=0; i < 256; i++){
    let div = document.createElement('div');
    //div.textContent = i;
    container.appendChild(div);
}