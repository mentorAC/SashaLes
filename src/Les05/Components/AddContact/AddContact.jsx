import React from "react";

export function AddContact(props) {

    return(
        <div className="row border text-white p-2 mt-3">
            <form>
            <div className="col-12 text-white-50">Add New Contact</div>
            <div className="row p-2">
                <div className="col-12 p-1 col-md-4">
                    <input type="text" placeholder="name" className="form-control" name="name"></input>
                </div>
                <div className="col-12 p-1 col-md-4">
                    <input type="text" placeholder="email" className="form-control" name="email"></input>
                </div>
                <div className="col-12 p-1 col-md-4">
                    <input type="text" placeholder="Phone Number" className="form-control" name="phoneNumber"></input>
                </div>
            </div>
            <div className="col-12 col-md-6 offset-md-3">
            <button className="btn btn-primary form-control" onClick={props.show}>Create</button> 
            </div>
            </form>
        </div>
    );
}