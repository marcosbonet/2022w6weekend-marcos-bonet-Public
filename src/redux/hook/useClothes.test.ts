import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react';
import { ClothesType, ProtoClothes } from '../../types/types';
import { ClothesRepository } from '../services/clothes.repository';
import { appStore } from '../Store/store';
import { useClothes } from './useClothes';

jest.mock('../services/clothes.repository');

const productMock: ClothesType = {
    id: '',
    article: '',
    price: 0,
    size: 0,
    offers: true,
};

const newCartProduct: ClothesType = {
    id: '',
    article: '',
    price: 0,
    size: 0,
    offers: true,
};
describe('Given the custom hook "useClothes', () => {
    let answer: {
        current: {
            clothes: ClothesType[];
            handleAdd: (newClothes: ProtoClothes) => void;
            handleUpdate: (updateClothes: ClothesType) => void;
            handleDelete: (id: string) => void;
        };
    };

    beforeEach(() => {
        ClothesRepository.prototype.getAll = jest
            .fn()
            .mockResolvedValue([productMock]);

        ClothesRepository.prototype.create = jest
            .fn()
            .mockResolvedValue(newCartProduct);

        ClothesRepository.prototype.update = jest
            .fn()
            .mockResolvedValue(newCartProduct);

        ClothesRepository.prototype.delete = jest
            .fn()
            .mockResolvedValue(productMock);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        ({ answer } = renderHook(() => useClothes(), { wrapper }));
    });

    test('Then should return productMock', async () => {
        await waitFor(() => {
            expect(res.current.clothes).toEqual([productMock]);
        });
    });

    test('When we use the handleAdd, then it should return the "productMock" and been called', async () => {
        await waitFor(() => {
            answer.current.handleAdd(newCartProduct);
            expect(answer.current.clothes.at(-1)).toEqual(newCartProduct);
        });

        await waitFor(() => {
            expect(ClothesRepository.prototype.create).toHaveBeenCalled();
        });
    });

    test('When we use handleUpdate then it should return the "newGif" object updated adn been called', async () => {
        await waitFor(() => {
            answer.current.handleUpdate(newCartProduct);
            expect(answer.current.clothes.at(-1)).toEqual(newCartProduct);
        });
        await waitFor(() => {
            expect(ClothesRepository.prototype.update).toHaveBeenCalled();
        });
    });

    test('When we use handleEraser and the response is ok then it should return the same object and been called', async () => {
        await waitFor(() => {
            answer.current.handleDelete(productMock.id);
            expect(answer.current.clothes.at(-1)).toEqual(productMock);
        });
        await waitFor(() => {
            expect(ClothesRepository.prototype.delete).toHaveBeenCalled();
        });
    });
});
