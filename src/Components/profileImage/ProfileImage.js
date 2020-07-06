import React, { useState } from "react";
import { userPlaceHolder } from "../../helper/constants";
const ProfileImage = props => {
  const [src, setSource] = useState(props.url || userPlaceHolder);

  const imgClicked = e => {
    if (e.target.files.length) {
      const imgObj = window.URL.createObjectURL(e.target.files[0]);
      setSource(imgObj);
      props.getImgObj(e.target.files[0]);
    }
  };
  return (
    <React.Fragment>
      <div className={`form-group ${props.center ? "text-center" : ""}`}>
        <label>
          <img
            src={src}
            style={{
              width: "120px",
              height: "120px",
              cursor: "pointer",
              borderRadius: "50%"
            }}
            alt="profile"></img>
          <input
            onChange={imgClicked}
            className="d-none"
            type="file"
            id="inputImg"
            accept="image/*"
          />
        </label>
      </div>
    </React.Fragment>
  );
};
export default ProfileImage;
