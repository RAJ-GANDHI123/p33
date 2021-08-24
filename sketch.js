const Engine = Matter.Engine;
const World = Matter.World;


var bgImg
var snow = []

function preload(){
bgImg = loadImage('snow1.jpg')
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgImg);  
  Engine.update(engine)
  //drawSprites();
  if(frameCount%20===0){
    snow.push(new Snow(random(0,800), 10, 40))

    for(var j = 0; j< snow.length; j++){
      snow[j].display();
    }
  }
}