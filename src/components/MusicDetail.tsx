import React from "react";
import { useParams } from "react-router-dom";

const MusicDetail: React.FC = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Music Detail: {id} </h1>
      <p>Welcome to the Music Detail page!</p>
    </div>
  );
};

export default MusicDetail;
