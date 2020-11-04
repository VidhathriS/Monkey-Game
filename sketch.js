
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score,survivalTime;

function preload(){
  
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

bananaImage = loadImage("banana.png");

obstacleImage = loadImage("obstacle.png");

}



function setup() {
   createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,5)
  ground.velocityX = -6;
  ground.x = ground.width/2;
  ground.shapeColor = "black";
  console.log(ground.x);
  
  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  
  var survivalTime = 0;
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score:" + score,500,500)
  
  
  stroke("black")
  textSize(25)
  fill("black")
  survivalTime =  Math.round(frameCount/frameRate());
  text("Survival Time:" + survivalTime,120,50)
  
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y >= 140){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  banana();
  obstacle();
  
  monkey.collide(ground);
  
  drawSprites();
}

function banana() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
     monkey.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each banana to the group
    foodGroup.add(banana);
  }
}

function obstacle(){
  
  
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,310,40,10);
    obstacle.x = Math.round(random(240,400));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
     obstacle.lifetime = 200;
    
    //adjust the depth
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}




