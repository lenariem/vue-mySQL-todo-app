const express = require('express')
const path = require('path')
const todoRoutes = require('./routes/todo')
const app = express()
const PORT = process.env.PORT || 3000

//to use folder public
app.use(express.static(path.join(__dirname, 'public')))


//to use index.html
app.use((req, res, next) => {
    res.sendFile('/index.html')
})

//routes
app.use('/api/todo', todoRoutes)

app.listen(PORT)