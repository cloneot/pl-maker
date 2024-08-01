import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import CreatePlaylist from "./CreatePlaylist";

export type Playlist = {
  playlistId: number;
  ytPlaylistId: string;
  title: string;
  description: string;
};

const youtubePrefix = "https://www.youtube.com/playlist?list=";

const PlaylistAll: React.FC = () => {
  const [playlists, setPlaylists] = useState<Playlist[] | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/playlists`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPlaylists(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>PlaylistAll</h1>

      <ul>
        {playlists ? (
          playlists?.map((playlist) => (
            <li key={playlist.playlistId}>
              <a href={`/playlists/${playlist.playlistId}`}>{playlist.title}</a>
              : {playlist.description}
              <div>
                <a href={`${youtubePrefix}${playlist.ytPlaylistId}`}>
                  youtube link
                </a>
              </div>
            </li>
          ))
        ) : (
          <div>maybe not logged in</div>
        )}
      </ul>

      <div>oh</div>
      <CreatePlaylist />
    </div>
  );
};

export default PlaylistAll;
