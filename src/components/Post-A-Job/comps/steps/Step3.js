import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useState, useEffect } from "react";

const Step3 = ({ formDetails, onChange, handleNext, handlePrevClick }) => {
  const [comapanyImages, setCompanyImages] = useState([]);
  const handleImageChanges = (e) => {
    const files = e.target.files;

    if (files) {
      let tempImages = [];
      for (let i = 0; i < files.length; i++) {
        tempImages.push(files[i]);
      }
      setCompanyImages(tempImages);
    } else {
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  useEffect(() => {
    console.log(comapanyImages);
  }, [comapanyImages]);

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
        <Paper
          sx={{
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
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
            {comapanyImages &&
              comapanyImages.map((image, index) => {
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

          <Box sx={{ padding: "20px" }}>
            <Button onClick={handlePrevClick}>Back</Button>
            <Button variant="contained" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Step3;
