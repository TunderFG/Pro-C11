var bg,bgImage;
var jogador,boyImage;
var parede1,parede2;






function preload(){
  //imagens pré-carregadas

  bgImage = loadImage("path.png");
  boyImage = loadAnimation("Runner-1.png","Runner-2.png");

  
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui

  bg = createSprite(200,200);
  bg.addImage(bgImage);
  bg.scale = 1.2;

  jogador = createSprite(200,370);
  jogador.addAnimation("MeninoCorrendo",boyImage);
  jogador.scale = 0.1;

  parede1 = createSprite(0,0,100,1000)
  parede2 = createSprite(400,0,100,1000)
  parede1.visible = false;
  parede2.visible = false;
}

function draw() {
  background(0);
  jogador.x = World.mouseX;

  bg.velocityY = 3;
  if(bg.y > 400){
    bg.y = height/4;
  }

  edges = createEdgeSprites();
  jogador.collide(edges[3]);
  jogador.collide(parede1);
  jogador.collide(parede2);

  

  drawSprites();
}
