import React from "react";
// import SearchBar from "./comps/SearchBar";
import { Box, Grid, Button, Typography, Drawer } from "@mui/material";
import Feed from "./comps/Feed";
import FilterListIcon from "@mui/icons-material/FilterList";
import Sidebar from "./comps/Sidebar";
import { useState } from "react";
import AnimatedPage from "../AnimatedPage";
import { useEffect } from "react";
import { useDbFetch } from "../../context/userContext";

import NavigationBar from "../Home/NavigationBar";
import SearchBar from "./SearchBar/App";
const Jobs = () => {
  const [open, setOpen] = useState(false);
  const { data, loading } = useDbFetch("jobs");
  //state for storing the total jobs that come from firebase
  const [totalJobs, setTotalJobs] = useState([]);
  //state for storing the user selected jobs
  const [filteredJobs, setFilteredJobs] = useState([]);
  //state for storing only 12 cards per page
  const [limitedJobs, setLimitedJobs] = useState([]);
  console.log({ data });

  useEffect(() => {
    if (data) {
      setTotalJobs([...data]);
    }
  }, [data]);

  totalJobs && console.log({ totalJobs });

  const handleFilterClose = () => {
    setOpen(false);
  };
  const handleFilterOpen = () => {
    setOpen(true);
  };
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        padding: {
          xs: "20px",
          sm: "20px",
          md: "20px 40px",
        },
        background: "#f6f7f9",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {open && (
        <AnimatedPage>
          <Drawer open={open} anchor="left">
            <Sidebar
              handleFilterClose={handleFilterClose}
              totalJobs={totalJobs}
              setTotalJobs={setTotalJobs}
              data={data}
            />
          </Drawer>
        </AnimatedPage>
      )}
      {/* <Typography variant="h5">Navbar</Typography> */}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <SearchBar data={data} setTotalJobs={setTotalJobs} />
      </Box>
      <Box
        sx={{
          margin: "10px 0",
          display: {
            xs: "block",
            sm: "block",
            md: "none",
          },
        }}
      >
        <Button
          variant="outlined"
          size="small"
          sx={{
            textTransform: "capitalize",
            marginLeft: {
              xs: "15px",
              sm: "35px",
            },
            position: "relative",
            zIndex: 1,
          }}
          startIcon={<FilterListIcon />}
          onClick={handleFilterOpen}
        >
          Filter Jobs
        </Button>
      </Box>
      <Grid
        container
        sx={{
          width: "100%",
          margin: {
            xs: "5px 0",
            md: "15px 0",
          },
          // background: "#f6f7f9",
        }}
      >
        <Grid
          item
          md={3}
          lg={2}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Sidebar
            totalJobs={totalJobs}
            setTotalJobs={setTotalJobs}
            data={data}
          />
        </Grid>
        <Grid item sm={12} xs={12} md={9} lg={10}>
          <Feed
            data={data}
            loading={loading}
            limitedJobs={limitedJobs}
            setLimitedJobs={setLimitedJobs}
            totalJobs={totalJobs}
            setTotalJobs={setTotalJobs}
            filteredJobs={filteredJobs}
            setFilteredJobs={setFilteredJobs}
          />
        </Grid>
      </Grid>
      <NavigationBar />
    </Box>
  );
};

export default Jobs;
