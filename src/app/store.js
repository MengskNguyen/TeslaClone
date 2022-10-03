import { combineReducers, configureStore } from '@reduxjs/toolkit';
import burgerNavReducer from '../features/burgerNav/burgerNavSlice';
import carReducer from '~/features/carSlice/carSlice';

const rootReducer = combineReducers({
    burgerNav: burgerNavReducer,
    cars: carReducer,
});

export const store = configureStore({ reducer: rootReducer });
