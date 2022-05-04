var bg, bgimg;
var sean, seanimg;
var colm, colmimg;

function preload() {
  bgimg = loadImage("Picture1.webp");

}


function setup() {
  createCanvas(1450,720);
  bg = createSprite(725, 360);
  bg.addImage(bgimg);
  bg.scale = 2.0;
  bg.velocityX = -3;
  //player
  sean = createSprite(300, 300);
  sean.shapeColor = "green";
  //Ai
  colm = createSprite(1200, 300);
  colm.shapeColor = "black";
}

function draw() {
  background("black");
  if(bg.x < 150) {
    bg.x = 725;
  }  
  console.log(bg.x);

  if(keyIsDown(UP_ARROW)) {
    sean.y -= 3;
  }

  if(keyIsDown(DOWN_ARROW)) {
    sean.y += 3;
  }

  //Colm
  movingColm();


  drawSprites();
}
function movingColm() {
  if(frameCount %60 === 0) {
    colm.x = Math.round(random(500, 1300));
    colm.y = Math.round(random(30, 660));

  }
}