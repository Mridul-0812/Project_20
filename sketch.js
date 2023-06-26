
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var radius = 40;
var groundObj;
var leftSide;
var rightSIde;

function setup() {
  createCanvas(1600, 700);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.3,
    friction:0,
    density: 1.2,
    isStatic: false
  }
  ball = Bodies.circle(260, 100, radius/2,ball_options);
  World.add(world,ball);

  groundObj = new Ground(width/2, 670, width, 20)
  leftSide = new Ground(1100, 600, 20, 120)
  rightSide = new Ground(1350, 600, 20, 120)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,radius, radius); 

  groundObj.show()
  leftSide.show()
  rightSide.show()
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball, ball.position, {x: 85, y: -85})
  }
}

