const express = require('express')
const path = require('path')
const todoRoutes = require('./routes/todo')
const app = express()
const PORT = process.env.PORT || 3000

//to use folder public
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/api/todo', todoRoutes)

//to use index.html
app.use((req, res, next) => {
    res.sendFile('/index.html')
})

app.listen(PORT)