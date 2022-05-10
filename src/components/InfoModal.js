import React from "react";
import { Backdrop, Box, Modal, Fade } from "@material-ui/core";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import { TableContainer, TableHead, Paper } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const InfoModal = ({ modalRecipe, setModalRecipe }) => {
  // handle null
  if (!modalRecipe) return null;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    maxHeight: "70%",
    maxWidth: "90%",
    bgcolor: "background.paper",
    overflowX: "hidden",
    boxShadow: 15,
    p: 4,
    overflow: "scroll",
  };

  const handleClose = () => {
    setModalRecipe(null);
  };

  const title = modalRecipe.label;
  const img = modalRecipe.image;
  const dishType = modalRecipe.dishType[0] ?? "Main course";
  const capatalisedDish = dishType.charAt(0).toUpperCase() + dishType.slice(1);
  const cuisine = String(modalRecipe.cuisineType);
  const capatalisedCuisine = cuisine.charAt(0).toUpperCase() + cuisine.slice(1);
  const ingredients_list = modalRecipe.ingredients.map((ig) => ig.text);
  const unique_ingredients = [...new Set(ingredients_list)];
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
        timeout: 1000,
      }}
    >
      <Fade in={true}>
        <Box sx={style}>
          <Box sx={{ fontSize: 35, textAlign: "center" }}>
            <strong>{title}</strong>
          </Box>
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <img src={img} alt="" />
          </Box>

          <Box sx={{ fontSize: 18, mt: 2, textAlign: "center" }}>
            {capatalisedCuisine} Cuisine
          </Box>
          <Box sx={{ fontSize: 18, mt: 2 }}>Dish Type: {capatalisedDish}</Box>

          <Box sx={{ fontSize: 18, mt: 2 }}>
            Top Health Labels:
            <ol style={{ fontSize: 14 }}>
              {modalRecipe.healthLabels.slice(0, 5).map((label) => (
                <li>{label}</li>
              ))}
            </ol>
          </Box>
          <Box sx={{ fontSize: 18, mt: 2 }}>
            Ingredients:
            <ul key={title + "_ig"} style={{ fontSize: 14 }}>
              {unique_ingredients.map((ig, i) => (
                <li key={title + "_ig" + i}>{ig}</li>
              ))}
            </ul>
          </Box>
          <Box sx={{ fontSize: 23, mt: 3 }}>
            Nuitrition Information
            <TableContainer
              component={Paper}
              style={{ border: "2px solid black", marginTop: "3px" }}
            >
              <Table
                sx={{ minWidth: 500 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow style={{ backgroundColor: "#434343" }}>
                    <TableCell></TableCell>
                    <TableCell style={{ color: "white" }} align="right">
                      <strong>Avg. Quantity per 100g</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {nutrition.map((n, i) => (
                    <TableRow
                      key={n.label}
                      align="right"
                      style={
                        i % 2
                          ? { backgroundColor: "#f7f7f7" }
                          : { backgroundColor: "#e4e4e4" }
                      }
                    >
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
          <IconButton
            style={{
              display: "block",
              position: "absolute",
              top: "12px",
              right: "12px",
            }}
            color="secondary"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Fade>
    </Modal>
  );
};

export default InfoModal;
