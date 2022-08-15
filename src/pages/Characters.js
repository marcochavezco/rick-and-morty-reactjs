import { Container } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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

  const [open, setOpen] = useState(false);
  // const [characterModal, setCharacterModal] = useState;

  // const data = DUMMY_CHAR_LIST.results;

  const { characters, charactersPerPage, info, focusedCharacter } = useSelector(
    state => state.characters
  );
  console.log(
    characters,
    characters.length,
    charactersPerPage,
    info.count,
    typeof info.count,
    focusedCharacter,
    "charsss"
  );

  const charactersToFetch = useCallback(
    range(charactersPerPage, characters.length + 1),
    [charactersPerPage]
  );
  console.log(charactersToFetch, "tofetch");

  useEffect(() => {
    dispatch(fetchCharacters(charactersToFetch));
  }, [dispatch, charactersToFetch]);

  useEffect(() => {
    dispatch(fetchInfo());
  }, [dispatch]);

  const showDetailHandler = characterId => {
    console.log(characterId);
    setOpen(true);

    dispatch(characterActions.focusCharacter(characterId));
  };

  const closeModal = () => {
    setOpen(false);
    dispatch(characterActions.focusCharacter(null));
  };

  const handleChangeRowsPerPage = event => {
    const rowsPerPage = event.target.value;
    console.log(rowsPerPage, "rowsperpage");
    dispatch(characterActions.changeCharactersPerPage(+rowsPerPage));
  };

  const handleChangePage = () => {};

  return (
    <Container sx={{ mt: 2, mb: 10 }}>
      <CharacterTable
        count={info.count}
        rowsPerPage={charactersPerPage}
        characters={characters}
        onShowDetail={showDetailHandler}
        onChangeCharRowsNumber={handleChangeRowsPerPage}
        onChangePage={handleChangePage}
      />
      {open && <ModalDetail open={open} onClose={closeModal} />}
    </Container>
  );
};

export default Characters;
