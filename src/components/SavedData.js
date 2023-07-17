import React,{ useEffect,useState } from "react";

function App() {
    const [Data,setData]=useState([]);

    const fetchData=async () => {
        return await fetch("http://localhost:5000/api/playlists/showData")
            .then((response) => response.json())
            .then((dat) => setData(dat));
    }
    useEffect(() => {
        fetchData();
    },[])

    return (
        <main>
            <h1>Playlists</h1>
            <ul>
                {Data&&Data.length>0&&Data.map((item) => (
                    <li key={item._id}>{item.playlist}-----{item.user}</li>
                ))}
            </ul>
        </main>
    );
}

export default App;