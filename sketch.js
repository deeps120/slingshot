const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;

function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(400,400);
  ground=new Ground(200,380,400,20);
  box1= new Box(300,200,70,70);
ball= new Ball(100,200,30,30);
  
}

function draw() {
  background("black"); 
  ground.display();
  ball.display();
  box1.display();
}