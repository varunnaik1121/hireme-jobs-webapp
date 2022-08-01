import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useState, useEffect } from "react";
import { auth } from "../../../../services/firebase";
import { collection, addDoc } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../../services/firebase";
import { serverTimestamp } from "firebase/firestore";
import TextBox from "../TextBox";
import Loading from "../../../Loading/Loading";
import { useGlobalUser } from "../../../../context/userContext";

const Step3 = ({ formDetails, onChange, handlePrevClick }) => {
  const [images, setImages] = useState([]);
  const { setIsFormSubmitted } = useGlobalUser();
  const USER_ID = auth.currentUser.uid;
  const [loading, setLoading] = useState(false);
  const collectionRef = collection(db, "requests");

  const handleImageChanges = (e) => {
    const files = e.target.files;

    if (files) {
      let tempImages = [];
      for (let i = 0; i < files.length; i++) {
        tempImages.push(files[i]);
      }
      setImages(tempImages);
    } else {
      return;
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const promises = [];

    for (var i = 0; i < images.length; i++) {
      // files.values contains all the files objects
      const file = images[i];

      const storageRef = ref(storage, `images/${file.name}`);

      promises.push(
        uploadBytes(storageRef, file).then((uploadResult) => {
          return getDownloadURL(uploadResult.ref);
        })
      );
    }
    console.log(promises);

    const photos = await Promise.all(promises);

    await console.log(photos);
    const payload = {
      name: formDetails.name,
      headquatar: formDetails.headquatar,
      about: formDetails.about,
      benefits: formDetails.benefits,
      industry: formDetails.industry,
      website: formDetails.website,
      type: formDetails.type,
      specialities: formDetails.specialities,
      timestamp: serverTimestamp(),
      isVerified: false,
      images: photos,
      companyId: USER_ID,
      status: "pending",
    };
    await addDoc(collectionRef, payload);
    setIsFormSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "30px 0",
          flexDirection: "column",
          padding: "10px 15px",
        }}
      >
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <Typography variant="subtitle1" sx={{ margin: "0 10px" }}>
            upload images
          </Typography>
          <input
            hidden
            accept="image/*"
            type="file"
            multiple
            onChange={handleImageChanges}
          />
          <PhotoCameraIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            margin: "6px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {images &&
            images.map((image, index) => {
              return (
                <Card
                  sx={{ minWidth: 50, maxWidth: 70, margin: "2px 4px" }}
                  key={index}
                  elevation={0}
                >
                  <CardMedia
                    component="img"
                    height={50}
                    image={URL.createObjectURL(image)}
                    alt="Paella dish"
                  ></CardMedia>
                </Card>
              );
            })}
        </Box>
        <TextBox
          name={"website"}
          value={formDetails.website}
          onChange={onChange}
          label={"website link"}
        />

        <Box sx={{ padding: "20px" }}>
          <Button onClick={handlePrevClick}>Back</Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={loading}
            sx={{ minWidth: "100px" }}
          >
            {loading ? (
              <Loading height={25} width={30} color={"#8f44fd"} />
            ) : (
              "submit"
            )}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Step3;
