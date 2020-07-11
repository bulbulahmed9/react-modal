import {types, open} from '../../types'
import modalReducer from '../modalReducer'


describe('Modal Reducer', () => {

    test('Should return default state', () => {
        const newState = modalReducer(false, {});
        expect(newState).toEqual(false);
    });

    it('Should return new state if receiving type', () => {
        const newState = modalReducer(false, {
            type: 'open',
        });
        expect(newState).toEqual(true);
    });

    it('Should return new state if receiving type', () => {
        const newState = modalReducer(false, {
            type: 'close',
        });
        expect(newState).toEqual(false);
    });

});