import React from "react";
import { Box } from "@mui/system";
import {
  ButtonGroup,
  IconButton,
  Tooltip,
  Typography,
  Button,
  Skeleton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const PostHeader = ({
  title,
  companyName,
  location,
  timestamp,
  experience,
  workLevel,
  workType,
  salary,
  loading,
}) => {
  return (
    <Box sx={{ width: "100%", marginTop: "30px" }}>
      <Box
        sx={{
          width: "100%",
          //   border: "1px solid red",
          display: "flex",
          justifyContent: "space-between",
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
            <Typography
              variant="h6"
              fontWeight={700}
              textTransform="capitalize"
              fontSize={20}
            >
              UI/UX Designer
            </Typography>
            <ButtonGroup>
              <Tooltip title="add to favourites">
                <IconButton>
                  <FavoriteBorderIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="share">
                <IconButton>
                  <ShareIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </ButtonGroup>
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
          {loading ? (
            <Skeleton variant="text" width={150} height={10} />
          ) : (
            <Typography
              variant="h6"
              component={"span"}
              sx={{
                color: "text.secondary",
                fontSize: "14px",
                fontWeight: "600",
                marginRight: "10px",
                letterSpacing: "1px",
              }}
            >
              Microsoft
            </Typography>
          )}

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {loading ? (
              <Skeleton variant="text" width={100} height={10} />
            ) : (
              <>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "12px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                  }}
                >
                  Delhi,india
                </Typography>
                <LocationOnIcon
                  fontSize="small"
                  sx={{ color: "text.secondary" }}
                />
              </>
            )}
          </Box>
        </Box>
        {loading ? (
          ""
        ) : (
          <>
            {" "}
            <Typography variant="h6" fontSize={12} textTransform="none">
              Posted
              <Box component={"span"} sx={{ color: "text.secondary" }}>
                &nbsp;8 days ago
              </Box>
            </Typography>
          </>
        )}
      </Box>
      <Box
        sx={{
          //   border: "1px solid red",
          width: "100%",
          margin: "20px 0",
          //   border: "1px solid red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {loading ? (
          <Skeleton variant="reactangular" width={"100%"} height={40} />
        ) : (
          <>
            <Box
              sx={{
                border: "1px solid #696a6c",
                padding: "4px 10px",
                width: {
                  xs: "150px",
                  sm: "160px",
                  md: "195px",
                },
              }}
            >
              <Typography
                variant="subtitle2"
                fontSize={12}
                fontWeight={600}
                sx={{ color: "text.secondary" }}
              >
                Experience
              </Typography>
              <Typography
                variant="h6"
                component={"span"}
                fontSize={13}
                fontWeight={700}
                sx={{ color: "text.primary" }}
              >
                Minimum 1 Year
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #696a6c",
                padding: "4px 10px",
                width: {
                  xs: "150px",
                  sm: "160px",
                  md: "200px",
                },
              }}
            >
              <Typography
                variant="subtitle2"
                fontSize={12}
                fontWeight={600}
                sx={{ color: "text.secondary" }}
              >
                work level
              </Typography>
              <Typography
                variant="h6"
                component={"span"}
                fontSize={13}
                fontWeight={700}
                sx={{ color: "text.primary" }}
              >
                senior level
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #696a6c",
                padding: "4px 15px",
                width: {
                  xs: "150px",
                  sm: "160px",
                  md: "200px",
                },
              }}
            >
              <Typography
                variant="subtitle2"
                fontSize={12}
                fontWeight={600}
                sx={{ color: "text.secondary" }}
              >
                employee type
              </Typography>
              <Typography
                variant="h6"
                component={"span"}
                fontSize={13}
                fontWeight={700}
                sx={{ color: "text.primary" }}
              >
                full time jobs
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #696a6c",
                padding: "4px 10px",
                width: {
                  xs: "150px",
                  sm: "160px",
                  md: "200px",
                },
              }}
            >
              <Typography
                variant="subtitle2"
                fontSize={12}
                fontWeight={600}
                sx={{ color: "text.primary" }}
              >
                offer salary
              </Typography>
              <Typography
                variant="h6"
                component={"span"}
                fontSize={13}
                fontWeight={700}
                sx={{ color: "text.primary" }}
              >
                50k/month
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default PostHeader;
