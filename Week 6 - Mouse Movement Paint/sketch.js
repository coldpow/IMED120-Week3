let bgColor = 180;
let penSize = 10;
let img;
function preload() {
    img = loadImage('flower.png');
}

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(bgColor);
    noStroke();
    
  //Black Brush
    let blackButton;
    blackButton = createButton('Black');
    blackButton.size(100, 50);
    blackButton.position(20, 20);
    blackButton.style('color:white');
    blackButton.style('background:black');
    blackButton.mousePressed(Black);
  
  //Purple Brush
    let purpleButton;
    purpleButton = createButton('Purple');
    purpleButton.size(100, 50);
    purpleButton.position(130, 20);
    purpleButton.style('background:purple');
    purpleButton.mousePressed(Purple);
  
  //Green Brush
    let cyanButton;
    cyanButton = createButton('Green');
    cyanButton.size(100, 50);
    cyanButton.position(240, 20);
    cyanButton.style('background:green');
    cyanButton.mousePressed(Green);
  
  //Eraser Brush
    let eraserButton;
    eraseButton = createButton('Eraser');
    eraseButton.size(100, 30);
    eraseButton.position(350, 80);
    eraseButton.style('background:white');
    eraseButton.mousePressed(Eraser);
  
  //Small brush
    let smallButton;
    smallButton = createButton('Small Brush');
    smallButton.size(100, 30);
    smallButton.position(20, 80);
    smallButton.style('background:white');
    smallButton.mousePressed(smallBrush);
  
  //Medium brush
    let mediumButton;
    mediumButton = createButton('Medium Brush');
    mediumButton.size(100, 40);
    mediumButton.position(130, 80);
    mediumButton.style('background:white');
    mediumButton.mousePressed(mediumBrush);
  
  //Large brush
    let largeButton;
    largeButton = createButton('Large Brush');
    largeButton.size(100, 30);
    largeButton.position(240, 80);
    largeButton.style('background:white');
    largeButton.mousePressed(largeBrush);
}
function draw() {
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, penSize, penSize);
  }
    strokeWeight(0);
    textSize(15);
    textFont('Georgia');
    textStyle(ITALIC);
    text('Double-Click on Canvas to Clear Entire Board', 350, 50);
    
    image(img, 600, 20, 300, 400);
}
function Black() {
    fill('black');
}

function Purple() {
    fill('purple');
}

function Green() {
    fill('green');
}

function Eraser() {
    fill(bgColor);
}
function smallBrush() {
    penSize = 10;
}
function mediumBrush() {
    penSize = 20;
}
function largeBrush() {
    penSize = 30;
}
function doubleClicked() {
    background(bgColor);
}