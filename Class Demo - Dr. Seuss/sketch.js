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
    
    text('Today you are you', 0, 100, innerWidth);
    text('that is truer than true.', 0, 150, innerWidth);
    text('Thee is no one alive', 0, 200, innerWidth);
    text('who is Youer than You.', 0, 250, innerWidth);
    text('- Dr. Seuss', 100, 300, innerWidth);
}