var ground, box, box2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {

  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 400, 400, 50);

  box = new Boxie(225, 100, 50, 50);
  box2 = new Boxie(200, 200, 50, 100);

}

function draw() {
  background(0);  

  Engine.update(engine);

  box.display();
  box2.display();

  ground.display();
}