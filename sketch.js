var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var downBody, leftBody, rightBody;
var downSprite, leftSprite, rightSprite; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	downSprite = createSprite( width/2, 655, 100, 10);
	downSprite.shapeColor = ('red');

	leftSprite = createSprite(345,610,10,100);
	leftSprite.shapeColor = ('red');

	rightSprite = createSprite(445, 610, 10, 100);
	rightSprite.shapeColor = ("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	downBody = Bodies.rectangle(width/2, 655, 100, 10, {restitution:0, isStatic:true});
	World.add(world, downBody);

	leftBody = Bodies.rectangle(345,610,10,100,{restitution:0, isStatic:true});
	World.add(world, leftBody);

	rightBody = Bodies.rectangle(445, 610, 10, 100,{restitution:0, isStatic:true});
	World.add(world, rightBody);
		//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  downSprite.x= downBody.position.x 
  downSprite.y= downBody.position.y

  leftSprite.x= leftBody.position.x 
  leftSprite.y= leftBody.position.y

  rightSprite.x= rightBody.position.x 
  rightSprite.y= rightBody.position.y
  keyPressed(); 
  drawSprites();
  fill('white')
  text(mouseX+ "," + mouseY, 50, 50); 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Body.setStatic (packageBody , false)
  }
}



