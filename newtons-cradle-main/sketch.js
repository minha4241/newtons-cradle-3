
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var roof1
var bob1, bob2, bob3, bob4
var string1, string2, string3, string4

function preload(){
 
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof1=new roof(400,250, 600, 50)
	
    bob1=new bob(200,500,50,50)
    string1=new string(bob1.body,{x: 200, y: 250})
	
    Engine.run(engine);

    bob2= new bob(450,500,50,50)
    string2=new string(bob2.body, {x: 450, y:250})

    bob3= new bob(300, 500, 50,50)
    string3= new string(bob3.body, {x: 300, y: 250})

    bob4= new bob(600,500,50,50)
    string4= new string(bob4.body, {x: 600, y: 250})
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

  roof1.display()
  bob1.display()
  string1.display()
  bob2.display()
  string2.display()
  bob3.display()
  string3.display()
  bob4.display()
  string4.display()
  

  drawSprites();
 
}

function keyPressed(){
if(keyCode===LEFT_ARROW){
	Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-250, y:-250})
}
}




