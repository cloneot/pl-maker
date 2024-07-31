import React, { useEffect, useState } from "react";
import { API_URL } from "../constants";
import LogIn from "./LogIn";
import LogOut from "./LogOut";

type User = {
  userId: number;
  username: string;
  accessToken: string;
  refreshToken: string | null;
};

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/users/me`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((user) => {
        console.log(user);
        setUser(user);
      });
  }, []);

  return (
    <div>
      <LogIn />
      <LogOut />

      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <p>{!user ? "Not Logged In" : "username is " + user.username}</p>
    </div>
  );
};

export default Home;
