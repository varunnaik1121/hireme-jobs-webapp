import React from "react";
import "./App.css";
import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import useDebounce from "../../../Hooks/useDebounce";
import { useState } from "react";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { SearchOffOutlined } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

function App({ data, setTotalJobs }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedTerm = useDebounce(searchTerm, 500);
  console.log({ data });
  console.log({ debouncedTerm });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (debouncedTerm) {
      setIsSearching(true);
      let tempResults = [];
      data.forEach((job) => {
        if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          tempResults.push(job.title);
        }
      });

      setResults([...new Set(tempResults)]);
    } else {
      setResults([]);
      setIsSearching(false);
      setTotalJobs(data);
    }
  }, [debouncedTerm]);

  const filterJobsBasedOnSearch = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    const filtered = data?.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTotalJobs(filtered);
  };

  console.log({ results });
  return (
    <Box
      sx={{
        width: "100%",
        margin: "15px auto",
        position: "relative",
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: {
            xs: "100%",
            sm: "70%",
            md: "55%",
          },
          height: {
            xs: "45px",
            sm: "50px",
            md: "50px",
          },
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Box
          component={"form"}
          sx={{ width: "100%", height: "100%", position: "relative" }}
          onSubmit={(e) => filterJobsBasedOnSearch(e)}
        >
          <Box
            component={"input"}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              padding: "10px 20px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              boxShadow: "1px 1px 4px rgba(0,0,0,.1)",
              background: "#fff",
            }}
            placeholder="Search Jobs here"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            onClick={() => setIsModalOpen(true)}
            value={searchTerm}
          ></Box>
          <IconButton
            sx={{
              position: "absolute",
              right: {
                xs: "20%",
                sm: "16%",
                md: "16%",
              },
              zIndex: 10000,

              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={() => setSearchTerm("")}
          >
            <CloseIcon />
          </IconButton>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              borderRadius: 0,
              display: {
                xs: "none",
                sm: "block",
                md: "block",
              },
            }}
            type="submit"
          >
            Find Job
          </Button>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              borderRadius: 0,
              display: {
                xs: "block",
                sm: "none",
                md: "none",
              },
            }}
            type="submit"
            endIcon={<SearchIcon />}
          ></Button>
        </Box>
        <Card
          sx={{
            position: "absolute",
            top: "55px",
            width: "100%",
            // border: "1px solid red",
            left: 0,
            background: "#fff",
            transition: "all .3s",

            borderRadius: "0 0 6px 6px",
          }}
          component="div"
        >
          {isModalOpen &&
            results?.map((result, index) => {
              return (
                <Box
                  sx={{
                    textAlign: "left",
                    padding: "10px 25px",
                    "&:hover": {
                      bgcolor: "#f6f7f9",
                      cursor: "pointer",
                    },
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  component="span"
                  key={index}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      flex: 1,

                      padding: "5px",
                    }}
                    onClick={(e) => {
                      setSearchTerm(e.target.textContent);
                      setIsSearching(false);
                      setIsModalOpen(false);
                    }}
                  >
                    {result}
                  </Typography>
                </Box>
              );
            })}
          {isSearching && results.length === 0 && (
            <Box
              sx={{
                textAlign: "left",
                padding: "10px 25px",
                "&:hover": {
                  bgcolor: "#f6f7f9",
                  cursor: "pointer",
                },
                display: "flex",
                justifyContent: "space-between",
              }}
              component="p"
            >
              <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                No jobs found
              </Typography>
            </Box>
          )}

          {/* <Box
            sx={{
              textAlign: "left",
              padding: "10px 25px",
            }}
            component="p"
          >
            web
          </Box> */}
        </Card>
      </Box>
    </Box>
  );
}

export default App;
