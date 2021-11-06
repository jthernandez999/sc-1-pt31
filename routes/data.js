const router = require('express').Router();

const food = [
    {
        id: 1, 
        name: 'Pizza', 
        score: 5
    },
    {
        id: 2, 
        name: 'Hot Dog', 
        score: 4
    },
    {
        id: 3, 
        name: 'Sushi', 
        score: 3
    },
]

router.get('/', async (req, res) => {
    try {
        // const foodData = await model.find()
        await res.status(200).json(food)
    } catch (error){
        console.log(error.message)
        res.status(500).json({ message: 'Server error' })
    }
})

module.exports = router  