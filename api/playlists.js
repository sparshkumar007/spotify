// api/hello.js

const express=require('express');
var cors=require('cors');
const express=require('express');
const router=express.Router();
const Playlist=require('../backend/models/Playlist');
const { CLIENT_ID,CLIENT_SECRET }=require('../backend/data');
const fetchToken=require('../backend/middlewares/fetchToken');
const fetchUser=require('../backend/middlewares/fetchUser');

connectToMongo();
// app.use('/api/token/',require('./routes/fetchToken'));
export default async (req,res) => {
    try {
        const data=await Playlist.find();
        res.send(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error!!!');
    }
};
