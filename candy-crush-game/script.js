document.addEventListener('DOMContentLoaded', () => {
  // all the html files should be read before loading this JS file
  const grid = document.querySelector('.grid');
  const width = 8;
  const squares = [];


  const candyColours = [
    'blue',
    'rebeccapurple',
    'red',
    'orange',
    'yellow',
    'green'
  ];

  // Create Board
  const createBoard = () => {
    for (let i = 0; i < width * width; i++) {
      // for loop to create the 8x8 grid => flexwrap will ensure they wrap around

      // create divs for each loop, and append them onto the grid container 
      const square = document.createElement('div');
      // generate random variable, to assign a colour to each square
      let randomColour = Math.floor(Math.random() * candyColours.length);
      square.style.backgroundColor = candyColours[randomColour];
      // Make each square on the screen draggable by using the attribute DRAGGABLE
      square.setAttribute('draggable', true);
      // give an ID to each square, so when you move/drag one we know which one is beingmoved
      square.setAttribute('id', i)

      grid.appendChild(square);
      squares.push(square);
    }
  }
  createBoard();

  // Drag the Candies
  squares.forEach(square => square.addEventListener('dragstart', dragStart));
  squares.forEach(square => square.addEventListener('dragend', dragEnd));
  squares.forEach(square => square.addEventListener('dragover', dragOver));
  squares.forEach(square => square.addEventListener('dragenter', dragEnter));
  squares.forEach(square => square.addEventListener('dragleave', dragLeave));
  squares.forEach(square => square.addEventListener('drop', dragDrop));

  function dragStart() {
    console.log(this.id, 'dragstart');
  }

  function dragOver() {
    console.log(this.id, 'dragover');
  }

  function dragEnter() {
    console.log(this.id, 'dragenter');
  }

  function dragLeave() {
    console.log(this.id, 'dragleave');
  }

  function dragEnd() {
    console.log(this.id, 'dragend');
  }

  function dragDrop() {
    console.log(this.id, 'dragdrop');
  }


















})