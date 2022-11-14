import { ClothesModel } from './types';

describe('Given the class TaskModel', () => {
    describe('When we instantiate it', () => {
        const task = new ClothesModel('', 1, 1);
        test('Then we should have an object ot the class', () => {
            expect(task).toBeInstanceOf(ClothesModel);
        });
    });
});
