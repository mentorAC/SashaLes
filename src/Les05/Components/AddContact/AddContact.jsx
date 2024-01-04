import React, { useEffect, useRef } from "react";

export function AddContact(props) {
<<<<<<< HEAD

  const createContact = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    const email = e.target.elements.email.value.trim();
    const phone = e.target.elements.phoneNumber.value.trim();
    if (name === "" || email === "" || phone === "") {
      return;
=======
    const createContact =(e)=>{
        e.preventDefault();
        const name = e.target.elements.name.value.trim();
        const email = e.target.elements.email.value.trim();
        const phone = e.target.elements.phoneNumber.value.trim();
        if (name===''||email===''||phone==='') {
            return;
        }
        props.createContact({name:name,email:email,phone:phone});
        e.target.elements.name.value='';
        e.target.elements.email.value='';
        e.target.elements.phoneNumber.value='';
>>>>>>> ac5f5871b0a0a51bb238dea53d030088759fea7b
    }
    const contact = { 
        name: name, 
        email: email, 
        phone: phone 
    };
    props.createContact(contact);
    e.target.elements.name.value = "";
    e.target.elements.email.value = "";
    e.target.elements.phoneNumber.value = "";
  };

<<<<<<< HEAD
  const editContact=(e)=>{
    e.preventDefault();
    props.editContact.name=e.target.elements.name.value.trim();
    props.editContact.email = e.target.elements.email.value.trim();
    props.editContact.phone = e.target.elements.phoneNumber.value.trim();
    props.update();
    e.target.elements.name.value='';
    e.target.elements.email.value='';
    e.target.elements.phoneNumber.value='';
  }

  return (
    <div className="row border text-white p-2 mt-3">
      <form onSubmit={props.editContact===null?createContact:editContact}>
        <div className="col-12 text-white-50">Add New Contact</div>
        <div className="row p-2">
          <div className="col-12 p-1 col-md-4">
            <input
              type="text"
              placeholder="name"
              className="form-control fw-semibold"
              name="name"
              defaultValue={
                props.editContact === null ? "" : props.editContact.name
              }
            ></input>
          </div>
          <div className="col-12 p-1 col-md-4 ">
            <input
              type="text"
              placeholder="email"
              className="form-control fw-semibold"
              name="email"
              defaultValue={
                props.editContact === null ? "" : props.editContact.email
              }
            ></input>
          </div>
          <div className="col-12 p-1 col-md-4">
            <input
              type="text"
              placeholder="Phone Number"
              className="form-control fw-semibold"
              name="phoneNumber"
              defaultValue={
                props.editContact === null ? "" : props.editContact.phone
              }
            ></input>
          </div>
=======
    return(
        <div className="row border text-white p-2 mt-3">
            <form onSubmit={createContact}>
            <div className="col-12 text-white-50">Add New Contact</div>
            <div className="row p-2">
                <div className="col-12 p-1 col-md-4">
                    <input type="text" placeholder="name" className="form-control" name="name" defaultValue={props.editContact.name}></input>
                </div>
                <div className="col-12 p-1 col-md-4">
                    <input type="text" placeholder="email" className="form-control" name="email"></input>
                </div>
                <div className="col-12 p-1 col-md-4">
                    <input type="text" placeholder="Phone Number" className="form-control" name="phoneNumber"></input>
                </div>
            </div>
            <div className="col-12 col-md-6 offset-md-3">
            <button className="btn btn-primary form-control">Create</button> 
            </div>
            </form>
>>>>>>> ac5f5871b0a0a51bb238dea53d030088759fea7b
        </div>
        <div className="col-12 col-md-6 offset-md-3">
          <button className={`btn ${props.editContact===null?"btn-primary fw-semibold":"btn-success fw-semibold"} form-control`}>{props.editContact===null?"Create":"Edit"}</button>
        </div>
      </form>
    </div>
  );
}
