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
import InputSelect from "../../../components/input/dropdown";
import FileUpload from "../../../components/input/file-input";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fbSignUp,
  googleSignUp,
  imgDB,
} from "../../../config/firebase/firebase-methods";
import { MenuItem } from "@mui/material";
import { add } from "../../../config/redux/reducers/userSlice";
import BasicModal from "../../../components/modal/basic-modal";
import DisableInput from "../../../components/input/disable-input";

export default function SignUp() {
  const [show, setShow] = useState(true);
  const [role, setRole] = useState(false);
  const dispatch = useDispatch();
  const [model, setModel] = useState<any>({
    Image: {},
    gender: "",
  });

  const [maleChecked, setMaleChecked] = useState<any>(false);
  const [femaleChecked, setFemaleChecked] = useState<any>(false);
  const [teacherRoleChecked, setTeacherRoleChecked] = useState<any>(false);
  const [studentRoleChecked, setStudentCheckedChecked] = useState<any>(false);

  const handleClose = () => setShow(false);

  // signup

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  const handleGenderChange = (event: any) => {
    const selectedGender = event.target.value;
    setModel((prevModel: any) => ({
      ...prevModel,
      gender: selectedGender,
    }));
  };

  const navigate = useNavigate();

  const Role = [
    // { value: "admin", label: "Admin" },
    { value: "teacher", label: "Teacher" },
    { value: "student", label: "Student" },
  ];

  const Subject = [
    { value: "education", label: "Education" },
    { value: "technology", label: "Technology" },
    { value: "social", label: "Social" },
    { value: "bussiness", label: "Bussiness" },
  ];

  const handleImageUpload = (e: any) => {
    console.log(e.target.files[0]);
    const imgs = ref(imgDB, `Imgs/${v4()}`);
    uploadBytes(imgs, e.target.files[0]).then((res) => {
      console.log(res, "imgs");
      getDownloadURL(res.ref).then((val) => {
        console.log(val);
        model.Image = val;
      });
    });
  };

  let signUpUser = () => {
    console.log("Model data:", model);
    dispatch(add({ ...model }));
    fbSignUp(model)
      .then((res: any) => {
        if (model.role === "admin") {
          // dispatch(add({ ...res }));
          // console.log(add({ ...res }));
          navigate("/admin-dashboard");
        } else if (model.role === "teacher") {
          // dispatch(add({ ...res }));
          // console.log(add({ ...res }));
          navigate("/teacher-dashboard");
        } else if (model.role === "student") {
          // dispatch(add({ ...res }));
          // console.log(add({ ...res }));
          navigate("/student-dashboard");
        } else {
          // dispatch(add({ ...res }));
          // console.log(add({ ...res }));
          navigate("/*");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let signUpUserWithGoogle = () => {
    googleSignUp()
      .then((res: any) => {
        setRole(true);

      })
      .catch((err) => {
        console.log(err);
      });
  };

  let handleRoleChange = (event: any) => {
    setRole(false);

    const selectedRole = event.target.value;
    setModel((prevModel: any) => ({
      ...prevModel,
      role: selectedRole,
    }));
    console.log(model);
    console.log(selectedRole);
    // if (selectedRole === "teacher") {
    //   navigate("/sign-in");
    //   navigate("/teacher-dashboard");
    // } else if (selectedRole === "student") {
    //   navigate("/sign-in");
    //   navigate("/student-dashboard");
    // } else {
    //   navigate("/*");
    // }
  };

  return (
    <AuthLayout>
      <UnAuthorizedModal show={show} onClick={handleClose}></UnAuthorizedModal>
      <div className=" row m-0 p-0 d-flex justify-content-center align-items-center w-100 ">
        {role ? (
          <div className="col-12 d-flex  flex-column align-item-between border">
            <div className="py-2">
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "2em",
                  color: baseColors.dark,
                }}
              >
                Sign Up With More Detail
              </h1>
            </div>

            <div className="py-2">
              <FileUpload onChange={(e: any) => handleImageUpload(e)} />
            </div>

            <div className="py-2">
              <h6 style={{ color: baseColors.lightGrey }}>Email</h6>
              <DisableInput
                // value={model.email || ""}
                // onChange={(e: any) => fillModel("email", e.target.value)}
                label="Email"
              />
            </div>
            <div className="py-2">
              <h6 style={{ color: baseColors.lightGrey }}>Full Name</h6>
              <DisableInput
                // value={model.email || ""}
                // onChange={(e: any) => fillModel("email", e.target.value)}
                label="Full Name"
              />
            </div>
            <div className="row m-0 p-0 py-2 ">
              <div className="col-6 ps-0">
                <h6 style={{ color: baseColors.lightGrey }}>Role</h6>
                <InputSelect
                  HeaderValue="Role"
                  SelectValue={model.role}
                  SelectOnChange={(e: any) => fillModel("role", e.target.value)}
                >
                  {Role.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </InputSelect>
              </div>
              <div className="col-6 pe-0">
                <h6 style={{ color: baseColors.lightGrey }}>Subject</h6>
                <InputSelect
                  HeaderValue="Subject"
                  SelectValue={model.bloodGroup}
                  SelectOnChange={(e: any) =>
                    fillModel("subject", e.target.value)
                  }
                >
                  {Subject.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </InputSelect>
              </div>
            </div>
            <div className="py-2">
              <h6 style={{ color: baseColors.lightGrey }}>Password</h6>
              <PasswordInputField
                value={model.password || ""}
                onChange={(e: any) => fillModel("password", e.target.value)}
                label="Password"
              />
            </div>
            <div className="py-2">
              <CheckboxLabels
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
              />
            </div>
            <div className="py-2">
              <PrimaryButton onClick={signUpUser} label="Sign Up" />
            </div>
            {/* <div className="row d-flex justify-content-evenly">
              <div className="col-11 d-flex  flex-column justify-content-center align-item-center text-center" onClick={handleRoleChange}>
             
                  <CheckboxLabels
                    id="teacher"
                    name="role"
                    value="teacher"
                    label="teacher"
                    checked={model.role === "teacher" || teacherRoleChecked}
                    // onChange={handleRoleChange}
                  />
               
              </div>
              <div className="col-11 d-flex  flex-column justify-content-center align-item-center text-center" onClick={handleRoleChange}>
                
                  <CheckboxLabels
                    id="teacher"
                    name="role"
                    value="student"
                    label="student"
                    // onChange={handleRoleChange}
                    checked={model.role === "student" || studentRoleChecked}
                  />
               
              </div>
            </div> */}
          </div>
        ) : (
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
              <FileUpload onChange={(e: any) => handleImageUpload(e)} />
            </div>
            <div className="row m-0 p-0 py-2 ">
              <div className="col-6 ps-0">
                <h6 style={{ color: baseColors.lightGrey }}>First Name</h6>
                <IconInputfield
                  value={model.firstName || ""}
                  onChange={(e: any) => fillModel("firstName", e.target.value)}
                  label="First Name"
                />
              </div>
              <div className="col-6 pe-0">
                <h6 style={{ color: baseColors.lightGrey }}>Last Name</h6>
                <IconInputfield
                  value={model.lastName || ""}
                  onChange={(e: any) => fillModel("lastName", e.target.value)}
                  label="Last Name"
                />
              </div>
            </div>
            <div className="py-2">
              <h6 style={{ color: baseColors.lightGrey }}>Email</h6>
              <IconInputfield
                value={model.email || ""}
                onChange={(e: any) => fillModel("email", e.target.value)}
                label="Email"
              />
            </div>
            <div className="row m-0 p-0 py-2 ">
              <div className="col-6 ps-0">
                <h6 style={{ color: baseColors.lightGrey }}>Role</h6>
                <InputSelect
                  HeaderValue="Role"
                  SelectValue={model.role}
                  SelectOnChange={(e: any) => fillModel("role", e.target.value)}
                >
                  {Role.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </InputSelect>
              </div>
              <div className="col-6 pe-0">
                <h6 style={{ color: baseColors.lightGrey }}>Subject</h6>
                <InputSelect
                  HeaderValue="Subject"
                  SelectValue={model.bloodGroup}
                  SelectOnChange={(e: any) =>
                    fillModel("subject", e.target.value)
                  }
                >
                  {Subject.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </InputSelect>
              </div>
            </div>
            <div className="py-2">
              <h6 style={{ color: baseColors.lightGrey }}>Password</h6>
              <PasswordInputField
                value={model.password || ""}
                onChange={(e: any) => fillModel("password", e.target.value)}
                label="Password"
              />
            </div>
            <div className="py-2">
              <CheckboxLabels
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
              />
            </div>
            <div className="py-2">
              <PrimaryButton onClick={signUpUser} label="Sign Up" />
            </div>
            <div className="py-2 row m-0 p-0 d-flex justify-content-center ">
              <span className="Hortizental-Line col-4 mb-2"></span>
              <span className="col-3 ">or Sign Up with</span>
              <span className="Hortizental-Line col-4 mb-2"></span>
            </div>
            <div className="py-2 row m-0 p-0 d-flex justify-content-center ">
              <div className="col-11">
                <IconButton
                  startIcon={<FcGoogle />}
                  className="Icon_Btn shadow-none"
                  onClick={signUpUserWithGoogle}
                  label="Sign Up"
                />
              </div>

              {/* <div className="col-4">
                <IconButton
                  startIcon={
                    <FaFacebookF color={baseColors.fbblue} size={18} />
                  }
                  className="Icon_Btn shadow-none"
                  // onClick={signUpUser}
                  label="Sign Up"
                />
              </div> */}
            </div>
          </div>
        )}
      </div>
    </AuthLayout>
  );
}
