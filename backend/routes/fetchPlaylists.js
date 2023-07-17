const express=require('express');
const router=express.Router();
const Playlist=require('../models/Playlist');
const { CLIENT_ID,CLIENT_SECRET }=require('../data');
const fetchToken=require('../middlewares/fetchToken');
const fetchUser=require('../middlewares/fetchUser');

// Router 1:getting all playlists of user from spotify api using /api/playlists/all
router.get('/all',fetchToken,async (req,res) => {

    // working for auth_token
    // const response=await fetch('https://accounts.spotify.com/api/token',{
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    // });
    // const token=await response.json();

    const user_id=req.header('user_id');
    const auth_token=req.access_token;

    try {
        const response=await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${auth_token}`,
            }
        });
        const playlists=await response.json();
        const names=[];
        playlists.items.map((playlist) => {
            names.push(playlist.name);
        })
        // console.log(names);
        res.send({
            'playlists': names
        });
        // res.send(playlists);
    } catch (error) {
        console.error(error.message);
        res.status(400).send("Internal Server Error");
    }
})

// router 2: saving playlist in db using /api/playlists/save
router.post('/save',fetchToken,fetchUser,async (req,res) => {

    const user_name=req.user;
    const playlist=req.header('playlist');
    try {
        const entry=new Playlist({
            playlist,user: user_name
        })
        const savedEntry=await entry.save();
        res.send(savedEntry);
    } catch (error) {
        console.error(error.message);
        res.status(400).send("Internal Server Error");
    }
})

// router 3:Getting saved playlists using /api/playlists/showData
router.get('/showData',async (req,res) => {
    try {
        const data=await Playlist.find();
        res.send(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error!!!');
    }
})

module.exports=router;