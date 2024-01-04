import React from "react";
export function AddRandomContact(props) {
  let getRequest = async () => {
    let response = await fetch(
      "https://random-data-api.com/api/v2/users?size=1&response_type=json"
    );
    let obj = await response.json();
    const contact = {
      name: obj.first_name + " " + obj.last_name,
      email: obj.email,
      phone: obj.phone_number,
    };
    props.createContact(contact);
  };
  return (
    <div>
      <button className="btn btn-secondary form-control fw-semibold" onClick={getRequest}>
        Add Random Contact
      </button>
    </div>
  );
}
