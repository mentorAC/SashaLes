import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { AddRandomContact } from "../AddRandomContact/AddRandomContact";
import { DeleteAllContacts } from "../DeleteAllContacts/DeleteAllContacts";
import { AddContact } from "../AddContact/AddContact";
import { FavouriteContact } from "../FavoriteContact/FavoriteContact";
import { GeneralContacts } from "../GeneralContacts/GeneralContacts";
export function ContactIndex() {
  let contacts = [
    {
      id: 1,
      name: "Taras Shevchenko",
      email: "Taras@gmail.com",
      phone: "095038432432",
      isFavorite: true,
    },
    {
      id: 2,
      name: "Grugoriy Oliynuk",
      email: "Grisha@gmail.com",
      phone: "095038434565",
      isFavorite: false,
    },
    {
      id: 3,
      name: "Mykhailo Grugorovuch",
      email: "Misha@gmail.com",
      phone: "09503843908",
      isFavorite: false,
    },
  ];
  let show = ()=>{
    alert("Contact Index");
  }
  return (
    <div className="text-center" style={{ minHeight: "85vh" }}>
      <Header></Header>
      <div className="row py-3">
        <div className="col-4 offset-2">
          <AddRandomContact></AddRandomContact>
        </div>
        <div className="col-4">
          <DeleteAllContacts></DeleteAllContacts>
        </div>
        <div className="row">
          <AddContact show={show}></AddContact>
        </div>
        <div className="row">
          <FavouriteContact contacts={contacts.filter(obj=>obj.isFavorite)}></FavouriteContact>
        </div>
        <div className="row">
          <GeneralContacts contacts={contacts.filter(obj=>!obj.isFavorite)}></GeneralContacts>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
