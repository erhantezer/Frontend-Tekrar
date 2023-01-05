import React, { useState } from 'react'

const UseStateExample = () => {
  const [dog, setDog] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)


const fetchDog = () => {
  setLoading(true)
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data) => {
    setDog(data.message);
    setLoading(false);
    console.log(data)
  })
  .catch(() => {
    setError("ERROR DATA CAN NOT BE FETCHED!!!!")
    setLoading(false)
  })
};


  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <button
        onClick={fetchDog}
        disabled={loading}
        style={{
        margin:"1rem", 
        background:"coral", 
        padding:"0.6rem", 
        borderRadius:"1rem",
        border:"none",
        cursor:"pointer",
        width:"25rem"
        }}
        >
        Fetch Dog
        </button>

        {dog && <img src={dog} style={{borderRadius:"30%",width:"400px",height:"400px"}} alt="" />}
        {error && <h2>{error}</h2>}
    </div>
  )
}

export default UseStateExample