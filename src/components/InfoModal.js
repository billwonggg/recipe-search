import React, { useState } from "react";
import { Backdrop, Box, Modal, Typography, Fade } from "@material-ui/core";

const InfoModal = ({ modalRecipe, setModalRecipe }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    maxWidth: "90%",
    bgcolor: "background.paper",
    border: "5px solid #000",
    boxShadow: 15,
    p: 4,
  };

  const handleClose = () => {
    setModalRecipe(null);
  };

  if (!modalRecipe) return null;
  const calories = modalRecipe.recipe.calories;

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={true}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={true}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            More Information
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Calories: {Math.ceil(calories)}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default InfoModal;
