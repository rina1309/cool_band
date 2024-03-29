import { createSlice } from "@reduxjs/toolkit";
import { getAboutBand } from "./thunkCollection.ts";

const initialState: Slice.IAboutBand = {
   data: {
      id: 0,
      image: "",
      orientation: "",
      bluer: "",
   },
   getLoading: false,
};

const aboutBand = createSlice({
   name: "aboutBand",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getAboutBand.fulfilled, (state, { payload }) => {
         if (payload) {
            state.getLoading = true;
            state.data = payload;
         }
      });
      builder.addCase(getAboutBand.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersAboutBand = aboutBand.reducer;
