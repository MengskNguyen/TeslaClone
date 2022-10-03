import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    burgerNav: false,
};

export const burgerNavSlice = createSlice({
    name: 'burgerNav',
    initialState,
    reducers: {
        setShowState: (state) => {
            state.burgerNav = !state.burgerNav;
        },
    },
});

export const { setShowState } = burgerNavSlice.actions;
export const getShowState = (state) => state.burgerNav.burgerNav;
export default burgerNavSlice.reducer;
