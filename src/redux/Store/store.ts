import { configureStore } from '@reduxjs/toolkit';
import { clothesReducer } from '../../redux/reducer/reducer';

export const appStore = configureStore({
    reducer: {
        clothes: clothesReducer,
    },
});
export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
