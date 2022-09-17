import React, { useState } from "react";
import {
  Card,
  Box,
  Avatar,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/styles";
import SkeletonComp from "./SkeletonComp";
import { useGlobalUser } from "../../../context/userContext";
import { Link } from "@mui/material";
import { useEffect } from "react";
import { onSnapshot, setDoc } from "firebase/firestore";

import { db } from "../../../services/firebase";
import { Menu, MenuItem } from "@mui/material";
import { doc, collection, getDocs, arrayRemove } from "firebase/firestore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FormModal from "./FormModal";
import { motion } from "framer-motion";
import TimeAgo from "javascript-time-ago";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import en from "javascript-time-ago/locale/en";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const CardComp = ({ loading, data, isOwner }) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const { currentUser, deleteDataById } = useGlobalUser();
  const { addToFavourites, removeFromFavourites } = useGlobalUser();
  const [myFavourites, setMyFavourites] = useState(null);
  const [users, setUsers] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const docRef = doc(db, `users/${currentUser?.uid}`);

    const unsub = onSnapshot(docRef, (snapshot) => {
      setMyFavourites(snapshot.data().favourites);
    });
    return () => unsub();
  }, []);

  console.log({ data });

  useEffect(() => {
    const collectionRef = collection(db, "users");
    getDocs(collectionRef).then((data) => {
      console.log("this is favourites array");
      setUsers(data?.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  console.log({ myFavourites });
  const removeAllJobReferences = (jobId) => {
    if (users) {
      const promises = [];
      users.forEach((user) => {
        const docRef = doc(db, `users/${user?.id}`);
        const tempPromise = setDoc(
          docRef,
          { favourites: arrayRemove(jobId) },
          { merge: true }
        );
        promises.push(tempPromise);
      });
      Promise.all(promises).then((snapshot) => {
        console.log(snapshot);
      });
    }
  };

  const handleJobDelete = () => {
    removeAllJobReferences(data?.id);
    deleteDataById(data?.id, "jobs", handleClose, "job removed successfully");
  };

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
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "15px 25px 15px 25px",

        boxShadow: "2px 2px 6px rgba(0,0,0,.1)",
        borderRadius: "4px",
        minWidth: {
          xs: "340px",
          sm: "350px",
          md: "360px",
          lg: "360px",
        },
        maxWidth: {
          xs: "340px",
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
            {data?.companyName.charAt(0).toUpperCase()}
          </Avatar>
        )}
        <Box
          sx={{
            padding: "5px 10px 0 20px",
            width: "100%",
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
          flex: 1,
          textAlign: "left",
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
              component="span"
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
      {isOwner && (
        <div>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
            size="small"
          >
            <MoreVertIcon fontSize="small" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={handleJobDelete}
              sx={{
                padding: "4px 10px",
                fontSize: 12,
                fontWeight: 600,
                color: "palette.error.main",
              }}
            >
              delete{" "}
            </MenuItem>
          </Menu>
        </div>
      )}
    </Card>
  );
};

export default CardComp;
