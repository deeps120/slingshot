class Ball{
    constructor(x,y){
        var options={
            restitution:0.8
        }
        this.body=Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
    }
    display(){
        rect(this.body.x,this.body.y,this.body.width,this.body.height);
        this.body.position.x = World.mouseX;
        this.body.position.y =World.mouseY;
        fill("yellow");
    }
}