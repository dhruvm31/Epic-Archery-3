class CannonBall{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.r = 40;
    this.body = Bodies.circle(x,y,this.r,options);
    this.image = loadImage("./assets/cannonball.png")
    World.add(world,this.body) 
    }

    display(){
        push();
        pop();
    }
}