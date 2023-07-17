import React from 'react';
import { Navigate } from 'react-router-dom';
// import axios from 'axios';
import queryString from 'query-string';

const SPOTIFY_CLIENT_ID='15e9bae708364344a69e463f94fe1985';
const SPOTIFY_REDIRECT_URI='http://localhost:8888/callback';

const SpotifyLogin=() => {
    const handleLogin=() => {
        const queryParams=queryString.stringify({
            response_type: 'token',
            client_id: SPOTIFY_CLIENT_ID,
            redirect_uri: SPOTIFY_REDIRECT_URI,
        });

        const loginURL=`https://accounts.spotify.com/authorize?${queryParams}`;
        window.location=loginURL;
    };

    // Check if there's an access token in the URL (callback from Spotify)
    const accessToken=queryString.parse(window.location.hash).access_token;

    if (accessToken) {
        // Save the access token in local storage or state for further use
        localStorage.setItem('spotifyAccessToken',accessToken);
        // Redirect to a secured route after login (e.g., Home page)
        return <Navigate to="/home" />;
    }

    return (
        <div>
            <h1>Welcome to Spotify Login</h1>
            <button onClick={handleLogin}>Log in with Spotify</button>
        </div>
    );
};

export default SpotifyLogin;
