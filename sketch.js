var bg
var bgsprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snow = []
var enginee, worlde;

function setup() {
  createCanvas(windowWidth,windowHeight);
  bgsprite = createSprite(windowWidth/2,windowHeight/2,width,height);
  bgsprite.addImage(bg)
  bgsprite.scale = 1.5

  enginee = Engine.create();
  worlde = enginee.world;

  if(frameCount% 50=== 0){
    for(var i = 0; i < 200; i++){
      snow.push(new Snow(random(0, width), random(0, height), 5))
    }
  }
}

function preload(){
  bg = loadImage("snow3.jpg")
  
}

function draw() {
  background("white");  
  Engine.update(enginee);
  for(var i = 0; i<200; i++){
    snow[i].showDrop();
    snow[i].updateY();
  }
  drawSprites();
}