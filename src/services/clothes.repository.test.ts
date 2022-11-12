import { ClothesType } from '../../src/types/types';
import { ClothesRepositoy } from './clothes.repository';

describe('Given ClothesApi Service', () => {
    describe('When we instantiate it', () => {
        let service: ClothesRepositoy;
        beforeEach(() => {
            service = new ClothesRepositoy();
        });
        test(`Then if I use service.getClothes() 
            it should return a Promise of an Array of Clothes`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test(`Then if I use service.createClothes()
                it should return a Promise of the created clothes`, async () => {
            const mockClothes: ClothesType = {
                id: '',
                article: '',
                price: 0,
                size: 0,
                ofert: true,
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockClothes),
            });
            const result = await service.create(mockClothes);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockClothes);
        });

        test('Then if I use .... it should ...', async () => {
            const mockClothes: ClothesType = {
                id: '',
                article: '',
                price: 0,
                size: 0,
                ofert: true,
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockClothes),
            });
            const result = await service.delete('');
            expect(fetch).toHaveBeenCalled();
            expect(result).tobe(undefined);
        });
        test('Then if I use ..... it should ...', async () => {
            // TODO await service.update({ id: 1, isComplete: true });
        });
    });
});
