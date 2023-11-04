import React, { useState } from "react";
import UnAuthorizedModal from "../../../components/modal/unauthorized";
import { AiOutlineLeft } from "react-icons/ai";
import AuthLayout from "../../../layout/auth-layout";
import IconInputfield from "../../../components/input/icon-inputfield";
import baseColors from "../../../constant";
import PrimaryButton from "../../../components/button/primary-button";
import PasswordInputField from "../../../components/input/password-input";
import IconButton from "../../../components/button/icon-button";
import {FcGoogle} from "react-icons/fc"
import {FaFacebookF} from "react-icons/fa"

export default function SignUp() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <AuthLayout>
      <UnAuthorizedModal show={show} onClick={handleClose}></UnAuthorizedModal>
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
              Sign Up
              </h1>
          </div>
          <div className="py-2">
            {/* <FileUpload onChange={(e: any) => handleImageUpload(e)} /> */}
          </div>
          <div className="py-2">
            <h6 style={{ color: baseColors.lightGrey }}>First Name</h6>
            <IconInputfield
              // value={model.firstName || ""}
              // onChange={(e: any) => fillModel("firstName", e.target.value)}
              label="First Name"
            />
          </div>
          <div className="py-2">
            <h6 style={{ color: baseColors.lightGrey }}>Last Name</h6>
            <IconInputfield
              // value={model.lastName || ""}
              // onChange={(e: any) => fillModel("lastName", e.target.value)}
              label="Last Name"
            />
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
            <h6 style={{ color: baseColors.lightGrey }}>Cnic</h6>
            <IconInputfield
              // value={model.cnic || ""}
              // onChange={(e: any) => fillModel("cnic", e.target.value)}
              label="Cnic"
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
          <div className="py-2">
            {/* <CheckboxLabels
            id="male"
            name="gender"
            value="male"
            label="male"
            checked={model.gender === "male" || maleChecked}
            onChange={handleGenderChange}
          />
          <CheckboxLabels
            id="female"
            name="gender"
            value="female"
            label="female"
            onChange={handleGenderChange}
            checked={model.gender === "female" || femaleChecked}
          /> */}
          </div>
          <div className="py-2">
            <PrimaryButton
              // onClick={signUpUser}
              label="Sign Up"
            />
          </div>
          <div className="py-2 row m-0 p-0 d-flex justify-content-center ">
            <span className="Hortizental-Line col-4 mb-2"></span>
            <span className="col-3 ">or Sign Up with</span>
            <span className="Hortizental-Line col-4 mb-2"></span>
          </div>
          <div className="py-2 row m-0 p-0 d-flex justify-content-center ">
            <div className="col-4">
              <IconButton
              startIcon={<FcGoogle />}
              className="Icon_Btn shadow-none"
                // onClick={signUpUser}
                label="Sign Up"
              />
            </div>

            <div className="col-4">
              <IconButton
              startIcon={<FaFacebookF color={baseColors.fbblue} size={18}/>}
              className="Icon_Btn shadow-none"
                // onClick={signUpUser}
                label="Sign Up"
              />
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
