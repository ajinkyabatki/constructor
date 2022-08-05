class Circle{
    constructor( radius, color){
        this.radius=radius;
        this.color=color;
}
getSpecification(){
    let data=`
    Radius:${this.radius}
    Color:${this.color}
    `
    return data;
}
}
let Circle1= new Circle();
console.log(Circle1.getSpecification());
let Circle2= new Circle("1.0");
console.log(Circle2.getSpecification());
let Circle3= new Circle("1.0", "red");
console.log(Circle3.getSpecification());