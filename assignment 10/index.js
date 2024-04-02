import express from 'express'
import cors from 'cors'
import usersRouter from './routes/users.js'

const app = express()
app.use(cors())
app.use('/users', usersRouter)

app.get('/', (req,res) =>
res.send("sri"))

app.listen(3000,() =>  {
    console.log("SERVER STARTED")
})