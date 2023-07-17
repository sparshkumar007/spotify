const express=require('express');
const router=express.Router();

router.get('/refreshToken',async (req,res) => {

    var refresh_token=req.query.refresh_token;
    var authOptions={
        url: 'https://accounts.spotify.com/api/token',
        headers: { 'Authorization': 'Basic '+(new Buffer.from(client_id+':'+client_secret).toString('base64')) },
        form: {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        },
        json: true
    };

    request.post(authOptions,function (error,response,body) {
        if (!error&&response.statusCode===200) {
            var access_token=body.access_token;
            res.send({
                'access_token': access_token
            });
        }
    });
});

module.exports=router;