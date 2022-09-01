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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
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
  myFavourites,
  id,
}) => {
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
              fontSize={20}
              color="primary"
            >
              Microsoft
            </Typography>
            <ButtonGroup>
              {myFavourites?.includes(id) ? (
                <>
                  <Tooltip title="Remove from favourites">
                    <IconButton>
                      <FavoriteIcon fontSize="small" color="error" />
                    </IconButton>
                  </Tooltip>
                </>
              ) : (
                <>
                  <Tooltip title="add to favourites">
                    <IconButton>
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
          display: "flex",
          alignItems: "center",
        }}
      >
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
                padding: "0 10px",
              }}
            >
              Delhi,India
            </Typography>
          </>
        )}
      </Box>
      <Button
        sx={{
          marginTop: "15px",
          backgroundColor: "#4045db",
          padding: "5px 28px",
          marginLeft: "6px",
          border: "1px solid red",
        }}
        variant="contained"
      >
        follow
      </Button>
    </Box>
  );
};

export default PostHeader;
