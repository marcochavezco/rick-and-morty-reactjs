import { configureStore } from "@reduxjs/toolkit";

import characterSlice from "./character-slice";

const store = configureStore({
  reducer: { characters: characterSlice.reducer },
});

export default store;
