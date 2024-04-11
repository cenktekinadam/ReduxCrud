/* 
! Reducer :
*-State'tin nasıl Değişeceğine Karar Verir
* Reducer Normal bir foonkistondur ve iki Parametre alır
* >STATE: reducer'da tutulan verilerin son durumu
* >ACTİON: Verilerin nasıl değişeceğii ifade eden Switch Case ile karar yapısı sağlanan  nesne

!useReducetan farklı olarak initialState'i state parametresine varsayılan değer olarak veririz
 */

import ActionTypes from "./actionTypes";

const initialState = {
    todos: [],
    x: '',
    y: '',
}


const todoReducer = (state = initialState, action) => {
    //Action typena göre Gerekli güncelleme koşul yapısı

    switch (action.type) {
        case ActionTypes.ADD:
            return { ...state, todos: state.todos.concat(action.payload) };
        case ActionTypes.DELETE:
            const filtered = state.todos.filter((i) => i.id !== action.payload)
            return { ...state, todos: filtered };
        case ActionTypes.UPDATE:
            const updatedArr = state.todos.map((i) => (i.id === action.payload.id ? action.payload : i))
            return { ...state, todos: updatedArr };
        case ActionTypes.SET:
            return { ...state, todos: action.payload }
        default:
            return state;
    }
}
export default todoReducer;