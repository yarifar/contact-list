import React from 'react'

export default ({onClicked,children,btnClass,keyContact})=>{
    return(
    <button  className={btnClass || "btn btn-primary"} onClick={()=>{onClicked(keyContact)}} > {children} </button>

)}