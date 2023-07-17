import React,{ useEffect,useState } from "react";

function App(props) {
    const [Data,setData]=useState([]);
    const playlist=props.playlist;
    const user=props.user;
    const fetchData=async () => {
        return await fetch("http://localhost:5000/api/playlists/save",{
            // mode: "no-cors",
            method: 'POST',
            headers: {
                "playlist": playlist,
                "user": user
            }
        }).then((response) => response.json());
    }
    useEffect(() => {
        fetchData();
    },[])

    return (
        <main>
            <ul>
                your data is Saved!!!
            </ul>
        </main>
    );
}

export default App;
