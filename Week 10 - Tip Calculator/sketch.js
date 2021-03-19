let num1, num2, num3, i, add, sub, mult, div;

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(183, 183, 164);
    clean();
    
    //Input Box
    input = createInput();
    input.position(20, 65);
    
    //10% Tip Calculation
    button = createButton('10%');
    button.position(input.x + input.width + 5, 65);
    button.mousePressed(tenPercentTip);
    
    //15% Tip Calculation
    button = createButton('15%');
    button.position(input.x + input.width + 50, 65);
    button.mousePressed(fifteenPercentTip);
    
    //20% Tip Calculation
    button = createButton('20%');
    button.position(input.x + input.width + 95, 65);
    button.mousePressed(twentyPercentTip);
    
    //Clear Button
    button = createButton('Reset');
    button.position(input.x +input.width + 140, 65);
    button.mousePressed(resetTip);
}

function draw() {
    textSize(25);
    text('Tip Calculator', 20, 35);
    
    //Drawing Calculator Using Loops
    fill(200);
    rect(60,210,210,325,10);
    fill(255);
    rect(70,220,190,60,10)
    for(let x=0; x<4; x++){
        for(let y=0; y<4; y++){
            stroke('black');
            fill('white');
            rect(70+x*50,295+y*50,40,25,5,5,5,5);
        }
            rect(220,495,40,25,5,5,5,5);
        }
    
    //Adding Text to Calculator
    textSize(18);
    fill(50);
    text('1', 85, 315);
    text('2', 135, 315);
    text('3', 185, 315);
    text('4', 85, 365);
    text('5', 135, 365);
    text('6', 185, 365);
    text('7', 85, 415);
    text('8', 135, 415);
    text('9', 185, 415);
    text('0', 135, 465);

    text('+', 235, 315);
    text('-', 237.5, 365);
    textSize(10);
    text('X', 237.5, 413.5);
    textSize(18);
    text('/', 235, 465);
    text('C', 235, 515);
    text('=', 185, 465);
    textSize(40);
    text('.', 85, 465);
    
    textAlign(LEFT);
    textSize(20);
    text(num1, 90, 245);
    if (add == true) {
    text('+', 75, 270);
    text(num2, 90, 270);
    }
    if (sub == true) {
    text('-', 75, 270);
    text(num2, 90, 270);
    }
    if (mult == true) {
    text('x', 75, 270);
    text(num3, 90, 270);
    }
    if (div == true) {
    text('/', 75, 270);
    text(num3, 90, 270);
    }
}

function clean(){
    num1 = 0;
    num2 = 0;
    num3 = 1;
    i = 0;
    add = false;
    sub = false;
    mult = false;
    div = false;
    console.log(num1);
}

function tenPercentTip() {
    let number = input.value();
    if(number>-1000000) {
        let tipAmount = number * 0.1;
        text('The tip for $' + number + ' is ' + tipAmount, 20, 130);
    }
    else{
        text('Please input a number, Thank you!', 20, 130);
    }
}

function fifteenPercentTip() {
    let number = input.value();
    if(number>-1000000) {
        let tipAmount = number * 0.15;
        text('The tip for $' + number + ' is ' + tipAmount, 20, 160);
    }
    else{
        text('Please input a number, Thank you!', 20, 160);
    }
}

function twentyPercentTip() {
    let number = input.value();
    if(number>-1000000) {
        let tipAmount = number * 0.2;
        text('The tip for $' + number + ' is ' + tipAmount, 20, 190);
    }
    else{
        text('Please input a number, Thank you!', 20, 190);
    }
}

function resetTip() {
    background(183, 183, 164);
}

