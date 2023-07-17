import React,{ useEffect,useState } from "react";
import { Link } from "react-router-dom";
import SavedData from './SavedData';
import { useNavigate } from 'react-router-dom';



function App() {
    const Navigate=useNavigate();
    const [Data,setData]=useState([]);
    const user_id='m8wmw14hbql9teek767hzs5ru';
    // const user_id=props.id;
    const fetchData=async () => {
        return await fetch("http://localhost:5000/api/playlists/all",{
            // mode: "no-cors",
            method: 'GET',
            headers: {
                'user_id': user_id
            }
        }).then((response) => response.json())
            .then((dat) => setData(dat.playlists));
    }
    useEffect(() => {
        fetchData();
    },[])

    return (
        <main>
            <h1>Playlists</h1>
            <ul>
                {Data&&Data.length>0&&Data.map((playlist) => (
                    <li key={playlist} className="my-1">
                        <button onClick={async () => {
                            return await fetch("http://localhost:5000/api/playlists/save",{
                                // mode: "no-cors",
                                method: 'POST',
                                headers: {
                                    "playlist": playlist,
                                    "user": user_id
                                }
                            }).then((response) => response.json()).then(
                                Navigate('/'));
                        }}>{playlist}</button>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default App;

// import React,{ useState,useEffect } from 'react';
// import axios from 'axios';

// const YourComponent=() => {
//     const [data,setData]=useState([]);

//     useEffect(() => {
//         // Make the API call
//         axios.get('/api/playlists/all',{
//             headers: {
//                 'user_id': 'm8wmw14hbql9teek767hzs5ru'
//             }
//         })
//             .then(response => {
//                 // Handle the response data
//                 setData(response.data);
//             })
//             .catch(error => {
//                 // Handle errors if any
//                 console.error('Error fetching data:',error);
//             });
//     },[]);

//     return (
//         <div>
//             {/* Render the fetched data here */}
//         </div>
//     );
// };

// export default YourComponent;
