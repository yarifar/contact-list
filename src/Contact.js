import React, { Component } from "react";
import Nav from "./Components/Nav";
import Form from "./Components/Form/Form";
import List from "./Components/List";
import Avatar from "./Components/Iconjs/Avatar";
import Button from "./Components/Form/Button"
// import Input from "./Components/Form/Input";


class Contact extends Component {
  initialText = "Lorem ipsum dolor sit amet";
 state={
   text1:'',
   text3:'',
  resault:[],
   name:'',
   mobile:'',
   phone:'',
   location:'',
   email:'',
   info:'',
   searchtxt:'',
   contacts:[]
  //  {name:'',mobile:'',phone:'',location:'',email:'',info:''}
 }

 inputNamechangeHandler=e=>{
const name=e.target.value
this.setState({name},()=>{
  console.log(this.state.name)
})
 
}


inputMobilechangeHandler=e=>{
const mobile=e.target.value
this.setState({mobile},()=>{
// console.log(name)
})
// console.log(this.state.name)
}
inputPhonechangeHandler=e=>{
const phone=e.target.value
this.setState({phone},()=>{
// console.log(name)
})
// console.log(this.state.name)
}
inputLocationchangeHandler=e=>{
const location=e.target.value
this.setState({location},()=>{
// console.log(name)
})
// console.log(this.state.name)
}
inputInfochangeHandler=e=>{
const info=e.target.value
this.setState({info},()=>{
// console.log(name)
})
// console.log(this.state.name)
}
inputEmailchangeHandler=e=>{
const email=e.target.value
this.setState({email},()=>{
  // console.log(name)
})
// console.log(this.state.name)
  }
  onChangeSearchHandler=e=>{
    const searchtxt=e.target.value
    this.setState({searchtxt})
    

    console.log(searchtxt)
  }

 onClickAddContact=()=>{

this.setState({contacts:[...this.state.contacts,
  {name:this.state.name,mobile:this.state.mobile,phone:this.state.phone,
    location:this.state.location,email:this.state.email,info:this.state.info
}]},()=>{
this.setState({ name:'' , mobile:'',phone:'',location:'',email:'',info:''})
console.log(this.state.name)
})

}

getContactlist = () => {
  const { contacts } = this.state;
  if (contacts.length) {
    return this.state.contacts
  }
  return [];
};

onClickEditHandler=(key)=>{
console.log(key)
}
 
onClickRemoveHandler=(key)=>{
  console.log(key)
  
 
  const newContacts=this.state.contacts.filter((contact)=>{return contact.name !== key  })
this.setState({contacts:newContacts})

}
onClicksearch=()=>{

  console.log('resault')

  
}

  render() {
    return (
      <>
      <div className="container" style={{background:'#ece6e6'}} >
      
        <Nav searchValue={this.state.searchtxt} onChangeHandler={this.onChangeSearchHandler} onClicksearch={this.onClicksearch}>Contact List</Nav>
        
              <div className="row">
        <div className="col-md-6 p-3">
          <p id="myText">{this.state.text1}<strong>{this.state.searchtxt}</strong>{this.state.text3}</p>
          <List contactList={this.getContactlist()}
           onClickEdit={this.onClickEditHandler} 
           onClickRemove={this.onClickRemoveHandler}>
        
            </List>
      

        </div>
          <div className="col-md-6 p-3">
              <div className="panel panel-info">
              <div
          style={{ backgroundColor: "#f7a52b" }}
          className="panel-heading d-flex justify-content-between align-items-center p-3"  >
            <div className="panel-heading"><strong className="px-3">
              <Avatar/>
              Add New contact</strong></div>
            </div>
            <div className="panel-body">
              <div className="col-md-12">
             
              <Form 
             nameValue={this.state.name}
             mobileValue={this.state.mobile}
             phoneValue={this.state.phone}
             locationValue={this.state.location}
             emailValue={this.state.email}
             infoValue={this.state.info}
              inputNamechangeHandler={this.inputNamechangeHandler}
              inputMobilechangeHandler={this.inputMobilechangeHandler}
              inputPhonechangeHandler={this.inputPhonechangeHandler}
              inputLocationchangeHandler={this.inputLocationchangeHandler}
              inputEmailchangeHandler={this.inputEmailchangeHandler}
              inputInfochangeHandler={this.inputInfochangeHandler}
              
              />  
              <Button onClicked={this.onClickAddContact}>
              Add Contact
                 </Button>
                 </div>
            </div>
          
        
        </div>
      </div>
      </div>
      </div>
      </>
    );
  }
}

export default Contact;
