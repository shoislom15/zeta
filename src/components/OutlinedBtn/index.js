import { Button } from "@mui/material";
import React from "react";

export default function CustomBtn({
  variant,
  obj,
  children,
  scrollClass,
  onClick,
}) {
  console.log(variant);
  const additional = {
    borderColor:
      variant === "outlined" ? "rgba(145, 158, 171, 0.24)" : "transparent",
    backgroundColor: variant === "outlined" ? "none" : "#fa541c",
    borderRadius: "8px",
    fontWeight: "600",
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.875rem",
    p: "5px 15px",
    boxShadow: "none",
    "&:hover": {
      borderColor: variant === "outlined" && `black`,
      backgroundColor: variant === "contained" && "#B3200E",
      boxShadow: "none",
    },
  };

  return (
    <Button
      onClick={() => {
        onClick();
      }}
      variant={variant}
      sx={{ textTransform: "capitalize", ...additional, ...obj }}
    >
      {children}
    </Button>
  );
}
