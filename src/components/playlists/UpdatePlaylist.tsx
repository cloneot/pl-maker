import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";

interface UpdatePlaylistProps {
  id: number;
}

const UpdatePlaylist: React.FC<UpdatePlaylistProps> = (props) => {
  const { id } = props;
  console.log("id:", id);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [message, setMessage] = useState<string>("This is a message");

  useEffect(() => {
    fetch(`${API_URL}/playlists/${id}`, {
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
        setTitle(data.title);
        setDescription(data.description);
        console.log(title);
        console.log(description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`${API_URL}/playlists/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => {
        if (res.ok) {
          setMessage("Playlist updated successfully");
          setTimeout(() => window.location.reload(), 1000);
        } else {
          setMessage("Failed to update playlist");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Update Playlist</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Update Playlist</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default UpdatePlaylist;
