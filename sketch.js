var bg, bgimg;
var sean, seanimg;
var colm, colmimg;
var pull, pullimg, slide, slideimg;
var countdown = 3;
var gameState = "wait";

function preload() {
  bgimg = loadImage("Picture1.webp");

}


function setup() {
  createCanvas(1450,720);
  bg = createSprite(725, 360);
  bg.addImage(bgimg);
  bg.scale = 2.0;
  
  //player
  sean = createSprite(250, 300, 500, 1000);
  sean.shapeColor = "green";
  //Ai
  colm = createSprite(1200, 300, 70, 600);
  colm.shapeColor = "black";

  //slider & draw
  slider = createSprite(1400, 550, 50, 320);
  pull = createSprite(1400, 685, 70, 70);
  pull.shapeColor = "white";
}

setTimeout(()=> {
  countdown -= 1;
  
},2000);

setTimeout(()=> {
  countdown -= 1;
  gameState = "play";
},5000);


function draw() {
  background("black");
  if(bg.x < 150) {
    bg.x = 725;
  }  

 
  
//Controls
  if(keyIsDown(RIGHT_ARROW)) {
    bg.x -= 3;
    colm.x -=3;
  }

  if(keyIsDown(LEFT_ARROW)) {
    bg.x += 3;
    colm.x +=3;
  }

  //slider
  if(mousePressedOver(pull) && pull.y >= 400 && gameState === "play"){
    pull.y = mouseY
    console.log(pull.y)
  }


  drawSprites();

  textSize(30);
  textFont("Special Elite");
  fill("black");
  text("CountDown: " + countdown, width - 300, 50);

  if(gameState === "wait") {
    fill("Red");
    textSize(35);
    strokeWeight(2);
    stroke("red");
    text("Pull The Slider At 1", width/2 - 100, 120);
  }

  if(gameState === "play") {
    fill("orange");
    textSize(50);
    strokeWeight(2);
    stroke("red");
    text("Fire!", width/2 - 100, 120);
  }

}

