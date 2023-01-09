//! rxslice

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    newsList: [],
    loading: false,
    error: false,
};

//? State'lerin API gibi async kaynaklardan gelen verilere gore guncellenmesi gerekebilir.
//? Ancak boyle bir durumda async islem tamamlandiktan sonra state guncellenmelidir.
//? Gonderilen api istegi ile dogrudan state guncellememelidir.
//? Islemin tamamlanmasi ile gelen veriye gore state'in guncellenemsini saglamak
//? adina bir arabirim kullanilmaktadir.
//? Bu arabirim middleware denilir.Redux-Toolkit, default olarak Thunk kullanmaktadir.
//! Thunk'ın amaci reducers'a islenmis sonuclari gondermeden once gecikmeli asenkron 
//! islemlerinin yurutulmesini saglamaktir.






const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {}
});

export const {} = newsSlice.actions

export default newsSlice.reducer