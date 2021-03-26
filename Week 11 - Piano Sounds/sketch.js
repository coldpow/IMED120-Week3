let x, y, z;
var osc;

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(225);
    
    /* osc = new p5.Oscillator();
    osc.setType('sine');
    osc.freq(0);
    osc.amp(1000);
    osc.start(); */
    
    osc = new p5.Oscillator();
    osc.start();
    osc.amp(0);
    
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
}
function mousePressed() {
    //When mouse is pressed, it makes a sound
    
    //First White Key
    if(mouseX>20 && mouseX<70 && mouseY>20 && mouseY<320) {
        osc.freq(100);
        osc.amp(1000, .05);
    }
    //Second White Key
    if(mouseX>70 && mouseX<120 && mouseY>20 && mouseY<320) {
        osc.freq(120);
        osc.amp(1000, .05);
    }
    //Third White Key
    if(mouseX>120 && mouseX<170 && mouseY>20 && mouseY<320) {
        osc.freq(140);
        osc.amp(1000, .05);
    }
    //Fourth White Key
    if(mouseX>170 && mouseX<220 && mouseY>20 && mouseY<320) {
        osc.freq(160);
        osc.amp(1000, .05);
    }
    //Fifth White Key
    if(mouseX>220 && mouseX<270 && mouseY>20 && mouseY<320) {
        osc.freq(180);
        osc.amp(1000, .05);
    }
    //Sixth White Key
    if(mouseX>270 && mouseX<320 && mouseY>20 && mouseY<320) {
        osc.freq(200);
        osc.amp(1000, .05);
    }
    //Seventh White Key
    if(mouseX>320 && mouseX<370 && mouseY>20 && mouseY<320) {
        osc.freq(220);
        osc.amp(1000, .05);
    }
    //Eighth White Key
    if(mouseX>370 && mouseX<420 && mouseY>20 && mouseY<320) {
        osc.freq(240);
        osc.amp(1000, .05);
    }
    //Nineth White Key
    if(mouseX>420 && mouseX<470 && mouseY>20 && mouseY<320) {
        osc.freq(260);
        osc.amp(1000, .05);
    }
    //Tenth White Key
    if(mouseX>470 && mouseX<520 && mouseY>20 && mouseY<320) {
        osc.freq(280);
        osc.amp(1000, .05);
    }
    //Eleventh White Key
    if(mouseX>520 && mouseX<570 && mouseY>20 && mouseY<320) {
        osc.freq(300);
        osc.amp(1000, .05);
    }
    //Twelfth White Key
    if(mouseX>570 && mouseX<620 && mouseY>20 && mouseY<320) {
        osc.freq(320);
        osc.amp(1000, .05);
    }
    //Thirteen White Key
    if(mouseX>620 && mouseX<670 && mouseY>20 && mouseY<320) {
        osc.freq(340);
        osc.amp(1000, .05);
    }
    //Fourteen White Key
    if(mouseX>670 && mouseX<720 && mouseY>20 && mouseY<320) {
        osc.freq(360);
        osc.amp(1000, .05);
    }
}
function mouseReleased() {
    osc.fade(0, 0.5);
}

      