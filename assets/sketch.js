
let w;
let columns;
let rows;
let board;
let next;

config = {
  canvasId: "sketch-holder",
  width: 720,
  height: 400,
  cellSize: 4,
  drawStyle: [
    "drawOG",
    "drawSolarizedDark",
    "drawSolarizedLight",
    "drawDarcula"
  ]
}
drawFunction = config.drawStyle[0];

function setup() {
  var canvas = createCanvas(config.width, config.height);
  canvas.parent(config.canvasId);
  w = config.cellSize;
  columns = floor(width / w);
  rows = floor(height / w);
  board = new Array(columns);
  for (let i = 0; i < columns; i++) {
    board[i] = new Array(rows);
  }
  next = new Array(columns);
  for (i = 0; i < columns; i++) {
    next[i] = new Array(rows);
  }
  init();
}

function draw() {
  this[drawFunction]();
}

function mousePressed() {
  drawFunction = config.drawStyle[Math.floor(Math.random() * config.drawStyle.length)];
  init();
}

function drawOG() {
  background(255);
  generate();
  for ( let i = 0; i < columns;i++) {
    for ( let j = 0; j < rows;j++) {
      let c = color(0, 0, 0);
      if ((board[i][j] == 1)) fill(c);
      else fill(255);
      stroke(0);
      rect(i * w, j * w, w-1, w-1);
    }
  }
}

function drawSolarizedDark() {
  background(7,54,66);
  generate();
  for ( let i = 0; i < columns;i++) {
    for ( let j = 0; j < rows;j++) {
      let c1 = color(38,139,210); //blue
      let c2 = color(42,161,152);  //cyan
      let c3 = color(133,153,0);  //green
      let c4 = color(181,137,0);  //yellow
      let c5 = color(108,113,196);  //violet
      if ((board[i][j] == 1) && i%3 === 0) {fill(c1);}
      else if ((board[i][j] == 1) && i%3 === 1) {fill(c3);}
      else if ((board[i][j] == 1) && i%3 === 2) {fill(c4);}
      else {fill(7,54,66); stroke('black');}
      ellipse(i * w, j * w, w-1, w-1);
    }
  }
}

function drawSolarizedLight() {
  background(238,232,213);
  generate();
  for ( let i = 0; i < columns;i++) {
    for ( let j = 0; j < rows;j++) {
      let c1 = color(38,139,210); //blue
      let c2 = color(42,161,152);  //cyan
      let c3 = color(133,153,0);  //green
      let c4 = color(181,137,0);  //yellow
      let c5 = color(108,113,196);  //violet
      if ((board[i][j] == 1) && i%3 === 0) {fill(c1);}
      else if ((board[i][j] == 1) && i%3 === 1) {fill(c3);}
      else if ((board[i][j] == 1) && i%3 === 2) {fill(c4);}
      else {fill(238,232,213); stroke(238,232,213)}
      ellipse(i * w, j * w, w-1, w-1);
    }
  }

}

function drawDarcula() {
  background(17, 24, 39);
  generate();
  for ( let i = 0; i < columns;i++) {
    for ( let j = 0; j < rows;j++) {
      let c1 = color(255, 121, 198);
      let c2 = color(80, 250, 123)
      if ((board[i][j] == 1) && i%3 === 0) {fill(c2);}
      else if ((board[i][j] == 1) && i%3 === 1) {fill(c1);}
      else if ((board[i][j] == 1) && i%3 === 2) {fill(c1);}
      else {fill(17, 24, 39); stroke('black');}
      ellipse(i * w, j * w, w-1, w-2);
    }
  }
}

function init() {
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (i == 0 || j == 0 || i == columns-1 || j == rows-1) board[i][j] = 0;
      else board[i][j] = floor(random(2));
      next[i][j] = 0;
    }
  }
}

function generate() {
  for (let x = 1; x < columns - 1; x++) {
    for (let y = 1; y < rows - 1; y++) {
      let neighbors = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          neighbors += board[x+i][y+j];
        }
      }

      neighbors -= board[x][y];
      if      ((board[x][y] == 1) && (neighbors <  2)) next[x][y] = 0;           // Loneliness
      else if ((board[x][y] == 1) && (neighbors >  3)) next[x][y] = 0;           // Overpopulation
      else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1;           // Reproduction
      else                                             next[x][y] = board[x][y]; // Stasis
    }
  }

  let temp = board;
  board = next;
  next = temp;
}