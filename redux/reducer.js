import { createSlice } from "@reduxjs/toolkit";

export const setInfoUserSlider = createSlice({
    name: "infoUser",
    initialState: {
        id: "",
    },
    reducers: {
        setInfo: (state, action) => {
            state.id = action.payload;
        },
    },
});
