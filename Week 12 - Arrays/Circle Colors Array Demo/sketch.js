//First Array is 0, then 1, 2, 3.. etc
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'grey'];

function setup() {
    createCanvas(innerWidth,innerHeight);
    background(colors[6]);
    
    console.log(colors.length);
    
}

function draw() {
    for(let i=0; i<colors.length; i++){
        for(let x=0; x<3; x++){
            for(let y=0; y<3; y++){
                let size = random(75);
                fill(colors[i]);
                circle(125+200*x, 125+200*y, 150 - i*10);
            }
        }
    }
}
        