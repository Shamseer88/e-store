import React from "react";
import Logo from "../Logo/Logo";
import { AppBar, Box, Button, Link, Toolbar } from "@mui/material";

const TopNavbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Logo />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              gap: "10px",
            }}
          >
            <Button color="inherit" variant="outlined">
              Men
            </Button>
            <Button color="inherit" variant="outlined">
              Women
            </Button>
          </Box>
          <Link href="#" color="inherit" underline="none">
            Contact Us
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopNavbar;
