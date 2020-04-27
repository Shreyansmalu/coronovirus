var v1;
var v2;
var v3;
var v4;
var v5;
var v6;
var v7;
var v8;
var v9;

var india;
var us;
var germany;
var france;

var a;
var j;
var e;
var h;
var c;

var iw;
var uw;
var fw;
var gw;

//var gamestate = "stage1";

function setup() {
  createCanvas(1500, 700);
  v1 = createSprite(600,50,50,50);  
  v1.addImage("virus1.png",v1_Image);
  v2 = createSprite(600,650,50,50);
  v2.addImage("virus1.png",v2_Image);
  v3 = createSprite(400,400,50,50);
  v3.addImage("virus1.png",v4_Image);
  v4 = createSprite(400,300,50,50);
  v4.addImage("virus1.png",v5_Image);
  v5 = createSprite(800,400,50,50);
  v5.addImage("virus1.png",v6_Image);
  v6 = createSprite(800,300,50,50);
  v6.addImage("virus1.png",v7_Image);
  v7 = createSprite(1000,350,50,50);
  v7.addImage("virus1.png",v8_Image);
  v8 = createSprite(1125,350,50,50);
  v8.addImage("virus1.png",v3_Image);
  v9 = createSprite(1250,350,50,50);
  v9.addImage("virus1.png",v9_Image);
  
  india = createSprite(50,300,50,50);
  india.addImage("india.png",india_Image);
  us = createSprite(50,150,50,50);
  us.addImage("us.png",us_Image);
  germany = createSprite(50,440,50,50);
  germany.addImage("germany.png",germany_Image);
  france = createSprite(50,550,50,50);
  france.addImage("france.png",france_Image);

  a1 = createSprite(450,365,50,50);
  a1.addImage("a.png",a1_Image);
  j1 = createSprite(900,600,50,50);
  j1.addImage("j.png",j1_Image);
  e1 = createSprite(700,200,50,50);
  e1.addImage("e.png",e1_Image);
  h1 = createSprite(1190,450,50,50);
  h1.addImage("h.png",h1_Image);
  c1 = createSprite(1450,350,50,50);
  c1.addImage("c.png",c1_Image);

  a2 = createSprite(450,365,50,50);
  a2.addImage("a.png",a2_Image);
  j2 = createSprite(900,600,50,50);
  j2.addImage("j.png",j2_Image);
  e2 = createSprite(700,200,50,50);
  e2.addImage("e.png",e2_Image);
  h2 = createSprite(1190,450,50,50);
  h2.addImage("h.png",h2_Image);
  c2 = createSprite(1450,350,50,50);
  c2.addImage("c.png",c2_Image);

  a3 = createSprite(450,365,50,50);
  a3.addImage("a.png",a2_Image);
  j3 = createSprite(900,600,50,50);
  j3.addImage("j.png",j2_Image);
  e3 = createSprite(700,200,50,50);
  e3.addImage("e.png",e2_Image);
  h3 = createSprite(1190,450,50,50);
  h3.addImage("h.png",h2_Image);
  c3 = createSprite(1450,350,50,50);
  c3.addImage("c.png",c2_Image);

  a4 = createSprite(450,365,50,50);
  a4.addImage("a.png",a3_Image);
  j4 = createSprite(900,600,50,50);
  j4.addImage("j.png",j3_Image);
  e4 = createSprite(700,200,50,50);
  e4.addImage("e.png",e3_Image);
  h4 = createSprite(1190,450,50,50);
  h4.addImage("h.png",h3_Image);
  c4= createSprite(1450,350,50,50);
  c4.addImage("c.png",c3_Image);
}
function preload(){
v1_Image = loadImage("virus1.png");
v2_Image = loadImage("virus1.png");
v3_Image = loadImage("virus1.png");
v4_Image = loadImage("virus1.png");
v5_Image = loadImage("virus1.png");
v6_Image = loadImage("virus1.png");
v7_Image = loadImage("virus1.png");
v8_Image = loadImage("virus1.png");
v9_Image = loadImage("virus1.png");

india_Image = loadImage("india.png");
us_Image = loadImage("us.png");
germany_Image = loadImage("germany.png");
france_Image = loadImage("france.png");

a1_Image = loadImage("a.png");
j1_Image = loadImage("j.png");
e1_Image = loadImage("e.png");
h1_Image = loadImage("h.png");
c1_Image = loadImage("c.png");

a2_Image = loadImage("a.png");
j2_Image = loadImage("j.png");
e2_Image = loadImage("e.png");
h2_Image = loadImage("h.png");
c2_Image = loadImage("c.png");

a3_Image = loadImage("a.png");
j3_Image = loadImage("j.png");
e3_Image = loadImage("e.png");
h3_Image = loadImage("h.png");
c3_Image = loadImage("c.png");

a4_Image = loadImage("a.png");
j4_Image = loadImage("j.png");
e4_Image = loadImage("e.png");
h4_Image = loadImage("h.png");
c4_Image = loadImage("c.png");

iw_Image = loadImage("iw.png");
uw_Image = loadImage("uw.jpg");
fw_Image = loadImage("fw.jpg");
gw_Image = loadImage("gw.jpg");

}
function draw() {
  background("white");
  text(mouseX + ',' + mouseY, 10, 15);
  v1.scale = 0.1;
  v2.scale = 0.1;
  v3.scale = 0.1;
  v4.scale = 0.1;
  v5.scale = 0.1;
  v6.scale = 0.1;
  v7.scale = 0.1;
  v8.scale = 0.1;
  v9.scale = 0.1;
  india.scale = 0.225;
  us.scale = 0.225;
  germany.scale = 0.225;
  france.scale = 0.225;
  //india.bounce = "us"
///////for chaning velocity of v///////////////////
  if(v1.y>295){
    v1.velocityY =-2;
  }
  if(v2.y<405){
    v2.velocityY =2;
  }
  if(v3.y>650){
    v3.velocityY = -2;
  }
  if(v4.y<50){
    v4.velocityY =2;
  }
  if(v5.y>650){
    v5.velocityY =-2;
  }
  if(v6.y<50){
    v6.velocityY = 2;
  }
  if(v7.y<50){
    v7.velocityY =2;
  }
  if(v8.y>650){
    v8.velocityY = -2;
  }
  if(v9.y<50){
    v9.velocityY =2;
  }

  if(v1.y<50){
    v1.velocityY =2;
  }
  if(v2.y>650){
    v2.velocityY =-2;
  }
  if(v3.y<400){
    v3.velocityY = 2;
  }
  if(v4.y>300){
    v4.velocityY =-2;
  }
  if(v5.y<400){
    v5.velocityY =2;
  }
  if(v6.y>300){
    v6.velocityY = -2;
  }
  if(v7.y>650){
    v7.velocityY =-2;
  }
  if(v8.y<50){
    v8.velocityY = 2;
  }
  if(v9.y>650){
    v9.velocityY =-2;
  }
///////////for countries,destroy////////////////

///////INDIA///////////
if (india.collide(v1)){
  india.destroy();
}
if (india.collide(v2)){
  india.destroy();
}
if (india.collide(v3)){
  india.destroy();
}
if (india.collide(v4)){
  india.destroy();
}
if (india.collide(v5)){
  india.destroy();
}
if (india.collide(v6)){
  india.destroy();
}
if (india.collide(v7)){
  india.destroy();
}
if (india.collide(v8)){
  india.destroy();
}
if (india.collide(v9)){
  india.destroy();
}
if (india.isTouching(a1)){
  a1.destroy();
}
if (india.collide(j1)){
  j1.destroy();
}
if (india.collide(e1)){
  e1.destroy();
}
if (india.collide(h1)){
  h1.destroy();
}
if (india.collide(c1)){
  c1.destroy();
  v1.destroy();
  v2.destroy();
  v3.destroy();
  v4.destroy();
  v5.destroy();
  v6.destroy();
  v7.destroy();
  v8.destroy();
  v9.destroy();
  germany.destroy();
  us.destroy();
  france.destroy();
  india.destroy();
  iw = createSprite(750,350,50,50);
  iw.addImage("iw.png",iw_Image);
  iw.scale = 2;
  a1.destroy();
  j1.destroy();
  e1.destroy();
  h1.destroy();
  a2.destroy();
  j2.destroy();
  e2.destroy();
  h2.destroy();
  a3.destroy();
  j3.destroy();
  e3.destroy();
  h3.destroy();
  a4.destroy();
  j4.destroy();
  e4.destroy();
  h4.destroy();
}
if(a1.destroy() === false&&india.y>500 ){
   india.destroy();
}

///////usa////////
if (us.collide(v1)){
  us.destroy();
}
if (us.collide(v2)){
  us.destroy();
}
if (us.collide(v3)){
  us.destroy();
}
if (us.collide(v4)){
  us.destroy();
}
if (us.collide(v5)){
  us.destroy();
}
if (us.collide(v6)){
  us.destroy();
}
if (us.collide(v7)){
  us.destroy();
}
if (us.collide(v8)){
  us.destroy();
}
if (us.collide(v9)){
  us.destroy();
}
if (us.collide(e2)){
  e2.destroy();
}
if (us.collide(j2)){
  j2.destroy();
}
if (us.collide(a2)){
  a2.destroy();
}
if (us.collide(h2)){
  h2.destroy();
}
if (us.collide(c2)){
  c2.destroy();
  v1.destroy();
  v2.destroy();
  v3.destroy();
  v4.destroy();
  v5.destroy();
  v6.destroy();
  v7.destroy();
  v8.destroy();
  v9.destroy();
  germany.destroy();
  us.destroy();
  france.destroy();
  india.destroy();
  uw = createSprite(750,350,50,50);
  uw.addImage("uw.jpg",uw_Image);
  uw.scale = 2;
  a1.destroy();
  j1.destroy();
  e1.destroy();
  h1.destroy();
  a2.destroy();
  j2.destroy();
  e2.destroy();
  h2.destroy();
  a3.destroy();
  j3.destroy();
  e3.destroy();
  h3.destroy();
  a4.destroy();
  j4.destroy();
  e4.destroy();
  h4.destroy();
}

/////////germany///////////
if (germany.collide(v1)){
  germany.destroy();
}
if (germany.collide(v2)){
  germany.destroy();
}
if (germany.collide(v3)){
  germany.destroy();
}
if (germany.collide(v4)){
  germany.destroy();
}
if (germany.collide(v5)){
  germany.destroy();
}
if (germany.collide(v6)){
  germany.destroy();
}
if (germany.collide(v7)){
  germany.destroy();
}
if (germany.collide(v8)){
  germany.destroy();
}
if (germany.collide(v9)){
  germany.destroy();
}
if (germany.collide(e3)){
  e3.destroy();
}
if (germany.collide(j3)){
  j3.destroy();
}

if (germany.collide(a3)){
  a3.destroy();
  germany.display();
}
if (germany.collide(h3)){
  h3.destroy();
}

if (germany.collide(c3)){
  c3.destroy();
  v1.destroy();
  v2.destroy();
  v3.destroy();
  v4.destroy();
  v5.destroy();
  v6.destroy();
  v7.destroy();
  v8.destroy();
  v9.destroy();
  germany.destroy();
  us.destroy();
  france.destroy();
  india.destroy();
  gw = createSprite(750,350,50,50);
  gw.addImage("gw.jpg",gw_Image);
  gw.scale = 5;
  a1.destroy();
  j1.destroy();
  e1.destroy();
  h1.destroy();
  a2.destroy();
  j2.destroy();
  e2.destroy();
  h2.destroy();
  a3.destroy();
  j3.destroy();
  e3.destroy();
  h3.destroy();
  a4.destroy();
  j4.destroy();
  e4.destroy();
  h4.destroy();
}

///////////france///////////
if(france.collide(v1)){
  france.destroy();
}
if(france.collide(v2)){
  france.destroy();
}
if(france.collide(v3)){
  france.destroy();
}
if(france.collide(v4)){
  france.destroy();
}
if(france.collide(v5)){
  france.destroy();
}
if(france.collide(v6)){
  france.destroy();
}
if(france.collide(v7)){
  france.destroy();
}
if(france.collide(v8)){
  france.destroy();
}
if(france.collide(v9)){
  france.destroy();
}
if(france.collide(a4)){
  a4.destroy();
}
if(france.collide(e4)){
  e4.destroy();
}
if(france.collide(j4)){
  j4.destroy();
}
if(france.collide(h4)){
  h4.destroy();
}
if(france.collide(c4)){
  c4.destroy();
  v1.destroy();
  v2.destroy();
  v3.destroy();
  v4.destroy();
  v5.destroy();
  v6.destroy();
  v7.destroy();
  v8.destroy();
  v9.destroy();
  germany.destroy();
  us.destroy();
  france.destroy();
  india.destroy();
  fw = createSprite(750,350,50,50);
  fw.addImage("fw.jpg",fw_Image);
  a1.destroy();
  j1.destroy();
  e1.destroy();
  h1.destroy();
  a2.destroy();
  j2.destroy();
  e2.destroy();
  h2.destroy();
  a3.destroy();
  j3.destroy();
  e3.destroy();
  h3.destroy();
  a4.destroy();
  j4.destroy();
  e4.destroy();
  h4.destroy();
}


////////////c///////////////////
////////////DISPLAY///////////////////
  a1.scale = 0.5;
  j1.scale = 0.045;
  e1.scale = 0.22;
  h1.scale = 0.15;
  c1.scale = 0.09;
  a2.scale = 0.5;
  j2.scale = 0.045;
  e2.scale = 0.22;
  h2.scale = 0.15;
  c2.scale = 0.09;
  a3.scale = 0.5;
  j3.scale = 0.045;
  e3.scale = 0.22;
  h3.scale = 0.15;
  c3.scale = 0.09;
  a4.scale = 0.5;
  j4.scale = 0.045;
  e4.scale = 0.22;
  h4.scale = 0.15;
  c4.scale = 0.09;
  drawSprites();
  v1.display();
  v2.display();
  v3.display(); 
  v4.display();
  v5.display();
  v6.display();
  v7.display();
  v8.display();
  v9.display();
}

