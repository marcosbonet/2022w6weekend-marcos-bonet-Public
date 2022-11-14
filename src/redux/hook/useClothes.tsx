import { ClothesRepository } from '../services/clothes.repository';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { rootState } from '../Store/store';
import * as ac from '../../redux/reducer/action.creators';
import { ClothesType, ProtoClothes } from '../../types/types';

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

    const handleAdd = (newClothes: ProtoClothes) => {
        apiClothes
            .create(newClothes)
            .then((Clothes: ClothesType) =>
                dispatcher(ac.addActionCreator(Clothes))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (updateClothes: ClothesType) => {
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
