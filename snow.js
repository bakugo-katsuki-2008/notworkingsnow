class Snow{
    constructor(x,y,r){
        var options={
            restituition: 0.1,
            friction: 0.001,
            isStatic: false
        }
        this.body = Bodies.circle(x, y, r, options)
        var rand = Math.round(random(1,2))
        var image;
        if (rand === 1){
            image = "snow4.webp";
        }
        else{
            image = "snow5.webp"
        }
        this.img = loadImage(image);
        this.r = r
        World.add(worlde, this.body)
    }
    showDrop(){
        fill("blue")
        imageMode(CENTER);
        image(this.img, this.body.position.x, this.body.position.y, this.r, this.r);
    }
    updateY(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0,width), y:random(0,height)})
        }
    }
}