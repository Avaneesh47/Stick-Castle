const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var pillar1,pillar2;
var triangle1,triangle2;
var middleBlock;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = Engine.world;

  pillar1 = new Pillar(93,275,40,250);
  pillar2 = new Pillar(707,275,40,250);

  block1 = new Block(400,300);

  circle1 = new Circle(185,125,144);
  circle2 = new Circle(329,125,144);
  circle3 = new Circle(473,125,144);
  circle4 = new Circle(617,125,144);
}
   

function draw() {
  background("turquoise");  

  Engine.update(engine);
 
  strokeWeight(5);
  stroke("black");
  fill(255);

  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  
  pillar1.display();
  pillar2.display();

  block1.display();

  triangle(73,145,113,145,93,95);
  triangle(687,145,727,145,707,95);

  drawSprites();
}