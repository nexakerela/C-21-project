var wall,bullet;
var speed, weight,thickness;

function setup() 
 {  
   createCanvas(1600,400);

   speed=random(223,321)
   weight=random(30,52)
   thickness=random(22,83)

   bullet=createSprite(50,200,50,5);  
   bullet.velocityX = speed;
   bullet.shapeColor=color("white");

   wall=createSprite(1200,200,thickness,height/2);  
   wall.shapeColor=color(80,80,80);
   
  }
 
 
function draw()
 {
   background(0);  
   
   if(IsCollided(bullet, wall))
    {
      bullet.velocityX=0;  
      var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
     
      if(damage<10)
      {
        wall.shapeColor=color("green");
      }
   
      if(damage>10)
      {
       wall.shapeColor=color("red");
      }
   
     }

   drawSprites();
  
  }

      function IsCollided(a,b)
   {
     bulletRightEdge=a.x+a.width;
     wallLeftEdge=b.x;

     if (bulletRightEdge>=wallLeftEdge)
     {
      return true
     }
     return false;
     }  
 