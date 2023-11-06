import { BsPerson } from "react-icons/bs";
import { Robbot } from "../../../assets";
import { PiBookOpenTextDuotone } from "react-icons/pi";
import baseColors from "../../../constant";
import PrimaryButton from "../../button/primary-button";
import ProgressBar from "../../progress/progress-bar";

export default function AdminCourseCard() {
  return (
    <div className="col-3 px-3 py-1">
      <div
        className="shadow-sm py-2 px-3 row"
        style={{ background: "#ffffff", borderRadius: "2vh" }}
      >
        <div
          className="col-3"
          style={{
            background: `url(${Robbot})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "12vh",
            borderRadius: "2vh",
          }}
        ></div>
        <div className="col-9">
          <h5 className="py-1">Education</h5>
          <h4
            className=""
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            mnckjzhvkjzxnxv,mdhvjkkxcxnm,xcnvijofdhvm,.mxcnvikh
          </h4>
          <h6>from m,c.,zxmv,.,zmv</h6>
        </div>
        <div className="col-12 p-0 ">
            <ProgressBar percent={30} status="active"  />
        </div>
        <div className="col-12 p-0">
          <div className="row py-1">
            <div className="col-6">
              <PrimaryButton>
                <h6 style={{fontSize:'0.7rem'}}>pause : start</h6>
              </PrimaryButton>
            </div>
            <div className="col-6">
              <PrimaryButton>
                <h6 style={{fontSize:'0.7rem'}}>continue : reopen</h6>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
