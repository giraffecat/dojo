

describe('student inherit person', () => {

    it('should print text', () => {
        var Person = new person('Tom',21).basicIntroduce();
        var result = `My name is Tom. I am 21 years old.`;
        expect(Person).toEqual(result);
        var klass=new Class(2);
        var Student = new student('Tom',21,klass).introduce();
        var result2 =`My name is Tom. I am 21 years old. I am a Student. I am at Class 2.`;
        expect(Student).toEqual(result2);
    })
    it('should print text', () => {
        var Teacher=new Teacher('Tom',21).introduce();
        var result=`My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.`;
        expect(Teacher).toEqual(result);
    })
    it('should print text', () => {
    var klass=new Class(4);
        var Teacher=new Teacher('Tom',21,2).introduceWith();
        var result=`My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.`;
        expect(Teacher).toEqual(result);

    })
    it('should print text', () => {
        var klass=new Class(4);
        var Teacher=new Teacher('Tom',21,4).introduceWith();
        var result=`My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.`;
        expect(Teacher).toEqual(result);
    })
    it('should print text', () => {
        var klass=new Class(2);
        klass.assignLeader('Tom');
        var Student=new student('Tom',21,klass).introduce();
        var result=`My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.`;
        expect(Student).toEqual(result);
    })
});
