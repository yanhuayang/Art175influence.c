var option = 1;

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background(101,211,110);
  var density = map(mouseX,0,width,20,50);
  
  if (option==1){
      for(x=50; x<=width-50; x += density){
      for(y=50; y<=height-50; y +=density){
      line(x-5,y-5,x+5,y+5);
      line(x+5,y-5,x-5,y+5);
        stroke(208,x,y);
        rotate(radians(x));
      }
    }
  }
  else if(option==2){
    for(x=50; x<=width-50; x += density){
      for(y=50; y<=height-50; y +=density){
      line(x,y,width/2,height/2);
        stroke(305,x,y);
      }
    }
  }
  else if(option==3){
    for(x=50; x<=width-50; x += density){
      for(y=50; y<=height-50; y +=density){
      ellipse(x,y,20,20);
        fill(400,x,y);
        rotate(radians(x));
      }
    }
  }
}

function mousePressed(){
  option++;
  if(option>3){
    option=1;
  }
}
