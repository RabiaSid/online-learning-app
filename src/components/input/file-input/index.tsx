import { ImUpload } from "react-icons/im";
import baseColors from "../../../constant";
import { BsFillPersonPlusFill } from "react-icons/bs";

type FileUploadProps = {
  onChange?: (...args: any[]) => any;
  value?: any;
};

export default function FileUpload(props: FileUploadProps) {
  const { onChange, value } = props;

  return (
    <div className="flex items-center justify-center w-full">
      <label
        className="flex flex-col items-center justify-center w-full h-64 border-dashed border-2 border-sky-500 
        rounded-lg cursor-pointer 
        "
      >
        <div
        className=" row d-flex justify-content-center align-items-center text-center rounded-5"
        style={{
          height: "7vh",
          width: "3.2vw",
          background: baseColors.shadowGrey,
        }}
      >
        <BsFillPersonPlusFill size={24} color={baseColors.dark} />
      </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden d-none"
          accept=".svg, .png, .jpg, .jpeg, .gif"
          onChange={onChange}
          value={value}
          alt="upload only .png, .jpg, .jpeg "
        />
        
       </label>
     </div>
  );
}
