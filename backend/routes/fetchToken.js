const express=require('express');
const router=express.Router();
const CLIENT_ID='15e9bae708364344a69e463f94fe1985';
const CLIENT_SECRET='db5cab51495a46b2a69d7f9eca957910';

// Router 1:getting token using /api/token/refreshToken
router.get('/getToken',async (req,res) => {

    try {
        const response=await fetch('https://accounts.spotify.com/api/token',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
        });
        const token=await response.json();
        res.send({
            'access_token': token
        });
    } catch (error) {
        console.error(error.message);
        res.status(400).send("Internal Server Error");
    }
})

// Router 2:refreshing token using /api/token/refreshToken
// router.get('/refreshToken',async (req,res) => {

//     var refresh_token=req.query.refresh_token;
//     const response=await fetch('https://accounts.spotify.com/api/token',{
//         headers: { 'Authorization': 'Basic '+(new Buffer.from(CLIENT_ID+':'+CLIENT_SECRET).toString('base64')) },
//         form: {
//             grant_type: 'refresh_token',
//             refresh_token: refresh_token
//         },
//         json: true
//     })
//     // var response={
//     //     url: 'https://accounts.spotify.com/api/token',
//     //     headers: { 'Authorization': 'Basic '+(new Buffer.from(CLIENT_ID+':'+CLIENT_SECRET).toString('base64')) },
//     //     form: {
//     //         grant_type: 'refresh_token',
//     //         refresh_token: refresh_token
//     //     },
//     //     json: true
//     // }
//     const token=await response.json();
//     res.send({
//         'access_token': token
//     });
// })

module.exports=router;