import { Navigate, Outlet } from "react-router-dom";


const PrivateRouter = () => {

//! Aslinda bu bilgi Global state'den okunacak
const currentUser = true;

//! aşağıdaki olay currentUser varsa outlet yani nested yapıyı oku  yoksa 
//! component düzeyinde home git private router la 
//! contactı sarmaladık unutma nested yapı var
    return (

        currentUser ? <Outlet/> : <Navigate to="/" />
    )
}

export default PrivateRouter