const mongoose=require('mongoose');
const { Schema }=mongoose;

const playlistsSchema=new Schema({
    playlist: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
});

module.exports=mongoose.model('playlists',playlistsSchema);