import React,{ useContext } from 'react'
import { Link,Navigate } from 'react-router-dom'
import MyContext from '../context/createContext'
// import { stringify } from 'query-string/base';
// import queryString from 'query-string';
/* global document */

const Navbar=() => {
    const context=useContext(MyContext);
    const { Id,setId }=context;
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/saved_data">Saved Playlists</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/user_playlists">User's Playlist</Link>
                            </li>
                        </ul>
                        <input className="form-control me-2" type="text" placeholder="End UserId" id="user_id" />
                        <button className="btn btn-outline-success" onClick={() => {
                            setId(document.getElementById('user_id').value);
                        }}>
                            Enter</button>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
