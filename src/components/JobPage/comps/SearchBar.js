import { Box, Button, IconButton, styled, Typography } from "@mui/material";
import * as React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
    { title: "City of God", year: 2002 },
    { title: "Se7en", year: 1995 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: "Life Is Beautiful", year: 1997 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Léon: The Professional", year: 1994 },
    { title: "Spirited Away", year: 2001 },
    { title: "Saving Private Ryan", year: 1998 },
    { title: "Once Upon a Time in the West", year: 1968 },
    { title: "American History X", year: 1998 },
    { title: "Interstellar", year: 2014 },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: {
          xs: "100%",
          md: "70%",
        },

        position: "relative",
      }}
    >
      <Autocomplete
        multiple
        id="jobs"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        renderOption={(props, option, { selected }) => (
          <li
            {...props}
            style={{ fontWeight: 400, letterSpacing: 0, fontSize: 14 }}
            value={option.title}
          >
            {option.title}
          </li>
        )}
        sx={{
          width: "80%",
        }}
        size="medium"
        renderInput={(params) => (
          <TextField
            {...params}
            label="search jobs"
            placeholder=""
            sx={{ fontWeight: 600, fontSize: 12 }}
          />
        )}
        onChange={(e, value) => console.log(value)}
      />
      <Box
        sx={{
          background: "primary.main",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            padding: "12px",
            borderRadius: "0",
            display: {
              xs: "block",
              md: "none",
            },
          }}
        >
          <SearchIcon fontSize="medium" />
        </Button>
        <Button
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
            },
            padding: "15px",
            borderRadius: "0",
            textTransform: "capitalize",
          }}
          variant="contained"
        >
          Find Job
        </Button>
      </Box>
    </Box>
  );
};

export default SearchBar;
