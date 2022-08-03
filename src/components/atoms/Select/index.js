import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function Select({ allArticles, setAllArticles }) {
  return (
    <Autocomplete
      onChange={(event, newValue) => {
        if (newValue === "Mais novas") {
          const sortedDesc = allArticles.sort(
            (objA, objB) =>
              new Date(objB.publishedAt) - new Date(objA.publishedAt)
          );
          setAllArticles(sortedDesc);
        }
        if (newValue === "Mais antigas") {
          const sortedDesc = allArticles.sort(
            (objA, objB) =>
              new Date(objA.publishedAt) - new Date(objB.publishedAt)
          );
          setAllArticles(sortedDesc);
        }
      }}
      id="disabled-options-demo"
      options={["Mais antigas", "Mais novas"]}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={"Filtrar"} />}
    />
  );
}

export default Select;
