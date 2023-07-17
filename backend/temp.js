const connectToMongo=require("./db.js");
const express=require('express')

connectToMongo();
const app=express()
const port=5000

// if i want to use req.body in my code then i have to use this middleware
app.use(express.json());

//available routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));


app.listen(port,() => {
    console.log(`iNotebook listening on port ${port}`)
}) 