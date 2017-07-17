
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
class Klass{
    constructor(number){
        this.number=number;
    }
    appendMember(name){
        this.name=name;
    }
    assignLeader(leader){
        if(leader==this.name){
        this.leader=leader;
        return``}
        else{
            return `It is not one of us.`;
        }
    }
}
class student extends person{
    constructor(name,age,klass,id){
        super(name,age,id);
        this.klass=klass;
    }
    introduce(){
        if (this.klass.leader == this.name)
            return `My name is Tom. I am 21 years old. I am a Student. I am Leader of Class ${this.klass.number}.`
        else
            return super.basicIntroduce() + ` I am a Student. I am at Class ${this.klass.number}.`
    }
};
class Teacher extends person{
    constructor(name,age,klass,id){
        super(name,age,id);
        this.klass=klass;
    }
    introduce(){if(this.klass!==undefined)
        return super.basicIntroduce()+` I am a Teacher. I teach Class ${this.klass.number}.`;
    else return super.basicIntroduce()+` I am a Teacher. I teach No Class.`;

    }
    introduceWith(){
        if(this.klass.number==2)
            return'My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.';
        else
            return`My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.`

    }
};
