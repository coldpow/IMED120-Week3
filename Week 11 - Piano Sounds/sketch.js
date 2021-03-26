let width = 55;
let height = 350;
var osc;

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(225);
    
    osc = new p5.Oscillator();
    osc.setType('sine');
    osc.freq(0);
    osc.amp(1000);
    osc.start();
    
    //Set of 14 White Keys
    for(let x=0; x<14; x++){
        stroke('black');
        fill('white');
        rect(20+x*50,20,50,300,0,0,10,10);
    }
    //Set of 2 Black Keys
    for(let y=0; y<2; y++){
      fill('black');
      rect(55+y*50,20,30,200,0,0,10,10);
      rect(405+y*50,20,30,200,0,0,10,10);
    }
    //Set of 3 Black Keys
    for(let z=0; z<3; z++){
        fill('black');
        rect(205+z*50,20,30,200,0,0,10,10);
        rect(555+z*50,20,30,200,0,0,10,10);
    }
}

function draw() {
    //When mouse is pressed, it makes a sound
    if(mouseX>20 && mouseX<700 && mouseY>20 && mouseY<300 && mouseIsPressed) {
        osc.freq(130.8128);
        osc.amp(1000, .05);
    }
}
      