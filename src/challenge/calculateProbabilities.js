const calculateProbabilities = (input) => {
    const dp = new Array(input + 1).fill(0);
    dp[6] = 1;


    for (let k = 7; k <= input; k++) {
        let totalProbability = 0;


        for (let i = 1; i <= 6; i++) {
            if (k - i >= 6) {
                console.log(totalProbability += (1 / 6) * dp[k - i], 'total probability')
                totalProbability += (1 / 6) * dp[k - i];
            }
        }

        dp[k] = totalProbability;
    }


    return dp.slice(6);
}

module.exports = calculateProbabilities