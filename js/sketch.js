let num = 2000;
let range = 6;

let ax = [];
let ay = [];

// let img;
// function preload() {
//   img = loadImage(
//     "assets/img/editors-big.png"
//   );
// }

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.position(0,0)
  for (let i = 0; i < num; i++) {
    ax[i] = width / 2;
    ay[i] = height / 0;
  }
  frameRate(100);
}

function draw() {
  background(77,41,1,0);
  // image(img, 0, 0, 710, 400);


  // Shift all elements 1 place to the left
  for (let i = 1; i < num; i++) {
    ax[i - 1] = ax[i];
    ay[i - 1] = ay[i];
  }

  // Put a new value at the end of the array
  ax[num - 1] += random(-range, range);
  ay[num - 1] += random(-range, range);

  // Constrain all points to the screen
  ax[num - 1] = constrain(ax[num - 1], 0, windowWidth);
  ay[num - 1] = constrain(ay[num - 1], 0, windowHeight);

  // Draw a line connecting the points
  for (let j = 1; j < num; j++) {
    let val = (j / num) * 204.0 + 51;
    stroke(val);
    line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
  }
}
