import React,{useState} from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
export default function StarRating() {
  const [value, setValue] = useState(3);
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      {/* <Typography component="legend">Read only</Typography> */}
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}