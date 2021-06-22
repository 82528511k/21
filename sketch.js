var fixedRect,movingRect;
var ob1;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="blue"
  movingRect= createSprite(400, 200, 80, 30);
  movingRect.shapeColor="blue"
  ob1=createSprite(100,200,30,70)
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  if(Touching(movingRect,ob1)){
    ob1.shapeColor="red"
  }
  else{
    ob1.shapeColor="blue"
  }
  drawSprites();
}

function Touching(fixedRect,movingRect){
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){

  return true; 
}
else {
  return false;
}
}

