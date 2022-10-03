import { Skeleton, Stack } from "@mui/material";
import React from "react";

const RecipeSkeleton = () => {
  return Array.from({ length: 4 }, (_, i) => (
    <Stack spacing={1} key={i} marginLeft="5%" marginRight="5%">
      <Skeleton variant="text" sx={{ height: "8vh" }} />
      <Skeleton variant="rounded" sx={{ maxWidth: "700px", width: "90vw", height: "30vh" }} />
    </Stack>
  ));
};

export default RecipeSkeleton;
