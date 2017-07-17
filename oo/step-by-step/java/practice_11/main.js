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
        this.students = [];
        this.teachers=[];
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
    isIn(student) {
        return student.klass.number == this.number;
    }
}
class Student extends person{
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
class Teacher extends person {
    constructor(name, age, classes, id) {
        super(name, age, id);
        this.classes = classes;
        for (let klass of classes)
            klass.teachers.push(this);
    }

    introduce() {
        let classString = "";
        if (this.classes.length == 0 || this.classes == null) {
            classString = 'No Class';
        } else {
            let classArr = [];
            for (let klass of this.classes) {
                classArr.push(klass.number);
            }
            classString = classArr.join(',');
        }
        return `${super.basicIntroduce()} I am a Teacher. I teach ${classString}.`;
    }

    isTeaching(student) {
        let result = false;
        for (let klass of this.classes) {
            if (klass.isIn(student)) {
                result = true;
                break;
            }
        }
        return result;
    };
}

