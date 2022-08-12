import React from "react";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>Character Detail</h1>
      <p>{params.characterId}</p>
    </section>
  );
};

export default CharacterDetail;
