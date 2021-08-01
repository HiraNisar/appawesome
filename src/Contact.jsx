import React, { useState } from "react";
const Contact=()=>{
const[data,setData]=useState(
  {
    fullname:'',
    phone:'',
    email:'',
    message:''
  }
);
const ChangeEvent=(event)=>{
  const{name, value}=event.target;
  setData((preVal)=>{
    return{
      ...preVal,
      [name]:value
    };


  });
};

const formSubmit=(e)=>{
e.preventDefault();
alert(`My name is ${data.fullname}.My phone NO is ${data.phone}.My email is ${data.email}.Here is what i want to say ${data.message}.`);

};

    return(
<>
<div className="my-5">
  <h1 className="text-center">  CONTACT US</h1>
</div>
<div className="container contact_div">
            
    <div className="row">
      <div className="col-md-6 col-10 mx-auto">


<form onSubmit={formSubmit}>
  <div className="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" 
    className="form-control"
     id="exampleFormControlInput1"
     value={data.fullname}
     onChange={ChangeEvent}
     name="fullname"
      placeholder="Enter full name"/>
  </div>
  


  <div className="form-group">
    <label for="exampleFormControlInput1">Phone Number</label>
    <input type=""
     className="form-control"
      id="exampleFormControlInput1"
      value={data.phone}
     onChange={ChangeEvent}
     name="phone"
       placeholder="phone number"/>
  </div>


  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email"
     className="form-control"
      id="exampleFormControlInput1"
      value={data.email}
     onChange={ChangeEvent}
     name="email"
       placeholder="name@example.com"/>
  </div>



  
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control"
     id="exampleFormControlTextarea1"
     value={data.message}
     onChange={ChangeEvent}
     name="message"
      rows="3"></textarea>
  </div>
  <br/>
  <div className="col-12">
  <button class="btn btn-outline-primary"
   type="submit">Submit form</button>
  </div>
</form>

</div>
</div>
</div>
</>
    );
}
export default Contact;