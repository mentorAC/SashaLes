import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { AddRandomContact } from "../AddRandomContact/AddRandomContact";
import { DeleteAllContacts } from "../DeleteAllContacts/DeleteAllContacts";
import { AddContact } from "../AddContact/AddContact";
import { FavouriteContact } from "../FavoriteContact/FavoriteContact";
import {GeneralContacts} from "../GeneralContacts/GeneralContacts"
export function ContactIndex() {
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
          <AddContact></AddContact>
        </div>
        <div className="row">
        <FavouriteContact></FavouriteContact>
        </div>
        <div className="row">
            <GeneralContacts></GeneralContacts>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
