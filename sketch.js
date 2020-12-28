const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;


var engine,world;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;



function setup() {
  createCanvas(480,800);
  stroke(255);

  engine=Engine.create();
  world=engine.world;
  ground = new Ground(240,790,480,20);
  
  for (var j = 40; j <=width; j=j+50){

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 15; j <=width; j=j+50){

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 40; j <=width; j=j+50){

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 15; j <=width; j=j+50){

    plinkos.push(new Plinko(j, 375));
  }

  
}

function draw() {

  Engine.update(engine);
  background(0);

  ground.display();

  //create divisions
  for (var k = 0; k<=width; k=k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k < divisions.length; k++){

    divisions[k].display();
  }

  //display plinkos
  for (var j = 0; j < plinkos.length; j++){

    plinkos[j].display();
  }

  //create particles
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-100, width/2+100), 10, 10));
  }

  for (var i = 0; i < particles.length; i++){

    particles[i].display();
  }

  drawSprites();
}



