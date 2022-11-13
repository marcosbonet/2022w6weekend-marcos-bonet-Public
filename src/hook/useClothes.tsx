import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';

import * as ac from '../../../2022w6weekend-marcos-bonet-Public/src/redux/reducer/action.creators';

import { ClothesRepository } from '../redux/services/clothes.repository';
import { rootState } from '../redux/Store/store';
import { ClothesType, ProtoClothes } from '../types/types';

export const useClothes = () => {
    const clothes = useSelector((state: rootState) => state.clothes);
    const dispatcher = useDispatch();
    const apiClothes = useMemo(() => new ClothesRepository(), []);

    useEffect(() => {
        apiClothes
            .getAll()
            .then((clothes) => dispatcher(ac.loadActionCreator(clothes)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [apiClothes, dispatcher]);

    const handleAdd = (newTask: ProtoClothes) => {
        apiClothes
            .create(newTask)
            .then((Clothes: ClothesType) =>
                dispatcher(ac.addActionCreator(Clothes))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (updateClothes: Partial<ClothesType>) => {
        apiClothes
            .update(updateClothes)
            .then((Clothes: ClothesType) =>
                dispatcher(ac.updateActionCreator(Clothes))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (id: string) => {
        apiClothes
            .delete(id)
            .then(() => dispatcher(ac.deleteActionCreator(id)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        clothes,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
