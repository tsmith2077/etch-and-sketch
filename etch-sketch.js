// Etch and Sketch Game

const container = document.querySelector('#container');
let squareDimensions = 0;
let numberOfSquares = 0;

// RGB values for function randomColorGenerator



// Prompt user for square grid dimensions, if over 100, or less than 0, ask again.
while (squareDimensions > 100 || squareDimensions < 1) {
    squareDimensions = prompt("Pick a number less than 100 to set square grid dimensions. (ex: 6 = 6x6 grid): ");
    numberOfSquares = squareDimensions * squareDimensions;
}

// Loop through until 16x16 box grid is made.
for (i = 1; i < (numberOfSquares + 1); i++) {
    let div_container = document.createElement('div');
    div_container.classList.add('div_container');

    container.appendChild(div_container);
}


const squares = document.querySelectorAll('.div_container');

// Color the squares blue after mouse hover.
squares.forEach((square) => {
  // Setting rgb values for color change on mouseover
  let r_value = 255;
  let g_value = 255;
  let b_value = 255;

  square.addEventListener('mouseover', (e) => {
    // Color will go from white to add 10% more black over each pass over.
    r_value -= 26;
    g_value -= 26;
    b_value -= 26;

    // Radom color generator
    // r_value = randomNumberRgbValue();
    // g_value = randomNumberRgbValue();
    // b_value = randomNumberRgbValue();  
    e.target.style.backgroundColor = `rgb(${r_value}, ${g_value}, ${b_value})`;
  });
});

// Reset the square color to white.
function resetSquares() {
    squares.forEach((square) => {square.style.backgroundColor = rbg(255, 255, 255);})
};

// User math.random() to randomize numbers from 0 to 255 for rgb values.
function randomNumberRgbValue () {
    return Math.floor(Math.random() * 255);
}
