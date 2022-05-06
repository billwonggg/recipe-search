import React from "react";
import { Backdrop, Box, Modal, Fade } from "@material-ui/core";
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
    width: "500px",
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

  const scale = modalRecipe.totalWeight / 100;
  const elements = [
    "ENERC_KCAL",
    "PROCNT",
    "FAT",
    "CHOCDF",
    "SUGAR",
    "CHOLE",
    "FIBTG",
    "NA",
    "CA",
    "K",
  ];
  const nutrition = elements.map((e) => {
    return modalRecipe.totalNutrients[e];
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
          <Box sx={{ fontSize: 35 }}>More Information</Box>
          <Box sx={{ fontSize: 18, mt: 2 }}>
            Dish Type: {modalRecipe.dishType[0] ?? "Normal Dish"}
          </Box>

          <Box sx={{ fontSize: 18, mt: 2 }}>
            Top 5 Health Labels:
            <ol style={{ fontSize: 14 }}>
              {modalRecipe.healthLabels.slice(0, 5).map((label) => (
                <li>{label}</li>
              ))}
            </ol>
          </Box>
          <Box sx={{ fontSize: 23, mt: 3 }}>
            Nuitrition Information
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 500 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="right">Avg. Quantity per 100g</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {nutrition.map((n) => (
                    <TableRow key={n.label} align="right">
                      <TableCell>{n.label}</TableCell>
                      <TableCell align="right">
                        {(n.quantity / scale).toFixed(1)} {n.unit}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default InfoModal;
