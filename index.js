const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

//use folder public
app.use(express.static(path.join(__dirname, 'public')))

//to use index.html
app.use((req, res, next) => {
    res.sendFile('/index.html')
})

app.listen(PORT)