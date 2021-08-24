class Snow{
    constructor(x,y,radius){
        var options = {
            restitution: 0.8,
            friction: 0.9
        }
        this.body = Matter.Bodies.circle(x,y,radius,options)
        this.r = radius
        this.image = loadImage('snow4.webp')
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        //translate(pos.x, pos.y)
        //rotate(angle)
        imageMode(CENTER)
        image(this.image, pos.x,pos.y, this.r, this.r)
        pop()
    }

}