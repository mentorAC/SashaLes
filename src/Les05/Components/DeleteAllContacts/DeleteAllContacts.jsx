import React from "react";

export function DeleteAllContacts(props) {
    return(
        <div>
            <button className="btn btn-danger form-control" onClick={()=>props.deleteContacts()}>
            Delete All Contacts
            </button>
        </div>
    );
}