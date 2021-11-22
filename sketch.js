function setup() {
  createCanvas(400, 400);
}

let elipse1;
let elipse2;
let elipse3;
let elipse4;
let elipse5; 
let isMoving;	

elipse1 = new Elipse(76,10,40,255,55,0);
elipse2 = new Elipse(152,10,40,255,20,75);
elipse3 = new Elipse(228, 10, 40,35,250,243);
elipse4 = new Elipse(304,10,40,156,157,23);
elipse5 = new Elipse(380,10,40,47,89,52);	


function draw() {
  elipse1.pintar(this);
  elipse2.pintar(this);
  elipse3.pintar(this);
  elipse4.pintar(this);
  elipse5.pintar(this);
}


function moving (){
  if(isMoving == true) {
    this.y = getY + 3;
  }		
  if(this.y > 400) {
    posY = -50;
  }
}	

 function mousePressed() {
  if( dist(mouseX, mouseY, this.x,this.y) < 20 ) {
    isMoving = true;
  }
}	

	


