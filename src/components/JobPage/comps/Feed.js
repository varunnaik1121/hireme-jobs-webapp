import React from "react";
import { Box, Stack, Pagination, Divider, Modal } from "@mui/material";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import CardComp from "./Card";
const Feed = ({ data, loading }) => {
  const [dummySkeleton, setDummySkeleton] = useState(Array(6).fill(""));

  const minimumCardsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastJob = currentPage * minimumCardsPerPage;
  const indexOfFirstJob = indexOfLastJob - minimumCardsPerPage;
  const [currentCards, setCurrentCards] = useState([]);

  useEffect(() => {
    setCurrentCards(data.slice(indexOfFirstJob, indexOfLastJob));
  }, [currentPage, indexOfFirstJob, indexOfLastJob, data]);

  const filterPagination = (e, page) => {
    setCurrentPage(parseInt(page));
  };
  return (
    <Box
      sx={{
        padding: "0 20px",
        display: "flex",
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "center",
          lg: "flex-start",
        },
        flexDirection: "column",
        alignItems: {
          xs: "center",
          sm: "center",
          md: "flex-start",
          lg: "flex-start",
        },
        // border: "1px solid red",
      }}
    >
      <Box sx={{ padding: "10px 40px" }}>
        <Typography
          variant="h6"
          fontFamily={`'Poppins', sans-serif`}
          fontWeight={600}
          fontSize={20}
        >{`Showing ${data.length} jobs`}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            xs: "center",
            md: "center",
            lg: "flex-start",
          },
          alignItems: "center",
        }}
      >
        {loading &&
          dummySkeleton.map((item, index) => {
            return <CardComp key={index} loading={loading} />;
          })}
        {currentCards &&
          currentCards.map((job, index) => {
            return (
              <CardComp
                key={index}
                length={data.length}
                loading={loading}
                data={job}
              />
            );
          })}
        <Stack
          spacing={2}
          sx={{ margin: "10px 0", padding: "20px", width: "100%" }}
        >
          <Pagination
            count={data ? Math.ceil(data.length / minimumCardsPerPage) : 1}
            onChange={(e, pageNumber) => filterPagination(e, pageNumber)}
            size={"medium"}
            color="primary"
            sx={{ margin: "0 auto" }}
          />
        </Stack>
        <Box color={"black"} sx={{ width: "100%", marginTop: "15px" }}>
          <Divider />
        </Box>
      </Box>
     
    </Box>
  );
};

export default Feed;
