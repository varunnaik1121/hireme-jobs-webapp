import React, { useState } from "react";
import {
  Card,
  Box,
  Avatar,
  Typography,
  Button,
  IconButton,
  Paper,
  Tooltip,
  Skeleton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/styles";
import SkeletonComp from "./SkeletonComp";
const CardComp = ({ length }) => {
  const [loading, setLoading] = useState(true);
  const StyledBox = styled("div")(({ theme }) => ({
    // border: "2px solid red",
    fontSize: 10,
    textAlign: "center",
    fontWeight: "500",
    padding: "4px 8px",
    backgroundColor: "#e2ebfc",
    color: theme.palette.primary.main,
    borderRadius: "20px",
    textTransform: "capitalize",
    margin: "0 6px 0 -2px",
    minWdith: "70px",
  }));

  return (
    <Card
      elevation={0}
      sx={{
        // width: "280px",
        // border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        padding: "15px 25px 25px 25px",
        // height: "300px",
        boxShadow: "1px 1px 4px rgba(0,0,0,.1)",
        borderRadius: "10px",
        minWidth: {
          xs: "340px",
          sm: "340px",
          md: "360px",
          lg: "360px",
        },

        margin: "10px 10px",
        "&:hover": {
          boxShadow: "1px 1px  6px rgb(98, 0, 238,.4)",

          transition: "all .2s ease",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          margin: "10px 0",
          justifyContent: "space-between",
          // border: "1px solid red",
        }}
      >
        {loading ? (
          <SkeletonComp variant="circular" width={65} height={45} />
        ) : (
          <Avatar
            aria-label="recipe"
            variant="circle"
            alt="icon"
            sx={{ backgroundColor: "black", width: "44px", height: "44px" }}
            src="https://images.unsplash.com/photo-1635821410579-baa223cff5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          ></Avatar>
        )}
        <Box
          sx={{
            padding: "5px 10px 0 20px",
            width: "100%",

            // border: "1px solid red",
          }}
        >
          {loading ? (
            <SkeletonComp variant={"text"} width={120} height={20} />
          ) : (
            <Typography
              fontSize={16}
              fontWeight={700}
              textTransform={"capitalize"}
            >
              Microsoft
            </Typography>
          )}
        </Box>
        {loading ? (
          <SkeletonComp variant={"circular"} width={30} height={22} />
        ) : (
          <Tooltip title="bookmark">
            <IconButton size="medium">
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </Box>
      <Box
        sx={{
          // border: "1px solid red",
          // padding: "0 10px 0 5px",
          flex: 1,
          // border: "1px solid red",
        }}
      >
        {loading ? (
          <SkeletonComp variant={"text"} width={180} height={14} />
        ) : (
          <Typography
            variant="h6"
            fontSize={14}
            fontWeight={700}
            textTransform={"capitalize"}
          >
            Web Developement
          </Typography>
        )}
        {loading ? (
          <SkeletonComp variant={"text"} width={140} height={10} />
        ) : (
          <Typography
            variant="subtitle1"
            component="span"
            sx={{ fontSize: 12, fontWeight: "600", color: "text.secondary" }}
          >
            Caifornia, India
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          // border: "1px solid red",
          alignItems: "center",
        }}
      >
        <Box
          m={"10px 0 8px 0"}
          sx={{
            display: "flex",
            alignItems: "flex-start",

            // border: "1px solid red",
          }}
        >
          {loading ? (
            <SkeletonComp variant={"text"} width={60} height={24} />
          ) : (
            <StyledBox>Mid Level</StyledBox>
          )}
          {loading ? (
            <SkeletonComp variant={"text"} width={60} height={24} />
          ) : (
            <StyledBox>Part Time</StyledBox>
          )}
          {loading ? (
            <SkeletonComp variant={"text"} width={60} height={24} />
          ) : (
            <StyledBox>
              Sal : <span>10k</span>-<span>50k</span>
            </StyledBox>
          )}
        </Box>
        <Box sx={{ display: "flex" }}>
          {loading ? (
            <SkeletonComp variant={"text"} width={70} height={18} />
          ) : (
            <>
              <Typography
                variant="h6"
                component={"span"}
                fontSize={12}
                fontWeight={600}
                sx={{ color: "primary.main" }}
              >
                New
              </Typography>
              <Typography
                variant="h6"
                component={"span"}
                sx={{
                  fontSize: "12px",
                  fontWeight: "600px",
                  marginLeft: "4px",
                  color: "text.secondary",
                }}
              >
                {" "}
                12d
              </Typography>
            </>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "8px",
        }}
      >
        {loading ? (
          <SkeletonComp variant={"text"} width={120} height={35} />
        ) : (
          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "capitalize",
              minWidth: "120px",
              fontWeight: "600",
              fontSize: 12,
            }}
          >
            Apply Now
          </Button>
        )}
        {loading ? (
          <SkeletonComp variant={"text"} width={120} height={35} />
        ) : (
          <Button
            variant="outlined"
            size="small"
            sx={{
              textTransform: "capitalize",
              minWidth: "120px",
              fontWeight: "600",
              padding: "5px",
              fontSize: 12,
              backgroundColor: "#f6f7f9",
            }}
          >
            View More
          </Button>
        )}
      </Box>
      <Box></Box>
    </Card>
  );
};

export default CardComp;
