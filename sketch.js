var bg, bgimg;
var sean, seanimg;
var colm, colmimg;
var pull, pullimg, slide, slideimg;

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
  colm = createSprite(1200, 300);
  colm.shapeColor = "black";

  //slider & draw
  slider = createSprite(1400, 550, 50, 320);
  pull = createSprite(1400, 685, 70, 70);
  pull.shapeColor = "white";
}

function draw() {
  background("black");
  if(bg.x < 150) {
    bg.x = 725;
  }  
  

  if(keyIsDown(RIGHT_ARROW)) {
    bg.x -= 3;
    colm.x -=3;
  }

  if(keyIsDown(LEFT_ARROW)) {
    bg.x += 3;
    colm.x +=3;
  }

  //slider
  


  drawSprites();
}

