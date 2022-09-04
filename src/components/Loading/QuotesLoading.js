import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Loading from "./Loading";

const QuotesLoading = () => {
  const quotesArr = [
    {
      quote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: " Martin Fowler",
    },
    {
      quote:
        "When to use iterative development? You should use iterative development only on projects that you want to succeed",
      author: "Martin Fowler",
    },
  ];
  console.log(Math.floor(Math.random() * quotesArr.length));

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography>
        {quotesArr[Math.floor(Math.random() * quotesArr.length)]?.quote}
      </Typography>
      <Loading width={40} height={40} color="#4045db" />
    </Box>
  );
};

export default QuotesLoading;
