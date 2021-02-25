let playbutton, stopbutton;
let song1, song2;
let img1, img2;

function preload() {
    song1 = loadSound('HybridMomentsMisfits.mp3');
    song2 = loadSound('HawaiiGoose.mp3');
    img1 = loadImage('album/Misfits.jpg')
}

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(150);

    
    //Play Button
    playbutton = createButton('Play');
    playbutton.position(20, 160);
    playbutton.mousePressed(playSong1);
    
    //Stop Button
    stopbutton = createButton('Stop');
    stopbutton.position(75, 160);
    stopbutton.mousePressed(stopSong1);
}

function draw() {
    fill(255);
    textSize(18);
    text('Playlist:', 20, 30);
    text('1. Misfits - Hybrid Moments', 20, 60);
    text('2. Artist - Song Title', 20, 80);
    text('3. Artist - Song Title', 20, 100);
    text('4. Artist - Song Title', 20, 120);
    text('5. Artist - Song Title', 20, 140);
}

    //Song 1 Play & Stop Functions
function playSong1() {
    if(song1.isPlaying() == false);
    {
        song1.play();
        song1.setVolume(0.3);
        image(img1, 300, 40, 200, 200);
        console.log('Log: Music is Playing');
        print('Print: Music is Playing');
    }
}
function stopSong1() {
    if(song1.isPaused() == true);
    {
        song1.pause();
        background(150);
        console.log('Log: Music is Paused')
        print('Print: Music is Paused');
    }
}