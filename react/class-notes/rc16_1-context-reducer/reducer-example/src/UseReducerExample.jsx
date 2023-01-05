import  { useReducer} from 'react'
import reducer, { initialState } from './reducer';

const UseReducerExample = () => {
    //! 3) useReducer hooke ile ilk değerlerin reducer dan alınması ve state aktarılması
    //! ardından değerlerin reducer.js de güncellenmesi ve buraya aktarılması
    const [state, dispatch] = useReducer(reducer, initialState);
    const {dog, loading, error} = state;



    const fetchDog = () => {
        dispatch({type: 'START'});
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                dispatch({type: "SUCCESS", payload: data.message})
            })
            .catch(() => {
                dispatch({ type: "FAIL", payload: 'ERROR DATA CAN NOT BE FETCHED!!' })
            })
    };


    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button
                onClick={fetchDog}
                disabled={loading}
                style={{
                    margin: "1rem",
                    background: "coral",
                    padding: "0.6rem",
                    borderRadius: "1rem",
                    border: "none",
                    cursor: "pointer",
                    width: "25rem"
                }}
            >
                Fetch Dog
            </button>

            {dog && <img src={dog} style={{ borderRadius: "30%", width: "400px", height: "400px" }} alt="" />}
            {error && <h2>{error}</h2>}
        </div>
    )
}

export default UseReducerExample