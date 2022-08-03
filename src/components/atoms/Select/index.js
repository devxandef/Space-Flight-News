import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function Select({ allArticles, setAllArticles }) {
  return (
    <Autocomplete
      onChange={(event, newValue) => {
        let rev = allArticles;
        if (newValue === null) setAllArticles(allArticles);
        else {
          if (newValue === "Mais novas") {
            setAllArticles(allArticles);
          } else {
            if (newValue === "Mais antigas") {
              let reveresed = [...rev].reverse();
              setAllArticles(reveresed);
            }
          }
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
