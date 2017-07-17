class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return`My name is ${this.name}.I am ${this.age} years old.`;
    }
};
class student extends person{
    constructor(name,age,kalss){
        super(name,age);
        this.klass=kalss;}
        introduce(){
        return`My name is ${this.name}.I am ${this.age} years old.My class is ${this.klass}`;

    }
}
var Student=new student('tom',21,4).introduce();
console.log(Student);