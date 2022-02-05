// Create 16x16 grid and append to container div
// Loop through and create all 16 divs
// Append all divs to 'container' div
// CSS to adjust size probably css grid

const container = document.querySelector('#container');

// Loop through until 16 boxes are made for grid`
for (i = 1; i < 257; i++) {
    let div_container = document.createElement('div');
    div_container.classList.add('div_container');

    container.appendChild(div_container);
}