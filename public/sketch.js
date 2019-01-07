var gamescreen=0;
var carX;
var carY;
var carVelocity=4;
var obj=new Array(); 
var doged=0;
function setup(){
    createCanvas(1300,630);
    carX=20;
    carY=height/1.2;
    for(var i=0;i<25;i++){
        obj[i]=new Object();
        obj[i].x=(Math.random() * (width-200)) + 100;
        obj[i].y=Math.floor(Math.random() * 200) + 1;
    }
}
function draw(){
    if(gamescreen==0){
        initscreen();
    }
    else if(gamescreen==1){
        gameplayscreen();
    }
    else{
        drawfinishscreen();
    }
}
function drawfinishscreen(){
    background(166,186,216);
    textSize(70);
    text("Won!!!",width/2.7,height/6);
    textSize(15);
    text("click to Restart",width/2.1,height/1.5);
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
    else if(gamescreen==2){
        gamescreen=0;
        carX=20;
        carY=height/1.2;
    }
}

function gameplayscreen(){
    background(10,20,10);
    stroke(255);
    line(50,height,50,0);
    
    text("S\nT\nA\nR\nT",15,height/2.4);
    text("F\nI\nN\nI\nS\nH",width-45,height/2.4);
    line(width-70,height,width-70,0);
    stroke(0);
    textSize(20);
    text(""+doged,10,30);
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
    if(carX>=width-70){
        gamescreen=2;
    }
    for(var i=0;i<25;i++){
        if((carX+(10)>=obj[i].x && carX+(10)<=obj[i].x+(25))&&(carY+(10)>=obj[i].y && carY+(10)<=obj[i].y+(25))){
            doged++;
            carX=20;
            carY=height/1.2;
        
        }
        else if((carX>=obj[i].x && carX<=obj[i].x+(25))&&(carY>=obj[i].y && carY<=obj[i].y+(25))){
            doged++;
            carX=20;
            carY=height/1.2;
        }
    }
}
function keyPressed(){
    keyIsPressed=true;
}
function keyReleased(){
    keyIsPressed=false;
}
function drawCar(){
    fill(color(255,255,255));
    rect(carX,carY,10,10);
}
function drawObstacles(){
    fill(color(237, 2, 18));
    for(var i=0;i<25;i++){
        rect(obj[i].x,obj[i].y,25,25,5);
        obj[i].y=obj[i].y+6;
        if(obj[i].y>=height){
            obj[i].y=(Math.random() * 50) + 1;
            obj[i].x=(Math.random() * (width-200)) + 100;
        }
    }
}