let x;
let speedX;
let y;
let speedY;

function setup() {
  createCanvas(400, 400);
  x = 26;
  speedX = random(3, 5);
  y = 26;
  speedY = random(1, 5);
}

function draw() {
  background(220);
  x = x + speedX;
  y = y + speedY;

  addBall(x, y);

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
