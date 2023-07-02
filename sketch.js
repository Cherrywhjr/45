/*var PLAY = 1;
var END = 0;
var gameState = PLAY;*/

var king;
var n;
var bg;
//var ground, invisibleGround, groundImage;

var ninjaImg;
var kingImg;
var bgImg;
//var obstaclesGroup, obstacle1, obstacle2, obstacle3;

//var score=0;

//var gameOver, restart;



function preload(){
  ninjaImg =   loadImage("ninja.png");
  kingImg = loadImage("king.png");
  bgImg = loadImage("bg2.png"); 

 // groundImage = loadImage("bg2.png");
  
  
  /*obstacle1 = loadImage("black-stone.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");*/

  //gameOverImg = loadImage("game-over.png");
 // restartImg = loadImage("restart..png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  n = createSprite(200,500,40,70);
  n.addImage(ninjaImg);
  n.scale = 0.5;
  
  
  king = createSprite(150,200,40,70);
  king.addImage(kingImg);
  king.scale = 0.5;

 // ground = createSprite(200,180,400,20);
 // ground.addImage("ground",groundImage);
 
 // gameOver = createSprite(300,100);
 // gameOver.addImage(gameOverImg);
  
 // restart = createSprite(300,140);
 // restart.addImage(restartImg);
  
//  gameOver.scale = 0.6;
  //restart.scale = 0.6;

 // gameOver.visible = false;
 // restart.visible = false;
  
  //invisibleGround = createSprite(200,190,400,10);
 // invisibleGround.visible = false;
  
 // obstaclesGroup = new Group();
  
 // score = 0;
}

function draw() {
 
  background(255);
  image(bgImg,0,0,width,height);
  //text("Score: "+ score, 500,50);
  background.velocityX=-2;
  /*if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
  
    if (ground.x < 0){
      ground.x = ground.width/2;
      
    }
  
    spawnObstacles();
  
    if(obstaclesGroup.isTouching()){
  
    }
  }
  else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
       
    if(mousePressedOver(restart)) {
      reset();
    }
  }*/
  
  
  drawSprites();
}

/*function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  
  
  ninja.changeAnimation("running",ninja);
  
 
  
  score = 0;
  
}*/