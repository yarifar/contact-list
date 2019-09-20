import React from "react"
import Mobileicon from "../Iconjs/Mobileicon"
import Contact from "../Iconjs/User"
import Info from "../Iconjs/Info"
import Email from "../Iconjs/Email"
import Location from "../Iconjs/Location"
import Phone from "../Iconjs/Phone"
import Input from "./Input"
import Textarea from "./Textarea"


export default ({inputNamechangeHandler,inputMobilechangeHandler,inputPhonechangeHandler,
    inputLocationchangeHandler,inputEmailchangeHandler,inputInfochangeHandler,
    nameValue,mobileValue,phoneValue,locationValue,emailValue,infoValue})=>{
    return (<>

            <form >
                 
            <div className="form-group">

                <label >Name <span><Contact/></span></label>
             
                <Input inputValue={nameValue} inputType="text" inputPlaceHolder="Full Name" inputClass="form-control" inputId="text" onchangehandler={inputNamechangeHandler}/>
            </div>

            <div className="form-group">
                <label >Mobile  <span><Mobileicon/></span> </label>
                
                <Input inputValue ={mobileValue} inputType="number" inputPlaceHolder="Enter your mobile" inputClass="form-control" inputId="mobile" onchangehandler={inputMobilechangeHandler} />
            </div>
            <div className="form-group">
                <label >Phone   <span><Phone/></span> </label>
                <Input inputValue ={phoneValue} inputType="number" inputPlaceHolder="Enter your Telephone" inputClass="form-control" inputId="phone" onchangehandler={inputPhonechangeHandler}/>
            </div>
            <div className="form-group">
                <label >Location   <span><Location/></span></label>
                <Input  inputValue ={locationValue} inputType="text" inputPlaceHolder="Enter your Location" inputClass="form-control" inputId="location" onchangehandler={inputLocationchangeHandler}/>
            </div>
            <div className="form-group">
                <label >Email   <span><Email/></span> </label>
                <Input inputValue ={emailValue} inputType="email" inputPlaceHolder="Enter your EmailAddress" inputClass="form-control" inputId="email" onchangehandler={inputEmailchangeHandler}/>
            </div>
        
            <div className="form-group">
                <label >Info   <span><Info/></span></label>
                <Textarea textValue={infoValue} inputRows="5" inputPlaceHolder="Enter your Infomation" inputClass="form-control" inputId="info" onchangehandler={inputInfochangeHandler}/>
            </div>

            {/* <button type="submit" className="btn btn-primary" onClick={()=>{onClickAddContact()}}>Add</button> */}
            </form>
          
       
              </>
    
    )
};