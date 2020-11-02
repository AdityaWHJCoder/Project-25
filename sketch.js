
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//variables for all the objects
var paperObject, paperObjectImg;
var engine, world;
var binSideLeft, binSideRight;
var binBottom, binImg;
var ground;

function preload()
{
  paperObjectImg = loadImage("papertrash.png");
  binImg = loadImage("dustbingreen.png");
}

function setup() {
	var canvas = createCanvas(1250, 750);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	// the trash 
   paperObject = new trash(50, 500, 50, 50, "papertrash.png");
   paperObject.shapeColor = "black";
   paperObjectImg.scale = 2;

   // the bin
   binSideLeft = new binSides(1191, 610, 20, 250);
   binSideRight = new binSides(1008, 610, 20, 250);
   binBottom = createSprite(1100, 600, 220, 20);
   binBottom.addImage(binImg);
   binBottom.scale = 0.8;


   //the ground
   ground = new Ground(625, 743, 1250, 20);

   paperObjectImg.scale = 0.5;

   World.add(world, paperObject);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  // bin
  binSideLeft.display();
  binSideRight.display();

  //ground
  ground.display();

  //trash ball
  paperObject.display();
  
  binBottom.display();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:157,y:-157});
  
  }
}

