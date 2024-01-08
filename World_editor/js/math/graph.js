//graphs are data structures made from set of nodes also called vertices and set of edges or links. For ex in social network it tells which person is a friend of which one. G(v,e) = v=vertices, e=edges, G=graph.
//here we are using spatial graph: spatial graph consist nodes with spatial location or x,y coordinates.


//we have constructed a graph class which have a array of points(vertices) and a array of segements(edges).
class Graph {
    constructor(points=[],segements = []){
        this.points = points;
        this.segements = segements;
    }

    addPoint(point){
        this.points.push(point);
    }

    draw(ctx){
        for(const segment of this.segements){
            segment.draw(ctx);
        }

        for(const point of this.points){
            //ctx is used inside it as we are telling that this method would also draw in the 2d format and use the methods and properties of it.
            point.draw(ctx);
        }
    }
}