function mousePressed() {
    if (sq(20) >= sq(mouseX - 85) + sq(mouseY - 315)) { 
        //number 1
        calcNum(1);
    }
    if (sq(20) >= sq(mouseX - 135) + sq(mouseY - 315)) { 
        //number 2
        calcNum(2);
    }
    if (sq(20) >= sq(mouseX - 185) + sq(mouseY - 315)) { 
        //number 3
        calcNum(3);
    }
    if (sq(20) >= sq(mouseX - 85) + sq(mouseY - 365)) { 
        //number 4
        calcNum(4);
    }
    if (sq(20) >= sq(mouseX - 135) + sq(mouseY - 365)) { 
        //number 5
        calcNum(5);
    }
    if (sq(20) >= sq(mouseX - 185) + sq(mouseY - 365)) { 
        //number 6
        calcNum(6);
    }
    if (sq(20) >= sq(mouseX - 85) + sq(mouseY - 415)) { 
        //number 7
        calcNum(7);
    }
    if (sq(20) >= sq(mouseX - 135) + sq(mouseY - 415)) { 
        //number 8
        calcNum(8);
    }
    if (sq(20) >= sq(mouseX - 185) + sq(mouseY - 415)) { 
        //number 9
        calcNum(9);
    }
    if (sq(20) >= sq(mouseX - 135) + sq(mouseY - 465)) { 
        //number 0
        calcNum(0);
    }
    if (sq(20) >= sq(mouseX - 85) + sq(mouseY - 465)) { 
        //colon
        if (i >= 0) {
            i = -1;
        }
    }
    if (sq(20) >= sq(mouseX - 235) + sq(mouseY - 515)) { 
        //clear
        clean();
    }
    if (sq(20) >= sq(mouseX - 235) + sq(mouseY - 315)) {
        //addition
        add = true;
        sub = false;
        mult = false;
        div = false;
        i = 0;
        num1 += num2;
        num2 = 0;
        console.log(num1);
    }
    if (sq(20) >= sq(mouseX - 235) + sq(mouseY - 365)) {
        //subtraction
        add = false;
        sub = true;
        mult = false;
        div = false;
        i = 0;
        num1 -= num2;
        num2 = 0;
        console.log(num1);
    }
    if (sq(20) >= sq(mouseX - 237.5) + sq(mouseY - 413.5)) { 
        //multiplication
        add = false;
        sub = false;
        mult = true;
        div = false;
        i = 0;
        num1 *= num3;
        num3 = 0;
        console.log(num1);
    }
    if (sq(20) >= sq(mouseX - 237.5) + sq(mouseY - 465)) { 
        //division
        add = false;
        sub = false;
        mult = false;
        div = true;
        i = 0;
        num1 /= num3;
        num3 = 0;
        console.log(num1);
    }
    if (sq(20) >= sq(mouseX - 185) + sq(mouseY - 465)) { 
        //equal
        if (add == true) {
        i = 0;
        num1 += num2;
        num2 = 0;
        console.log(num1);
        add = false;
        }
        if (sub == true) {
            i = 0;
            num1 -= num2;
            num2 = 0;
            console.log(num1);
            sub = false;
        }
        if (mult == true) {
            i = 0;
            num1 *= num3;
        num3 = 1;
        console.log(num1);
        mult = false;
        }
        if (div == true) {
        i = 0;
        num1 /= num3;
        num3 = 1;
        console.log(num1);
        div = false;
        }
        if (div == false && mult == false && add == false && sub == false) {
        console.log(num1);
        }
    }

function calcNum(n) {
  if (add == false && sub == false && mult == false && div == false) { // if no operation button is pressed, then happens the following
     if(i == 1) {
    num1 = n + num1 * pow(10, i); 
   } else if (i <= -1) {
       num1 = num1 + n * pow(10, i);
       i--;
   }
     else {
       num1 = n;
       i++;
   }
      console.log(num1);
 }
  if (add == true || sub == true) { // addition and subtraction
     if(i == 1) {
    num2 = n + num2 * pow(10, i); 
   } else if (i <= -1) {
       num2 = num2 + n * pow(10, i);
       i--;
   }
     else {
       num2 = n
       i++;
   }
      console.log(num2);
 }
  if (mult == true || div == true) { //mutiplication and division
    if (num3 == 0) {
      num3 = 0;
    }
     if(i == 1) {
    num3 = n + num3 * pow(10, i); 
   } else if (i <= -1) {
       num3 = num3 + n * pow(10, i);
       i--;
   }
     else {
       num3 = n
       i++;
   }
      console.log(num3);
 }
}
}