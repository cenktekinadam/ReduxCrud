/* 
! Reducer :
*-State'tin nasıl Değişeceğine Karar Verir
* Reducer Normal bir foonkistondur ve iki Parametre alır
* >STATE: reducer'da tutulan verilerin son durumu
* >ACTİON: Verilerin nasıl değişeceğii ifade eden Switch Case ile karar yapısı sağlanan  nesne

!useReducetan farklı olarak initialState'i state parametresine varsayılan değer olarak veririz
 */

const initialState = {
    todos: [],
    isDarkMode: true,
    x: '',
    y: '',
}


const userReducer = (state = initialState, action) => {
    //Action typena göre Gerekli güncelleme koşul yapısı
    switch (action.type) {
        case 'EKLE':
            return state;
        case 'ÇIKAR':
            return state;
        default:
            return state;
    }
}
export default userReducer;