
class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    basicIntroduce(){
        return`My name is ${this.name}. I am ${this.age} years old.`;
    }
};
class student extends person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return super.basicIntroduce()+` I am a Student. I am at Class ${this.klass}.`

    }
};
class worker extends person{
    constructor(name,age){
        super(name,age)
    }
    introduce(){
        return super.basicIntroduce()+` I am a Worker. I have a job.`
    }
};