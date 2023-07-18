import React,{ useContext,useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyContext from '../context/createContext';
/* global document */
export default function Home() {
    const context=useContext(MyContext);
    const { Id,setId }=context;
    const Navigate=useNavigate();
    return (
        <div className="container">
            <h1>Welcome to Our Site</h1>
            Current user Id is: {Id}
            {/* <div className="mb-3">
                <input type="text" className="form-control" id="user_id" placeholder="User ID" />
            </div> */}
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary" type="button" onClick={() => { Navigate('/user_playlists') }}>Your Playlists</button>
                <button className="btn btn-primary" type="button" onClick={() => { Navigate('/saved_data') }}>Saved Data of all Users</button>
            </div>
        </div>
    )
}
