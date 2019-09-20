import React from 'react'

const Label=(props)=>{
    return(
        <div style={{background:'green', padding:'10px',margin:'10px'}}>
             <label> {props.onVal}</label>
  </div>
    )
}
export default Label