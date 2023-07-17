const connectToMongo=require('./db');
const express=require('express');
var cors=require('cors')

connectToMongo();
const app=express()
const port=5000

app.use(cors());
// app.use('/api/token/',require('./routes/fetchToken'));
app.use('/api/playlists/',require('./routes/fetchPlaylists'));

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})

// 15e9bae708364344a69e463f94fe1985
// db5cab51495a46b2a69d7f9eca957910