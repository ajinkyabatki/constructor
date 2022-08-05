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
let Movie1=new Movie("Harry Potter", "Warner Bros", "PG")
console.log(Movie1.getSpecification());