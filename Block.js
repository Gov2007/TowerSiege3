class Block{
  constructor(x, y, width, height){
      var options = {
          restitution : 0.04,
          friction : 0.5,
          isStatic : false
      }
      this.visibility = 225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
  }
  display(){
      if(this.body.speed<6){
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      //fill("pink");
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility-5;
          tint(255, this.visibility);
          pop();
      }
  }
  Score(){
     // console.log(this.visibility);
      if(this.visibility < 0 && this.visibility> -105){
          score++;
      }
  }
}