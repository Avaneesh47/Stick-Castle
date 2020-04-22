class Circle{
    constructor(x,y,radius){
        var options = {
            isStatic:true
        }

        this.body = Bodies.circle(x,y,radius);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("white");
        strokeWeight(5);
        stroke("black");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}