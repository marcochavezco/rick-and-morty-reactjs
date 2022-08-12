import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import NavIcon from "./NavIcon";
import MuiDrawer from "./MuiDrawer";

const Nav = () => {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between", display: "flex" }}>
          <IconButton sx={{ m: 0.5, mr: 2 }}>
            <NavIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            RICK AND MORTY APP
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              component={NavLink}
              to="/characters"
              variant="text"
              color="inherit"
            >
              Characters
            </Button>
            <Button
              component={NavLink}
              to="/locations"
              variant="text"
              color="inherit"
            >
              Locations
            </Button>
            <Button
              component={NavLink}
              to="/episodes"
              variant="text"
              color="inherit"
            >
              Episodes
            </Button>
          </Stack>
          <Box
            sx={{
              justifyContent: "space-between",
              display: { xs: "flex", md: "none" },
            }}
          >
            <MuiDrawer />
          </Box>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Nav;
