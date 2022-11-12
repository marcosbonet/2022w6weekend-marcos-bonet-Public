import { configureStore } from '@reduxjs/toolkit';
import { clothesReducer } from '../reducer/reducer';

export const appStorel = configureStore({
    reducer: {
        clothes: clothesReducer,
    },
});
export type rootStore = typeof appStorel;
export type rootState = ReturnType<typeof appStorel.getState>;
