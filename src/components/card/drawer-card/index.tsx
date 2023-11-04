import React from "react";
import { DrawerCardImage } from "../../../assets";

export default function DrawerCard() {
  return (
    <div
      style={{
        borderRadius: "10px",
        background: `#28a745`,
        boxShadow: `0px 15px 20px 0px rgba(70, 6, 81, 0.12)`,
      }}
      className="row m-0 p-0 py-2 mt-5 pb-2 mb-2 align-items-center mx-1"
    >
     <div className="col-7">
      <text className="drawerCardText">Please, organize your menus through button bellow!</text>
      <button className="drawerCardBtn">+Add Menus</button>
     </div>
     <div className="col-4">
      <img src={DrawerCardImage} style={{width:'70px'}}/>
     </div>
    </div>
  );
}
