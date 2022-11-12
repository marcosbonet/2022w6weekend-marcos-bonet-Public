import { ClothesType } from '../../types/types';
import { actionTypes } from './action.types';
import { createAction } from '@reduxjs/toolkit';

export const loadActionCreator = createAction<Array<ClothesType>>(
    actionTypes.load
);
export const addActionCreator = createAction<ClothesType>(actionTypes.add);

export const updateActionCreator = createAction<ClothesType>(
    actionTypes.update
);

export const deleteActionCreator = createAction<ClothesType['id']>(
    actionTypes.delete
);
