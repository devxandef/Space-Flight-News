import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function Select({ setOption }) {
  return (
    <Autocomplete
      onChange={(event, newValue) => setOption(newValue)}
      id="disabled-options-demo"
      options={["Mais novas", "Mais antigas"]}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={"Filtrar"} />}
    />
  );
}

export default Select;
