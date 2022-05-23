var bg, bgimg;
var sean, seanimg;
var colm, colmimg;
var pull, pullimg, slide, slideimg;
var countdown = 3;
var gameState = "wait";
var slider, holster, holsterimg, pistol, pistolimg;
var mouse;
var flag = 0;
var gun, bgso;


function preload() {
  bgimg = loadImage("Background.jpg");
  holsterimg = loadImage("holster.png");
  pistolimg = loadImage("Pistol.png")
  gun = loadSound("G.mp3");
  bgso = loadSound("theme.mp3");
}


function setup() {
  createCanvas(1450,720);
  bg = createSprite(725, 360);
  bg.addImage(bgimg);
  bg.scale = 1.8;
  
  bgso.play();
  //bgso.loop();
  //bgso.setVolume(1);

  //player
  sean = createSprite(300, 350, 500, 1000);
  //sean.shapeColor = "green";
  sean.addImage("holster", holsterimg);
  sean.addImage("pistol", pistolimg);
  //Ai
  colm = createSprite(1200, 400, 80, 530);
  colm.shapeColor = "black";

  //slider & draw
  slider = createSprite(1400, 550, 50, 320);
  pull = createSprite(1400, 685, 70, 70);
  pull.shapeColor = "white";

  //mouse
mouse = createSprite(500, 500, 10, 10);
mouse.shapeColor = "grey";
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

 
  //mouse
  mouse.x = mouseX;
  mouse.y = mouseY;


  //slider
  if(mousePressedOver(pull) && pull.y >= 400 && gameState === "play"){
    pull.y = mouseY
    console.log(pull.y)
  }

if(pull.y <= 400){
  sean.changeImage("pistol")
};
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
    setTimeout(()=>{
      textSize(80);
    strokeWeight(2);
    stroke("red");
    if(flag === 0){
      text("Game Over", width/2 - 220, 250);
    }
      
      
    }, 3000);
  }

  if(gameState === "play" && pull.y <= 400){

    if(mousePressedOver(colm)){
      gun.play();

      flag = 1
    }
    if(flag === 1){
      textSize(110);
      strokeWeight(2);
      stroke("Purple");
        text("You Win", width/2 - 220, 250);
    }
  }

}

