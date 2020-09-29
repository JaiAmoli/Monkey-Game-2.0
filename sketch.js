
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup;
var score;
var ground;
var monkeyImage;
var ground2;
var GameState = "play";
var end;
var obstacle;
var ground2;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png"     ,"sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  monkey = createSprite(50,330,20,20)
  monkey.addAnimation("monkeyrun" ,monkey_running);
  monkey.scale = 0.1;
  
ground = createSprite(300,350,900,10)
ground.x = ground.width /2;

ground2 = createSprite(200,350,900,10)

  
  bananaGroup = createGroup();
  obstaclesGroup = createGroup();
  
score = 0;
}


function draw() {
background("white")
     var SurvivalTime= 0;
  textSize(20)
  text("Survival Time: "+ score, 140,50); 

  if(GameState === "play"){
    monkey.velocityY = monkey.velocityY + 0.8 
 
    
        if(monkey.isTouching(bananaGroup)){ 
       score = score + 100; 
      banana.destroy();
      }
    
      if(monkey.collide(obstaclesGroup)){
            GameState = end;
    ground.velocityX = 0;
    obstacle.velocityX = 0;
    banana.velocityX= 0;
    monkey.velocityX=0;
    obstaclesGroup.setVelocityEach = 0;
    monkey.velocityY = 0;
     text("GameOver",200,200)
        
    ground.lifetime = (-1)
      obstacle.lifetime = (-1)
      banana.lifetime = (-1)    
      monkey.lifetime = (-1)
     }
   
     ground.velocityX = -(4 + 3* score/100)
  //scoring
    score = score + Math.round(getFrameRate() /60);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
   }
  if(keyDown("space")&& monkey.y >= 300){
    monkey.velocityY = -17;  
  }
      
  monkey.collide(ground2)
  monkey.collide(ground)
 // monkey.collide(ground2)
      food();
  spawnObstacles();

  }
  if(GameState === end){
    textSize(40)
    text("GameOver",100,150)

 
  }
 

  
   drawSprites();


 
  
  
}

function food(){
  if(frameCount %80===0){
 banana = createSprite(350,220,20,20) 
 banana.addImage(bananaImage)
 banana.scale = 0.1
 banana.y = Math.round(random(120,200))
 banana.velocityX = -5;
 banana.lifetime = 100;
    
bananaGroup.add(banana)
}
}

function spawnObstacles(){
 if (frameCount % 300  === 0){
   obstacle = createSprite(390,275,10,40);
   obstacle.addImage(obstacleImage)
   //obstacle.velocityX = -(6 + score/100)
    obstacle.scale = 0.4;
    obstacle.lifetime = 100;
    //obstacle.velocityY = monkey.velocityY + 0.8 
    obstacle.velocityX = -10;
   
   //obstacle.setCollider("rectangle",0,0,obstacle.width,obstacle.height)
   
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
   
  obstacle.setCollider("circle",0,50,200);
  obstacle.debug = true
 }
}




























