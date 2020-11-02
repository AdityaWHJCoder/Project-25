class trash {
    constructor(x, y, width, height) {
      this.image = loadImage("papertrash.png");
      var options = {
          isStatic: false,
          'density':1.0,
          'friction': 0.5,
          'restitution': 0.6
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      fill("black");
      image(this.image, 0, 0, this.width, this.height);
      pop();
    };
  };
