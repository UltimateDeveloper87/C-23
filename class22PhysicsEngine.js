const Engine = Matter.Engine; //Universe
const World = Matter.World;  //Earth
const Bodies = Matter.Bodies;  //Physical Bodies
//const Render = Matter.Render; //optional physics engine viewer/renderer

var myEngine, myWorld; //our engine and world objects for this file
var ground, ball; //physical bodies
var box 
var box1

function setup()
{
    createCanvas(800,500);

    //initialising myEngine and myWorld objects
    myEngine=Engine.create();
    myWorld = myEngine.world;

    //declaring options for the body in JSON format

/* optional -- to  render/view the physics engine bodies
    var render = Render.create({
	  element: document.body,
	  engine: myEngine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	//Engine.run(myEngine);
	Render.run(render); */

ground=new Ground(400,480,800,10) 

    var ballOptions={
        isStatic:false,
        restitution:0.8,
        density:1.5
    }
    ball=Bodies.circle(300,100,25, ballOptions); //25 is the radius of the circle
    World.add(myWorld,ball);

    box=new Box(400,100,50,50)
    box1=new Box(420,50,50,50)
}

function draw()
{
    background(0);

    Engine.update(myEngine); //refreshing myEngine in every frame-like drawSprites()
    //displaying the box using p5 rect Shape
    
    ground.display()

    fill("red");
    ellipseMode(CENTER);
    ellipse(ball.position.x, ball.position.y, 50);
    box1.display()
    box.display()
}
