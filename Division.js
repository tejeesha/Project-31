class Division
{
    constructor(x,y,width,height)
    {
        var division_options={
            isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,width,height,division_options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
    }

    display() 
    {
        var pos=this.body.position
        rectMode(CENTER);
        fill('white');
        rect(pos.x,pos.y,this.width,this.height);
    }
}