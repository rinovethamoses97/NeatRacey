var gamescreen=0;
var carX;
var carY;
var obX=70;
var obY=10;
var carVelocity=4;
function setup(){
    createCanvas(1300,630);
    carX=20;
    carY=height/2.3;
}
function draw(){
    if(gamescreen==0){
        initscreen();
    }
    else{
        gameplayscreen();
    }
}
function initscreen(){
    background(166,186,216);
    textSize(70);
    text("NeatRacey",width/2.7,height/6);
    textSize(15);
    text("click to start",width/2.1,height/1.5);
}
function mousePressed(){
    if(gamescreen==0){
        gamescreen=1;
    }
}

function gameplayscreen(){
    background(10,20,10);
    drawCar();
    if(keyIsPressed){
        if(key=="ArrowLeft"){
            carX=carX-carVelocity;
        }
        else if(key=="ArrowRight"){
            carX=carX+carVelocity;
        }
        else if(key=="ArrowUp"){
            carY=carY-carVelocity;
        }
        else if(key=="ArrowDown"){
            carY=carY+carVelocity;
        }
    }
    drawObstacles();
}
function keyPressed(){
    keyIsPressed=true;
}
function keyReleased(){
    keyIsPressed=false;
}
function drawCar(){
    fill(color(255,255,255));
    rect(carX,carY,50,50,5);
}
function drawObstacles(){
    fill(color(237, 2, 49));
    rect(obX,(obY=obY+3)%height,50,50,5);
    rect(obX,(obY=obY+3)%height,50,50,5);
}