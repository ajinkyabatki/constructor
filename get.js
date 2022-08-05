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
let Movie2=new Movie("Jurassic World", "Universal Pictures", "PG13")
let Movie3=new Movie("Titanic", "Paramount Pictures", "PG")
let Movie4=new Movie("Star Wars", "Walt Disney Pictures", "G")
let Movie5=new Movie("The Dark Knight", "Warner Bros", "R")
console.log(Movie1.getSpecification());