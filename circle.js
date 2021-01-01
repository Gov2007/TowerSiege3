class Circle{
    constructor(x, y,r) {
        var options = {
            isStatic : false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(2);
        fill("red");

        ellipse(0,0,this.r, this.r);
        pop();
      }
}