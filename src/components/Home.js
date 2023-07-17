import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const Navigate=useNavigate();
    return (
        <div className="container">
            <h1>This is the home page of our site</h1>
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="button" onClick={() => { Navigate('/user_playlists') }}>Your Playlists</button>
                <button class="btn btn-primary" type="button" onClick={() => { Navigate('/saved_data') }}>Saved Data of all Users</button>
            </div>
        </div>
    )
}
