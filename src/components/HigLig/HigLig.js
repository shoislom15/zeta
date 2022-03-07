import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

const locations = [
  {
    title: "New York City",
  },
  {
    title: "York City",
  },
  {
    title: "Marcell",
  },
  {
    title: "London",
  },
  {
    title: "Manchester",
  },
  {
    title: "Moscow",
  },
  {
    title: "Manchester",
  },
  {
    title: "Tashkent",
  },
];

export default function HigLig({ obj, placeholder }) {
  return (
    <Autocomplete
      id="highlights-demo"
      sx={{ flex: 1, ...obj }}
      aria-label="none"
      options={locations}
      getOptionLabel={(option) => option.title}
      color="primary"
      renderInput={(params) => (
        <TextField
          {...params}
          InputLabelProps={{ shrink: false }}
          margin="normal"
          placeholder={placeholder}
          sx={{
            "& fieldset": {
              border: "none",
              bgcolor: "#F6F7F8",
              zIndex: -10,
              borderRadius: "8px",
            },
            "& MuiInputLabel-formControl": { display: "none" },
          }}
        />
      )}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.title, inputValue);
        const parts = parse(option.title, matches);

        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
    />
  );
}
