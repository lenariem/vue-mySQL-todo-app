const {Router} = require('express')
const router = Router()

//tasks list
router.get('/', (req, res) => {
    res.json({a:1})
})

//create task
router.post('/:id', (req, res) => {

})


//change task
router.put('/:id', (req, res) => {

})

//delete task
router.delete('/:id', (req, res) => {

})

module.exports = router