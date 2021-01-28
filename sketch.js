function preload() {
    myFont = loadFont('Font/DoctorSoosBold.ttf');    
}

function setup() {
  // put setup code here
    createCanvas(innerWidth, innerHeight);
    textAlign(CENTER);
    noLoop();
}

function draw() {
  // put drawing code here
    background(102, 178, 255);
    textFont(myFont);
    textSize(32);
    
    text('Harrisburg University', 0, 100, innerWidth);
    text('that is truer than true.', 0, 150, innerWidth);

}