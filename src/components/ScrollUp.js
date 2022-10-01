import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { IconButton } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";

// const useStyles = makeStyles((theme) => ({
//   toTop: {
//     zIndex: 2,
//     position: "fixed",
//     bottom: "3.5vh",
//     backgroundColor: "#DCDCDC",
//     color: "black",
//     "&:hover, &.Mui-focusVisible": {
//       transition: "0.3s",
//       color: "#397BA6",
//       backgroundColor: "#DCDCDC",
//     },
//     [theme.breakpoints.up("xs")]: {
//       right: "5%",
//       backgroundColor: "rgb(220,220,220,0.7)",
//     },
//     [theme.breakpoints.up("lg")]: {
//       right: "2%",
//     },
//   },
// }));

const ScrollUp = ({ showBelow }) => {
  // const classes = useStyles();

  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      setShow(true);
    } else {
      setShow(false);
    }
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
    <div>
      {show && (
        <IconButton
          onClick={handleClick}
          // className={classes.toTop}
          aria-label="to top"
          component="span"
        >
          <ExpandLessIcon />
        </IconButton>
      )}
    </div>
  );
};
export default ScrollUp;
