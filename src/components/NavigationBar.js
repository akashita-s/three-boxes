import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { useSelector } from "react-redux";

const NavigationBar = () => {
  const currentBox = useSelector((state) => state.box.value);
  return (
    <AppBar position="sticky" color="#fff" style={{zIndex: 100, backgroundColor: 'black'}}>
      <Toolbar style={{ display: "flex", justifyContent: "center", zIndex: 100, width: '100%' }}>
        <Typography style={{color: 'white'}} variant="h3">{currentBox}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
