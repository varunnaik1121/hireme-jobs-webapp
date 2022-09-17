import React from "react";
import {
  Box,
  Stack,
  Pagination,
  Divider,
  Modal,
  Skeleton,
} from "@mui/material";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardComp from "./Card";
const Feed = ({
  data,
  loading,
  limitedJobs,
  setLimitedJobs,
  filteredJobs,
  setFilteredJobs,
  totalJobs,
  setTotalJobs,
}) => {
  const [dummySkeleton, setDummySkeleton] = useState(Array(6).fill(""));

  const minimumCardsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastJob = currentPage * minimumCardsPerPage;
  const indexOfFirstJob = indexOfLastJob - minimumCardsPerPage;

  useEffect(() => {
    if (data) {
      setLimitedJobs(totalJobs?.slice(indexOfFirstJob, indexOfLastJob));
    }
  }, [currentPage, indexOfFirstJob, indexOfLastJob, totalJobs]);

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
      }}
    >
      {loading ? (
        <Skeleton
          width={250}
          height={20}
          variant="rectangular"
          sx={{ margin: "10px 0" }}
        ></Skeleton>
      ) : (
        <Box sx={{ padding: "10px 40px" }}>
          <Typography
            variant="h6"
            fontFamily={`'Poppins', sans-serif`}
            fontWeight={600}
            fontSize={20}
          >
            {totalJobs.length === 0
              ? "No Records Found"
              : `Showing ${totalJobs?.length} jobs`}
          </Typography>
        </Box>
      )}
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
          component={motion.div}
        >
          {" "}
          <AnimatePresence>
            {limitedJobs &&
              limitedJobs.map((job, index) => {
                return (
                  <CardComp
                    key={index}
                    length={data.length}
                    loading={loading}
                    data={job}
                  />
                );
              })}
          </AnimatePresence>
        </Box>

        {limitedJobs?.length > 0 && (
          <Stack
            spacing={2}
            sx={{
              margin: "10px 0",
              padding: "20px",
              width: "100%",
            }}
          >
            <Pagination
              count={
                data ? Math.ceil(limitedJobs?.length / minimumCardsPerPage) : 1
              }
              onChange={(e, pageNumber) => filterPagination(e, pageNumber)}
              size={"medium"}
              color="primary"
              sx={{ margin: "0 auto" }}
            />
          </Stack>
        )}
        <Box color={"black"} sx={{ width: "100%", marginTop: "15px" }}>
          <Divider />
        </Box>
      </Box>
    </Box>
  );
};

export default Feed;
