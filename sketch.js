const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base1,base2,mainbase;
var block1,square1;
var slingshot;
var superwoman,launcher,bcgImage;

function preload() {
    bcgImage = loadImage('images/bcg.jpg');
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    mainbase = new Ground(600,590,1200,10);
    base1 = new Ground(30,330,1300,15);
    base2 = new Ground(920,340,120,10);

    //base level
    block1 = new Box(400,300,30,40);
    block2 = new Box(432,300,30,40);
    block3 = new Box(464,300,30,40);
    block4 = new Box(496,300,30,40);
    block5 = new Box(528,300,30,40);
    block6 = new Box(560,300,30,40);
    block7 = new Box(592,300,30,40);
    block8 = new Box(624,300,30,40);
    block9 = new Box(656,300,30,40);

    //second level
    block10 = new Box(432,258,30,40);
    block11 = new Box(464,258,30,40);
    block12 = new Box(496,258,30,40);
    block13 = new Box(528,258,30,40);
    block14 = new Box(560,258,30,40);
    block15 = new Box(592,258,30,40);
    block16 = new Box(624,258,30,40);

    //third level
    block17 = new Box(464,215,30,40);
    block18 = new Box(496,215,30,40);
    block19 = new Box(528,215,30,40);
    block20 = new Box(560,215,30,40);
    block21 = new Box(592,215,30,40);


    //fourth level
    block22 = new Box(496,172,30,40);
    block23 = new Box(528,172,30,40);
    block24 = new Box(560,172,30,40);

    //top
    block25 = new Box(528,129,30,40);

    superwoman = new Hero(110,220);
    monster = new Monster(760,320);
    launcher= new Launcher(superwoman.body,{x:120,y:220});

}

function draw(){
    background(bcgImage)
    monster.display();
    fill("brown");
    mainbase.display();
    base1.display();

   fill("red"); 
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

 
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();


    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();


    block22.display();
    block23.display();
    block24.display();


    block25.display();

//text (mouseX+","+mouseY,mouseX,mouseY)
textSize(22)
fill("blue");
text ("SUPER WOMAN VS MONSTER ",400,80)

Engine.update(engine);
superwoman.display();

launcher.display();
}

function mouseDragged(){
    Matter.Body.setPosition(superwoman.body,{x:mouseX , y:mouseY})
}
