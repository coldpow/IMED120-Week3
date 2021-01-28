function preload() {
    LemonBTFont = loadFont('Font/LEMONMILK-BoldItalic.otf');
    LemonRFont = loadFont('Font/LEMONMILK-Regular.otf');
}

function setup() {
  // put setup code here
    createCanvas(innerWidth, innerHeight);
    textAlign(CENTER);
    noLoop();
}

function draw() {
  // put drawing code here
    background(150, 150, 150);
    textSize(32);
    textStyle(BOLDITALIC);
    textFont(LemonBTFont);
    fill(255)
    
    text('Harrisburg University', 0, 100, innerWidth);
  
    textSize(14);
    textStyle(NORMAL);
    textFont(LemonRFont);
    fill(225);
    
    text('Hi! My name is Kathy Ly.', 0, 150, innerWidth);
    text('I am a third year student majoring in Interactive Media with a concentration of AMP.', 0, 175, innerWidth);
    text('Harrisburg University is a STEM-focused university in Harrisburg, Pennsylvania', 0, 225, innerWidth);
    text('that offers 15 bachelor degrees, 13 master degrees, and 3 doctoral degrees and certificate programs.', 0, 250, innerWidth);
    text('My interests are cooking, graphic design, interactive multimedia design, watching anime, and cats.', 0, 300, innerWidth);

}