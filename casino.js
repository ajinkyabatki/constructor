class Movie{
    constructor( title, studio, rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
}
getSpecification(){
    let data=`
    Title:${this.title}
    Studios:${this.studio}
    Rating:${this.rating}
    `
    return data;
}
}
let obj=new Movie("Casino Royale", "Eon Production", "PG13")
console.log(obj.getSpecification());