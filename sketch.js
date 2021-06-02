const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var rightbutton , upbutton ;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  rightbutton=createImg("right.png")
  rightbutton.position(200,30);
  rightbutton.size(50,50);
 rightbutton.mouseClicked(hForce);

 upbutton=createImg("up.png")
 upbutton.position(100,30);
  upbutton.size(50,50);
  upbutton.mouseClicked(vForce);
 

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  
  var ballOptions=
  {
    restitution:1.0
  }
 
  ball=Bodies.circle(200,100,20,ballOptions)  
  World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20,20);
  Engine.update(engine);
}

function hForce()
{
  Matter.Body.applyForce(ball,ball.position,{x:0.05,y:0})
}

function vForce()
{
  Matter.Body.applyForce(ball,ball.position,{x:0,y:0.05})
}