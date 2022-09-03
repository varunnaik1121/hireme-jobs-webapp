import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  ButtonGroup,
  IconButton,
  Tooltip,
  Typography,
  Button,
  Skeleton,
} from "@mui/material";
const CompanyInfo = ({ onChange, change, company, Location, setChange }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Box sx={{ width: "100%", marginTop: "30px" }}>
      <Box
        sx={{
          width: "80%",
          justifyContent:{sm:"center",md:"space-between"},
          display: "flex",
          alignItems: "center",
          padding: "10px 10px",
        }}
      >
        {loading ? (
          <>
            <Typography
              variant="h6"
              fontWeight={700}
              textTransform="capitalize"
              fontSize={20}
            >
              <Skeleton variant="text" width="200px" height={20} />
            </Typography>
            <ButtonGroup>
              <Tooltip title="add to favourites">
                <IconButton>
                  <Skeleton variant="circular" width={30} height={30} />
                </IconButton>
              </Tooltip>
              <Tooltip title="share">
                <IconButton>
                  <Skeleton variant="circular" width={30} height={30} />
                </IconButton>
              </Tooltip>
            </ButtonGroup>
          </>
        ) : (
          <>
            <>
              <input
                style={{
                  fontSize: "22px",
                  width: "auto",
                  fontWeight: "700",
                  colo: "#000",
                }}
                id="company"
                onChange={onChange}
                className={!change ? "new" : "newone"}
                disabled={!change}
                type="text"
                value={company}
              />
            </>
            
          </>
        )}
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px 10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {loading ? (
              <Skeleton variant="text" width={100} height={10} />
            ) : (
              <>
                <input
                  style={{ fontSize: "15px", fontWeight: "500" }}
                  id="Location"
                  onChange={onChange}
                  className={!change ? "new" : "newone"}
                  disabled={!change}
                  type="text"
                  value={Location}
                />
              </>
              
            )}
          </Box>
          
        </Box>
      </Box>

      <Box
        sx={{
          //   border: "1px solid red",
          width: "100%",
          margin: "20px 12px",
          //   border: "1px solid red",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {loading ? (
          <Skeleton variant="reactangular" width={"100%"} height={40} />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default CompanyInfo;
