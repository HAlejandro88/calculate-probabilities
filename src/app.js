const express = require('express')
const cors = require('cors')
const calculateProbabilities = require('./challenge/calculateProbabilities')

const app = express()


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    let k = req.headers.k;
    if(isNaN(Number(k))) {
        return res.status(500).json({
            success: false,
            message: 'k must be a number'
        })
    }
    try {
        if(k) {
            const probability = calculateProbability(Number(k));
            res.status(200).json({ probability });
        }else {
            const probabilities = calculateProbabilities(99);
            res.status(200).json(probabilities);
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Server error'
        })
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, (error) => {
    if(error) {
        process.exit(1)
    }
    console.log(`Server is running on port ${PORT}`)
})