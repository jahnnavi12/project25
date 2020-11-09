var rect1,rect2,rect3,dustbin,dustbinImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground,ds;

function preload()
{
dustbinImg=loadImage("dustbingreen.png");	
}

function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);

	dustbin=createSprite(710,320,20,20);
	dustbin.addImage(dustbinImg);
	dustbin.scale=0.4;
	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ground = new Ground(width/2,390,width,10);
	paper = new Paper(100,100);
	ds = new DustBin(720, 380, 100, 10);


}


function draw() {
  background("red");
  rectMode(CENTER);
  ground.display();
  paper.display();
 dustbin.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}
}


