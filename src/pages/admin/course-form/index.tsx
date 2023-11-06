import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/primary-button";
import InputField from "../../../components/input/input-field";
import { fbAdd } from "../../../config/firebase/firebase-methods";

export default function CourseForm() {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);
  const [courseLessonList, setCourseLessonList] = useState<any>([]);
  // const [correctcourseLesson, setCorrectcourseLesson] = useState<any>();
  const [courseLesson, setCourseLesson] = useState<any>("");
  const [courseModel, setCourseModel] = useState<any>({});
  const [addAllLesson, setAddAllLesson] = useState<any>([]);
  const [AddCourseModel, setAddCourseModel] = useState<any>({
    courseName: "",
    courseShortName: "",
    courseDurationInmin: "",
    courseOpen: "",
    courseDescription: "",
    addAllLesson: [],
  });

  const fillAddCourseModel = (key: string, val: any) => {
    AddCourseModel[key] = val;
    setAddCourseModel({ ...AddCourseModel });
  };
 

  const addcourseLesson = () => {
    courseLessonList.push(courseLesson);
    setCourseLessonList([...courseLessonList]);
    setCourseLesson("");
  };
  // const logOut = () => {
  //   fbSignout().then(() => {
  //     navigate("/sign-in");
  //   });
  // };

  const AddCourse = () => {
    AddCourseModel.addAllLesson = [...addAllLesson];
    console.log(AddCourseModel);
    setDisable(false);
    fbAdd("course", AddCourseModel)
      .then((res: any) => {
        console.log(res);
        setAddCourseModel({
          ...AddCourseModel,
          courseName: "",
          courseShortName: "",
          courseDurationInmin: "",
          courseOpen: "",
          courseDescription: "",
          addAllLesson: [],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addLesson = () => {
    courseModel.courseLesson = [...courseLessonList];
    // courseModel.correctcourseLesson = correctcourseLesson;
    console.log(courseModel);
    addAllLesson.push(courseModel);
    setAddAllLesson([...addAllLesson]);
    setCourseModel({});
    // setCorrectcourseLesson("");
    setCourseLessonList([]);
    setCourseLesson("");
  };

  return (
    <div className="border border-danger " >
      <div className="row m-0 p-0 py-1">
      <Button onClick={AddCourse} label="Save" />
      </div>
      <div className="row m-0 p-0 py-3">
        <div className="col-3">
          <InputField
            value={AddCourseModel.courseName || ""}
            onChange={(e: any) => fillAddCourseModel("courseName", e.target.value)}
            disabled={disable}
            label="Course Name"
          />
        </div>
        <div className="col-3">
          <InputField
            value={AddCourseModel.courseShortName || ""}
            onChange={(e: any) => fillAddCourseModel("courseShortName", e.target.value)}
            label="Course Short Name"
            disabled={disable}
          />
        </div>
        <div className="col-3">
          <InputField
            value={AddCourseModel.courseDurationInmin || ""}
            onChange={(e: any) =>
              fillAddCourseModel("courseDurationInmin", e.target.value)
            }
            label="AddCourse Duration In min"
            disabled={disable}
          />
        </div>
        <div className="col-3">
          <InputField
            value={AddCourseModel.courseOpen || ""}
            onChange={(e: any) => fillAddCourseModel("courseOpen", e.target.value)}
            label="Course Open"
            disabled={disable}
          />
        </div>
        <div className="col-3">
          <InputField
            value={AddCourseModel.courseDescription || ""}
            onChange={(e: any) => fillAddCourseModel("courseDescription", e.target.value)}
            label="courseDescription"
            disabled={disable}
          />
        </div>
        <div className="col-3">
          <InputField
            // value={AddCourseModel.courseDescription || ""}
            // onChange={(e: any) => fillAddCourseModel("courseDescription", e.target.value)}
            label="Teacher"
            disabled={disable}
          />
        </div>
        <div className="col-3">
          <InputField
            // value={AddCourseModel.courseDescription || ""}
            // onChange={(e: any) => fillAddCourseModel("courseDescription", e.target.value)}
            label="Type"
            disabled={disable}
          />
        </div>
        <div className="col-3">
          <Button onClick={() => setDisable(true)} label="Lock AddCourse" />
        </div>
      </div>

      <div className="row m-0 p-0 d-flex justify-content-between">
        {/* <div className="col-8">
          <InputField
            value={courseModel.question || ""}
            onChange={(e: any) => fillCourseModel("question", e.target.value)}
            label="Question"
          />
        </div> */}
        <div className="col-12">
          <Button label="Save All lecture" onClick={addLesson} />
        </div>
        <div className="col-8">
        <InputField
            value={courseLesson}
            onChange={(e) => {
              setCourseLesson(e.target.value);
            }}
            label="courseLesson"
          />
        </div>
        <div className="col-4">
        <Button label="Add More courseLesson" onClick={addcourseLesson} />
        </div>
        <div className="col-12">
          {courseLessonList.map((x: any, i: any) => (
            <Button
              key={i}
              label={x}
              // onClick={() => {
              //   setCorrectcourseLesson(x);
              // }}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}
