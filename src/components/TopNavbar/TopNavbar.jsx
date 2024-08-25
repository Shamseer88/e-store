import React from "react";
import Logo from "../Logo/Logo";
import { AppBar, Box, Button, Link, Toolbar } from "@mui/material";
import BoyOutlinedIcon from "@mui/icons-material/BoyOutlined";
import GirlOutlinedIcon from "@mui/icons-material/GirlOutlined";

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
            <Button
              color="inherit"
              variant="outlined"
              sx={{ padding: "3px 15px" }}
              startIcon={<BoyOutlinedIcon />}
            >
              Men
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              sx={{ padding: "3px 15px" }}
              endIcon={<GirlOutlinedIcon />}
            >
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
