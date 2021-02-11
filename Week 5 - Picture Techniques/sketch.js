let img;
let input;

function preload() {
    Congo = loadImage('congo-flag.png');
    Denmark = loadImage('denmark-flag.jpg');
}

function setup() {
    // Canvas Code
    createCanvas(innerWidth, innerHeight);
    background(153, 153, 255);
    // User Input
    input = createInput();
    input.position(20, 90);
    input.input(showInput);
    //Button
    let button;
    button = createButton('Submit');
    button.position(input.x + input.width, 90, 50);
    button.mousePressed(Flags);
}
function draw() {
    textSize(24);
    textStyle(NORMAL);
    text('Which flag would you like to see?', 20, 50);
    textSize(14);
    textStyle(ITALIC);
    text('There is only two flags: Denmark and Congo.', 20, 75)
}
function showInput() {
    console.log('You are  typing:', this.value());
    background(153, 153, 255);
    text(input.value(), 20, 125);
}
function Flags() {
    const userInput = input.value();
    
    if(userInput == 'Congo'){
        text('This is the Congo Flag!', 20, 150);
        image(Congo, 20, 160, 300, 200);
    }
    else if(userInput == 'Denmark'){
        text('This is the Denmark Flag!', 350, 150);
        image(Denmark, 350, 160, 300, 200);
    }
    else {
        text("Try it again!", 20, 140);
    }
}