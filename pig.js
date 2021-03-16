class Pig {
    constructor(x, y) {
        var options = { restitution: 0.8, friction: 0.3, density: 1 };
        this.pig = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.pig);
    }
    display() {
        rectMode(CENTER);
        var pos = this.pig.position;
        var angle = this.pig.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }

}