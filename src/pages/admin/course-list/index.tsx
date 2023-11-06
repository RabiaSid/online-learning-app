// import { useParams } from "react-router-dom";
import React, {useState} from "react"
import OutlineButton from "../../../components/button/outline-button";
import AdminCourseCard from "../../../components/card/admin-course-card";
import BasicModal from "../../../components/modal/basic-modal";
import CustomPagination from "../../../components/pagination";
import CourseForm from "../course-form";

export default function CourseList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  return (
    <>
    <BasicModal modalshow={show} size="lg">
      <CourseForm />
    </BasicModal>
    <div className="row m-0 p-0 px-2">
      <div className="col-12 ">
        <div className="row m-0 p-0  d-flex justify-content-between">
          <div className="col-8 p-0">
            <OutlineButton label="upload" />
          </div>
          <div className="col-1 ">
            <OutlineButton label="upload" onClick={() => setShow(true)}/>
          </div>
        </div>
      </div>
      <div className="col-12 ">
        <div className="row m-0 p-0  d-flex justify-content-between">
          <AdminCourseCard />
          <AdminCourseCard />
          <AdminCourseCard />
          <AdminCourseCard />
          <AdminCourseCard />
          <AdminCourseCard />
          <AdminCourseCard />
          <AdminCourseCard />
          <AdminCourseCard />
          <AdminCourseCard />
          <AdminCourseCard />
          <AdminCourseCard />
        </div>
        <div className="row m-0 p-0  d-flex justify-content-end border">
          <div className="col-3">
          <CustomPagination  />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
