class Box{
  constructor(x,y,width,height){
      var options={
          restitution:0.8,
          friction:0.4,
          density:0.4
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body)
      this.width=width
      this.height=height
  }  
  display(){

   push();

angleMode(RADIANS)

   rectMode(CENTER)

   var pos=this.body.position

   translate(pos.x,pos.y)

  
   var angle=this.body.angle

   rotate(angle)

   fill("green")
   rect(0,0,this.width,this.height)
   pop( )
  }
}