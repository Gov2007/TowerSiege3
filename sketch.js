const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball, ground;
var stand1, stand2;
var ball;
var slingShot;
var polygonImg;
var score = 0;
var backgroundImg;
function preload() {
  polygonImg = loadImage("polygon.png");
  getBackgroundImg();

}
function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new Ground(390, 300, 250, 10);


  block1 = new Block(340, 275, 25, 25);
  block2 = new Block(365, 235, 25, 25);
  block3 = new Block(390, 195, 25, 25);
  block4 = new Block(340, 275, 25, 25);
  block5 = new Block(365, 235, 25, 25);
  block6 = new Block(390, 195, 25, 25);
  block7 = new Block(340, 275, 25, 25);
  block8 = new Block(365, 235, 25, 25);
  block9 = new Block(390, 195, 25, 25);
 

  //ball holder with slings
  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  slingShot = new SlingShot(this.ball, { x: 100, y: 200 });
}
function draw() {
 // background(153, 217, 234);
 if(backgroundImg){
  background(backgroundImg);
}
  //Engine.update(engine);
  ground.display();
  strokeWeight(2);
  stroke(15);

  slingShot.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  imageMode(CENTER);
  image(polygonImg, ball.position.x, ball.position.y, 40, 40);
  fill("white");
  text("SCORE : " + score, 700, 40); 
   

  block1.Score();
  block2.Score();
  block3.Score();
  block4.Score();
  block5.Score();
  block6.Score();
  block7.Score();
  block8.Score();
  block9.Score();

}
function mouseDragged() {
  Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(this.ball);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldclockapi.com/api/json/utc/now");
  var responseJSON = await response.json();

  var datetime = responseJSON.currentDateTime;
  var hour = datetime.slice(11,13);
  //hour=hour+5;
  //console.log(hour);
 // hour=0500;
  if(hour>=0600 && hour<=1900){
      bg = "bg1.jpg";
  }
  else{
      bg = "bg2.png";
  }

  backgroundImg = loadImage(bg);
  //console.log(backgroundImg);
}