import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/system";
import React, { useEffect, useState } from "react";

const ScrollUp = ({ showBelow }) => {
  const [show, setShow] = useState(true);
  const theme = useTheme();

  const styles = {
    zIndex: 10,
    position: "fixed",
    right: "2%",
    bottom: "3.5vh",
    backgroundColor: "#DCDCDC",
    color: "black",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#397BA6",
      backgroundColor: "#DCDCDC",
    },
    [theme.breakpoints.up("xs")]: {
      right: "5%",
      backgroundColor: "rgb(220,220,220,0.7)",
    },
    [theme.breakpoints.up("lg")]: {
      right: "2%",
    },
  };

  const handleScroll = () => {
    setShow(window.pageYOffset > showBelow);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  return (
    show && (
      <IconButton onClick={handleClick} sx={styles} aria-label="to top" component="span">
        <ExpandLessIcon />
      </IconButton>
    )
  );
};
export default ScrollUp;
