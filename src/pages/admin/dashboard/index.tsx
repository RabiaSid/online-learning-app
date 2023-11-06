import React, { useState, useEffect } from "react";
import DashboardCard from "../../../components/card/dashboard-card";
import baseColors from "../../../constant";
import { BsFillSignpostFill } from "react-icons/bs";
import DataList from "../../../components/list/users-list";
import AlertBox from "../../../components/alert";

export default function Dashboard() {
  return (
    <div className="row m-0 p-0 ">
      <div className="col-9  ">
        <div className="row m-0 p-0 ">
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </div>
        <div className="row m-0 p-0 mt-3 px-3">
          <div
            className="shadow-sm rounded-2 py-3 "
            style={{ background: baseColors.white }}
          >
            <DataList />
          </div>
        </div>
      </div>
      <div className="col-3 ">
        <div className="row m-0 p-0 ">
          <div
            className="shadow-sm rounded-2 py-3"
            style={{ background: baseColors.white }}
          >
            <div className="row">
              <div className="col-4">Recent Posts</div>
              <div
                className="col-1 d-flex flex-column justify-content-center align-items-start "
                // style={{ height: "3vh", width: "1.5vw" }}
              >
                <div
                  className="text-center rounded-1 px-1 "
                  style={{ background: baseColors.green }}
                >
                  <BsFillSignpostFill color={baseColors.white} size={12} />{" "}
                </div>
              </div>
              <div className="col-7 text-end">Delete</div>
            </div>
            <div className="row text-start py-2">
              <h6 style={{ fontSize: "1.2rem" }}>
                @ 2023 company is copyright
              </h6>
              <h6 style={{ fontSize: "1rem" }}>no Post yet</h6>
            </div>
          </div>
        </div>
        <div className="row m-0 p-0 py-3">
          <div
            className="shadow-sm rounded-2 py-3"
            style={{ background: baseColors.white }}
          >
            <div className="row">
              <div className="col-4">Alert's</div>
              <div
                className="col-12 d-flex flex-column justify-content-center align-items-start "
                // style={{ height: "3vh", width: "1.5vw" }}
              >
                <AlertBox message="Success Text" type="success"/>
                <AlertBox message="Info Text" type="info"/>
                <AlertBox message="Warning Text" type="warning"/>
                <AlertBox message="Error Text" type="error"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
