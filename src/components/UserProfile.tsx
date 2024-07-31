import React, { useEffect, useState } from "react";
import { API_URL } from "../constants";

type User = {
  userId: number;
  username: string;
  accessToken: string;
  refreshToken: string | null;
};

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/users/me`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setUser(null);
          setLoggedIn(false);
        }
      })
      .then((user) => {
        console.log(user);
        setUser(user);
        setLoggedIn(true);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (loggedIn === null) return <div>Loading...</div>;

  return (
    <div>
      <h1>UserProfile</h1>
      {user ? (
        <div>
          <p>UserId: {user.userId}</p>
          <p>Username: {user.username}</p>
        </div>
      ) : (
        <div>Not Logged In</div>
      )}
    </div>
  );
};

export default UserProfile;
