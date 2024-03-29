import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function Search({ setAllArticles, allArticles, allArticlesBack }) {
  return (
    <Autocomplete
      sx={{ width: 300 }}
      id="custom-input-demo"
      onChange={(event, newValue) => {
        if (newValue === null) setAllArticles(allArticlesBack);
        else {
          let value = allArticles.filter((el) => el.title === newValue);
          const ids = value.map((o) => o.id);
          const filtered = value.filter(
            ({ id }, index) => !ids.includes(id, index + 1)
          );

          setAllArticles(filtered);
        }
      }}
      options={allArticles.map((option) => option.title)}
      freeSolo
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <TextField {...params} label="Buscar artigo..." />
        </div>
      )}
    />
  );
}

export default Search;
