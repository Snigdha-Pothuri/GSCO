var car,wall;
var speed,weight;
var deformation;


function setup() {
  createCanvas(400,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(380,200,50,400); 
  weight=random(400,1500); 
  speed=random(55,90);
  car.velocityX=speed;
  }

function draw() {
  background(0,0,255);  

  if (istouching(car,wall)){
   deformation=0.5*weight*speed*speed
  } 
   if (deformation>180){
    object1.shapeColor=color(255,0,0); 
   } 
   if (deformation<180 && deformation>100) {
    object1.shapeColor=color(230,230,0);
   } 
   if (deformation<100){
     object1.shapeColor=color(0,255,0);
   }
                                   
  drawSprites();  
}

function istouching (object1,object2){

  if (object1.x-object2.x<object1.width/2+object2.width/2 &&object2.x-object1.x<object2.width/2+object1.width/2&&
    object1.y-object2.y<object1.height/2+object2.height/2 &&object2.y-object1.y<object2.height/2+object1.height/2){  
  return true;
  }
  else  {
  return false;  
  } 
}