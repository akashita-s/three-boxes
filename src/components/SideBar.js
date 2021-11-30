import React from "react";
import { Typography, Drawer, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/color";

const SideBar = ({xpos, ypos}) => {
  const currentBox = useSelector((state) => state.box.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Drawer variant="permanent" anchor="right">
        <Typography variant="h6" style={{ margin: "50px" }}>
          Position of the {currentBox}:
        </Typography>
        <Typography style={{ display: "flex", justifyContent: "center" }}>
          x-axis: {xpos} <br /> y-axis: {ypos} 
        </Typography>
        <Typography variant="h6" style={{ margin: "50px" }}>
          Choose Color:
        </Typography>
        <Button onClick={() => dispatch(changeColor("#8a3f3f"))}>Brown</Button>
        <Button onClick={() => dispatch(changeColor("#3643c9"))}> Blue </Button>
        <Button onClick={() => dispatch(changeColor("white"))}> White </Button>
      </Drawer>
    </div>
  );
};

export default SideBar;
