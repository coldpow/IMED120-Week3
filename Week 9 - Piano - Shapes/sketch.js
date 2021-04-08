var x, y, z;

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(225);
  
  noLoop();
  for(let x=0; x<14; x++){
    stroke('black');
    fill('white');
    rect(20+x*50,20,50,300,0,0,10,10);
  }
    for(let y=0; y<2; y++){
      fill('black');
      rect(55+y*50,20,30,200,0,0,10,10);
      rect(405+y*50,20,30,200,0,0,10,10);
    }
  for(let z=0; z<3; z++){
    fill('black');
    rect(205+z*50,20,30,200,0,0,10,10);
    rect(555+z*50,20,30,200,0,0,10,10);
  }
}
      