var colors = ['grey', 'red', 'white', 'gold', 'green'];
var flags = ['Denmark Flag', 'Congo Flag'];

function setup() {
  // put setup code here
    createCanvas(innerWidth, innerHeight);
    background(colors[0]);
}
    
function draw() {
    //Denmark Flag
    noStroke();
    fill(colors[1]);
    rect(30,20,600,400);
    fill(colors[2]);
    rect(175,20,80,400);
    rect(30,175,600,80);
    
    textSize(36);
    fill(colors[2]);
    text(flags[0], 30, 475);
    
    //Congo Flag
    noStroke();
    fill(colors[3]);
    rect(650,20,600,400);
    fill(colors[4]);
    triangle(650,20,650,420,1050,20);
    fill(colors[1]);
    triangle(1250,20,850,420,1250,420);
    
    textSize(36);
    fill(colors[2]);
    text(flags[1], 650, 475);
}
