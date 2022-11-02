import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  history: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    zero: (state) => {
      state.value = 0;
      state.history = []
    },
    increment: (state) => {
      state.value = state.value + 1;
      state.history = [...state.history, `+${state.value}`];
    },
    decment: (state) => {
      state.value -= 1;
      state.history = [...state.history,`-${state.value}`];
    },
    incrementByAmout: (state, action) => {
      state.value += action.payload;
      state.history = [...state.history, `+${action.payload}`];
    },
  },
});

export const { zero, increment, decment, incrementByAmout } =
  counterSlice.actions;

export const customizeNumber = (value) => (dispatch) => {
  dispatch(incrementByAmout(value));
};

export default counterSlice.reducer;
