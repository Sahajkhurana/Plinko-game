const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;


var engine, world;
var divisions=[]
var particles=[]
var plinkos=[]
var divisionHeight=300;

function setup() {
 
  createCanvas(800,700);
  engine=Engine.create();
  world=engine.world;
 
  ground=new Ground(400,690,800,20)

  for(var i=0;i<=width;i=i+80){
    divisions.push(new Divisions(i,527,20,divisionHeight));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 50));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 120));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,200));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 300));
  }
}

function draw() {
  background("black");  
  Engine.update(engine)

  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

  ground.display();
  
  drawSprites();
  for(var n=0;n<divisions.length;n++){
    divisions[n].display();

    for (var k = 0; k < particles.length; k++){
      particles[k].display();
    }
  
    for (var j = 0; j < plinkos.length; j++){
      plinkos[j].display();
    }

  }
}