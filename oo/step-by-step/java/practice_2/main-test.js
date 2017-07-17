'use strict';

describe('student inherit person', () => {

    it('should print text', () => {
        var Person = new person('tom', 21).introduce();
        var result = `My name is tom.I am 21 years old.`;
        expect(Person).toEqual(result);
        var Student = new student('tom', 21, 4).introduce();
        var result2 =`My name is tom.I am 21 years old.My class is 4`;
        expect(Student).toEqual(result2);

    })
});


