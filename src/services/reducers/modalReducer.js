import { open, close } from '../types'


const initialState = false;


export default function (state = initialState, action) {
    switch (action.type) {
        case open:
            return true;
        case close:
            return false;
        default:
            return state;
    }
}