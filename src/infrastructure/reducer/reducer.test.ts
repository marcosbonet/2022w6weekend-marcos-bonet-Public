import { clothesReducer } from './reducer';
import { actionTypes } from './action.types';
import { ClothesType } from '../../types/types';

describe('Given the function clothesReducer', () => {
    const clothesMock: ClothesType = {
        id: '',
        article: '',
        price: 0,
        size: 0,
        ofert: true,
    };

    let action: { type: string; payload: unknown };
    let state: Array<ClothesType>;

    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.load,
                payload: [clothesMock],
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = clothesReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is add', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.add,
                payload: clothesMock,
            };
            state = [];
        });
        test('Then the returned state should include the action payload', () => {
            const result = clothesReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...clothesMock, title: 'Update task' },
            };
            state = [clothesMock];
        });
        test('Then the returned state should include the action payload', () => {
            const result = clothesReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...clothesMock, id: '2', title: 'Update task' },
            };
            state = [clothesMock];
        });
        test('Then the returned state should be the original state', () => {
            const result = clothesReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is delete', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: clothesMock,
            };
            state = [clothesMock];
        });
        test('Then the returned state should not include the action payload', () => {
            const result = clothesReducer(state, action);
            expect(result).toEqual([]);
        });
    });

    describe('When the action is delete and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: { ...clothesMock, id: '2' },
            };
            state = [clothesMock];
        });
        test('Then the returned state should should be the original state', () => {
            const result = clothesReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is any other', () => {
        beforeEach(() => {
            action = {
                type: '',
                payload: null,
            };
            state = [clothesMock];
        });
        test('Then the returned state should be ...', () => {
            const result = clothesReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
