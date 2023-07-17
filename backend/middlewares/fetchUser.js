const express=require('express');

const fetchUser=async (req,res,next) => {
    const auth_token=req.access_token;
    const user_id=req.header('user');
    try {
        const response=await fetch(`https://api.spotify.com/v1/users/${user_id}`,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${auth_token}`
            }
        });
        const user=await response.json();
        const user_name=user.display_name;
        req.user=user_name;
        next();
    } catch (error) {
        console.error(error.message);
        res.status(400).send("Internal Server Error");
    }
}

module.exports=fetchUser;