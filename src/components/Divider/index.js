import { Divider } from "@mui/material";
import React from "react";

export default function CustomDivider({
  obj,
  className,
  orientation = "vertical",
}) {
  return (
    <Divider
      orientation={orientation}
      variant="middle"
      className={`py-5 ${className}`}
      sx={{
        borderColor: "rgba(145, 158, 171, 0.24)",
        ...obj,
      }}
    />
  );
}