function keyPressed(){
if(keyCode === 32){
  v1.velocityY = 2;
  v2.velocityY = -2;
  v3.velocityY = 2;
  v4.velocityY = -2;
  v5.velocityY = 2;
  v6.velocityY = -2;
  v7.velocityY = -2;
  v8.velocityY = 2;
  v9.velocityY = -2;

}
if(keyCode === 87){
  us.velocityY = -2; 
}
if(keyCode === 83){
  us.velocityY = 2; 
}
if(keyCode === 65){
  us.velocityX = -2; 
}
if(keyCode === 68){
  us.velocityX = 2; 
}

if(keyCode === 71){
  india.velocityY = -2; 
}
if(keyCode === 66){
  india.velocityY = 2; 
}
if(keyCode === 86){
  india.velocityX = -2; 
}
if(keyCode === 78){
  india.velocityX = 2; 
}

if(keyCode === 73){
  germany.velocityY = -2; 
}
if(keyCode === 75){
  germany.velocityY = 2; 
}
if(keyCode === 74){
  germany.velocityX = -2; 
}
if(keyCode === 76){
  germany.velocityX = 2; 
}

if(keyCode === 49){
  france.velocityY=-2;
}
if(keyCode === 50){
  france.velocityY=2;
}
if(keyCode === 51){
  france.velocityX=-2;
}
if(keyCode === 52){
  france.velocityX=2;
}
}