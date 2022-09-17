import { Box } from "@mui/material";
import React, { useState } from "react";
import { Skeleton } from "@mui/material";
import { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
const ImageBox = ({
  change,
  setCompanyLogo,
  setCompanyCoverPhoto,
  companyLogo,
  companyCoverPhoto,
  coverPhoto,
  companyProfile,
}) => {
  const [loading, setLoading] = useState(false);

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    e.target.value = "";
    console.log({ file });
    if (file) {
      setCompanyCoverPhoto(file);
    } else {
      return;
    }
  };
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    e.target.value = "";
    console.log("this is logo change", { file });
    if (file) {
      setCompanyLogo(file);
    } else {
      return;
    }
  };

  useEffect(() => {
    console.log({ companyLogo });
    console.log({ companyCoverPhoto });
  }, [companyLogo, companyCoverPhoto]);

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
                background: "#fff",
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

              <img
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
                src={
                  change && companyCoverPhoto
                    ? URL.createObjectURL(companyCoverPhoto)
                    : coverPhoto
                }
                alt="cover"
              />
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
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      // border: "1px solid rgba(0,0,0,.1)",
                      margin: "20px 0 0 50px",
                      padding: "10px",
                    }}
                    component={"label"}
                  >
                    <input hidden type="file" onChange={handleLogoChange} />

                    <EditIcon
                      sx={{ width: "20px", height: "20px" }}
                      color="primary"
                    />
                  </Box>
                </div>
              )}

              <img
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
                src={
                  change && companyLogo
                    ? URL.createObjectURL(companyLogo)
                    : companyProfile
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
