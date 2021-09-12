const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var tower,towerImg
var cannon,cannonImg
var backgroundImg
var angle


function preload() {
  towerImg=loadImage("assets/tower.png")
  backgroundImg=loadImage("assets/background.gif")
 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var ground_options={
    isStatic: true

  }
  ground= Bodies.rectangle(0,height-1,width*2,1,ground_options)
  World.add(world,ground)

  tower=Bodies.rectangle(150,350,160,310,ground_options)
  World.add(world,tower)
  cannon=new Cannon(180,110,130,100,angle)

  
 
}

function draw() {
  background(189);
 image(backgroundImg,0,0,width,height)
 
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,width*2,1)
  push()
  imageMode(CENTER)
  image(towerImg,tower.position.x,tower.position.y,160,310)
  pop()
  cannon.show()


   
}
