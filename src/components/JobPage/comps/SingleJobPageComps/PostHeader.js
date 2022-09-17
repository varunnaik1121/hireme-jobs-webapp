import React from "react";
import { Box } from "@mui/system";
import {
  ButtonGroup,
  IconButton,
  Tooltip,
  Typography,
  Skeleton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useGlobalUser } from "../../../../context/userContext";

const PostHeader = ({
  title,
  companyName,
  location,

  experience,
  workLevel,
  workType,
  salary,
  loading,
  myFavourites,

  id,
  time,
  companyDocId,
}) => {
  const { addToFavourites, removeFromFavourites } = useGlobalUser();

  return (
    <Box sx={{ width: "100%", marginTop: "30px" }}>
      <Box
        sx={{
          width: "100%",

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
              fontSize={22}
            >
              {title}
            </Typography>
            <ButtonGroup>
              {myFavourites?.includes(id) ? (
                <>
                  <Tooltip title="Remove from favourites">
                    <IconButton onClick={() => removeFromFavourites(id)}>
                      <FavoriteIcon fontSize="small" color="error" />
                    </IconButton>
                  </Tooltip>
                </>
              ) : (
                <>
                  <Tooltip title="add to favourites">
                    <IconButton onClick={() => addToFavourites(id)}>
                      <FavoriteBorderIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </>
              )}

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {loading ? (
            ""
          ) : (
            <Typography
              variant="h6"
              component={"span"}
              sx={{
                // color: "text.secondary",
                fontSize: "14px",
                fontWeight: "500",
                marginRight: "10px",
                marginLeft: "3px",
              }}
            >
              <a
                href={`/company/${companyDocId}`}
                style={{ textDecoration: "none" }}
              >
                {companyName}
              </a>
            </Typography>
          )}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {loading ? (
              ""
            ) : (
              <>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "12px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    padding: "0 4px",
                  }}
                >
                  {location}
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
            <Typography
              variant="h6"
              fontSize={12}
              textTransform="none"
              sx={{ fontWeight: 500 }}
            >
              Posted
              <Box
                component={"span"}
                sx={{ color: "text.secondary", fontWeight: 500 }}
              >
                &nbsp;{time}
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
          <Skeleton variant="reactangular" width={"96%"} height={40} />
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
                {experience}
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
                {workLevel}
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
                {workType ? workType : "--"}
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
                {salary ? salary : "--"}
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default PostHeader;
