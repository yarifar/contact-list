import React from 'react'
import Button from './Form/Button'
    
export default ({onClickRemove,onClickEdit,contactList})=>{
    return(


        <div>
            <ul className="list-group">
      
      {contactList.map(contact =>{
  
         return( <li key={contact.name} className="list-group-item justify-content-between">
                <div className="row">
             <div className="col-md-7 ">
                 {contact.name+ '  ' + contact.mobile}
                 </div>
                 <div className="col-md-5  "> 
         <Button btnClass='btn btn-danger  mx-1' onClicked={onClickRemove} keyContact={contact.name} >
              Remove
         </Button>
         {/* <Button btnClass='btn btn-warning  mx-1' onClicked={onClickEdit} keyContact={contact.name}>
            Edit
         </Button> */}
         </div>
         </div>
         </li>)
      })}
      </ul>
        </div>
        
        
    )
}
