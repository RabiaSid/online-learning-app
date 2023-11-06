import { BsPerson } from "react-icons/bs";
import { Robbot } from "../../../assets";
import { PiBookOpenTextDuotone } from "react-icons/pi";
import baseColors from "../../../constant";

export default function UserCourseCard() {
  return (
    <div className="col-3 ">
      <div
        className="shadow-sm py-2 px-3"
        style={{ background: "#ffffff", borderRadius: "2vh" }}
      >
        <div
          className="my-1"
          style={{
            background: `url(${Robbot})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "18vh",
            borderRadius: "2vh",
          }}
        ></div>

        <h5 className="py-2">Education</h5>
        <h3
          className="py-1"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          mnckjzhvkjzxnxv,mdhvjkkxcxnm,xcnvijofdhvm,.mxcnvikh
        </h3>
        <h5>from m,c.,zxmv,.,zmv</h5>
        {/* <img src={Robbot} style={{height:"25vh", width:"auto", borderRadius:"3vh"}} /> */}
        <div className="pt-3">
          <div className="row py-1">
            <div className="col-4">
              <h3>
                <span>
                  <BsPerson color={baseColors.green} size={18}/>
                </span>
                <span>count</span>
              </h3>
            </div>
            <div className="col-4">
              <h3>
                <span>
                <PiBookOpenTextDuotone color={baseColors.green} size={18}/>
                </span>
                <span>count</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
