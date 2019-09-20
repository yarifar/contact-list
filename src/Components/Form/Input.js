import React from 'react'

export default ({onchangehandler,inputClass,inputType,inputPlaceHolder,inputId,inputValue})=>{
return(
    <>
    
        <div className="form-group row">
       
        <input value={inputValue || "" } onChange={onchangehandler} className={inputClass}
         type={inputType} placeholder={inputPlaceHolder} id={inputId}/>
       
       </div>     

    </>
)
}