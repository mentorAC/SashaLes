import React from "react";

export function DeleteAllContacts(props) {
    return(
        <div>
            <button className="btn btn-danger form-control fw-semibold" onClick={()=>props.deleteContacts()}>
            Delete All Contacts
            </button>
        </div>
    );
}