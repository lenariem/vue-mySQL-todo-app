const {Router} = require('express')
const Todo = require('../models/todo')
const router = Router()

//tasks list
router.get('/', async (req, res) => {
    try {
      const todos = await Todo.findAll()
      res.status(200).json(todos)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

//create task
router.post('/', async (req, res) => {
    try {
      const todo = await Todo.create({
        title: req.body.title,
        done: false
      })
      res.status(201).json({todo})
    } catch (e) {
      console.log(e)
      res.status(500).json({
        message: 'Server error'
      })
    }
  })


//change task
router.put('/:id', (req, res) => {
    try {
    
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

//delete task
router.delete('/:id', (req, res) => {
    try {
    
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

module.exports = router