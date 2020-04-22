class Block{
    constructor(x,y){
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,570,200,options);
        this.x = x;
        this.y = y;

    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("black");
        strokeWeight(5);
        stroke("white");
        rect(pos.x,pos.y,570,200);
    }
};