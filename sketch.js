var car,car2,car3,wall;
var speed,weight;
var deformation;


function setup() {
  createCanvas(400,400);
  car=createSprite(50,50, 50, 50);
  car2=createSprite(50,200,50,50);
  car3=createSprite(50,350,50,50);
  wall=createSprite(380,200,50,400); 
  weight=random(400,1500); 
  speed=random(55,90);
  car.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  }

function draw() {
  background(0,0,255);  

  if (istouching(car,wall)){
   deformation=0.5*weight*speed*speed
  } 
   if (deformation>180){
    car.shapeColor=color(255,0,0); 
    car.velocityX=0;
   } 
   if (deformation<180 && deformation>100) {
    car.shapeColor=color(230,230,0);
    car.velocityX=0;
   } 
   if (deformation<100){
     car.shapeColor=color(0,255,0);
     car.velocityX=0;
   }


   if (istouching(car2,wall)){
    deformation=0.5*weight*speed*speed
   } 
    if (deformation>180){
     car2.shapeColor=color(255,0,0); 
     car2.velocityX=0;
    } 
    if (deformation<180 && deformation>100) {
     car2.shapeColor=color(230,230,0);
     car.velocityX=0;
    } 
    if (deformation<100){
      car2.shapeColor=color(0,255,0);
      car2.velocityX=0;
    }

    if (istouching(car3,wall)){
      deformation=0.5*weight*speed*speed
     } 
      if (deformation>180){
       car3.shapeColor=color(255,0,0); 
       car3.velocityX=0;
      } 
      if (deformation<180 && deformation>100) {
       car3.shapeColor=color(230,230,0);
       car3.velocityX=0;
      } 
      if (deformation<100){
        car3.shapeColor=color(0,255,0);
        car3.velocityX=0;
      }

                                   
  drawSprites();  
}

function istouching (car,wall){

  if (car.x-wall.x<car.width/2+wall.width/2 &&wall.x-car.x<wall.width/2+car.width/2&&
    car.y-wall.y<car.height/2+wall.height/2 &&wall.y-car.y<wall.height/2+car.height/2){  
  return true;
  }
  else  {
  return false;  
  } 
}