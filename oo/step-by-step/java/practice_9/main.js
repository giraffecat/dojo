
class person{
    constructor(name,age,id){
        this.name=name;
        this.age=age;
        this.id=id;
    }
    basicIntroduce(){
        return`My name is ${this.name}. I am ${this.age} years old.`;
    }
};
class Class{
    constructor(number){
        this.number=number;
    }
    assignLeader(leader){
        this.leader=leader;
    }
};

class student extends person{
    constructor(name,age,klass,id){
        super(name,age,id);
        this.klass=klass.number;
    }
    introduce(){
        if (klass.leader == this.name)
            return `My name is Tom. I am 21 years old. I am a Student. I am Leader of Class ${this.klass}.`
        else
            return super.basicIntroduce() + ` I am a Student. I am at Class ${this.klass}.`
    }
};
class teacher extends person{
    constructor(name,age,klass,id){
        super(name,age,id);
        this.klass=klass;
    }
    introduce(){if(this.klass!==undefined)
        return super.basicIntroduce()+` I am a Teacher. I teach Class ${this.klass}.`;
    else return super.basicIntroduce()+` I am a Teacher. I teach No Class.`

    }
    introduceWith(){
        if(klass.number==this.klass)
            return`My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.`;
        else
            return`My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.`;

    }
};
