

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, ground, paper, dustbin1, dustbin2;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground = new Ground(width/2, 670, width, 20 );
paper = new Paper(100, 450, 20);
dustbin = new Dustbin(300,0, 20, 100);
dustbin2 = new Dustbin(100, 0, 380, 20);
dustbin1 = new Dustbin(100, 0, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  dustbin.display();
  dustbin2.display();
  dustbin1.display();


 
 
}


function keyPressed(){
if (keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-85});

}


}












