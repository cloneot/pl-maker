import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";

interface DeletePlaylistProps {
  id: number;
}

const DeletePlaylist: React.FC<DeletePlaylistProps> = (props) => {
  const { id } = props;

  // handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`${API_URL}/playlists/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          setTimeout(() => window.location.replace("/playlists"), 1000);
        } else {
          console.log("Failed to delete playlist");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Delete Playlist</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Delete Playlist {`(id: ${id})`}</button>
      </form>
    </div>
  );
};

export default DeletePlaylist;

// const DeletePlaylist: React.FC = () => {
//   const [title, setTitle] = useState<string>("");
//   const [description, setDescription] = useState<string>("");
//   const [message, setMessage] = useState<string>("This is a message");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     fetch(`${API_URL}/playlists`, {
//       method: "POST",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ title, description }),
//     })
//       .then((res) => {
//         if (res.ok) {
//           setMessage("Playlist created successfully");
//           setTimeout(() => window.location.reload(), 1000);
//         } else {
//           setMessage("Failed to create playlist");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <h1>Create Playlist</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <button type="submit">Create Playlist</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// };
