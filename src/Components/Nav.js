import React from "react";
import Input from "./Form/Input"
import Button from "./Form/Button";
export default ({ children,onChangeHandler,onClicksearch,searchValue }) => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
         <form className="form-inline" >
      
                    <span className="navbar-brand">
                    <strong className="px-3">
                    {children}
                    </strong>
                    </span>
                    {/* <Input inputValue ={emailValue} inputType="email" inputPlaceHolder="Enter your EmailAddress" inputClass="form-control"
                     inputId="email" onchangehandler={inputEmailchangeHandler}/> */}
                   <Input inputValue={searchValue}  inputType="text" onchangehandler={onChangeHandler} inputClass='form-control mr-md-5' 
                   inputPlaceHolder="Search"/>

                </form>
                {/* <button className="btn btn-success" onClick={()=>{onClicksearch()}}>Search</button> */}
                <Button btnClass="btn btn-success" onClicked={onClicksearch}> Search</Button>

    
    </nav>


  );
};
