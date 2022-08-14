import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";

import CharacterTable from "../components/tables/CharacterTable";
import ModalDetail from "../components/modal/ModalDetail";
import {
  characterActions,
  fetchCharacters,
  fetchInfo,
} from "../store/character-slice";

// const DUMMY_CHAR_LIST = {
//   info: {
//     count: 826,
//     pages: 42,
//     next: "https://rickandmortyapi.com/api/character/?page=2",
//     prev: null,
//   },
//   results: [
//     {
//       id: 1,
//       name: "Rick Sanchez",
//       status: "Alive",
//       species: "Human",
//       type: "",
//       gender: "Male",
//       origin: {
//         name: "Earth",
//         url: "https://rickandmortyapi.com/api/location/1",
//       },
//       location: {
//         name: "Earth",
//         url: "https://rickandmortyapi.com/api/location/20",
//       },
//       image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//       episode: [
//         "https://rickandmortyapi.com/api/episode/1",
//         "https://rickandmortyapi.com/api/episode/2",
//         // ...
//       ],
//       url: "https://rickandmortyapi.com/api/character/1",
//       created: "2017-11-04T18:48:46.250Z",
//     },
//     {
//       id: 2,
//       name: "Rick Sanchez",
//       status: "Alive",
//       species: "Human",
//       type: "",
//       gender: "Male",
//       origin: {
//         name: "Earth",
//         url: "https://rickandmortyapi.com/api/location/1",
//       },
//       location: {
//         name: "Earth",
//         url: "https://rickandmortyapi.com/api/location/20",
//       },
//       image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//       episode: [
//         "https://rickandmortyapi.com/api/episode/1",
//         "https://rickandmortyapi.com/api/episode/2",
//         // ...
//       ],
//       url: "https://rickandmortyapi.com/api/character/1",
//       created: "2017-11-04T18:48:46.250Z",
//     },
//   ],
// };

const range = (size, startAt = 0) => {
  return [...Array(size).keys()].map(i => i + startAt);
};

const Characters = () => {
  const dispatch = useDispatch();
  // const data = DUMMY_CHAR_LIST.results;

  const { characters, charactersPerPage } = useSelector(
    state => state.characters
  );
  console.log(characters, characters.length, charactersPerPage, "charsss");

  const charactersToFetch = range(charactersPerPage, characters.length + 1);
  console.log(charactersToFetch, "tofetc");

  useEffect(() => {
    dispatch(fetchCharacters(charactersToFetch));
  }, [dispatch, charactersPerPage]);

  useEffect(() => {
    dispatch(fetchInfo());
  }, [dispatch]);

  const showDetailHandler = characterId => {
    console.log(characterId);
  };

  const changeCharRowsNumberHadler = numberCharRows => {
    dispatch(characterActions.changeCharactersPerPage(10));
  };

  return (
    <Container sx={{ mt: 2 }}>
      <CharacterTable
        characters={characters}
        onShowDetail={showDetailHandler}
        onChangeCharRowsNumber={changeCharRowsNumberHadler}
      />
      <Route path="/characters/">
        <ModalDetail />
      </Route>
    </Container>
  );
};

export default Characters;
