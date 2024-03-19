const calculateProbabilities = require('../../challenge/calculateProbabilities')



describe('suit tests of calculateProbabilities function ', () => {

    test('Should return an array', () => {
        const probabilities = calculateProbabilities(99);
        expect(Array.isArray(probabilities)).toBe(true);
    })

    test('Should calculate probabilities for k = 6 correctly', () => {
        expect(calculateProbabilities(6)).toEqual([1]);
    });

    test('Should calculate probabilities for k = 10 correctly', () => {
        expect(calculateProbabilities(10)).toEqual([1, 0.16666666666666666, 0.19444444444444442, 0.22685185185185183, 0.26466049382716045]);
    });


});