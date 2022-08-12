import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    info: {},
    results: [],
  },
  reducers: {
    getCharactersData(state, actions) {
      const data = actions.payload.data;
      console.log(data);
    },
  },
});

export const characterActions = charactersSlice.actions;

export default charactersSlice;
