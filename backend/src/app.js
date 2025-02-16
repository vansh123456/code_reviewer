const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

const corsOptions = {
    origin: 'https://code-reviewer-gilt.vercel.app', 
    optionsSuccessStatus: 200, // Some legacy browsers choke on 204
  };

app.use(cors())


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app