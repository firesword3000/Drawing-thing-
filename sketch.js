var a = 255 
var b = 45
var c = 105
function setup() {
  createCanvas(1200,1200);
background(0,0,0);
}

function draw() {
  fill(a,b,c)
  a = a - .5
  b = b + .5
//reset back to red color
  if(a = 0) {
    a = 255

  }
  noStroke()
  ellipse(mouseX, mouseY, 20, 20); 
}