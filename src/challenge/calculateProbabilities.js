const calculateProbabilities = (input) => {
    const response = new Array(input + 1).fill(0);
    response[6] = 1;


    for (let k = 7; k <= input; k++) {
        let totalProbability = 0;


        for (let i = 1; i <= 6; i++) {
            if (k - i >= 6) {
                console.log(totalProbability += (1 / 6) * response[k - i], 'total probability')
                totalProbability += (1 / 6) * response[k - i];
            }
        }

        response[k] = totalProbability;
    }


    return response.slice(6);
}

module.exports = calculateProbabilities