
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var ground
var score
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  canvas = createCanvas(600,400)
  //creating sprites
 monkey = createSprite(80, 315, 20, 20);
 monkey.addAnimation("moving", monkey_running);
 monkey.scale = 0.1
  
 ground = createSprite(400, 350, 900, 10)
 ground.velocityX=-4
 ground.x=ground.width/2
 //console.log(ground.x)

  
}


function draw() {
  background("white")
  //making the monkey jump
if(keyDown("space")){
  monkey.velocityY= -10    ;
}
  //adding gravity
  
  monkey.velocityY = monkey.velocityY + 0.8
  if(ground.x< 0){
    ground.x=ground.width/2
  }
  
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:  "+ survivalTime,100,50)
  
  monkey.collide(ground)
  spawnBanana();
  spawnObstacles();
  drawSprites();
}

function spawnBanana(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(300, 120, 10,10)
    banana.y = Math.round(random(120, 200))
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX= -3
    
    banana.lifetime = 200
    //foodGroup.add(banana)
    
    }
}

function spawnObstacles(){
  if(frameCount % 200 === 0){
    var obstacle = createSprite(600, 320, 10,10)
    
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
    obstacle.velocityX= -3
    
    
    obstacle.lifetime = 400
    //obstacleGroup.add(obstacle)
  }
}






