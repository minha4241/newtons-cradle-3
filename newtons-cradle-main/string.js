class string{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 100
        }
      
        this.pointB = pointB
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

    display(){
     var pointA=this.string.bodyA.position
     var pointB=this.pointB

     line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}

