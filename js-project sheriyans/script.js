var rect = document.querySelector(".center");


//first task completed in which we use mousemove event to know if we are inside the rectangle or not


rect.addEventListener("mousemove", function(event){
    var rect_location = rect.getBoundingClientRect();
    //event.clientX = x coordinate of the mouse
    //rect_location = location of rectangle left,right,height,width coordinates
    var inside_rect = event.clientX - rect_location.left;

    //second task completed in which we have to determine if we are left from the center of rectangle or right


    if(inside_rect < rect_location.width/2){
        //we are in left
        var red_color = gsap.utils.mapRange(0,rect_location.width/2,255,0,inside_rect);
        gsap.to(rect,{
            backgroundColor: `rgb(${red_color},0,0)`,
            ease: Power4
        });
    }
    else {
        var blue_color = gsap.utils.mapRange(rect_location.width/2+1,rect_location.width,0,255,inside_rect);
        gsap.to(rect,{
            backgroundColor: `rgb(0,0,${blue_color})`,
            ease: Power4
        });
    };

    //in above if,else we just used gsap = green shock animation platform to map our values to the indexes of colors and then doing the changes using gsap.to 
});

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor: "white"
    });
});
