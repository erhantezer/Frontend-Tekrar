//?========================================================
//?                  USEEFFECT HOOK
//?========================================================
//! UseEffect Hook'u fonksiyonel componentler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

import { useEffect, useState } from "react";


//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);







const UseEffectHook = () => {
    const [count, setCount] = useState(0)

    //! ComponentDidMount
    //   useEffect(() => {
    //     console.log('Mounted'); //! fetch, asyn-await ,localStorage, setTimeout
    //     setTimeout(() => {
    //       alert('Data Fetched');
    //     }, 3000);
    //   },[]);


    //! ComponentDidMount + componentDidUpdate
    //   useEffect(() => {
    //     console.log('Mounted + Updated');
    //     setTimeout(() => {
    //       alert('Data Fetched');
    //     }, 1000);
    //   }, [count]);


    //! ComponentDidMount + componentWillUnmount
    const fetchData = () => {
        console.log('Data Fetched');
    };

    useEffect(() => {
        //! ComponentDidMount
        const timerId = setInterval(fetchData, 1000);
        console.log('Mounted');
        return () => {
            //! componentWillUnmount
            clearInterval(timerId);
            console.log('Unmounted');
        };
    }, []);

    return (
        <>
            {console.log("render")}
            <div className="container text-center mt-4">
                <h1 className="text-danger">USEEFFECT</h1>
                <h3>Count:{count}</h3>
                <button onClick={() => setCount(count + 1)} className="btn btn-warning" >
                    INC
                </button>
            </div>
        </>
    )
}

export default UseEffectHook