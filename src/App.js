import React,{ useState } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import SpotifyLogin from './SpotifyLogin';
import Home from './components/Home';
import Playlist from './components/Playlists';
import SavedData from './components/SavedData';
import SavePlaylist from './components/SavePlaylist';
import Navbar from './components/Navbar';
import MyContext from './context/createContext';

const App=() => {
  const id='m8wmw14hbql9teek767hzs5ru';
  const [Id,setId]=useState(id);
  return (
    <div id="container">
      <MyContext.Provider value={{ Id,setId }}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/saved_data" element={<SavedData />} />
            <Route exact path="/user_playlists" element={<Playlist />} />
            <Route exact path="/save_data" element={<SavePlaylist playlist="abcd" user="Sparsh" />} />
          </Routes>
        </Router>
      </MyContext.Provider>
    </div>
    //   <Routes>
    //     <Route exact path="/callback" element={<SpotifyLogin />} />
    //     <Route exact path="/home" element={<Home />} /> {/*Create Home component*/}
    //     <Route exact path="/" element={<SpotifyLogin />} />
    //   </Routes>
  );
};

export default App;