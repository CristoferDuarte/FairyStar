var starImg,bgImg;
var star, starBody;
var fada, imgfada
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    imgfada = loadImage("images/fairyImage1.png")
    

}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(100,450)
    fada.addImage(imgfada)
    fada.scale = 0.2

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw() {
    background(bgImg)
    if(keyDown("left")){
        fada.x = fada.x -15;
    }
    if(keyDown("right")){
        fada.x = fada.x +15;
    }
    star.x = starBody.position.x 
    star.y = starBody.position.y 
    if(star.y > 470 && starBody.position.y > 470){
        Matter.Body.setStatic(starBody,true)
    }
    if(keyDown("up")){
        Matter.Body.setStatic(starBody,false)
    }
    drawSprites()
}
