
describe('student inherit person', () => {

    it('should print text', () => {
        var Person = new person('Tom', 21).introduce();
        var result = `My name is Tom. I am 21 years old.`;
        expect(Person).toEqual(result);
        var Student = new student('Tom', 21, 2).introduce();
        var result2 =`My name is Tom. I am 21 years old. I am a Student. I am at Class 2.`;
        expect(Student).toEqual(result2);
        var Worker=new worker('Tom',21).introduce();
        var result3=`My name is Tom. I am 21 years old. I am a Worker. I have a job.`;
        expect(Worker).toEqual(result3);

    })
});
