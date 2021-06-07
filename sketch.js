const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron1,stone1,rubber1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron1 = new Iron(830,90,95);
    stone1 = new Stone(530,300,30);
    rubber1 = new Rubber(1100,500,50);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron1.display();
    stone1.display();
    rubber1.display();
    
 
}