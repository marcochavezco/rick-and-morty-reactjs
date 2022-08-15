import React from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  minWidth: 275,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalDetail = props => {
  const {
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
  } = useSelector(state => state.characters.focusedCharacter);

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Card sx={style}>
          <CardActions edge="start">
            <IconButton size="small" onClick={props.onClose}>
              <ArrowBackIosIcon />
            </IconButton>
          </CardActions>
          <CardMedia
            sx={{ objectFit: "contain" }}
            component="img"
            height="200"
            image={image}
            alt={name}
          ></CardMedia>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {status}
            </Typography>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {`${species}${type ? `,${type}` : ""}`}
            </Typography>
            <Typography variant="body2">
              {`Location: ${location.name}`}
              <br />
              {`Origin: ${origin.name}`}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default ModalDetail;
