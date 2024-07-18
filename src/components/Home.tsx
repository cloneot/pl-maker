import React, { useEffect, useState } from "react";
import { API_URL } from "../constants";

type User = {
  id: number;
  name: string;
  email: string;
};

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  console.log(`API_URL: ${API_URL}`);

  useEffect(() => {
    fetch(`${API_URL}/users/1`)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("Response is not ok");
        }
        return res.json();
      })
      .then((user) => {
        setUser(user);
        setLoading(false);
        console.log(`user: ${user}`);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return <div>user 1 not found</div>;

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <p>fisrt username is {user.name}</p>
      <p>first user email is {user.email}</p>
    </div>
  );
};

export default Home;
