class Person{
    constructor( height, weight, color, name, age, designation, salary, religion){
        this.height = height;
        this.weight = weight;
        this.color = color;
        this.name = name;
        this.age = age;
        this.designation = designation;
        this.salary = salary;
        this.religion = religion;
}
getSpecification(){
    let data=`
    Height:${this.height}
    Weight:${this.weight}
    Color:${this.color}
    Name:${this.name}
    Age:${this.age}
    Designation:${this.designation}
    Salary:${this.salary}
    Religion:${this.religion}
    `
    return data;
}
}
let Person1=new Person( "162 cm", "70kg", "Fair", "John", "27", "CEO", "1$", "Christine")
console.log(Person1.getSpecification());