import React, { useState } from "react";
import { Backdrop, Box, Modal, Typography, Fade } from "@material-ui/core";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import { TableContainer, TableHead, Paper } from "@material-ui/core";

const InfoModal = ({ modalRecipe, setModalRecipe }) => {
  // handle null
  if (!modalRecipe) return null;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    maxWidth: "90%",
    bgcolor: "background.paper",
    border: "5px solid #000",
    borderRadius: "20px",
    boxShadow: 15,
    p: 4,
  };

  const handleClose = () => {
    setModalRecipe(null);
  };

  const calories = modalRecipe.calories;
  const scale = modalRecipe.totalWeight / 100;
  const elements = [
    "ENERC_KCAL",
    "PROCNT",
    "FAT",
    "CHOLE",
    "CHOCDF",
    "FIBTG",
    "SUGAR",
    "NA",
    "CA",
    "FE",
    "K",
  ];
  const nutrition = elements.map((e) => {
    return modalRecipe.totalNutrients.e;
  });
  console.log(nutrition);
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
          <Typography id="transition-modal-description" sx={{ mt: 4 }}>
            Top 5 Health Labels:
            {modalRecipe.healthLabels.slice(0, 5).map((label, i) => (
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                {i + 1}. {label}
              </Typography>
            ))}
          </Typography>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Nuitrition</TableCell>
                  <TableCell>Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {nutrition.map((n) => (
                  <TableRow key={n.label}>
                    <TableCell>{n.label}</TableCell>
                    <TableCell>
                      {n.quantity / scale} {n.unit}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Fade>
    </Modal>
  );
};

export default InfoModal;
