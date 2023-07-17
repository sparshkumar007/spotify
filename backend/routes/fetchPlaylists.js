const express=require('express');
const router=express.Router();
const Playlist=require('../models/Playlist');

// Router 1:getting all playlists of user from spotify api using /api/playlists/all
router.get('/all',async (req,res) => {
    const user_id=req.header('user_id');
    const auth_token=req.header('auth-token');
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
        res.send({
            'playlists': names
        });
    } catch (error) {
        console.error(error.message);
        res.status(400).send("Internal Server Error");
    }
})

// router 2: saving playlist in db using /api/playlists/save
router.post('/save',async (req,res) => {
    const playlist=req.body.playlist;
    const user=req.body.user;
    try {
        const entry=new Playlist({
            playlist,user
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