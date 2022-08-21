import React from "react";
import { Box } from "@mui/system";
import {
  ButtonGroup,
  IconButton,
  Tooltip,
  Typography,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const PostHeader = () => {
  return (
    <Box sx={{ width: "100%", marginTop: "30px" }}>
      <Box
        sx={{
          width: "100%",
          border: "1px solid red",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 24px",
        }}
      >
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
              <ShareIcon fontSizes="small" />
            </IconButton>
          </Tooltip>
        </ButtonGroup>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px 25px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            component={"span"}
            sx={{
              color: "primary.main",
              fontSize: "14px",
              fontWeight: "700",
              marginRight: "10px",
            }}
          >
            Microsoft
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              Delhi,india
            </Typography>
            <LocationOnIcon fontSize="small" sx={{ color: "text.secondary" }} />
          </Box>
        </Box>
        <Typography variant="h6" fontSize={12} textTransform="none">
          Posted
          <Box component={"span"} sx={{ color: "text.secondary" }}>
            &nbsp;8 days ago
          </Box>
        </Typography>
      </Box>
      <ButtonGroup variant="text" aria-label="text button group" size="large">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Box>
  );
};

export default PostHeader;
