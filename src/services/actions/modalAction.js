import { open, close } from '../types'




export const openModal = () => async dispatch => {
    dispatch({
        type: open
    })
}

export const closeModal = () => async dispatch => {
    dispatch({
        type: close
    })
}