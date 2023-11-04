import React, { ReactNode } from "react";
import { bgBackground } from "../../assets";
import baseColors from "../../constant";
// import baseColors from "../../Constant/color";

type AuthLayout = {
  children: ReactNode;
};

function AuthLayout(props: AuthLayout) {
  const { children } = props;
  return (
    <div className="row m-0 ">
      <div
        className="d-none d-lg-block col-lg-6 bg-image m-0"
        style={{
          background: `url(${bgBackground})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          margin: 0,
        }}
      >
        <div
          className="row d-flex align-items-center justify-content-center pt-3"
          style={{
            height: "100vh",
          }}
        >
          <div className=" row py-lg-0 py-2">
            <h1
              style={{
                fontWeight: "bolder",
                fontSize: "4em",
                color: baseColors.dark,
              }}
            >
              There's is{" "}
              <span
                style={{
                  color: baseColors.yellow,
                }}
              >
                no limit
              </span>{" "}
              to what you can{" "}
              <span
                style={{
                  color: baseColors.green,
                }}
              >
                learn.
              </span>
            </h1>
            <h6
              style={{
                color: baseColors.lightGrey,
              }}
            >
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </h6>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
