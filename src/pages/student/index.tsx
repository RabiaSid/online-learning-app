import React, { useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";
import { BiHomeAlt, BiChevronRight } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { PiNotePencilDuotone } from "react-icons/pi";
import IconButton from "../../components/button/icon-button";
import DashboardLayout from "../../layout/dashboard-layout";
import { Breadcrumb } from "antd";
// import CourseList from "./course-list";
// import UserList from "./users-list";
// import Dashboard from "./dashboard";

type Page = {
  name: string;
  route?: string;
  icon?: React.ReactNode;
};

export default function StudentDashboard() {
  const [check, setCheck] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;
  const pagesArr: Page[] = [
    {
      name: "Dashboard",
      route: "",
      icon: <BiHomeAlt className="Start_icon" />,
    },
    {
      name: "Courses",
      route: "courses",
      icon: <FiBookOpen className="Start_icon" />,
    },
    {
      name: "Assignment",
      route: "assignment",
      icon: <HiOutlineUsers className="Start_icon" />,
    },
    {
      name: "Test",
      route: "test",
      icon: <HiOutlineUsers className="Start_icon" />,
    },
    {
      name: "Schedule",
      route: "schedule",
      icon: <HiOutlineUsers className="Start_icon" />,
    },
  ];

  const openPage = (route: any) => {
    var RouteName = route;
    if (route === "") {
      setCheck("Dashboard");
    } else {
      setCheck(RouteName);
    }
    navigate(`/student-dashboard/${route}`);
  };

  return (
    <DashboardLayout
      title={check}
      top={
        <Breadcrumb separator={<BiChevronRight size={20} />}>
          {pagesArr
            .filter((page: any) => currentRoute.includes(page.route))
            .map((page, index) => (
              <Breadcrumb.Item key={index}>
                <Link
                  to={`/student-dashboard/${page.route}`}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  {page.name}
                </Link>
              </Breadcrumb.Item>
            ))}
        </Breadcrumb>
      }
      content={pagesArr.map((x, index) => (
        <div key={index}>
          <IconButton
            classNameText="ps-5 fw-bold d-none d-lg-block "
            onClick={() => openPage(x.route)}
            className="item_active my-2 py-3  d-flex justify-content-lg-start justify-content-center shadow-none"
            startIcon={
              x.icon ? x.icon : <PiNotePencilDuotone className="Start_icon" />
            }
            label={x.name}
          />
        </div>
      ))}
    >
      <Routes>
        {/* <Route path="" element={<Dashboard />} />
        <Route path="courses" element={<CourseList />} />
        <Route path="users" element={<UserList />} /> */}
      </Routes>
    </DashboardLayout>
  );
}
