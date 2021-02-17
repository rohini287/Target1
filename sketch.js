const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
  bg=loadImage("images/bg.jpeg");
}



function setup() {
  createCanvas(1400,400);
  engine = Engine.create();
  world = engine.world;

  dart=new Dart(400,200,380);
  missile=new Missile(750,200,100,70);

  sling=new constraint({x:650,y:200},missile.body);

}

function draw() {
  background(bg);  
  Engine.update(engine);
  dart.display();
  missile.display();
 // drawSprites();
}

function mouseDragged(){
   Matter.Body.setPosition(missile.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling.fly()
   // shot=new Shot(missile.body,dart.body)
};