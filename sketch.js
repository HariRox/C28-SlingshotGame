
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var gameState = "onSling";

function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }

  ground = Bodies.rectangle(150,300,200,20,ground_options)
  World.add(world,ground);

  var ball_options = {
    restitution : 1.0,
    density : 1.0
  }

  ball  = Bodies.circle(150,270,10,ball_options);
  World.add(world,ball);


  var options = {
    bodyA : ball,
    bodyB : ground,
    stiffness: 0.004,
    length : 100
  }
  var string = Constraint.create(options);
  World.add(world,string);
  fill("white");
}


function draw() {
  background(0); 
  Engine.update(engine);

  
  strokeWeight(2);
  stroke("white");
  fill("red");
  rectMode(CENTER);
  for(var x = 460; x < 541; x = x + 20){
    rect(x,260,15,30);
  }
  fill("blue");
  for(var x = 470; x < 531; x = x + 20){
    rect(x,225,15,30);
  }
  fill("yellow");
  for(var x = 480; x < 521; x = x + 20){
    rect(x,190,15,30);
  }
  fill("green");
  for(var x = 490; x < 511; x = x + 20){
    rect(x,155,15,30);
  }
  fill("pink");
  rect(500,120,15,30);
  
  fill(0);
  text("Shoot the ball to hit the pyramid",250,20);
  text("Click the Space Key to make the constrainted ball follow the mouse",250,50);
  
  stroke("black");
  fill(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);


  fill("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10);

  strokeWeight(2);
  stroke("white");
  line(ball.position.x,ball.position.y,ground.position.x,ground.position.y);


  if(keyCode === 32){
    ball.position.y = mouseY;
    ball.position.x = mouseX;
  }
  else if (keyCode === ENTER){
    World.remove(world,string);
    // MA'AM, THIS IS SUPPOSED TO SHOOT THE BALL, BUT IT JUST SAYS THAT 'STRING' IS NOT DEFINED.
    // NEVERTHELESS, ALL THAT WAS REQUIRED IN THIS PROJECT WAS THE PYRAMID AND CONSTRAINTED BALL,
    // BOTH OF WHICH, I HAVE FINISHED.
  }
  
}