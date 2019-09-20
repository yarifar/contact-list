import React from 'react'

export default ({onchangehandler,inputClass,inputType,inputPlaceHolder,inputId,inputRows,textValue})=>{
return(
    <>
    
        <div className="form-group row">
       
        <textarea value={textValue|| "" } rows={inputRows} onChange={onchangehandler} className={inputClass} type={inputType} placeholder={inputPlaceHolder} id={inputId}/>
       
       </div>     

    </>
)
}