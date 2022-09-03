import { Box } from "@mui/material";
import React, { useState } from "react";
import { Skeleton } from "@mui/material";
import { useEffect } from "react";
const ImageBox = ({
  change,
  setCompanyLogo,
  setCompanyCoverPhoto,
  companyLogo,
  companyCoverPhoto,
}) => {
  const [loading, setLoading] = useState(false);

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    console.log({file})
    if (file) {
      setCompanyCoverPhoto(file);
    } else {
      return;
    }
  };
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    console.log("this is logo change",{file})
    if (file) {
      setCompanyLogo(file);
    } else {
      return;
    }
  };

  useEffect(())

  return (
    <Box
      sx={{
        width: "100%",
        // border: "1px solid red",
        height: "220px",
        borderRadius: "10px 10px 0 0",
        position: "relative",
        // border: "1px solid red",
      }}
    >
      {loading ? (
        <>
          <Skeleton variant="rounded" width="100%" height="100%" />
          <Box
            sx={{
              width: "55px",
              height: "55px",

              borderRadius: "6px",
              border: "3px solid #f6f7f9",
              position: "absolute",
              left: "3%",
              bottom: "-14%",
            }}
          >
            <Skeleton variant="rounded" width="100%" height="100%" />
          </Box>
        </>
      ) : (
        <>
          <>
            <Box
              style={{
                height: "100%",
                width: "100%",
                background: "red",
                position: "relative",
              }}
            >
              {change && (
                <div
                  className="file-input"
                  style={{
                    position: "absolute",
                    bottom: "25px",
                    right: "25px",
                  }}
                >
                  <input
                    onChange={handleCoverChange}
                    type="file"
                    name="file-input"
                    id="file-input"
                    className="file-input__input"
                  />
                  <label className="file-input__label" htmlFor="file-input">
                    <span>change cover</span>
                  </label>
                </div>
              )}

              {companyCoverPhoto && (
                <img
                  style={{ objectFit: "cover", height: "100%", width: "100%" }}
                  src={
                    companyCoverPhoto && URL.createObjectURL(companyCoverPhoto)
                  }
                  alt="1"
                />
              )}
            </Box>
          </>
          <Box
            sx={{
              width: "55px",
              height: "55px",

              borderRadius: "6px",
              border: "3px solid #f6f7f9",
              position: "absolute",
              left: "3%",
              bottom: "-14%",
            }}
          >
            <Box
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              {change && (
                <div
                  className="file-input"
                  style={{
                    position: "absolute",
                    top: "15% ",
                    left: "15%",
                  }}
                >
                  <input
                    onChange={handleLogoChange}
                    style={{ border: "1px solid green" }}
                    type="file"
                    name="file-input"
                    id="file-input"
                    className="file-input__input"
                  />
                  <label
                    style={{
                      padding: "15px ",
                      borderRadius: "50%",
                      border: "1px solid red",
                    }}
                    className="file-input__label_svg"
                    htmlFor="file-input"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="upload"
                      className="svg-inline--fa fa-upload fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                      ></path>
                    </svg>
                  </label>
                </div>
              )}

              <img
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
                src={
                  change
                    ? companyLogo && URL.createObjectURL(companyLogo)
                    : "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueXxlbnwwfHwwfHw%3D&w=1000&q=80"
                }
                alt="1"
              />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ImageBox;
