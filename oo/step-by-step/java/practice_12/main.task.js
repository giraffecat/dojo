

describe('student inherit person', () => {

    it('should print text', () => {
        var Person = new person('Tom', 21).basicIntroduce();
        var result = `My name is Tom. I am 21 years old.`;
        expect(Person).toEqual(result);
        let klass=new Klass(2);
        var student = new Student('Tom', 21, klass).introduce();
        var result2 =`My name is Tom. I am 21 years old. I am a Student. I am at Class 2.`;
        expect(student).toEqual(result2);
    })
    it('should print text', () => {
        let klass1=new Klass(2)
        let klass2=new Klass(4)
        let classes=[];
        var teacher=new Teacher('Tom',21,classes).introduce();
        var result=`My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.`;
        expect(teacher).toEqual(result);
    })
    it('should print text', () => {
        let klass=new Klass(2);
        klass.appendMember('Tom')
        klass.assignLeader('Tom');
       let student=new Student('Tom',21,klass).introduce();
        let result=`My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.`;
        expect(student).toEqual(result);
    })
    it('should print text', () => {
        let klass=new Klass(4);
        klass.appendMember('li');
        var process=klass.assignLeader('Tom');
        var result=`It is not one of us.`;
        expect(process).toEqual(result);
    })
    it('teacher announce student join',()=>{
        let klass1=new Klass(0);
        let klass2=new Klass(1);
        let classes=[klass1,klass2];
        let student=new Student('Jerry',21,klass1)
        let teacher=new Teacher('Tom',21,classes)
        let result=teacher.studentjoin(student)
        let expected=`I am Tom. I know Jerry has joined Class 0.`;
        expect(result).toEqual(expected);
    })
});
