import React, { useEffect, useState } from "react";
import { BiSolidBellRing } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { Breadcrumb } from 'antd';
import axios from "axios";
import IconButton from "../../components/button/icon-button";
import baseColors from "../../constant";
import { Logo, profile } from "../../assets";

// type Page = {
//   name: string;
//   route?: string;
//   icon?: React.ReactNode;
// };
type PropsType = {
  children?: React.ReactNode;
  title?:any;
  top?: React.ReactNode;
  content?: React.ReactNode;
};

export default function DashboardLayout(props: PropsType) {
  const { children, title, top, content } = props;

  return (
    <div
      className="row m-0 p-0"
      style={{
        border: "1px solid red",
        height: "100vh",
      }}
    >
      <div
        className="col-2 d-flex flex-column justify-content-between"
        style={{ border: "1px solid transparent", borderRightColor: "#EDEDF2" }}
      >
        <div className="row py-3">
          <img src={Logo} />
          <div className="py-4">
            {content}
          </div>
        </div>
        <div className="row  d-flex justify-content-center">
          <div
            className="text-center w-75"
            style={{
              border: "1px solid transparent",
              background: baseColors.shadowGrey,
              borderRadius: "10px",
              padding: 5,
            }}
          >
            <h5>version 1.12</h5>
            <h6>17:24:00 08/3/2023</h6>
          </div>
          <div className=" text-center w-75 py-3">
            <h6>@ 2023 company is copyright</h6>
          </div>
        </div>
      </div>
      <div
        className="col-10"
        // style={{ background: "transparent" }}
      >
        <div className="row d-flex align-items-center justify-content-center border border-success  m-0 p-0">
          <div className="col-3">{title}</div>
          <div className="col-6 text-end">
            <IoSearch size={20} color={baseColors.dark} />
          </div>
          <div className="col-3">
            <div className="row d-flex align-items-center">
              <div className="col-2">
                <BiSolidBellRing size={20} color={baseColors.dark} />
              </div>
              <div className="col-10">
                <div className="row d-flex align-items-center ">
                  <div className="col-3">
                    <img src={profile} />
                  </div>
                  <div className="col-9">
                    <h5>user Name</h5>
                    <h6>User Role</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-center border border-success  m-0 p-0">
          <div className="col">
            {top}
          </div>
        </div>
        <div className="row d-flex align-items-between justify-content-center border border-success  m-0 p-0">
          {children}
        </div>
      </div>
    </div>
  );
}
