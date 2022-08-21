import React from "react";
import SearchBar from "./comps/SearchBar";
import { Box, Grid, Button, Typography, Drawer } from "@mui/material";
import Feed from "./comps/Feed";
import FilterListIcon from "@mui/icons-material/FilterList";
import Sidebar from "./comps/Sidebar";
import { useState } from "react";
import AnimatedPage from "../AnimatedPage";

const Jobs = () => {
  const [open, setOpen] = useState(false);

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
            <Sidebar handleFilterClose={handleFilterClose} />
          </Drawer>
        </AnimatedPage>
      )}
      <Typography variant="h5">Navbar</Typography>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <SearchBar />
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
          sx={{ textTransform: "capitalize" }}
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
          <Sidebar />
        </Grid>
        <Grid item sm={12} xs={12} md={9} lg={10}>
          <Feed />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Jobs;
