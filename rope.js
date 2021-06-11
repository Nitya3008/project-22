class Rope
{
    constructor(body1,body2,pointA,pointB)
    {
    this.pointA=pointA
    this.pointB=pointB
    var options={
        bodyA:body1,
        bodyB:body2,

        pointB:{x:this.pointA,y:this.pointB}
    }
    //con=Matter.Constraint.create({
     //   bodyA:roof,
     //   pointA:{x:0,y:0},
      //  bodyB:bob1,
      //  pointB:{x:0,y:0},
      //  length:100,
     //   stiffness:1
   // })
this.rope=Constraint.create(options)
World.add(world,this.rope)
    }
    display(){
       // let pos = this.body.position;
var pointA=this.rope.bodyA.position
var pointB=this.rope.bodyB.position

        strokeWeight(4);
        stroke(255);
        line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB);
        
    }

}