var words = [ 'Playlist:',
             '1. Misfits - Hybrid Moments'];
var consoleprint = [ 'Log: Music is Playing',
              'Print: Music is Playing'];
var playbutton, stopbutton;
var song, img;

function preload() {
    song = loadSound('HybridMomentsMisfits.mp3');
    img = loadImage('album/Misfits.jpg')
}

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(150);

    
    //Play Button
    playbutton = createButton('Play');
    playbutton.position(20, 80);
    playbutton.mousePressed(playSong1);
    
    //Stop Button
    stopbutton = createButton('Stop');
    stopbutton.position(75, 80);
    stopbutton.mousePressed(stopSong1);
}

function draw() {
    fill(255);
    textSize(18);
    text(words[0], 20, 30);
    text(words[1], 20, 60);
}

    //Song 1 Play & Stop Functions
function playSong1() {
    if(song.isPlaying() == false);
    {
        song.play();
        song.setVolume(0.3);
        image(img, 300, 40, 200, 200);
        console.log(consoleprint[0]);
        print(consoleprint[1]);
    }
}
function stopSong1() {
    if(song.isPaused() == true);
    {
        song.pause();
        background(150);
        console.log(consoleprint[0]);
        print(consoleprint[1]);
    }
}