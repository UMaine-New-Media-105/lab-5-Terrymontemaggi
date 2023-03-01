let x;
let speedX;
let y;
let speedY;

function setup() {
  createCanvas(400, 400);
  x = 26;
  speedX = 2;
  y = 26;
  speedY = 2;
}

function draw() {
  background(220);
  x = x + speedX;
  //^makes ball move on x axis
  y = y + speedY;
//^makes ball move on y axis
  addBall(x, y);
//^calls ball
  if (x > 376 || x < 24) {
    speedX = speedX * -1;
  }
  //^ball wont go off of canvas via X axis

  if (y > 376 || y < 24) {
    speedY = speedY * -1;
    //^ball wont go off of canvas via Y axis
  }
  
}

function addBall(x, y) {
  ellipse(x, y, 50);
}
function keyPressed() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    speedX = speedX * -1;
  }
//^key press changes direction for x
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
    speedY = speedY * -1;
  }
  //^key press changes direction for y
}
