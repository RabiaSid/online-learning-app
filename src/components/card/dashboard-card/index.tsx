import React from "react";
import { bgShadow } from "../../../assets";
import { BsPeopleFill } from "react-icons/bs";
import baseColors from "../../../constant";

export default function DashboardCard() {
  return (
    <div className="col-3 ">
      <div
        className="row m-0 p-0 px-2  d-flex justify-content-center align-items-center rounded-1 shadow-sm"
        style={{height:"8vh", background:baseColors.white}}
      >
        <div className="col-9">
          <h5 style={{ fontSize: "1rem" }}>version 1.12</h5>
          <h6 style={{ fontSize: "0.8rem" }}>17:24:00 08/3/2023</h6>
        </div>
        <div className="col-3 d-flex flex-column justify-content-start">
          <div
            className=" row d-flex justify-content-center align-items-center bg-danger text-center rounded-5"
            style={{ height: "4vh", width: "2vw" }}
          >
            <BsPeopleFill size={15} color={baseColors.white} />
          </div>
        </div>
      </div>
    </div>
  );
}
