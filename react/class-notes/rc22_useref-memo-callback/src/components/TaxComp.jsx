import React from 'react'

const TaxComp = ({taxData}) => {
    console.log("Render => TaxComp components")
    return (
        <>
            <div>TaxComp : {JSON.stringify(taxData.current)}</div>
            {/* <div>TaxComp : {JSON.stringify(taxData)}</div> */}
        </>
    )
}

export default TaxComp