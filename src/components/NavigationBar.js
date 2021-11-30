import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { useSelector } from "react-redux";

const NavigationBar = () => {
  const currentBox = useSelector((state) => state.box.value);
  return (
    <AppBar position="sticky" color="#fff">
      <Toolbar style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h3">{currentBox}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
