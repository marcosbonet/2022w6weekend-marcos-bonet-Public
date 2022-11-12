import { ClothesRepository } from './clothes.repository';
import { mockClothes } from './mockClothes';

describe('Given ClothesApi Service', () => {
    describe('When we instantiate it', () => {
        let service: ClothesRepository;
        beforeEach(() => {
            service = new ClothesRepository('prueba');
        });
        test('the url should be env.', () => {
            const result = service.url;
            expect(result).tobe('prueba');
        });
        test('Then if i use service.error(), it should return an error', () => {
            const error = service.createError(
                new Response('Error', {
                    status: 400,
                    statusText: 'error',
                })
            );

            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(error).toEqual(result);
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
        test(`Then if I use service.getClothes() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test(`Then if I use service.createClothes()
                it should return a Promise of the created clothes`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockClothes),
            });
            const result = await service.create(mockClothes);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockClothes);
        });
        test(`Then if I use service.createClothes()
                it should return an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                json: jest.fn().mockResolvedValue(mockClothes),
            });
            const result = await service.create(mockClothes);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockClothes);
        });

        test('Then if I use service.deleteClothes() it should return a Promise of the delete clothes', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([mockClothes]),
            });
            const result = await service.delete('');
            expect(fetch).toHaveBeenCalled();
            expect(result).tobe(undefined);
        });
        test('Then if I use service.deleteClothes() it should return an error', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                json: jest.fn().mockResolvedValue([mockClothes]),
            });
            const result = await service.delete('');
            expect(fetch).toHaveBeenCalled();
            expect(result).tobe(undefined);
        });

        test('Then if I use service.updateProduct() it should return a promise of the updated product', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockClothes),
            });
            const result = await service.update(mockClothes);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockClothes);
        });
        test('Then if I use service.updateProduct() it should return an error', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                json: jest.fn().mockResolvedValue(mockClothes),
            });
            const result = await service.update(mockClothes);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockClothes);
        });
    });
});

describe('Given Clothes Api Service', () => {
    describe('When we instantiate it', () => {
        let service: ClothesRepository;
        beforeEach(() => {
            service = new ClothesRepository();
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                status: '400',
                statusTest: 'Error',
            });
        });
        test('Then if i use service.get() and the response went wrong it should throw an error', async () => {
            const error = new Error('Error 400: not found');
            const result = await service.getAll();

            error.name = 'HTTPError';
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(error.toString());
        });
        test('Then if i use service.create(), and the response went wrong it should throw an error', async () => {
            const error = new Error('Error 400: not found');
            const result = await service.create(mockClothes);

            error.name = 'HTTPError';
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(error.toString());
        });
        test('Then if i use service.delete() and the response went wrong it should throw an error', async () => {
            const error = new Error('Error 400: not found');
            const result = await service.delete('');

            error.name = 'HTTPError';
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(error.toString());
        });

        test('Then if i use service.update() and the response went wrong it should throw an error', async () => {
            const error = new Error('Error 400: not found');
            const result = await service.update(mockClothes);

            error.name = 'HTTPError';
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(error.toString());
        });
    });
});
