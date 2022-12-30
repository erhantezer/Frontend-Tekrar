import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import NotFound from './NotFound';
// import { useLocation } from 'react-router-dom';

const InstructorDetail = () => {
    //! Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
    const {id} = useParams();
    
    const navigate = useNavigate();
    //! navigate ile gonderilen state(veriyi) yakalamak icin ise
    //! useLocation Hook'u kullanilabilir.
    // const location = useLocation();
    // const inst = location.state;

    const [inst, setInst] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
        if(!res.ok) {
            setError(true);
            throw new Error("Something went wrong");
        }
        return res.json();
    })
    .then((data) => setInst(data))
    .catch((error) => console.log(error))

    }, [id]);

    console.log(inst);
    if(error) {
        return <NotFound/>
    } else if (!inst) {
       return(
        <div className='text-center'>
            <h2>Data is Fetching</h2>
        </div>
        ) 
    }else {
    return (
        <div className='container text-center p-5'>
            <h3>{inst.name}</h3>
            <img 
            className='w-25 border rounded-pill'
            src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`} 
            alt="" 

            />
            <h4>{inst.email}</h4>
            <h4>({inst.phone})</h4>
            <div>
            <button
                onClick={() => navigate('/')}
                className="btn btn-success me-2"
            >
                Home
            </button>
            <button onClick={() => navigate(-1)} className="btn btn-warning">
                Go Back
            </button>
            </div>
        </div>
        )
    }
 
}

export default InstructorDetail