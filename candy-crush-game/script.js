document.addEventListener('DOMContentLoaded', () => {
  // all the html files should be read before loading this JS file
  const grid = document.querySelector('.grid');
  const width = 8;
  const squares = [];


  const candyColours = [
    'thistle',
    'rebeccapurple',
    'red',
    'orange',
    'yellow',
    'green'
  ];

  // Create Board
  createBoard = () => {
    for (let i = 0; i < width * width; i++) {
      // for loop to create the 8x8 grid => flexwrap will ensure they wrap around

      // create divs for each loop, and append them onto the grid container 
      const square = document.createElement('div');
      // generate random variable, to assign a colour to each square
      let randomColour = Math.floor(Math.random() * candyColours.length);
      square.style.backgroundColor = candyColours[randomColour]
      grid.appendChild(square);
      squares.push(square);
    }
  }
  createBoard();



})