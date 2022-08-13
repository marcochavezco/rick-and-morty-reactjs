import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    info: {},
    characters: [],
  },
  reducers: {
    getCharactersData(state, actions) {
      const { info, results } = actions.payload;
      console.log(info, results, "info/characters");
      state.info = info;
      state.characters = results;
    },
  },
});

export const fetchCharacters = () => {
  return async dispatch => {
    const sendRequest = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");

      if (!response.ok) {
        throw new Error("Characters fetch failed");
      }

      const { info, results } = await response.json();

      dispatch(
        characterActions.getCharactersData({ info: info, results: results })
      );
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
