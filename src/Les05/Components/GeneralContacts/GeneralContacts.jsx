import React from "react";
import { Contact } from "../Contact/Contact";
import style from "./GeneralContacts.module.css";
export function GeneralContacts(props){
    let contacts = props.contacts.map((obj)=><Contact contact={obj}/>);
    return(
    <div className={`col-12 py-2 ${style.container}`}>
      <div className="text-center text-white-50">Favorite</div>
      <div className="p-2">
       {contacts};
      </div>
    </div>
    );  
}