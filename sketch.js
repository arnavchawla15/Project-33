const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var platform1,platform2;
var ball,holder;
var sling;
var PolyIMG;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21;
var bs1,bs2,bs3,bs4,bs5,bs6,bs7,bs8,bs9;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(900,400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    platform1 = new Platform(380,300,270,10);
    platform2 = new Platform(700,200,200,10);

    // level one
    b1 = new Box(280,275,30,40);
    b2 = new Box(310,275,30,40);
    b3 = new Box(340,275,30,40);
    b4 = new Box(370,275,30,40);
    b5 = new Box(400,275,30,40);
    b6 = new Box(430,275,30,40);
    b7 = new Box(460,275,30,40);
    b8 = new Box(490,275,30,40);

    // level two
    b9 = new Box(310,235,30,40);
    b10 = new Box(340,235,30,40);
    b11 = new Box(370,235,30,40);
    b12 = new Box(400,235,30,40);
    b13 = new Box(430,235,30,40);
    b14 = new Box(460,235,30,40);

    //level 3
    b15 = new Box(340,195,30,40);
    b16 = new Box(370,195,30,40);
    b17 = new Box(400,195,30,40);
    b18 = new Box(430,195,30,40);

    //level 4
    b19 = new Box(370,155,30,40);
    b20 = new Box(400,155,30,40);

    //level 5
    b21 = new Box(385,115,30,40);

    // set 2:
    // level 1
    bs1 = new Box(640,175,30,40);
    bs2 = new Box(670,175,30,40);
    bs3 = new Box(700,175,30,40);
    bs4 = new Box(730,175,30,40);
    bs5 = new Box(760,175,30,40);
    //level 2
    bs6 = new Box(670,135,30,40);
    bs7 = new Box(700,135,30,40);
    bs8 = new Box(730,135,30,40);
    //level 3
    bs9 = new Box(700,95,30,40)

    // ball
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    sling = new SlingShot(this.ball,{x:200,y:200});

}

function draw(){
    background("white")
    Engine.update(engine);

   
    strokeWeight(2);
    stroke(15);

    platform1.display();
    platform2.display();

    stroke(15);
    fill("black")
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();

    stroke(15);
    fill("red")
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();

    stroke(15);
    fill("green")
    b15.display();
    b16.display();
    b17.display();
    b18.display();

    stroke(15);
    fill("blue")
    b19.display();
    b20.display();

    stroke(15);
    fill("violet")
    b21.display();

    stroke(15);
    fill("yellow")
    bs1.display();
    bs2.display();
    bs3.display();
    bs4.display();
    bs5.display();

    stroke(15);
    fill("purple")
    bs6.display();
    bs7.display();
    bs8.display();

    stroke(15);
    fill("grey")
    bs9.display();


    ellipse(ball.position.x,ball.position.y,20);
    sling.display();

   drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
   sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(this.ball)
    }
}