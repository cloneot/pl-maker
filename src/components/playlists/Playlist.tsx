import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import UpdatePlaylist from "./UpdatePlaylist";
import { useParams } from "react-router-dom";
import DeletePlaylist from "./DeletePlaylist";

const Playlist: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <UpdatePlaylist id={+id!} />
      <DeletePlaylist id={+id!} />
    </div>
  );

  // return (
  //   <div>
  //     <h1>Playlist</h1>

  //     {/* make playlist list using <ul>, <li> */}
  //     <ul>
  //       {playlists?.map((playlist) => (
  //         <li key={playlist.playlistId}>
  //           <a href={`/playlists/${playlist.playlistId}`}>{playlist.title}</a>
  //         </li>
  //       ))}
  //     </ul>

  //     <div>oh</div>
  //     <CreatePlaylist />
  //   </div>
  // );
};

export default Playlist;
