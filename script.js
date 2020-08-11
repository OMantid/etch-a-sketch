const container = document.getElementById('container');
const btn = document.getElementById('btn');

btn.addEventListener('click', () =>{

    container.innerHTML= '';

    const gridNum = parseInt(window.prompt('Enter a number to create your sketch grid:'));
    
    container.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;

    for (let i=0; i < gridNum ** 2; i++) {
        let div = document.createElement('div');
        div.classList.add('block');
        div.style.backgroundColor = '#dcdcdc';
        container.appendChild(div);
    }

    const block = document.getElementsByClassName('block');

    for (const foo of block) {
        foo.addEventListener('mouseover', () => {
            foo.style.filter += 'brightness(90%)';
        });
    }
});