import React from "react";
import imgPlaceholder from "../../assets/images/no_photo.png";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./new.scss";
import isImage from "../../utils/isImage";

const New = ({ inputs }) => {
  const [file, setFile] = React.useState("");
  console.log(file);

  return (
    <div className="createNew">
      <div className="top cardBoxShadow">
        <h1 className="title">{inputs.title}</h1>
      </div>
      <div className="bottom cardBoxShadow">
        <div className="left">
          <img src={file ? URL.createObjectURL(file) : imgPlaceholder} alt="" />
        </div>
        <div className="right">
          <form>
            {inputs.layout.map((item, index) => {
              return (
                <div className="formInput" key={item.id}>
                  <label>{item.label}</label>
                  <div className="inputField">
                    <span>{item.icon}</span>
                    <input type={item.type} required={item.required} />
                  </div>
                </div>
              );
            })}
            <div className="formInput">
              <label htmlFor="file" className="labelUpload">
                <DriveFolderUploadOutlinedIcon className="icon" />
                <span>Upload Profile Image</span>
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) =>
                  isImage(e.target.files[0]) ? setFile(e.target.files[0]) : null
                }
                style={{ display: "none" }}
              />
            </div>
            <div className="formInput">
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
