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
  let colourBeingDragged;
  let colourBeingReplaced;
  let squaresIdBeingDragged;
  let squareIdBeingReplaced;


  // Drag the Candies
  squares.forEach(square => square.addEventListener('dragstart', dragStart));
  squares.forEach(square => square.addEventListener('dragend', dragEnd));
  squares.forEach(square => square.addEventListener('dragover', dragOver));
  squares.forEach(square => square.addEventListener('dragenter', dragEnter));
  squares.forEach(square => square.addEventListener('dragleave', dragLeave));
  squares.forEach(square => square.addEventListener('drop', dragDrop));

  function dragStart() {
    colourBeingDragged = this.style.backgroundColor
    squaresIdBeingDragged = parseInt(this.id)
    console.log(this.id, 'dragstart');
  }

  function dragOver(e) {
    e.preventDefault();
    console.log(this.id, 'dragover');
  }

  function dragEnter(e) {
    e.preventDefault();
    console.log(this.id, 'dragenter');
  }

  function dragLeave() {
    console.log(this.id, 'dragleave');
  }


  function dragDrop() {
    console.log(this.id, 'dragdrop');
    colourBeingReplaced = this.style.backgroundColor;
    squareIdBeingReplaced = parseInt(this.id)
    this.style.backgroundColor = colourBeingDragged
    squares[squaresIdBeingDragged].style.backgroundColor = colourBeingReplaced
  }

  function dragEnd() {
    console.log(this.id, 'dragend');
    // what is a valid move?
    let validMoves = [
      squaresIdBeingDragged - 1,
      squaresIdBeingDragged - width,
      squaresIdBeingDragged + 1,
      squaresIdBeingDragged + width
    ]
    let validMove = validMoves.includes(squareIdBeingReplaced)

    if (squareIdBeingReplaced && validMove) {
      squareIdBeingReplaced = null
    } else if (squareIdBeingReplaced && !validMove) {
      squares[squareIdBeingReplaced].style.backgroundColor = colourBeingReplaced
      squares[squaresIdBeingDragged].style.backgroundColor = colourBeingDragged
    } else squares[squaresIdBeingDragged].style.backgroundColor = colourBeingDragged




  }

















})