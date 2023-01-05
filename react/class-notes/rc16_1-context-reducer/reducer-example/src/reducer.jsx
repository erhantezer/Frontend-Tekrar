

//! 1) Başlangıç state leri yazılır (initialState)
export const initialState = {
    dog: "",
    loading: "",
    error: false
};

//! 2) state güncellemeleri action type lerine göre topluca yapılır 
const reducer = (state, action) => {
 switch (action.type) {
    case "START":
        return { ...state, dog: '', error: '', loading: true };      
    case "SUCCESS":
        return { ...state, dog: action.payload, error: '', loading: false }
    case "FAIL":
        return { ...state, dog: '', error: action.payload, loading: false }
    default:
        break;
 }
}

export default reducer