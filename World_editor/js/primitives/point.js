class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    draw(ctx, size = 18, color = "black"){
        const radius = size/2;
        //calling beginPath() is a common occurence as it clears all the previous paths(a path is a series of connected points,lines and curves that can be used to draw shapes so before creating any shape ctx.beginPath() is called)
        ctx.beginPath();
        //fillStyle as the name suggest determines the color,gradient and pattern in a circle here are we only giving it a black color.
        ctx.fillStyle = color;
        //This method adds a circular arc to the path. It takes parameters for the center (this.x, this.y), radius (radius), and start/end angles (here, 0(starting angle in radian) to Math.PI * 2(44/7 radian = 360 degree) represents a complete circle) => nRad × 180/π = mDeg
        ctx.arc(this.x,this.y,radius, 0, Math.PI*2);
        //This method fills the path (in this case, the circular arc) with the fill style set earlier. It completes the drawing of the filled circle.
        ctx.fill();
    }
}