var words = ['Hi! My name is Kathy Ly.', 
             
             'I am a third year student majoring in Interactive Media with a concentration of AMP.', 
             
             'Harrisburg University is a STEM-focused university in Harrisburg, Pennsylvania', 
             
             'that offers 15 bachelor degrees, 13 master degrees, and 3 doctoral degrees and certificate programs.', 
             
             'My interests are cooking, graphic design, interactive multimedia design, watching anime, and cats.', 
             
             'Harrisburg University'];
var colors = ['white'];

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
    fill(colors[0])
    
    text(words[5], 0, 100, innerWidth);
  
    textSize(14);
    textStyle(NORMAL);
    textFont(LemonRFont);
    fill(colors[0]);
    
    for(let i=0; i<words.length; i++){
        for(let x=0; x<3; x++){
            text(words[i], 0, 175+25*i, innerWidth);
        }
    }
}