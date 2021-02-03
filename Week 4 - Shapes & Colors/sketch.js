function setup() {
  // put setup code here
    createCanvas(innerWidth, innerHeight);
    background('grey');
}
    
function draw() {
    //Denmark Flag
    noStroke();
    fill('red');
    rect(30,20,600,400);
    fill('white');
    rect(175,20,80,400);
    rect(30,175,600,80);
    
    textSize(36);
    fill(225);
    text('Denmark Flag', 30, 475);
    
    //Congo Flag
    noStroke();
    fill('gold');
    rect(650,20,600,400);
    fill('green');
    triangle(650,20,650,420,1050,20);
    fill('red');
    triangle(1250,20,850,420,1250,420);
    
    textSize(36);
    fill(225);
    text('Congo Flag', 650, 475);
}
