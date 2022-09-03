import React, { useState } from "react";
import {
  Card,
  Box,
  Avatar,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Modal,
  duration,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/styles";
import SkeletonComp from "./SkeletonComp";
import { useGlobalUser } from "../../../context/userContext";
import { Link } from "@mui/material";
import { useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { useAuthListener } from "../../../services/firebase";
import { db } from "../../../services/firebase";
import { doc } from "firebase/firestore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FormModal from "./FormModal";
import { motion } from "framer-motion";
import TimeAgo from "javascript-time-ago";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import en from "javascript-time-ago/locale/en";
const CardComp = ({ loading, data }) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const { currentUser } = useAuthListener();
  const { addToFavourites, removeFromFavourites } = useGlobalUser();
  const [myFavourites, setMyFavourites] = useState(null);

  useEffect(() => {
    const docRef = doc(db, `users/${currentUser?.uid}`);

    const unsub = onSnapshot(docRef, (snapshot) => {
      setMyFavourites(snapshot.data().favourites);
    });
    return () => unsub();
  }, []);

  const StyledBox = styled("div")(({ theme }) => ({
    fontSize: 10,
    textAlign: "center",
    fontWeight: "500",
    padding: "5px 10px",
    backgroundColor: "#e2ebfc",
    color: theme.palette.primary.main,
    borderRadius: "20px",
    textTransform: "capitalize",
    margin: "0 6px 0 0px",
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
        padding: "15px 25px 15px 25px",
        // height: "300px",
        boxShadow: "2px 2px 6px rgba(0,0,0,.1)",
        borderRadius: "4px",
        minWidth: {
          xs: "330px",
          sm: "350px",
          md: "360px",
          lg: "360px",
        },
        maxWidth: {
          xs: "330px",
          sm: "350px",
          md: "360px",
          lg: "360px",
        },
        height: "200px",

        margin: "10px 10px",
        "&:hover": {
          boxShadow: "1px 1px  6px rgb(98, 0, 238,.4)",

          transition: "all .2s ease",
        },
      }}
      component={motion.div}
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 0 }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ duration: 0.3 }}
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
          <SkeletonComp variant="rectangular" width={65} height={45} />
        ) : (
          <Avatar
            aria-label="recipe"
            variant="rounded"
            alt="icon"
            sx={{ backgroundColor: "black", width: "44px", height: "44px" }}
            src={data?.companyProfile}
          >
            {!data?.companyProfile && data?.companyName.charAt(0).toUpperCase()}
          </Avatar>
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
              fontSize={14}
              fontWeight={600}
              textTransform={"capitalize"}
              mt={"4px"}
              textAlign={"left"}
              sx={{ color: "text.secondary" }}
            >
              {data?.companyName}
            </Typography>
          )}
        </Box>
        {loading ? (
          <SkeletonComp variant={"circular"} width={30} height={22} />
        ) : myFavourites && myFavourites.includes(data?.id) ? (
          <>
            <Tooltip title="Remove from favourites">
              <IconButton
                size="medium"
                onClick={() => removeFromFavourites(data?.id)}
              >
                <FavoriteIcon fontSize="small" color="error" />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <>
            <Tooltip title="Add to favourites">
              <IconButton
                size="medium"
                onClick={() => addToFavourites(data?.id)}
              >
                <FavoriteBorderIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </>
        )}
      </Box>

      <Box
        sx={{
          // border: "1px solid red",
          // padding: "0 10px 0 5px",
          flex: 1,
          textAlign: "left",
          // border: "1px solid red",
        }}
      >
        {loading ? (
          <SkeletonComp variant={"text"} width={180} height={14} />
        ) : (
          <Link href={`/jobDetails/${data?.id}`} underline="hover">
            <Typography
              variant="h6"
              fontSize={16}
              fontWeight={700}
              component="p"
              textTransform={"capitalize"}
            >
              {data?.title}
            </Typography>
          </Link>
        )}
        {loading ? (
          <SkeletonComp variant={"text"} width={140} height={10} />
        ) : (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              padding: "4px 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "0 0 0 2px",
              }}
            >
              <Typography
                variant="subtitle1"
                component="span"
                sx={{
                  fontSize: 12,
                  fontWeight: "600",
                  color: "text.secondary",
                }}
              >
                {data?.location}
              </Typography>
              <LocationOnOutlinedIcon
                sx={{
                  fontSize: "14px",
                  color: "text.secondary",
                  margin: "0 0 0 5px",
                }}
              />
            </Box>
            <Typography
              variant="h6"
              component={"span"}
              sx={{
                fontSize: "10px",
                fontWeight: "600",
                marginLeft: "4px",
                color: "success.main",
                textTransform: "lowercase",
              }}
            >
              {" "}
              {timeAgo.format(data?.timestamp.seconds * 1000)}
            </Typography>
          </Box>
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
            <StyledBox>{data?.workLevel}</StyledBox>
          )}
          {loading ? (
            <SkeletonComp variant={"text"} width={60} height={24} />
          ) : (
            <StyledBox>{data?.workType}</StyledBox>
          )}
          {loading ? (
            <SkeletonComp variant={"text"} width={60} height={24} />
          ) : (
            <StyledBox>
              Sal :{" "}
              <span>
                {data?.salary.toString().toLowerCase() == "none"
                  ? "--"
                  : data?.salary}
              </span>
            </StyledBox>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "8px",
        }}
      ></Box>
      <FormModal />
    </Card>
  );
};

export default CardComp;

{
  /* <Box sx={{ display: "flex" }}>
{loading ? (
  <SkeletonComp variant={"text"} width={70} height={18} />
) : (
  <>
    {/* <Typography
      variant="h6"
      component={"span"}
      fontSize={12}
      fontWeight={600}
      sx={{ color: "primary.main" }}
    >
      New
    </Typography> */
}

//   </>
// )}
// </Box> */}

// {loading ? (
//   <SkeletonComp variant={"text"} width={120} height={35} />
// ) : (
//   <Button
//     variant="contained"
//     size="small"
//     sx={{
//       textTransform: "capitalize",
//       minWidth: "120px",
//       fontWeight: "600",
//       fontSize: 12,
//     }}
//     onClick={openApplyModal}
//   >
//     Apply Now
//   </Button>
// )}

// {loading ? (
//   <SkeletonComp variant={"text"} width={120} height={35} />
// ) : (
//   <Link href={`jobDetails/${data?.id}`} underline="none">
//     <Button
//       variant="contained"
//       size="small"
//       sx={{
//         textTransform: "capitalize",
//         minWidth: "120px",
//         fontWeight: "600",
//         padding: "5px",
//         fontSize: 12,
//         flex: 1,
//       }}
//     >
//       View More
//     </Button>
//   </Link>
// )}
