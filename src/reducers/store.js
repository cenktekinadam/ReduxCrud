/* 
!STORE OLUŞTURMA
* 1- Redux kütüphanesinden 'createStore' methodu import edilir.
* 2- Store içerisinde tutulacak olan ,her bir ver için reducer oluşturulur
* 3- Oluşturulan reducerlar "combineReducers" methotu ile birleştirilir.
* 4- Store oluşan birleşmiş Reducerlar Tanıtılır
*/
import { createStore, combineReducers } from 'redux'
import userReducer from './userReducer'
import todoReducer from './todoReducer'
// Birden fazla reducer varsa bunları birleştirmemiz gerekli
const rootReducer = combineReducers({
    todoReducer, userReducer,
})

const store = createStore(rootReducer);
export default store