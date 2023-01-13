import axios from 'axios'
import { useDispatch } from 'react-redux';
import { fetchFail, fetchStart, loginSuccess, logoutSuccess } from '../features/authSlice';




const useAuthCall = () => {
    const dispatch = useDispatch();
    const BASE_URL = "https://clarusway.pythonanywhere.com";

    const login = async(values) => {
        console.log("hello")
        dispatch(fetchStart());
        try {
            const {data} = await axios.post(`${BASE_URL}/account/auth/login`, values)
            dispatch(loginSuccess(data))
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
        }
    }

    const logout = async () => {
        dispatch(fetchStart());
        try {
          await axios.post(`${BASE_URL}/account/auth/logout/`);
          dispatch(logoutSuccess());
        } catch (error) {
          console.log(error);
          dispatch(fetchFail());
        }
      };

  return {login, logout}
}

export default useAuthCall