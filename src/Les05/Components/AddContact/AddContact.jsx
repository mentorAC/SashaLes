import React, { useRef } from "react";

export function AddContact(props) {
   const name = useRef('');
   const email = useRef('');
   const phone = useRef('');
    
     name.current.value = props.editContact.name;
     email.current.value = props.editContact.email;
    phone.current.value = props.editContact.phone;
    

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
    }

    return(
        <div className="row border text-white p-2 mt-3">
            <form onSubmit={createContact}>
            <div className="col-12 text-white-50">Add New Contact</div>
            <div className="row p-2">
                <div className="col-12 p-1 col-md-4">
                    <input type="text" placeholder="name" className="form-control" name="name" ref={name}></input>
                </div>
                <div className="col-12 p-1 col-md-4">
                    <input type="text" placeholder="email" className="form-control" name="email" ref={email}></input>
                </div>
                <div className="col-12 p-1 col-md-4">
                    <input type="text" placeholder="Phone Number" className="form-control" name="phoneNumber" ref={phone}></input>
                </div>
            </div>
            <div className="col-12 col-md-6 offset-md-3">
            <button className="btn btn-primary form-control">Create</button> 
            </div>
            </form>
        </div>
    );
}