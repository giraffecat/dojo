

describe('student inherit person', () => {

    it('should print text', () => {
        var Person = new person('Tom', 21).basicIntroduce();
        var result = `My name is Tom. I am 21 years old.`;
        expect(Person).toEqual(result);
        let klass=new Klass(2);
        var Student = new student('Tom', 21, klass).introduce();
        var result2 =`My name is Tom. I am 21 years old. I am a Student. I am at Class 2.`;
        expect(Student).toEqual(result2);
    })
    it('should print text', () => {
        let klass=new Klass(2)
        var teacher=new Teacher('Tom',21).introduce();
        var result=`My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.`;
        expect(teacher).toEqual(result);
    })
    it('should print text', () => {
        let klass=new Klass(4);
       let teacher=new Teacher('Tom',21,klass).introduceWith();
        let result=`My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.`;
        expect(teacher).toEqual(result);

    })
    it('should print text', () => {
        let klass=new Klass(2);
       let teacher=new Teacher('Tom',21,klass).introduceWith();
        let result=`My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.`;
        expect(teacher).toEqual(result);
    })
    it('should print text', () => {
        let klass=new Klass(2);
        klass.appendMember('Tom')
        klass.assignLeader('Tom');
       let Student=new student('Tom',21,klass).introduce();
        let result=`My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.`;
        expect(Student).toEqual(result);
    })
    it('should print text', () => {
        let klass=new Klass(4);
        klass.appendMember('li');
        var process=klass.assignLeader('Tom');
        var result=`It is not one of us.`;
        expect(process).toEqual(result);
    })
});
