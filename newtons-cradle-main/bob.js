class bob{
    constructor(x,y,radius){
      var options={
          restitution:1,
          friction:1,
          density:0.1
        
      }
        this.body=Bodies.circle(x,y,radius,options)
        World.add(world, this.body) 

        this.radius=radius
        


    }
    display(){
    var pos=this.body.position

    
    ellipse(pos.x, pos.y, this.radius*2, this.radius*2 )
    }



}





