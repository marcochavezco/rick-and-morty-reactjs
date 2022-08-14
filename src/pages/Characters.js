import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CharacterTable from "../components/tables/CharacterTable";
import { fetchCharacters } from "../store/character-slice";

const DUMMY_CHAR_LIST = {
  info: {
    count: 826,
    pages: 42,
    next: "https://rickandmortyapi.com/api/character/?page=2",
    prev: null,
  },
  results: [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        // ...
      ],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
    {
      id: 2,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        // ...
      ],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
  ],
};

const Characters = () => {
  const dispatch = useDispatch();
  const data = DUMMY_CHAR_LIST.results;

  const { info, characters } = useSelector(state => state.characters);
  console.log(characters, info, "state/char");

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const showDetailHandler = characterId => {
    console.log(characterId);
  };

  return (
    <Container sx={{ mt: 2 }}>
      <CharacterTable
        characters={characters}
        onShowDetail={showDetailHandler}
      />
    </Container>
  );
};

export default Characters;
