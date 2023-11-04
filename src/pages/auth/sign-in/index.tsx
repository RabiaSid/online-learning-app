import React, { useState } from "react";
import UnAuthorizedModal from "../../../components/modal/unauthorized";
import { AiOutlineLeft } from "react-icons/ai";
import AuthLayout from "../../../layout/auth-layout";
import IconInputfield from "../../../components/input/icon-inputfield";
import baseColors from "../../../constant";
import PrimaryButton from "../../../components/button/primary-button";
import PasswordInputField from "../../../components/input/password-input";
import IconButton from "../../../components/button/icon-button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import CheckboxLabels from "../../../components/check-box";

export default function SignIn() {
  return (
    <AuthLayout>
      <div className=" row m-0 p-0 d-flex justify-content-center align-item-center w-100 ">
        <div className="col-7 d-flex  flex-column align-item-center  ">
          <div className="py-2">
            <h1
              style={{
                fontWeight: "bolder",
                fontSize: "2em",
                color: baseColors.dark,
              }}
            >
              Sign In
            </h1>
          </div>
          <div className="text-start">
            <h3
              style={{
                fontSize: "1em",
                color: baseColors.lightGrey,
              }}
            >
              Don't have an account?
              <span
                style={{
                  fontWeight:"bold",
                  color: baseColors.green,
                  paddingLeft:'5px'
                }}
              >
                Get Started
              </span>
            </h3>
          </div>

          <div className="py-2">
            <h6 style={{ color: baseColors.lightGrey }}>Email</h6>
            <IconInputfield
              // value={model.email || ""}
              // onChange={(e: any) => fillModel("email", e.target.value)}
              label="Email"
            />
          </div>
          <div className="py-2">
            <h6 style={{ color: baseColors.lightGrey }}>Password</h6>
            <PasswordInputField
              // value={model.password || ""}
              // onChange={(e: any) => fillModel("password", e.target.value)}
              label="Password"
            />
          </div>

          <div className="row m-0 p-0 d-flex justify-content-between align-item-center">
            <div className="col-5 text-start ">
              <CheckboxLabels label="Remember me" />
            </div>
            <div className="col-5 text-end py-3">
              <h3
                style={{
                  fontSize: "1em",
                  color: baseColors.green,
                }}
              >
                Forget password?
              </h3>
            </div>
          </div>

          <div className="py-2">
            <PrimaryButton
              // onClick={signUpUser}
              label="Sign In"
            />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
