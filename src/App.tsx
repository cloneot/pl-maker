import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Music from "./components/Music";
import MusicDetail from "./components/MusicDetail";
import UserProfile from "./components/UserProfile";
import PlaylistAll from "./components/playlists/PlaylistAll";
import Playlist from "./components/playlists/Playlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/music" element={<Music />}></Route>
        <Route path="/music/:id" element={<MusicDetail />}></Route>

        <Route path="/users/me" element={<UserProfile />}></Route>

        <Route path="/playlists" element={<PlaylistAll />}></Route>
        <Route path="/playlists/:id" element={<Playlist />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
