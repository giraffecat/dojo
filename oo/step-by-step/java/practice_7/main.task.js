

describe('student inherit person', () => {

    it('should print text', () => {
        var Person = new person('Tom', 21).basicIntroduce();
        var result = `My name is Tom. I am 21 years old.`;
        expect(Person).toEqual(result);
        var Student = new student('Tom', 21, 2).introduce();
        var result2 =`My name is Tom. I am 21 years old. I am a Student. I am at Class 2.`;
        expect(Student).toEqual(result2);
    })
    it('should print text', () => {
        var Teacher=new Teacher('Tom',21).introduce();
        var result=`My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.`;
        expect(Teacher).toEqual(result);
    })
});
