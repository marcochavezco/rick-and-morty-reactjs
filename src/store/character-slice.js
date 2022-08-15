import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    info: { count: 0 },
    characters: [],
    charactersPerPage: 5,
    page: 0,
  },
  reducers: {
    getCharactersInfo(state, action) {
      const info = action.payload;
      console.log(info, "info");
      state.info = info;
    },
    addNewCharacters(state, action) {
      const characters = action.payload;
      console.log(characters, "charstate");
      characters.map(character => state.characters.push(character));
    },
    changeCharactersPerPage(state, action) {
      console.log(action, "action");
      state.charactersPerPage = action.payload;
    },
  },
});

export const fetchInfo = () => {
  return async dispatch => {
    const sendRequest = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");

      if (!response.ok) {
        throw new Error("Characters info fetch failed");
      }

      const { info } = await response.json();

      dispatch(characterActions.getCharactersInfo(info));
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchCharacters = charactersPerPage => {
  return async dispatch => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${charactersPerPage}`
      );

      if (!response.ok) {
        throw new Error("Characters fetch failed");
      }

      const characters = await response.json();

      console.log(characters, "fetchChar");

      dispatch(characterActions.addNewCharacters(characters));
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const characterActions = charactersSlice.actions;

export default charactersSlice;
